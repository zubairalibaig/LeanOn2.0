// Firebase Admin SDK initialization
// Requires: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY env vars
// FCM notifications are silently skipped if these are not configured.

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

export async function sendPushNotification(
  fcmToken: string,
  title: string,
  body: string,
  data?: Record<string, string>
): Promise<void> {
  const adminApp = getFirebaseAdmin()
  if (!adminApp) return // FCM not configured — skip silently

  try {
    const admin = require('firebase-admin')
    await admin.messaging().send({
      token: fcmToken,
      notification: { title, body },
      data: data ?? {},
      android: { priority: 'high' },
      apns: { payload: { aps: { sound: 'default', badge: 1 } } },
    })
  } catch (err) {
    // Non-critical — don't throw, just log
    console.error('FCM send failed:', err)
  }
}
