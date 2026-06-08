import { beforeEach, afterEach, describe, it } from 'node:test';
import assert from 'node:assert';
import * as fs from 'node:fs';
// Load mock-fs first so it can patch fs before code under test runs
import mock from 'mock-fs';
import { writeMessage } from './fs-example.js';

describe('fs-example', () => {
  beforeEach(() => {
    mock({});
  });

  afterEach(() => {
    mock.restore();
  });

  it('writes message to file', () => {
    writeMessage('msg.txt', 'hello');
    assert.strictEqual(fs.readFileSync('msg.txt', 'utf-8'), 'hello');
  });

  it('overwrites existing file', () => {
    writeMessage('out.txt', 'first');
    writeMessage('out.txt', 'second');
    assert.strictEqual(fs.readFileSync('out.txt', 'utf-8'), 'second');
  });
});
