import { VaultManager } from './VaultManager.js';
import * as path from 'path';

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const vaultRoot = path.join(process.cwd(), 'vault');
  const templatesPath = path.join(__dirname, '../references');
  
  const manager = new VaultManager(vaultRoot);

  switch (command) {
    case 'init':
      await manager.init(templatesPath);
      console.log('Vault initialized.');
      break;
    case 'memory':
      const insight = args.slice(1).join(' ');
      await manager.appendMemory(insight);
      console.log('Memory updated.');
      break;
    case 'milestone':
      const [milestone, status] = args.slice(1);
      await manager.updateMilestone(milestone, status as any);
      console.log(`Milestone ${milestone} updated to ${status}.`);
      break;
    default:
      console.log('Unknown command.');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
