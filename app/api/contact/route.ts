import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    // Basic email format guard
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const sb = createAdminClient()
    const { error } = await sb.from('contact_messages').insert({
      name:    name.trim().slice(0, 100),
      email:   email.trim().toLowerCase().slice(0, 200),
      type:    type || 'general',
      message: message.trim().slice(0, 2000),
    })

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to submit. Please email hello@leanon.app directly.' }, { status: 500 })
  }
}
