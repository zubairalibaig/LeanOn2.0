import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About LeanOn — Real Human Peer Support | LeanOn',
  description: 'Learn what LeanOn is, why it exists, how peer support works, and where LeanOn is available for people seeking real human connection.',
  alternates: { canonical: 'https://www.leanon.app/about' },
  openGraph: { title: 'About LeanOn — Real Human Peer Support', description: 'LeanOn connects people with real peer listeners for private one-to-one conversations by text or voice.', url: 'https://www.leanon.app/about', siteName: 'LeanOn', type: 'website' },
}

const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Oman', 'Kuwait', 'Singapore', 'Malaysia']

export default function AboutPage() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': 'https://www.leanon.app/#organization', name: 'LeanOn', alternateName: ['Lean On', 'leanon'], url: 'https://www.leanon.app', description: 'A peer-support platform connecting people with real human listeners for private one-to-one conversations by text or voice.', areaServed: countries.map(name => ({ '@type': 'Country', name })) },
    { '@type': 'WebPage', name: metadata.title, description: metadata.description, url: 'https://www.leanon.app/about', about: { '@id': 'https://www.leanon.app/#organization' } },
  ] }
  return <main className="min-h-screen bg-white text-[#0F4867]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
      <nav className="mb-12 flex items-center justify-between"><a href="/" className="text-2xl font-black">Lean<span className="text-[#1A8FA0]">On</span></a><a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a></nav>
      <header className="max-w-3xl"><p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">About LeanOn</p><h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">A place to talk to a <span className="text-[#FF9933]">real person</span>.</h1><p className="text-lg leading-8 text-slate-600">LeanOn is a peer-support platform connecting people who want human connection with real listeners for private one-to-one conversations by text or voice.</p></header>
      <section className="mt-12 grid gap-6 md:grid-cols-3"><article className="rounded-3xl border border-slate-200 p-6"><h2 className="mb-3 text-xl font-black">Human, not AI</h2><p className="leading-7 text-slate-600">LeanOn sessions are conversations with real people. AI assistants can be useful; LeanOn exists for the different need of human-to-human connection.</p></article><article className="rounded-3xl border border-slate-200 p-6"><h2 className="mb-3 text-xl font-black">Peer, not clinical</h2><p className="leading-7 text-slate-600">Listeners provide peer support informed by lived experience. LeanOn is not therapy, counselling, diagnosis or clinical treatment.</p></article><article className="rounded-3xl border border-slate-200 p-6"><h2 className="mb-3 text-xl font-black">Choose your conversation</h2><p className="leading-7 text-slate-600">Seekers browse listener profiles and choose who they want to talk to. Conversations can use text or voice.</p></article></section>
      <section className="mt-8 rounded-3xl bg-[#F0F8FC] p-7 sm:p-9"><h2 className="mb-4 text-2xl font-black">Why LeanOn exists</h2><p className="leading-7 text-slate-600">Sometimes you have friends, family and colleagues and still want a neutral person to hear the whole story. LeanOn is designed for those ordinary moments: loneliness, homesickness, relationship difficulties, work stress, overthinking, grief, family pressure or simply needing to vent.</p><p className="mt-4 leading-7 text-slate-600">The platform began in India and now has dedicated experiences for people in the Indian and South Asian diaspora across the United States, United Kingdom, Canada, Australia, UAE, Oman, Kuwait, Singapore and Malaysia.</p></section>
      <section className="mt-8"><h2 className="mb-5 text-2xl font-black">Current markets</h2><div className="flex flex-wrap gap-2">{countries.map((country, i) => <a key={country} href={`/${['india','usa','uk','canada','australia','uae','oman','kuwait','singapore','malaysia'][i]}`} className="rounded-full border border-[#D5EEF6] bg-[#F0F8FC] px-4 py-2 text-sm font-bold">{country}</a>)}</div></section>
      <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9"><h2 className="mb-3 text-2xl font-black">Start with one free 5-minute introduction.</h2><p className="leading-7 text-white/85">Browse listeners, choose someone who feels relevant, and start talking. Continue only if the conversation feels right.</p><a href="/browse" className="mt-6 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Browse listeners →</a></section>
      <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact an appropriate local emergency or crisis service.</p>
    </div>
  </main>
}
