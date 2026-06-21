import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

// POST — listener presence signal. Two jobs only:
//   • { heartbeat: true }      → refresh last_heartbeat_at (keeps the listener
//                                inside the browse staleness window while online)
//   • { available: false } or  → set is_available=false (explicit go-offline /
//     anything else              unload beacon)
//
// IMPORTANT: this endpoint can NEVER set is_available=true. Going ONLINE is
// exclusively the job of the authenticated toggle (/api/listener/availability).
// Allowing presence to write `true` created a backdoor: a stale/old dashboard
// tab (or legacy beacon code) left open on a device would re-online a listener
// on a loop, which is why ghosts kept reappearing as "online" even after the
// DB was corrected. Heartbeats keep an already-online listener fresh, but they
// never flip is_available back on.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))

    // Authenticate from session cookie — never trust userId from request body
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ ok: true }) // beacon fire-and-forget

    const sb = createAdminClient()

    // Heartbeat: only refresh the timestamp, never touch is_available.
    if (body.heartbeat === true) {
      await sb.from('listener_profiles')
        .update({ last_heartbeat_at: new Date().toISOString() })
        .eq('user_id', user.id)
      return NextResponse.json({ ok: true })
    }

    // Any other call can only ever set the listener OFFLINE (never online).
    await sb.from('listener_profiles')
      .update({ is_available: false })
      .eq('user_id', user.id)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // beacon fire-and-forget; always 200
  }
}
