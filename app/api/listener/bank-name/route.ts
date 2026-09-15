import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

// POST /api/listener/bank-name
// Allows an approved listener to submit their account holder name if it was
// missing at onboarding (pre-migration 055). Only updates account_holder_name
// — bank account number / IFSC / UPI are NOT editable by the listener.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`bank-name:${user.id}`, 5, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const holderName = typeof body?.account_holder_name === 'string' ? body.account_holder_name.trim() : ''
    if (!holderName || holderName.length < 2 || holderName.length > 120) {
      return NextResponse.json({ error: 'Enter a valid account holder name (2–120 characters).' }, { status: 400 })
    }

    const admin = createAdminClient()

    // Verify this user is an approved listener before allowing the update
    const { data: lp } = await admin
      .from('listener_profiles')
      .select('is_approved')
      .eq('user_id', user.id)
      .maybeSingle()

    if (!lp?.is_approved) {
      return NextResponse.json({ error: 'Only approved listeners can update bank details.' }, { status: 403 })
    }

    const { error: upErr } = await admin
      .from('listener_applications')
      .update({ account_holder_name: holderName })
      .eq('user_id', user.id)

    if (upErr) {
      logger.error('bank-name POST: update failed', { userId: user.id, error: upErr.message })
      return NextResponse.json({ error: 'Could not save. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    logger.error('bank-name POST: unexpected error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
