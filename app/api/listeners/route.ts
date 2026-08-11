import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

// GET — public listener list for the browse page.
// Uses admin client (bypasses RLS) to avoid the silent-empty issue with
// PostgREST's embedded !inner join when anonymous users hit complex
// cross-table RLS policies. Filters are applied server-side.
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const tag  = searchParams.get('tag')  || 'all'
    const lang = searchParams.get('lang') || 'all'

    const sb = createAdminClient()

    // Self-heal stuck-online ghosts before reading the list.
    //
    // Listeners who close the app without clicking "Go offline" are left with
    // is_available=true and a stale (or null) heartbeat. We correct them here
    // using two separate updates — NOT a single .or() with a timestamp, because
    // PostgREST's OR filter string parser chokes on ISO-8601 colons/dots and
    // silently ignores the clause, leaving ghosts forever.
    //
    // 15-minute threshold: deliberately generous so mobile browsers that throttle
    // background timers don't knock a genuinely-online listener offline. The
    // availability toggle stamps last_heartbeat_at=now() on going online, so a
    // freshly-toggled listener is always inside the window.
    //
    // Both updates are fire-and-forget: a sweep failure logs a warning and never
    // blocks the browse response.
    const staleCutoff = new Date(Date.now() - 15 * 60 * 1000).toISOString()

    // Awaited so the list read below already reflects the correction (no one-cycle
    // lag). Each pass is isolated in try/catch so a sweep failure can never block
    // or error the browse response.
    try {
      // Pass 1 — null heartbeat (e.g. a listener who went online but never sent
      // a heartbeat, then closed the app).
      const { error: e1 } = await sb.from('listener_profiles')
        .update({ is_available: false })
        .eq('is_available', true)
        .is('last_heartbeat_at', null)
      if (e1) logger.warn('sweep(null-hb) failed', { error: e1.message })

      // Pass 2 — heartbeat older than 15 minutes.
      const { error: e2 } = await sb.from('listener_profiles')
        .update({ is_available: false })
        .eq('is_available', true)
        .lt('last_heartbeat_at', staleCutoff)
      if (e2) logger.warn('sweep(stale-hb) failed', { error: e2.message })
    } catch (e) {
      logger.warn('staleness sweep threw', { error: String(e) })
    }

    // Exclude orphaned accounts: LeanOn is phone-only, so a listener whose users
    // row has no phone can never be logged into and must not appear bookable.
    // These ghosts come from auth-account recreation (see lib/ensure-user-row.ts).
    // We fetch phone ONLY to filter on it, then strip it from the response below
    // so it never leaves the server.
    // Build the list query. Factored so we can retry with a smaller select if
    // the birth_* columns aren't present yet (migration 049 not applied) — this
    // keeps browse alive during the deploy-before-migration window.
    const buildQuery = (selectStr: string) => {
      let q = sb
        .from('listener_profiles')
        .select(selectStr)
        .eq('is_approved', true)
        .or('is_active.eq.true,is_active.is.null')
        .eq('is_suspended', false)
        .not('users.phone', 'is', null)
        .order('is_available', { ascending: false })
        // Recency of being online decides WHICH rows survive the limit(50) among
        // offline listeners, so a dormant-but-high-rated profile can no longer
        // push out someone who was active an hour ago. Online listeners are
        // unaffected — is_available still leads, and the JS sort below restores
        // rating order within the online group.
        .order('last_heartbeat_at', { ascending: false, nullsFirst: false })
        .order('rating',       { ascending: false })
        .limit(50)
      if (tag  !== 'all') q = q.contains('specialty_tags',    [tag])
      if (lang !== 'all') q = q.contains('languages_spoken', [lang])
      return q
    }

    // last_heartbeat_at powers the "last online" label + offline ordering on
    // browse. The column is guaranteed present (migration 041; the staleness
    // sweep above already queries it), so no fallback select is needed.
    const SELECT_BASE = 'user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_verified, last_heartbeat_at, users!inner(name, avatar_url, phone)'
    // birth_year/birth_month drive the browse age-range filter (migration 049).
    const SELECT_WITH_AGE = SELECT_BASE.replace(', users!inner', ', birth_year, birth_month, users!inner')

    let { data, error } = await buildQuery(SELECT_WITH_AGE)
    if (error && (error.message?.includes('birth_year') || error.message?.includes('birth_month'))) {
      ;({ data, error } = await buildQuery(SELECT_BASE))
    }

    if (error) {
      logger.error('listeners query failed:', { error: error.message })
      return NextResponse.json({ error: 'Failed to fetch listeners. Please try again.' }, { status: 503 })
    }

    // Trust is_available directly from the DB. The staleness sweep above
    // corrects stuck-online ghosts on every browse load; the toggle writes
    // is_available authoritatively. No per-request display gate here — that
    // previously caused false-offline flicker on mobile.
    const listeners = ((data ?? []) as unknown as Record<string, unknown>[]).map((l) => {
      const rawUsers = (l as { users?: { name?: string; avatar_url?: string; phone?: string } }).users
      const users = rawUsers ? { name: rawUsers.name, avatar_url: rawUsers.avatar_url } : rawUsers
      return {
        ...l,
        users,
        is_available: Boolean((l as { is_available?: boolean }).is_available),
      }
    })
    // Sort order (UNCHANGED at the top): online listeners always come first.
    // Within the online group we keep rating DESC — all of them are available
    // right now, so heartbeat recency there is meaningless noise (every value is
    // within ~60s). Within the OFFLINE group we now order by how recently they
    // were online, since that is the best predictor of who will come back soon.
    const heartbeatMs = (x: Record<string, unknown>) => {
      const raw = x.last_heartbeat_at as string | null | undefined
      const t = raw ? new Date(raw).getTime() : NaN
      return Number.isFinite(t) ? t : -1 // never-online sinks to the bottom
    }
    listeners.sort((a, b) => {
      const av = a.is_available ? 1 : 0
      const bv = b.is_available ? 1 : 0
      if (av !== bv) return bv - av
      if (!a.is_available) {
        const diff = heartbeatMs(b) - heartbeatMs(a)
        if (diff !== 0) return diff
      }
      return ((b as { rating?: number }).rating || 0) - ((a as { rating?: number }).rating || 0)
    })

    const onlineCount = listeners.filter(l => l.is_available).length

    return NextResponse.json({ listeners }, {
      headers: {
        // Prevent every caching layer from serving stale data.
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Surrogate-Control': 'no-store',
        // Diagnostic header — lets the owner verify which deploy is running and
        // what the server sees, without exposing sensitive data.
        'X-LeanOn-Ts': new Date().toISOString(),
        'X-LeanOn-Online': String(onlineCount),
      },
    })
  } catch (err) {
    logger.error('listeners route error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to fetch listeners. Please try again.' }, { status: 503 })
  }
}
