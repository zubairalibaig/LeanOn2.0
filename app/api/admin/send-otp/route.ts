import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logger'

const normalizePhone = (p: string) => p.replace(/\D/g, '')

// POST /api/admin/send-otp
// Only sends an OTP if the submitted phone matches ADMIN_PHONE.
// Returns 200 either way to avoid leaking which phone is admin.
export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json()
    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ ok: true }) // silent reject
    }

    const adminPhone = process.env.ADMIN_PHONE
    if (!adminPhone) {
      logger.error('ADMIN_PHONE env var not set — admin OTP blocked')
      return NextResponse.json({ ok: true })
    }

    // Only proceed if phone matches admin phone (digits-only comparison)
    const normalizedInput = normalizePhone(phone)
    const normalizedAdmin = normalizePhone(adminPhone)

    if (normalizedInput !== normalizedAdmin) {
      // Don't log the attempted phone — avoids enumeration artifacts in logs
      return NextResponse.json({ ok: true }) // silent reject, no OTP sent
    }

    // Send OTP via Supabase (admin phone confirmed)
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const formattedPhone = normalizedInput.startsWith('91')
      ? '+' + normalizedInput
      : '+91' + normalizedInput

    const { error } = await sb.auth.signInWithOtp({ phone: formattedPhone })
    if (error) {
      logger.error('Admin OTP send failed', { error: error.message })
      return NextResponse.json({ ok: false, error: 'OTP send failed. Check Supabase SMS config.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, sent: true })
  } catch (err) {
    logger.error('admin/send-otp error', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ ok: true }) // always 200 to prevent enumeration
  }
}
