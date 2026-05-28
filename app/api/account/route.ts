import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { logger } from '@/lib/logger'

// PATCH — deactivate listener profile only (keeps user account active)
export async function PATCH() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const admin = createAdminClient()
    const { error } = await admin.from('listener_profiles')
      .update({ is_active: false, is_available: false, is_approved: false })
      .eq('user_id', user.id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('Listener deactivation error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to deactivate listener profile' }, { status: 500 })
  }
}

// POST — soft-delete (deactivate) the authenticated user's account
export async function POST() {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    const admin = createAdminClient()

    // Mark user inactive
    await admin.from('users').update({ is_active: false }).eq('id', user.id)

    // If they are a listener, also deactivate and take offline
    await admin.from('listener_profiles')
      .update({ is_active: false, is_available: false })
      .eq('user_id', user.id)

    // Sign out all sessions via Admin API
    await admin.auth.admin.signOut(user.id, 'global')

    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('Account deactivation error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'Failed to deactivate account' }, { status: 500 })
  }
}
