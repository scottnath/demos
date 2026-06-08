import type { GreeterLike } from './class-example.js';
import { Greeter } from './class-example.js';

/** Greeter that returns the base greeting in uppercase. */
export class LoudGreeter {
  private readonly base: GreeterLike;

  constructor(base?: GreeterLike) {
    this.base = base ?? new Greeter();
  }

  greet(name: string): string {
    return this.base.greet(name).toUpperCase();
  }
}
