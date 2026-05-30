// POST — store FCM token for authenticated user
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 })

  let fcm_token: string
  try {
    const body = await req.json()
    fcm_token = body.fcm_token
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!fcm_token || typeof fcm_token !== 'string' || fcm_token.length < 10) {
    return NextResponse.json({ error: 'Invalid FCM token' }, { status: 400 })
  }

  const sb = createAdminClient()
  const { error } = await sb.from('users').update({ fcm_token }).eq('id', user.id)
  if (error) {
    console.error('FCM token save error:', error)
    return NextResponse.json({ error: 'Failed to save token' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
