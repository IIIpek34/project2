import { describe, test, expect } from '@jest/globals';
import compare from '../src/index.js';

describe('index.js exports', () => {
  test('should export the compare function', () => {
    expect(compare).toBeDefined();
    expect(typeof compare).toBe('function');
  });
  test('compare function should work as expected', () => {
    const file1 = '{ "key": "value" }';
    const file2 = '{ "key": "new value" }';
    const result = compare(file1, file2, 'plain');
    expect(result).toBe("Property 'key' was updated. From 'value' to 'new value'");
  });
});
