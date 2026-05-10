# CVs — Troy Latter

## Status
| Item | State |
|---|---|
| Master CV (docx) | PARTIAL — placeholders pending |
| Master CV (md source) | PARTIAL — placeholders pending |
| Generator (build_cv.js) | REAL — re-runnable |

## /dominate envelope classification (AOS v1.0 § 2)
| REAL criterion | This artefact |
|---|---|
| 1. Execution occurred | ✓ docx-validate PASSED, ledger row written |
| 2. Runtime exists | ◑ static doc — storage URL only |
| 3. Telemetry attached | ✗ no usage event tracking |
| 4. Recovery path validated | ◑ git revert is rollback; no kill switch |
| 5. Deployment live | ✓ commit_id present |
| 6. Value path measurable | ✗ no `revenue_events` row; will bind via `cv_registry.last_used_for` |
| 7. Continuity established | ✗ no auto-regeneration cron |

**Classification: PARTIAL** (4/7 unmet). Cannot promote to REAL until placeholders are filled, an applied-to job exists in `cv_registry.last_used_for`, and a value-path row lands.

## Open gaps (must close before REAL)
- `[email]` — Troy's preferred contact email
- `[phone]` — preferred contact number
- `[LinkedIn]` — public profile URL
- `20XX – 20XX` — actual employer names + tenure for prior roles (memory has "major enterprise technology organisations" only)
- Education / certifications block
- JD-targeted variant for LinkedIn job 4322101838 (JD inaccessible — robots.txt blocked fetch)

## Reusable assets
- `cvs/build_cv.js` — docx-js generator. Data-driven; new variant = edit data arrays, re-run.
- `cvs/Troy_Latter_CV.md` — markdown source of record.
- `cvs/Troy_Latter_CV.docx` — rendered binary.

## Receipt
See `t4h_canonical_changes` and `reality_ledger` rows linked at publish time (IDs in commit message).