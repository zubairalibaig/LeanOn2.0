import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, LANGUAGES, MIN_LISTENER_AGE, MAX_LISTENER_AGE, ageFromBirth } from '@/lib/constants'
import { logger } from '@/lib/logger'
import { parseOnboarding } from '@/lib/listener-onboarding'
import { hasSelfie } from '@/lib/selfie-storage'

// POST — submit a listener application (users row + profile + application).
//
// Server-side with the service-role client for the same reason as
// /api/auth/profile: browser RLS writes into users/listener_profiles/
// listener_applications are fragile across the overlapping policies and
// guard triggers, and the users_phone_key constraint needs reconciliation
// that only the service role can perform. Identity always comes from the
// verified session cookie — never the body.
export async function POST(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`listener-apply:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const body = await req.json().catch(() => ({}))
    const name      = typeof body?.name       === 'string' ? body.name.trim() : ''
    const bio       = typeof body?.bio        === 'string' ? body.bio.trim()  : ''
    const accountHolderName = typeof body?.account_holder_name === 'string' ? body.account_holder_name.trim() : ''
    const bank      = typeof body?.bank       === 'string' ? body.bank.trim() : ''
    const ifsc      = typeof body?.ifsc       === 'string' ? body.ifsc.trim().toUpperCase() : ''
    const upi       = typeof body?.upi        === 'string' ? body.upi.trim()  : ''
    // Validate avatar_url — must be this project's Supabase Storage, in the
    // avatars bucket, and the path must start with the caller's own user ID.
    // Strips query params before comparing so cache-bust ?t=... is handled.
    // This prevents a listener from submitting a URL that points to another
    // user's avatar or any file in the verifications bucket.
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
    const ownAvatarPrefix = `${supabaseUrl}/storage/v1/object/public/avatars/${user.id}.`
    const rawAvatarUrl = typeof body?.avatar_url === 'string' ? body.avatar_url.trim() : ''
    const avatarUrl = rawAvatarUrl && rawAvatarUrl.split('?')[0].startsWith(ownAvatarPrefix)
      ? rawAvatarUrl
      : null
    const formPhone = typeof body?.phone === 'string' ? body.phone.trim() : ''
    // Aadhaar: digits only. Optional at the API (legacy callers / tests omit it),
    // but the become-listener form requires it. Validate strictly when present.
    const aadhaar = typeof body?.aadhaar === 'string' ? body.aadhaar.replace(/\D/g, '') : ''
    const rate = Number(body?.rate)
    // Age: month + year only (never the day) for the browse age-range filter.
    // Optional at the API (legacy callers / tests may omit) but the
    // become-listener form requires both. Validated strictly when present.
    const posIntOrNull = (v: unknown): number | null => {
      const n = typeof v === 'number' ? v : (typeof v === 'string' && v.trim() !== '' ? Number(v) : NaN)
      return Number.isInteger(n) && n > 0 ? n : null
    }
    const birthYear  = posIntOrNull(body?.birthYear)
    const birthMonth = posIntOrNull(body?.birthMonth)

    const tags  = Array.isArray(body?.tags)  ? body.tags.filter((t: unknown) => typeof t === 'string').slice(0, 10)  : []
    const langIds = new Set(LANGUAGES.map(l => l.id as string))
    const langs = Array.isArray(body?.langs)
      ? body.langs.filter((l: unknown) => typeof l === 'string' && langIds.has(l))
      : []

    if (name.length < 2 || name.length > 80)
      return NextResponse.json({ error: 'Please enter your name (2–80 characters).' }, { status: 400 })
    if (bio.length < 30 || bio.length > 400)
      return NextResponse.json({ error: 'Please write a bio (30–400 characters).' }, { status: 400 })
    if (!Number.isFinite(rate) || rate < MIN_LISTENER_RATE || rate > MAX_LISTENER_RATE)
      return NextResponse.json({ error: `Rate must be between ₹${MIN_LISTENER_RATE} and ₹${MAX_LISTENER_RATE} per minute.` }, { status: 400 })
    if (tags.length === 0)
      return NextResponse.json({ error: 'Please select at least one topic.' }, { status: 400 })
    // Public display photo (reviewed by the admin before it goes live) —
    // must be a caller-owned file in the avatars bucket.
    if (!avatarUrl)
      return NextResponse.json({ error: 'A clear display photo of your face is required.' }, { status: 400 })
    const onboarding = parseOnboarding(body ?? {})
    if ('error' in onboarding) return NextResponse.json({ error: onboarding.error }, { status: 400 })
    if (!/^\d{9,18}$/.test(bank))
      return NextResponse.json({ error: 'Please enter a valid bank account number.' }, { status: 400 })
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc))
      return NextResponse.json({ error: 'Please enter a valid IFSC code.' }, { status: 400 })
    if (upi && !/^[\w.\-]{2,}@[\w]{2,}$/.test(upi))
      return NextResponse.json({ error: 'Please enter a valid UPI ID.' }, { status: 400 })
    if (aadhaar && !/^\d{12}$/.test(aadhaar))
      return NextResponse.json({ error: 'Please enter a valid 12-digit Aadhaar number.' }, { status: 400 })
    // Age validation — only when supplied. Both fields must come together, month
    // must be 1–12, and the resulting age must be within the platform's bounds.
    if (birthYear !== null || birthMonth !== null) {
      if (birthYear === null || birthMonth === null)
        return NextResponse.json({ error: 'Please select both your birth month and year.' }, { status: 400 })
      if (birthMonth < 1 || birthMonth > 12)
        return NextResponse.json({ error: 'Please select a valid birth month.' }, { status: 400 })
      const age = ageFromBirth(birthYear, birthMonth)
      if (age === null || age < MIN_LISTENER_AGE || age > MAX_LISTENER_AGE)
        return NextResponse.json({ error: `Listeners must be between ${MIN_LISTENER_AGE} and ${MAX_LISTENER_AGE} years old.` }, { status: 400 })
    }

    // Session phone is OTP-verified; the typed form phone is contact info only.
    const sessionPhone = user.phone ? '+' + user.phone.replace(/^\+/, '') : null

    const admin = createAdminClient()

    // Private verification selfie (camera-only) — stored via /api/listener/selfie,
    // never public. The admin compares it with the display photo.
    if (!(await hasSelfie(admin, user.id)))
      return NextResponse.json({ error: 'Please take your verification selfie before submitting.' }, { status: 400 })

    // 1. users row first — listener_profiles/applications FK to users(id)
    const { error: userErr, debug: userDebug } = await ensureUserRow(admin, {
      id: user.id,
      name,
      phone: sessionPhone,
      phoneVerified: !!user.phone,
    })
    if (userErr) {
      if (userDebug) logger.error('listener apply: ensureUserRow debug', { userId: user.id, debug: userDebug })
      return NextResponse.json({ error: userErr }, { status: 500 })
    }

    // 2. listener profile — is_approved intentionally omitted: DB default
    //    false on insert; existing approval preserved on resubmission.
    const profileRow: Record<string, unknown> = {
      user_id:          user.id,
      bio,
      specialty_tags:   tags,
      languages_spoken: langs.length > 0 ? langs : ['english'],
      rate_per_min:     Math.round(rate),
      is_available:     false,
    }
    // Public onboarding fields (migration 060). Gallery photos are no longer
    // collected — profile_photos is left untouched and hidden from public view.
    const NEW_PROFILE_COLS = ['education_level', 'education_field', 'tagline_phrases', 'lived_experience'] as const
    Object.assign(profileRow, onboarding.public)
    // birth_year / birth_month added by migration 049. Only set when supplied,
    // and never wipe an existing value on a resubmission that omits it.
    if (birthYear !== null && birthMonth !== null) {
      profileRow.birth_year  = birthYear
      profileRow.birth_month = birthMonth
    }
    // account_holder_name belongs only in listener_applications (KYC/payment data).
    // Writing it to listener_profiles created a second copy that diverged whenever
    // the admin used update_bank_details (which only touches listener_applications).
    let profileErr = (await admin.from('listener_profiles').upsert(profileRow, { onConflict: 'user_id' })).error
    if (profileErr && NEW_PROFILE_COLS.some(c => profileErr?.message?.includes(c))) {
      // Migration 060 not applied yet — keep applications working; the new
      // fields are captured once the columns exist.
      logger.warn('listener apply: migration 060 profile columns missing — saved without them', { userId: user.id })
      for (const c of NEW_PROFILE_COLS) delete profileRow[c]
      profileErr = (await admin.from('listener_profiles').upsert(profileRow, { onConflict: 'user_id' })).error
    }
    if (profileErr && (profileErr.message?.includes('birth_year') || profileErr.message?.includes('birth_month'))) {
      // Migration 049 not applied yet — save the rest of the profile so
      // applications keep working; age is captured once the column exists.
      delete profileRow.birth_year
      delete profileRow.birth_month
      profileErr = (await admin.from('listener_profiles').upsert(profileRow, { onConflict: 'user_id' })).error
    }
    if (profileErr) {
      logger.error('listener apply: profile upsert failed', { userId: user.id, error: profileErr.message, code: profileErr.code })
      // A CHECK violation (23514) here is almost always the rate_per_min range
      // constraint — give a clear message instead of an opaque 500. (The live
      // DB cap may lag MAX_LISTENER_RATE until migration 039 is applied.)
      if (profileErr.code === '23514') {
        return NextResponse.json(
          { error: `Your rate is outside the allowed range (₹${MIN_LISTENER_RATE}–₹${MAX_LISTENER_RATE} per minute). Please adjust it and try again.` },
          { status: 400 }
        )
      }
      return NextResponse.json({ error: 'Could not save your listener profile.' }, { status: 500 })
    }

    // 3. application — the service role bypasses the migration-031 status
    //    guard, so enforce the same rule here: only a missing, rejected, or
    //    needs_resubmission application may (re)enter 'pending'; any other
    //    existing status is preserved.
    const { data: existingApp } = await admin
      .from('listener_applications')
      .select('status')
      .eq('user_id', user.id)
      .maybeSingle()

    // Permanently rejected applicants are blocked server-side — the UI also
    // blocks them, but a crafted direct POST would otherwise bypass it.
    if (existingApp?.status === 'rejected') {
      return NextResponse.json({ error: 'Your application has been permanently closed. Please contact support if you believe this is an error.' }, { status: 403 })
    }

    const status = !existingApp || existingApp.status === 'needs_resubmission'
      ? 'pending'
      : existingApp.status

    const appRow: Record<string, unknown> = {
      user_id:             user.id,
      name,
      // Always use the OTP-verified session phone — never the unverified form body value.
      phone:               sessionPhone,
      account_holder_name: accountHolderName || null,
      bank_account:        bank,
      ifsc_code:           ifsc,
      upi_id:              upi || null,
      status,
      // Clear any prior admin_notes so the reviewing admin isn't misled by stale
      // "fix your IFSC" feedback after the applicant has already corrected it.
      admin_notes:         null,
      // Private screening answers + auto-scored quiz (migration 060).
      screening:           { ...onboarding.screening, submitted_at: new Date().toISOString() },
    }
    // Aadhaar (admin-only KYC). aadhaar_last4 predates this work; aadhaar (full)
    // is added by migration 047. Only set them when the applicant supplied a
    // number — never wipe an existing value on a resubmission that omits it.
    if (aadhaar) {
      appRow.aadhaar = aadhaar
      appRow.aadhaar_last4 = aadhaar.slice(-4)
    }
    let appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    if (appErr?.message?.includes('screening')) {
      logger.warn('listener apply: migration 060 screening column missing — saved without it', { userId: user.id })
      delete appRow.screening
      appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    }
    if (appErr?.message?.includes("'aadhaar'")) {
      // Full `aadhaar` column not yet in DB (pre-migration 047) — keep the masked
      // last4 (long-standing column) and retry without the full number. PostgREST
      // quotes the missing column as 'aadhaar', distinct from 'aadhaar_last4'.
      delete appRow.aadhaar
      appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    } else if (appErr?.message?.includes('upi_id')) {
      // upi_id column not yet in DB (pre-migration 022) — retry without it
      delete appRow.upi_id
      appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    } else if (appErr?.message?.includes('account_holder_name')) {
      // account_holder_name column not yet in DB (pre-migration 055) — retry without it
      delete appRow.account_holder_name
      appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    }
    if (appErr) {
      logger.error('listener apply: application upsert failed', { userId: user.id, error: appErr.message, code: appErr.code })
      return NextResponse.json({ error: 'Could not save your application.' }, { status: 500 })
    }

    // 4. Persist avatar — runs only after all DB writes succeed so a storage
    //    failure never leaves an approved listener with no photo. avatarUrl is
    //    guaranteed non-null here (validated and required above).
    //
    // Approved listeners: the display photo goes to pending_avatar_url for admin
    // review (same logic as profile PATCH) so it's never auto-published.
    // Everyone else (new applicants, needs_resubmission): write users.avatar_url —
    // not public until the admin approves the application.
    const { data: lpForAvatar } = await admin.from('listener_profiles')
      .select('is_approved').eq('user_id', user.id).maybeSingle()

    if (lpForAvatar?.is_approved) {
      // Approved listener resubmitting — queue selfie for admin approval, don't go live immediately.
      // Never fall back to writing avatar_url directly: that would bypass the review mechanism
      // and publish an unreviewed photo. If pending_avatar_url doesn't exist in the live DB
      // (pre-migration), fail hard so the issue is surfaced rather than silently bypassed.
      // Queue selfie for review + take offline until approved.
      const { error: pendingErr } = await admin.from('listener_profiles')
        .update({ pending_avatar_url: avatarUrl, is_available: false })
        .eq('user_id', user.id)
      if (pendingErr) {
        logger.error('listener apply: pending_avatar_url write failed', { userId: user.id, error: pendingErr.message, code: pendingErr.code })
        return NextResponse.json({ error: 'Could not save your selfie for review. Please try again.' }, { status: 500 })
      }
    } else {
      const { error: avatarErr } = await admin.from('users').update({ avatar_url: avatarUrl }).eq('id', user.id)
      if (avatarErr) {
        logger.error('listener apply: avatar_url save failed', { userId: user.id, error: avatarErr.message })
        return NextResponse.json({ error: 'Could not save your selfie. Please try again.' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.error('listener apply route error:', { error: msg })
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
