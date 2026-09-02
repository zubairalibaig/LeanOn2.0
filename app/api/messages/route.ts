import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MAX_MSG_LENGTH = 2000

export const dynamic = 'force-dynamic'

// GET — load a session's message history.
//
// WHY VIA THE SERVER (admin client), not a browser supabase.from('messages'):
// the browser read is RLS-gated and its result was used to OVERWRITE the chat
// on mount — so any hiccup (RLS drift, an empty result on a fresh session, a
// read that resolves right after an optimistic send) silently WIPED messages
// the user had already sent. Reading here with the service-role client, gated
// by the same participant check as POST, makes history reliable and immune to
// RLS/session-timing quirks. Live messages still arrive over the realtime
// broadcast channel, which needs no RLS.
export async function GET(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const sessionId = req.nextUrl.searchParams.get('sessionId') || ''
    if (!UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }

    const sb = createAdminClient()

    const { data: session } = await sb
      .from('sessions').select('seeker_id, listener_id').eq('id', sessionId).single()
    if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { data: messages, error } = await sb
      .from('messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })

    if (error) {
      logger.error('Message history read failed:', { error: error.message })
      return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 })
    }
    return NextResponse.json(messages ?? [])
  } catch (err: unknown) {
    logger.error('Message history API error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

// POST — send a chat message in a session
// Rate limited: 30 messages/min per user (prevents spam flooding)
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`msg:${user.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Sending too fast. Please slow down.' }, { status: 429 })
    }

    const { sessionId, content } = await req.json()

    if (!sessionId || !UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 })
    }
    if (!content || typeof content !== 'string' || !content.trim()) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 })
    }
    const text = content.trim().slice(0, MAX_MSG_LENGTH)

    const sb = createAdminClient()

    // Verify caller is a participant in an active session
    const { data: session } = await sb
      .from('sessions')
      .select('seeker_id, listener_id, status')
      .eq('id', sessionId)
      .single()

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }
    if (session.status !== 'active') {
      return NextResponse.json({ error: 'Session has ended' }, { status: 400 })
    }

    const { data: saved, error } = await sb
      .from('messages')
      .insert({ session_id: sessionId, sender_id: user.id, content: text })
      .select()
      .single()

    if (error) {
      logger.error('Message insert failed:', { error: error instanceof Error ? error.message : String(error) })
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json(saved)
  } catch (err: unknown) {
    logger.error('Message API error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
