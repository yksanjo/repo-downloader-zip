#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n📥 Repo Downloader ZIP v1.0.0\n'));
  console.log(chalk.yellow('Use: gh repo zipball owner/repo'));
}
if (require.main === module) main();
module.exports = { main };
