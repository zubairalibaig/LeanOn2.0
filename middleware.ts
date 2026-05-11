import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

const PROTECTED = ['/session', '/wallet', '/dashboard', '/browse']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!PROTECTED.some(p => pathname.startsWith(p))) return NextResponse.next()

  // Use Supabase SSR client — reads the real auth cookie and refreshes tokens
  let response = NextResponse.next({ request: req })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name)               { return req.cookies.get(name)?.value },
        set(name, value, opts)  {
          req.cookies.set({ name, value, ...opts })
          response = NextResponse.next({ request: req })
          response.cookies.set({ name, value, ...opts })
        },
        remove(name, opts) {
          req.cookies.set({ name, value: '', ...opts })
          response = NextResponse.next({ request: req })
          response.cookies.set({ name, value: '', ...opts })
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    const loginUrl = new URL('/auth', req.url)
    loginUrl.searchParams.set('redirect', pathname + req.nextUrl.search)
    return NextResponse.redirect(loginUrl)
  }

  return response
}

export const config = {
  matcher: ['/session/:path*', '/wallet/:path*', '/dashboard/:path*', '/browse/:path*'],
}
