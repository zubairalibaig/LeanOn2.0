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

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  try {
    const body = await req.json().catch(() => ({}))
    const message = typeof body?.message === 'string' ? body.message.slice(0, 500) : 'unknown error'
    const stack   = typeof body?.stack   === 'string' ? body.stack.slice(0, 2000)  : undefined
    const url     = typeof body?.url     === 'string' ? body.url.slice(0, 200)     : undefined

    logger.error('client-error', { message, stack, url, ip })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
