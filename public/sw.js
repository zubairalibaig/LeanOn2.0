// LeanOn service worker — minimal, deliberately NON-CACHING.
//
// Its ONLY job is to satisfy Chrome's PWA-installability requirement (a
// registered service worker with a fetch handler), which is what makes the
// site wrappable as a TWA / installable to the home screen.
//
// It does NOT cache anything. LeanOn is a real-time human-support app:
// sessions, wallet balance, listener availability and OTP all MUST hit the
// network every time. A caching SW here would resurface exactly the kind of
// stale-state bugs (offline-looking listeners, stale balance) we work hard to
// avoid — so this is intentionally a thin network passthrough.

self.addEventListener('install', () => {
  // Activate immediately — no waiting for old tabs to close.
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  // Take control of open clients, and proactively delete any cache a previous
  // version of this SW might have created, so we never serve stale content.
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  // A fetch handler must EXIST for installability. We only intercept top-level
  // navigations, and always go to the network. On a network failure we return
  // a tiny inline offline notice instead of a broken page — no caching.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(
        () =>
          new Response(
            '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
              '<title>Offline · LeanOn</title>' +
              '<div style="font-family:system-ui,sans-serif;max-width:420px;margin:16vh auto;padding:0 24px;text-align:center;color:#0F4867">' +
              '<div style="font-size:44px;margin-bottom:12px">🌙</div>' +
              '<h1 style="font-size:20px;margin:0 0 8px">You\'re offline</h1>' +
              '<p style="font-size:15px;color:#5A7A8A;line-height:1.6;margin:0">Reconnect to reach your listener. LeanOn needs a live connection for sessions.</p>' +
              '</div>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          )
      )
    )
  }
  // All other requests (assets, API, XHR) are left to the browser — untouched.
})
