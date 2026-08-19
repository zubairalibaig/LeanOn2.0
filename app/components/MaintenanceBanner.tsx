'use client'

import { useEffect, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────
// TEMPORARY. To turn the banner OFF next week, do ONE of:
//   (a) flip the line below to `const SHOW_MAINTENANCE_BANNER = false`, or
//   (b) delete this file and remove the two lines that reference
//       <MaintenanceBanner /> in app/layout.tsx.
// (a) is the fastest — one line, no other file touched, easy to re-enable
// if needed. Nothing else in the app reads this flag.
// ─────────────────────────────────────────────────────────────────────────
const SHOW_MAINTENANCE_BANNER = true

// Edit this to change what visitors read. Keep it short — one or two lines.
const MESSAGE =
  "We're doing scheduled maintenance. Some things — like signing in or starting a new session — may not work right now. Sorry for the disruption, we'll be back to normal shortly."

const DISMISS_KEY = 'leanon_maintenance_banner_dismissed'

export default function MaintenanceBanner() {
  const [dismissed, setDismissed] = useState(true) // default hidden until we check sessionStorage, avoids a flash on pages where it was already closed

  useEffect(() => {
    if (!SHOW_MAINTENANCE_BANNER) return
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === '1')
    } catch {
      setDismissed(false) // sessionStorage unavailable (private mode etc.) — just show it
    }
  }, [])

  if (!SHOW_MAINTENANCE_BANNER || dismissed) return null

  return (
    <div
      role="status"
      style={{
        position: 'relative', // NOT sticky/fixed on purpose — see note below.
        zIndex: 1000,
        background: '#FFF6E8',
        borderBottom: '1.5px solid #FFD79A',
        borderLeft: '5px solid #FF9933',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>🛠️</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#8A5A00', lineHeight: 1.5, flex: 1 }}>
        {MESSAGE}
      </span>
      <button
        onClick={() => {
          try { sessionStorage.setItem(DISMISS_KEY, '1') } catch {}
          setDismissed(true)
        }}
        aria-label="Dismiss"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 16, fontWeight: 800, color: '#8A5A00',
          padding: 4, lineHeight: 1, flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  )
}

// NOTE ON POSITIONING: deliberately `position: relative`, not sticky/fixed.
// Dozens of pages render their own `position: sticky; top: 0` nav bar. This
// banner renders BEFORE those in the DOM (see app/layout.tsx) and scrolls
// away normally, so each page's own sticky nav still sticks to the top of
// the viewport exactly as it does today — just starting a little lower on
// first load. No page needed any change for this to be visually safe.
