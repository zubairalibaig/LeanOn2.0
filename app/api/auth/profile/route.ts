import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { logger } from '@/lib/logger'

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
      // TEMP DIAGNOSTIC: `debug` carries the real DB error during launch
      // testing. Remove once flows are confirmed live.
      return NextResponse.json({ error: saveErr, debug }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.error('profile route error:', { error: msg })
    // TEMP DIAGNOSTIC: surface the thrown error during launch testing.
    return NextResponse.json(
      { error: 'Could not save your profile. Please try again.', debug: msg },
      { status: 500 }
    )
  }
}
