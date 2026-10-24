import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

export const dynamic = 'force-dynamic'

// GET /api/admin/talk-metrics?days=7 — the Talk now funnel for the admin
// Sessions tab. Basics only:
//   searches started (signed-in) → nobody free / stopped before a request →
//   sent ≥1 request → a listener accepted → chat completed → later paid.
// A "hop" is one request to one listener. Needs migration 071; before it runs
// this returns { ready: false }.
type Search = { id: string; seeker_id: string; created_at: string; free: boolean | null; candidates: number | null }
type Req = { id: string; seeker_id: string; talk_search_id: string | null; status: string; started_at: string | null; responded_at: string | null; ended_at: string | null; created_at: string; is_free_trial: boolean; duration_mins: number; ended_by: string | null }

export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const daysParam = Number(new URL(req.url).searchParams.get('days'))
  const days = [1, 7, 30].includes(daysParam) ? daysParam : 7
  const since = new Date(Date.now() - days * 24 * 60 * 60_000).toISOString()

  try {
    const sb = createAdminClient()
    const [searchRes, reqRes, browseRes] = await Promise.all([
      sb.from('talk_searches').select('id, seeker_id, created_at, free, candidates').gte('created_at', since).limit(10000),
      sb.from('sessions').select('id, seeker_id, talk_search_id, status, started_at, responded_at, ended_at, created_at, is_free_trial, duration_mins, ended_by')
        .eq('booked_via', 'talk').gte('created_at', since).limit(20000),
      sb.from('sessions').select('id', { count: 'exact', head: true })
        .eq('booked_via', 'browse').gte('created_at', since).not('started_at', 'is', null),
    ])
    if (searchRes.error || reqRes.error) {
      return NextResponse.json({ ready: false, message: 'Run migration 071 to start collecting Talk now metrics.' })
    }
    const searches = (searchRes.data ?? []) as Search[]
    const requests = (reqRes.data ?? []) as Req[]

    // Requests per search, in order.
    const bySearch = new Map<string, Req[]>()
    for (const r of requests) {
      if (!r.talk_search_id) continue
      const list = bySearch.get(r.talk_search_id) ?? []
      list.push(r)
      bySearch.set(r.talk_search_id, list)
    }
    bySearch.forEach(list => list.sort((a, b) => a.created_at.localeCompare(b.created_at)))

    const nobodyFree = searches.filter(s => (s.candidates ?? 0) === 0).length
    const withRequest = searches.filter(s => bySearch.has(s.id))
    const stoppedBeforeRequest = searches.length - nobodyFree - withRequest.length

    let matched = 0, hopsToMatchTotal = 0, unmatchedAfterRequests = 0
    const matchedSessions: Req[] = []
    // Seconds from the first request going out to a listener accepting.
    const connectSecs: number[] = []
    for (const s of withRequest) {
      const list = bySearch.get(s.id)!
      const idx = list.findIndex(r => !!r.started_at)
      if (idx >= 0) {
        matched++; hopsToMatchTotal += idx + 1; matchedSessions.push(list[idx])
        const t = Date.parse(list[idx].responded_at ?? list[idx].started_at!) - Date.parse(list[0].created_at)
        if (Number.isFinite(t) && t >= 0) connectSecs.push(t / 1000)
      } else unmatchedAfterRequests++
    }
    connectSecs.sort((a, b) => a - b)
    const medianConnectSecs = connectSecs.length ? Math.round(connectSecs[Math.floor((connectSecs.length - 1) / 2)]) : null
    const p90ConnectSecs = connectSecs.length ? Math.round(connectSecs[Math.min(connectSecs.length - 1, Math.ceil(connectSecs.length * 0.9) - 1)]) : null
    // Connection success = searches that ended in an accepted session ÷ valid
    // attempts (searches that found nobody free or sent ≥1 request; searches the
    // seeker stopped before any request are not attempts).
    const validAttempts = nobodyFree + withRequest.length
    const hopsTotal = withRequest.reduce((n, s) => n + bySearch.get(s.id)!.length, 0)
    const completed = matchedSessions.filter(r => r.status === 'completed')
    const avgMins = completed.length
      ? completed.reduce((n, r) => n + Math.max(0, (Date.parse(r.ended_at ?? r.started_at!) - Date.parse(r.started_at!)) / 60_000), 0) / completed.length
      : 0
    const endedBy: Record<string, number> = {}
    for (const r of completed) endedBy[r.ended_by ?? 'unknown'] = (endedBy[r.ended_by ?? 'unknown'] ?? 0) + 1

    // Conversion: seekers whose Talk now match was the free trial and who later
    // started a PAID session (Talk now or /browse) — up to now, not just the window.
    const freeMatches = matchedSessions.filter(r => r.is_free_trial)
    const firstFree = new Map<string, string>()
    for (const r of freeMatches) {
      const prev = firstFree.get(r.seeker_id)
      if (!prev || r.started_at! < prev) firstFree.set(r.seeker_id, r.started_at!)
    }
    let converted = 0
    if (firstFree.size > 0) {
      const { data: paid } = await sb.from('sessions').select('seeker_id, started_at')
        .in('seeker_id', Array.from(firstFree.keys())).eq('is_free_trial', false)
        .not('started_at', 'is', null).limit(20000)
      const conv = new Set<string>()
      for (const p of (paid ?? []) as { seeker_id: string; started_at: string }[]) {
        const t = firstFree.get(p.seeker_id)
        if (t && p.started_at > t) conv.add(p.seeker_id)
      }
      converted = conv.size
    }

    const round1 = (n: number) => Math.round(n * 10) / 10
    return NextResponse.json({
      ready: true,
      days,
      searches: searches.length,
      seekers: new Set(searches.map(s => s.seeker_id)).size,
      nobodyFree,
      stoppedBeforeRequest: Math.max(0, stoppedBeforeRequest),
      withRequest: withRequest.length,
      hopsTotal,
      avgHopsPerSearch: withRequest.length ? round1(hopsTotal / withRequest.length) : 0,
      matched,
      avgHopsToMatch: matched ? round1(hopsToMatchTotal / matched) : 0,
      medianConnectSecs,
      p90ConnectSecs,
      validAttempts,
      connectionSuccessPct: validAttempts ? Math.round((matched / validAttempts) * 100) : null,
      unmatchedAfterRequests,
      completed: completed.length,
      avgMins: round1(avgMins),
      endedBy,
      freeMatchedSeekers: firstFree.size,
      converted,
      browseStarted: browseRes.count ?? 0,
    })
  } catch (err) {
    logger.error('Admin talk-metrics error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
