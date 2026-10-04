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
    // Secondary idempotency: listener_earnings row. Written AFTER credit_wallet (see
    // below), so its presence means credit_wallet already succeeded on a prior run.
    // If wallet_transactions failed on that prior run, recover here by writing only the
    // missing ledger row — do NOT call credit_wallet again.
    const { data: existingEarnings } = await sb
      .from('listener_earnings')
      .select('id, net_amount')
      .eq('session_id', sessionId)
      .limit(1)
    if (existingEarnings && existingEarnings.length > 0) {
      // credit_wallet succeeded but wallet_transactions was never written. Write it now.
      const rawNetAmount = existingEarnings[0].net_amount
      if (rawNetAmount == null || !Number.isFinite(Number(rawNetAmount))) {
        logger.error('rerun-settlement: listener_earnings row has null net_amount — manual reconciliation needed', { sessionId })
        return NextResponse.json({ error: 'Earnings record exists but net_amount is null — the wallet credit amount is unknown. Add the wallet_transactions row manually.' }, { status: 500 })
      }
      const recoveredAmount = Number(rawNetAmount)
      const { error: txRecoveryErr } = await sb.from('wallet_transactions').insert({
        user_id:     session.listener_id,
        amount:      recoveredAmount,
        type:        'credit',
        description: 'Session earnings (settlement rerun — ledger recovery)',
        session_id:  sessionId,
      })
      if (txRecoveryErr) {
        logger.error('rerun-settlement: ledger recovery insert failed', { sessionId, listenerId: session.listener_id, recoveredAmount, error: txRecoveryErr.message })
        return NextResponse.json({ error: `Wallet was already credited (₹${recoveredAmount}) on a prior run but ledger record still missing: ${txRecoveryErr.message}. Add the wallet_transactions row manually. Do NOT rerun.` }, { status: 500 })
      }
      logger.info('rerun-settlement: ledger recovery success', { sessionId, listenerId: session.listener_id, recoveredAmount, adminId: user!.id })
      return NextResponse.json({
        ok: true,
        already_settled: false,
        recovered: true,
        listenerEarning: recoveredAmount,
        message: 'Prior run credited the wallet but wallet_transactions row was missing — ledger row added.',
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

    // Run credit_wallet first. Only after it succeeds do we write listener_earnings
    // and wallet_transactions. listener_earnings is the secondary idempotency anchor:
    // its presence (checked above) means credit_wallet already ran successfully.
    const { error: creditErr } = await sb.rpc('credit_wallet', {
      p_user_id: session.listener_id,
      p_amount:  listenerEarning,
    })
    if (creditErr) {
      logger.error('rerun-settlement: credit_wallet failed:', { sessionId, listenerId: session.listener_id, listenerEarning, error: creditErr.message })
      return NextResponse.json({ error: `credit_wallet failed: ${creditErr.message}. Retry is safe — wallet was NOT credited.` }, { status: 500 })
    }

    // Write listener_earnings AFTER credit_wallet. Its presence is the secondary
    // idempotency anchor: any retry that finds this row but no wallet_transactions
    // row knows credit_wallet already succeeded and recovers by writing only the
    // missing ledger row (see secondary check above).
    // recordEarnings logs errors but does not throw — verify the row was actually
    // written before proceeding. Without this check, a silent failure here leaves
    // no idempotency anchor, and the next retry would call credit_wallet again
    // (double-credit), because neither wallet_transactions nor listener_earnings
    // would exist to stop it.
    await recordEarnings(sb, { sessionId, listenerId: session.listener_id, amountHeld: Number(session.amount_held), settlement, mode: 'upsert' })
    const { data: anchorCheck } = await sb.from('listener_earnings').select('id').eq('session_id', sessionId).limit(1)
    if (!anchorCheck || anchorCheck.length === 0) {
      logger.error('rerun-settlement: listener_earnings write failed — idempotency anchor missing. Wallet was credited. DO NOT RERUN until row is manually added.', { sessionId, listenerId: session.listener_id, listenerEarning })
      return NextResponse.json({ error: `Wallet credited (₹${listenerEarning}) but the idempotency earnings record failed to write. DO NOT RERUN — add the listener_earnings row manually first, then retry once.` }, { status: 500 })
    }

    // Record wallet_transaction — the human-readable ledger row. Primary idempotency
    // anchor. If this insert fails after credit_wallet and recordEarnings succeeded,
    // any retry finds listener_earnings (secondary check) and recovers by writing
    // only this row without re-crediting the wallet.
    const { error: txInsertErr } = await sb.from('wallet_transactions').insert({
      user_id:     session.listener_id,
      amount:      listenerEarning,
      type:        'credit',
      description: 'Session earnings (settlement rerun)',
      session_id:  sessionId,
    })
    if (txInsertErr) {
      logger.error('rerun-settlement: wallet_transactions insert FAILED after successful credit_wallet — listener_earnings row exists as idempotency anchor; add the wallet_transactions row manually for ledger reconciliation', { sessionId, listenerId: session.listener_id, listenerEarning, error: txInsertErr.message })
      return NextResponse.json({ error: `Wallet credited (₹${listenerEarning}) but ledger record failed: ${txInsertErr.message}. Rerun to auto-recover (the secondary idempotency check will write only the missing row).` }, { status: 500 })
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
