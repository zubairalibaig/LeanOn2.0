import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, createServerSupabaseClient } from '@/lib/supabase-server'

// DELETE /api/lounge/messages/:id — soft-delete own message (or any message for admin)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const sb = createServerSupabaseClient()
  const { data: { user } } = await sb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const admin = createAdminClient()

  // Fetch the message first
  const { data: msg } = await admin
    .from('lounge_messages')
    .select('id, sender_id, deleted_at')
    .eq('id', params.id)
    .single()

  if (!msg) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (msg.deleted_at) return NextResponse.json({ error: 'Already deleted' }, { status: 409 })

  // Check if caller is the author or an admin
  const { data: account } = await admin
    .from('users')
    .select('is_admin, role')
    .eq('id', user.id)
    .single()

  const isAdmin = account?.is_admin || account?.role === 'admin'
  const isOwner = msg.sender_id === user.id

  if (!isOwner && !isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { error } = await admin
    .from('lounge_messages')
    .update({ deleted_at: new Date().toISOString(), deleted_by: user.id })
    .eq('id', params.id)

  if (error) {
    console.error('[lounge delete]', error)
    return NextResponse.json({ error: 'Failed to delete message.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
