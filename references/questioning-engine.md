# Next Question Engine Heuristics

## 1. State Analysis
- **Goal Check**: Is the current discussion still aligned with `goal.md`?
- **Roadmap Check**: Which milestone is active? Are there prerequisite gaps in `memory.md`?
- **Memory Check**: What are the latest "Unresolved Questions" or "Contradictions"?

## 2. Gap Identification
- **Direct Gaps**: Concepts mentioned in the roadmap but missing from `memory.md`.
- **Depth Gaps**: Concepts in `memory.md` with low understanding levels (Bloom's Level 1-2) that need to be elevated.
- **Dependency Gaps**: Concepts that are prerequisites for the next milestone.

## 3. De-duplication Logic
- **Historical Scan**: Check `logs/` and `memory.md` for already asked or resolved questions.
- **Confidence Threshold**: If a concept has a "High" understanding level, do not ask basic questions about it.

## 4. Question Synthesis
- **Template-Based**:
  - *Diagnostic*: "How would you explain [Concept] in your own words?"
  - *Operational*: "If you were to implement [Concept], what would be your first step?"
  - *Comparative*: "How does [Concept A] differ from [Concept B] in the context of our goal?"
- **Framework Overlay**:
  - Apply the active **Learning Framework** to the question structure (e.g., Use "Analyze" verbs if Bloom's Level 4 is active).
