import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find a Peer Listener — LeanOn | Emotional Support India',
  description: 'Browse verified peer listeners in India available right now. Filter by topic, language, and availability. Talk to someone who truly understands — instantly, affordably, privately.',
  keywords: ['peer listener India', 'online emotional support India', 'talk to someone India', 'peer support chat India', 'mental wellness listener'],
  alternates: { canonical: 'https://leanon.app/browse' },
  openGraph: {
    title: 'Find a Peer Listener — LeanOn',
    description: 'Browse verified peer listeners available now. Filter by language, topic, availability.',
    url: 'https://leanon.app/browse',
  },
}

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
