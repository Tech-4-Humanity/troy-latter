#!/usr/bin/env python3
import os, json, csv, datetime, hashlib
from pathlib import Path
from typing import List, Dict

# ---------- CONFIG ----------
INPUT_DIR = "ingest"
OUTPUT_DIR = "outputs"
CV_MASTER_JSON = f"{OUTPUT_DIR}/cv_master.json"
SKILLS_MASTER_CSV = f"{OUTPUT_DIR}/skills_master.csv"
MODEL = "gpt-4o-mini"     # placeholder for your extractor model
# ----------------------------

def extract_text_from_file(path: Path) -> str:
    """Read text from PDF, DOCX, or MD using simple libs."""
    ext = path.suffix.lower()
    if ext == ".pdf":
        from PyPDF2 import PdfReader
        text = "".join(page.extract_text() or "" for page in PdfReader(path).pages)
    elif ext == ".docx":
        from docx import Document
        doc = Document(path)
        text = "\n".join(p.text for p in doc.paragraphs)
    else:
        text = path.read_text(encoding="utf-8", errors="ignore")
    return text.strip()

def call_llm_extract(cv_text: str) -> Dict:
    """Mocked extraction. Replace with your LLM or API call."""
    # In production, send cv_text + structured prompt to OpenAI or Gemini API.
    # Expect valid JSON matching the extraction schema.
    # Here we fake a minimal parse for demonstration.
    lines = [l.strip() for l in cv_text.splitlines() if l.strip()]
    name = lines[0] if lines else "Unknown"
    skills = [{"skill": "Cloud Architecture", "domain": "Cloud", "proficiency": "Expert"}]
    return {
        "name": name,
        "title": "Technology Leader",
        "summary": "Extracted summary placeholder.",
        "experience": [],
        "skills": skills,
        "quantifiedMetrics": []
    }

def merge_skills(existing: List[Dict], new: List[Dict], source_cv: str) -> List[Dict]:
    merged = {r["skill"].lower(): r for r in existing}
    year = datetime.datetime.now().year
    for s in new:
        key = s["skill"].lower()
        if key in merged:
            row = merged[key]
            row["skill_usage_count"] = int(row.get("skill_usage_count", 0)) + 1
            row["alignment_score"] = min(100, float(row.get("alignment_score", 70)) + 2)
            row["trend"] = "Stable" if row["skill_usage_count"] > 3 else "Rising"
        else:
            merged[key] = {
                "skill": s["skill"],
                "domain": s.get("domain", "Unknown"),
                "status": "Confirmed",
                "trend": "Rising",
                "source_cv": source_cv,
                "recency_year": year,
                "skill_usage_count": 1,
                "alignment_score": 75,
                "certification": s.get("certification", ""),
                "proficiency": s.get("proficiency", "Intermediate"),
                "project_examples": s.get("project_examples", "")
            }
    return list(merged.values())

def save_csv(rows: List[Dict], path: str):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    if not rows:
        print("No rows to save.")
        return
    keys = list(rows[0].keys())
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(rows)

def parse_all():
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    cv_master = []
    skills_all: List[Dict] = []

    files = list(Path(INPUT_DIR).glob("*.*"))
    if not files:
        print(f"No CVs found in {INPUT_DIR}/")
        return

    for f in files:
        print(f"Processing {f.name}")
        text = extract_text_from_file(f)
        cv_data = call_llm_extract(text)
        cv_data["source_file"] = f.name
        cv_master.append(cv_data)
        skills_all = merge_skills(skills_all, cv_data["skills"], f.name)

    # Save aggregated outputs
    Path(CV_MASTER_JSON).write_text(json.dumps(cv_master, indent=2), encoding="utf-8")
    save_csv(skills_all, SKILLS_MASTER_CSV)
    print(f"\nParsed {len(cv_master)} CVs → {len(skills_all)} unique skills")
    print(f"Outputs:\n- {CV_MASTER_JSON}\n- {SKILLS_MASTER_CSV}")

if __name__ == "__main__":
    parse_all()
