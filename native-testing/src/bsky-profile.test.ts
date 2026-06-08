import { describe, it } from 'node:test';
import assert from 'node:assert';
import createFetchCache from 'fetch-mock-cache/runtimes/node';
import FsStore from 'fetch-mock-cache/stores/fs';
import { BskyProfileClient } from './bsky-profile.js';

/** Persisted under fixtures/http so cached responses can be committed to version control. */
const fetchCache = createFetchCache({
  Store: [FsStore, { location: 'fixtures/http' }],
});

describe('BskyProfileClient', () => {
  it('getProfile(actor) fetches and returns profile', async (t) => {
    t.mock.method(globalThis, 'fetch', fetchCache);

    const client = new BskyProfileClient();
    const profile = await client.getProfile('scottnath.com');

    assert.strictEqual(profile.handle, 'scottnath.com');
    assert.ok(profile.did.startsWith('did:'));
    assert.strictEqual(typeof profile.followersCount, 'number');
  });

  it('configurable default actor', async (t) => {
    t.mock.method(globalThis, 'fetch', fetchCache);

    const client = new BskyProfileClient(
      'https://public.api.bsky.app',
      'scottnath.com',
    );
    const profile = await client.getProfile();

    assert.strictEqual(profile.handle, 'scottnath.com');
  });

  it('getProfile() without actor and no default throws', async () => {
    const client = new BskyProfileClient();
    await assert.rejects(
      () => client.getProfile(),
      /actor is required/,
    );
  });
});
