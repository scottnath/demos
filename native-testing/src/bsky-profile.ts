const BASE_URL = 'https://public.api.bsky.app';

/** Minimal shape for Bluesky actor profile (app.bsky.actor.getProfile). */
export interface BskyProfile {
  did: string;
  handle: string;
  displayName?: string;
  avatar?: string;
  followersCount?: number;
  followsCount?: number;
  postsCount?: number;
  [key: string]: unknown;
}

/** Fetches Bluesky actor profile from the public API. */
export class BskyProfileClient {
  constructor(
    private readonly baseUrl = BASE_URL,
    private readonly defaultActor?: string,
  ) {}

  async getProfile(actor?: string): Promise<BskyProfile> {
    const a = actor ?? this.defaultActor;
    if (!a) throw new Error('actor is required');
    const url = `${this.baseUrl}/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(a)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return res.json() as Promise<BskyProfile>;
  }
}
