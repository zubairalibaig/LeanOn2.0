import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

// Called via navigator.sendBeacon when dashboard page unloads
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Authenticate from session cookie — never trust userId from request body
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ ok: true }) // beacon fire-and-forget

    const sb = createAdminClient()

    // If body.heartbeat === true: just update last_heartbeat_at, don't touch is_available
    if (body.heartbeat === true) {
      await sb.from('listener_profiles').update({ last_heartbeat_at: new Date().toISOString() }).eq('user_id', user.id)
      return NextResponse.json({ ok: true })
    }

    const available = body.available === true

    // Going OFFLINE is always allowed (beacon on unload/visibility-hidden).
    // Going ONLINE must pass the same gates as /api/listener/availability —
    // otherwise a suspended/unapproved/deactivated listener could re-surface
    // themselves on the browse page by calling this endpoint directly.
    if (available) {
      const { data: lp } = await sb
        .from('listener_profiles')
        .select('is_approved, is_active, is_suspended')
        .eq('user_id', user.id)
        .maybeSingle()
      if (!lp || !lp.is_approved || !lp.is_active || lp.is_suspended) {
        return NextResponse.json({ ok: true }) // silently no-op; beacon-friendly
      }
    }

    await sb.from('listener_profiles')
      .update({ is_available: available, ...(available ? { last_heartbeat_at: new Date().toISOString() } : {}) })
      .eq('user_id', user.id)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // beacon fire-and-forget; always 200
  }
}
