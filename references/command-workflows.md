# Command Workflows

## /start-goal
### Intake Strategy
1. **Primary Goal**: Ask "What is your primary learning or project objective?"
2. **Success Criteria**: Ask "What does success look like? List 2-3 specific outcomes."
3. **Constraints**: Ask "Are there any constraints (time, tools, prior knowledge) I should know about?"
4. **Milestones**: Propose 3 initial milestones based on the goal. Ask the user to confirm or adjust them.

### Initialization
1. Use the templates in `references/` to create `vault/goal.md`, `vault/roadmap.md`, and `vault/memory.md`.
2. Populate `goal.md` with the captured data.
3. Initialize `roadmap.md` with the confirmed milestones.
4. Present the initialized roadmap and ask the first diagnostic question (e.g., "To get started, what is your current understanding of [Topic]?").

## /framework
1. Evaluate the current `goal.md` and `memory.md`.
2. Propose a Guidance and Learning framework pair (e.g., Gap Analysis + Bloom's).
3. Explain the rationale (e.g., "We are in the discovery phase, so Gap Analysis will help identify unknown unknowns").
4. If the user provides a framework, switch to it and update the active state.

## /next-question
1. Read the latest `memory.md` and `roadmap.md`.
2. Identify the highest priority "Gap" or "Unresolved Question".
3. Formulate a question that targets that specific gap using the active learning framework.

## /process
1. Summarize the current session's key takeaways.
2. Run the `engine.cjs` script to:
   - Append new insights to `memory.md`.
   - Update milestone status in `roadmap.md`.
   - Create/Update wiki pages in `vault/wiki/`.
3. Recommend the focus for the next session.

## /roadmap
1. Read `vault/roadmap.md`.
2. Present a high-level summary of completed vs. pending milestones.
3. Show the Mermaid diagram to visualize the path.

## /review-memory
1. Read `vault/memory.md`.
2. Provide a structured summary of the "Key Concepts" and "Insights" captured so far.
3. Highlight any remaining "Contradictions" or "Unresolved Questions".
