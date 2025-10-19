# Hybrid CV Self-Learning System

## Overview
This system combines Python-based portable CV processing with Supabase web UI for a complete self-learning skills matrix.

## Quick Start

### 1. Local Python Setup
```bash
mkdir -p ingest outputs data/jd_inbox
pip install PyPDF2 python-docx
```

### 2. Process CVs
```bash
# Add CV files to ingest/
python scripts/parse_all_cvs.py

# Process job descriptions
python scripts/jd_to_cv_loop.py data/jd_inbox/role.txt
```

### 3. Web UI Sync
- Visit `/tools/skills-matrix`
- Click "Sync to CSV" to download current matrix
- Click "Sync from CSV" to upload Python-updated matrix

### 4. Automated Updates
GitHub Actions runs nightly at 1 PM UTC to:
1. Download matrix from Supabase
2. Process any new JDs in `data/jd_inbox/`
3. Upload updated matrix back to Supabase
4. Commit changes to repo

## Architecture
- **Python Scripts**: Portable, offline-capable CV/JD processing
- **Supabase**: Real-time web UI, analytics, storage
- **Edge Functions**: Bidirectional CSV ↔ database sync
- **GitHub Actions**: Automated nightly updates

## Files Created
- `scripts/parse_all_cvs.py` - Bulk CV parser
- `scripts/jd_to_cv_loop.py` - JD alignment engine
- `prompts/cv_extractor_prompt.txt` - LLM extraction prompt
- `config/settings.json` - System configuration
- `templates/cv_master.md` - CV template
- `supabase/functions/sync-csv-to-db/` - CSV import
- `supabase/functions/sync-db-to-csv/` - CSV export
