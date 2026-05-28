import type { Metadata, Viewport } from 'next'
import './globals.css'
import BottomNav from './components/BottomNav'
import ToastProvider from './components/ToastProvider'
import ErrorBoundary from './components/ErrorBoundary'
import FloatingCTA from './components/FloatingCTA'

export const metadata: Metadata = {
  metadataBase: new URL('https://leanon.app'),
  title: {
    default: 'LeanOn — Someone to Lean On, Anytime | Peer Support India',
    template: '%s | LeanOn',
  },
  description: 'Need someone to lean on? LeanOn connects you with real peer listeners in India who have lived through what you\'re facing — loneliness, burnout, grief, relationships, anxiety, startup stress. Instant, affordable, private. First 5 minutes free.',
  manifest: '/manifest.json',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  keywords: [
    'lean on', 'leanon', 'lean on app', 'lean on India', 'LeanOn',
    'peer support India', 'emotional support app India', 'talk to someone online India',
    'mental health support India', 'mental health app India', 'online therapy alternative India',
    'someone to lean on', 'need someone to talk to India', 'peer listener India',
    'online listener India', 'emotional wellness app', 'talk to a friend online India',
    'loneliness support India', 'anxiety support India', 'grief support India',
    'burnout help India', 'breakup support India', 'peer counselling India',
    'mental health chat India', 'free mental health support India',
    'emotional support chat', 'friendship app India', 'online support group India',
  ],
  authors: [{ name: 'LeanOn' }],
  creator: 'LeanOn',
  publisher: 'LeanOn',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  openGraph: {
    title: 'LeanOn — Someone to Lean On, Anytime',
    description: 'Need someone to lean on? Talk to real people in India who have been through what you\'re going through. Peer support available 24/7. First 5 minutes free.',
    url: 'https://leanon.app',
    siteName: 'LeanOn',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://leanon.app/logo.png', width: 512, height: 512, alt: 'LeanOn — Peer Support India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeanOn — Someone to Lean On, Anytime | Peer Support India',
    description: 'Need someone to lean on? Talk to real peer listeners in India. First 5 minutes free. Available 24/7.',
    images: ['https://leanon.app/logo.png'],
  },
  alternates: { canonical: 'https://leanon.app' },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  },
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
      alternateName: ['Lean On', 'leanon', 'LeanOn App'],
      url: 'https://leanon.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://leanon.app/logo.png',
        width: 512,
        height: 512,
      },
      description: 'LeanOn is a peer support platform — someone to lean on anytime. We connect people in India with verified peer listeners who have lived through loneliness, burnout, grief, anxiety, and more. Available 24/7.',
      foundingLocation: 'Bengaluru, India',
      areaServed: { '@type': 'Country', name: 'India' },
      sameAs: [
        'https://www.instagram.com/leanon.app',
        'https://twitter.com/leanonapp',
        'https://www.linkedin.com/company/leanon-app',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://leanon.app/#website',
      url: 'https://leanon.app',
      name: 'LeanOn',
      alternateName: 'Lean On',
      publisher: { '@id': 'https://leanon.app/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://leanon.app/browse?query={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'LeanOn',
      alternateName: 'Lean On',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: 'First 5-minute session is completely free',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '120',
        bestRating: '5',
      },
      description: 'LeanOn — someone to lean on anytime. Peer emotional support platform for India. Talk to verified listeners who have lived through what you are facing.',
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
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <BottomNav />
        <FloatingCTA />
        <ToastProvider />
      </body>
    </html>
  )
}
