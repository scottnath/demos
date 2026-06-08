import type { GreeterLike } from '../../class-example.js';

/** Mock Greeter for testing LoudGreeter in isolation. */
export class MockGreeter implements GreeterLike {
  private returnValue = 'Hello, {{name}}!';

  setGreetReturn(value: string): void {
    this.returnValue = value;
  }

  greet(name: string): string {
    return this.returnValue.replace('{{name}}', name);
  }

  reset(): void {
    this.returnValue = 'Hello, {{name}}!';
  }
}
