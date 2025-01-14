import { describe, test, expect } from '@jest/globals';
import { diff, stylishOutput, plainOutput } from '../__fixtures__/formattersData.js';
import formatters from '../src/formatters.js';

describe('formatters', () => {
  test('formatStylish', () => {
    expect(formatters.format(diff, 'stylish')).toBe(stylishOutput);
  });
  test('formatPlain', () => {
    expect(formatters.format(diff, 'plain')).toBe(plainOutput);
  });
  test('format', () => {
    expect(formatters.format(diff)).toBe(stylishOutput);
  });
});
