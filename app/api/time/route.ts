import { NextResponse } from 'next/server'

// Current server time for client countdowns (lib/server-clock.ts). Never cached:
// a CDN-cached response can't be trusted for "now".
export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export function GET() {
  return NextResponse.json({ now: Date.now() }, { headers: { 'Cache-Control': 'no-store' } })
}
