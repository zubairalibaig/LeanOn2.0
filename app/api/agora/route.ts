import { NextRequest, NextResponse } from 'next/server'
import { RtcTokenBuilder, RtcRole } from 'agora-access-token'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
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
      .select('agora_channel, seeker_id, listener_id, status')
      .eq('id', sessionId)
      .single()

    if (sErr || !session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Only seeker or listener of this session can get a token
    if (user.id !== session.seeker_id && user.id !== session.listener_id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const appId      = process.env.NEXT_PUBLIC_AGORA_APP_ID!
    const appCert    = process.env.AGORA_APP_CERTIFICATE!
    const channelName = session.agora_channel as string
    const expireTime = Math.floor(Date.now() / 1000) + 3600 // 1 hour from now

    const token = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCert,
      channelName,
      0,               // uid=0 means Agora assigns one
      RtcRole.PUBLISHER,
      expireTime
    )

    return NextResponse.json({ token, channelName, appId })
  } catch (err: unknown) {
    console.error('Agora token error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Token generation failed' },
      { status: 500 }
    )
  }
}
