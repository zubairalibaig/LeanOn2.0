import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient, createServerSupabaseClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'

const PAGE_SIZE = 50
const SEARCH_PAGE_SIZE = 50

// Escape ILIKE wildcards so user input is treated as a literal substring
function escapeLike(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_')
}

async function getAuthedListener() {
  const sb = createServerSupabaseClient()
  const { data: { user } } = await sb.auth.getUser()
  if (!user) return null

  const admin = createAdminClient()
  // Check both the listener profile AND the account-level user row
  const [{ data: lp }, { data: account }] = await Promise.all([
    admin.from('listener_profiles')
      .select('is_approved, is_suspended, is_active')
      .eq('user_id', user.id)
      .single(),
    admin.from('users')
      .select('is_active, is_suspended')
      .eq('id', user.id)
      .single(),
  ])

  if (!lp)             return null
  if (!lp.is_approved) return null
  if (lp.is_active === false) return null
  if (lp.is_suspended) return null
  if (account?.is_active === false) return null
  if (account?.is_suspended) return null

  return user
}

// GET /api/lounge/messages
//   ?before=<iso>          — paginate backwards (load more)
//   ?since=<iso>           — fetch rows after timestamp (realtime fallback + unread check)
//   ?countOnly=true        — with since=: just return { hasNew }
//   ?q=<string>&offset=<n> — search (min 2 chars)
export async function GET(req: NextRequest) {
  const user = await getAuthedListener()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { searchParams } = new URL(req.url)
  const before    = searchParams.get('before')
  const since     = searchParams.get('since')
  const countOnly = searchParams.get('countOnly') === 'true'
  const q         = searchParams.get('q')?.trim()
  const offset    = parseInt(searchParams.get('offset') ?? '0', 10) || 0

  const admin = createAdminClient()

  // ── Unread check ──────────────────────────────────────────────────────────
  if (since && countOnly) {
    const { count } = await admin
      .from('lounge_messages')
      .select('id', { count: 'exact', head: true })
      .gt('created_at', since)
      .is('deleted_at', null)
    return NextResponse.json({ hasNew: (count ?? 0) > 0 })
  }

  // ── Search ────────────────────────────────────────────────────────────────
  if (q !== undefined) {
    if (q.length < 2) return NextResponse.json({ messages: [], hasMore: false })

    // Rate-limit searches (10 per minute)
    if (!checkRateLimit(`lounge-search:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many searches.' }, { status: 429 })
    }

    const { data, error, count } = await admin
      .from('lounge_messages')
      .select('id, content, created_at, sender_id, users(name)', { count: 'exact' })
      .ilike('content', `%${escapeLike(q)}%`)
      .is('deleted_at', null)
      .order('created_at', { ascending: false })
      .range(offset, offset + SEARCH_PAGE_SIZE - 1)

    if (error) {
      console.error('[lounge search]', error)
      return NextResponse.json({ error: 'Search failed.' }, { status: 500 })
    }

    const total = count ?? 0
    return NextResponse.json({
      messages: (data ?? []).reverse(),
      hasMore: offset + SEARCH_PAGE_SIZE < total,
      total,
    })
  }

  // ── Normal paginated load ─────────────────────────────────────────────────
  let query = admin
    .from('lounge_messages')
    .select('id, content, created_at, sender_id, users(name)')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })
    .limit(PAGE_SIZE)

  if (before) query = query.lt('created_at', before)
  if (since && !countOnly) query = query.gt('created_at', since)

  const { data, error } = await query
  if (error) {
    console.error('[lounge load]', error)
    return NextResponse.json({ error: 'Failed to load messages.' }, { status: 500 })
  }

  return NextResponse.json({
    messages: (data ?? []).reverse(),
    hasMore: (data ?? []).length === PAGE_SIZE,
  })
}

// POST /api/lounge/messages — 20/minute per listener
export async function POST(req: NextRequest) {
  const user = await getAuthedListener()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  if (!checkRateLimit(`lounge:${user.id}`, 20, 60_000)) {
    return NextResponse.json({ error: 'Too many messages — slow down a little.' }, { status: 429 })
  }

  let body: unknown
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }) }

  const content = typeof (body as Record<string, unknown>).content === 'string'
    ? ((body as Record<string, unknown>).content as string).trim()
    : ''

  if (!content || content.length > 2000) {
    return NextResponse.json({ error: 'Message must be 1–2000 characters.' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data, error } = await admin
    .from('lounge_messages')
    .insert({ sender_id: user.id, content })
    .select('id, content, created_at, sender_id, users(name)')
    .single()

  if (error) {
    console.error('[lounge send]', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ message: data }, { status: 201 })
}
