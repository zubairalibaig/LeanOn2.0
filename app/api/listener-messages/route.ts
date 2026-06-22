import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

// GET — list all offline message requests for the current user.
// Returns sent (as seeker) and received (as listener) with other-party names.
// Returns empty arrays if migration 048 has not been run yet.
//
// NOTE: listener_messages has NO foreign key to users, so PostgREST embeds
// (users!listener_id) cannot resolve and error out the whole query. We fetch
// the other party's name/avatar in a separate batched query instead — the
// same pattern the working /api/listener-messages/[id] detail route uses.
export async function GET() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ sent: [], received: [], unreadCount: 0 })

    const admin = createAdminClient()

    const [sentRes, recvRes] = await Promise.all([
      admin
        .from('listener_messages')
        .select('id, listener_id, messages, is_read, created_at, updated_at')
        .eq('seeker_id', user.id)
        .order('updated_at', { ascending: false }),
      admin
        .from('listener_messages')
        .select('id, seeker_id, messages, is_read, created_at, updated_at')
        .eq('listener_id', user.id)
        .order('updated_at', { ascending: false }),
    ])

    // Table not created yet (migration 048 not run) — degrade gracefully.
    if (sentRes.error || recvRes.error) {
      return NextResponse.json({ sent: [], received: [], unreadCount: 0 })
    }

    const sentRows = sentRes.data ?? []
    const recvRows = recvRes.data ?? []

    // Batch-fetch the other party's name/avatar for all rows at once
    const otherIds = Array.from(new Set([
      ...sentRows.map(r => r.listener_id as string),
      ...recvRows.map(r => r.seeker_id as string),
    ]))
    const nameMap: Record<string, { name: string | null; avatar_url: string | null }> = {}
    if (otherIds.length > 0) {
      const { data: usersData } = await admin
        .from('users')
        .select('id, name, avatar_url')
        .in('id', otherIds)
      for (const u of usersData ?? []) {
        nameMap[u.id as string] = {
          name:       (u.name as string | null) ?? null,
          avatar_url: (u.avatar_url as string | null) ?? null,
        }
      }
    }

    const sent = sentRows.map(r => ({
      id:          r.id,
      listener_id: r.listener_id as string,
      messages:    r.messages as string[],
      is_read:     r.is_read as boolean,
      created_at:  r.created_at as string,
      updated_at:  r.updated_at as string,
      otherName:   nameMap[r.listener_id as string]?.name ?? 'Listener',
      otherAvatar: nameMap[r.listener_id as string]?.avatar_url ?? null,
    }))

    const received = recvRows.map(r => ({
      id:          r.id,
      seeker_id:   r.seeker_id as string,
      messages:    r.messages as string[],
      is_read:     r.is_read as boolean,
      created_at:  r.created_at as string,
      updated_at:  r.updated_at as string,
      otherName:   nameMap[r.seeker_id as string]?.name ?? 'Seeker',
      otherAvatar: nameMap[r.seeker_id as string]?.avatar_url ?? null,
    }))

    const unreadCount = received.filter(r => !r.is_read).length

    return NextResponse.json({ sent, received, unreadCount })
  } catch {
    return NextResponse.json({ sent: [], received: [], unreadCount: 0 })
  }
}
