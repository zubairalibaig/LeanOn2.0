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

    // The ONE LeanOn service worker (public/sw.js) — the same file
    // ServiceWorkerRegister installs on every page load. Registering a
    // different script at scope "/" (the old /firebase-messaging-sw.js) made
    // the two replace each other and silently dropped the push handler.
    await navigator.serviceWorker.register('/sw.js')
    const registration = await navigator.serviceWorker.ready

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

export type AlertStatus =
  | 'not_configured'  // Firebase env vars missing on this deploy
  | 'unsupported'     // browser has no Push API
  | 'ios_install'     // iPhone/iPad Safari: push only works from the home-screen app
  | 'denied'          // listener (or the OS) blocked notifications for LeanOn
  | 'prompt'          // not asked yet
  | 'granted'

function isIos(): boolean {
  const ua = navigator.userAgent
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1)
}

function isStandalone(): boolean {
  return window.matchMedia?.('(display-mode: standalone)').matches
    || (navigator as Navigator & { standalone?: boolean }).standalone === true
}

// What the listener needs to know about phone alerts on THIS device — shown on
// the dashboard so a silent failure is no longer invisible.
export function getAlertStatus(): AlertStatus {
  if (typeof window === 'undefined') return 'unsupported'
  if (!firebaseConfigured) return 'not_configured'
  if (isIos() && !isStandalone()) return 'ios_install'
  if (!('serviceWorker' in navigator) || !('Notification' in window) || !('PushManager' in window)) return 'unsupported'
  if (Notification.permission === 'denied') return 'denied'
  if (Notification.permission === 'default') return 'prompt'
  return 'granted'
}

// Show a notification from an open tab. Android Chrome does NOT support
// `new Notification()` (it throws "Illegal constructor"), so the old in-tab
// alert never appeared on phones — it has to go through the service worker.
// Uses the same tag as the server push for the same request, so the two
// replace each other instead of stacking.
export async function showLocalNotification(title: string, opts: { body: string; tag: string; url: string; requireInteraction?: boolean }) {
  try {
    if (typeof window === 'undefined' || !('Notification' in window) || Notification.permission !== 'granted') return
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration('/')
      if (reg) {
        await reg.showNotification(title, {
          body: opts.body,
          tag: opts.tag,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          requireInteraction: !!opts.requireInteraction,
          data: { url: opts.url },
          // renotify / vibrate aren't in every TS lib version's NotificationOptions.
          ...({ renotify: true, vibrate: [400, 150, 400, 150, 800] } as Record<string, unknown>),
        })
        return
      }
    }
    const n = new Notification(title, { body: opts.body, tag: opts.tag, icon: '/icon-192.png' })
    n.onclick = () => { window.focus(); n.close() }
  } catch { /* unsupported — the in-page ring still plays */ }
}
