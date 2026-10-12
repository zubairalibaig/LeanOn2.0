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
      const server = header ? Date.parse(header) : NaN
      if (Number.isNaN(server)) return
      // The Date header has 1-second resolution: assume mid-second, and ignore
      // offsets too small to matter.
      const est = server + 500 - (t0 + t1) / 2
      offsetMs = Math.abs(est) > 2000 ? est : 0
    } catch {
      syncing = null // retry on the next call
    }
  })()
  return syncing
}

export function serverNow(): number {
  return Date.now() + offsetMs
}
