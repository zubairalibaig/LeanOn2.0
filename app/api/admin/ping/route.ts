import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/require-admin'

// Lightweight auth-only check — no DB queries.
// Used by the admin login form to verify the password before loading KPIs.
export async function GET(req: NextRequest) {
  try {
    const { error, code, status } = await requireAdmin(req)
    if (error) return NextResponse.json({ error, code }, { status })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Server error', code: 'SERVER_ERROR' }, { status: 500 })
  }
}
