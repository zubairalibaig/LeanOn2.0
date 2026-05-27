import type { Metadata, Viewport } from 'next'
import './globals.css'
import BottomNav from './components/BottomNav'
import ToastProvider from './components/ToastProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://leanon.app'),
  title: 'LeanOn — Peer Support App India | Talk to Someone Who Gets It',
  description: 'Connect with verified peer listeners in India who have lived through what you\'re facing — loneliness, burnout, grief, relationships, startup stress. Instant, affordable, private. First 5 minutes free.',
  manifest: '/manifest.json',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  keywords: [
    'peer support India', 'emotional support app India', 'talk to someone online India',
    'mental health support India', 'mental health app India', 'online therapy alternative India',
    'online listener India', 'emotional wellness app', 'talk to a friend online India',
    'LeanOn', 'lean on app', 'lean on India', 'someone to talk to India',
    'loneliness support India', 'anxiety support India', 'grief support India',
    'burnout help India', 'breakup support India', 'peer counselling India',
    'mental health chat India', 'free mental health support India',
    'emotional support chat', 'friendship app India', 'online support group India',
  ],
  authors: [{ name: 'LeanOn' }],
  creator: 'LeanOn',
  publisher: 'LeanOn',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'LeanOn — Someone to lean on, anytime',
    description: 'Talk to real people who have been through what you\'re going through. Peer listeners available 24/7 in India. Start free.',
    url: 'https://leanon.app',
    siteName: 'LeanOn',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://leanon.app/logo.png', width: 512, height: 512, alt: 'LeanOn' }],
  },
  twitter: {
    card: 'summary',
    title: 'LeanOn — Peer Support App India',
    description: 'Talk to real people who have been through what you\'re going through. First 5 minutes free.',
    images: ['https://leanon.app/logo.png'],
  },
  alternates: { canonical: 'https://leanon.app' },
}

export const viewport: Viewport = {
  themeColor: '#0F4867',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://leanon.app/#organization',
      name: 'LeanOn',
      url: 'https://leanon.app',
      logo: 'https://leanon.app/logo.png',
      description: 'Peer support platform connecting people in India with verified peer listeners for emotional support, available 24/7.',
      foundingLocation: 'Bengaluru, India',
      areaServed: 'IN',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://leanon.app/#website',
      url: 'https://leanon.app',
      name: 'LeanOn',
      publisher: { '@id': 'https://leanon.app/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'LeanOn',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: 'First 5 minutes free' },
      description: 'Peer emotional support platform for India. Talk to verified listeners who have lived through your experience.',
    },
  ],
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics — set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX in Vercel */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','${GA_ID}',{page_path:window.location.pathname});
            `}} />
          </>
        )}
        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Bing Webmaster Tools — set NEXT_PUBLIC_BING_VERIFICATION in Vercel */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <BottomNav />
        <ToastProvider />
      </body>
    </html>
  )
}
