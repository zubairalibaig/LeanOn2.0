import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

// POST — session participant heartbeat. Called every 30s by both seeker and listener.
// If neither party sends a heartbeat for > 90s, the session can be treated as abandoned.
//
// We store last_heartbeat_at per participant in a lightweight way:
//   - seeker heartbeat  → updates sessions.seeker_last_seen
//   - listener heartbeat→ updates sessions.listener_last_seen
//
// The cleanup job (/api/sessions/cleanup) reads these to detect abandonment.
export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json()
    if (!sessionId) return NextResponse.json({ ok: true }) // fire-and-forget

    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ ok: true })

    const sb = createAdminClient()

    // Fetch session to determine participant role
    const { data: session } = await sb
      .from('sessions')
      .select('seeker_id, listener_id, status')
      .eq('id', sessionId)
      .single()

    if (!session || session.status !== 'active') return NextResponse.json({ ok: true })

    // Participant guard — only seeker or listener can update this session's timestamps
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ ok: true })
    }

    const now = new Date().toISOString()
    const isSeeker = user.id === session.seeker_id

    await sb.from('sessions').update(
      isSeeker
        ? { seeker_last_seen: now }
        : { listener_last_seen: now }
    ).eq('id', sessionId)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // fire-and-forget
  }
}
