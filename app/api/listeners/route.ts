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
      .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_verified, users!inner(name, avatar_url)')
      .eq('is_approved', true)
      .or('is_active.eq.true,is_active.is.null')
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

    // Trust is_available directly from the DB. The dashboard availability toggle
    // sets this column via the admin client (bypasses RLS/triggers). Ghost-online
    // detection (stale heartbeat) is intentionally removed here because the
    // heartbeat column may not exist in all environments, and a false staleness
    // verdict was causing listeners to appear offline immediately after going online.
    const listeners = (data ?? []).map((l) => ({
      ...l,
      is_available: Boolean((l as { is_available?: boolean }).is_available),
    }))
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
