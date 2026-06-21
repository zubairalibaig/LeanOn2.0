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

    // Self-heal stuck-online ghosts BEFORE reading the list.
    //
    // A listener row can be left with is_available=true forever if the listener
    // closed the app without clicking "Go offline" (e.g. Sagor: is_available=true,
    // last_heartbeat_at=null). There is no frequent cron on this plan (only a daily
    // job), so we piggy-back on browse traffic: set is_available=false for any
    // listener whose heartbeat is null or older than 15 minutes.
    //
    // 15 minutes (not the dashboard's 60 s heartbeat) is deliberately generous:
    // mobile browsers throttle/pause background timers, so a genuinely-online
    // listener who backgrounds the dashboard tab to glance at /browse must not be
    // knocked offline. A 5-minute display-time gate (the previous approach) did
    // exactly that and was the real cause of "I went online but I'm shown offline".
    // The toggle stamps last_heartbeat_at=now() on going online, so a freshly
    // online listener is never caught here.
    //
    // This is a WRITE, so the correction is consistent everywhere (poll, realtime,
    // and the listener's own dashboard) rather than a per-request display fudge.
    // Updating 0 rows (the common case) is cheap. Fire-and-forget: a sweep failure
    // must never block the browse list.
    const staleCutoff = new Date(Date.now() - 15 * 60 * 1000).toISOString()
    await sb
      .from('listener_profiles')
      .update({ is_available: false })
      .eq('is_available', true)
      .or(`last_heartbeat_at.is.null,last_heartbeat_at.lt.${staleCutoff}`)
      .then(
        ({ error: sweepErr }) => { if (sweepErr) logger.warn('listeners staleness sweep failed', { error: sweepErr.message }) },
        (e) => logger.warn('listeners staleness sweep threw', { error: String(e) }),
      )

    // Exclude orphaned accounts: LeanOn is phone-only, so a listener whose users
    // row has no phone can never be logged into and must not appear bookable.
    // These ghosts come from auth-account recreation (see lib/ensure-user-row.ts)
    // and were the cause of the duplicate-"Zubair" bug. We fetch phone ONLY to
    // filter on it, then strip it from the response below so it never leaves the
    // server.
    let q = sb
      .from('listener_profiles')
      .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_verified, users!inner(name, avatar_url, phone)')
      .eq('is_approved', true)
      .or('is_active.eq.true,is_active.is.null')
      .eq('is_suspended', false)
      .not('users.phone', 'is', null)
      .order('is_available', { ascending: false })
      .order('rating',       { ascending: false })
      .limit(50)

    if (tag  !== 'all') q = q.contains('specialty_tags',    [tag])
    if (lang !== 'all') q = q.contains('languages_spoken', [lang])

    const { data, error } = await q

    if (error) {
      // Don't leak the raw Postgres/network error string to clients — log it
      // server-side and return a generic message.
      logger.error('listeners query failed:', { error: error.message })
      return NextResponse.json({ error: 'Failed to fetch listeners. Please try again.' }, { status: 503 })
    }

    // Trust is_available directly: the staleness sweep above already corrected any
    // stuck-online ghosts, and the toggle writes this column authoritatively. No
    // per-request display gate — that previously caused false-offline flicker.
    const listeners = (data ?? []).map((l) => {
      // Strip phone — selected only to filter orphans, must never reach client.
      const rawUsers = (l as { users?: { name?: string; avatar_url?: string; phone?: string } }).users
      const users = rawUsers ? { name: rawUsers.name, avatar_url: rawUsers.avatar_url } : rawUsers
      return {
        ...l,
        users,
        is_available: Boolean((l as { is_available?: boolean }).is_available),
      }
    })
    listeners.sort((a, b) => {
      const av = a.is_available ? 1 : 0
      const bv = b.is_available ? 1 : 0
      if (av !== bv) return bv - av
      return ((b as { rating?: number }).rating || 0) - ((a as { rating?: number }).rating || 0)
    })

    return NextResponse.json({ listeners }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  } catch (err) {
    logger.error('listeners route error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to fetch listeners. Please try again.' }, { status: 503 })
  }
}
