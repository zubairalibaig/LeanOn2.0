import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Therapy vs Peer Support: Do I Need Therapy or Someone to Talk To? | LeanOn',
  description: 'Not sure whether you need therapy or simply someone to talk to? Learn the difference between therapy, counselling, peer support and everyday emotional support, and where LeanOn fits.',
  keywords: [
    'do I need therapy or someone to talk to',
    'therapy vs peer support',
    'counselling vs peer support',
    'someone to talk to instead of therapy',
    'affordable alternative to therapy',
    'what if I don\'t want therapy but need support',
    'peer support instead of therapy india',
    'everyday emotional support',
  ],
  alternates: { canonical: 'https://www.leanon.app/alternatives-to-therapy-india' },
  openGraph: {
    title: 'Therapy vs Peer Support: Do I Need Therapy or Someone to Talk To? | LeanOn',
    description: 'A practical guide to the difference between clinical care and everyday human support. LeanOn is peer support, not therapy.',
    url: 'https://www.leanon.app/alternatives-to-therapy-india',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqs = [
  ['Do I need therapy or someone to talk to?', 'It depends on what you are looking for. If you want diagnosis, assessment or treatment for a mental-health condition, speak with a qualified mental-health professional. If you mainly want a human conversation, someone to listen, or support with everyday loneliness, stress, relationships or a difficult week, peer support may be an option.'],
  ['What is the difference between therapy and peer support?', 'Therapy is clinical care delivered by a qualified professional and can involve assessment, diagnosis and treatment. Peer support is non-clinical support from someone with relevant lived experience who is trained to listen and support without diagnosing or treating.'],
  ['Is counselling the same as peer support?', 'No. Counselling may refer to professional mental-health support provided by a qualified counsellor. Peer support is non-clinical and based on lived experience, listening and mutual understanding.'],
  ['Can I talk to someone instead of therapy?', 'If what you need is ordinary human connection or a place to talk through everyday emotional stress, you can choose peer support. But peer support should not be used as a substitute for professional care when you need clinical assessment or treatment.'],
  ['What if I do not want therapy but need support?', 'You can explore non-clinical options such as talking with trusted people, peer support, community groups or other forms of emotional support. LeanOn is one peer-support option for people who want a private conversation with a real person.'],
  ['Is peer support an affordable alternative to therapy?', 'Peer support can cost less than many private therapy sessions, but it is not an equivalent service. It provides a different kind of support: human conversation and lived experience rather than clinical assessment or treatment.'],
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: metadata.title,
      description: metadata.description,
      url: 'https://www.leanon.app/alternatives-to-therapy-india',
      isPartOf: { '@type': 'WebSite', name: 'LeanOn', url: 'https://www.leanon.app' },
      about: [
        { '@type': 'Thing', name: 'Therapy' },
        { '@type': 'Thing', name: 'Peer support' },
        { '@type': 'Thing', name: 'Everyday emotional support' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
        { '@type': 'ListItem', position: 2, name: 'Therapy vs Peer Support', item: 'https://www.leanon.app/alternatives-to-therapy-india' },
      ],
    },
  ],
}

const options = [
  ['Therapy / clinical care', 'Qualified mental-health professionals can assess, diagnose and treat mental-health conditions. This is the appropriate path when you need clinical care.', 'Clinical care'],
  ['Peer support', 'A trained peer listener offers a private conversation based on lived experience. It is non-clinical and does not diagnose or treat.', 'Human conversation'],
  ['Trusted people', 'Friends, family or community can provide familiar support when you have people you feel safe talking to.', 'Personal connection'],
  ['Self-guided support', 'Journaling, reflection, exercise, sleep routines and other self-guided practices can complement support, depending on your situation.', 'Self-directed'],
]

export default function AlternativesToTherapyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F4867]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <nav className="mb-10 flex items-center justify-between" aria-label="Primary">
          <a href="/" className="text-2xl font-black tracking-tight">Lean<span className="text-[#1A8FA0]">On</span></a>
          <a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">Therapy · Counselling · Peer Support</p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Do I need therapy — or do I just need someone to talk to?</h1>
          <p className="mb-8 text-lg leading-8 text-slate-600 sm:text-xl">Those are different needs. This guide explains the boundary between professional mental-health care and non-clinical human support, so you can understand where peer support fits.</p>
        </header>

        <section className="mt-8 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-black">The simple distinction</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5"><h3 className="font-black">You may be looking for clinical care when…</h3><p className="mt-2 text-sm leading-6 text-slate-600">You want assessment, diagnosis, treatment, medication-related care, or help managing a mental-health condition. A qualified professional is the appropriate source.</p></div>
            <div className="rounded-2xl bg-white p-5"><h3 className="font-black">You may be looking for peer support when…</h3><p className="mt-2 text-sm leading-6 text-slate-600">You mainly want someone to listen, a private place to talk, human connection, or support with everyday loneliness, relationship stress, work pressure or a difficult period.</p></div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">Therapy, counselling, peer support and other options</h2>
          <div className="grid gap-4">
            {options.map(([name, desc, label]) => (
              <article key={name} className="rounded-2xl border border-slate-200 p-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#1A8FA0]">{label}</div>
                <h3 className="mt-1 text-lg font-black">{name}</h3>
                <p className="mt-2 leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9">
          <h2 className="mb-4 text-2xl font-black">What if you do not want therapy but need support?</h2>
          <p className="leading-7 text-white/85">You can want support without wanting therapy. Peer support is one non-clinical option: you talk with a trained person who brings lived experience rather than providing diagnosis or treatment. LeanOn provides this kind of one-to-one conversation by text or voice.</p>
          <a href="/browse" className="mt-6 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Browse peer listeners →</a>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-black">A practical decision guide</h2>
          <div className="space-y-4 text-slate-600">
            <p><strong className="text-[#0F4867]">“I want someone to listen.”</strong> Consider peer support or a trusted person.</p>
            <p><strong className="text-[#0F4867]">“I want help understanding or treating a mental-health condition.”</strong> Speak with a qualified professional.</p>
            <p><strong className="text-[#0F4867]">“I am not sure.”</strong> A qualified professional can help you assess what kind of care or support fits your situation.</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-black">Questions people ask</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">
            {faqs.map(([q, a]) => <details key={q} className="py-4"><summary className="cursor-pointer font-extrabold">{q}</summary><p className="pt-3 leading-7 text-slate-600">{a}</p></details>)}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-4 text-xl font-black">Continue exploring</h2>
          <div className="flex flex-wrap gap-3 text-sm font-bold">
            <a href="/peer-support" className="rounded-full bg-[#F0F8FC] px-4 py-2">What is peer support?</a>
            <a href="/talk-to-someone-online" className="rounded-full bg-[#F0F8FC] px-4 py-2">Talk to someone right now</a>
            <a href="/ai-chatbot-alternative" className="rounded-full bg-[#F0F8FC] px-4 py-2">Human alternative to ChatGPT</a>
          </div>
        </section>

        <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact an appropriate local emergency or crisis service.</p>
      </div>
    </main>
  )
}
