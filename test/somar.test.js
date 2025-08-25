import test from 'node:test';
import assert from 'node:assert/strict';
import { somar } from '../src/somar.js';

test('somar funciona', () => {
  assert.equal(somar(2, 3), 5);
});
