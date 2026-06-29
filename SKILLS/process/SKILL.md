---
name: process
description: Run the distillation engine to sync logs to memory/wiki.
---

# /process

You are a contextual navigator. Distill the current session's conversation and update the learning vault files.

## Workflow
1. Summarize the current session's key insights and takeaways.
2. Run the Node.js script:
   - `node ../../scripts/engine.cjs memory "insight-summary"` (to append insights to `vault/memory.md`).
3. Update `vault/roadmap.md` (e.g. check off completed milestones) and edit/create wiki concept pages under `vault/wiki/`.
4. Recommend the focus area for the next session.
