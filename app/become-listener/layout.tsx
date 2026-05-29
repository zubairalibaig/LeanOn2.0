import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Peer Listener | LeanOn India',
  description: 'Join LeanOn as a peer listener. Support people across India through empathetic conversation. Apply now to become a volunteer peer listener.',
  keywords: ['become a listener leanon', 'peer listener India', 'earn helping others India', 'lean on listener'],
  alternates: { canonical: 'https://www.leanon.app/become-listener', languages: { 'en-IN': 'https://www.leanon.app/become-listener' } },
  openGraph: {
    title: 'Become a Peer Listener | LeanOn India',
    description: 'Join LeanOn as a peer listener. Support people across India through empathetic conversation. Apply now to become a volunteer peer listener.',
    url: 'https://www.leanon.app/become-listener',
  },
}

export default function BecomeListenerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
