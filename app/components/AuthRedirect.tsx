'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

// Silently redirects logged-in users from the public home page to /browse.
// Rendered as a hidden component so the server-rendered page remains fully SEO-indexable.
export default function AuthRedirect({ to = '/browse' }: { to?: string }) {
  const router = useRouter()
  useEffect(() => {
    createClient().auth.getUser().then(({ data: { user } }) => {
      if (user) router.replace(to)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}
