import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MAX_MSG_LENGTH = 2000

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
