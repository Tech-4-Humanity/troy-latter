import os, json, csv, datetime, hashlib, subprocess, re
from pathlib import Path

# minimal csv loader that preserves your headers exactly
def load_matrix(csv_path):
    rows = []
    if not Path(csv_path).exists():
        return rows
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append(r)
    return rows

def write_matrix(csv_path, rows):
    if not rows:
        return
    fieldnames = list(rows[0].keys())
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)

def ensure_columns(row):
    # your exact dataset columns
    cols = [
        "skill","domain","rating","status","trend","proof","source_cv","recency_year",
        "role_alignment","evidence_level","impact_metric","seniority_band",
        "skill_usage_count","market_trend","alignment_score","Certification",
        "Proficiency Level","Project Examples","Job Keywords Matched","Transferability",
        "Endorsements Count","Tools Used","Training Needed","last_updated","source_jd","auto_weight"
    ]
    for c in cols:
        if c not in row:
            row[c] = ""
    return row, cols

def read_text(path):
    return Path(path).read_text(encoding="utf-8")

def sha_id(s):
    return hashlib.sha256(s.encode()).hexdigest()[:8]

def call_llm_extract(jd_text, prompt_path):
    # placeholder
    # expects a pre generated jd_skills.json if no api is wired
    # if jd_skills.json exists use it, else fallback to a simple keyword pass
    stub = Path("jd_skills.json")
    if stub.exists():
        return json.loads(stub.read_text(encoding="utf-8"))
    # naive fallback
    tokens = re.findall(r"[A-Za-z][A-Za-z0-9\+\.\- ]{2,}", jd_text)
    uniq = sorted(set(t.strip() for t in tokens if len(t.strip()) > 2))[:50]
    skills = [{"skill": s, "domain": "Unknown", "weight": 0.6, "relevance_note": "", "keywords": [s]} for s in uniq]
    return {"job_id": sha_id(jd_text), "skills": skills, "top_keywords": uniq[:10]}

def upsert_skill(rows, skill_obj, job_id, year, weight_gain_factor):
    name = skill_obj["skill"].strip()
    domain = skill_obj.get("domain","Unknown")
    weight = float(skill_obj.get("weight", 0.8))
    idx = next((i for i,r in enumerate(rows) if r.get("skill","").strip().lower() == name.lower()), None)
    if idx is None:
        row = {
          "skill": name,
          "domain": domain,
          "rating": "3",
          "status": "Emerging",
          "trend": "Rising",
          "proof": "LLM JD extraction",
          "source_cv": "",
          "recency_year": str(year),
          "role_alignment": "Pending",
          "evidence_level": "Low",
          "impact_metric": "",
          "seniority_band": "Intermediate",
          "skill_usage_count": "1",
          "market_trend": "Rising",
          "alignment_score": f"{70 + weight*weight_gain_factor:.2f}",
          "Certification": "",
          "Proficiency Level": "Intermediate",
          "Project Examples": "",
          "Job Keywords Matched": ", ".join(skill_obj.get("keywords",[])),
          "Transferability": "",
          "Endorsements Count": "0",
          "Tools Used": "",
          "Training Needed": "Planned",
          "last_updated": datetime.datetime.utcnow().isoformat(),
          "source_jd": job_id,
          "auto_weight": f"{weight:.2f}"
        }
        row,_ = ensure_columns(row)
        rows.append(row)
        return "added", weight*weight_gain_factor
    else:
        r = rows[idx]
        usage = int(r.get("skill_usage_count","0")) + 1
        curr = float(r.get("alignment_score","70") or 70)
        new_score = min(100.0, curr + weight*weight_gain_factor)
        r["skill_usage_count"] = str(usage)
        r["recency_year"] = str(year)
        r["trend"] = "Rising"
        r["alignment_score"] = f"{new_score:.2f}"
        r["last_updated"] = datetime.datetime.utcnow().isoformat()
        r["source_jd"] = job_id
        r["auto_weight"] = f"{weight:.2f}"
        rows[idx],_ = ensure_columns(r)
        return "touched", new_score - curr

def regenerate_cv(matrix_rows, settings):
    top = [r for r in matrix_rows if float(r.get("alignment_score","0") or 0) >= settings["min_alignment_to_show"]]
    top = sorted(top, key=lambda r: (-float(r.get("alignment_score","0") or 0), -int(r.get("skill_usage_count","0") or 0)))[:settings["top_skill_count"]]
    skills_lines = [f"• {r['skill']}  {r.get('domain','')}".strip() for r in top]
    skills_section = "\n".join(skills_lines) if skills_lines else "• Skills available on request"

    jd_alignment = "Meets core requirements. Live skills feed active."
    summary = "Senior technology leader. AI architecture. Cloud modernisation. Government and regulated sector delivery."

    token_map = json.loads(Path(settings["token_map_path"]).read_text(encoding="utf-8"))
    tpl = read_text(settings["cv_template_path"])
    cv = tpl.replace(token_map["skills_section_token"], skills_section)
    cv = cv.replace(token_map["jd_alignment_token"], jd_alignment)
    cv = cv.replace(token_map["summary_token"], summary)
    Path(settings["cv_output_path"]).write_text(cv, encoding="utf-8")

def log_metrics_csv(updated_events, job_id):
    path = Path("skills_metrics_log.csv")
    header = ["job_id","skill","action","confidence_score","alignment_delta","trend_delta","timestamp"]
    new = []
    ts = datetime.datetime.utcnow().isoformat()
    for e in updated_events:
        new.append({
          "job_id": job_id,
          "skill": e["skill"],
          "action": e["action"],
          "confidence_score": "95",
          "alignment_delta": f"{e.get('delta',0):.2f}",
          "trend_delta": "Rising" if e["action"]=="added" else "",
          "timestamp": ts
        })
    write_header = not path.exists()
    with path.open("a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=header)
        if write_header:
            w.writeheader()
        for r in new:
            w.writerow(r)

def main(jd_path, settings_path="config/settings.json"):
    settings = json.loads(Path(settings_path).read_text(encoding="utf-8"))
    matrix_path = settings["matrix_csv_path"]
    jd_text = read_text(jd_path)
    job_id = sha_id(jd_text)
    data = call_llm_extract(jd_text, settings["jd_prompt_path"])
    year = datetime.datetime.utcnow().year

    rows = load_matrix(matrix_path)
    prototype = {
      "skill":"", "domain":"", "rating":"", "status":"", "trend":"", "proof":"", "source_cv":"", "recency_year":"",
      "role_alignment":"", "evidence_level":"", "impact_metric":"", "seniority_band":"", "skill_usage_count":"",
      "market_trend":"", "alignment_score":"", "Certification":"", "Proficiency Level":"", "Project Examples":"",
      "Job Keywords Matched":"", "Transferability":"", "Endorsements Count":"", "Tools Used":"", "Training Needed":"",
      "last_updated":"", "source_jd":"", "auto_weight":""
    }
    if not rows:
        # start file with header
        rows = [prototype]
        write_matrix(matrix_path, rows)
        rows = []

    updated = []
    for s in data.get("skills", []):
        action, delta = upsert_skill(rows, s, job_id, year, settings["weight_gain_factor"])
        updated.append({"skill": s["skill"], "action": action, "delta": delta})

    if rows:
        write_matrix(matrix_path, rows)

    log_metrics_csv(updated, job_id)
    regenerate_cv(rows, settings)
    print(f"Processed JD {job_id}. Updates {len(updated)}. CV refreshed at {settings['cv_output_path']}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("usage: python scripts/jd_to_cv_loop.py path_to_JD.txt")
        sys.exit(1)
    main(sys.argv[1])
