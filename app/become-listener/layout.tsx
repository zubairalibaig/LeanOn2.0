import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Peer Listener — Earn on LeanOn India',
  description: 'Apply to become a peer listener on LeanOn. Share your lived experience, set your own rate (₹8–25/min), help others who need someone to lean on. Apply free.',
  keywords: ['become a listener leanon', 'peer listener India', 'earn helping others India', 'lean on listener'],
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
