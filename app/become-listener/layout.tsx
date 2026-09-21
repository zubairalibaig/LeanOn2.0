import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a LeanOn Listener',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.leanon.app/become-listener' },
}

export default function BecomeListenerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
