import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { MAX_FREE_TRIALS } from '@/lib/constants'
import { getBookingPriceDisplay, pricingCountry, quoteSession } from '@/lib/geo-pricing'
import { isUnlimitedTestPhone } from '@/lib/test-users'
import { sweepStaleListeners, wasUnanswered, STALE_HEARTBEAT_MINS } from '@/lib/listener-presence'
import { talkTopic, TALK_MAX_TEXT_RATE } from '@/lib/talk-match'
import { logger } from '@/lib/logger'
import { expireStalePendingRequests } from '@/lib/expire-pending'
import { recordTalkSearch, validSearchId } from '@/lib/session-analytics'

export const dynamic = 'force-dynamic'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// GET /api/talk/candidates?topic=relationship&type=voice&exclude=<id>,<id>
//
// "Talk now" matching: the listeners this seeker should be connected to, best
// first. Only ranks — booking still goes through POST /api/sessions, which
// re-checks everything (availability, busy, free trial, wallet, suspension).
//
// Who qualifies: approved, active, not suspended, online now (same presence
// sweep as /browse), not in or holding a request, not the seeker themself,
// voice-capable for voice. For a PAID match only listeners at or below
// TALK_MAX_TEXT_RATE, so the price is known before anyone is picked.
// Ranking: topic match, then how reliably they answer requests (last 30 days),
// then rating — with a little shuffle so the same person isn't always first.
export async function GET(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  if (!checkRateLimit(`talk-candidates:${user.id}`, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 })
  }

  const { searchParams } = new URL(req.url)
  const topic = talkTopic(searchParams.get('topic'))
  const type: 'text' | 'voice' = searchParams.get('type') === 'voice' ? 'voice' : 'text'
  const exclude = new Set((searchParams.get('exclude') ?? '').split(',').filter(id => UUID_RE.test(id)))
  exclude.add(user.id)
  const searchId = validSearchId(searchParams.get('search'))

  const sb = createAdminClient()
  try {
    // A request still 'pending' after the response window (the seeker closed
    // the app, the listener never saw it) would count that listener as busy
    // until the nightly cron. Expire + refund those first — the same function
    // booking and cleanup use, locked on status so a refund never happens twice.
    // Never stands in the way of matching: on failure they stay busy, as before.
    await expireStalePendingRequests(sb).catch(e => logger.warn('talk candidates: expiring stale requests failed', { error: String(e) }))
    await sweepStaleListeners(sb)

    // Free 5 minutes if the seeker hasn't had their trial; else a paid 15.
    const [{ count: trials }, { data: me }] = await Promise.all([
      sb.from('sessions').select('id', { count: 'exact', head: true })
        .eq('seeker_id', user.id).eq('is_free_trial', true).eq('status', 'completed'),
      sb.from('users').select('phone, account_country, wallet_balance').eq('id', user.id).maybeSingle(),
    ])
    const free = isUnlimitedTestPhone(user.phone) || (trials ?? 0) < MAX_FREE_TRIALS
    const durationMins = free ? 5 : 15
    const country = pricingCountry(me?.phone ?? (user.phone ? '+' + user.phone.replace(/^\+/, '') : null), me?.account_country ?? null)

    // Same eligibility as /browse (/api/listeners), including hiding a listener
    // whose new photo is still under review. pending_avatar_url may not exist on
    // an old schema — retried without that filter.
    const onlineQuery = (withPendingPhoto: boolean) => {
      let q = sb.from('listener_profiles')
        .select('user_id, rate_per_min, rating, specialty_tags, last_heartbeat_at, users!inner(name, phone)')
        .eq('is_approved', true).eq('is_available', true).eq('is_suspended', false)
        .or('is_active.eq.true,is_active.is.null')
        .not('users.phone', 'is', null)
      if (withPendingPhoto) q = q.is('pending_avatar_url', null)
      // Ordered by last heartbeat; a generous cap — online listeners number in
      // the dozens, and busy / voice filtering happens after this read.
      return q.order('last_heartbeat_at', { ascending: false, nullsFirst: false }).limit(500)
    }
    let { data: online, error } = await onlineQuery(true)
    if (error?.message?.includes('pending_avatar_url')) ({ data: online, error } = await onlineQuery(false))
    if (error) throw error

    type Row = { user_id: string; rate_per_min: number | null; rating: number | null; specialty_tags: string[] | null; last_heartbeat_at: string | null; users: { name: string | null } }
    let rows = ((online ?? []) as unknown as Row[]).filter(r => !exclude.has(r.user_id))
    if (!free) rows = rows.filter(r => Number(r.rate_per_min ?? 10) <= TALK_MAX_TEXT_RATE)
    const ids = rows.map(r => r.user_id)
    if (ids.length === 0) {
      if (searchId) await recordTalkSearch(sb, { id: searchId, seekerId: user.id, free, candidates: 0 })
      return NextResponse.json({ free, durationMins, candidates: [] })
    }

    // Separate reads so a missing column (voice_disabled, migration 067) or a
    // failed stats read degrades the ranking instead of breaking matching.
    const since = new Date(Date.now() - 30 * 24 * 60 * 60_000).toISOString()
    const [busyRes, voiceOffRes, statsRes] = await Promise.all([
      sb.from('sessions').select('listener_id').in('listener_id', ids).in('status', ['pending', 'active']),
      type === 'voice'
        ? sb.from('listener_profiles').select('user_id').in('user_id', ids).eq('voice_disabled', true)
        : Promise.resolve({ data: [] as { user_id: string }[], error: null }),
      sb.from('sessions').select('listener_id, status, started_at, cancel_reason, responded_at, created_at')
        .in('listener_id', ids).gte('created_at', since)
        .order('created_at', { ascending: false }).limit(5000),
    ])
    // Fail CLOSED on the availability reads: if we can't tell who's busy, offer
    // nobody (the seeker gets "try again"), rather than everybody.
    if (busyRes.error) throw new Error(`busy read failed: ${busyRes.error.message}`)
    // voice_disabled (migration 067) may not exist yet — that alone means "no
    // listener has voice off". Any other failure: no voice candidates.
    const voiceColMissing = !!voiceOffRes.error && /voice_disabled/.test(voiceOffRes.error.message ?? '')
    if (voiceOffRes.error && !voiceColMissing) throw new Error(`voice_disabled read failed: ${voiceOffRes.error.message}`)
    // Reliability only ranks; on failure everyone is ranked as "no history".
    if (statsRes.error) logger.warn('talk candidates: reliability stats unavailable', { error: statsRes.error.message })
    const busy = new Set(((busyRes.data ?? []) as { listener_id: string }[]).map(r => r.listener_id))
    const voiceOff = new Set(((voiceOffRes.data ?? []) as { user_id: string }[]).map(r => r.user_id))

    // Reliability: answered requests vs requests they declined or left
    // unanswered — including a Talk now request withdrawn after the listener's
    // full turn (wasUnanswered). Before 2026-10-16 those were ignored, so a
    // listener who was away kept a perfect score and was asked first every time.
    const answered = new Map<string, number>(), missed = new Map<string, number>()
    for (const s of (statsRes.data ?? []) as { listener_id: string; status: string; started_at: string | null; cancel_reason: string | null; responded_at: string | null; created_at: string | null }[]) {
      if (s.started_at || s.status === 'active' || s.status === 'completed') answered.set(s.listener_id, (answered.get(s.listener_id) ?? 0) + 1)
      else if (s.cancel_reason === 'declined' || wasUnanswered(s)) missed.set(s.listener_id, (missed.get(s.listener_id) ?? 0) + 1)
    }
    // Presence: someone in the app right now beats someone "away" (online only
    // because their phone can get an alert — 15 of 17 'online' on 2026-10-16).
    const now = Date.now()
    const presence = (hb: string | null) => {
      const mins = hb ? (now - Date.parse(hb)) / 60_000 : Infinity
      return mins <= 3 ? 3 : mins <= STALE_HEARTBEAT_MINS ? 1.5 : 0
    }

    const wanted = new Set<string>(topic?.tags ?? [])
    const eligible = rows.filter(r => !busy.has(r.user_id) && !voiceOff.has(r.user_id))
    // Admin Talk now metrics (migration 071) — the first fetch of a search only.
    if (searchId) await recordTalkSearch(sb, { id: searchId, seekerId: user.id, free, candidates: eligible.length })
    const ranked = eligible
      .map(r => {
        const a = answered.get(r.user_id) ?? 0, m = missed.get(r.user_id) ?? 0
        const reliability = (a + 1) / (a + m + 2)               // 0.5 with no history
        const topicHit = (r.specialty_tags ?? []).some(t => wanted.has(t)) ? 1 : 0
        // Free trial: prefer standard-rate listeners, so "continue for 15 min"
        // after the free 5 isn't a ₹600+ surprise (paid matches are already
        // limited to them above).
        const standardRate = Number(r.rate_per_min ?? 10) <= TALK_MAX_TEXT_RATE ? 1 : 0
        const score = presence(r.last_heartbeat_at) + topicHit * 2 + reliability * 2 + standardRate * 1.5 + (Number(r.rating ?? 0) / 5) * 0.5 + Math.random() * 0.3
        // The same quote POST /api/sessions holds (lib/geo-pricing quoteSession).
        const { indianTotal: indian, total: inr } = quoteSession(Number(r.rate_per_min ?? 10), type, durationMins, country, free)
        return {
          listenerId: r.user_id,
          name: r.users?.name ?? 'A listener',
          score,
          priceInr: inr,
          priceLabel: free ? 'Free' : getBookingPriceDisplay(indian, country, durationMins).primary,
        }
      })
      .sort((x, y) => y.score - x.score)
      .slice(0, 8)
      .map(({ score: _score, ...c }) => c)

    return NextResponse.json({ free, durationMins, walletBalance: Number(me?.wallet_balance ?? 0), candidates: ranked })
  } catch (e) {
    logger.error('talk candidates failed', { error: e instanceof Error ? e.message : String(e) })
    return NextResponse.json({ error: 'Could not find listeners right now. Please try again.' }, { status: 503 })
  }
}
