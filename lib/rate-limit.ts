// Sliding-window in-memory rate limiter.
// Resets per serverless container — sufficient for MVP abuse prevention.
// For production scale, replace backing store with Redis/Upstash.
const store = new Map<string, number[]>()

/**
 * Returns true if the request is allowed, false if rate-limited.
 * @param key      Unique identifier (e.g. userId or IP)
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
