import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { UUID_RE } from '@/lib/constants'

const MAX_MESSAGES = 2
const MIN_LEN      = 10
const MAX_LEN      = 300

// POST — seeker sends an offline message to a listener
// Auth required. Max 2 messages per seeker-listener pair.
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const listenerId = params.id
  if (!UUID_RE.test(listenerId)) {
    return NextResponse.json({ error: 'Invalid listener' }, { status: 400 })
  }

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  if (user.id === listenerId) return NextResponse.json({ error: 'Cannot message yourself' }, { status: 400 })

  if (!checkRateLimit(`msg:${user.id}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const text = typeof body?.text === 'string' ? body.text.trim() : ''
  if (text.length < MIN_LEN) {
    return NextResponse.json({ error: `Message must be at least ${MIN_LEN} characters.` }, { status: 400 })
  }
  if (text.length > MAX_LEN) {
    return NextResponse.json({ error: `Message must be under ${MAX_LEN} characters.` }, { status: 400 })
  }

  const admin = createAdminClient()

  // Verify listener exists and is active
  const { data: lp } = await admin
    .from('listener_profiles')
    .select('user_id, is_active, is_approved')
    .eq('user_id', listenerId)
    .maybeSingle()

  if (!lp || !lp.is_active || !lp.is_approved) {
    return NextResponse.json({ error: 'Listener not found' }, { status: 404 })
  }

  try {
    const { data: existing } = await admin
      .from('listener_messages')
      .select('id, messages')
      .eq('seeker_id', user.id)
      .eq('listener_id', listenerId)
      .maybeSingle()

    if (existing) {
      const currentCount = (existing.messages as string[]).length
      if (currentCount >= MAX_MESSAGES) {
        return NextResponse.json({
          error: 'max_messages',
          message: `You can send up to ${MAX_MESSAGES} messages to the same listener.`,
        }, { status: 400 })
      }
      const { error: updateErr } = await admin
        .from('listener_messages')
        .update({
          messages:   [...(existing.messages as string[]), text],
          updated_at: new Date().toISOString(),
          is_read:    false,
        })
        .eq('id', existing.id)
      if (updateErr) throw updateErr
      return NextResponse.json({ success: true, count: currentCount + 1 })
    }

    const { error: insertErr } = await admin
      .from('listener_messages')
      .insert({ seeker_id: user.id, listener_id: listenerId, messages: [text] })
    if (insertErr) throw insertErr
    return NextResponse.json({ success: true, count: 1 })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    if (msg.includes('listener_messages')) {
      return NextResponse.json({
        error: 'feature_unavailable',
        message: 'Offline messaging is not yet enabled. Please try again later.',
      }, { status: 503 })
    }
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}

// GET — returns how many messages the seeker has already sent to this listener
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const listenerId = params.id
  if (!UUID_RE.test(listenerId)) return NextResponse.json({ count: 0 })

  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ count: 0 })

  try {
    const admin = createAdminClient()
    const { data } = await admin
      .from('listener_messages')
      .select('messages')
      .eq('seeker_id', user.id)
      .eq('listener_id', listenerId)
      .maybeSingle()
    return NextResponse.json({ count: (data?.messages as string[] | null)?.length ?? 0 })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
