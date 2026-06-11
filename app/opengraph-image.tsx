import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'LeanOn — Peer Emotional Support, India. Someone to lean on, anytime.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F4867 0%, #1A8FA0 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 110, fontWeight: 800, color: 'white', letterSpacing: '-2px' }}>
          Lean<span style={{ color: '#FF9933' }}>On</span>
        </div>
        <div style={{ display: 'flex', fontSize: 38, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginTop: 18 }}>
          Someone to lean on, anytime.
        </div>
        <div style={{ display: 'flex', fontSize: 26, fontWeight: 500, color: 'rgba(255,255,255,0.75)', marginTop: 28 }}>
          Peer emotional support · India · 24/7 · Anonymous · leanon.app
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            background: '#FF9933',
            color: 'white',
            fontSize: 24,
            fontWeight: 700,
            padding: '14px 36px',
            borderRadius: 50,
          }}
        >
          First 5 minutes free
        </div>
      </div>
    ),
    { ...size }
  )
}
