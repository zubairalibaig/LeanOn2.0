import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { ensureUserRow } from '@/lib/ensure-user-row'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE, LANGUAGES } from '@/lib/constants'
import { logger } from '@/lib/logger'

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
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const bio  = typeof body?.bio  === 'string' ? body.bio.trim()  : ''
    const bank = typeof body?.bank === 'string' ? body.bank.trim() : ''
    const ifsc = typeof body?.ifsc === 'string' ? body.ifsc.trim().toUpperCase() : ''
    const upi  = typeof body?.upi  === 'string' ? body.upi.trim()  : ''
    const formPhone = typeof body?.phone === 'string' ? body.phone.trim() : ''
    const rate = Number(body?.rate)
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
    if (!/^\d{9,18}$/.test(bank))
      return NextResponse.json({ error: 'Please enter a valid bank account number.' }, { status: 400 })
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc))
      return NextResponse.json({ error: 'Please enter a valid IFSC code.' }, { status: 400 })
    if (upi && !/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upi))
      return NextResponse.json({ error: 'Please enter a valid UPI ID.' }, { status: 400 })

    // Session phone is OTP-verified; the typed form phone is contact info only.
    const sessionPhone = user.phone ? '+' + user.phone.replace(/^\+/, '') : null

    const admin = createAdminClient()

    // 1. users row first — listener_profiles/applications FK to users(id)
    const { error: userErr, debug: userDebug } = await ensureUserRow(admin, {
      id: user.id,
      name,
      phone: sessionPhone,
      phoneVerified: !!user.phone,
    })
    if (userErr) return NextResponse.json({ error: userErr, debug: userDebug }, { status: 500 })

    // 2. listener profile — is_approved intentionally omitted: DB default
    //    false on insert; existing approval preserved on resubmission.
    const { error: profileErr } = await admin.from('listener_profiles').upsert({
      user_id:          user.id,
      bio,
      specialty_tags:   tags,
      languages_spoken: langs.length > 0 ? langs : ['english'],
      rate_per_min:     Math.round(rate),
      is_available:     false,
    }, { onConflict: 'user_id' })
    if (profileErr) {
      logger.error('listener apply: profile upsert failed', { userId: user.id, error: profileErr.message, code: profileErr.code })
      return NextResponse.json(
        { error: 'Could not save your listener profile.', debug: `[${profileErr.code}] ${profileErr.message}` },
        { status: 500 }
      )
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
    const status = !existingApp || ['rejected', 'needs_resubmission'].includes(existingApp.status)
      ? 'pending'
      : existingApp.status

    const appRow: Record<string, unknown> = {
      user_id:      user.id,
      name,
      phone:        formPhone || sessionPhone,
      bank_account: bank,
      ifsc_code:    ifsc,
      upi_id:       upi || null,
      status,
    }
    let appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    if (appErr?.message?.includes('upi_id')) {
      // upi_id column not yet in DB (pre-migration 022) — retry without it
      delete appRow.upi_id
      appErr = (await admin.from('listener_applications').upsert(appRow, { onConflict: 'user_id' })).error
    }
    if (appErr) {
      logger.error('listener apply: application upsert failed', { userId: user.id, error: appErr.message, code: appErr.code })
      return NextResponse.json(
        { error: 'Could not save your application.', debug: `[${appErr.code}] ${appErr.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.error('listener apply route error:', { error: msg })
    return NextResponse.json({ error: 'Submission failed. Please try again.', debug: msg }, { status: 500 })
  }
}
