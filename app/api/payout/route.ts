import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { notifyPayoutRequested } from '@/lib/notify'
import { logger } from '@/lib/logger'

// POST — request a payout (listener-only action)
// Replaces the client-side direct Supabase insert so we can send a notification.
export async function POST(req: NextRequest) {
  const userSb = createServerSupabaseClient()
  const { data: { user } } = await userSb.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  // 3 payout requests per hour — prevents double-submission spam
  if (!checkRateLimit(`payout:${user.id}`, 3, 60 * 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const sb = createAdminClient()

  // Check for existing pending payout
  const { data: existing } = await sb
    .from('payout_requests')
    .select('id')
    .eq('user_id', user.id)
    .eq('status', 'pending')
    .limit(1)

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: 'already_pending', message: 'You already have a pending payout request.' }, { status: 409 })
  }

  // Fetch listener balance and name
  const { data: profile } = await sb
    .from('listener_profiles')
    .select('wallet_balance')
    .eq('user_id', user.id)
    .single()

  // wallet_balance lives on users table
  const { data: userData } = await sb
    .from('users')
    .select('name, wallet_balance')
    .eq('id', user.id)
    .single()

  const amount = userData?.wallet_balance ?? 0
  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'No balance to withdraw' }, { status: 400 })
  }

  // Insert payout request
  const { error: insertErr } = await sb
    .from('payout_requests')
    .insert({ user_id: user.id, amount, status: 'pending' })

  if (insertErr) {
    logger.error('Payout insert failed:', { error: insertErr instanceof Error ? insertErr.message : String(insertErr) })
    return NextResponse.json({ error: 'Failed to submit payout request' }, { status: 500 })
  }

  // Fire-and-forget notification
  ;(async () => {
    try {
      const { data: authUser } = await sb.auth.admin.getUserById(user.id)
      await notifyPayoutRequested({
        listenerEmail: authUser?.user?.email ?? null,
        listenerName:  userData?.name ?? 'Listener',
        amount,
      })
    } catch (err) {
      console.error('notifyPayoutRequested failed (non-critical):', err)
    }
  })()

  return NextResponse.json({ ok: true, amount })
}
