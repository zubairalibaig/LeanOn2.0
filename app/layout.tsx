import type { Metadata, Viewport } from 'next'
import './globals.css'
import BottomNav from './components/BottomNav'

export const metadata: Metadata = {
  title: 'LeanOn — Someone to lean on, anytime',
  description: "Talk to real people who have been through what you're going through. Peer listeners available 24/7. Start free.",
  manifest: '/manifest.json',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'LeanOn',
    description: 'Someone to lean on, anytime.',
    url: 'https://leanon.app',
    siteName: 'LeanOn',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F4867',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
