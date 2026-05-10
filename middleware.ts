import { NextRequest, NextResponse } from 'next/server'

const PROTECTED = ['/session', '/wallet', '/dashboard', '/browse']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isProtected  = PROTECTED.some(p => pathname.startsWith(p))
  if (!isProtected) return NextResponse.next()

  const token = req.cookies.get('sb-access-token')?.value
              || req.cookies.get(`sb-${process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]?.split('.')[0]}-auth-token`)?.value

  if (!token) {
    const loginUrl = new URL('/auth', req.url)
    loginUrl.searchParams.set('redirect', pathname + req.nextUrl.search)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/session/:path*', '/wallet/:path*', '/dashboard/:path*', '/browse/:path*'],
}
