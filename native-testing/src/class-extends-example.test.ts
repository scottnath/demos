import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { LoudGreeter } from './class-extends-example.js';
import { MockGreeter } from './utils/mocks/mock-greeter.js';

describe('LoudGreeter', () => {
  describe('with MockGreeter (isolated)', () => {
    let mock: MockGreeter;

    beforeEach(() => {
      mock = new MockGreeter();
    });

    it('returns base greeting in uppercase', () => {
      mock.setGreetReturn('hi, {{name}}');
      const loud = new LoudGreeter(mock);
      assert.strictEqual(loud.greet('Bob'), 'HI, BOB');
    });

    it('uses configurable mock return', () => {
      mock.setGreetReturn('hey {{name}}');
      const loud = new LoudGreeter(mock);
      assert.strictEqual(loud.greet('x'), 'HEY X');
    });
  });

  describe('with default Greeter (integration)', () => {
    it('uppercases real Greeter output', () => {
      const loud = new LoudGreeter();
      assert.strictEqual(loud.greet('World'), 'HELLO, WORLD!');
    });
  });
});
