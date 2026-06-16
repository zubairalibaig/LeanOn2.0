import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase-server'
import { checkRateLimit } from '@/lib/rate-limit'
import { MIN_LISTENER_RATE, MAX_LISTENER_RATE } from '@/lib/constants'
import { logger } from '@/lib/logger'

// PATCH — update listener profile fields (server-side to bypass RLS fragility)
// Accepted fields: bio, specialty_tags, languages_spoken, rate_per_min
export async function PATCH(req: NextRequest) {
  try {
    const userSb = createServerSupabaseClient()
    const { data: { user } } = await userSb.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    if (!checkRateLimit(`listener-profile:${user.id}`, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait.' }, { status: 429 })
    }

    const sb = createAdminClient()

    // Verify caller is an active listener
    const { data: lp } = await sb.from('listener_profiles').select('is_approved, is_suspended').eq('user_id', user.id).maybeSingle()
    if (!lp) return NextResponse.json({ error: 'Not a listener' }, { status: 403 })
    if (lp.is_suspended) return NextResponse.json({ error: 'Your account is suspended' }, { status: 403 })

    const body = await req.json().catch(() => ({}))
    const updates: Record<string, unknown> = {}

    if (typeof body?.bio === 'string') {
      const bio = body.bio.trim()
      // Match the apply validation (30–400 chars) for consistency
      if (bio.length < 30 || bio.length > 400) return NextResponse.json({ error: 'Bio must be 30–400 characters.' }, { status: 400 })
      updates.bio = bio
    }

    if (Array.isArray(body?.specialty_tags)) {
      const tags = (body.specialty_tags as unknown[]).filter(t => typeof t === 'string').slice(0, 10) as string[]
      updates.specialty_tags = tags
    }

    if (Array.isArray(body?.languages_spoken)) {
      const langs = (body.languages_spoken as unknown[]).filter(l => typeof l === 'string').slice(0, 12) as string[]
      if (langs.length === 0) return NextResponse.json({ error: 'At least one language is required.' }, { status: 400 })
      updates.languages_spoken = langs
    }

    if (body?.rate_per_min !== undefined) {
      const rate = typeof body.rate_per_min === 'number' ? body.rate_per_min : parseInt(String(body.rate_per_min))
      if (!Number.isInteger(rate) || rate < MIN_LISTENER_RATE || rate > MAX_LISTENER_RATE) {
        return NextResponse.json({ error: `Rate must be between ₹${MIN_LISTENER_RATE} and ₹${MAX_LISTENER_RATE} per minute.` }, { status: 400 })
      }
      updates.rate_per_min = rate
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
    }

    const { error: updateErr } = await sb.from('listener_profiles').update(updates).eq('user_id', user.id)
    if (updateErr) {
      logger.error('listener profile PATCH error:', { error: updateErr.message, userId: user.id })
      return NextResponse.json({ error: 'Failed to update profile. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    logger.error('listener profile PATCH error:', { error: err instanceof Error ? err.message : String(err) })
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
