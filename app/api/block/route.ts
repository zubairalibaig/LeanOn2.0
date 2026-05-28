import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

const blockMap = new Map<string, { count: number; reset: number }>()
function checkRateLimit(uid: string): boolean {
  const now = Date.now()
  const entry = blockMap.get(uid)
  if (!entry || entry.reset < now) { blockMap.set(uid, { count: 1, reset: now + 3_600_000 }); return true }
  if (entry.count >= 10) return false
  entry.count++; return true
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// POST /api/block — block a user
export async function POST(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  if (!checkRateLimit(user.id)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  const body = await req.json().catch(() => ({}))
  const { blockedId } = body as { blockedId?: string }
  if (!blockedId || !UUID_RE.test(blockedId)) return NextResponse.json({ error: 'Invalid blockedId' }, { status: 400 })
  if (blockedId === user.id) return NextResponse.json({ error: 'Cannot block yourself' }, { status: 400 })

  const sb = createAdminClient()
  const { error } = await sb.from('user_blocks').upsert({ blocker_id: user.id, blocked_id: blockedId }, { onConflict: 'blocker_id,blocked_id', ignoreDuplicates: true })
  if (error) {
    logger.error('block insert failed', { error: error.message })
    return NextResponse.json({ error: 'Failed to block user' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

// DELETE /api/block — unblock a user
export async function DELETE(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const blockedId = searchParams.get('blockedId')
  if (!blockedId || !UUID_RE.test(blockedId)) return NextResponse.json({ error: 'Invalid blockedId' }, { status: 400 })

  const sb = createAdminClient()
  await sb.from('user_blocks').delete().eq('blocker_id', user.id).eq('blocked_id', blockedId)
  return NextResponse.json({ ok: true })
}
