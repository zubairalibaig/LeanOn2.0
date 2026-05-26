import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

const PROTECTED = ['/session', '/wallet', '/dashboard', '/browse', '/admin', '/profile', '/sessions']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Redirect www → apex so Google sees a single canonical domain
  if (req.nextUrl.hostname === 'www.leanon.app') {
    const apex = req.nextUrl.clone()
    apex.hostname = 'leanon.app'
    return NextResponse.redirect(apex, { status: 301 })
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
