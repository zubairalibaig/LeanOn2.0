import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { UUID_RE } from '@/lib/constants'
import { voiceSwitchRefund } from '@/lib/session-billing'
import { logger } from '@/lib/logger'

// POST /api/sessions/switch-to-text  { sessionId }
// Either participant can fall back from a voice call to text. The session
// becomes a text session and the seeker is refunded the voice premium for the
// unused minutes (see voiceSwitchRefund).
//
// Double-refund safety: the switch is claimed by ONE conditional UPDATE
// (status active, still voice, not ended, amount_held unchanged). Settlement
// (PATCH / cleanup / expire) uses the row returned by its own conditional
// UPDATE, so whichever commits first wins and the other sees the result:
// switch first → settlement bills the lowered amount_held; settlement first →
// this UPDATE matches nothing and no refund is issued.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`switch-text:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const { sessionId } = await req.json().catch(() => ({}))
    if (typeof sessionId !== 'string' || !UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }

    const sb = createAdminClient()
    const { data: s } = await sb.from('sessions')
      .select('id, seeker_id, listener_id, status, session_type, amount_held, platform_fee, duration_mins, is_free_trial, listener_rate_per_min, started_at, created_at, ended_at')
      .eq('id', sessionId)
      .single()
    if (!s) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    if (user.id !== s.seeker_id && user.id !== s.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }
    if (s.session_type !== 'voice') return NextResponse.json({ success: true, refund: 0 })
    if (s.status !== 'active' || s.ended_at) {
      return NextResponse.json({ error: 'Session is not active' }, { status: 409 })
    }

    const amountHeld = Number(s.amount_held)
    const refund = voiceSwitchRefund({ ...s, amount_held: amountHeld }, Date.now())

    const { data: claimed } = await sb.from('sessions')
      .update({ session_type: 'text', amount_held: amountHeld - refund })
      .eq('id', sessionId)
      .eq('status', 'active')
      .eq('session_type', 'voice')
      .eq('amount_held', amountHeld)
      .is('ended_at', null)
      .select('id')
      .maybeSingle()
    if (!claimed) {
      // Lost a race — another switch or settlement got there first.
      return NextResponse.json({ success: true, refund: 0 })
    }

    if (refund > 0) {
      const { error: creditErr } = await sb.rpc('credit_wallet', { p_user_id: s.seeker_id, p_amount: refund })
      if (creditErr) {
        // amount_held is already lowered, so settlement won't bill this — the
        // seeker is owed `refund`. RECONCILIATION: search logs for this line.
        logger.error('switch-to-text credit_wallet failed — RECONCILIATION NEEDED — seeker owed refund:', {
          sessionId, seekerId: s.seeker_id, refund, error: creditErr.message,
        })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id:     s.seeker_id,
          amount:      refund,
          type:        'refund',
          description: 'Voice extra refunded (switched to text)',
          session_id:  sessionId,
        }).then(() => {}, (e) => logger.error('switch-to-text wallet_transactions insert failed', { sessionId, error: e }))
      }
    }

    return NextResponse.json({ success: true, refund })
  } catch (err) {
    logger.error('switch-to-text error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
