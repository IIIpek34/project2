import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import parser from '../src/parsers';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('parsers', () => {
  test('parser json', () => {
    const jsonData = readFixture('data.json');
    const expected = JSON.parse(jsonData);
    expect(parser.parse(jsonData)).toEqual(expected);
  });
  test('parser yaml', () => {
    const yamlData = readFixture('data.yaml');
    const expected = yaml.load(yamlData);
    expect(parser.parse(yamlData)).toEqual(expected);
  });
  test('parser yml', () => {
    const ymlData = readFixture('data.yaml');
    const expected = yaml.load(ymlData);
    expect(parser.parse(ymlData)).toEqual(expected);
  });
});
