# Vault Organization & Initialization Rules

## 1. Directory Structure
- `/vault/`: The root of the knowledge base.
- `/vault/wiki/`: Contains atomic concept files (e.g., `vault/wiki/RAG.md`).
- `/vault/logs/`: Contains dated session logs (e.g., `vault/logs/2026-06-01.md`).
- `/vault/raw/`: The ingestion zone for external reference materials (PDFs, images, raw datasets, markdown docs).

## 2. File Initialization Rules
- If `/vault/` does not exist, it must be created during `/start-goal`.
- If `goal.md`, `roadmap.md`, or `memory.md` are missing, they must be generated using the templates in the `references/` folder.
- `wiki/`, `logs/`, and `raw/` directories must be created if they do not exist.

## 3. Reference Handling
- When the user adds files to `/vault/raw/`, the AI should scan the directory at the start of the session and ask if it should ingest or summarize the new materials to update the `roadmap.md` or `memory.md`.

