import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { logger } from '@/lib/logger'
import { isUnlimitedTestPhone } from '@/lib/test-users'

// GET — return the caller's name, role, and wallet_balance (admin-client read, bypasses RLS).
// Used by auth page (name check) and wallet page (initial balance load).
export async function GET() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ name: null, role: null, wallet_balance: null })
    const admin = createAdminClient()
    let { data } = await admin.from('users').select('name, role, wallet_balance, avatar_url, phone, created_at').eq('id', user.id).maybeSingle()
    const phone = data?.phone ?? (user.phone ? '+' + user.phone.replace(/^\+/, '') : null)

    // BACKSTOP: an OTP-verified user with no public.users row.
    //
    // The row was only ever created by POST, which fires after the user types
    // their name. Anyone who verified their OTP and then abandoned before that
    // was left authenticated but profile-less — we had already spent the SMS,
    // and they were invisible to every admin view and every query joining on
    // public.users. On 2026-08-16 that was 35 of 124 accounts (28%).
    //
    // This route is called immediately after verifyOtp, so it is the exact
    // moment identity becomes known. Creating the row here closes the gap.
    // Only runs when the row is genuinely missing, so it costs one write per
    // affected user, not one per request. Identity comes from the verified
    // session cookie, and the phone is OTP-proven — never client input.
    if (!data && phone) {
      const { error: ensureErr } = await ensureUserRow(admin, {
        id: user.id,
        phone,
        phoneVerified: true,
      })
      if (ensureErr) {
        logger.warn('profile GET: could not backfill missing users row', { userId: user.id })
      } else {
        const re = await admin.from('users')
          .select('name, role, wallet_balance, avatar_url, phone, created_at')
          .eq('id', user.id).maybeSingle()
        data = re.data
      }
    }

    return NextResponse.json({
      name: data?.name ?? null,
      role: data?.role ?? null,
      wallet_balance: data?.wallet_balance ?? null,
      avatar_url: data?.avatar_url ?? null,
      phone,
      created_at: data?.created_at ?? null,
      is_unlimited_tester: isUnlimitedTestPhone(phone),
    })
  } catch {
    return NextResponse.json({ name: null, role: null, wallet_balance: null })
  }
}

// POST — create/update the caller's public.users row.
//
// WHY THIS IS SERVER-SIDE: the public.users INSERT is the single most
// critical write in the signup flow, and the browser (anon + session,
// RLS-restricted) path threads through an INSERT policy + table grants +
// auth.uid() resolution + a SECURITY DEFINER guard trigger. Any one of
// those being subtly off — across migrations 031 / 20250512 / 999 that
// re-assert overlapping policies — breaks EVERY signup with an opaque
// "row violates row-level security" error. Doing it with the service-role
// admin client bypasses RLS/grants/triggers, so profile creation always
// succeeds regardless of DB policy state.
export async function POST(req: NextRequest) {
  try {
    // Identity comes from the verified session cookie — NEVER from the body.
    // This is what makes the admin-client write safe: we only ever write the
    // row whose id matches the authenticated caller.
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`profile:${user.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const rawName = typeof body?.name === 'string' ? body.name.trim() : ''
    if (rawName.length < 2 || rawName.length > 80) {
      return NextResponse.json({ error: 'Please enter your name (2–80 characters).' }, { status: 400 })
    }

    // Normalise phone to the +<countrycode><number> form used elsewhere.
    const phone = user.phone ? '+' + user.phone.replace(/^\+/, '') : null

    // Explicit guard: without the service-role key the admin client can't be
    // built and every signup fails with an opaque error. Surface it clearly.
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      logger.error('profile route: SUPABASE_SERVICE_ROLE_KEY not set')
      return NextResponse.json(
        { error: 'Server misconfigured: SUPABASE_SERVICE_ROLE_KEY is not set in the deployment environment.' },
        { status: 500 }
      )
    }

    const admin = createAdminClient()
    // Only ever set non-privileged columns. is_admin / role / wallet_balance
    // are intentionally omitted so they keep their safe defaults (insert) or
    // existing values (update). ensureUserRow also reconciles the
    // users_phone_key constraint: a stale row holding this (OTP-verified)
    // phone gets its phone released, since auth guarantees one auth user
    // per phone and the caller just proved ownership.
    const { error: saveErr, debug } = await ensureUserRow(admin, {
      id: user.id,
      name: rawName,
      phone,
      phoneVerified: !!user.phone,
    })

    if (saveErr) {
      if (debug) logger.error('profile route: ensureUserRow debug', { debug })
      return NextResponse.json({ error: saveErr }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.error('profile route error:', { error: msg })
    return NextResponse.json(
      { error: 'Could not save your profile. Please try again.' },
      { status: 500 }
    )
  }
}

// PATCH — update name and/or avatar_url for the logged-in user (server-side to bypass RLS)
export async function PATCH(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`profile:${user.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const updates: Record<string, string> = {}

    if (typeof body?.name === 'string') {
      const name = body.name.trim()
      if (name.length < 2 || name.length > 80) {
        return NextResponse.json({ error: 'Name must be 2–80 characters.' }, { status: 400 })
      }
      updates.name = name
    }

    if (typeof body?.avatar_url === 'string') {
      const url = body.avatar_url.trim()
      // Only allow Supabase Storage URLs (same project) — prevents arbitrary URL injection
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
      if (!url.startsWith(supabaseUrl + '/storage/')) {
        return NextResponse.json({ error: 'Invalid avatar URL' }, { status: 400 })
      }
      updates.avatar_url = url
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
    }

    const admin = createAdminClient()
    const { error: updateErr } = await admin.from('users').update(updates).eq('id', user.id)
    if (updateErr) {
      logger.error('profile PATCH error:', { error: updateErr.message })
      return NextResponse.json({ error: 'Failed to update profile. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('profile PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
