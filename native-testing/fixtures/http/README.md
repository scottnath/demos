# HTTP response cache (fetch-mock-cache)

Cached API responses used by `fetch-mock-cache` when running tests. Commit these files so tests run fast and offline for everyone and in CI.

- Generated on first test run (real request); subsequent runs use the cache.
- To refresh a response, delete the corresponding `.json` file and run the tests again.
