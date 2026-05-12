import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Peer Listener — Earn by Listening | LeanOn India',
  description: 'Share your lived experience and earn ₹8–25 per minute as a peer listener on LeanOn. Help people going through what you once survived. 100% of your rate goes to you.',
  keywords: ['become peer listener India', 'earn by listening online India', 'peer support job India', 'work from home listener India'],
  alternates: { canonical: 'https://leanon.app/become-listener' },
  openGraph: {
    title: 'Earn by Listening — Become a Peer Listener on LeanOn',
    description: 'Help people going through what you survived. Earn ₹8–25/min. 100% of your rate is yours.',
    url: 'https://leanon.app/become-listener',
  },
}

export default function BecomeListenerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
