import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, createServerSupabaseClient } from '@/lib/supabase-server'

const PAGE_SIZE = 50

async function getAuthedListener() {
  const sb = createServerSupabaseClient()
  const { data: { user } } = await sb.auth.getUser()
  if (!user) return null

  const admin = createAdminClient()
  const { data: lp } = await admin
    .from('listener_profiles')
    .select('is_approved, is_suspended')
    .eq('user_id', user.id)
    .single()

  if (!lp || !lp.is_approved || lp.is_suspended) return null
  return user
}

// GET /api/lounge/messages?before=<iso-timestamp>&q=<search>&since=<iso>&countOnly=true
export async function GET(req: NextRequest) {
  const user = await getAuthedListener()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { searchParams } = new URL(req.url)
  const before = searchParams.get('before')
  const q = searchParams.get('q')?.trim()
  const since = searchParams.get('since')
  const countOnly = searchParams.get('countOnly') === 'true'

  const admin = createAdminClient()

  // Lightweight unread check — just returns { hasNew: boolean }
  if (since && countOnly) {
    const { count } = await admin
      .from('lounge_messages')
      .select('id', { count: 'exact', head: true })
      .gt('created_at', since)
    return NextResponse.json({ hasNew: (count ?? 0) > 0 })
  }

  if (q) {
    // Full-text search — ilike across all history
    const { data, error } = await admin
      .from('lounge_messages')
      .select('id, content, created_at, sender_id, users!inner(name)')
      .ilike('content', `%${q}%`)
      .order('created_at', { ascending: false })
      .limit(100)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ messages: data ?? [], hasMore: false })
  }

  // Paginated load: most-recent PAGE_SIZE rows before cursor
  let query = admin
    .from('lounge_messages')
    .select('id, content, created_at, sender_id, users!inner(name)')
    .order('created_at', { ascending: false })
    .limit(PAGE_SIZE)

  if (before) query = query.lt('created_at', before)

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const messages = (data ?? []).reverse() // oldest-first for rendering
  const hasMore = (data ?? []).length === PAGE_SIZE

  return NextResponse.json({ messages, hasMore })
}

// POST /api/lounge/messages
export async function POST(req: NextRequest) {
  const user = await getAuthedListener()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const content = typeof body.content === 'string' ? body.content.trim() : ''
  if (!content || content.length > 2000) {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data, error } = await admin
    .from('lounge_messages')
    .insert({ sender_id: user.id, content })
    .select('id, content, created_at, sender_id, users!inner(name)')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ message: data }, { status: 201 })
}
