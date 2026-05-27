// Sliding-window in-memory rate limiter.
// NOTE: In-memory only — resets per serverless container and does not
// protect against distributed attacks across multiple Vercel instances.
// For production scale, replace with Upstash Redis:
//   https://upstash.com/docs/redis/sdks/ratelimit-ts/overview
// Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in Vercel env vars.

const store = new Map<string, number[]>()

// Periodic cleanup: purge stale entries every 5 minutes to prevent unbounded memory growth
// This is important in long-running containers (e.g. Next.js dev server or warm Vercel instances)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    const maxWindow = 60 * 60_000 // 1 hour — the widest window we use
    store.forEach((hits: number[], key: string) => {
      const fresh = hits.filter((t: number) => t > now - maxWindow)
      if (fresh.length === 0) store.delete(key)
      else store.set(key, fresh)
    })
  }, 5 * 60_000) // run every 5 minutes
}

/**
 * Returns true if the request is allowed, false if rate-limited.
 * @param key      Unique identifier (e.g. `session:${userId}` or `wallet:${userId}`)
 * @param limit    Max requests per window
 * @param windowMs Window size in milliseconds
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const hits = (store.get(key) ?? []).filter(t => t > now - windowMs)
  if (hits.length >= limit) return false
  hits.push(now)
  store.set(key, hits)
  return true
}
