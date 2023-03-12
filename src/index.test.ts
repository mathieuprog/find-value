import { expect, test } from 'vitest';
import findValue from '.';

test('findValue', () => {
  expect(findValue([1, 2, 3], (n) => n > 2 && n * 2)).toEqual(6);
  expect(findValue([1, 2, 3], (n) => n > 3 && n * 2)).toEqual(undefined);
});
