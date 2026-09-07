import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { UUID_RE } from '@/lib/constants'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendSms } from '@/lib/twilio'
import { sendPushNotification } from '@/lib/firebase-admin'
import { logger } from '@/lib/logger'

// A listener may re-invite the same seeker at most once per this window.
const INVITE_COOLDOWN_MS = 6 * 60 * 60 * 1000 // 6 hours

// GET — fetch a single offline message thread (must be participant)
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  if (!UUID_RE.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  try {
    const admin = createAdminClient()

    const { data, error } = await admin
      .from('listener_messages')
      .select('id, seeker_id, listener_id, messages, is_read, read_at, created_at, updated_at')
      .eq('id', id)
      .maybeSingle()

    if (error || !data) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const iAmListener = (data.listener_id as string) === user.id
    const iAmSeeker   = (data.seeker_id   as string) === user.id
    if (!iAmListener && !iAmSeeker) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const otherUserId = iAmListener ? (data.seeker_id as string) : (data.listener_id as string)
    const { data: otherUser } = await admin
      .from('users')
      .select('name, avatar_url')
      .eq('id', otherUserId)
      .maybeSingle()

    return NextResponse.json({
      id:           data.id,
      seeker_id:    data.seeker_id,
      listener_id:  data.listener_id,
      messages:     data.messages as string[],
      is_read:      data.is_read,
      created_at:   data.created_at,
      updated_at:   data.updated_at,
      iAmListener,
      otherUserId,
      otherName:   otherUser?.name  ?? (iAmListener ? 'Seeker'   : 'Listener'),
      otherAvatar: otherUser?.avatar_url ?? null,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 })
  }
}

// POST — the listener sends a one-way "I'm available now" invite to the seeker
// who left this offline message. This is deliberately NOT a reply: the listener
// cannot send free text. It only notifies the seeker (in-app + FCM + SMS) that
// the listener is around, and links them to the listener's profile to start a
// LIVE session. Keeps LeanOn a live-session platform, not an async messenger.
//
// Guard: the listener must actually be online, or the "available now" ping would
// be a lie. Rate-limited to once per INVITE_COOLDOWN_MS per thread.
export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  if (!UUID_RE.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  try {
    const admin = createAdminClient()

    // Load the thread. Tolerate last_invited_at being absent pre-migration 052.
    type Thread = { seeker_id: string; listener_id: string; last_invited_at?: string | null }
    let thread: Thread | null = null
    const withCol = await admin
      .from('listener_messages')
      .select('seeker_id, listener_id, last_invited_at')
      .eq('id', id)
      .maybeSingle()
    if (withCol.error) {
      const fallback = await admin
        .from('listener_messages')
        .select('seeker_id, listener_id')
        .eq('id', id)
        .maybeSingle()
      thread = (fallback.data as Thread | null) ?? null
    } else {
      thread = (withCol.data as Thread | null) ?? null
    }
    if (!thread) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    // Only the listener the message was addressed to can invite.
    if (thread.listener_id !== user.id) {
      return NextResponse.json({ error: 'Only the listener can send an invite' }, { status: 403 })
    }

    // Must be online — otherwise "available now" is false and the seeker lands on
    // an offline profile and just leaves another message (a loop).
    const { data: lp } = await admin
      .from('listener_profiles')
      .select('is_available')
      .eq('user_id', user.id)
      .maybeSingle()
    if (!lp?.is_available) {
      return NextResponse.json({
        error: 'offline',
        message: 'Go online first — then invite them. (When you go online, everyone who messaged you is notified automatically.)',
      }, { status: 409 })
    }

    // Persistent cooldown (survives restarts) if the column exists…
    if (thread.last_invited_at && Date.now() - new Date(thread.last_invited_at).getTime() < INVITE_COOLDOWN_MS) {
      return NextResponse.json({
        error: 'You already invited them recently. Please wait a few hours before inviting again.',
      }, { status: 429 })
    }
    // …plus an in-memory backstop for the pre-migration case / rapid re-taps.
    if (!checkRateLimit(`msg-invite:${id}`, 1, INVITE_COOLDOWN_MS)) {
      return NextResponse.json({
        error: 'You already invited them recently. Please wait a few hours before inviting again.',
      }, { status: 429 })
    }

    const { data: listenerUser } = await admin.from('users').select('name').eq('id', user.id).single()
    const listenerName = listenerUser?.name || 'Your listener'

    // 1) In-app realtime notification (bell) — reaches the seeker if they're in the app.
    await admin.from('notifications').insert({
      user_id: thread.seeker_id,
      type: 'listener_available',
      title: `${listenerName} is available now 💬`,
      body: 'The listener you messaged is online and ready to talk. Tap to start a session.',
      action_url: `/listener/${thread.listener_id}`,
    }).then(() => {}, (e) => logger.error('invite notification insert failed (non-critical):', { error: String(e) }))

    // 2) FCM push + SMS — reach the seeker even if they've left the app.
    const { data: seeker } = await admin
      .from('users')
      .select('phone, fcm_token')
      .eq('id', thread.seeker_id)
      .maybeSingle()
    if (seeker?.fcm_token) {
      try {
        await sendPushNotification(
          seeker.fcm_token as string,
          `${listenerName} is available now`,
          'Tap to start a live session on LeanOn.',
          { type: 'listener_available', listenerId: String(thread.listener_id) },
        )
      } catch (e) { logger.error('invite FCM failed (non-critical):', { error: String(e) }) }
    }
    if (seeker?.phone) {
      try {
        await sendSms(
          seeker.phone as string,
          `${listenerName} is now online on LeanOn and ready to talk. Start a session: leanon.app/listener/${thread.listener_id}`,
        )
      } catch (e) { logger.error('invite SMS failed (non-critical):', { error: String(e) }) }
    }

    // 3) Stamp the cooldown (tolerate the column being absent pre-migration 052).
    await admin.from('listener_messages')
      .update({ last_invited_at: new Date().toISOString() })
      .eq('id', id)
      .then(() => {}, () => { /* column may not exist yet — in-memory limit still applies */ })

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('listener-message invite error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Could not send invite. Please try again.' }, { status: 500 })
  }
}

// PATCH — listener marks the message thread as read
export async function PATCH(_req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  if (!UUID_RE.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  try {
    const admin = createAdminClient()
    const { error } = await admin
      .from('listener_messages')
      .update({ is_read: true, read_at: new Date().toISOString() })
      .eq('id', id)
      .eq('listener_id', user.id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
