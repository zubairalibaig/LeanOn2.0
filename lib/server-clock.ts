'use client'

// Server time for request countdowns. Request deadlines are server timestamps
// (sessions.created_at), but countdowns ran on the phone's clock — a phone a
// few minutes fast showed a request as already expired and auto-cancelled it.
// One call to the uncached /api/time gives the server's clock; we keep the offset.

let offsetMs = 0
let syncing: Promise<void> | null = null

export function syncServerClock(): Promise<void> {
  if (syncing) return syncing
  syncing = (async () => {
    try {
      const t0 = Date.now()
      const res = await fetch('/api/time', { cache: 'no-store' })
      const t1 = Date.now()
      if (!res.ok) { syncing = null; return }
      const { now } = await res.json() as { now?: unknown }
      if (typeof now !== 'number' || !Number.isFinite(now)) { syncing = null; return }
      // Assume the server stamped the time halfway through the round trip.
      const est = now - (t0 + t1) / 2
      // Ignore offsets too small to matter (network jitter) and implausible ones.
      offsetMs = Math.abs(est) > 2000 && Math.abs(est) < 6 * 60 * 60_000 ? est : 0
    } catch {
      syncing = null // retry on the next call
    }
  })()
  return syncing
}

export function serverNow(): number {
  return Date.now() + offsetMs
}
