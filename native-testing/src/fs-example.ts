import * as fs from 'node:fs';

/**
 * Writes a message to a file. Uses fs directly (mock-fs in tests replaces the fs binding).
 */
export function writeMessage(path: string, text: string): void {
  fs.writeFileSync(path, text, 'utf-8');
}
