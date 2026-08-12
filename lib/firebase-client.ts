'use client'

// ── FCM push registration (browser side) ─────────────────────────────────────
//
// VALIDATED BEFORE BUILDING: the server half of this feature was already
// complete and unused — lib/firebase-admin.ts sends a push the moment a new
// session request is created (app/api/sessions/route.ts), and app/api/push/
// register/route.ts already stores a token on users.fcm_token. What never
// existed was the browser code to obtain a token and call that route, so
// users.fcm_token was always NULL and every send silently no-opped.
//
// This module is the missing half. It is imported ONLY from listener-facing
// client components (the "Go online" action), never from a page every visitor
// loads — so anonymous/seeker traffic and SEO pages are unaffected, and the
// (sizeable) Firebase SDK is never in their bundle.
//
// Fully optional at every layer: unset env vars, an unsupported browser
// (notably iOS Safari outside an installed PWA), or a denied permission all
// degrade to `false` silently. Push is a convenience layered on top of the
// in-app realtime alert (ListenerPresence / dashboard), never a requirement.

const FIREBASE_CONFIG = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY

export const firebaseConfigured = Boolean(
  FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.appId && VAPID_KEY
)

// Module-level guards: avoid registering twice in the same tab (e.g. the
// explicit "Go online" tap and a silent background refresh firing close
// together) and avoid re-POSTing an unchanged token every time.
let inFlight: Promise<boolean> | null = null
let lastRegisteredToken: string | null = null

/**
 * Request notification permission (if not already decided) and register this
 * browser for push. Safe to call from a click handler OR silently on mount —
 * if permission was already granted in a previous session, no prompt is shown
 * and the token is simply (re)confirmed with the server.
 *
 * Returns true only when a token was successfully obtained and saved.
 */
export async function registerPushNotifications(): Promise<boolean> {
  if (!firebaseConfigured) return false
  if (typeof window === 'undefined') return false
  if (!('serviceWorker' in navigator) || !('Notification' in window)) return false

  if (inFlight) return inFlight
  inFlight = doRegister()
  try {
    return await inFlight
  } finally {
    inFlight = null
  }
}

async function doRegister(): Promise<boolean> {
  try {
    const [{ initializeApp, getApps, getApp }, { getMessaging, getToken, isSupported }] = await Promise.all([
      import('firebase/app'),
      import('firebase/messaging'),
    ])

    // Gates out browsers without the Push API — notably iOS Safari unless the
    // site has been added to the home screen (iOS 16.4+). getToken() would
    // otherwise throw; checking first keeps the failure silent and cheap.
    if (!(await isSupported())) return false

    const permission = Notification.permission === 'granted'
      ? 'granted'
      : await Notification.requestPermission()
    if (permission !== 'granted') return false

    // Must be registered at the origin root so FCM's scope covers the whole
    // site. The service worker itself is served by app/firebase-messaging-sw.js
    // (a route handler, not a static file — see that file for why).
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js')

    const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG)
    const messaging = getMessaging(app)
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    })
    if (!token) return false

    if (token === lastRegisteredToken) return true // unchanged — nothing to send

    const res = await fetch('/api/push/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fcm_token: token }),
    })
    if (res.ok) lastRegisteredToken = token
    return res.ok
  } catch {
    // Any failure here (permission denied at the OS level, network error,
    // misconfigured Firebase project, browser quirk) is non-fatal — the
    // listener still has the in-app realtime alert while a tab is open.
    return false
  }
}
