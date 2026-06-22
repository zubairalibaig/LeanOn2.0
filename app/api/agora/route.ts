import { NextRequest, NextResponse } from 'next/server'
import { RtcTokenBuilder, RtcRole } from 'agora-token'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }
    const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (!UUID_RE.test(sessionId)) {
      return NextResponse.json({ error: 'Invalid sessionId format' }, { status: 400 })
    }

    // Verify caller is authenticated
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Look up session to get agora_channel and verify caller is participant
    const sb = createAdminClient()
    const { data: session, error: sErr } = await sb
      .from('sessions')
      .select('agora_channel, seeker_id, listener_id, status, started_at, duration_mins')
      .eq('id', sessionId)
      .single()

    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Only seeker or listener of this session can get a token
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Only issue tokens for active sessions — completed/cancelled sessions cannot rejoin
    if (session.status !== 'active') {
      return NextResponse.json({ error: 'Session is no longer active' }, { status: 403 })
    }

    const appId      = process.env.NEXT_PUBLIC_AGORA_APP_ID!
    const appCert    = process.env.AGORA_APP_CERTIFICATE
    const channelName = session.agora_channel as string

    // Scope token lifetime to the session, not a flat hour. An ejected/finished
    // participant should NOT keep a valid token to rejoin the channel. Cap at the
    // booked end (started_at + duration + 2-min grace), falling back to now+grace.
    const nowSec = Math.floor(Date.now() / 1000)
    const startSec = session.started_at ? Math.floor(new Date(session.started_at).getTime() / 1000) : nowSec
    const bookedEnd = startSec + ((session.duration_mins as number) + 2) * 60
    // Always allow at least 60s so a clock skew can't issue an already-expired token.
    const expireTime = Math.max(nowSec + 60, Math.min(bookedEnd, nowSec + 3600))

    // If no App Certificate is configured, Agora project is in Testing mode —
    // pass null token. If certificate is present, sign a proper RTC token.
    const token = appCert
      ? RtcTokenBuilder.buildTokenWithUid(
          appId,
          appCert,
          channelName,
          0,               // uid=0 means Agora assigns one
          RtcRole.PUBLISHER,
          expireTime,
          expireTime
        )
      : null

    return NextResponse.json({ token, channelName, appId })
  } catch (err: unknown) {
    // Never leak internal error text to the client — log server-side only.
    logger.error('Agora token error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Token generation failed' }, { status: 500 })
  }
}
