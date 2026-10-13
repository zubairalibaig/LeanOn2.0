import type { SupabaseClient } from '@supabase/supabase-js'

// A person is suspended when EITHER flag is set:
//   users.is_suspended             — account suspend / ban (admin "Suspend", "Ban")
//   listener_profiles.is_suspended — set together with it; also legacy
//                                    listener-only suspensions (old "Suspend listener")
// Both mean: no login, no access. Migration 068 mirrors this in the database
// (auth ban + session revoke via sync_auth_ban()).
//
// Returns 'error' when either read fails — callers must fail closed.
export async function suspensionStatus(
  admin: SupabaseClient,
  userId: string,
): Promise<'suspended' | 'ok' | 'error'> {
  const [{ data: u, error: uErr }, { data: lp, error: lpErr }] = await Promise.all([
    admin.from('users').select('is_suspended').eq('id', userId).maybeSingle(),
    admin.from('listener_profiles').select('is_suspended').eq('user_id', userId).maybeSingle(),
  ])
  if (uErr || lpErr) return 'error'
  return u?.is_suspended === true || lp?.is_suspended === true ? 'suspended' : 'ok'
}

// Mirror the suspension flags onto Supabase Auth: a banned auth user can't sign
// in or refresh a token, so every existing login dies within the access-token
// lifetime. (Migration 068 does the same from a DB trigger and also deletes the
// live sessions at once; this keeps the admin buttons effective even before
// 068 is run.) Call AFTER the flags are written. Never throws.
//
// NB: auth.admin.signOut() takes a user's JWT, not a user id — calling it with
// a user id (as the old suspend code did) always failed silently.
export async function syncAuthBan(admin: SupabaseClient, userId: string): Promise<string | null> {
  const status = await suspensionStatus(admin, userId)
  if (status === 'error') return 'could not read suspension flags'
  const { error } = await admin.auth.admin.updateUserById(userId, {
    ban_duration: status === 'suspended' ? '876000h' : 'none',
  })
  return error ? error.message : null
}
