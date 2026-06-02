import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

// Constant-time string comparison — avoids timing side-channels on the PIN.
function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) {
    // Compare against self to keep timing uniform, then return false.
    crypto.timingSafeEqual(ab, ab)
    return false
  }
  return crypto.timingSafeEqual(ab, bb)
}

/**
 * Shared admin auth check for all /api/admin/* routes.
 * ALWAYS pass `req` — the PIN check requires it.
 *
 * Returns different error codes so the client can distinguish:
 *   code:'NOT_ADMIN'    → user is logged in but is not admin → show Access Denied
 *   code:'PIN_REQUIRED' → user IS admin but PIN missing/wrong → show PIN gate
 *
 * Identity check order (ANY match = admin):
 *   1. user.phone === ADMIN_PHONE env var  (phone-OTP logins, digits-only normalized)
 *   2. user.email === ADMIN_EMAIL env var  (email logins)
 *   3. users.is_admin = true in DB        (explicit grant)
 *   4. users.role = 'admin' in DB         (role-based grant)
 */

// Strip all non-digit characters for phone comparison, handles +91 prefix differences
const normalizePhone = (p: string | null | undefined) => (p ?? '').replace(/\D/g, '')

export async function requireAdmin(req: Request) {
  // ── Step 1: verify session ───────────────────────────────────────────────
  const supabase = createServerSupabaseClient()
  const { data: { user }, error: authErr } = await supabase.auth.getUser()

  if (authErr) {
    logger.warn('requireAdmin: auth.getUser() error', { error: authErr.message })
  }
  if (!user) {
    return { error: 'Unauthenticated', code: 'UNAUTHENTICATED', status: 401 as const, user: null }
  }

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPhone = process.env.ADMIN_PHONE
  const adminPin   = process.env.ADMIN_PIN

  // ── Step 2: identity check (env vars first — no DB dependency) ──────────
  // Normalize both sides to digits-only to handle +91 vs 91 prefix differences
  const isAdminByPhone = !!(
    adminPhone &&
    user.phone &&
    normalizePhone(user.phone) === normalizePhone(adminPhone)
  )
  const isAdminByEmail = !!(adminEmail && user.email && user.email === adminEmail)

  // DB check — treat query errors as "not found" but log them
  // Check both is_admin flag AND role column (real DB has role='admin' as alternative)
  let isAdminByDB = false
  try {
    const sb = createAdminClient()
    const { data: dbUser, error: dbErr } = await sb
      .from('users')
      .select('is_admin, role')
      .eq('id', user.id)
      .single()
    if (dbErr) {
      logger.warn('requireAdmin: DB is_admin query failed', {
        userId: user.id,
        error: dbErr.message,
        hint: 'Run migration 014 to add is_admin column if missing',
      })
    } else {
      isAdminByDB = dbUser?.is_admin === true || dbUser?.role === 'admin'
    }
  } catch (e) {
    logger.error('requireAdmin: unexpected DB error', {
      error: e instanceof Error ? e.message : String(e),
    })
  }

  // Log the identity resolution to help diagnose auth failures
  logger.info('requireAdmin: identity check', {
    userId: user.id,
    userPhoneNorm: normalizePhone(user.phone) || '(none)',
    userEmail: user.email ?? '(none)',
    adminPhoneNorm: adminPhone ? normalizePhone(adminPhone).slice(0, 4) + '***' : '(not set)',
    adminEmail: adminEmail ? adminEmail.split('@')[0].slice(0, 3) + '***' : '(not set)',
    isAdminByPhone,
    isAdminByEmail,
    isAdminByDB,
  })

  if (!isAdminByPhone && !isAdminByEmail && !isAdminByDB) {
    return { error: 'Forbidden', code: 'NOT_ADMIN', status: 403 as const, user: null }
  }

  // ── Step 3: PIN check (only for confirmed admins) ────────────────────────
  if (adminPin) {
    // Rate-limit PIN attempts per admin user — 5 per minute — to block brute force.
    if (!checkRateLimit(`admin-pin:${user.id}`, 5, 60_000)) {
      return { error: 'Too many attempts. Please wait.', code: 'PIN_RATE_LIMITED', status: 429 as const, user: null }
    }
    const authHeader = req.headers.get('x-admin-pin') ?? req.headers.get('authorization')
    const providedPin = (authHeader?.replace(/^Bearer\s+/i, '') ?? '')
    if (!timingSafeEqual(providedPin, adminPin)) {
      return { error: 'PIN required', code: 'PIN_REQUIRED', status: 403 as const, user: null }
    }
  }

  return { error: null, code: null, status: 200 as const, user }
}
