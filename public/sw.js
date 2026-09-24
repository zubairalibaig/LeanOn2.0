// LeanOn service worker — deliberately NON-CACHING, and the ONLY service worker.
//
// Jobs:
//  1. Satisfy Chrome's PWA-installability requirement (a fetch handler), which
//     is what makes the site installable / wrappable as the Play Store TWA.
//  2. Show push notifications (session requests to listeners, "listener is
//     available" to seekers) — including when no LeanOn tab is open.
//
// WHY PUSH LIVES HERE (2026-09-24): there used to be a SECOND worker,
// /firebase-messaging-sw.js, registered at the same scope "/". A scope holds
// ONE worker, so each registration replaced the other: every full page load
// re-registered this file (app/components/ServiceWorkerRegister.tsx), which
// silently removed the push handler that "Go online" had installed. Pushes
// then reached a worker with no push handler and no request alert was shown.
// Now lib/firebase-client.ts registers THIS file too, and
// /firebase-messaging-sw.js just imports it for old registrations.
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

// ── Push ──────────────────────────────────────────────────────────────────────
// FCM delivers a JSON payload: { data: {...}, notification?: {...}, ... }.
// Server messages are data-only (lib/firebase-admin.ts sendWebPush) so this
// worker decides how they look. A notification MUST be shown for every push —
// Chrome penalises (and may unsubscribe) workers that stay silent.
self.addEventListener('push', (event) => {
  let payload = {}
  try { payload = event.data ? event.data.json() : {} } catch { payload = {} }
  const data = payload.data || {}
  const n = payload.notification || {}
  const title = data.title || n.title || 'LeanOn'
  const isRequest = data.type === 'session_request'
  const options = {
    body: data.body || n.body || 'You have a new notification.',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: data.tag || 'leanon-notification',
    // renotify: a second request must buzz again even if an older notification
    // with a similar tag is still in the tray.
    renotify: true,
    requireInteraction: data.requireInteraction === '1',
    vibrate: isRequest ? [400, 150, 400, 150, 400, 150, 800] : [200, 100, 200],
    timestamp: Date.now(),
    data: { url: data.url || '/dashboard', type: data.type || '', sessionId: data.sessionId || '' },
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

// Tap → focus an open LeanOn window and move it to the target page, or open a
// new one. Session requests go to /dashboard, where the accept modal lives.
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const target = new URL((event.notification.data && event.notification.data.url) || '/dashboard', self.location.origin).href
  event.waitUntil((async () => {
    const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    for (const c of list) {
      if (c.url.indexOf(self.location.origin) !== 0) continue
      // Navigate first, then focus, each on its own: if one is refused by the
      // browser the other still gets the listener to the request.
      let client = c
      // Never pull someone out of a live conversation — just bring it forward.
      const inSession = new URL(c.url).pathname.indexOf('/session/') === 0
      if (!inSession && c.url !== target && 'navigate' in c) {
        try { client = (await c.navigate(target)) || c } catch { /* uncontrolled window */ }
      }
      try { if ('focus' in client) await client.focus() } catch { /* focus refused */ }
      return
    }
    if (self.clients.openWindow) await self.clients.openWindow(target)
  })())
})
