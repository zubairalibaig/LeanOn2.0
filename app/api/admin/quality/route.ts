import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

export const dynamic = 'force-dynamic'

type AnyRow = Record<string, any>

const WINDOWS: Record<string, number | null> = {
  today: 1,
  '7d': 7,
  '30d': 30,
  '90d': 90,
  all: null,
}

function pct(n: number, d: number, digits = 1) {
  return d > 0 ? Number(((n / d) * 100).toFixed(digits)) : null
}
function ratePer100(n: number, d: number) {
  return d > 0 ? Number(((n / d) * 100).toFixed(1)) : 0
}
function ratePer1000(n: number, d: number) {
  return d > 0 ? Number(((n / d) * 1000).toFixed(1)) : 0
}
function dateFloor(days: number | null) {
  if (days === null) return null
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - (days - 1))
  return d.toISOString()
}
function addDays(iso: string, days: number) {
  return new Date(new Date(iso).getTime() + days * 86_400_000)
}
function actualSecs(s: AnyRow) {
  if (!s.started_at || !s.ended_at) return null
  const secs = (new Date(s.ended_at).getTime() - new Date(s.started_at).getTime()) / 1000
  return Number.isFinite(secs) && secs >= 0 ? secs : null
}
function firstDefined(row: AnyRow, keys: string[]) {
  for (const k of keys) if (row[k] !== undefined && row[k] !== null) return row[k]
  return null
}

export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const sb = createAdminClient()
  const url = new URL(req.url)
  const windowKey = url.searchParams.get('window') || '30d'
  const days = WINDOWS[windowKey] === undefined ? 30 : WINDOWS[windowKey]
  const since = dateFloor(days)
  const now = new Date()

  const [sessionsRes, usersRes, profilesRes, reportsRes, refundsRes, blocksRes, earningsRes] = await Promise.all([
    (() => { let q = sb.from('sessions').select('*'); if (since) q = q.gte('created_at', since); return q.limit(10000) })(),
    sb.from('users').select('id,name').limit(10000),
    sb.from('listener_profiles').select('*').limit(10000),
    (() => { let q = sb.from('reports').select('*'); if (since) q = q.gte('created_at', since); return q.limit(10000) })(),
    (() => { let q = sb.from('refund_requests').select('*'); if (since) q = q.gte('created_at', since); return q.limit(10000) })(),
    (() => { let q = sb.from('user_blocks').select('*'); if (since) q = q.gte('created_at', since); return q.limit(10000) })(),
    (() => { let q = sb.from('listener_earnings').select('*'); if (since) q = q.gte('created_at', since); return q.limit(10000) })(),
  ])

  if (sessionsRes.error) {
    return NextResponse.json({ error: 'Failed to load quality metrics' }, { status: 500 })
  }

  const sessions = (sessionsRes.data ?? []) as AnyRow[]
  const users = (usersRes.data ?? []) as AnyRow[]
  const profiles = (profilesRes.data ?? []) as AnyRow[]
  const reports = reportsRes.error ? [] : (reportsRes.data ?? []) as AnyRow[]
  const refunds = refundsRes.error ? [] : (refundsRes.data ?? []) as AnyRow[]
  const blocks = blocksRes.error ? [] : (blocksRes.data ?? []) as AnyRow[]
  const earnings = earningsRes.error ? [] : (earningsRes.data ?? []) as AnyRow[]
  const userMap = new Map(users.map(u => [String(u.id), u.name || '—']))

  const completedPaid = sessions.filter(s => s.status === 'completed' && !s.is_free_trial)
  const completedAll = sessions.filter(s => s.status === 'completed')
  const terminal = sessions.filter(s => ['completed', 'cancelled', 'expired', 'failed'].includes(String(s.status)))
  const completedVoice = completedPaid.filter(s => s.session_type === 'voice')
  const missingDurationTelemetry = completedPaid.filter(s => actualSecs(s) === null).length
  const shortVoice = completedVoice.filter(s => { const secs = actualSecs(s); return secs !== null && secs < 120 }).length
  const paidSeekerIds = new Set(completedPaid.map(s => String(s.seeker_id)).filter(Boolean))
  const paidListenerIds = new Set(completedPaid.map(s => String(s.listener_id)).filter(Boolean))
  const unmatchedSessions = sessions.filter(s => !s.listener_id).length
  const failedStarts = sessions.filter(s => ['cancelled', 'failed', 'expired'].includes(String(s.status)) && !s.started_at).length

  // Trial cohorts are only counted after the requested conversion window has matured.
  const trialSessions = sessions.filter(s => !!s.is_free_trial && s.seeker_id)
  const trialBySeeker = new Map<string, AnyRow[]>()
  for (const s of trialSessions) {
    const id = String(s.seeker_id)
    const arr = trialBySeeker.get(id) ?? []
    arr.push(s)
    trialBySeeker.set(id, arr)
  }
  const trialCohort = (horizonDays: number) => {
    const eligible = new Map<string, Date>()
    for (const [id, arr] of trialBySeeker) {
      const first = [...arr].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())[0]
      if (first?.created_at && addDays(first.created_at, horizonDays) <= now) eligible.set(id, new Date(first.created_at))
    }
    let converted = 0
    for (const [id, firstAt] of eligible) {
      const deadline = addDays(firstAt.toISOString(), horizonDays).getTime()
      if (sessions.some(s => !s.is_free_trial && s.status === 'completed' && String(s.seeker_id) === id && new Date(s.created_at).getTime() >= firstAt.getTime() && new Date(s.created_at).getTime() <= deadline)) converted++
    }
    return { converted, eligible: eligible.size, pct: pct(converted, eligible.size) }
  }

  const paidBySeeker = new Map<string, AnyRow[]>()
  for (const s of completedPaid) {
    const id = String(s.seeker_id)
    const arr = paidBySeeker.get(id) ?? []
    arr.push(s)
    paidBySeeker.set(id, arr)
  }
  const repeat2 = Array.from(paidBySeeker.values()).filter(a => a.length >= 2).length
  const repeat3 = Array.from(paidBySeeker.values()).filter(a => a.length >= 3).length
  const repeat5 = Array.from(paidBySeeker.values()).filter(a => a.length >= 5).length
  const secondPaidWithin = (horizonDays: number) => {
    const eligible = Array.from(paidBySeeker.values()).filter(arr => {
      arr.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      return arr[0]?.created_at && addDays(arr[0].created_at, horizonDays) <= now
    })
    const converted = eligible.filter(arr => arr[1] && new Date(arr[1].created_at).getTime() <= addDays(arr[0].created_at, horizonDays).getTime()).length
    return { converted, eligible: eligible.length, pct: pct(converted, eligible.length) }
  }

  // Rating history is detected defensively because the project has used an aggregate
  // listener_profiles.rating field and may have rating history in a separate table.
  let ratingRows: AnyRow[] = []
  for (const table of ['ratings', 'listener_ratings', 'session_ratings']) {
    const r = await sb.from(table).select('*').limit(10000)
    if (!r.error) { ratingRows = (r.data ?? []) as AnyRow[]; break }
  }
  const ratingValue = (r: AnyRow) => {
    const n = Number(firstDefined(r, ['rating', 'score', 'stars', 'value']))
    return Number.isFinite(n) && n >= 1 && n <= 5 ? n : null
  }
  const ratingListenerId = (r: AnyRow) => firstDefined(r, ['listener_id', 'target_user_id', 'rated_user_id', 'user_id'])
  const windowRatings = ratingRows.filter(r => !since || !r.created_at || new Date(r.created_at) >= new Date(since))
  const validRatings = windowRatings.map(r => ({ row: r, value: ratingValue(r), listenerId: ratingListenerId(r) })).filter(x => x.value !== null)
  const avgRating = validRatings.length ? Number((validRatings.reduce((a, x) => a + (x.value as number), 0) / validRatings.length).toFixed(2)) : null
  const fiveStarPct = pct(validRatings.filter(x => x.value === 5).length, validRatings.length)
  const lowRatingPct = pct(validRatings.filter(x => (x.value as number) <= 2).length, validRatings.length)
  const ratingCoverage = ratingRows.length ? pct(validRatings.length, completedPaid.length) : null

  type LS = {
    paid: number; uniqueSeekers: Set<string>; seekerCounts: Map<string, number>; free: number
    durationSecs: number; durationN: number; short: number; missingTelemetry: number
    reports: number; blocks: number; refunds: number; ratings: number[]; earnings: number
  }
  const lm = new Map<string, LS>()
  const ensure = (id: string) => {
    if (!lm.has(id)) lm.set(id, { paid: 0, uniqueSeekers: new Set(), seekerCounts: new Map(), free: 0, durationSecs: 0, durationN: 0, short: 0, missingTelemetry: 0, reports: 0, blocks: 0, refunds: 0, ratings: [], earnings: 0 })
    return lm.get(id)!
  }
  for (const s of sessions) {
    if (!s.listener_id) continue
    const l = ensure(String(s.listener_id))
    if (s.is_free_trial) l.free++
    if (!s.is_free_trial && s.status === 'completed') {
      l.paid++
      if (s.seeker_id) {
        const sid = String(s.seeker_id)
        l.uniqueSeekers.add(sid)
        l.seekerCounts.set(sid, (l.seekerCounts.get(sid) ?? 0) + 1)
      }
      const secs = actualSecs(s)
      if (secs === null) l.missingTelemetry++
      else {
        l.durationSecs += secs
        l.durationN++
        if (s.session_type === 'voice' && secs < 120) l.short++
      }
    }
  }
  for (const r of reports) { const id = firstDefined(r, ['reported_user_id', 'reportedUserId']); if (id) ensure(String(id)).reports++ }
  for (const b of blocks) { const id = firstDefined(b, ['blocked_id', 'blocked_user_id', 'blockedId']); if (id) ensure(String(id)).blocks++ }
  for (const r of validRatings) { const id = r.listenerId; if (id) ensure(String(id)).ratings.push(r.value as number) }
  for (const e of earnings) {
    const id = firstDefined(e, ['listener_id', 'user_id'])
    const amount = Number(firstDefined(e, ['gross_amount', 'gross_earning', 'net_amount', 'amount']))
    if (id && Number.isFinite(amount)) ensure(String(id)).earnings += amount
  }
  let attributedRefunds = 0
  for (const r of refunds) {
    const id = firstDefined(r, ['listener_id', 'reported_listener_id'])
    if (id) { ensure(String(id)).refunds++; attributedRefunds++ }
  }

  const profileMap = new Map(profiles.map(p => [String(p.user_id), p]))
  const listeners = Array.from(lm.entries()).map(([id, l]) => {
    const p = profileMap.get(id) ?? {}
    const counts = Array.from(l.seekerCounts.values())
    const secondSessionSeekers = counts.filter(c => c >= 2).length
    const threePlus = counts.filter(c => c >= 3).length
    const fivePlus = counts.filter(c => c >= 5).length
    const rs = l.ratings
    const profileRating = Number(firstDefined(p, ['rating']))
    const rating = rs.length ? Number((rs.reduce((a, b) => a + b, 0) / rs.length).toFixed(2)) : (Number.isFinite(profileRating) && profileRating > 0 ? profileRating : null)
    const ratingCountRaw = firstDefined(p, ['rating_count', 'ratings_count', 'total_ratings'])
    const ratingCount = rs.length || (Number.isFinite(Number(ratingCountRaw)) ? Number(ratingCountRaw) : null)
    return {
      listener_id: id,
      name: userMap.get(id) ?? '—',
      paid_sessions: l.paid,
      unique_paid_seekers: l.uniqueSeekers.size,
      repeat_seekers: secondSessionSeekers,
      three_plus_seekers: threePlus,
      five_plus_seekers: fivePlus,
      second_session_pct: pct(secondSessionSeekers, l.uniqueSeekers.size),
      repeat3_pct: pct(threePlus, l.uniqueSeekers.size),
      free_trials: l.free,
      avg_duration_mins: l.durationN ? Number((l.durationSecs / l.durationN / 60).toFixed(1)) : null,
      short_voice_sessions: l.short,
      short_voice_pct: pct(l.short, l.paid),
      missing_duration_telemetry: l.missingTelemetry,
      rating,
      rating_count: ratingCount,
      five_star_pct: rs.length ? pct(rs.filter(x => x === 5).length, rs.length) : null,
      low_rating_pct: rs.length ? pct(rs.filter(x => x <= 2).length, rs.length) : null,
      reports: l.reports,
      reports_per_100: ratePer100(l.reports, l.paid),
      refunds: l.refunds,
      refunds_per_100: ratePer100(l.refunds, l.paid),
      blocks: l.blocks,
      blocks_per_100: ratePer100(l.blocks, l.paid),
      earnings: Number(l.earnings.toFixed(2)),
    }
  }).sort((a, b) => b.paid_sessions - a.paid_sessions || (b.second_session_pct ?? -1) - (a.second_session_pct ?? -1))

  const activeOnline = profiles.filter(p => p.is_available === true && p.is_active === true && p.is_approved === true).length
  const durationValues = completedAll.map(actualSecs).filter((x): x is number => x !== null)
  const avgDuration = durationValues.length ? Number((durationValues.reduce((a, b) => a + b, 0) / durationValues.length / 60).toFixed(1)) : null
  const refundAmount = refunds.reduce((a, r) => a + (Number(r.amount) || 0), 0)
  const reportRate = ratePer1000(reports.length, completedPaid.length)
  const refundRate = ratePer100(refunds.length, completedPaid.length)
  const blockRate = ratePer100(blocks.length, completedPaid.length)
  const crisisFlags = sessions.filter(s => s.crisis_flagged === true).length
  const voicePaid = completedPaid.filter(s => s.session_type === 'voice').length
  const textPaid = completedPaid.filter(s => s.session_type !== 'voice').length
  const completionRate = pct(completedAll.length, terminal.length)
  const topConcentrationPct = pct(listeners[0]?.paid_sessions ?? 0, completedPaid.length)
  const trial24 = trialCohort(1)
  const trial7 = trialCohort(7)
  const second7 = secondPaidWithin(7)
  const second30 = secondPaidWithin(30)

  return NextResponse.json({
    window: windowKey,
    since,
    generated_at: now.toISOString(),
    summary: {
      trial_to_paid_pct: trial7.pct,
      trial_to_paid_24h: trial24,
      trial_to_paid_7d: trial7,
      paid_to_second_pct: second7.pct,
      paid_to_second_7d: second7,
      paid_to_second_30d: second30,
      unique_paid_seekers: paidSeekerIds.size,
      one_paid_seekers: Array.from(paidBySeeker.values()).filter(a => a.length === 1).length,
      two_plus_paid_seekers: repeat2,
      three_plus_paid_seekers: repeat3,
      five_plus_paid_seekers: repeat5,
      three_plus_rate_pct: pct(repeat3, paidSeekerIds.size),
      avg_rating: avgRating,
      rating_count: validRatings.length || null,
      five_star_pct: fiveStarPct,
      low_rating_pct: lowRatingPct,
      sessions_rated_pct: ratingCoverage,
      rating_history_available: ratingRows.length > 0,
      completion_rate_pct: completionRate,
      short_voice_sessions: shortVoice,
      short_voice_pct: pct(shortVoice, completedVoice.length),
      missing_duration_telemetry: missingDurationTelemetry,
      refund_requests: refunds.length,
      refund_amount: Number(refundAmount.toFixed(2)),
      refund_rate_pct: refundRate,
      report_count: reports.length,
      report_rate_per_1000: reportRate,
      block_count: blocks.length,
      block_rate_per_100_sessions: blockRate,
      crisis_flags: crisisFlags,
      voice_paid_sessions: voicePaid,
      text_paid_sessions: textPaid,
      paid_sessions: completedPaid.length,
      paid_minutes: Number((durationValues.reduce((a, b) => a + b, 0) / 60).toFixed(1)),
      avg_session_duration_mins: avgDuration,
      online_listeners_now: activeOnline,
      listeners_taking_sessions: paidListenerIds.size,
      top_listener_concentration_pct: topConcentrationPct,
      unmatched_sessions: unmatchedSessions,
      failed_starts: failedStarts,
      attributed_listener_refunds: attributedRefunds,
    },
    listeners,
    repeatPairs: (() => {
      const pairMap = new Map<string, { seeker: string; listener: string; count: number }>()
      for (const s of completedPaid) if (s.seeker_id && s.listener_id) {
        const key = `${s.seeker_id}:${s.listener_id}`
        const p = pairMap.get(key) ?? { seeker: String(s.seeker_id), listener: String(s.listener_id), count: 0 }
        p.count++
        pairMap.set(key, p)
      }
      return Array.from(pairMap.values()).filter(p => p.count >= 2).sort((a, b) => b.count - a.count).slice(0, 30).map(p => ({ seeker_name: userMap.get(p.seeker) ?? '—', listener_name: userMap.get(p.listener) ?? '—', count: p.count }))
    })(),
  })
}
