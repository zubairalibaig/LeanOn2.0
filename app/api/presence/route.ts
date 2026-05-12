import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

// Called via navigator.sendBeacon when dashboard page unloads
export async function POST(req: NextRequest) {
  try {
    const { userId, available } = await req.json()
    if (!userId) return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    const sb = createAdminClient()
    await sb.from('listener_profiles').update({ is_available: available }).eq('user_id', userId)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true }) // beacon fire-and-forget; always 200
  }
}
