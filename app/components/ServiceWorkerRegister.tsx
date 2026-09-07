'use client'
import { useEffect } from 'react'

/**
 * Registers /sw.js on load. The service worker is intentionally non-caching
 * (see public/sw.js) — it exists only to make LeanOn pass Chrome's
 * PWA-installability bar so it can be wrapped as a TWA / added to the home
 * screen. Registration is best-effort and silent: any failure (unsupported
 * browser, insecure context) is a no-op and never affects the page.
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return
    // Register after the page settles so it never competes with first paint.
    const onReady = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        /* installability is a nice-to-have — ignore failures */
      })
    }
    if (document.readyState === 'complete') onReady()
    else {
      window.addEventListener('load', onReady)
      return () => window.removeEventListener('load', onReady)
    }
  }, [])

  return null
}
