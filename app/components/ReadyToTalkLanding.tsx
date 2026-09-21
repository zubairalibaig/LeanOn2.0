import type { ReactNode } from 'react'

export type ReadyToTalkLandingData = {
  canonical: string
  title: string
  description: string
  keywords: string[]
  eyebrow: string
  h1: string
  intro: string
  problemTitle: string
  problem: string[]
  humanTitle: string
  human: string[]
  whyTitle: string
  why: string[]
  fitTitle: string
  fit: string[]
  faq: Array<{ q: string; a: string }>
  related: Array<{ href: string; label: string }>
}

export default function ReadyToTalkLanding({ data }: { data: ReadyToTalkLandingData }) {
  const url = `https://www.leanon.app${data.canonical}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: data.title,
        description: data.description,
        isPartOf: { '@id': 'https://www.leanon.app/#website' },
        about: { '@type': 'Service', name: 'LeanOn peer support', serviceType: 'Peer support' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
          { '@type': 'ListItem', position: 2, name: data.h1, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white text-[#0F4867]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <nav className="mb-10 flex items-center justify-between" aria-label="Primary">
          <a href="/" className="text-2xl font-black tracking-tight">Lean<span className="text-[#1A8FA0]">On</span></a>
          <a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">{data.eyebrow}</p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">{data.h1}</h1>
          <p className="mb-8 text-lg leading-8 text-slate-600 sm:text-xl">{data.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/browse" className="rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Browse listeners →</a>
            <a href="/trust" className="rounded-full border-2 border-[#1A8FA0] px-6 py-3 font-extrabold text-[#1A8FA0]">How LeanOn handles trust</a>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500">Start with one free 5-minute introduction. Continue with paid time only if you want to.</p>
        </header>

        <section className="mt-12 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">{data.problemTitle}</h2>
          <div className="space-y-4">{data.problem.map((p, i) => <p key={i} className="leading-7 text-slate-600">{p}</p>)}</div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">{data.humanTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.human.map((p, i) => <article key={i} className="rounded-2xl bg-[#F8FBFC] p-5"><h3 className="font-black">{p.split(' — ')[0]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{p.includes(' — ') ? p.split(' — ').slice(1).join(' — ') : ''}</p></article>)}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9">
          <h2 className="mb-5 text-2xl font-black">{data.whyTitle}</h2>
          <div className="space-y-4">{data.why.map((p, i) => <p key={i} className="leading-7 text-white/85">{p}</p>)}</div>
        </section>

        <section className="mt-8 rounded-3xl border border-[#D5EEF6] p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">A simple path from needing support to talking</h2>
          <ol className="space-y-5">
            <li><strong>1. Find a relevant listener.</strong><br /><span className="text-slate-600">Browse profiles and look for lived experience, topics and availability that fit what you want to discuss.</span></li>
            <li><strong>2. Start with ₹0.</strong><br /><span className="text-slate-600">Your first 5-minute introductory session with a new listener is free. You can use it to see whether the conversation feels right.</span></li>
            <li><strong>3. Continue only if you want to.</strong><br /><span className="text-slate-600">If you want more time, the paid session price is shown before you start. Paid sessions currently start at ₹160 for 15 minutes.</span></li>
            <li><strong>4. Choose text or voice.</strong><br /><span className="text-slate-600">Use the format that makes it easier for you to have the conversation privately.</span></li>
          </ol>
          <a href="/browse" className="mt-7 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Find a listener →</a>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">{data.fitTitle}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">{data.fit.map((x, i) => <li key={i} className="rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-600">{x}</li>)}</ul>
        </section>

        <section className="mt-8 rounded-3xl bg-[#F0F8FC] p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">Why not just use AI?</h2>
          <p className="leading-7 text-slate-600">AI assistants can be useful for information, reflection, brainstorming and conversation. LeanOn serves a different need: a conversation with another human being. If what you want is to be heard by a person rather than receive another generated response, that distinction matters.</p>
          <a href="/ai-human-support" className="mt-5 inline-flex rounded-full border-2 border-[#1A8FA0] px-6 py-3 font-extrabold text-[#1A8FA0]">Human support vs AI →</a>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-black">Questions people ask before starting</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">
            {data.faq.map(f => <details key={f.q} className="py-4"><summary className="cursor-pointer font-extrabold">{f.q}</summary><p className="pt-3 leading-7 text-slate-600">{f.a}</p></details>)}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-center text-white sm:p-9">
          <h2 className="mb-3 text-2xl font-black">Ready to talk?</h2>
          <p className="mb-6 text-white/80">You do not have to decide whether you need long-term support. Start with one short human conversation and decide what you want next.</p>
          <a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Browse listeners →</a>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-black">Explore related LeanOn pages</h2>
          <div className="flex flex-wrap gap-3">{data.related.map(r => <a key={r.href} href={r.href} className="rounded-full bg-[#F0F8FC] px-4 py-2 text-sm font-bold">{r.label}</a>)}</div>
        </section>

        <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, use an appropriate local emergency or crisis service.</p>
      </div>
    </main>
  )
}
