import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'

// PATCH — toggle is_available for authenticated listener
export async function PATCH() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`availability:${user.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const sb = createAdminClient()
    const { data: lp } = await sb
      .from('listener_profiles')
      .select('is_available, is_approved, is_active, is_suspended')
      .eq('user_id', user.id)
      .single()

    if (!lp) return NextResponse.json({ error: 'Listener profile not found' }, { status: 404 })
    if (!lp.is_approved) return NextResponse.json({ error: 'Your application is still under review' }, { status: 403 })
    if (lp.is_suspended) return NextResponse.json({ error: 'Your account is suspended' }, { status: 403 })
    if (!lp.is_active) return NextResponse.json({ error: 'Your account is not active' }, { status: 403 })

    const next = !lp.is_available
    await sb.from('listener_profiles').update({ is_available: next }).eq('user_id', user.id)

    return NextResponse.json({ is_available: next })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
