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
    const { sessionId } = await req.json().catch(() => ({}))
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (!sessionId || !UUID_RE.test(sessionId)) return NextResponse.json({ ok: true }) // fire-and-forget

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

    // GHOST-OFFLINE FIX: also keep the listener's presence timestamp fresh.
    //
    // The 60s presence ping lives on /dashboard, which UNMOUNTS the moment the
    // listener accepts a session and navigates to /session/[id]. Nothing then
    // refreshed listener_profiles.last_heartbeat_at, so on any session longer
    // than the browse staleness window the sweep in /api/listeners flipped them
    // to is_available=false MID-SESSION. They returned to the dashboard after a
    // 30- or 45-min session silently offline, receiving no further requests
    // until they happened to notice the toggle.
    //
    // This only refreshes a timestamp — it never sets is_available, which by
    // design remains exclusively the job of the authenticated availability
    // toggle (see the note in /api/presence). So the availability logic is
    // untouched; a listener who genuinely went offline stays offline.
    if (!isSeeker) {
      await sb.from('listener_profiles')
        .update({ last_heartbeat_at: now })
        .eq('user_id', user.id)
        .then(() => {}, () => {}) // fire-and-forget; never break the session heartbeat
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // fire-and-forget
  }
}
