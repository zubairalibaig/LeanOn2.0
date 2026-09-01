import type { Metadata } from 'next'

// Utility page (ID verification for approved listeners) — not a landing page.
// Without this, the 'use client' page.tsx inherits the homepage's default title
// and self-canonical, which is a thin duplicate-content signal. noindex it and
// give it a real, non-duplicate title.
export const metadata: Metadata = {
  title: 'Listener Verification | LeanOn',
  description: 'Identity verification for approved LeanOn peer listeners.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.leanon.app/become-listener/verify' },
}

export default function VerifyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
