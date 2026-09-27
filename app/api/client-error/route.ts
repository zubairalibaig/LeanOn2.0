import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

// Simple in-memory rate limiting for client error reports
const errorMap = new Map<string, { count: number; reset: number }>()
const RATE = { limit: 20, windowMs: 60_000 }

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = errorMap.get(ip)
  if (!entry || entry.reset < now) {
    errorMap.set(ip, { count: 1, reset: now + RATE.windowMs })
    return true
  }
  if (entry.count >= RATE.limit) return false
  entry.count++
  return true
}

// Strip ANSI escape sequences and control characters to prevent log injection.
function sanitizeLogField(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '').replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '')
}

export async function POST(req: NextRequest) {
  // Use the last x-forwarded-for entry (CDN-injected real IP).
  const fwdChain = req.headers.get('x-forwarded-for') ?? ''
  const fwdParts = fwdChain.split(',').map(s => s.trim()).filter(Boolean)
  const ip = fwdParts.length > 0 ? fwdParts[fwdParts.length - 1] : (req.headers.get('x-real-ip') ?? 'unknown')
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  try {
    const body = await req.json().catch(() => ({}))
    const message = sanitizeLogField(typeof body?.message === 'string' ? body.message.slice(0, 500) : 'unknown error')
    const stack   = typeof body?.stack === 'string' ? sanitizeLogField(body.stack.slice(0, 2000)) : undefined
    const url     = typeof body?.url   === 'string' ? sanitizeLogField(body.url.slice(0, 200))   : undefined

    logger.error('client-error', { message, stack, url, ip })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
