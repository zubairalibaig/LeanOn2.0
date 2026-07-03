import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, createServerSupabaseClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'
import { settleSession } from '@/lib/session-billing'

// GET — expire abandoned sessions
// Sessions where status='active' AND started_at < now() - (duration_mins + 10 minutes)
// For abandoned sessions, listener gets pro-rated credit based on actual minutes
//
// Auth: CRON_SECRET bearer (Vercel cron) OR authenticated user session (self-heal)
export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  const authHeader = req.headers.get('authorization')

  function cronOk(secret: string, header: string | null): boolean {
    const expected = `Bearer ${secret}`
    const actual   = header ?? ''
    if (actual.length !== expected.length) return false
    return require('crypto').timingSafeEqual(Buffer.from(actual), Buffer.from(expected))
  }

  if (cronSecret && !cronOk(cronSecret, authHeader)) {
    // Not the cron secret — require a valid user session (self-heal path)
    const { checkRateLimit } = await import('@/lib/rate-limit')
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    if (!checkRateLimit(`session-expire:${user.id}`, 1, 60_000)) {
      return NextResponse.json({ expired: 0 })
    }
  } else if (!cronSecret) {
    // No CRON_SECRET configured (any environment) — require a valid user session.
    // Never let this admin-client wallet-mutation loop run anonymously.
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const sb = createAdminClient()

    // Find all active sessions that should have expired
    const { data: activeSessions } = await sb
      .from('sessions')
      .select('*')
      .eq('status', 'active')

    if (!activeSessions || activeSessions.length === 0) {
      return NextResponse.json({ expired: 0 })
    }

    const now = Date.now()
    let expiredCount = 0

    for (const session of activeSessions) {
      const startedAt = new Date(session.started_at).getTime()
      const allowedMs = (session.duration_mins + 10) * 60_000
      if (now - startedAt < allowedMs) continue

      const endedAt = new Date().toISOString()

      // Optimistic lock
      const { data: completed } = await sb
        .from('sessions')
        .update({ status: 'completed', ended_at: endedAt })
        .eq('id', session.id)
        .eq('status', 'active')
        .select()
        .single()

      if (!completed) continue
      expiredCount++

      // Shared settlement math (lib/session-billing.ts). This path only fires
      // when a session overran by 10+ minutes, so it settles as a full session.
      const bookedMins = session.duration_mins as number
      const { billedMins, listenerEarning, refundAmount } = settleSession({
        startedAt:   (session.started_at as string | null) ?? null,
        endedAt,
        bookedMins,
        amountHeld:  session.amount_held as number,
        platformFee: (session.platform_fee as number) ?? 0,
        isFreeTrial: session.is_free_trial as boolean,
      })

      if (listenerEarning > 0 && !session.is_free_trial) {
        await sb.rpc('credit_wallet', { p_user_id: session.listener_id, p_amount: listenerEarning })
          .then(() => {}, () => {})
        await sb.from('wallet_transactions').insert({
          user_id: session.listener_id,
          amount: listenerEarning,
          type: 'credit',
          description: 'Session earnings (auto-expired, pro-rated)',
          session_id: session.id,
        }).then(() => {}, () => {})

        await sb.from('listener_earnings').insert({
          listener_id: session.listener_id,
          session_id: session.id,
          gross_amount: Math.round(session.amount_held),
          platform_fee: Math.round(session.platform_fee ?? 0),
          net_amount: Math.round(listenerEarning),
          status: 'settled',
        }).then(() => {}, () => {})
      }

      if (refundAmount > 0) {
        await sb.rpc('credit_wallet', { p_user_id: session.seeker_id, p_amount: refundAmount })
          .then(() => {}, () => {})
        await sb.from('wallet_transactions').insert({
          user_id: session.seeker_id,
          amount: refundAmount,
          type: 'refund',
          description: 'Session refund (auto-expired)',
          session_id: session.id,
        }).then(() => {}, () => {})
      }

      // Increment total_sessions on listener profile
      const { data: lp } = await sb.from('listener_profiles')
        .select('total_sessions').eq('user_id', session.listener_id).maybeSingle()
      await sb.from('listener_profiles').update({
        total_sessions: ((lp?.total_sessions as number) || 0) + 1,
      }).eq('user_id', session.listener_id).then(() => {}, () => {})

      logger.info('Auto-expired session', { sessionId: session.id, billedMins, listenerEarning, refundAmount })
    }

    return NextResponse.json({ expired: expiredCount })
  } catch (err) {
    logger.error('Session expire error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
