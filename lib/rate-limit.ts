// Sliding-window rate limiter with optional Upstash Redis backend.
// Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in Vercel env vars
// to enable distributed rate limiting across serverless instances.
// Without those vars, falls back to in-memory (per-container, dev/local friendly).

/* eslint-disable @typescript-eslint/no-explicit-any */
let redisLimiterCache: Record<string, any> | null = null

function getRedisLimiter() {
  if (redisLimiterCache !== null) return redisLimiterCache

  try {
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
      const { Redis } = require('@upstash/redis')
      const { Ratelimit } = require('@upstash/ratelimit')
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
      redisLimiterCache = { Redis, Ratelimit, redis }
      return redisLimiterCache
    }
  } catch {
    // Fall back to in-memory
  }

  redisLimiterCache = {}
  return redisLimiterCache
}

// ── In-memory fallback (per-container, no cross-instance sync)
const store = new Map<string, number[]>()

// Periodic cleanup: purge stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    const maxWindow = 60 * 60_000 // 1 hour
    store.forEach((hits: number[], key: string) => {
      const fresh = hits.filter((t: number) => t > now - maxWindow)
      if (fresh.length === 0) store.delete(key)
      else store.set(key, fresh)
    })
  }, 5 * 60_000)
}

/**
 * Synchronous in-memory rate limiter.
 * Returns true if the request is allowed, false if rate-limited.
 * @param key      Unique identifier (e.g. `session:${userId}`)
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

/**
 * Async rate limiter — uses Upstash Redis when configured, falls back to in-memory.
 * Prefer this in API routes for production correctness across serverless instances.
 *
 * NOTE: Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment variables
 * to enable distributed rate limiting.
 */
export async function checkRateLimitAsync(key: string, max: number, windowMs: number): Promise<boolean> {
  const rl = getRedisLimiter()
  if (rl.Ratelimit && rl.redis) {
    try {
      const limiter = new rl.Ratelimit({
        redis: rl.redis,
        limiter: rl.Ratelimit.slidingWindow(max, `${windowMs}ms`),
      })
      const { success } = await limiter.limit(key)
      return success
    } catch {
      // Fall through to in-memory on Redis error
    }
  }
  return checkRateLimit(key, max, windowMs)
}
