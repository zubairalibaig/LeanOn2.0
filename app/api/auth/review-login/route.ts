import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimitStrict } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { suspensionStatus } from '@/lib/suspension'
import { logger } from '@/lib/logger'
import { reviewLoginPhone, isReviewPhone, reviewCodeMatches } from '@/lib/review-login'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// POST /api/auth/review-login — Google Play reviewer sign-in (lib/review-login.ts).
//   { phone }        → { review: true } if this is the configured demo number
//                      (the sign-in page then asks for the code without sending an SMS)
//   { phone, code }  → signs the demo account in, the same way /api/auth/phone-widget
//                      does after MSG91 verifies a real OTP (real Supabase session,
//                      stable derived password, users row backfilled).
// Only ever signs in REVIEW_LOGIN_PHONE. Off (404) unless both env vars are set.
export async function POST(req: NextRequest) {
  const target = reviewLoginPhone()
  if (!target) return NextResponse.json({ review: false }, { status: 404 })

  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown'
  if (!await checkRateLimitStrict(`review-login:${ip}`, 15, 15 * 60_000)) {
    return NextResponse.json({ error: 'Too many attempts. Please wait a few minutes.' }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const phone = typeof body?.phone === 'string' ? body.phone : ''
  const code = typeof body?.code === 'string' ? body.code : ''
  const matches = isReviewPhone(phone)

  if (!code) return NextResponse.json({ review: matches })
  if (body?.ageConfirmed !== true) {
    return NextResponse.json({ error: 'Please confirm you are 18 or older to continue.', code: 'age_not_confirmed' }, { status: 400 })
  }
  if (!matches || !reviewCodeMatches(code)) {
    logger.warn('review-login: wrong phone or code', { ip })
    return NextResponse.json({ error: 'Incorrect code. Please check and try again.' }, { status: 401 })
  }

  const admin = createAdminClient()

  // Find the demo account (public row first, then auth), or create it.
  let userId: string | null = null
  const { data: pub } = await admin.from('users').select('id').eq('phone', target).maybeSingle()
  if (pub?.id) userId = pub.id as string
  if (!userId) {
    const { data: created, error } = await admin.auth.admin.createUser({ phone: target, phone_confirm: true })
    if (created?.user) userId = created.user.id
    else if (error && /already registered|already exists/i.test(error.message)) {
      const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 })
      const bare = target.replace(/^\+/, '')
      userId = (list?.users ?? []).find(u => (u.phone ?? '').replace(/^\+/, '') === bare)?.id ?? null
    }
    if (!userId) {
      logger.error('review-login: could not find or create the demo account', { error: error?.message })
      return NextResponse.json({ error: 'Could not sign you in. Please try again.' }, { status: 500 })
    }
  }

  // Suspending the demo account in admin switches this login off too.
  const status = await suspensionStatus(admin, userId)
  if (status !== 'ok') {
    return NextResponse.json({ error: status === 'suspended' ? 'This account is not available.' : 'Could not verify account status. Please try again.' }, { status: status === 'suspended' ? 403 : 503 })
  }

  // Same derived password as /api/auth/phone-widget, so both routes agree.
  const secret = process.env.SESSION_PASSWORD_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!secret) return NextResponse.json({ error: 'Sign-in is misconfigured.' }, { status: 500 })
  const password = crypto.createHmac('sha256', secret).update(userId).digest('base64url')

  const sb = createServerSupabaseClient()
  let { error: signInErr } = await sb.auth.signInWithPassword({ phone: target, password })
  if (signInErr && signInErr.status === 400 && /invalid.*login|invalid.*credentials|invalid.*password/i.test(signInErr.message ?? '')) {
    const { error: pwErr } = await admin.auth.admin.updateUserById(userId, { password, phone: target, phone_confirm: true })
    if (pwErr) {
      logger.error('review-login: could not set password', { error: pwErr.message })
      return NextResponse.json({ error: 'Could not sign you in. Please try again.' }, { status: 500 })
    }
    ;({ error: signInErr } = await sb.auth.signInWithPassword({ phone: target, password }))
  }
  if (signInErr) {
    logger.error('review-login: sign-in failed', { error: signInErr.message })
    return NextResponse.json({ error: 'Could not sign you in. Please try again.' }, { status: 500 })
  }

  const accountCountry = typeof body?.country === 'string' && /^[A-Z]{2}$/.test(body.country) ? body.country : null
  await ensureUserRow(admin, { id: userId, phone: target, phoneVerified: true, accountCountry })
  logger.info('review-login: demo account signed in', { userId })
  return NextResponse.json({ success: true })
}
