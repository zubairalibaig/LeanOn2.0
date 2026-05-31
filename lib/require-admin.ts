import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

/**
 * Shared admin auth check for all /api/admin/* routes.
 * ALWAYS pass `req` — the PIN check requires it.
 *
 * Returns different error codes so the client can distinguish:
 *   code:'NOT_ADMIN'    → user is logged in but is not admin → show Access Denied
 *   code:'PIN_REQUIRED' → user IS admin but PIN missing/wrong → show PIN gate
 *
 * Logic order:
 * 1. Must be authenticated (401 if not)
 * 2. Identity check: ADMIN_EMAIL env var, OR ADMIN_PHONE env var, OR is_admin=true in DB
 *    Fails → NOT_ADMIN 403 (non-admins never see the PIN gate)
 * 3. If ADMIN_PIN env var is set, verify x-admin-pin header
 *    Fails → PIN_REQUIRED 403 (PIN gate shown only to confirmed admins)
 */
export async function requireAdmin(req: Request) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthenticated', code: 'UNAUTHENTICATED', status: 401 as const, user: null }

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPhone = process.env.ADMIN_PHONE
  const adminPin   = process.env.ADMIN_PIN

  // Check identity FIRST — non-admins must never reach the PIN gate
  const sb = createAdminClient()
  const { data: dbUser } = await sb.from('users').select('is_admin').eq('id', user.id).single()

  const isAdminByEmail = !!(adminEmail && user.email === adminEmail)
  const isAdminByPhone = !!(adminPhone && user.phone === adminPhone)
  const isAdminByDB    = dbUser?.is_admin === true

  if (!isAdminByEmail && !isAdminByPhone && !isAdminByDB) {
    return { error: 'Forbidden', code: 'NOT_ADMIN', status: 403 as const, user: null }
  }

  // Identity confirmed — enforce PIN when configured
  if (adminPin) {
    const authHeader = req.headers.get('x-admin-pin') ?? req.headers.get('authorization')
    const providedPin = authHeader?.replace(/^Bearer\s+/i, '')
    if (providedPin !== adminPin) {
      return { error: 'PIN required', code: 'PIN_REQUIRED', status: 403 as const, user: null }
    }
  }

  return { error: null, code: null, status: 200 as const, user }
}
