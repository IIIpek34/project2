import { describe, test, expect } from '@jest/globals';
import { execSync } from 'child_process';
import path from 'path';
import { stylishOutput, plainOutput } from '../__fixtures__/compareData.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('gendiff CLI', () => {
  const execGendiff = (args) => execSync(`node bin/diff.js ${args}`, { encoding: 'utf-8' });

  test('compare JSON files (stylish format)', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    const expected = stylishOutput;

    const result = execGendiff(`${file1} ${file2} -f stylish`);
    expect(result.trim()).toBe(expected);
  });
  test('compare YAML files (plain format)', () => {
    const file1 = getFixturePath('file1.yaml');
    const file2 = getFixturePath('file2.yaml');
    const expected = plainOutput;

    const result = execGendiff(`${file1} ${file2} -f plain`);
    expect(result.trim()).toBe(expected);
  });
});
