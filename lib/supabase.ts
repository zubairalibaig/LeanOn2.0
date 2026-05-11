import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser client — for client components
export function createClient() {
  return createBrowserClient(URL, ANON)
}

// Server client — uses caller's session cookie, respects RLS
export function createServerSupabaseClient() {
  const c = cookies()
  return createServerClient(URL, ANON, {
    cookies: {
      get(name: string)                             { return c.get(name)?.value },
      set(name: string, value: string, opts: CookieOptions) {
        try { c.set({ name, value, ...opts }) } catch {}
      },
      remove(name: string, opts: CookieOptions) {
        try { c.set({ name, value: '', ...opts }) } catch {}
      },
    },
  })
}

// Admin client — bypasses RLS; only for trusted server-side operations
export function createAdminClient() {
  return createSupabaseClient(URL, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}
