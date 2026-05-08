import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'LeanOn — Someone to lean on, anytime',
  description: 'Talk to real people who have been through what you\'re going through. Peer listeners available now.',
  manifest: '/manifest.json',
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
  openGraph: {
    title: 'LeanOn',
    description: 'Someone to lean on, anytime.',
    url: 'https://leanon.app',
    siteName: 'LeanOn',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1E3D5C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="font-body bg-cream text-navy antialiased">
        {children}
      </body>
    </html>
  )
}

