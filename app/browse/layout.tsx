import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browse Peer Listeners | LeanOn India',
  description: 'Find the right peer listener for you. Filter by topic, availability, and more. All listeners are trained volunteers. Available 24/7.',
  keywords: [
    'peer listener India', 'online emotional support India', 'talk to someone India',
    'peer support chat India', 'mental wellness listener', 'affordable peer listener India',
    'someone to lean on India', 'emotional support Bengaluru', 'peer support Mumbai',
    'talk to someone 2am India', 'peer support near me India',
  ],
  alternates: { canonical: 'https://www.leanon.app/browse', languages: { 'en-IN': 'https://www.leanon.app/browse' } },
  openGraph: {
    title: 'Browse Peer Listeners | LeanOn India',
    description: 'Find the right peer listener for you. Filter by topic, availability, and more. All listeners are trained volunteers. Available 24/7.',
    url: 'https://www.leanon.app/browse',
  },
}

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
