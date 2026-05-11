import { createBrowserClient } from '@supabase/ssr'

const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser client — safe to import in 'use client' components
export function createClient() {
  return createBrowserClient(URL, ANON)
}
