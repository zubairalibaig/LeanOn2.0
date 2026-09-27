import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { recordMissedRequest } from '@/lib/listener-presence'
import { settleSession, abandonedSessionEnd } from '@/lib/session-billing'
import { applySettlement } from '@/lib/settlement-ledger'
import { REQUEST_RESPONSE_WINDOW_MS } from '@/lib/constants'

// POST — clean up sessions that have been "active" past their scheduled end time.
// Called by Vercel cron job (daily at 02:00 UTC).
//
// SECURITY: This endpoint runs with the service-role client and mutates wallet
// balances across all users. It must ONLY be callable by the Vercel cron job
// via CRON_SECRET. The previous "self-heal" path allowed any authenticated user
// to invoke the global financial-mutation loop — broken function-level authorization
// (OWASP API5). Self-heal for a specific session should use a scoped per-session
// endpoint, never the global cron job.
//
// A session is considered orphaned if:
//   status = 'active'  AND  started_at + duration_mins * 60s < now - 2 min grace period
export async function POST(req: Request) {
  const cronSecret = process.env.CRON_SECRET
  const authHeader = req.headers.get('authorization')

  function cronOk(secret: string, header: string | null): boolean {
    const expected = `Bearer ${secret}`
    const actual   = header ?? ''
    if (actual.length !== expected.length) return false
    return require('crypto').timingSafeEqual(Buffer.from(actual), Buffer.from(expected))
  }

  if (!cronSecret) {
    // No CRON_SECRET configured — deny all. Set CRON_SECRET in Vercel env vars.
    logger.error('Session cleanup called but CRON_SECRET is not set — denying all access')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (!cronOk(cronSecret, authHeader)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const sb = createAdminClient()

  // Find sessions that started more than (duration + 2 min grace) ago and are still active
  const { data: orphans, error } = await sb
    .from('sessions')
    .select('*')
    .eq('status', 'active')
    .lt('started_at', new Date(Date.now() - 2 * 60_000).toISOString()) // at least 2 min old

  if (error) {
    logger.error('Session cleanup query failed', { error: error.message })
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const now = Date.now()
  const expired = (orphans ?? []).filter(s => {
    const started = new Date(s.started_at).getTime()
    const durationMs = (s.duration_mins as number) * 60_000
    const grace = 2 * 60_000 // 2-minute grace period
    return started + durationMs + grace < now
  })

  let cleaned = 0
  for (const session of expired) {
    // Nobody pressed "End": bill up to when the first person actually left
    // (heartbeats), not the time this job happens to run.
    const effectiveEnd = abandonedSessionEnd(session, new Date().toISOString())
    const { data: completed } = await sb
      .from('sessions')
      .update({ status: 'completed', ended_at: effectiveEnd })
      .eq('id', session.id)
      .eq('status', 'active') // optimistic lock
      .select()
      .single()

    if (!completed) continue // already handled by another process

    // Shared settlement math (lib/session-billing.ts) — whole minutes rounded
    // UP capped at booked, so a full-length session never gets shaved by floor.
    const endedAt = completed.ended_at ?? new Date().toISOString()
    const bookedMins = completed.duration_mins as number
    const { billedMins, listenerEarning: earning, refundAmount, listenerServiceFee } = settleSession({
      startedAt:          (completed.started_at as string | null) ?? null,
      endedAt,
      bookedMins,
      amountHeld:         completed.amount_held as number,
      platformFee:        (completed.platform_fee as number) ?? 0,
      isFreeTrial:        completed.is_free_trial as boolean,
      listenerRatePerMin: (completed.listener_rate_per_min as number | null) ?? undefined,
      serviceFeeRate:     (completed.service_fee_rate as number | null) ?? undefined,
    })

    await applySettlement(sb, {
      sessionId: session.id, seekerId: session.seeker_id, listenerId: session.listener_id,
      amountHeld: Number(completed.amount_held), isFreeTrial: completed.is_free_trial as boolean,
      settlement: { billedMins, listenerEarning: earning, refundAmount, listenerServiceFee }, bookedMins, source: 'auto-closed',
    })

    // Increment listener total_sessions and clear in-session flag
    const { data: lp } = await sb.from('listener_profiles')
      .select('total_sessions').eq('user_id', session.listener_id).single()
    await sb.from('listener_profiles').update({
      total_sessions: ((lp?.total_sessions as number) || 0) + 1,
      is_in_session: false,
    }).eq('user_id', session.listener_id)

    cleaned++
  }

  // Cancel stale pending sessions (stuck in 'pending' past the response window — refund seeker)
  const { data: stalePending } = await sb
    .from('sessions')
    .select('id, seeker_id, listener_id, amount_held')
    .eq('status', 'pending')
    .lt('created_at', new Date(Date.now() - REQUEST_RESPONSE_WINDOW_MS).toISOString())

  let staleCancelled = 0
  for (const s of stalePending ?? []) {
    const { data: cancelled } = await sb
      .from('sessions')
      .update({ status: 'cancelled', ended_at: new Date().toISOString(), cancel_reason: 'timed_out' })
      .eq('id', s.id)
      .eq('status', 'pending')
      .select()
      .single()

    if (!cancelled) continue

    // Refund held amount back to seeker
    if ((s.amount_held as number) > 0) {
      const { error: refundErr } = await sb.rpc('credit_wallet', {
        p_user_id: s.seeker_id,
        p_amount: s.amount_held,
      })
      if (refundErr) {
        logger.error('cleanup: stale pending refund failed', { sessionId: s.id, seekerId: s.seeker_id })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id: s.seeker_id,
          amount: s.amount_held,
          type: 'refund',
          description: 'Refund — listener did not respond',
          session_id: s.id,
        })
        // Notify the seeker so they know the request lapsed and was refunded
        await sb.from('notifications').insert({
          user_id: s.seeker_id,
          type: 'session_cancelled',
          title: 'No response from listener',
          body: 'Your request timed out and your wallet has been fully refunded. Try another listener anytime.',
          action_url: '/browse',
        }).then(() => {}, () => {})
        staleCancelled++
      }
    } else {
      staleCancelled++
    }
    // After the refund. Only acts on requests that expired just now — cleanup
    // mostly finds hours-old ones, which say nothing about the listener today.
    await recordMissedRequest(sb, { listenerId: s.listener_id as string, sessionId: s.id as string })
  }

  logger.info('Session cleanup complete', {
    cleaned,
    checked: (orphans ?? []).length,
    staleCancelled,
    stalePendingChecked: (stalePending ?? []).length,
  })
  return NextResponse.json({ cleaned, checked: (orphans ?? []).length, staleCancelled })
}

// Vercel cron sends GET requests — delegate to the same handler
export { POST as GET }
