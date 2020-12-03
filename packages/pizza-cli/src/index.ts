#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
// import path from 'path';
import commander from 'commander';

clear();
console.log(
  chalk.red(
    figlet.textSync('pizza-cli', {
      horizontalLayout: 'full',
    }),
  ),
);

commander
  .version('0.0.1')
  .description("An example CLI for ordering pizza's")
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (commander.peppers) console.log('  - peppers');
if (commander.pineapple) console.log('  - pineapple');
if (commander.bbq) console.log('  - bbq');
const cheese = true === commander.cheese ? 'marble' : commander.cheese || 'no';
console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
