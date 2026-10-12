'use client'

// Server time for request countdowns. Request deadlines are server timestamps
// (sessions.created_at), but countdowns ran on the phone's clock — a phone a
// few minutes fast showed a request as already expired and auto-cancelled it.
// One HEAD of a static file gives the server's Date header; we keep the offset.

let offsetMs = 0
let syncing: Promise<void> | null = null

export function syncServerClock(): Promise<void> {
  if (syncing) return syncing
  syncing = (async () => {
    try {
      const t0 = Date.now()
      const res = await fetch('/manifest.json', { method: 'HEAD', cache: 'no-store' })
      const t1 = Date.now()
      const header = res.headers.get('date')
      const generated = header ? Date.parse(header) : NaN
      if (Number.isNaN(generated)) return
      // A CDN-cached response keeps the Date it was generated with and reports
      // how long it has been cached in Age — the current server time is Date + Age.
      const age = Number(res.headers.get('age') ?? 0)
      const server = generated + (Number.isFinite(age) && age > 0 ? age * 1000 : 0)
      // Date has 1-second resolution: assume mid-second.
      const est = server + 500 - (t0 + t1) / 2
      // Ignore offsets too small to matter, and implausibly large ones (a stale
      // header we can't correct) — falling back to the device clock.
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
