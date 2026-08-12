import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

// Serves the Firebase Cloud Messaging service worker at the origin root
// (required for FCM's scope to cover the whole site).
//
// WHY A ROUTE HANDLER, NOT A STATIC FILE: the previous public/firebase-
// messaging-sw.js waited for an open page to `postMessage` it the Firebase
// config before calling firebase.initializeApp(). That can never work for a
// BACKGROUND push — the entire point of this file — because FCM delivers
// those straight to the service worker with no page involved; if no page is
// open, no postMessage is ever sent, and the worker never initializes. That
// is the root cause push was silently dead end-to-end.
//
// The fix: initialize Firebase at service-worker STARTUP, not on demand. The
// config values below (apiKey, appId, etc.) are Firebase's public "web app"
// identifiers, not secrets — the same category as NEXT_PUBLIC_SUPABASE_ANON_KEY
// — but pulling them from env vars at request time still means nothing has to
// be hardcoded into a committed file, and a project can be reconfigured
// without touching source.
export async function GET() {
  const config = {
    apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
    projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
    appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '',
  }

  // Not configured — serve a harmless no-op worker instead of a broken one.
  // lib/firebase-client.ts checks `firebaseConfigured` before ever registering
  // this worker, so in practice this path only guards a stale registration
  // left over from before Firebase was configured (or after it's removed).
  if (!config.apiKey || !config.projectId || !config.appId) {
    return new NextResponse('// Firebase not configured — push disabled.\n', {
      headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
    })
  }

  const js = `
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp(${JSON.stringify(config)});
const messaging = firebase.messaging();

// Fires when no LeanOn tab is focused — app closed, backgrounded, phone
// locked. This is the exact gap the feature exists to close: previously a
// listener only heard about a request if they had a live tab open.
messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'LeanOn', {
    body: n.body || 'You have a new notification.',
    icon: '/logo.png',
    badge: '/logo.png',
    data: payload.data || {},
    tag: 'leanon-notification',
  });
});

// Tapping the notification focuses an existing LeanOn tab if one is open,
// otherwise opens a new one. Deep-links straight to the session when the
// notification is a session request.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const url = (data.type === 'session_request' && data.sessionId)
    ? '/session/' + data.sessionId
    : '/dashboard';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.indexOf(self.location.origin) === 0 && 'focus' in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// Fallback for raw (non-FCM) push events.
self.addEventListener('push', (event) => {
  if (!event.data) return;
  try {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title || 'LeanOn', {
        body: data.body || 'You have a new notification.',
        icon: '/logo.png',
        badge: '/logo.png',
      })
    );
  } catch { /* not JSON — ignore */ }
});
`.trim()

  return new NextResponse(js, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
