import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — LeanOn Peer Support',
  description: "Get in touch with the LeanOn team. Questions about peer support, your account, or becoming a listener — we're here to help.",
  keywords: ['contact leanon', 'leanon support', 'leanon help'],
  alternates: { canonical: 'https://www.leanon.app/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
