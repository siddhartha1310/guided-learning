import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Manages the Adaptive Knowledge Vault files.
 */
export class VaultManager {
  private vaultRoot: string;

  constructor(vaultRoot: string) {
    this.vaultRoot = vaultRoot;
  }

  /**
   * Initializes the vault if it doesn't exist.
   */
  async init(templatesPath: string): Promise<void> {
    await fs.ensureDir(this.vaultRoot);
    await fs.ensureDir(path.join(this.vaultRoot, 'wiki'));
    await fs.ensureDir(path.join(this.vaultRoot, 'logs'));
    await fs.ensureDir(path.join(this.vaultRoot, 'raw'));

    const files = ['goal.md', 'roadmap.md', 'memory.md'];
    for (const file of files) {
      const filePath = path.join(this.vaultRoot, file);
      if (!(await fs.pathExists(filePath))) {
        const templatePath = path.join(templatesPath, `${file.split('.')[0]}-template.md`);
        if (await fs.pathExists(templatePath)) {
          await fs.copy(templatePath, filePath);
        }
      }
    }
  }

  /**
   * Appends an insight to memory.md
   */
  async appendMemory(insight: string): Promise<void> {
    const memoryPath = path.join(this.vaultRoot, 'memory.md');
    await fs.appendFile(memoryPath, `\n- ${insight}\n`);
  }

  /**
   * Updates a milestone in roadmap.md
   */
  async updateMilestone(milestone: string, status: 'Completed' | 'In Progress' | 'Pending'): Promise<void> {
    const roadmapPath = path.join(this.vaultRoot, 'roadmap.md');
    let content = await fs.readFile(roadmapPath, 'utf-8');
    
    const regex = new RegExp(`- \\[ [ x]?\\] \\*\\*${milestone}\\*\\*`, 'g');
    const newCheckbox = status === 'Completed' ? '- [x]' : '- [ ]';
    content = content.replace(regex, `${newCheckbox} **${milestone}**`);
    
    await fs.writeFile(roadmapPath, content);
  }
}
