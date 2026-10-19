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

// ── Inside the LeanOn Android app (mobile/, Capacitor) ───────────────────────
// The app's WebView has no Push API, so web push can't work there. Instead the
// app exposes window.LeanOnAndroid (mobile/android/.../LeanOnBridge.java): a
// NATIVE FCM token whose alerts ring like a phone call. Everything below falls
// back to the browser path when this object is absent.
type LeanOnAndroid = {
  isApp(): boolean
  notificationStatus(): 'granted' | 'denied' | 'prompt'
  requestNotifications(): void
  pushToken(): string
  fullScreenAllowed(): boolean
  openFullScreenSettings(): void
  openNotificationSettings(): void
  stopRinging(sessionId: string): void
  lastPushAt(): number
}
export function leanOnApp(): LeanOnAndroid | null {
  if (typeof window === 'undefined') return null
  const a = (window as Window & { LeanOnAndroid?: LeanOnAndroid }).LeanOnAndroid
  try { return a && a.isApp() ? a : null } catch { return null }
}
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

async function registerInApp(app: LeanOnAndroid): Promise<boolean> {
  try {
    if (app.notificationStatus() !== 'granted') {
      app.requestNotifications()
      // Android's prompt is asynchronous: wait for the answer (or settings).
      for (let i = 0; i < 60 && app.notificationStatus() !== 'granted'; i++) await sleep(500)
      if (app.notificationStatus() !== 'granted') return fail(`app_permission_${app.notificationStatus()}`)
    }
    let token = app.pushToken()
    for (let i = 0; i < 20 && !token; i++) { await sleep(500); token = app.pushToken() }
    if (!token) return fail('app_no_token')
    const res = await fetch('/api/push/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fcm_token: token, kind: 'android_app' }),
    })
    if (!res.ok) return fail(`save_failed_${res.status}`)
    lastFailure = null
    return true
  } catch (e) {
    return fail(`app_error: ${(e instanceof Error ? e.message : String(e)).slice(0, 160)}`)
  }
}

// True when this device will get request alerts without asking (permission
// already granted) — the browser's Notification.permission, or the app's.
export function alertsAlreadyAllowed(): boolean {
  const app = leanOnApp()
  if (app) { try { return app.notificationStatus() === 'granted' } catch { return false } }
  return typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted'
}

// Module-level guard: avoid registering twice at once in the same tab (e.g. the
// explicit "Go online" tap and a silent background refresh firing together).
// The token is re-POSTed on every call on purpose: that POST is what moves a
// shared device to the account signed in NOW (a logout doesn't reload the
// tab), and it refreshes push_tokens.last_seen_at, which "away mode" relies on.
let inFlight: Promise<boolean> | null = null

// Resolves false if the service worker never activates, so a failed install
// can't leave every later registration (and the test-alert button) hanging.
function readyWithin(ms: number): Promise<ServiceWorkerRegistration | null> {
  return Promise.race([
    navigator.serviceWorker.ready,
    new Promise<null>(res => setTimeout(() => res(null), ms)),
  ])
}

/**
 * Request notification permission (if not already decided) and register this
 * browser for push. Safe to call from a click handler OR silently on mount —
 * if permission was already granted in a previous session, no prompt is shown
 * and the token is simply (re)confirmed with the server.
 *
 * Returns true only when a token was successfully obtained and saved.
 */
// Why the last registration on this device failed (null = it worked / not tried).
// Shown on the dashboard and reported to the server (/api/push/register-failure)
// so the admin can see why a listener "has no device" instead of guessing.
let lastFailure: string | null = null
export function getLastPushFailure(): string | null { return lastFailure }

function fail(reason: string): false {
  lastFailure = reason
  try {
    fetch('/api/push/register-failure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reason,
        permission: leanOnApp() ? `app:${leanOnApp()!.notificationStatus()}` : typeof Notification !== 'undefined' ? Notification.permission : 'n/a',
        standalone: isStandalone(),
      }),
    }).catch(() => {})
  } catch { /* ignore */ }
  return false
}

export async function registerPushNotifications(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  const app = leanOnApp()
  if (app) {
    if (inFlight) return inFlight
    inFlight = registerInApp(app)
    try { return await inFlight } finally { inFlight = null }
  }
  if (!firebaseConfigured) return false
  if (!('serviceWorker' in navigator) || !('Notification' in window)) return fail('unsupported_browser')

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
    // Ask for permission FIRST, synchronously inside the tap that called us.
    // It used to be asked only after the Firebase SDK had downloaded; on a slow
    // phone that outlasted the tap's user-activation window, and browsers then
    // hide (Chrome's quiet UI) or refuse (Firefox, Safari) the prompt — so the
    // listener tapped "Turn on alerts" and nothing appeared. Callers that run
    // without a tap only call this once permission is already 'granted'.
    const permissionAsk: Promise<NotificationPermission> = Notification.permission === 'default'
      ? Notification.requestPermission()
      : Promise.resolve(Notification.permission)

    const [{ initializeApp, getApps, getApp }, { getMessaging, getToken, isSupported }] = await Promise.all([
      import('firebase/app'),
      import('firebase/messaging'),
    ])
    const permission = await permissionAsk

    // Gates out browsers without the Push API — notably iOS Safari unless the
    // site has been added to the home screen (iOS 16.4+). getToken() would
    // otherwise throw; checking first keeps the failure silent and cheap.
    if (!(await isSupported())) return fail('unsupported_browser')
    // 'denied' here = blocked for this site in the browser, or the browser/app
    // itself has notifications switched off in the phone's settings.
    if (permission !== 'granted') return fail(`permission_${permission}`)

    // The ONE LeanOn service worker (public/sw.js) — the same file
    // ServiceWorkerRegister installs on every page load. Registering a
    // different script at scope "/" (the old /firebase-messaging-sw.js) made
    // the two replace each other and silently dropped the push handler.
    await navigator.serviceWorker.register('/sw.js')
    const registration = await readyWithin(10_000)
    if (!registration) return fail('service_worker_not_ready')

    const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG)
    const messaging = getMessaging(app)
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    })
    if (!token) return fail('no_token')

    const res = await fetch('/api/push/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fcm_token: token }),
    })
    if (!res.ok) return fail(`save_failed_${res.status}`)
    lastFailure = null
    return true
  } catch (e) {
    // Any failure here (permission denied at the OS level, network error,
    // misconfigured Firebase project, browser quirk) is non-fatal — the
    // listener still has the in-app realtime alert while a tab is open.
    const code = (e as { code?: string })?.code
    const msg = e instanceof Error ? e.message : String(e)
    return fail(`token_error: ${(code || msg).slice(0, 160)}`)
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
  const app = leanOnApp()
  if (app) { try { return app.notificationStatus() } catch { return 'unsupported' } }
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

// Close the notification for a request once it's accepted, declined, cancelled
// or expired, so a stale one can't send the listener to an empty dashboard.
export async function closeLocalNotifications(tag: string) {
  // In the app, also stop the native ringing for this request.
  const m = /^leanon-req-(.+)$/.exec(tag)
  if (m) { try { leanOnApp()?.stopRinging(m[1]) } catch { /* ignore */ } }
  try {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
    const reg = await navigator.serviceWorker.getRegistration('/')
    const ns = reg ? await reg.getNotifications({ tag }) : []
    ns.forEach(n => n.close())
  } catch { /* ignore */ }
}

// Resolves when public/sw.js reports that a TEST push reached this browser:
// 'shown' = displayed, 'refused' = arrived but the browser wouldn't display it,
// 'none' = nothing arrived within `ms`. Start it BEFORE sending the test.
export function waitForTestPush(ms: number): Promise<'shown' | 'refused' | 'none'> {
  const app = leanOnApp()
  if (app) {
    // The app's notification service records when a push arrived.
    const before = app.lastPushAt()
    return (async () => {
      for (let t = 0; t < ms; t += 500) { await sleep(500); if (app.lastPushAt() > before) return 'shown' as const }
      return 'none' as const
    })()
  }
  return new Promise(resolve => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return resolve('none')
    const onMsg = (e: MessageEvent) => {
      if (e.data?.type === 'leanon-test-push-received') { cleanup(); resolve(e.data.shown === false ? 'refused' : 'shown') }
    }
    const timer = setTimeout(() => { cleanup(); resolve('none') }, ms)
    function cleanup() { clearTimeout(timer); navigator.serviceWorker.removeEventListener('message', onMsg) }
    navigator.serviceWorker.addEventListener('message', onMsg)
  })
}

// Which instructions fit this device. Most listeners use Chrome on Android.
export type DeviceKind = 'android_chrome' | 'android_app' | 'iphone' | 'desktop' | 'other_mobile'
export function getDeviceKind(): DeviceKind {
  if (typeof window === 'undefined') return 'desktop'
  const ua = navigator.userAgent
  if (isIos()) return 'iphone'
  if (/Android/i.test(ua)) return (leanOnApp() || isStandalone()) ? 'android_app' : 'android_chrome'
  if (/Mobi/i.test(ua)) return 'other_mobile'
  return 'desktop'
}
