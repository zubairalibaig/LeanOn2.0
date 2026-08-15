import { NextResponse } from 'next/server'

// Digital Asset Links — proves to Android that leanon.app and the Play app
// `app.leanon` are the same publisher. Without a verified match, the Trusted
// Web Activity falls back to showing a Chrome URL bar across the top of every
// screen, which instantly makes the app look like a wrapped website (and is a
// Play review risk on top of being ugly).
//
// Served from a route, not public/.well-known/, for two reasons:
//   1. The fingerprint that actually matters is Play's APP SIGNING key, which
//      does not exist until after the first bundle is uploaded — so it cannot
//      be committed alongside the code that produces that bundle.
//   2. More than one fingerprint is usually live at once (Play app signing key
//      + the local upload key + a debug key while testing on-device). An env
//      var takes a list; a checked-in file means a redeploy per key.
//
// Reachable at /.well-known/assetlinks.json via the rewrite in next.config.js.
// Values are public by design — this file is meant to be world-readable.

export const dynamic = 'force-dynamic'

const PACKAGE_NAME = process.env.ANDROID_PACKAGE_NAME || 'app.leanon'

// Accepts comma, whitespace or newline separated fingerprints so the env var
// can be pasted straight out of Play Console or `keytool` output.
function fingerprints(): string[] {
  const raw = process.env.ANDROID_ASSETLINKS_SHA256 || ''
  return raw
    .split(/[,\s]+/)
    .map(s => s.trim().toUpperCase())
    .filter(s => /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/.test(s))
}

export async function GET() {
  const sha256_cert_fingerprints = fingerprints()

  // Unset or malformed → serve a valid empty array rather than a 500 or a
  // half-formed entry. Chrome then simply reports verification as failed,
  // which is a far easier thing to debug than a broken JSON document.
  const body = sha256_cert_fingerprints.length
    ? [
        {
          relation: ['delegate_permission/common.handle_all_urls'],
          target: {
            namespace: 'android_app',
            package_name: PACKAGE_NAME,
            sha256_cert_fingerprints,
          },
        },
      ]
    : []

  return new NextResponse(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  })
}
