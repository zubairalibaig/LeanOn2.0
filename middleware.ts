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
  '/leanon-app-mental-health',
  '/anonymous-peer-support',
  '/need-someone-to-talk-to-india',
  '/get-paid-to-chat-india',
  '/contact',
  '/privacy',
  '/terms',
  '/glossary',
]

const AUTH_REQUIRED_PREFIXES = [
  '/session/',
  '/dashboard',
  '/wallet',
  '/history',
  '/notifications',
  '/admin',
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
    if (oh.endsWith('.vercel.app')) return true
  } catch { /* malformed origin → deny */ }
  return false
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
      if (origin && !isWebhook && !isTrustedOrigin(origin, req.nextUrl.hostname)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
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

  // 4. If public and not auth-required, pass through immediately
  if (isPublicPage && !needsAuth) {
    return NextResponse.next()
  }

  // 5. Only check session for auth-required routes
  if (!needsAuth) {
    return NextResponse.next()
  }

  const res = NextResponse.next()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies: Array<{ name: string; value: string; options: CookieOptions }>) =>
          cookies.forEach(({ name, value, options }) => res.cookies.set(name, value, options)),
      },
    }
  )

  // getUser() validates the JWT server-side — more secure than getSession()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // Build redirect URL, preserving intended destination
    const loginUrl = new URL('/auth', req.url)
    loginUrl.searchParams.set('redirect', pathname + search)
    return NextResponse.redirect(loginUrl)
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|icon-|logo|og-image|firebase-messaging-sw).*)',
  ],
}
