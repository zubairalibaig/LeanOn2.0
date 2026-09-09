import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

// GET /api/admin/sessions/unsettled
// Returns completed paid sessions where no credit wallet_transaction exists
// for the listener — i.e., sessions where the listener was never paid.
// Excludes accidental starts (< 60 seconds): those correctly have listenerEarning = 0
// and a full refund to the seeker instead — no listener credit is expected.
// Used by the admin sessions tab to surface "Fix Settlement" buttons.
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()

    // Completed, paid sessions that ran at least 60 seconds.
    // Sessions under 60s are "accidental starts": settleSession() returns listenerEarning=0
    // and refundAmount=amountHeld (full refund to seeker). No listener credit is expected
    // for those, so they must not appear in the unsettled list.
    const { data: sessions, error: sErr } = await sb
      .from('sessions')
      .select('id, listener_id, amount_held, platform_fee, created_at, started_at, ended_at, listener:users!listener_id(name)')
      .eq('status', 'completed')
      .eq('is_free_trial', false)
      .gt('amount_held', 0)
      .order('created_at', { ascending: false })
      .limit(500)
    if (sErr) throw sErr

    if (!sessions || sessions.length === 0) {
      return NextResponse.json({ unsettled: [] })
    }

    const sessionIds = sessions.map((s: { id: string }) => s.id)

    // Find which of these have a listener credit wallet_transaction
    const { data: credits } = await sb
      .from('wallet_transactions')
      .select('session_id, user_id')
      .in('session_id', sessionIds)
      .eq('type', 'credit')
    type CreditRow = { session_id: string; user_id: string }
    const creditedSessionIds = new Set((credits ?? []).map((c: CreditRow) => c.session_id))

    type RawSession = { id: string; listener_id: string; amount_held: number | null; platform_fee: number | null; created_at: string | null; started_at: string | null; ended_at: string | null; listener: { name?: string } | null }

    // Sessions with NO credit = potentially unsettled.
    // Also exclude accidental starts (< 60 seconds): those get full seeker refunds, no listener credit.
    const unsettled = (sessions as RawSession[]).filter((s: RawSession) => {
      if (creditedSessionIds.has(s.id)) return false
      // Accidental start check: if both timestamps exist and ran < 60 seconds,
      // settleSession returns listenerEarning=0 — no credit expected, not a gap.
      if (s.started_at && s.ended_at) {
        const ranSecs = (new Date(s.ended_at).getTime() - new Date(s.started_at).getTime()) / 1000
        if (ranSecs < 60) return false
      }
      return true
    }).map((s: RawSession) => ({
      id: s.id,
      listener_id: s.listener_id,
      listener_name: s.listener?.name ?? 'Unknown',
      amount_held: s.amount_held ?? 0,
      platform_fee: s.platform_fee ?? 0,
      listener_earning: (s.amount_held ?? 0) - (s.platform_fee ?? 0),
      created_at: s.created_at,
    }))

    return NextResponse.json({ unsettled, total: unsettled.length })
  } catch (err) {
    logger.error('unsettled sessions GET error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
