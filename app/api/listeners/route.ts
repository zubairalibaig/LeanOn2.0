import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

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

    let q = sb
      .from('listener_profiles')
      .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_verified, last_heartbeat_at, users!inner(name, avatar_url)')
      .eq('is_approved', true)
      .eq('is_active', true)
      .eq('is_suspended', false)
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

    // A listener is only TRULY online if their heartbeat is fresh. Demote
    // stale-online (ghost) listeners — tab force-killed, network dropped — to
    // offline so seekers don't try to book someone who isn't there. The dashboard
    // sends a heartbeat every 60s while online; we allow a 3-minute grace.
    const STALE_MS = 3 * 60 * 1000
    const now = Date.now()
    const listeners = (data ?? []).map((l) => {
      const hb = (l as { last_heartbeat_at?: string | null }).last_heartbeat_at
      // NULL heartbeat = listener predates the heartbeat column (migration 041).
      // Trust is_available as-is; only demote when a heartbeat exists but is stale.
      const fresh = !hb || (now - new Date(hb).getTime()) < STALE_MS
      const { last_heartbeat_at: _omit, ...rest } = l as Record<string, unknown>
      return { ...rest, is_available: Boolean((l as { is_available?: boolean }).is_available) && fresh }
    })
    // Re-sort: truly-online first, then by rating (mirrors the DB order intent).
    listeners.sort((a, b) => {
      const av = a.is_available ? 1 : 0
      const bv = b.is_available ? 1 : 0
      if (av !== bv) return bv - av
      return ((b as { rating?: number }).rating || 0) - ((a as { rating?: number }).rating || 0)
    })

    return NextResponse.json({ listeners }, {
      headers: { 'Cache-Control': 's-maxage=10, stale-while-revalidate=30' },
    })
  } catch (err) {
    logger.error('listeners route error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to fetch listeners. Please try again.' }, { status: 503 })
  }
}
