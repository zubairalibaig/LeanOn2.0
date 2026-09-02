import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { logger } from '@/lib/logger'

// Phone sign-in via the MSG91 OTP Widget.
//
// WHY THIS EXISTS: India's DLT regime blocks the clean "Supabase generates the
// OTP, a carrier just delivers it" path (that needs a DLT-registered template,
// which needs an active GST LeanOn no longer has — see CLAUDE.md). MSG91's only
// no-DLT product is the OTP *Widget*, where MSG91 generates AND verifies the
// OTP itself and hands the browser a short-lived JWT. Supabase never sees that
// OTP, so it cannot mint the session the way it does for its own OTPs.
//
// THE TRUST MODEL (read before touching this):
//   1. The browser proves phone ownership to MSG91 via the widget and receives
//      an access token (JWT).
//   2. This route sends that token to MSG91's verifyAccessToken endpoint with
//      our SERVER auth key. MSG91 confirms the token and returns the phone it
//      was issued for. THE VERIFIED PHONE COMES FROM MSG91'S RESPONSE, NEVER
//      from the request body — trusting a client-supplied number would let
//      anyone log in as anyone.
//   3. We then mint a genuine Supabase session for that phone: find-or-create
//      the auth user, set a fresh random password on it (server-side, never
//      stored, never shown), and sign in with phone+password. That yields real
//      Supabase access/refresh tokens with proper rotation — NOT a hand-signed
//      JWT. This is the least-fragile way to bridge an external verification
//      into a Supabase session; it is still custom auth plumbing, so it lives
//      entirely server-side and is the only place allowed to do it.
//
// OPERATIONAL NOTES:
//   * The auth key used here is called from Vercel's rotating egress IPs, so it
//     must have IP Security OFF in the MSG91 dashboard, or every verify fails.
//   * MSG91's verifyAccessToken success shape is not documented crisply and
//     could vary by account. On success we log the raw JSON (it contains only a
//     phone number, nothing secret) exactly once per call so the exact field
//     can be confirmed on the first live test, and extract the phone
//     defensively across the plausible fields.

export const runtime = 'nodejs' // node:crypto for the random password
export const dynamic = 'force-dynamic'

const MSG91_VERIFY_URL =
  process.env.MSG91_VERIFY_URL || 'https://control.msg91.com/api/v5/widget/verifyAccessToken'
const MSG91_TIMEOUT_MS = 10_000

/** Supabase auth stores phone WITHOUT a leading '+'; app/public.users use E.164 (+91...). */
function toE164(raw: string): string | null {
  const d = String(raw).replace(/\D/g, '')
  if (!d) return null
  if (d.length === 10) return `+91${d}`                       // bare Indian 10-digit
  if (d.length === 11 && d.startsWith('0')) return `+91${d.slice(1)}`
  if (d.length === 12 && d.startsWith('91')) return `+${d}`   // 91XXXXXXXXXX
  if (d.length >= 11 && d.length <= 15) return `+${d}`        // already country-coded
  return null
}

/**
 * Pull the verified phone out of MSG91's verifyAccessToken response. The field
 * is not crisply documented, so probe the plausible locations rather than
 * hard-coding one. Anything that normalises to a valid phone wins.
 */
function extractVerifiedPhone(body: unknown): string | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  const data = (b.data && typeof b.data === 'object' ? b.data as Record<string, unknown> : {})
  const candidates = [
    b.message, b.mobile, b.identifier, b.phone,
    data.identifier, data.mobile, data.phone, data.message,
  ]
  for (const c of candidates) {
    if (typeof c === 'string' || typeof c === 'number') {
      const e164 = toE164(String(c))
      if (e164) return e164
    }
  }
  return null
}

async function findAuthUserIdByPhone(
  admin: ReturnType<typeof createAdminClient>,
  e164: string
): Promise<string | null> {
  const bare = e164.replace(/^\+/, '')   // e.g. "918055411383"

  // Legacy bare Indian number: users created before the widget stored just
  // the 10-digit number (no country code) in both auth.users and public.users.
  const tenDigit = (bare.startsWith('91') && bare.length === 12) ? bare.slice(2) : null

  // Fast path: public.users carries the phone and is indexed. Try the E.164
  // form first, then the bare 10-digit form for legacy rows.
  const { data: pubRow } = await admin
    .from('users').select('id').eq('phone', e164).maybeSingle()
  if (pubRow?.id) return pubRow.id as string

  if (tenDigit) {
    const { data: pubRow10 } = await admin
      .from('users').select('id').eq('phone', tenDigit).maybeSingle()
    if (pubRow10?.id) return pubRow10.id as string
  }

  // Fallback: scan auth.users. GoTrue's admin SDK has no getUserByPhone, so we
  // page through listUsers. Fine at LeanOn's scale (~500 users = one page);
  // guarded so it can never loop unbounded.
  // Compare both the full E.164 bare form AND the legacy 10-digit bare form so
  // returning users whose phone was stored without the country code are found.
  const perPage = 1000
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage })
    if (error) { logger.error('phone-widget: listUsers failed', { error: error.message }); return null }
    const users = data?.users ?? []
    const hit = users.find(u => {
      const stored = (u.phone ?? '').replace(/^\+/, '')
      return stored === bare || (tenDigit !== null && stored === tenDigit)
    })
    if (hit) return hit.id
    if (users.length < perPage) return null
    if (page === 20) logger.warn('phone-widget: listUsers hit the 20-page guard', { bare: bare.slice(-4) })
  }
  return null
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  // MSG91 already rate-limits OTP sends; this guards the mint endpoint itself.
  if (!checkRateLimit(`phone-widget:${ip}`, 20, 15 * 60_000)) {
    return NextResponse.json({ error: 'Too many attempts. Please wait a few minutes.' }, { status: 429 })
  }

  const authkey = process.env.MSG91_WIDGET_AUTHKEY
  if (!authkey) {
    logger.error('phone-widget: MSG91_WIDGET_AUTHKEY not set')
    return NextResponse.json({ error: 'Phone sign-in is misconfigured.' }, { status: 500 })
  }

  const body = await req.json().catch(() => ({}))
  const token = typeof body?.token === 'string' ? body.token : ''
  if (!token) return NextResponse.json({ error: 'Missing verification token.' }, { status: 400 })

  // ── 1. Verify the widget token with MSG91 (authoritative) ──────────────────
  let verifyJson: unknown
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), MSG91_TIMEOUT_MS)
    const res = await fetch(MSG91_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authkey },
      body: JSON.stringify({ authkey, 'access-token': token }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timer))
    verifyJson = await res.json().catch(() => ({}))
    const type = (verifyJson as { type?: string })?.type
    if (!res.ok || type !== 'success') {
      logger.warn('phone-widget: MSG91 rejected the token', {
        status: res.status, body: JSON.stringify(verifyJson).slice(0, 300),
      })
      return NextResponse.json({ error: 'Could not verify that code. Please try again.' }, { status: 401 })
    }
  } catch (err) {
    const aborted = err instanceof Error && err.name === 'AbortError'
    logger.error('phone-widget: verifyAccessToken failed', { error: aborted ? 'timeout' : String(err) })
    return NextResponse.json({ error: 'Could not reach the verification service.' }, { status: 502 })
  }

  // ── 2. Phone comes from MSG91's response — NEVER from the request body ──────
  const e164 = extractVerifiedPhone(verifyJson)
  if (!e164) {
    // First-run aid: the success shape is now known from this line. Nothing
    // secret here — it is a phone number — so it is safe to log in full.
    logger.error('phone-widget: could not read verified phone from MSG91 response', {
      body: JSON.stringify(verifyJson).slice(0, 500),
    })
    return NextResponse.json({ error: 'Verification succeeded but no phone was returned. Please try again.' }, { status: 502 })
  }

  const admin = createAdminClient()

  // ── 3. Find or create the auth user for this phone ─────────────────────────
  let userId = await findAuthUserIdByPhone(admin, e164)
  let isNewUser = false
  if (!userId) {
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      phone: e164,
      phone_confirm: true, // we just proved ownership via MSG91
    })
    if (createErr || !created?.user) {
      // "User already registered" means our phone lookup missed the existing user
      // (e.g. stored in a different format). Do a broader search by listing all
      // users to find the match, rather than hard-failing with a confusing error.
      const alreadyExists = createErr && /already registered|already exists/i.test(createErr.message)
      if (alreadyExists) {
        logger.warn('phone-widget: createUser said already exists — scanning for existing user', { e164: e164.slice(-4) })
        const { data: listData } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 })
        const digits = e164.replace(/\D/g, '')
        const match = (listData?.users ?? []).find(u => {
          const stored = (u.phone ?? '').replace(/\D/g, '')
          return stored === digits || (digits.length === 12 && stored === digits.slice(2))
        })
        if (match) {
          userId = match.id
        } else {
          logger.error('phone-widget: createUser failed and no match found', { error: createErr?.message })
          return NextResponse.json({ error: 'Could not create your account. Please try again.' }, { status: 500 })
        }
      } else {
        logger.error('phone-widget: createUser failed', { error: createErr?.message })
        return NextResponse.json({ error: 'Could not create your account. Please try again.' }, { status: 500 })
      }
    } else {
      userId = created.user.id
      isNewUser = true
    }
  }

  // ── 4. Mint a real Supabase session: set a throwaway password, sign in ─────
  // The password is random, used once, and never stored or returned. Each
  // sign-in mints a new one, so it is never a standing credential.
  //
  // We ALSO update the phone to the normalised E.164 form here. Legacy users
  // (created via the old Supabase OTP flow before the widget) may have their
  // phone stored as a bare 10-digit number (e.g. "8055411383") instead of
  // "+918055411383". Updating it here heals the mismatch on first widget sign-in,
  // so the signInWithPassword lookup always finds them correctly.
  const password = crypto.randomBytes(32).toString('base64url')
  const { error: pwErr } = await admin.auth.admin.updateUserById(userId, {
    password,
    phone: e164,
    phone_confirm: true,
  })
  if (pwErr) {
    logger.error('phone-widget: could not set session password', { error: pwErr.message })
    return NextResponse.json({ error: 'Could not sign you in. Please try again.' }, { status: 500 })
  }

  // Sign in on the cookie-writing server client so the session lands in the
  // response cookies (SSR + middleware read it from there). createServerSupabaseClient()
  // can write cookies inside a route handler; its try/catch only no-ops in RSC.
  const sb = createServerSupabaseClient()
  let { error: signInErr } = await sb.auth.signInWithPassword({ phone: e164, password })
  if (signInErr) {
    // Most likely cause: phone+password auth is disabled on the Supabase project.
    // Second try: Supabase may have stored the phone without the leading '+'.
    logger.warn('phone-widget: signInWithPassword (E.164) failed, retrying with bare number', { error: signInErr.message })
    const bare = e164.replace(/^\+/, '')
    const retry = await sb.auth.signInWithPassword({ phone: bare, password })
    signInErr = retry.error
    if (signInErr) {
      logger.error('phone-widget: signInWithPassword failed (both formats)', { error: signInErr.message })
      return NextResponse.json({ error: 'Could not sign you in. Please try again.' }, { status: 500 })
    }
  }

  // ── 5. Backfill public.users (wallet/sessions/browse all read the public row)
  const { error: rowErr } = await ensureUserRow(admin, { id: userId, phone: e164, phoneVerified: true })
  if (rowErr) {
    // The session is already valid — do not fail the login over the mirror row.
    logger.error('phone-widget: session minted but users row did not', { userId })
  }

  logger.info('phone-widget: signed in via MSG91 widget', { userId, isNewUser })
  return NextResponse.json({ success: true, isNewUser })
}
