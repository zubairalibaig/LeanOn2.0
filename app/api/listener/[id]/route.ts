import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { UUID_RE } from '@/lib/constants'
import { SHOW_LISTENER_IN_SESSION_STATUS } from '@/lib/feature-flags'

// GET — public listener profile (admin client bypasses RLS, so the
// users!inner join can't fail due to users_select_listener_public policy drift)
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  if (!id || !UUID_RE.test(id)) {
    return NextResponse.json({ error: 'Invalid listener id' }, { status: 400 })
  }

  const admin = createAdminClient()

  const { data: lp, error } = await admin
    .from('listener_profiles')
    .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_approved, is_active, is_verified, is_in_session, users!inner(name, avatar_url)')
    .eq('user_id', id)
    .eq('is_approved', true)
    .eq('is_active', true)
    .maybeSingle()

  if (error) {
    return NextResponse.json({ error: 'Failed to load profile' }, { status: 500 })
  }
  if (!lp) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  // is_in_session: use the DB column (listener_profiles.is_in_session, set by
  // the accept route and cleared on session end). Falls back to a sessions query
  // if the column doesn't exist yet (migration 052 not applied) — so the profile
  // page keeps working during the deploy-before-migration window.
  let is_in_session = (lp as Record<string, unknown>).is_in_session as boolean | null
  if (is_in_session === null || is_in_session === undefined) {
    // Migration 052 not applied yet — derive from sessions table
    is_in_session = false
    if (SHOW_LISTENER_IN_SESSION_STATUS) {
      try {
        const { count } = await admin
          .from('sessions')
          .select('id', { count: 'exact', head: true })
          .eq('listener_id', id)
          .eq('status', 'active')
        is_in_session = (count ?? 0) > 0
      } catch {
        // silent — default false
      }
    }
  }

  return NextResponse.json({ profile: { ...lp, is_in_session: Boolean(is_in_session) } })
}
