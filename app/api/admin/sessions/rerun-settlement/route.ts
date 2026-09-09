import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'
import { settleSession } from '@/lib/session-billing'

// POST /api/admin/sessions/rerun-settlement
// Re-runs the listener-credit step for a completed session where the
// credit_wallet RPC failed (transient DB/network error).
//
// Safety guarantees:
// - Idempotent: checks whether a credit wallet_transaction already exists
//   for this session before doing anything. If one exists, returns 200 with
//   already_settled = true and does not double-credit.
// - Only works on completed, non-free-trial sessions with amount_held > 0.
// - Admin-only, rate-limited.
// - All three writes (credit_wallet, wallet_transactions, listener_earnings)
//   are attempted in order. Partial failures are logged for manual follow-up.
export async function POST(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const sb = createAdminClient()
    const { sessionId } = await req.json()
    if (!sessionId || typeof sessionId !== 'string') {
      return NextResponse.json({ error: 'sessionId required' }, { status: 400 })
    }

    // Fetch the session
    const { data: session, error: sessErr } = await sb
      .from('sessions')
      .select('id, listener_id, seeker_id, status, is_free_trial, amount_held, platform_fee, started_at, ended_at, duration_mins')
      .eq('id', sessionId)
      .single()
    if (sessErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    if (session.status !== 'completed') {
      return NextResponse.json({ error: 'Session is not completed' }, { status: 400 })
    }
    if (session.is_free_trial) {
      return NextResponse.json({ error: 'Free trial sessions have no listener earnings' }, { status: 400 })
    }
    if (!session.amount_held || session.amount_held <= 0) {
      return NextResponse.json({ error: 'Session has no amount_held' }, { status: 400 })
    }

    // Idempotency check: look for an existing credit wallet_transaction for this session
    const { data: existingCredit } = await sb
      .from('wallet_transactions')
      .select('id, amount')
      .eq('session_id', sessionId)
      .eq('user_id', session.listener_id)
      .eq('type', 'credit')
      .limit(1)
    if (existingCredit && existingCredit.length > 0) {
      return NextResponse.json({
        ok: true,
        already_settled: true,
        message: `Listener already has a credit of ₹${existingCredit[0].amount} for this session`,
      })
    }

    // Calculate what the listener should earn (same math as the settlement path)
    const { listenerEarning } = settleSession({
      startedAt:   session.started_at ?? null,
      endedAt:     session.ended_at ?? new Date().toISOString(),
      bookedMins:  session.duration_mins as number,
      amountHeld:  session.amount_held as number,
      platformFee: (session.platform_fee as number | null) ?? 0,
      isFreeTrial: session.is_free_trial as boolean,
    })

    if (listenerEarning <= 0) {
      return NextResponse.json({ error: 'listenerEarning is 0 — nothing to credit', listenerEarning }, { status: 400 })
    }

    // Run credit_wallet
    const { error: creditErr } = await sb.rpc('credit_wallet', {
      p_user_id: session.listener_id,
      p_amount:  listenerEarning,
    })
    if (creditErr) {
      logger.error('rerun-settlement: credit_wallet failed:', { sessionId, listenerId: session.listener_id, listenerEarning, error: creditErr.message })
      return NextResponse.json({ error: `credit_wallet failed: ${creditErr.message}` }, { status: 500 })
    }

    // Record wallet_transaction
    await sb.from('wallet_transactions').insert({
      user_id:     session.listener_id,
      amount:      listenerEarning,
      type:        'credit',
      description: 'Session earnings (settlement rerun)',
      session_id:  sessionId,
    }).then(() => {}, (e: Error) => logger.error('rerun-settlement: wallet_transactions insert failed', { sessionId, error: e.message }))

    // Upsert listener_earnings (use ON CONFLICT in case partial success previously created a row)
    await sb.from('listener_earnings').upsert({
      listener_id:  session.listener_id,
      session_id:   sessionId,
      gross_amount: Math.round(session.amount_held as number),
      platform_fee: Math.round((session.platform_fee as number | null) ?? 0),
      net_amount:   Math.round(listenerEarning),
      status:       'settled',
    }, { onConflict: 'session_id' }).then(() => {}, (e: Error) => logger.error('rerun-settlement: listener_earnings upsert failed', { sessionId, error: e.message }))

    logger.info('rerun-settlement: success', { sessionId, listenerId: session.listener_id, listenerEarning, adminId: user!.id })

    return NextResponse.json({
      ok: true,
      already_settled: false,
      listenerEarning,
      listenerId: session.listener_id,
    })
  } catch (err) {
    logger.error('rerun-settlement: unexpected error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
