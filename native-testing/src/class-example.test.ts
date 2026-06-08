import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Greeter } from './class-example.js';

describe('Greeter', () => {
  it('returns greeting with name', () => {
    const g = new Greeter();
    assert.strictEqual(g.greet('World'), 'Hello, World!');
  });

  it('greet uses given name', () => {
    const g = new Greeter();
    assert.strictEqual(g.greet('Alice'), 'Hello, Alice!');
  });
});
