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

## 2. Antigravity CLI (`agy`) Setup

For the Antigravity CLI, you can load Guided Learning either as a global skill or workspace-specific configuration:

### Option A: Global Skill Installation
1. Locate your global Antigravity config directory (usually `~/.gemini/config/` or `C:\Users\<username>\.gemini\config\`).
2. Create a subfolder: `skills/guided-learning/`.
3. Copy **[SKILL.md](SKILL.md)**, **[references/](references/)**, and **[scripts/](scripts/)** from this repository into that folder.
4. Run `agy` and type `/skills` to verify it is loaded.

### Option B: Workspace-Specific Rules Setup
1. Create a folder for your learning project.
2. Create a `.agents/` folder in the root of your project.
3. Copy **[AGENTS.md](AGENTS.md)** from this repository and save it as `.agents/AGENTS.md`.
4. Copy the **[vault/](vault/)** template folder into your project root.
5. Start `agy` in your project folder, and the agent will automatically read the rules to guide your learning.

---

## 3. Claude Code Setup

Claude Code automatically picks up workspace rules from a `CLAUDE.md` file in the root of your project:

1. Create a folder for your learning project (e.g., `my-learning-vault/`).
2. Copy the **[CLAUDE.md](CLAUDE.md)** file from this repository into the root of your new folder.
3. Copy the **[vault/](vault/)** template folder from this repository into your folder.
4. Run `claude` in your folder and ask the agent:
   * *"I want to start a new learning goal. Please initialize my vault."* (The agent will read `CLAUDE.md` and guide you through `/start-goal` intake).

---

## 4. OpenCode Setup

OpenCode reads workspace guidelines from `agent.md` in your project root:

1. Create a folder for your learning project.
2. Copy the **[agent.md](agent.md)** file from this repository into the root of your folder.
3. Copy the **[vault/](vault/)** template folder from this repository into your folder.
4. Open your OpenCode workspace and ask the agent to initialize the learning goal.

---

## 5. Codex / GitHub Copilot Setup

For Codex and GitHub Copilot Chat, repository-wide rules are loaded from `.github/copilot-instructions.md`:

1. Create a folder for your learning project.
2. Create a `.github/` folder in your project root.
3. Copy **[copilot-instructions.md](copilot-instructions.md)** from this repository and rename/save it as `.github/copilot-instructions.md` in your project.
4. Copy the **[vault/](vault/)** template folder into your project root.
5. Prompt your assistant in chat to initialize your learning goal.
