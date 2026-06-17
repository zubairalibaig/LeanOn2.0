import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

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
      .eq('is_active', true)
      .eq('is_suspended', false)
      .order('is_available', { ascending: false })
      .order('rating',       { ascending: false })
      .limit(50)

    if (tag  !== 'all') q = q.contains('specialty_tags',    [tag])
    if (lang !== 'all') q = q.contains('languages_spoken', [lang])

    const { data, error } = await q

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ listeners: data ?? [] }, {
      headers: { 'Cache-Control': 's-maxage=10, stale-while-revalidate=30' },
    })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch listeners' }, { status: 503 })
  }
}
