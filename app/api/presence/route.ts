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

    // Otherwise: set availability (existing behavior)
    const available = body.available === true
    await sb.from('listener_profiles').update({ is_available: available }).eq('user_id', user.id)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // beacon fire-and-forget; always 200
  }
}
