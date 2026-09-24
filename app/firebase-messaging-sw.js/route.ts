import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

// Legacy URL. Browsers that registered /firebase-messaging-sw.js before
// 2026-09-24 still re-fetch it on update checks; it now just runs the single
// LeanOn worker (public/sw.js), which handles push itself. Two different
// workers at scope "/" kept replacing each other and dropping the push
// handler — see the header of public/sw.js.
export async function GET() {
  return new NextResponse("importScripts('/sw.js');\n", {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
