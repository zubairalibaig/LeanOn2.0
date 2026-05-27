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
  const title = `${name} — Peer Listener on LeanOn`
  const description = data.bio
    ? `${data.bio.slice(0, 155)}…`
    : `Talk to ${name}, a verified peer listener on LeanOn India. ${tags ? `Specialises in: ${tags}.` : ''} First 5 minutes free.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://leanon.app/listener/${params.id}`,
      siteName: 'LeanOn',
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: { canonical: `https://leanon.app/listener/${params.id}` },
  }
}

export default function ListenerPage({ params }: Props) {
  return <ListenerClient id={params.id} />
}
