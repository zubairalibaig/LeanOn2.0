import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { PLATFORM_FEE, FREE_SESSION_MINS, MAX_FREE_TRIALS, SESSION_DURATIONS } from '@/lib/constants'
import { notifySessionComplete } from '@/lib/notify'
import { logger } from '@/lib/logger'

const VALID_SESSION_TYPES = ['text', 'voice'] as const
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// POST — create session + deduct wallet atomically
export async function POST(req: NextRequest) {
  try {
    const { listenerId, durationMins, sessionType } = await req.json()

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // Input validation — prevents crafted requests with invalid durations/types
    if (!UUID_RE.test(listenerId)) {
      return NextResponse.json({ error: 'Invalid listener' }, { status: 400 })
    }
    if (!(SESSION_DURATIONS as readonly number[]).includes(durationMins)) {
      return NextResponse.json({ error: 'Invalid session duration' }, { status: 400 })
    }
    if (!VALID_SESSION_TYPES.includes(sessionType)) {
      return NextResponse.json({ error: 'Invalid session type' }, { status: 400 })
    }

    // 5 session-starts per minute per user — prevents spam booking
    if (!checkRateLimit(`session:${user.id}`, 5, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const sb     = createAdminClient()
    const isFree = durationMins === FREE_SESSION_MINS

    // Up to MAX_FREE_TRIALS free trials per user — lets them try multiple listeners
    if (isFree) {
      const { count } = await sb
        .from('sessions')
        .select('id', { count: 'exact', head: true })
        .eq('seeker_id', user.id)
        .eq('is_free_trial', true)
      if ((count ?? 0) >= MAX_FREE_TRIALS) {
        return NextResponse.json({ error: 'free_trial_used', message: `You've used all ${MAX_FREE_TRIALS} of your free 5-min trials. Recharge your wallet to continue.` }, { status: 400 })
      }
    }

    // Verify listener is active and available (server-side — client-side check is not enough)
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('rate_per_min, is_active, is_available, is_approved')
      .eq('user_id', listenerId)
      .single()

    if (!lp?.is_active || !lp?.is_approved) {
      return NextResponse.json({ error: 'listener_unavailable', message: 'This listener is not available.' }, { status: 400 })
    }
    // is_available check applies to ALL session types — free trials included.
    // A listener who has gone offline should not receive any sessions.
    if (!lp?.is_available) {
      return NextResponse.json({ error: 'listener_offline', message: 'This listener is currently offline.' }, { status: 400 })
    }

    // Block paid sessions if listener already has an active paid session
    if (!isFree) {
      const { data: activeSessions } = await sb
        .from('sessions')
        .select('id')
        .eq('listener_id', listenerId)
        .eq('status', 'active')
        .eq('is_free_trial', false)
        .limit(1)
      if (activeSessions && activeSessions.length > 0) {
        return NextResponse.json({ error: 'listener_busy', message: 'This listener is in a session right now. Please try again shortly.' }, { status: 409 })
      }
    }

    // Multi-device guard: seeker cannot start two sessions simultaneously
    const { data: seekerActive } = await sb
      .from('sessions')
      .select('id')
      .eq('seeker_id', user.id)
      .eq('status', 'active')
      .limit(1)
    if (seekerActive && seekerActive.length > 0) {
      return NextResponse.json({ error: 'already_in_session', message: 'You already have an active session. Please complete it before starting a new one.', sessionId: seekerActive[0].id }, { status: 409 })
    }

    const rate  = lp.rate_per_min ?? 10  // ?? not || — a legitimate rate of 0 must not be overridden
    const base  = isFree ? 0 : rate * durationMins
    const total = isFree ? 0 : base + PLATFORM_FEE

    if (!isFree) {
      const { data: u } = await sb
        .from('users')
        .select('wallet_balance')
        .eq('id', user.id)
        .single()

      if (!u || u.wallet_balance < total) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }
    }

    // Insert session BEFORE deducting wallet — if insert fails, no money is taken
    const { data: session, error: sErr } = await sb.from('sessions').insert({
      seeker_id:     user.id,
      listener_id:   listenerId,
      session_type:  sessionType,
      duration_mins: durationMins,
      amount_held:   total,
      platform_fee:  isFree ? 0 : PLATFORM_FEE,
      is_free_trial: isFree,
      agora_channel: `lo_${crypto.randomUUID()}`,
      status:        'active',
      started_at:    new Date().toISOString(),
    }).select().single()

    if (sErr) throw sErr

    if (!isFree) {
      // Deduct atomically — if this fails, cancel the session (no money was taken)
      const { error: deductErr } = await sb.rpc('deduct_wallet', {
        p_user_id: user.id,
        p_amount:  total,
      })

      if (deductErr) {
        logger.error('deduct_wallet RPC failed — cancelling session:', { sessionId: session.id, deductErr: deductErr as unknown })
        await sb.from('sessions').update({ status: 'cancelled' }).eq('id', session.id)
        return NextResponse.json({ error: 'Payment processing failed. Please try again.' }, { status: 500 })
      }

      await sb.from('wallet_transactions').insert({
        user_id:     user.id,
        amount:      total,
        type:        'debit',
        description: `${durationMins}-min ${sessionType} session`,
        session_id:  session.id,
      })
    }

    return NextResponse.json({ sessionId: session.id, total })
  } catch (err: unknown) {
    logger.error('Session create error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}

// PATCH — complete session + credit listener + update rating average
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating } = await req.json()

    // Validate sessionId is a proper UUID before using it in any DB query
    if (!sessionId || !UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }
    // Validate rating when provided — must be integer 1–5
    if (rating !== undefined) {
      if (typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        return NextResponse.json({ error: 'Rating must be an integer from 1 to 5' }, { status: 400 })
      }
    }

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sb = createAdminClient()

    const { data: session, error: sErr } = await sb
      .from('sessions')
      .select('*')
      .eq('id', sessionId)
      .single()

    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Optimistic lock — prevents double-payout if two requests race
    const { data: completed } = await sb
      .from('sessions')
      .update({
        status:   'completed',
        ended_at: new Date().toISOString(),
        ...(rating ? { seeker_rating: rating } : {}),
      })
      .eq('id', sessionId)
      .eq('status', 'active')
      .select()
      .single()

    if (!completed) {
      // Already completed — only seeker can update rating
      if (rating && user.id === session.seeker_id) {
        await sb.from('sessions').update({ seeker_rating: rating })
          .eq('id', sessionId).eq('seeker_id', user.id)
        // Recalculate rating average even on late updates
        await updateListenerRating(sb, session.listener_id)
      }
      return NextResponse.json({ success: true })
    }

    const listenerEarning = session.amount_held - (session.platform_fee ?? 0)
    if (listenerEarning > 0 && !session.is_free_trial) {
      const { error: creditErr } = await sb.rpc('credit_wallet', {
        p_user_id: session.listener_id,
        p_amount:  listenerEarning,
      })

      if (creditErr) {
        logger.error('credit_wallet RPC failed — manual reconciliation needed:', {
          sessionId, listenerId: session.listener_id, amount: listenerEarning,
        })
      } else {
        await sb.from('wallet_transactions').insert({
          user_id:     session.listener_id,
          amount:      listenerEarning,
          type:        'credit',
          description: 'Session earnings',
          session_id:  sessionId,
        })
      }
    }

    const { data: lp } = await sb
      .from('listener_profiles')
      .select('total_sessions')
      .eq('user_id', session.listener_id)
      .single()

    await sb.from('listener_profiles').update({
      total_sessions: (lp?.total_sessions || 0) + 1,
    }).eq('user_id', session.listener_id)

    // Update rating average when session has a rating
    if (rating) await updateListenerRating(sb, session.listener_id)

    // Fire-and-forget session completion notifications (non-blocking)
    ;(async () => {
      try {
        const [seekerAuth, listenerAuth, namesRes] = await Promise.all([
          sb.auth.admin.getUserById(session.seeker_id),
          sb.auth.admin.getUserById(session.listener_id),
          sb.from('users').select('id, name').in('id', [session.seeker_id, session.listener_id]),
        ])
        const nameMap = Object.fromEntries(
          ((namesRes.data ?? []) as { id: string; name: string }[]).map(u => [u.id, u.name])
        )
        await notifySessionComplete({
          seekerEmail:     seekerAuth.data?.user?.email ?? null,
          listenerEmail:   listenerAuth.data?.user?.email ?? null,
          seekerName:      nameMap[session.seeker_id] ?? 'there',
          listenerName:    nameMap[session.listener_id] ?? 'Listener',
          durationMins:    session.duration_mins as number,
          sessionType:     session.session_type as string,
          listenerEarning: listenerEarning > 0 ? listenerEarning : 0,
        })
      } catch (err) {
        console.error('Session notification failed (non-critical):', err)
      }
    })()

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Session complete error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}

async function updateListenerRating(sb: ReturnType<typeof createAdminClient>, listenerId: string) {
  const { data: rows } = await sb
    .from('sessions')
    .select('seeker_rating')
    .eq('listener_id', listenerId)
    .not('seeker_rating', 'is', null)

  if (!rows || rows.length === 0) return

  const avg = rows.reduce((s, r) => s + (r.seeker_rating as number), 0) / rows.length
  await sb.from('listener_profiles')
    .update({ rating: Math.round(avg * 100) / 100 })
    .eq('user_id', listenerId)
}
