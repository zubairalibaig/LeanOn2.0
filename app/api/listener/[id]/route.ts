import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { UUID_RE } from '@/lib/constants'

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
    .select('user_id, bio, specialty_tags, languages_spoken, rate_per_min, rating, total_sessions, is_available, is_approved, is_active, is_verified, users!inner(name, avatar_url)')
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

  return NextResponse.json({ profile: lp })
}
