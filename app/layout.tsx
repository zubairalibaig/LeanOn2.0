import type { Metadata, Viewport } from 'next'
import './globals.css'
import BottomNav from './components/BottomNav'
import ToastProvider from './components/ToastProvider'
import ErrorBoundary from './components/ErrorBoundary'
import FloatingCTA from './components/FloatingCTA'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leanon.app'),
  title: {
    default: 'LeanOn — Peer Emotional Support, India',
    template: '%s | LeanOn — Peer Support India',
  },
  description: "Talk to a trained peer listener, anonymously. Free first session. India's peer support platform — available 24/7.",
  manifest: '/manifest.json',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  keywords: [
    'leanon', 'lean on', 'peer support India', 'emotional support India', 'talk to someone India',
    'mental health India', 'anonymous support', 'online listener India', 'mental health chat India',
    'lean on app', 'lean on India', 'LeanOn',
    'peer listener India', 'emotional wellness app', 'talk to a friend online India',
    'loneliness support India', 'anxiety support India', 'grief support India',
    'burnout help India', 'peer emotional support India', 'free emotional support India',
    'emotional support chat', 'online support group India',
  ],
  authors: [{ name: 'LeanOn' }],
  creator: 'LeanOn',
  publisher: 'LeanOn',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://www.leanon.app', languages: { 'en-IN': 'https://www.leanon.app' } },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'LeanOn',
    title: 'LeanOn — Peer Emotional Support, India',
    description: "Talk to a trained peer listener, anonymously. Free first session.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LeanOn — Peer Support India' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leanonapp',
    title: 'LeanOn — Peer Emotional Support, India',
    description: "Talk to a trained peer listener, anonymously. Free first session.",
    images: ['/og-image.png'],
  },
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
      '@type': ['WebApplication', 'Organization'],
      '@id': 'https://www.leanon.app/#organization',
      name: 'LeanOn',
      alternateName: ['Lean On', 'leanon', 'LeanOn App'],
      url: 'https://www.leanon.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.leanon.app/logo.png',
        width: 512,
        height: 512,
      },
      description: "LeanOn is India's peer emotional support platform. Real humans with lived experience, available 24/7.",
      disambiguatingDescription: 'LeanOn (one word) is an Indian peer emotional support web platform at leanon.app — not related to the 2015 song "Lean On" by Major Lazer and DJ Snake.',
      knowsAbout: [
        'peer support', 'emotional support', 'loneliness', 'anxiety', 'burnout',
        'grief support', 'mental health India', 'active listening', 'breakup support',
        'student stress', 'family pressure India', 'alternatives to therapy India',
      ],
      foundingDate: '2024',
      foundingLocation: { '@type': 'Place', name: 'India' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Peer Emotional Support',
      slogan: 'You are not alone.',
      sameAs: [
        'https://www.instagram.com/leanonapp',
        'https://twitter.com/leanonapp',
        'https://www.linkedin.com/company/leanonapp',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.leanon.app/#website',
      url: 'https://www.leanon.app',
      name: 'LeanOn',
      alternateName: 'Lean On',
      publisher: { '@id': 'https://www.leanon.app/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.leanon.app/browse?q={search_term_string}',
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

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "HealthAndBeautyBusiness"],
  "name": "LeanOn",
  "url": "https://www.leanon.app",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "description": "LeanOn is India's peer emotional support platform. Talk to trained active listeners — not AI, not therapists — real humans with lived experience.",
  "serviceType": "Peer Emotional Support",
  "audience": { "@type": "Audience", "audienceType": "Adults in India experiencing loneliness, anxiety, grief, burnout, or relationship stress" },
  "areaServed": { "@type": "Country", "name": "India" },
  "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "0", "description": "First 5 minutes free" }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <meta name="theme-color" content="#1A8FA0" />
        {/* India geo-targeting signals */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="distribution" content="IN" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LeanOn" />
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
        <Analytics />
      </body>
    </html>
  )
}
