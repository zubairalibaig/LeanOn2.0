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
    let { data } = await admin.from('users').select('name, role, wallet_balance, avatar_url, phone, created_at, account_country').eq('id', user.id).maybeSingle()
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
          .select('name, role, wallet_balance, avatar_url, phone, created_at, account_country')
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
      // ISO country code from phone-prefix selection at signup (e.g. 'IN', 'US', 'GB').
      // Used by listener profile page for NRI vs India price display.
      account_country: data?.account_country ?? null,
    })
  } catch (err) {
    logger.error('profile GET error', { error: err instanceof Error ? err.message : String(err) })
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

    const nameChange = typeof body?.name === 'string' ? body.name.trim() : null
    if (nameChange !== null && (nameChange.length < 2 || nameChange.length > 80)) {
      return NextResponse.json({ error: 'Name must be 2–80 characters.' }, { status: 400 })
    }

    // Validated avatar URL (used below — may route to pending for approved listeners)
    let validatedAvatarUrl: string | null = null
    if (typeof body?.avatar_url === 'string') {
      const url = body.avatar_url.trim()
      // Require: this project's Supabase Storage, avatars bucket, caller's own path.
      // Strips ?t=... cache-bust before comparing so the check is stable.
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
      const ownAvatarPrefix = `${supabaseUrl}/storage/v1/object/public/avatars/${user.id}.`
      if (!url.split('?')[0].startsWith(ownAvatarPrefix)) {
        return NextResponse.json({ error: 'Invalid avatar URL' }, { status: 400 })
      }
      validatedAvatarUrl = url
    }

    if (nameChange === null && !validatedAvatarUrl) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
    }

    const admin = createAdminClient()

    // Single listener_profiles lookup covers both the name-lock check and the
    // avatar routing decision — one DB round-trip instead of two.
    const { data: lp } = await admin
      .from('listener_profiles')
      .select('is_approved')
      .eq('user_id', user.id)
      .maybeSingle()

    if (nameChange !== null) {
      // Approved listeners cannot change their display name — it was verified at onboarding.
      if (lp?.is_approved === true) {
        return NextResponse.json({ error: 'Approved listeners cannot change their display name. Contact support if this needs updating.' }, { status: 403 })
      }
      updates.name = nameChange
    }

    if (validatedAvatarUrl) {
      // Approved listeners: selfie changes go to pending_avatar_url for admin
      // review before replacing the public photo. Seekers and unapproved
      // applicants update avatar_url directly (no review needed).

      if (lp?.is_approved === true) {
        // Write to pending — do not touch users.avatar_url until admin approves.
        const { error: pendingErr } = await admin
          .from('listener_profiles')
          .update({ pending_avatar_url: validatedAvatarUrl })
          .eq('user_id', user.id)
        if (pendingErr) {
          logger.error('profile PATCH: pending_avatar_url write failed', { error: pendingErr.message })
          return NextResponse.json({ error: 'Failed to update profile. Please try again.' }, { status: 500 })
        } else {
          // Notify admin (best-effort)
          await admin.from('notifications').insert({
            user_id: user.id,
            type: 'system',
            title: 'Selfie update pending review',
            body: 'Your new selfie is under review. Your current photo remains public until approved.',
            action_url: '/dashboard',
          }).then(() => {}, () => {})
        }
      } else {
        updates.avatar_url = validatedAvatarUrl
      }
    }

    if (Object.keys(updates).length > 0) {
      const { error: updateErr } = await admin.from('users').update(updates).eq('id', user.id)
      if (updateErr) {
        logger.error('profile PATCH error:', { error: updateErr.message })
        return NextResponse.json({ error: 'Failed to update profile. Please try again.' }, { status: 500 })
      }
    }

    const pendingQueued = validatedAvatarUrl && updates.avatar_url !== validatedAvatarUrl
    return NextResponse.json({ success: true, pending_review: pendingQueued ?? false })
  } catch (err) {
    logger.error('profile PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
