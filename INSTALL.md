# Installation & Usage Guide: Guided Learning

This repository provides custom skill extensions and agent rule sets to turn your local project directory into an AI-guided learning environment using frameworks like **Gap Analysis** and **Bloom's Taxonomy**.

---

## 1. Gemini CLI Installation

To use this as a native skill in your Gemini CLI:

```bash
# 1. Install directly from GitHub
gemini skills install https://github.com/siddhartha1310/guided-learning --scope user

# 2. Reload skills to activate
/skills reload

# 3. Verify it is loaded
/skills list
```

Once installed, navigate to any empty folder where you want to start learning and run:
* **`/start-goal`** to initialize your vault and define your objectives.

---

## 2. Claude Code Setup

Claude Code automatically picks up workspace rules from a `CLAUDE.md` file in the root of your project:

1. Create a folder for your learning project (e.g., `my-learning-vault/`).
2. Copy the **[CLAUDE.md](CLAUDE.md)** file from this repository into the root of your new folder.
3. Copy the **[vault/](vault/)** template folder from this repository into your folder.
4. Run `claude` in your folder and ask the agent:
   * *"I want to start a new learning goal. Please initialize my vault."* (The agent will read `CLAUDE.md` and guide you through `/start-goal` intake).

---

## 3. OpenCode Setup

OpenCode reads workspace guidelines from `agent.md` in your project root:

1. Create a folder for your learning project.
2. Copy the **[agent.md](agent.md)** file from this repository into the root of your folder.
3. Copy the **[vault/](vault/)** template folder from this repository into your folder.
4. Open your OpenCode workspace and ask the agent to initialize the learning goal.

---

## 4. Codex / GitHub Copilot Setup

For Codex and GitHub Copilot Chat, repository-wide rules are loaded from `.github/copilot-instructions.md`:

1. Create a folder for your learning project.
2. Create a `.github/` folder in your project root.
3. Copy **[copilot-instructions.md](copilot-instructions.md)** from this repository and rename/save it as `.github/copilot-instructions.md` in your project.
4. Copy the **[vault/](vault/)** template folder into your project root.
5. Prompt your assistant in chat to initialize your learning goal.
