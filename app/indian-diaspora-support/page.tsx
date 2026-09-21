import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indian Diaspora Support Abroad — Talk to a Real Person | LeanOn',
  description: 'Indian or South Asian living abroad and need someone to talk to? LeanOn connects you with real peer listeners for private text or voice conversations.',
  keywords: ['Indian diaspora emotional support', 'Indian NRI someone to talk to', 'Indian expat loneliness', 'Indian emotional support abroad', 'South Asian peer support abroad', 'Indian homesickness support', 'talk to someone abroad', 'paid peer support for Indians abroad', 'online emotional support for Indians abroad', 'Indian emotional support USA', 'Indian emotional support UK', 'Indian emotional support Canada', 'Indian emotional support Australia', 'Indian emotional support UAE', 'talk to a real person abroad'],
  alternates: { canonical: 'https://www.leanon.app/indian-diaspora-support' },
  openGraph: { title: 'Indian Diaspora Support — Talk to a Real Person | LeanOn', description: 'A private place for Indians and South Asians abroad to talk with a real peer listener.', url: 'https://www.leanon.app/indian-diaspora-support', siteName: 'LeanOn', type: 'website' },
}

const markets = [
  ['USA', '/usa', 'Homesickness, family distance, work and immigration pressure'],
  ['UK', '/uk', 'British-Indian identity, relationships and family expectations'],
  ['Canada', '/canada', 'Immigration, study, work, homesickness and adjustment'],
  ['Australia', '/australia', 'Study, work, homesickness and cultural adjustment'],
  ['UAE', '/uae', 'Expatriate life, work pressure and family back home'],
  ['Oman', '/oman', 'Expatriate work life, homesickness and relationships'],
  ['Kuwait', '/kuwait', 'Shift work, family distance and relationship pressure'],
  ['Singapore', '/singapore', 'Work intensity, relocation and relationships'],
  ['Malaysia', '/malaysia', 'Family expectations, work and cultural connection'],
]

const faqs = [
  { q: 'What is LeanOn for Indians living abroad?', a: 'LeanOn is a peer-support platform where Indians and South Asians abroad can talk one-to-one with real human listeners by text or voice. It is designed for human connection and everyday emotional support, not therapy.' },
  { q: 'What can an NRI talk about with a peer listener?', a: 'Homesickness, family distance, cultural adjustment, relationship or marriage pressure, work or study stress, loneliness and difficult days are all reasonable peer-support topics.' },
  { q: 'Can I talk to a real person instead of ChatGPT?', a: 'Yes. AI assistants can be useful for information and reflection. LeanOn is for the different need: a conversation with another human being who can listen.' },
  { q: 'Can I try LeanOn before paying?', a: 'New seekers can start with one free 5-minute introductory session. If you continue, the listener rate is shown before the paid session starts.' },
  { q: 'Is LeanOn therapy or counselling?', a: 'No. LeanOn is peer support and human connection, not therapy, counselling, diagnosis or clinical treatment.' },
]

export default function IndianDiasporaSupportPage() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: metadata.title, description: metadata.description, url: 'https://www.leanon.app/indian-diaspora-support' },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'ItemList', name: 'LeanOn Indian diaspora country pages', itemListElement: markets.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, url: `https://www.leanon.app${href}` })) },
  ] }
  return <main className="min-h-screen bg-white text-[#0F4867]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
      <nav className="mb-12 flex items-center justify-between"><a href="/" className="text-2xl font-black">Lean<span className="text-[#1A8FA0]">On</span></a><a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a></nav>
      <header className="max-w-3xl"><p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">Indian diaspora · NRI support</p><h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Living abroad and need someone who <span className="text-[#FF9933]">gets it</span>?</h1><p className="mb-8 text-lg leading-8 text-slate-600">Being far from India can change who you call when something is weighing on you. LeanOn gives Indians and South Asians abroad a private place to talk with a real peer listener about homesickness, relationships, family, work, cultural adjustment or simply a difficult day.</p><a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Talk to a real person →</a></header>
      <section className="mt-12 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8"><h2 className="mb-4 text-2xl font-black">You do not need a diagnosis to want a conversation.</h2><p className="leading-7 text-slate-600">Many people abroad have friends, colleagues and family — but still have no one they want to tell the whole story to. Peer support is a place for the conversation itself. You choose the listener and the topic; the goal is to be heard rather than assessed.</p></section>
      <section className="mt-8"><h2 className="mb-5 text-2xl font-black">Find the page for your country</h2><div className="grid gap-4 md:grid-cols-3">{markets.map(([name, href, text]) => <a key={href} href={href} className="rounded-3xl border border-slate-200 p-5 transition hover:border-[#1A8FA0]"><h3 className="text-lg font-black">Indian support in {name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p><span className="mt-4 inline-block text-sm font-extrabold text-[#1A8FA0]">Explore →</span></a>)}</div></section>
      <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8"><h2 className="mb-4 text-2xl font-black">Looking for a real person instead of ChatGPT?</h2><p className="mb-5 leading-7 text-slate-600">AI assistants can be useful for information, reflection and brainstorming. If your need is specifically human connection, LeanOn lets you talk with a real peer listener by text or voice.</p><a href="/ai-human-support" className="inline-flex rounded-full border-2 border-[#1A8FA0] px-6 py-3 font-extrabold text-[#1A8FA0]">Human support after AI →</a></section>
      <section className="mt-8 rounded-3xl border border-[#D5EEF6] bg-white p-6 sm:p-8"><h2 className="mb-4 text-2xl font-black">How payment works</h2><p className="leading-7 text-slate-600">You can start with one free 5-minute introductory session with a new listener. If you want to continue, paid session pricing is shown before you start. LeanOn does not require a subscription.</p></section>\n      <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9"><h2 className="mb-3 text-2xl font-black">Start with one free 5-minute conversation.</h2><p className="leading-7 text-white/85">Browse listener profiles, choose someone who feels relevant, and start with the free introduction. Continue only if the connection feels right.</p><a href="/browse" className="mt-6 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Browse listeners →</a></section>
      <section className="mt-10"><h2 className="mb-4 text-2xl font-black">Questions from Indians abroad</h2><div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">{faqs.map(f => <details key={f.q} className="py-4"><summary className="cursor-pointer font-extrabold">{f.q}</summary><p className="pt-3 leading-7 text-slate-600">{f.a}</p></details>)}</div></section>
      <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact an appropriate local emergency or crisis service.</p>
    </div>
  </main>
}
