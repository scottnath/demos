/**
 * Test configuration for Node.js test runner.
 * Run with: node --import tsx test.config.js
 */
import { run } from 'node:test';
import { spec } from 'node:test/reporters';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import process from 'node:process';

const config = {
  testDir: 'src',
  timeout: 30000,
  concurrency: true,
  coverage: process.argv.includes('--coverage'),
  coverageExcludeGlobs: ['**/*.test.ts', '**/mocks/**'],
};

/** Find all *.test.ts files under dir (Node 20+ compatible). */
async function findTestFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const path = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await findTestFiles(path)));
    } else if (e.name.endsWith('.test.ts')) {
      files.push(path);
    }
  }
  return files.sort();
}

async function runTests() {
  const testFiles = await findTestFiles(config.testDir);

  if (testFiles.length === 0) {
    console.error('No test files found matching:', config.pattern);
    process.exit(1);
  }

  console.log(`Found ${testFiles.length} test file(s)\n`);

  const stream = run({
    files: testFiles,
    timeout: config.timeout,
    concurrency: config.concurrency,
    coverage: config.coverage,
    coverageExcludeGlobs: config.coverageExcludeGlobs,
  });

  stream.compose(spec).pipe(process.stdout);

  stream.on('test:fail', () => {
    process.exitCode = 1;
  });
}

runTests().catch((err) => {
  console.error('Test runner error:', err);
  process.exit(1);
});
