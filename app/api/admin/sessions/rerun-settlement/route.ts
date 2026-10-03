import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'
import { settleSession } from '@/lib/session-billing'
import { recordEarnings } from '@/lib/settlement-ledger'

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
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (!sessionId || typeof sessionId !== 'string' || !UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Valid sessionId UUID required' }, { status: 400 })
    }

    // Fetch the session
    let { data: session, error: sessErr } = await sb
      .from('sessions')
      .select('id, listener_id, seeker_id, status, is_free_trial, amount_held, platform_fee, started_at, ended_at, duration_mins, listener_rate_per_min, service_fee_rate')
      .eq('id', sessionId)
      .single()
    // service_fee_rate column missing (migration 062 not applied) — retry without it.
    if (sessErr?.message?.includes('service_fee_rate')) {
      const fallback = await sb
        .from('sessions')
        .select('id, listener_id, seeker_id, status, is_free_trial, amount_held, platform_fee, started_at, ended_at, duration_mins, listener_rate_per_min')
        .eq('id', sessionId)
        .single()
      session = fallback.data ? { ...fallback.data, service_fee_rate: null } : null
      sessErr = fallback.error ?? null
    }
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
    // ended_at must be present — substituting now() would bill thousands of minutes
    // for a session that started days ago. Sessions with null ended_at should be
    // resolved via the session expiry flow, not a manual settlement rerun.
    if (!session.ended_at) {
      return NextResponse.json({ error: 'Session has no ended_at timestamp. Resolve via the session expiry flow (/api/sessions/expire), not a manual settlement rerun.' }, { status: 400 })
    }

    // Primary idempotency: wallet_transactions credit row
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
    // Secondary idempotency: listener_earnings row. Written immediately before
    // wallet_transactions in this rerun path (see below), so if wallet_transactions
    // failed on a prior run the earnings row still exists and prevents a double-credit
    // on retry. The wallet_transactions row is missing — add it manually for ledger
    // reconciliation before the next rerun.
    const { data: existingEarnings } = await sb
      .from('listener_earnings')
      .select('id')
      .eq('session_id', sessionId)
      .limit(1)
    if (existingEarnings && existingEarnings.length > 0) {
      return NextResponse.json({
        ok: true,
        already_settled: true,
        message: 'Earnings record exists but wallet_transactions credit row is missing — the listener was credited on a prior run. Add the wallet_transactions row manually for ledger reconciliation.',
      })
    }

    // Calculate what the listener should earn (same math as the settlement path)
    const settlement = settleSession({
      startedAt:   session.started_at ?? null,
      endedAt:     session.ended_at,
      bookedMins:  session.duration_mins as number,
      amountHeld:  session.amount_held as number,
      platformFee: (session.platform_fee as number | null) ?? 0,
      isFreeTrial: session.is_free_trial as boolean,
      listenerRatePerMin: (session.listener_rate_per_min as number | null) ?? undefined,
      serviceFeeRate:     (session.service_fee_rate as number | null) ?? undefined,
    })
    const { listenerEarning } = settlement

    if (listenerEarning <= 0) {
      // Sessions under 60 seconds are "accidental starts": billing rules give full refund
      // to the seeker and nothing to the listener. This is correct, not a gap.
      const ranSecs = session.started_at && session.ended_at
        ? (new Date(session.ended_at).getTime() - new Date(session.started_at).getTime()) / 1000
        : null
      const reason = ranSecs !== null && ranSecs < 60
        ? `Accidental start (ran ${Math.round(ranSecs)}s < 60s) — seeker was fully refunded; no listener earnings per billing rules`
        : 'listenerEarning is 0 — nothing to credit'
      return NextResponse.json({ error: reason, listenerEarning, ranSecs }, { status: 400 })
    }

    // Write listener_earnings BEFORE credit_wallet. This row is the secondary
    // idempotency anchor checked above — if credit_wallet succeeds but
    // wallet_transactions fails, any retry finds this row and stops, preventing
    // a double-credit. Upsert so a re-run over a genuinely-unsettled session
    // (no prior earnings row) inserts cleanly, and a re-run after a partial
    // failure updates the row with the correct values.
    await recordEarnings(sb, { sessionId, listenerId: session.listener_id, amountHeld: Number(session.amount_held), settlement, mode: 'upsert' })

    // Run credit_wallet
    const { error: creditErr } = await sb.rpc('credit_wallet', {
      p_user_id: session.listener_id,
      p_amount:  listenerEarning,
    })
    if (creditErr) {
      logger.error('rerun-settlement: credit_wallet failed:', { sessionId, listenerId: session.listener_id, listenerEarning, error: creditErr.message })
      return NextResponse.json({ error: `credit_wallet failed: ${creditErr.message}` }, { status: 500 })
    }

    // Record wallet_transaction — the human-readable ledger row. The listener_earnings
    // row written above is the true idempotency anchor; if this insert fails after
    // credit_wallet succeeded, any retry finds listener_earnings and stops safely.
    // Still treat this as a hard error so the admin knows to add the row manually.
    const { error: txInsertErr } = await sb.from('wallet_transactions').insert({
      user_id:     session.listener_id,
      amount:      listenerEarning,
      type:        'credit',
      description: 'Session earnings (settlement rerun)',
      session_id:  sessionId,
    })
    if (txInsertErr) {
      logger.error('rerun-settlement: wallet_transactions insert FAILED after successful credit_wallet — listener_earnings row exists as idempotency anchor; add the wallet_transactions row manually for ledger reconciliation', { sessionId, listenerId: session.listener_id, listenerEarning, error: txInsertErr.message })
      return NextResponse.json({ error: `Wallet credited (₹${listenerEarning}) but ledger record failed: ${txInsertErr.message}. Add the wallet_transactions row manually. Do NOT rerun — the listener was credited.` }, { status: 500 })
    }

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
