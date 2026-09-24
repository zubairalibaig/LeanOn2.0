// Firebase Admin SDK initialization
// Requires: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY env vars
// FCM notifications are silently skipped if these are not configured.
// Callers should use lib/push.ts (sendPushToUser), which picks the user's
// devices and cleans up dead tokens — not sendWebPush directly.

/* eslint-disable @typescript-eslint/no-explicit-any */
let app: any = null

export function getFirebaseAdmin(): any {
  if (app) return app

  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    // FCM not configured — push notifications will be silently skipped
    return null
  }

  try {
    const admin = require('firebase-admin')
    if (!admin.apps.length) {
      app = admin.initializeApp({
        credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
      })
    } else {
      app = admin.apps[0]
    }
    return app
  } catch {
    return null
  }
}

export type WebPushMessage = {
  title: string
  body: string
  url: string            // opened when the notification is tapped
  tag: string            // same tag replaces an earlier notification (renotify still buzzes)
  ttlSecs: number        // drop the push if it can't be delivered in time
  urgent?: boolean       // Urgency: high — delivered through Android Doze / battery saver
  requireInteraction?: boolean
  data?: Record<string, string>
}

export type WebPushResult = { ok: true } | { ok: false; code: string; tokenDead: boolean }

// Every token LeanOn stores is a WEB push token (browser / installed PWA / the
// Play Store TWA, which runs Chrome). For those, FCM ignores the `android` and
// `apns` blocks — only `webpush` applies. The old sender set only
// android.priority=high, so pushes went out at NORMAL urgency: on a phone in
// Doze they sat undelivered until the next maintenance window (often many
// minutes — longer than the 3-minute request window), and with the default
// 4-week TTL they could arrive long after the request had expired.
//
// Data-only on purpose: public/sw.js builds the notification itself from
// `data`, so it controls the tag, vibration, renotify and the tap target.
export async function sendWebPush(token: string, msg: WebPushMessage): Promise<WebPushResult> {
  const adminApp = getFirebaseAdmin()
  if (!adminApp) return { ok: false, code: 'fcm_not_configured', tokenDead: false }

  try {
    const admin = require('firebase-admin')
    await admin.messaging(adminApp).send({
      token,
      data: {
        ...(msg.data ?? {}),
        title: msg.title,
        body: msg.body,
        url: msg.url,
        tag: msg.tag,
        requireInteraction: msg.requireInteraction ? '1' : '0',
      },
      webpush: {
        headers: {
          Urgency: msg.urgent ? 'high' : 'normal',
          TTL: String(Math.max(0, Math.round(msg.ttlSecs))),
        },
      },
    })
    return { ok: true }
  } catch (err: any) {
    const code: string = err?.errorInfo?.code || err?.code || 'unknown'
    const tokenDead = code === 'messaging/registration-token-not-registered'
      || code === 'messaging/invalid-registration-token'
      || (code === 'messaging/invalid-argument' && /registration token/i.test(String(err?.message)))
    return { ok: false, code, tokenDead }
  }
}
