import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import compare from '../src/compare.js';
import { stylishOutput, plainOutput } from '../__fixtures__/compareData.js';

const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('compare', () => {
  test('compare return stylish', () => {
    const file1 = readFixture('file1.json');
    const file2 = readFixture('file2.json');
    const expected = stylishOutput;

    const result = compare(file1, file2, 'stylish');
    expect(result).toBe(expected);
  });

  test('compare return plain', () => {
    const file1 = readFixture('file1.json');
    const file2 = readFixture('file2.json');
    const expected = plainOutput;

    const result = compare(file1, file2, 'plain');
    expect(result).toBe(expected);
  });
  test('compare return stylish YAML files', () => {
    const file1 = readFixture('file1.yaml');
    const file2 = readFixture('file2.yaml');
    const expected = stylishOutput;

    const result = compare(file1, file2);
    expect(result).toBe(expected);
  });
});
