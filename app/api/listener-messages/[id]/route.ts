import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { UUID_RE } from '@/lib/constants'

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
