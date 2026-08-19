import type { Metadata, Viewport } from 'next'
import './globals.css'
import BottomNav from './components/BottomNav'
import ToastProvider from './components/ToastProvider'
import ErrorBoundary from './components/ErrorBoundary'
import FloatingCTA from './components/FloatingCTA'
import ListenerPresence from './components/ListenerPresence'
// TEMPORARY — see app/components/MaintenanceBanner.tsx for how to remove.
import MaintenanceBanner from './components/MaintenanceBanner'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leanon.app'),
  title: {
    default: 'LeanOn — Peer Emotional Support, India',
    template: '%s | LeanOn — Peer Support India',
  },
  description: "Talk to a verified peer listener in India, anonymously and without judgment. First session is free. Available 24/7 in 12 Indian languages — for loneliness, anxiety, burnout, grief, and more.",
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
    'empathy', 'empathetic listener India', 'empathetic support India', 'compassionate listener India',
    'peer counselling India', 'peer counsellor India', 'active listening India',
    'affordable online counselling India', 'online counselling alternative India',
    'cheaper than therapy India', 'talk to someone online paid India',
    'book emotional support session India', 'online listener India price',
    // Seeker-intent (Round 4) — acute need + price-comparison searches. These
    // reach people looking for support to USE, not people looking to earn.
    'talk to someone right now', 'need someone to talk to now India',
    'no one to talk to', 'how to stop overthinking at night',
    'online counselling cost India', 'therapy cost India',
    'lonely in marriage India', 'job loss depression India',
    'urgent emotional support India', 'someone to listen to me India',
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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leanonapp',
    title: 'LeanOn — Peer Emotional Support, India',
    description: "Talk to a trained peer listener, anonymously. Free first session.",
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
        'empathy', 'empathetic listening', 'peer counselling India', 'compassionate support',
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.leanon.app/#service",
  "name": "Peer Emotional Support Session",
  "serviceType": "Peer Emotional Support",
  "alternateName": ["Peer Support Session", "Online Listener Session", "Emotional Support Chat"],
  "provider": {
    "@type": "Organization",
    "@id": "https://www.leanon.app/#organization",
    "name": "LeanOn"
  },
  "description": "One-on-one text or voice session with a verified peer listener in India. Listeners have lived experience of loneliness, anxiety, burnout, grief, breakups, career stress, and family pressure. Not therapy — human peer support available 24/7.",
  "category": "Mental Health Support",
  "areaServed": { "@type": "Country", "name": "India", "sameAs": "https://www.wikidata.org/wiki/Q668" },
  "availableLanguage": [
    "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam",
    "Marathi", "Bengali", "Gujarati", "Punjabi", "Odia", "Urdu"
  ],
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Trial Session",
      "price": "0",
      "priceCurrency": "INR",
      "description": "First 5-minute session is completely free — up to 3 free sessions per user, one per listener. No credit card required.",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": { "@type": "Country", "name": "India" }
    },
    {
      // AggregateOffer with lowPrice/highPrice — NOT `priceRange`, which is only
      // valid on LocalBusiness/Organization and is silently ignored on an Offer.
      // While it was used here Google could parse only the free trial's price:"0",
      // so LeanOn's paid pricing was invisible in search and the platform read as
      // free-only. Range = a real session: 15 min at the ₹8/min floor + ₹10
      // platform fee = ₹130; 45 min at the ₹25/min ceiling + ₹10 = ₹1135.
      "@type": "AggregateOffer",
      "name": "Paid Peer Support Session",
      "description": "15, 30, or 45-minute sessions at listener-set rates of ₹8–25 per minute, plus a flat ₹10 platform fee. Unused time fully refunded.",
      "priceCurrency": "INR",
      "lowPrice": "130",
      "highPrice": "1135",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": { "@type": "Country", "name": "India" }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
        {/* TEMPORARY — renders first so it sits above every page's own
            content/nav without needing any per-page changes. Remove per the
            instructions at the top of MaintenanceBanner.tsx. */}
        <MaintenanceBanner />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <BottomNav />
        <FloatingCTA />
        {/* Listener-only: offline nudge + incoming-request alert on every page.
            No-ops instantly for anonymous visitors and non-listeners, and skips
            /dashboard, /browse, /session, /auth and /admin (which handle their
            own, or must not be interrupted). */}
        <ListenerPresence />
        <ToastProvider />
        <Analytics />
      </body>
    </html>
  )
}
