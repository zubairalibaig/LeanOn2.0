import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

// POST — the browser reports why this device could not register for request
// alerts (lib/firebase-client.ts). Stored on the user (migration 069) so the
// admin sees the reason next to "listener has no device".
export async function POST(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ ok: false }, { status: 401 })
  if (!checkRateLimit(`push-fail:${user.id}`, 10, 10 * 60_000)) return NextResponse.json({ ok: false }, { status: 429 })

  const body = await req.json().catch(() => ({})) as Record<string, unknown>
  // eslint-disable-next-line no-control-regex
  const clean = (v: unknown, max: number) => (typeof v === 'string' ? v : '').replace(/[\x00-\x1f\x7f]/g, '').slice(0, max)
  const reason = clean(body.reason, 160) || 'unknown'
  const permission = clean(body.permission, 20)
  const where = body.standalone === true ? 'app' : 'browser'
  const ua = clean(req.headers.get('user-agent'), 160)
  const summary = `${reason} · permission=${permission || '?'} · ${where} · ${ua}`.slice(0, 400)

  logger.warn('push register failed on device', { userId: user.id, reason, permission, where })
  const { error } = await createAdminClient().from('users')
    .update({ push_last_error: summary, push_last_error_at: new Date().toISOString() })
    .eq('id', user.id)
  if (error && !/push_last_error/.test(error.message)) {
    logger.warn('push register-failure: save failed', { userId: user.id, error: error.message })
  }
  return NextResponse.json({ ok: true })
}
