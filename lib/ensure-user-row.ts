import type { SupabaseClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logger'

type EnsureArgs = {
  id: string
  name?: string
  /** E.164 phone (+91...). Only pass when verified via session/OTP. */
  phone?: string | null
  /** True when `phone` comes from the verified auth session (OTP-proven). */
  phoneVerified?: boolean
}

/**
 * Create/update a public.users row with the service-role client.
 *
 * Handles the users_phone_key UNIQUE constraint (live DB): if another row
 * already holds this phone, it is necessarily stale — Supabase auth enforces
 * one auth user per phone, and the caller just proved ownership via OTP.
 * We strip the phone off the stale row (soft — the row and its data are
 * kept) and retry. If the phone is NOT session-verified, we retry without
 * the phone instead of touching anyone else's row.
 */
export async function ensureUserRow(
  admin: SupabaseClient,
  { id, name, phone, phoneVerified }: EnsureArgs
): Promise<{ error: string | null; debug: string | null }> {
  const row: Record<string, unknown> = { id }
  if (name) row.name = name
  if (phone) row.phone = phone

  const fmt = (e: { code?: string; message: string; details?: string; hint?: string }) =>
    `[${e.code ?? 'no-code'}] ${e.message}${e.details ? ' | ' + e.details : ''}${e.hint ? ' | hint: ' + e.hint : ''}`

  let { error } = await admin.from('users').upsert(row, { onConflict: 'id' })
  if (!error) return { error: null, debug: null }

  const phoneConflict = error.code === '23505' && /users_phone_key/.test(error.message + (error.details ?? ''))
  if (phoneConflict && phone) {
    if (phoneVerified) {
      // OTP proved current ownership — release the phone from the stale row(s).
      // Capture the stale ids FIRST so we can both clear their phone and retire
      // any listener profile they own. Leaving a stale listener_profile active
      // makes it a permanent ghost on /browse: the orphaned account can never be
      // logged into (it has no phone), yet it still shows as a bookable listener
      // and confuses the real owner ("I go online but I'm still offline"). This
      // exact drift produced the duplicate "Zubair" listener bug.
      const { data: staleRows } = await admin
        .from('users').select('id').eq('phone', phone).neq('id', id)

      // 1) Strip the phone. Try NULL first; the live DB may have a NOT NULL on
      //    phone (schema drift), in which case park a unique placeholder.
      let { error: clearErr } = await admin
        .from('users')
        .update({ phone: null })
        .eq('phone', phone)
        .neq('id', id)
      if (clearErr && clearErr.code === '23502') {
        for (const stale of staleRows ?? []) {
          ;({ error: clearErr } = await admin
            .from('users')
            .update({ phone: `released-${stale.id}` })
            .eq('id', stale.id))
          if (clearErr) break
        }
      }
      if (clearErr) {
        logger.error('ensureUserRow: failed to clear stale phone', { phone, error: clearErr.message })
        return { error: 'Could not save your profile. Please try again.', debug: fmt(clearErr) }
      }

      // 2) Retire the orphaned account's listener profile so it disappears from
      //    /browse. Soft only (is_active/is_available) — never deletes data and
      //    never touches guard-frozen columns (is_approved/rating/etc).
      if (staleRows && staleRows.length > 0) {
        const staleIds = staleRows.map(s => s.id)
        await admin
          .from('listener_profiles')
          .update({ is_active: false, is_available: false })
          .in('user_id', staleIds)
          .then(
            ({ error: deErr }) => { if (deErr) logger.warn('ensureUserRow: could not retire orphaned listener profile(s)', { staleIds, error: deErr.message }) },
            (e) => logger.warn('ensureUserRow: orphaned listener profile retire threw', { error: String(e) }),
          )
      }

      logger.warn('ensureUserRow: released phone from stale users row', { phone, newOwner: id, retiredOrphans: staleRows?.length ?? 0 })
      ;({ error } = await admin.from('users').upsert(row, { onConflict: 'id' }))
    } else {
      // Unverified phone — never evict another row; save without the phone.
      delete row.phone
      ;({ error } = await admin.from('users').upsert(row, { onConflict: 'id' }))
    }
    if (!error) return { error: null, debug: null }
  }

  logger.error('ensureUserRow: upsert failed', { id, error: error.message, code: error.code })
  return { error: 'Could not save your profile. Please try again.', debug: fmt(error) }
}
