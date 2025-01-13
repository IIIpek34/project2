#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';
import compare from '../src/compare';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'Path to the first file')
  .argument('<filepath2>', 'Path to the second file')
  .option('-f, --format <type>', 'Output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const file1 = readFileSync(path.resolve(filepath1), 'utf-8');
    const file2 = readFileSync(path.resolve(filepath2), 'utf-8');
    const diff = compare(file1, file2, options.format);
    console.log(diff); // eslint-disable-line no-console
  });

program.parse();
