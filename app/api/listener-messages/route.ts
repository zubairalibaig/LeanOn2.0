import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

type UserEmbed = { name?: string | null; avatar_url?: string | null } | null

// GET — list all offline message requests for the current user.
// Returns sent (as seeker) and received (as listener) with other-party names.
// Returns empty arrays if migration 048 has not been run yet.
export async function GET() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ sent: [], received: [], unreadCount: 0 })

    const admin = createAdminClient()

    const [sentRes, recvRes] = await Promise.all([
      admin
        .from('listener_messages')
        .select('id, listener_id, messages, is_read, created_at, updated_at, users!listener_id(name, avatar_url)')
        .eq('seeker_id', user.id)
        .order('updated_at', { ascending: false }),
      admin
        .from('listener_messages')
        .select('id, seeker_id, messages, is_read, created_at, updated_at, users!seeker_id(name, avatar_url)')
        .eq('listener_id', user.id)
        .order('updated_at', { ascending: false }),
    ])

    if (
      sentRes.error?.message?.includes('listener_messages') ||
      recvRes.error?.message?.includes('listener_messages')
    ) {
      return NextResponse.json({ sent: [], received: [], unreadCount: 0 })
    }

    const sent = (sentRes.data ?? []).map(r => ({
      id:          r.id,
      listener_id: r.listener_id as string,
      messages:    r.messages as string[],
      is_read:     r.is_read as boolean,
      created_at:  r.created_at as string,
      updated_at:  r.updated_at as string,
      otherName:   ((r.users as UserEmbed)?.name) ?? 'Listener',
      otherAvatar: ((r.users as UserEmbed)?.avatar_url) ?? null,
    }))

    const received = (recvRes.data ?? []).map(r => ({
      id:          r.id,
      seeker_id:   r.seeker_id as string,
      messages:    r.messages as string[],
      is_read:     r.is_read as boolean,
      created_at:  r.created_at as string,
      updated_at:  r.updated_at as string,
      otherName:   ((r.users as UserEmbed)?.name) ?? 'Seeker',
      otherAvatar: ((r.users as UserEmbed)?.avatar_url) ?? null,
    }))

    const unreadCount = received.filter(r => !r.is_read).length

    return NextResponse.json({ sent, received, unreadCount })
  } catch {
    return NextResponse.json({ sent: [], received: [], unreadCount: 0 })
  }
}
