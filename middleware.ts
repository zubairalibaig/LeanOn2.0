import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

const PROTECTED = ['/session', '/wallet', '/dashboard', '/browse', '/admin', '/profile', '/sessions']

// CSRF: reject cross-origin mutations. Allow same-host, explicit production
// domains, and same Vercel deployment previews.
const EXPLICIT_ORIGINS = ['https://leanon.app', 'https://www.leanon.app']
if (process.env.NODE_ENV === 'development') EXPLICIT_ORIGINS.push('http://localhost:3000')

function isTrustedOrigin(origin: string, reqHostname: string): boolean {
  if (EXPLICIT_ORIGINS.includes(origin)) return true
  try {
    const oh = new URL(origin).hostname
    // Same host (handles any custom domain or Vercel preview URL automatically)
    if (oh === reqHostname) return true
    // www ↔ apex pair
    if (oh === 'www.' + reqHostname || reqHostname === 'www.' + oh) return true
    // Vercel preview deployments for this project
    if (oh.endsWith('.vercel.app')) return true
  } catch { /* malformed origin → deny */ }
  return false
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Redirect www → apex so Google sees a single canonical domain
  if (req.nextUrl.hostname === 'www.leanon.app') {
    const apex = req.nextUrl.clone()
    apex.hostname = 'leanon.app'
    return NextResponse.redirect(apex, { status: 301 })
  }

  // CSRF protection for mutating API routes — reject cross-origin requests
  const isMutation = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)
  if (isMutation && pathname.startsWith('/api/')) {
    const origin = req.headers.get('origin')
    // Webhooks (Razorpay) don't send Origin — exempt /api/webhooks
    const isWebhook = pathname.startsWith('/api/webhooks')
    if (origin && !isWebhook && !isTrustedOrigin(origin, req.nextUrl.hostname)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  if (!PROTECTED.some(p => pathname.startsWith(p))) return NextResponse.next()

  // Use Supabase SSR client — reads the real auth cookie and refreshes tokens
  let response = NextResponse.next({ request: req })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string)                              { return req.cookies.get(name)?.value },
        set(name: string, value: string, opts: CookieOptions)  {
          req.cookies.set({ name, value, ...opts })
          response = NextResponse.next({ request: req })
          response.cookies.set({ name, value, ...opts })
        },
        remove(name: string, opts: CookieOptions) {
          req.cookies.set({ name, value: '', ...opts })
          response = NextResponse.next({ request: req })
          response.cookies.set({ name, value: '', ...opts })
        },
      },
    }
  )

  // getUser() validates the JWT server-side — getSession() trusts the cookie blindly
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const loginUrl = new URL('/auth', req.url)
    loginUrl.searchParams.set('redirect', pathname + req.nextUrl.search)
    return NextResponse.redirect(loginUrl)
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo.png|manifest.json).*)'],
}
