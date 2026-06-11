import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
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
    // existing values (update) — the admin client would otherwise be able to
    // write them, and we must not let a name-save touch them.
    const { error: upsertErr } = await admin
      .from('users')
      .upsert(
        { id: user.id, name: rawName, phone, is_active: true },
        { onConflict: 'id' }
      )

    if (upsertErr) {
      const code = (upsertErr as { code?: string }).code ?? null
      const details = (upsertErr as { details?: string }).details ?? null
      const hint = (upsertErr as { hint?: string }).hint ?? null
      logger.error('profile upsert (admin) failed:', {
        userId: user.id, error: upsertErr.message, details, hint, code,
      })
      // TEMP DIAGNOSTIC: include the real DB error so the cause is visible
      // on-screen during launch testing. Remove the `debug` field afterwards.
      return NextResponse.json(
        {
          error: 'Could not save your profile. Please try again.',
          debug: `[${code ?? 'no-code'}] ${upsertErr.message}${details ? ' | ' + details : ''}${hint ? ' | hint: ' + hint : ''}`,
        },
        { status: 500 }
      )
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
