import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find a Peer Listener in India — Affordable Emotional Support | LeanOn',
  description: 'Browse verified peer listeners in India available right now. Filter by topic, language, and availability. Affordable from ₹165. Talk to someone who truly understands — instantly, privately. First 5 minutes free.',
  keywords: [
    'peer listener India', 'online emotional support India', 'talk to someone India',
    'peer support chat India', 'mental wellness listener', 'affordable peer listener India',
    'someone to lean on India', 'emotional support Bengaluru', 'peer support Mumbai',
    'talk to someone 2am India', 'peer support near me India',
  ],
  alternates: { canonical: 'https://leanon.app/browse' },
  openGraph: {
    title: 'Find an Affordable Peer Listener in India — LeanOn',
    description: 'Browse verified peer listeners available now across India. Filter by topic, language. Affordable from ₹165. First 5 min free.',
    url: 'https://leanon.app/browse',
  },
}

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
