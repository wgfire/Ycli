#!/usr/bin/env node
const chalk = require('chalk')
const program = require('commander');
// const checkVersion = require('../lib/check-version');
/**
 * Usage.
 */

program
  .option('-baseFont', '基础Vue框架前端项目')
 

/**
 * Help.
 */

program.on('--help', function () {
  console.log()
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # 基础Vue框架前端项目'))
  console.log('    $ Bcli init')
  console.log()
//   console.log(chalk.gray('    # 创建带仪表盘功能的项目'))
//   console.log('    $ Bcli init --dashboard')
//   console.log()
});

program.parse(process.argv);
// checkVersion(() => void require('../lib/init')(program));
