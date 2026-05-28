import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// POST /api/sessions/crisis-flag
// Body: { sessionId: string }
// Marks a session as crisis_flagged and notifies the listener (no leak of who triggered it).
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const { sessionId } = await req.json()
    if (!sessionId || typeof sessionId !== 'string') {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    const sb = createAdminClient()

    // Verify caller is a participant
    const { data: session } = await sb
      .from('sessions')
      .select('seeker_id, listener_id, crisis_flagged')
      .eq('id', sessionId)
      .single()

    if (!session || (session.seeker_id !== user.id && session.listener_id !== user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    if (session.crisis_flagged) {
      return NextResponse.json({ ok: true }) // already flagged
    }

    await sb.from('sessions').update({
      crisis_flagged: true,
      crisis_flagged_at: new Date().toISOString(),
    }).eq('id', sessionId)

    // Notify the listener — deliberately vague so we don't expose who triggered it
    await sb.from('notifications').insert({
      user_id:    session.listener_id,
      type:       'crisis_listener',
      title:      'Session support alert',
      body:       'A participant in your current session may need extra care. Please listen with extra compassion and share crisis helpline numbers if needed.',
      action_url: `/session/${sessionId}`,
    }).then(() => {}, () => {})

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('crisis-flag error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
