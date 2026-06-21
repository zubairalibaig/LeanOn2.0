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

    // Exclude orphaned accounts: LeanOn is phone-only, so a listener whose users
    // row has no phone can never be logged into and must not appear bookable.
    // These ghosts come from auth-account recreation (see lib/ensure-user-row.ts)
    // and were the cause of the duplicate-"Zubair" / "I'm online but shown
    // offline" bug. We fetch phone ONLY to filter on it, then strip it from the
    // response below so it never leaves the server.
    let q = sb
      .from('listener_profiles')
      .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_verified, last_heartbeat_at, users!inner(name, avatar_url, phone)')
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

    // A listener is only truly online if their heartbeat is fresh (≤ 5 min).
    // The dashboard sends a heartbeat on going-online AND every 60 s thereafter.
    // If last_heartbeat_at is null or stale, the listener left without clicking
    // "Go offline" — treat them as offline so they don't appear bookable.
    // Going online via the toggle also stamps last_heartbeat_at = now(), so a
    // freshly-toggled listener is never falsely caught by this gate.
    const STALE_MS = 5 * 60 * 1000 // 5 minutes
    const now = Date.now()

    const listeners = (data ?? []).map((l) => {
      const raw = l as {
        is_available?: boolean
        last_heartbeat_at?: string | null
        users?: { name?: string; avatar_url?: string; phone?: string }
      }
      // Strip phone — selected only to filter orphans, must never reach client.
      const rawUsers = raw.users
      const users = rawUsers ? { name: rawUsers.name, avatar_url: rawUsers.avatar_url } : rawUsers

      const dbOnline = Boolean(raw.is_available)
      const heartbeatAge = raw.last_heartbeat_at
        ? now - new Date(raw.last_heartbeat_at).getTime()
        : Infinity
      const is_available = dbOnline && heartbeatAge <= STALE_MS

      // Strip last_heartbeat_at — internal freshness signal, not for clients.
      const { last_heartbeat_at: _hb, ...rest } = l as typeof l & { last_heartbeat_at?: string | null }
      void _hb
      return { ...rest, users, is_available }
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
