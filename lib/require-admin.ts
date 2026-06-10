import crypto from 'crypto'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

// Constant-time string comparison — avoids timing side-channels on the PIN/password.
function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) {
    crypto.timingSafeEqual(ab, ab)
    return false
  }
  return crypto.timingSafeEqual(ab, bb)
}

// Synthetic user ID returned for password-authenticated admin sessions.
// NOT a real users row — never write it into columns with an FK to users(id);
// use dbUserIdOrNull() for those.
export const ADMIN_PASSWORD_USER_ID = '00000000-0000-0000-0000-000000000001'

// Returns the admin's user id if it maps to a real users row, else null.
// Use for FK columns like reports.resolved_by / listener_verifications.reviewed_by.
export function dbUserIdOrNull(userId: string): string | null {
  return userId === ADMIN_PASSWORD_USER_ID ? null : userId
}

/**
 * Shared admin auth check for all /api/admin/* routes.
 * ALWAYS pass `req` — the header checks require it.
 *
 * Two auth paths:
 *   A. x-admin-password header matching ADMIN_PASSWORD env var
 *      → bypasses Supabase session entirely; no OTP or phone needed.
 *   B. Valid Supabase session whose user matches ADMIN_PHONE/ADMIN_EMAIL/is_admin
 *      → phone-OTP flow; optionally gated by ADMIN_PIN second factor.
 *
 * Error codes:
 *   code:'NOT_ADMIN'    → user is logged in but is not admin → show Access Denied
 *   code:'PIN_REQUIRED' → user IS admin but PIN missing/wrong → show PIN gate
 */

const normalizePhone = (p: string | null | undefined) => (p ?? '').replace(/\D/g, '')

export async function requireAdmin(req: Request) {
  // ── Step 0: ADMIN_PASSWORD / ADMIN_SECRET header — password-based admin auth ─
  // Support both names: ADMIN_SECRET (documented in .env.example) and
  // ADMIN_PASSWORD (legacy name). ADMIN_SECRET takes priority.
  const adminPassword = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD
  if (adminPassword) {
    const providedPw = req.headers.get('x-admin-password') ?? ''
    if (providedPw) {
      // Rate-limit password attempts per IP to block brute force.
      const clientIp = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim()
      if (!checkRateLimit(`admin-pw:${clientIp}`, 10, 60_000)) {
        return { error: 'Too many attempts. Please wait.', code: 'PIN_RATE_LIMITED', status: 429 as const, user: null }
      }
      if (timingSafeEqual(providedPw, adminPassword)) {
        return {
          error: null, code: null, status: 200 as const,
          user: { id: ADMIN_PASSWORD_USER_ID, email: process.env.ADMIN_EMAIL } as { id: string; email?: string; phone?: string },
        }
      }
      // Wrong password — add artificial delay to slow brute-force across serverless containers.
      // The in-memory rate limiter is per-container and cannot be relied on in serverless,
      // so a timing delay is the primary defense until Redis rate limiting is configured.
      await new Promise(r => setTimeout(r, 1000))
      return { error: 'Forbidden', code: 'NOT_ADMIN', status: 403 as const, user: null }
    }
  }

  // ── Step 0b: Phone + PIN header auth (two-step login from admin UI) ─────────
  const phonePinHeader = req.headers.get('x-admin-phone') ?? ''
  if (phonePinHeader) {
    const clientIp = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim()
    if (!checkRateLimit(`admin-phone:${clientIp}`, 10, 60_000)) {
      return { error: 'Too many attempts. Please wait.', code: 'PIN_RATE_LIMITED', status: 429 as const, user: null }
    }
    const adminPhone = process.env.ADMIN_PHONE
    if (!adminPhone || normalizePhone(phonePinHeader) !== normalizePhone(adminPhone)) {
      await new Promise(r => setTimeout(r, 1000))
      return { error: 'Invalid phone number', code: 'NOT_ADMIN', status: 403 as const, user: null }
    }
    // Phone matched — now check PIN
    const adminPin = process.env.ADMIN_PIN
    const providedPin = req.headers.get('x-admin-pin') ?? ''
    if (!providedPin) {
      return { error: 'PIN required', code: 'PHONE_VERIFIED', status: 403 as const, user: null }
    }
    if (!adminPin || !timingSafeEqual(providedPin, adminPin)) {
      await new Promise(r => setTimeout(r, 500))
      return { error: 'Incorrect PIN', code: 'PIN_REQUIRED', status: 403 as const, user: null }
    }
    return {
      error: null, code: null, status: 200 as const,
      user: { id: ADMIN_PASSWORD_USER_ID, email: process.env.ADMIN_EMAIL } as { id: string; email?: string; phone?: string },
    }
  }

  // ── Step 1: verify Supabase session ─────────────────────────────────────────
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

  // ── Step 2: identity check (env vars first — no DB dependency) ──────────────
  const isAdminByPhone = !!(
    adminPhone &&
    user.phone &&
    normalizePhone(user.phone) === normalizePhone(adminPhone)
  )
  const isAdminByEmail = !!(adminEmail && user.email && user.email === adminEmail)

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

  // ── Step 3: PIN check (only for confirmed Supabase-session admins) ───────────
  if (adminPin) {
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
