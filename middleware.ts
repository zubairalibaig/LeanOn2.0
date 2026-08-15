import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

// Routes that NEVER need auth and NEVER redirect
const PUBLIC_PREFIXES = [
  '/api/',        // all API routes — never redirect, let the route handle auth
  '/_next/',      // Next.js internals
  '/static/',
  '/favicon',
  '/robots',
  '/sitemap',
  '/manifest',
  '/icon',
  '/logo',
  '/og-image',
  '/firebase-messaging-sw',
  '/.well-known/', // Digital Asset Links (Android TWA verification) — never gated
  '/apple-touch-icon',
]

const PUBLIC_PAGES = [
  '/',
  '/auth',
  '/browse',
  '/faq',
  '/about',
  '/trust',
  '/press',
  '/our-story',
  '/leanon',
  '/why-leanon',
  '/how-leanon-works',
  '/is-leanon-safe',
  '/anonymous-support-online',
  '/someone-to-talk-to-at-night',
  '/online-emotional-support-india',
  '/alternatives-to-therapy-india',
  '/feeling-lonely-in-india',
  '/emotional-support',
  '/become-listener',
  '/blog',
  '/support',
  '/resources',
  '/delhi',
  '/mumbai',
  '/bengaluru',
  '/hyderabad',
  '/chennai',
  '/pune',
  '/kolkata',
  '/leanon-app-mental-health',
  '/anonymous-peer-support',
  '/need-someone-to-talk-to-india',
  '/get-paid-to-chat-india',
  '/contact',
  '/privacy',
  '/terms',
  '/delete-account', // Play requires this reachable without login

  '/glossary',
  '/admin', // handled client-side with Supabase auth + PIN gate
]

const AUTH_REQUIRED_PREFIXES = [
  '/session/',
  '/dashboard',
  '/wallet',
  '/history',
  '/notifications',
  // /admin is NOT here — the admin page handles its own auth + PIN gate client-side
  // This prevents redirect loops caused by SSR cookie detection differences
  '/profile',
  '/sessions',
]

// CSRF: reject cross-origin mutations. Allow same-host, explicit production
// domains, and same Vercel deployment previews.
const EXPLICIT_ORIGINS = ['https://leanon.app', 'https://www.leanon.app']
if (process.env.NODE_ENV === 'development') EXPLICIT_ORIGINS.push('http://localhost:3000')

function isTrustedOrigin(origin: string, reqHostname: string): boolean {
  if (EXPLICIT_ORIGINS.includes(origin)) return true
  try {
    const oh = new URL(origin).hostname
    if (oh === reqHostname) return true
    if (oh === 'www.' + reqHostname || reqHostname === 'www.' + oh) return true
    // Only trust THIS project's Vercel preview deployments, not all *.vercel.app
    if (/^lean-?on[a-z0-9-]*\.vercel\.app$/i.test(oh)) return true
  } catch { /* malformed origin → deny */ }
  return false
}

// @supabase/ssr v0.3.0 cookie API is get/set/remove (NOT getAll/setAll — those
// silently no-op on this version and break all auth). Shared by both the
// session-refresh path and the auth-gate path below.
function makeClient(req: NextRequest, res: NextResponse) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => req.cookies.get(name)?.value,
        set: (name: string, value: string, options: CookieOptions) => {
          req.cookies.set(name, value)
          res.cookies.set({ name, value, ...options })
        },
        remove: (name: string, options: CookieOptions) => {
          req.cookies.set(name, '')
          res.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )
}

const hasAuthCookie = (req: NextRequest) =>
  req.cookies.getAll().some(c => c.name.includes('-auth-token'))

// Keep a logged-in user's session alive on pages that don't require auth.
//
// WHY: Supabase access tokens expire (~1h). If the cookie is never refreshed
// server-side, a returning user who lands on a public page (/, /browse) can be
// silently signed out and forced through phone OTP again — which costs real
// money on every SMS. Touching getUser() rotates the token and writes the fresh
// cookie back.
//
// SEO/PERF: this runs ONLY when an auth cookie is present. Anonymous visitors
// and search crawlers short-circuit immediately with zero added latency, so
// public page speed and Core Web Vitals are completely unchanged.
async function refreshSessionIfLoggedIn(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.next()
  if (!hasAuthCookie(req)) return res
  try {
    await makeClient(req, res).auth.getUser()
  } catch {
    // Transient Supabase/network error — never block the page over a refresh.
  }
  return res
}

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  // 1. Never intercept public prefixes (API, Next.js internals, static files)
  if (PUBLIC_PREFIXES.some(p => pathname.startsWith(p))) {
    // Still apply CSRF for mutating API routes
    const isMutation = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)
    if (isMutation && pathname.startsWith('/api/')) {
      const origin = req.headers.get('origin')
      const isWebhook = pathname.startsWith('/api/webhooks')
      if (!isWebhook) {
        // Reject cross-origin OR origin-less state-changing requests.
        // A missing Origin on a mutation is treated as untrusted unless the
        // request is same-site per Sec-Fetch-Site (sent by modern browsers).
        const secFetchSite = req.headers.get('sec-fetch-site')
        const sameSite = secFetchSite === 'same-origin' || secFetchSite === 'same-site' || secFetchSite === 'none'
        if (origin) {
          if (!isTrustedOrigin(origin, req.nextUrl.hostname)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
          }
        } else if (secFetchSite && !sameSite) {
          // Origin absent but browser says cross-site → reject
          return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
        }
        // When both Origin and Sec-Fetch-Site are absent (non-browser callers like curl),
        // fall through — all mutating API routes enforce their own auth (Supabase session
        // + admin secret), so server-to-server calls without session cookies do no harm.
      }
    }
    return NextResponse.next()
  }

  // 2. Pass through public pages without any auth check
  const isPublicPage = PUBLIC_PAGES.some(p =>
    pathname === p || pathname.startsWith(p + '/')
  )

  // 3. Determine if route needs auth
  const needsAuth = AUTH_REQUIRED_PREFIXES.some(p => pathname.startsWith(p))

  // 4. Public / non-gated pages: pass through, but keep an existing session
  //    fresh so returning users are never forced back through paid SMS OTP.
  //    (No auth cookie → returns instantly; SEO pages stay just as fast.)
  if (isPublicPage && !needsAuth) {
    return await refreshSessionIfLoggedIn(req)
  }

  // 5. Only gate auth-required routes; everything else still gets a refresh.
  if (!needsAuth) {
    return await refreshSessionIfLoggedIn(req)
  }

  const res = NextResponse.next()
  const supabase = makeClient(req, res)

  // getUser() validates the JWT server-side — more secure than getSession()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (!user) {
    // Transient Supabase outage/network error while a session cookie exists:
    // let the request through rather than bouncing a logged-in user to /auth.
    // Page-level code and API routes still enforce their own auth.
    const transient = !!authError && authError.status !== 400 && authError.status !== 401 && authError.status !== 403
    if (hasAuthCookie(req) && transient) {
      return res
    }

    // Only redirect to same-origin paths — prevents open redirect attacks.
    // pathname + search are from req.nextUrl which is always same-origin.
    const dest = pathname + search
    const loginUrl = new URL('/auth', req.url)
    loginUrl.searchParams.set('redirect', dest)
    const redirect = NextResponse.redirect(loginUrl)
    // Carry any cookie changes (e.g. cleared stale tokens) onto the redirect
    res.cookies.getAll().forEach(c => redirect.cookies.set(c))
    return redirect
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|icon-|logo|og-image|firebase-messaging-sw).*)',
  ],
}
