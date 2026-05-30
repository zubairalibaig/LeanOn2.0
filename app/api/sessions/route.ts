import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { PLATFORM_FEE, FREE_SESSION_MINS, MAX_FREE_TRIALS, SESSION_DURATIONS } from '@/lib/constants'
import { notifySessionComplete } from '@/lib/notify'
import { logger } from '@/lib/logger'
import { sendPushNotification } from '@/lib/firebase-admin'

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

    // Note: balance check, seeker-active-session check, and listener-busy check are
    // all handled atomically inside the create_session RPC (migration 002).
    // The pre-checks above serve as early-exit optimizations; the RPC is the authoritative check.

    const agoraChannel = `lo_${crypto.randomUUID()}`

    // Use atomic create_session RPC (defined in migration 002) to prevent TOCTOU races
    const { data: sessionId, error: rpcErr } = await sb.rpc('create_session', {
      p_seeker_id:     user.id,
      p_listener_id:   listenerId,
      p_session_type:  sessionType,
      p_duration_mins: durationMins,
      p_amount_held:   total,
      p_platform_fee:  isFree ? 0 : PLATFORM_FEE,
      p_is_free_trial: isFree,
      p_agora_channel: agoraChannel,
    })

    if (rpcErr) {
      const msg = rpcErr.message || ''
      if (msg.includes('insufficient_balance')) {
        return NextResponse.json({ error: 'insufficient_balance', required: total }, { status: 400 })
      }
      if (msg.includes('already_in_session')) {
        return NextResponse.json({ error: 'already_in_session', message: 'You already have an active session.' }, { status: 409 })
      }
      if (msg.includes('listener_busy')) {
        return NextResponse.json({ error: 'listener_busy', message: 'This listener is in a session right now.' }, { status: 409 })
      }
      throw rpcErr
    }

    if (!isFree) {
      await sb.from('wallet_transactions').insert({
        user_id:     user.id,
        amount:      total,
        type:        'debit',
        description: `${durationMins}-min ${sessionType} session`,
        session_id:  sessionId,
      })
    }

    // Send FCM push notification to listener (Item 27)
    try {
      const { data: listenerUser } = await sb.from('users').select('fcm_token').eq('id', listenerId).single()
      if (listenerUser?.fcm_token) {
        await sendPushNotification(
          listenerUser.fcm_token,
          'New session request!',
          `A seeker wants to connect for a ${durationMins}-minute ${sessionType} session.`,
          { sessionId: String(sessionId), type: 'session_request' }
        )
      }
    } catch (fcmErr) {
      logger.error('FCM push failed (non-critical):', { error: fcmErr instanceof Error ? fcmErr.message : String(fcmErr) })
    }

    return NextResponse.json({ sessionId, total })
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

    // Calculate actual duration and pro-rate (Item 27: harassment eject / early session refund)
    const endedAt = completed.ended_at ?? new Date().toISOString()
    const actualMins = Math.max(0, Math.floor(
      (new Date(endedAt).getTime() - new Date(session.started_at).getTime()) / 60_000
    ))
    const bookedMins = session.duration_mins as number
    const baseListenerEarning = session.amount_held - (session.platform_fee ?? 0)

    // If session ended in < 1 minute: full refund to seeker, no listener earnings
    // If partial: pro-rate based on actual vs booked minutes
    let listenerEarning: number
    let refundAmount = 0
    if (session.is_free_trial) {
      listenerEarning = 0
    } else if (actualMins < 1) {
      listenerEarning = 0
      refundAmount = session.amount_held
    } else if (actualMins < bookedMins) {
      // Pro-rate
      listenerEarning = Math.floor(baseListenerEarning * actualMins / bookedMins)
      refundAmount = session.amount_held - listenerEarning - (session.platform_fee ?? 0)
      refundAmount = Math.max(0, refundAmount)
    } else {
      listenerEarning = baseListenerEarning
    }

    // Issue refund to seeker if applicable
    if (refundAmount > 0 && !session.is_free_trial) {
      await sb.rpc('credit_wallet', { p_user_id: session.seeker_id, p_amount: refundAmount })
        .then(() => {}, () => {})
      await sb.from('wallet_transactions').insert({
        user_id: session.seeker_id,
        amount: refundAmount,
        type: 'refund',
        description: actualMins < 1 ? 'Session refund (ended < 1 min)' : `Session refund (${actualMins}/${bookedMins} min used)`,
        session_id: sessionId,
      }).then(() => {}, () => {})
    }

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

        // Track earnings in listener_earnings for dashboard
        await sb.from('listener_earnings').insert({
          listener_id:  session.listener_id,
          session_id:   sessionId,
          gross_amount: session.amount_held,
          platform_fee: session.platform_fee ?? 0,
          net_amount:   listenerEarning,
          status:       'settled',
        }).then(() => {}, () => {})
      }
    }

    // Follow-up notification for seeker
    await sb.from('notifications').insert({
      user_id:    session.seeker_id,
      type:       'follow_up',
      title:      'How are you feeling?',
      body:       'We hope your conversation helped. Remember, support is available anytime — browse listeners whenever you need.',
      action_url: '/browse',
    }).then(() => {}, () => {})

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
        logger.error('Session notification failed (non-critical):', { error: err instanceof Error ? err.message : String(err) })
      }
    })()

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    logger.error('Session complete error:', { error: err instanceof Error ? err.message : String(err) })
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
