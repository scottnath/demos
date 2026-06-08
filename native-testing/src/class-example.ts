/** Interface so subclass can accept an injectable base for testing. */
export interface GreeterLike {
  greet(name: string): string;
}

/** Base greeter class. */
export class Greeter implements GreeterLike {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
