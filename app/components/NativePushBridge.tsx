'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// ── Android shell → web session token bridge ─────────────────────────────────
//
// The Play Store build (android/) is a Trusted Web Activity, which is real
// Chrome rather than a WebView — so there is no JavaScript bridge between the
// native shell and this page. The shell registers a *native* FCM token (far
// more reliable than web push on the Xiaomi/Oppo/Vivo/Realme ROMs that kill
// Chrome's background process), but it cannot POST that token to
// /api/push/register itself: that route authenticates with the Supabase session
// cookie, which belongs to Chrome.
//
// So the shell appends the token to the launch URL as a fragment and this
// component completes the handoff. A fragment, not a query string, because
// fragments are never sent to the server — the token stays out of access logs,
// analytics and the Referer header.
//
// Inert for every browser visitor: no fragment and no stored token means the
// effect returns before doing anything.

const TOKEN_KEY = 'leanon.native_fcm_token'
const DONE_KEY = 'leanon.native_fcm_registered'
const HASH_RE = /(?:^#|&)lo_fcm=([^&]+)/

// The shell re-sends the token on every cold launch, and this effect re-runs on
// every navigation. Registration only needs to succeed once, so throttle the
// retries that happen while a user is still signed out (the route 401s until
// they are).
const RETRY_INTERVAL_MS = 30_000
let lastAttempt = 0

export default function NativePushBridge() {
  const pathname = usePathname()

  useEffect(() => {
    let token: string | null = null

    try {
      const match = window.location.hash.match(HASH_RE)
      if (match) {
        token = decodeURIComponent(match[1])
        window.localStorage.setItem(TOKEN_KEY, token)
        // Drop the fragment before anything else can read or record it.
        // replaceState so the back button is unaffected.
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search
        )
      }

      token = token ?? window.localStorage.getItem(TOKEN_KEY)
      if (!token) return
      // Already registered this exact token — nothing to do.
      if (window.localStorage.getItem(DONE_KEY) === token) return
    } catch {
      // Private-mode localStorage or a malformed fragment. Push stays on the
      // existing web path; never break the page over it.
      return
    }

    const now = Date.now()
    if (now - lastAttempt < RETRY_INTERVAL_MS) return
    lastAttempt = now

    const confirmed = token
    fetch('/api/push/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fcm_token: confirmed }),
    })
      .then((res) => {
        // A 401 simply means they have not signed in yet; the next navigation
        // after login retries.
        if (res.ok) {
          try {
            window.localStorage.setItem(DONE_KEY, confirmed)
          } catch {
            /* storage unavailable — retry next launch */
          }
        }
      })
      .catch(() => {
        /* offline — retry next navigation */
      })
  }, [pathname])

  return null
}
