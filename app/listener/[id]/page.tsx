import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase-server'
import ListenerClient from './ListenerClient'

type Props = { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sb = createAdminClient()
  const { data } = await sb
    .from('listener_profiles')
    .select('bio, rating, total_sessions, specialty_tags, users!inner(name)')
    .eq('user_id', params.id)
    .single()

  if (!data) {
    return { title: 'Listener — LeanOn', description: 'Peer support listener on LeanOn.' }
  }

  const usersData = data.users as { name: string } | { name: string }[] | null
  const name = (Array.isArray(usersData) ? usersData[0]?.name : usersData?.name) || 'Listener'
  const tags = ((data.specialty_tags as string[]) || []).slice(0, 3).join(', ')
  const title = `${name} — Verified Peer Listener on LeanOn India`
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
  const sb = createAdminClient()
  const { data } = await sb
    .from('listener_profiles')
    .select('bio, rating, total_sessions, specialty_tags, users!inner(name)')
    .eq('user_id', params.id)
    .single()

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
