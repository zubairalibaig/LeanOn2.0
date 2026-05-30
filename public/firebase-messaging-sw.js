// Firebase Cloud Messaging Service Worker
// Replace with your actual Firebase config when FCM is configured
// Set NEXT_PUBLIC_FIREBASE_CONFIG env var with your Firebase web app config JSON
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js')

// Initialize Firebase only if config is available
// The service worker receives config via a postMessage from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'FIREBASE_CONFIG') {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(event.data.config)
        const messaging = firebase.messaging()
        messaging.onBackgroundMessage((payload) => {
          const { title, body } = payload.notification || {}
          self.registration.showNotification(title || 'LeanOn', {
            body: body || 'You have a new notification.',
            icon: '/icon-192.png',
            badge: '/icon-192.png',
            data: payload.data || {},
          })
        })
      }
    } catch (e) {
      console.error('Firebase SW init error:', e)
    }
  }
})

// Fallback push handler for non-FCM push events
self.addEventListener('push', (event) => {
  try {
    const data = event.data ? event.data.json() : {}
    event.waitUntil(
      self.registration.showNotification(data.title || 'LeanOn', {
        body: data.body || 'You have a new notification.',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
      })
    )
  } catch {
    // Ignore parse errors
  }
})
