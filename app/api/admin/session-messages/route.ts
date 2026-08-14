import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

// GET /api/admin/session-messages?sessionId=... — full raw transcript for one
// session, with real seeker/listener names.
//
// PRIMARY ADMIN ONLY. This is deliberately NOT the same thing as the
// moderation ledger (PROJECT.md §8.3), which only surfaces transcripts the
// Claude moderation layer flagged, with identities masked. This route reads
// every message of every session — a materially bigger capability — so it
// is restricted to whoever authenticates as the ADMIN_PHONE/ADMIN_PIN
// primary admin specifically. Every other admin account (ADMIN_ACCOUNTS
// entries, ADMIN_SECRET/password login) gets 403.
export async function GET(req: NextRequest) {
  const { error, code, status, user, isPrimaryAdmin } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!isPrimaryAdmin) {
    return NextResponse.json({ error: 'Forbidden', code: 'NOT_PRIMARY_ADMIN' }, { status: 403 })
  }
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const sessionId = new URL(req.url).searchParams.get('sessionId') || ''
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId required' }, { status: 400 })
  }

  try {
    const sb = createAdminClient()

    const { data: session, error: sErr } = await sb
      .from('sessions')
      .select(`
        id, seeker_id, listener_id, session_type, duration_mins, status,
        amount_held, is_free_trial, created_at, started_at, ended_at,
        crisis_flagged,
        seeker:users!seeker_id(name),
        listener:users!listener_id(name)
      `)
      .eq('id', sessionId)
      .single()
    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const sort = new URL(req.url).searchParams.get('sort') === 'desc' ? false : true
    const { data: messages, error: mErr } = await sb
      .from('messages')
      .select('id, sender_id, content, created_at, is_flagged')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: sort })
    if (mErr) throw mErr

    return NextResponse.json({ session, messages: messages ?? [] })
  } catch (err) {
    logger.error('Admin session-messages GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
