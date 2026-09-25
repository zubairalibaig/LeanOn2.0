import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { PLATFORM_FEE, FREE_SESSION_MINS, MAX_FREE_TRIALS, SESSION_DURATIONS, sessionRatePerMin, REQUEST_RESPONSE_WINDOW_SECS, serviceFeeRateAt } from '@/lib/constants'
import { isNriCountry, NRI_INR_EQUIV } from '@/lib/geo-pricing'
import { isUnlimitedTestPhone } from '@/lib/test-users'
import { settleSession } from '@/lib/session-billing'
import { applySettlement } from '@/lib/settlement-ledger'
import { notifySessionComplete } from '@/lib/notify'
import { logger } from '@/lib/logger'
import { sendPushToUser } from '@/lib/push'

const VALID_SESSION_TYPES = ['text', 'voice'] as const
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// POST — create session + deduct wallet atomically
// SECURITY: auth required — user context for auth check, admin client for atomic DB operations
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
    if (listenerId === user.id) {
      return NextResponse.json({ error: 'cannot_book_self', message: 'You cannot start a session with your own listener profile.' }, { status: 400 })
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

    // Block suspended/banned seekers from booking any sessions
    const { data: seekerRow } = await sb.from('users').select('is_suspended').eq('id', user.id).single()
    if (seekerRow?.is_suspended) {
      return NextResponse.json({ error: 'Your account has been suspended. Please contact support.' }, { status: 403 })
    }

    // Owner / QA accounts (configured via TEST_UNLIMITED_PHONES env var) skip
    // the free-trial caps entirely so they can start unlimited free sessions
    // with any listener for testing and outreach, including longer durations at no cost.
    const unlimitedTester = isUnlimitedTestPhone(user.phone)
    // effectivelyFree = true means zero cost and free-trial flag — applies to all durations for unlimited testers
    const effectivelyFree = isFree || unlimitedTester

    // Up to MAX_FREE_TRIALS *completed* free trials per user, ONE per listener.
    // Cancelled sessions do NOT count — the seeker never got value from them.
    if (isFree && !unlimitedTester) {
      const [totalTrials, listenerTrial] = await Promise.all([
        sb.from('sessions').select('id', { count: 'exact', head: true })
          .eq('seeker_id', user.id).eq('is_free_trial', true).eq('status', 'completed'),
        sb.from('sessions').select('id', { count: 'exact', head: true })
          .eq('seeker_id', user.id).eq('listener_id', listenerId).eq('is_free_trial', true).eq('status', 'completed'),
      ])
      if ((totalTrials.count ?? 0) >= MAX_FREE_TRIALS) {
        return NextResponse.json({ error: 'free_trial_used', message: `You've used all ${MAX_FREE_TRIALS} of your free 5-min trials. Recharge your wallet to continue.` }, { status: 400 })
      }
      if ((listenerTrial.count ?? 0) > 0) {
        return NextResponse.json({ error: 'free_trial_used', message: 'You already had a free trial with this listener. Select a paid session to continue.' }, { status: 400 })
      }
    }

    // Verify listener is active and available (server-side — client-side check is not enough)
    // custom_service_fee_rate was added in migration 062. If the migration hasn't run yet
    // the column is missing and Supabase returns an error, not just a null row — which
    // makes !lp true and produces a misleading "Listener not found" 400. Retry without
    // the new column so bookings keep working regardless of migration order.
    let { data: lp, error: lpColErr } = await sb
      .from('listener_profiles')
      .select('rate_per_min, is_active, is_available, is_approved, is_suspended, custom_service_fee_rate')
      .eq('user_id', listenerId)
      .single()
    if (lpColErr?.message?.includes('custom_service_fee_rate')) {
      const fallback = await sb.from('listener_profiles')
        .select('rate_per_min, is_active, is_available, is_approved, is_suspended')
        .eq('user_id', listenerId).single()
      lp = fallback.data ? { ...fallback.data, custom_service_fee_rate: null } : null
    }

    if (!lp) {
      return NextResponse.json({ error: 'listener_unavailable', message: 'Listener not found.' }, { status: 400 })
    }
    if (lp.is_suspended) {
      return NextResponse.json({ error: 'listener_unavailable', message: 'This listener is not available.' }, { status: 400 })
    }
    if (!lp.is_active || !lp.is_approved) {
      return NextResponse.json({ error: 'listener_unavailable', message: 'This listener is not available.' }, { status: 400 })
    }
    // is_available check applies to ALL session types — free trials included.
    // A listener who has gone offline should not receive any sessions.
    if (!lp.is_available) {
      return NextResponse.json({ error: 'listener_offline', message: 'This listener is currently offline.' }, { status: 400 })
    }

    // Block paid sessions if listener already has any active session (free trial or paid)
    if (!effectivelyFree) {
      const { data: activeSessions } = await sb
        .from('sessions')
        .select('id')
        .eq('listener_id', listenerId)
        .in('status', ['active', 'pending'])
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
      .in('status', ['active', 'pending'])
      .limit(1)
    if (seekerActive && seekerActive.length > 0) {
      return NextResponse.json({ error: 'already_in_session', message: 'You already have a session in progress. Please finish or cancel it before starting a new one.', sessionId: seekerActive[0].id }, { status: 409 })
    }

    // Voice bills at text rate + premium. This per-mode rate is also what gets
    // stored in listener_rate_per_min below — settlement caps the listener's
    // share at that rate × billed mins, so storing the text rate would strip
    // the voice premium from the listener's earnings.
    const rate  = sessionRatePerMin(Number(lp.rate_per_min ?? 10), sessionType)  // ?? not || — a legitimate rate of 0 must not be overridden
    // Lock the service fee rate at booking time. Per-listener custom rate wins over
    // the global schedule. NULL custom_service_fee_rate means "use global rate".
    // Resolution chain: custom override → global SERVICE_FEE_SCHEDULE.
    // (Future: a fee_tier lookup can be inserted between the two.)
    const bookedServiceFeeRate = (lp as { custom_service_fee_rate?: number | null }).custom_service_fee_rate
      ?? serviceFeeRateAt(new Date().toISOString())

    // NRI pricing (Phase 2): if the seeker signed up with a non-India country,
    // bill at the flat INR equivalent of the USD price. The listener still earns
    // their configured rate × billed_mins minus the service fee — LeanOn keeps the NRI margin.
    // We read account_country from the DB (never from the request body) so a
    // crafted request cannot claim India status to avoid NRI pricing.
    let isNriSession = false
    if (!effectivelyFree && (SESSION_DURATIONS as readonly number[]).includes(durationMins) && durationMins !== FREE_SESSION_MINS) {
      const { data: seekerCountryRow } = await sb
        .from('users').select('account_country').eq('id', user.id).single()
      if (isNriCountry(seekerCountryRow?.account_country) && NRI_INR_EQUIV[durationMins as 15 | 30 | 45]) {
        isNriSession = true
      }
    }

    const base  = effectivelyFree ? 0 : isNriSession
      ? NRI_INR_EQUIV[durationMins as 15 | 30 | 45] - PLATFORM_FEE  // flat price minus the ₹10 fee
      : rate * durationMins
    const total = effectivelyFree ? 0 : base + PLATFORM_FEE

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
      p_platform_fee:  effectivelyFree ? 0 : PLATFORM_FEE,
      p_is_free_trial: effectivelyFree,
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

    // Store listener's rate on the session so settlement can correctly split
    // earnings for NRI sessions (where amount_held = flat NRI price, not rate×duration).
    // Awaited so settlement always has the correct rate before the session starts.
    // Settlement caps the listener's share with this rate; without it an NRI
    // session (flat-price amount_held) would pay the listener the whole flat
    // price. So a failed write is fatal: retry once, else cancel + refund.
    if (!effectivelyFree && sessionId) {
      const writeRate = () => sb.from('sessions')
        .update({ listener_rate_per_min: Math.round(rate), service_fee_rate: bookedServiceFeeRate })
        .eq('id', sessionId)
      let { error: rpmErr } = await writeRate()
      // service_fee_rate column may be missing if migration 062 hasn't run yet.
      // Fall back to writing only listener_rate_per_min (the NRI-critical column)
      // so bookings keep working. Settlement falls back to serviceFeeRateAt(started_at)
      // when service_fee_rate is NULL — safe for both India and NRI sessions.
      if (rpmErr?.message?.includes('service_fee_rate')) {
        const writeLegacy = () => sb.from('sessions')
          .update({ listener_rate_per_min: Math.round(rate) }).eq('id', sessionId)
        rpmErr = (await writeLegacy()).error ?? null
        if (rpmErr) rpmErr = (await writeLegacy()).error ?? null
      } else if (rpmErr) {
        ;({ error: rpmErr } = await writeRate())
      }
      if (rpmErr) {
        logger.error('Session POST: listener_rate_per_min update failed — cancelling session', { sessionId, error: rpmErr.message })
        const now = new Date().toISOString()
        const { data: cancelled } = await sb.from('sessions')
          .update({ status: 'cancelled', ended_at: now, responded_at: now, cancel_reason: 'booking_error' })
          .eq('id', sessionId)
          .eq('status', 'pending')
          .select('id')
          .maybeSingle()
        if (cancelled) {
          const { error: refundErr } = await sb.rpc('credit_wallet', { p_user_id: user.id, p_amount: total })
          if (refundErr) {
            logger.error('Session POST: booking_error refund failed — RECONCILIATION NEEDED', { sessionId, seekerId: user.id, total, error: refundErr.message })
          }
        } else {
          logger.error('Session POST: could not cancel session after rate write failure — RECONCILIATION NEEDED', { sessionId })
        }
        return NextResponse.json({ error: 'booking_error', message: 'We could not start this session. You have not been charged — please try again.' }, { status: 500 })
      }
    }

    if (!effectivelyFree) {
      const { error: txErr } = await sb.from('wallet_transactions').insert({
        user_id:     user.id,
        amount:      total,
        type:        'debit',
        description: `${durationMins}-min ${sessionType} session${isNriSession ? ' (NRI)' : ''}`,
        session_id:  sessionId,
      })
      if (txErr) logger.error('Session POST: wallet_transactions insert failed (audit gap):', { sessionId, error: txErr.message })
    }

    // Push to every device of the listener — reaches them with LeanOn in the
    // background or closed. High urgency so Android delivers it through Doze;
    // TTL = the response window so a late push never rings for a dead request.
    // Tapping opens /dashboard, where the accept/decline modal lives.
    try {
      const push = await sendPushToUser(sb, listenerId, {
        title: '🔔 New session request',
        body: `A seeker wants a ${durationMins}-min ${sessionType} session. Tap to accept — you have ${Math.round(REQUEST_RESPONSE_WINDOW_SECS / 60)} minutes.`,
        url: '/dashboard',
        tag: `leanon-req-${sessionId}`,
        ttlSecs: REQUEST_RESPONSE_WINDOW_SECS,
        urgent: true,
        requireInteraction: true,
        data: { sessionId: String(sessionId), type: 'session_request' },
      })
      if (push.delivered === 0) {
        logger.warn('session request push not delivered', { sessionId, listenerId, ...push })
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
// SECURITY: auth required — admin client required for wallet deduction, must bypass RLS for atomic operation
export async function PATCH(req: NextRequest) {
  try {
    const { sessionId, rating, review } = await req.json()

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
    // Validate review text when provided — max 500 chars, must accompany a rating
    const sanitizedReview = typeof review === 'string' ? review.trim().slice(0, 500) : undefined

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    // 20 PATCH calls per minute per user — prevents session-complete/rating-update amplification
    if (!checkRateLimit(`session-patch:${user.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

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

    // Optimistic lock — prevents double-payout if two requests race.
    //
    // SECURITY (`ended_at IS NULL`): a session is only ever settled once, and
    // settlement is the moment ended_at is stamped. Requiring it to still be
    // NULL makes re-settlement impossible even if a row is somehow flipped back
    // to 'active' after completing. That mattered because the live RLS policy
    // `sessions_seeker_rating_update` granted seekers row-level UPDATE on their
    // own COMPLETED sessions — and RLS cannot scope columns — so a seeker could
    // reset status/amount_held from the browser and replay this payout to mint
    // wallet balance. Migration 050 removes that policy; this guard is the
    // server-side backstop that holds regardless, since migrations here are
    // applied manually.
    const { data: completed } = await sb
      .from('sessions')
      .update({
        status:   'completed',
        ended_at: new Date().toISOString(),
        // SECURITY: only seeker may write their rating/review of the listener
        ...(rating && user.id === session.seeker_id ? { seeker_rating: rating, ...(sanitizedReview ? { seeker_review: sanitizedReview } : {}) } : {}),
      })
      .eq('id', sessionId)
      .eq('status', 'active')
      .is('ended_at', null)
      .select()
      .single()

    if (!completed) {
      // Already completed — only seeker can update rating/review
      if (rating && user.id === session.seeker_id) {
        await sb.from('sessions').update({ seeker_rating: rating, ...(sanitizedReview ? { seeker_review: sanitizedReview } : {}) })
          .eq('id', sessionId).eq('seeker_id', user.id)
        // Recalculate rating average even on late updates
        await updateListenerRating(sb, session.listener_id)
      }
      return NextResponse.json({ success: true })
    }

    // Settlement math lives in lib/session-billing.ts (shared with the cleanup
    // and expire crons). Bills whole minutes rounding UP capped at booked — a
    // full-length session that clocks 14m58s settles as 15/15 with no refund;
    // an early exit still pro-rates; < 60s is a full refund (accidental start).
    // Bill from `completed` — the row as it stood when OUR conditional UPDATE
    // won — not the earlier `session` read. A concurrent voice→text switch
    // (/api/sessions/switch-to-text) lowers amount_held; using the stale read
    // would pay out the premium the seeker was just refunded.
    const endedAt = completed.ended_at ?? new Date().toISOString()
    const bookedMins = completed.duration_mins as number
    const { billedMins, listenerEarning, refundAmount, listenerServiceFee } = settleSession({
      startedAt:         completed.started_at ?? null,
      endedAt,
      bookedMins,
      amountHeld:        Number(completed.amount_held),
      platformFee:       completed.platform_fee ?? 0,
      isFreeTrial:       completed.is_free_trial,
      // NRI sessions: caps listener's rawShare at their configured rate × billed_mins.
      // NULL for India sessions or pre-migration rows → India formula used as before.
      listenerRatePerMin: (completed.listener_rate_per_min as number | null) ?? undefined,
      // Locked at booking time (migration 062). NULL → fall back to serviceFeeRateAt(started_at).
      serviceFeeRate: (completed.service_fee_rate as number | null) ?? undefined,
    })

    // Money movement (refund, listener credit, ledger rows) — shared with the
    // cleanup and expire crons so the three paths can't drift apart.
    await applySettlement(sb, {
      sessionId, seekerId: session.seeker_id, listenerId: session.listener_id,
      amountHeld: Number(completed.amount_held), isFreeTrial: completed.is_free_trial,
      settlement: { billedMins, listenerEarning, refundAmount, listenerServiceFee }, bookedMins, source: 'ended',
    })

    // Follow-up notification for seeker
    await sb.from('notifications').insert({
      user_id:    session.seeker_id,
      type:       'follow_up',
      title:      'How are you feeling?',
      body:       'We hope your conversation helped. Remember, support is available anytime — browse listeners whenever you need.',
      action_url: '/browse',
    }).then(() => {}, () => {})

    // Use increment RPC to avoid read-then-write race on total_sessions counter.
    // is_in_session is safe to set directly (idempotent).
    await Promise.all([
      sb.rpc('increment_listener_sessions', { p_listener_id: session.listener_id })
        .then(({ error: e }) => {
          if (e) {
            // RPC missing (pre-migration) — fall back to non-atomic read+write (minor race acceptable)
            return sb.from('listener_profiles').select('total_sessions').eq('user_id', session.listener_id).single()
              .then(({ data: lp2 }) => sb.from('listener_profiles').update({ total_sessions: (lp2?.total_sessions ?? 0) + 1 }).eq('user_id', session.listener_id))
          }
        }),
      sb.from('listener_profiles').update({ is_in_session: false }).eq('user_id', session.listener_id),
    ])

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
          sessionType:     completed.session_type as string,
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
  // Exclude free-trial sessions — trial seekers have no financial stake and
  // disproportionately leave 1-star rage taps that don't reflect listener quality.
  const { data: rows } = await sb
    .from('sessions')
    .select('seeker_rating')
    .eq('listener_id', listenerId)
    .not('seeker_rating', 'is', null)
    .or('is_free_trial.eq.false,is_free_trial.is.null')

  if (!rows || rows.length === 0) return

  const avg = rows.reduce((s, r) => s + (r.seeker_rating as number), 0) / rows.length
  await sb.from('listener_profiles')
    .update({ rating: Math.round(avg * 100) / 100 })
    .eq('user_id', listenerId)
}
