# Native Node.js testing demo

Node 24, native test runner (`node --test`), module mocking, and coverage. No Jest or Vitest.

## Setup

- Node 24 (use `nvm use` or set from `.nvmrc`).
- `npm install`

## Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run tests (direct `node --test` + tsx glob). |
| `npm run test:config` | Run tests via `test.config.js` (spec reporter, Node 24 glob). |
| `npm run test:coverage` | Same as test:config with coverage. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run build` | Compile to `./dist` (excludes `*.test.ts`). |

## What’s demonstrated

- **Two test styles:** direct `node --test` vs config-file runner with `run()` and spec reporter.
- **Class + subclass:** `Greeter` and `LoudGreeter`; subclass test uses `MockGreeter` (injected) so the extending class is tested in isolation.
- **fs mocking:** `fs-example` uses `node:fs` directly; tests use the `mock-fs` package to replace the fs binding (`beforeEach` / `afterEach` with `mock.restore()`).
- **fetch mocking:** `bsky-profile` fetches from the [Bluesky public API](https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile); tests use [`fetch-mock-cache`](https://www.npmjs.com/package/fetch-mock-cache) with the **fs store** so cached responses are saved under `fixtures/http/`. Commit that directory to keep mock data in version control; tests then run fast and offline.
- **DRY:** Shared mocks only (`MockGreeter` in `src/utils/mocks/`); no duplicated mock logic.
