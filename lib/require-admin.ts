import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

/**
 * Shared admin auth check used by all /api/admin/* routes.
 *
 * Accepts admin if ANY of these match:
 * 1. user.email === ADMIN_EMAIL env var
 * 2. user.phone matches ADMIN_PHONE env var (for phone-OTP logins)
 * 3. users.is_admin = true in the DB (fallback for any auth method)
 *
 * Also verifies the ADMIN_PIN header when ADMIN_PIN env var is set.
 * The admin page sends: Authorization: Bearer <pin>
 */
export async function requireAdmin(req?: Request) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthenticated', status: 401 as const, user: null }

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPhone = process.env.ADMIN_PHONE // optional: +91XXXXXXXXXX
  const adminPin   = process.env.ADMIN_PIN   // optional secondary PIN

  // Verify PIN when configured
  if (adminPin && req) {
    const authHeader = req.headers.get('x-admin-pin') || req.headers.get('authorization')
    const providedPin = authHeader?.replace(/^Bearer\s+/i, '')
    if (providedPin !== adminPin) {
      return { error: 'Forbidden', status: 403 as const, user: null }
    }
  }

  // Check identity: email, phone, or DB flag
  const sb = createAdminClient()
  const { data: dbUser } = await sb.from('users').select('is_admin').eq('id', user.id).single()

  const isAdminByEmail = adminEmail && user.email === adminEmail
  const isAdminByPhone = adminPhone && user.phone === adminPhone
  const isAdminByDB    = dbUser?.is_admin === true

  if (!isAdminByEmail && !isAdminByPhone && !isAdminByDB) {
    return { error: 'Forbidden', status: 403 as const, user: null }
  }

  return { error: null, status: 200 as const, user }
}
