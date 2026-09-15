'use client'

import type { CountrySeoData } from '@/lib/country-seo'

const COUNTRY_LINKS = [
  ['USA', '/usa'], ['UK', '/uk'], ['Canada', '/canada'], ['Australia', '/australia'],
  ['UAE', '/uae'], ['Oman', '/oman'], ['Kuwait', '/kuwait'], ['Singapore', '/singapore'], ['Malaysia', '/malaysia'],
]

export default function CountrySeoPage({ data }: { data: CountrySeoData }) {
  const pageUrl = `https://www.leanon.app/${data.slug}`
  const aiPage = `/ai-chatbot-alternative-${data.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: data.title, description: data.description,
        inLanguage: 'en', isPartOf: { '@id': 'https://www.leanon.app/#website' },
        about: { '@type': 'Service', name: `LeanOn peer support in ${data.country}`, serviceType: 'Peer Emotional Support', areaServed: { '@type': 'Country', name: data.country },
        },
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
        { '@type': 'ListItem', position: 2, name: `Peer Support ${data.country}`, item: pageUrl },
      ] },
      { '@type': 'FAQPage', mainEntity: data.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    ],
  }

  return (
    <main className="min-h-screen bg-white text-[#0F4867]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
        <nav className="mb-8 flex items-center justify-between" aria-label="Primary">
          <a href="/" className="text-2xl font-black tracking-tight">Lean<span className="text-[#1A8FA0]">On</span></a>
          <a href="/auth" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Open LeanOn</a>
        </nav>

        <div className="mb-5 text-sm font-bold text-[#1A8FA0]">{data.eyebrow}</div>
        <h1 className="mb-5 text-3xl font-black leading-tight sm:text-5xl">{data.title}</h1>
        <p className="mb-7 text-lg leading-8 text-slate-600">{data.intro}</p>
        <a href="/browse" className="mb-10 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Find someone to talk to →</a>

        <section className="mb-8 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-black">Built for real life in {data.country}</h2>
          <p className="leading-7 text-slate-600">{data.localAngle}</p>
        </section>

        <section className="mb-8"><h2 className="mb-4 text-2xl font-black">What can you talk about?</h2><ul className="grid gap-3 sm:grid-cols-2">{data.situations.map(item => <li key={item} className="rounded-2xl border border-slate-200 p-4 text-slate-700">{item}</li>)}</ul></section>

        <section className="mb-8 rounded-3xl bg-[#0F4867] p-6 text-white sm:p-8"><h2 className="mb-4 text-2xl font-black">How LeanOn works</h2><ol className="space-y-3 text-white/90">{data.howItWorks.map((item, i) => <li key={item}><span className="mr-2 font-black text-[#FF9933]">{i + 1}.</span>{item}</li>)}</ol><a href="/browse" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-extrabold text-[#0F4867]">Browse listeners →</a></section>

        <section className="mb-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-3 text-2xl font-black">Want a real person instead of an AI conversation?</h2>
          <p className="mb-5 leading-7 text-slate-600">If you found LeanOn while looking for a ChatGPT or AI companion alternative, this page explains the difference between an AI conversation and a human peer conversation.</p>
          <a href={aiPage} className="inline-flex rounded-full border-2 border-[#1A8FA0] px-6 py-3 font-extrabold text-[#1A8FA0]">Human vs AI in {data.country} →</a>
          <a href="/nri-support" className="ml-3 inline-flex rounded-full border-2 border-slate-200 px-6 py-3 font-extrabold text-slate-600">Indian diaspora support →</a>
        </section>

        <section className="mb-8"><h2 className="mb-4 text-2xl font-black">Questions about peer support</h2><div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">{data.faqs.map(faq => <details key={faq.q} className="py-4"><summary className="cursor-pointer font-extrabold">{faq.q}</summary><p className="pt-3 leading-7 text-slate-600">{faq.a}</p></details>)}</div></section>

        <section className="mb-8 rounded-3xl bg-[#F0F8FC] p-6"><h2 className="mb-4 text-xl font-black">Other Indian diaspora markets</h2><div className="flex flex-wrap gap-2">{COUNTRY_LINKS.filter(([name]) => name.toLowerCase() !== data.country.toLowerCase()).map(([name, href]) => <a key={href} href={href} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0F4867] ring-1 ring-[#D5EEF6]">{name}</a>)}</div></section>

        <section className="rounded-3xl bg-[#F0F8FC] p-6 text-center sm:p-8"><h2 className="mb-2 text-2xl font-black">Sometimes you just need someone who listens.</h2><p className="mb-5 text-slate-600">Start with one free 5-minute introductory session and see whether the connection feels right.</p><a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Talk to someone →</a></section>

        <p className="mt-8 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact the appropriate emergency or crisis service where you are.</p>
      </div>
    </main>
  )
}
