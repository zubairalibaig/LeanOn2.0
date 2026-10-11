import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'
import { requireAdmin, dbUserIdOrNull, ADMIN_PASSWORD_USER_ID, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS } from '@/lib/require-admin'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 100
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type MsgRow = { id: string; content: string; created_at: string; sender_id: string; deleted_at: string | null; deleted_by: string | null }

// GET /api/admin/lounge?before=<iso>&includeDeleted=1&q=<text>
// Full Listener Lounge history with the real sender behind every message.
export async function GET(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const url = new URL(req.url)
  const before = url.searchParams.get('before')
  const includeDeleted = url.searchParams.get('includeDeleted') === '1'
  const q = url.searchParams.get('q')?.trim() ?? ''

  const sb = createAdminClient()
  // No users(...) embed: lounge_messages has two FKs to users (sender_id, deleted_by),
  // which makes an unqualified embed ambiguous. Senders are batch-fetched below.
  let query = sb.from('lounge_messages')
    .select('id, content, created_at, sender_id, deleted_at, deleted_by')
    .order('created_at', { ascending: false })
    .limit(PAGE_SIZE)
  if (!includeDeleted) query = query.is('deleted_at', null)
  if (before && !Number.isNaN(Date.parse(before))) query = query.lt('created_at', before)
  if (q.length >= 2) query = query.ilike('content', `%${q.replace(/[\\%_]/g, c => `\\${c}`)}%`)

  const { data, error: qErr } = await query
  if (qErr) {
    logger.error('admin lounge: load failed', { error: qErr.message })
    return NextResponse.json({ error: 'Failed to load lounge messages' }, { status: 500 })
  }
  const rows = (data ?? []) as MsgRow[]

  const userIds = Array.from(new Set(rows.flatMap(r => [r.sender_id, r.deleted_by]).filter((x): x is string => !!x)))
  const ids = rows.map(r => r.id)
  const [{ data: users }, { data: profiles }, { data: flags }] = await Promise.all([
    userIds.length
      ? sb.from('users').select('id, name, phone, is_suspended').in('id', userIds)
      : Promise.resolve({ data: [] as { id: string; name: string | null; phone: string | null; is_suspended: boolean | null }[] }),
    userIds.length
      ? sb.from('listener_profiles').select('user_id, is_approved, is_active, is_suspended').in('user_id', userIds)
      : Promise.resolve({ data: [] as { user_id: string; is_approved: boolean | null; is_active: boolean | null; is_suspended: boolean | null }[] }),
    ids.length
      ? sb.from('content_flags').select('details').ilike('details', '%lounge_message_id%').order('created_at', { ascending: false }).limit(1000)
      : Promise.resolve({ data: [] as { details: string | null }[] }),
  ])

  const userById = new Map((users ?? []).map(u => [u.id, u]))
  const lpById = new Map((profiles ?? []).map(p => [p.user_id, p]))
  const reportCount = new Map<string, number>()
  for (const f of flags ?? []) {
    try {
      const mid = JSON.parse(String(f.details ?? '{}')).lounge_message_id
      if (typeof mid === 'string') reportCount.set(mid, (reportCount.get(mid) ?? 0) + 1)
    } catch { /* not JSON — skip */ }
  }

  const messages = rows.reverse().map(r => {
    const u = userById.get(r.sender_id)
    const lp = lpById.get(r.sender_id)
    const listenerStatus = !lp ? 'not a listener'
      : lp.is_suspended ? 'listener suspended'
      : !lp.is_approved ? 'not approved'
      : lp.is_active === false ? 'inactive'
      : 'active listener'
    return {
      id: r.id,
      content: r.content,
      created_at: r.created_at,
      sender: {
        id: r.sender_id,
        name: u?.name ?? null,
        phone: u?.phone ?? null,
        account_suspended: u?.is_suspended === true,
        listener_status: listenerStatus,
      },
      deleted_at: r.deleted_at,
      deleted_by: r.deleted_at
        ? (r.deleted_by ? (r.deleted_by === r.sender_id ? 'sender' : (userById.get(r.deleted_by)?.name ?? 'admin')) : 'admin')
        : null,
      reports: reportCount.get(r.id) ?? 0,
    }
  })

  return NextResponse.json({ messages, hasMore: rows.length === PAGE_SIZE })
}

// DELETE /api/admin/lounge?id=<uuid> — soft-delete any lounge message (removed for everyone).
export async function DELETE(req: NextRequest) {
  const { error, code, status, user } = await requireAdmin(req)
  if (error) return NextResponse.json({ error, code }, { status })
  if (!checkRateLimit(`admin:${user!.id}`, ADMIN_ACTION_LIMIT, ADMIN_ACTION_WINDOW_MS)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const id = new URL(req.url).searchParams.get('id') ?? ''
  if (!UUID_RE.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  const sb = createAdminClient()
  const { data: updated, error: delErr } = await sb.from('lounge_messages')
    .update({ deleted_at: new Date().toISOString(), deleted_by: dbUserIdOrNull(user!.id) })
    .eq('id', id)
    .is('deleted_at', null)
    .select('id')
    .maybeSingle()
  if (delErr) {
    logger.error('admin lounge: delete failed', { id, error: delErr.message })
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 })
  }
  if (!updated) return NextResponse.json({ error: 'Message not found or already deleted' }, { status: 404 })

  const adminId = user!.id === ADMIN_PASSWORD_USER_ID ? null : user!.id
  await sb.from('admin_audit_logs').insert({ admin_id: adminId, action: 'lounge_delete', target_id: id })
    .then(() => {}, () => {})
  return NextResponse.json({ ok: true })
}
