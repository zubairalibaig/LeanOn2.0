import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// POST — clean up sessions that have been "active" past their scheduled end time.
// Called by Vercel cron job (daily at 02:00 UTC) and by session page on mount (self-heal).
//
// A session is considered orphaned if:
//   status = 'active'  AND  started_at + duration_mins * 60s < now - 2 min grace period
//
// Vercel cron authentication: cron requests include the CRON_SECRET header.
export async function POST(req: Request) {
  // Auth: accept either a valid CRON_SECRET bearer token (Vercel cron)
  // OR an authenticated user session (session-page self-heal on mount).
  // Plain unauthenticated requests are rejected when CRON_SECRET is configured.
  const cronSecret = process.env.CRON_SECRET
  const authHeader = req.headers.get('authorization')

  if (!cronSecret) {
    // No cron secret configured (any environment) — require at minimum a valid
    // user session. Never let this admin-client wallet-mutation loop run anonymously.
    const { createServerSupabaseClient: makeClient } = await import('@/lib/supabase-server')
    const { data: { user } } = await makeClient().auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  function cronOk(secret: string, header: string | null): boolean {
    const expected = `Bearer ${secret}`
    const actual   = header ?? ''
    if (actual.length !== expected.length) return false
    return require('crypto').timingSafeEqual(Buffer.from(actual), Buffer.from(expected))
  }

  if (cronSecret) {
    if (cronOk(cronSecret, authHeader)) {
      // Verified cron call — proceed
    } else {
      // Not the cron secret — require a valid user session (self-heal path)
      const { createServerSupabaseClient } = await import('@/lib/supabase-server')
      const { checkRateLimit } = await import('@/lib/rate-limit')
      const userSb = createServerSupabaseClient()
      const { data: { user } } = await userSb.auth.getUser()
      if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      // Rate-limit self-heal: 1 per user per minute to prevent DoS/cost amplification
      if (!checkRateLimit(`session-cleanup:${user.id}`, 1, 60_000)) {
        return NextResponse.json({ cleaned: 0, checked: 0, staleCancelled: 0 })
      }
    }
  }

  const sb = createAdminClient()

  // Find sessions that started more than (duration + 2 min grace) ago and are still active
  const { data: orphans, error } = await sb
    .from('sessions')
    .select('id, seeker_id, listener_id, amount_held, platform_fee, is_free_trial, duration_mins, started_at')
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
    // Mark completed
    const { data: completed } = await sb
      .from('sessions')
      .update({ status: 'completed', ended_at: new Date().toISOString() })
      .eq('id', session.id)
      .eq('status', 'active') // optimistic lock
      .select()
      .single()

    if (!completed) continue // already handled by another process

    // Pro-rate listener earnings based on actual time used vs booked time
    const endedAt = completed.ended_at ?? new Date().toISOString()
    const startedAt = session.started_at ?? endedAt
    const actualMins = Math.max(0, Math.floor(
      (new Date(endedAt).getTime() - new Date(startedAt).getTime()) / 60_000
    ))
    const bookedMins = session.duration_mins as number
    const baseEarning = (session.amount_held as number) - ((session.platform_fee as number) ?? 0)
    const earning = actualMins < 1 ? 0
      : actualMins >= bookedMins ? baseEarning
      : Math.floor(baseEarning * actualMins / bookedMins)
    const refundAmount = session.is_free_trial ? 0
      : Math.max(0, (session.amount_held as number) - earning - ((session.platform_fee as number) ?? 0))

    // Refund seeker for unused portion
    if (refundAmount > 0 && !session.is_free_trial) {
      const { error: refundErr } = await sb.rpc('credit_wallet', { p_user_id: session.seeker_id, p_amount: refundAmount })
      if (refundErr) {
        logger.error('cleanup: seeker refund failed — manual reconciliation needed', { sessionId: session.id, seekerId: session.seeker_id, refundAmount })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id: session.seeker_id,
          amount: refundAmount,
          type: 'refund',
          description: `Session refund (auto-closed, ${actualMins}/${bookedMins} min used)`,
          session_id: session.id,
        }).then(() => {}, (e) => logger.error('cleanup: seeker refund tx insert failed:', { sessionId: session.id, error: String(e) }))
      }
    }

    if (earning > 0 && !session.is_free_trial) {
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: session.listener_id,
        p_amount: earning,
      })
      if (creditErr) {
        logger.error('cleanup: credit_wallet failed — manual reconciliation needed', {
          sessionId: session.id, listenerId: session.listener_id, earning,
        })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id: session.listener_id,
          amount: earning,
          type: 'credit',
          description: `Session earnings (auto-closed, ${actualMins}/${bookedMins} min)`,
          session_id: session.id,
        })
        // Insert earnings record so it appears in the earnings dashboard
        await sb.from('listener_earnings').insert({
          listener_id: session.listener_id,
          session_id: session.id,
          gross_amount: Math.round(session.amount_held as number),
          platform_fee: Math.round((session.platform_fee as number) ?? 0),
          net_amount: Math.round(earning),
          status: 'settled',
        }).then(
          () => {},
          (e) => logger.error('cleanup: listener_earnings insert failed (earnings ledger gap):', { sessionId: session.id, error: String(e) }),
        )
      }
    }

    // Increment listener total_sessions
    const { data: lp } = await sb.from('listener_profiles')
      .select('total_sessions').eq('user_id', session.listener_id).single()
    await sb.from('listener_profiles').update({
      total_sessions: ((lp?.total_sessions as number) || 0) + 1,
    }).eq('user_id', session.listener_id)

    cleaned++
  }

  // Cancel stale pending sessions (stuck in 'pending' for > 5 minutes — refund seeker)
  const { data: stalePending } = await sb
    .from('sessions')
    .select('id, seeker_id, amount_held')
    .eq('status', 'pending')
    .lt('created_at', new Date(Date.now() - 5 * 60_000).toISOString())

  let staleCancelled = 0
  for (const s of stalePending ?? []) {
    const { data: cancelled } = await sb
      .from('sessions')
      .update({ status: 'cancelled', ended_at: new Date().toISOString() })
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
          type: 'credit',
          description: 'Refund — session not accepted',
          session_id: s.id,
        })
        staleCancelled++
      }
    } else {
      staleCancelled++
    }
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
