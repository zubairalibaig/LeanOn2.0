import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { MESSAGE_REACTIONS } from '@/lib/constants'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// POST — toggle the caller's reaction on a message.
//
// Behaviour matches common chat apps: one reaction per person per message.
// Sending the same emoji again removes it; sending a different one replaces it.
// The unique constraint on (message_id, user_id) makes this atomic, so both
// participants reacting at the same moment cannot corrupt each other's state.
//
// Writes go through the service-role client because migration 051 grants the
// browser SELECT only — the same least-privilege stance migration 050 had to
// retrofit onto `sessions` after an over-broad write policy became exploitable.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`react:${user.id}`, 60, 60_000)) {
      return NextResponse.json({ error: 'Too many reactions. Please slow down.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const messageId: string = typeof body?.messageId === 'string' ? body.messageId : ''
    const emoji: string     = typeof body?.emoji === 'string' ? body.emoji : ''

    if (!UUID_RE.test(messageId)) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }
    // Allow-list enforced here AND by a CHECK constraint in the DB, so the set
    // cannot drift. Deliberately supportive-only — see lib/constants.ts.
    if (!(MESSAGE_REACTIONS as readonly string[]).includes(emoji)) {
      return NextResponse.json({ error: 'Unsupported reaction' }, { status: 400 })
    }

    const sb = createAdminClient()

    // AUTHORIZATION: the caller must be a participant of the session this
    // message belongs to. Without this check any authenticated user could react
    // to any message by guessing an id.
    const { data: msg } = await sb
      .from('messages')
      .select('id, session_id, sessions!inner(seeker_id, listener_id)')
      .eq('id', messageId)
      .single()

    if (!msg) return NextResponse.json({ error: 'Message not found' }, { status: 404 })

    const parent = (msg as unknown as { sessions?: { seeker_id: string; listener_id: string } }).sessions
    if (!parent || (user.id !== parent.seeker_id && user.id !== parent.listener_id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Toggle: same emoji again → remove; different → replace; none → add.
    const { data: existing } = await sb
      .from('message_reactions')
      .select('id, emoji')
      .eq('message_id', messageId)
      .eq('user_id', user.id)
      .maybeSingle()

    if (existing) {
      if (existing.emoji === emoji) {
        await sb.from('message_reactions').delete().eq('id', existing.id)
        return NextResponse.json({ ok: true, emoji: null })
      }
      await sb.from('message_reactions').update({ emoji }).eq('id', existing.id)
      return NextResponse.json({ ok: true, emoji })
    }

    const { error: insertErr } = await sb
      .from('message_reactions')
      .insert({ message_id: messageId, user_id: user.id, emoji })
    if (insertErr) {
      // Table missing (migration 051 not applied yet) — degrade quietly rather
      // than surfacing a 500 mid-conversation.
      if (insertErr.message?.includes('message_reactions')) {
        return NextResponse.json({ ok: false, unavailable: true })
      }
      logger.error('reaction insert failed:', { error: insertErr.message })
      return NextResponse.json({ error: 'Could not save reaction' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, emoji })
  } catch (err) {
    logger.error('reaction route error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
