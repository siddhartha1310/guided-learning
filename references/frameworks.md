# Framework Definitions & Selection Heuristics

## 1. Guidance Frameworks (The "What")
### Gap Analysis
- **Goal**: Identify the difference between the user's current knowledge and the target goal.
- **Use When**: Starting a new topic or when the roadmap feels stalled.

### Goal-Based Planning
- **Goal**: Decompose a large objective into actionable milestones.
- **Use When**: The primary goal is broad and needs structure.

### Decision Trees
- **Goal**: Navigate through complex choices or architectural decisions.
- **Use When**: The user is stuck between multiple implementation paths.

## 2. Learning Frameworks (The "How")
### Bloom’s Taxonomy
- **Goal**: Evaluate the depth of understanding (Remember -> Understand -> Apply -> Analyze -> Evaluate -> Create).
- **Use When**: Assessing mastery of a theoretical concept.

### Kolb’s Learning Cycle
- **Goal**: Cycle through Concrete Experience, Reflective Observation, Abstract Conceptualization, and Active Experimentation.
- **Use When**: Learning operational or hands-on skills (e.g., coding a RAG system).

### VARK (Visual, Aural, Read/Write, Kinesthetic)
- **Goal**: Adapt the explanation style to the user's preference.
- **Use When**: The user expresses confusion with the current explanation style.

## 3. Selection Heuristics
- **If Goal is New AND Knowledge is Low** → `Gap Analysis` + `Bloom's (Level 1-2)`.
- **If Goal is Broad AND Knowledge is Medium** → `Goal-Based Planning` + `Kolb's`.
- **If User is Stuck on a Choice** → `Decision Trees` + `Reflective Observation (Kolb)`.
- **If User is Coding** → `Active Experimentation (Kolb)` + `Bloom's (Apply)`.
