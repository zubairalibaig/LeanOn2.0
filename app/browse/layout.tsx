import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browse Peer Listeners | LeanOn — Talk to a Real Person',
  description: 'Browse verified peer listeners in India. Filter by topic, availability, and language. Start with a free 5-minute session — no appointment needed.',
  keywords: [
    'peer listener India', 'talk to a real person online India', 'online emotional support India',
    'someone to talk to India', 'peer support chat India', 'talk to someone when lonely India',
    'someone to lean on India', 'emotional support Bengaluru', 'peer support Mumbai',
    'talk to someone 2am India', 'human listener online India', 'peer support near me India',
    'Indians abroad emotional support', 'NRI talk to someone',
  ],
  alternates: { canonical: 'https://www.leanon.app/browse', languages: { 'en-IN': 'https://www.leanon.app/browse' } },
  openGraph: {
    title: 'Browse Peer Listeners | LeanOn — Talk to a Real Person',
    description: 'Browse verified peer listeners in India. Filter by topic, availability, and language. Start with a free 5-minute session — no appointment needed.',
    url: 'https://www.leanon.app/browse',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LeanOn Peer Listener Directory',
  description: 'Browse and connect with real, verified peer listeners for private one-to-one text or voice conversations on loneliness, burnout, relationships, grief, anxiety, and more.',
  url: 'https://www.leanon.app/browse',
  serviceType: 'Peer emotional support',
  provider: {
    '@type': 'Organization',
    name: 'LeanOn',
    url: 'https://www.leanon.app',
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Malaysia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Peer support sessions',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Free 5-minute introductory session',
        description: 'One free 5-minute session per new account — text or voice, no payment required.',
        price: '0',
        priceCurrency: 'INR',
      },
      {
        '@type': 'Offer',
        name: '15-minute peer support session (India)',
        description: '15-minute text or voice session with a verified peer listener.',
        price: '160',
        priceCurrency: 'INR',
        eligibleRegion: { '@type': 'Country', name: 'India' },
      },
      {
        '@type': 'Offer',
        name: '15-minute peer support session (International)',
        description: '15-minute text or voice session for Indians abroad (NRI).',
        price: '10',
        priceCurrency: 'USD',
        eligibleRegion: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Australia' },
        ],
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Browse Listeners', item: 'https://www.leanon.app/browse' },
  ],
}

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
