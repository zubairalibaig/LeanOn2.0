import type { Metadata } from 'next'
import { createCacheableAdminClient } from '@/lib/supabase-server'
import ListenerClient from './ListenerClient'

// ISR: cache the server-rendered SEO shell (name/bio/rating/JSON-LD) and serve
// it from cache for 60s instead of re-rendering — and re-querying the DB twice
// (generateMetadata + the page) — on every crawler and repeat visitor hit.
// This is a public, crawlable page, so those hits were pure Fluid Active CPU.
// SAFE because everything live — availability, the booking bar, "not found"
// after a ban — lives in the client <ListenerClient/>, which always fetches
// fresh. Only the slowly-changing profile text is cached, at most 60s stale.
export const revalidate = 60

type Props = { params: { id: string } }

// SEO enrichment must never 500 the profile page — degrade to defaults on any failure
async function fetchProfile(id: string) {
  try {
    // Cacheable read (matches the route's revalidate) — this is public SEO data,
    // not freshness-critical state, so it must not force per-request rendering.
    const sb = createCacheableAdminClient(60)
    const { data } = await sb
      .from('listener_profiles')
      .select('bio, rating, total_sessions, specialty_tags, is_verified, users!inner(name)')
      .eq('user_id', id)
      .single()
    return data
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchProfile(params.id)

  if (!data) {
    return { title: 'Listener — LeanOn', description: 'Peer support listener on LeanOn.' }
  }

  const usersData = data.users as { name: string } | { name: string }[] | null
  const name = (Array.isArray(usersData) ? usersData[0]?.name : usersData?.name) || 'Listener'
  const tags = ((data.specialty_tags as string[]) || []).slice(0, 3).join(', ')
  const verified = (data as { is_verified?: boolean }).is_verified === true
  const title = verified
    ? `${name} — Verified Peer Listener on LeanOn India`
    : `${name} — Peer Listener on LeanOn India`
  const description = data.bio
    ? `Talk to ${name} on LeanOn — ${data.bio.slice(0, 130)}… First 5 minutes free.`
    : `Talk to ${name}, a verified peer listener on LeanOn India. ${tags ? `Specialises in: ${tags}.` : ''} Affordable peer support. First 5 minutes free.`

  return {
    title,
    description,
    keywords: [name, 'peer listener India', 'leanon', tags, 'emotional support India', 'peer support'].filter(Boolean),
    openGraph: {
      title,
      description,
      url: `https://www.leanon.app/listener/${params.id}`,
      siteName: 'LeanOn',
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: { canonical: `https://www.leanon.app/listener/${params.id}` },
  }
}

export default async function ListenerPage({ params }: Props) {
  const data = await fetchProfile(params.id)

  const usersData = data?.users as { name: string } | { name: string }[] | null
  const name = (Array.isArray(usersData) ? usersData[0]?.name : usersData?.name) || 'Listener'
  const tags = ((data?.specialty_tags as string[]) || [])

  const personSchema = data ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: 'Verified Peer Listener',
    worksFor: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
    knowsAbout: tags,
    url: `https://www.leanon.app/listener/${params.id}`,
    description: data.bio || `Verified peer listener on LeanOn. Specialises in: ${tags.join(', ')}.`,
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
      { '@type': 'ListItem', position: 2, name: 'Browse Listeners', item: 'https://www.leanon.app/browse' },
      { '@type': 'ListItem', position: 3, name: name, item: `https://www.leanon.app/listener/${params.id}` },
    ],
  }

  return (
    <>
      {personSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ListenerClient id={params.id} />
    </>
  )
}
