import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

// GET /api/admin/sessions/unsettled
// Returns completed paid sessions where no credit wallet_transaction exists
// for the listener — i.e., sessions where the listener was never paid.
// Used by the admin sessions tab to surface "Fix Settlement" buttons.
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()

    // Completed, paid sessions
    const { data: sessions, error: sErr } = await sb
      .from('sessions')
      .select('id, listener_id, amount_held, platform_fee, created_at, listener:users!listener_id(name)')
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

    type RawSession = { id: string; listener_id: string; amount_held: number | null; platform_fee: number | null; created_at: string | null; listener: { name?: string } | null }
    // Sessions with NO credit = unsettled
    const unsettled = (sessions as RawSession[]).filter((s: RawSession) => !creditedSessionIds.has(s.id)).map((s: RawSession) => ({
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
