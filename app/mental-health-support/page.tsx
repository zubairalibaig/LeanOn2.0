import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Health Support Online | Peer Support, Counselling & Human Connection | LeanOn',
  description: 'Understand the different kinds of mental health support: peer support, counselling, therapy and professional care. LeanOn provides non-clinical human peer support through text and voice.',
  keywords: ['mental health support','mental health support online','mental health support India','emotional support','peer support','counselling','online counselling','empathy','someone to talk to','human support'],
  alternates: { canonical: 'https://www.leanon.app/mental-health-support' },
  openGraph: { title: 'Mental Health Support Online | LeanOn', description: 'A practical guide to peer support, counselling and professional mental health care — and when talking to a real person may help.', url: 'https://www.leanon.app/mental-health-support', siteName: 'LeanOn', type: 'website' },
}

const faqs = [
  ['What is mental health support?', 'Mental health support is a broad term for help with emotional wellbeing, stress, relationships, life changes and mental health difficulties. It can come from friends, peers, communities or qualified professionals.'],
  ['Is LeanOn therapy or counselling?', 'No. LeanOn provides non-clinical peer support. Listeners offer human conversation, empathy and lived-experience support; they do not diagnose or provide clinical treatment.'],
  ['Should I choose peer support or counselling?', 'If you need professional assessment or structured therapeutic care, seek a qualified counsellor, psychologist or other appropriate professional. If you mainly want human connection and someone to listen, peer support may be relevant.'],
  ['What should I do during a mental health emergency?', 'Contact the emergency or crisis service appropriate to your location or seek urgent professional care. LeanOn is not an emergency or crisis intervention service.'],
]

const schema = { '@context':'https://schema.org', '@graph': [
  { '@type':'WebPage', '@id':'https://www.leanon.app/mental-health-support#webpage', url:'https://www.leanon.app/mental-health-support', name:metadata.title, description:metadata.description, isPartOf:{'@id':'https://www.leanon.app/#website'} },
  { '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem',position:1,name:'LeanOn',item:'https://www.leanon.app'},{ '@type':'ListItem',position:2,name:'Mental Health Support',item:'https://www.leanon.app/mental-health-support'}] },
  { '@type':'FAQPage', mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) },
] }

const sections = [
  ['What is mental health support?', 'Mental health support is broader than therapy. It can mean having a trusted person listen, joining a peer community, speaking with a counsellor, working with a psychologist, or receiving psychiatric care when clinically appropriate. The right level depends on what someone is experiencing and what kind of help they need.'],
  ['Peer support, counselling and clinical care are different', 'Peer support focuses on listening, connection, empathy and shared experience. Counselling and psychotherapy are professional services delivered by appropriately qualified practitioners and may involve structured therapeutic work. Psychiatry is medical care that can include diagnosis and medication. These categories should be kept distinct rather than blurred for marketing.'],
  ['When a human peer conversation may be useful', 'Sometimes the immediate need is simple: say something out loud, have another person listen, get perspective from someone who understands, or avoid spending another difficult evening alone with your thoughts. LeanOn is designed for this non-clinical use case.', ['Loneliness or feeling disconnected','Relationship, family or marriage stress','Work pressure, burnout or career uncertainty','Breakups, grief and difficult transitions','Overthinking or a difficult day','Homesickness or living away from family','Wanting someone to listen without changing an existing relationship']],
  ['When professional mental health care matters', 'If you are experiencing persistent or severe symptoms, significant impairment, thoughts of self-harm, suicidal intent, psychosis, mania or another urgent mental health concern, peer support is not the appropriate level of care. Contact a qualified professional or local emergency/crisis service.'],
  ['Human support in a digital world', 'AI tools can be useful for information, reflection and many everyday tasks. But some people specifically want another human being who can listen, respond in real time and bring lived experience to a conversation. LeanOn is a complementary option for that human-to-human need, not a claim that AI is unsuitable for every use case.'],
]

export default function MentalHealthSupportPage() {
  return <main className="min-h-screen bg-white text-[#0F4867]"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
    <nav className="mb-10 flex items-center justify-between"><a href="/" className="text-2xl font-black">Lean<span className="text-[#1A8FA0]">On</span></a><a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Talk to someone</a></nav>
    <p className="mb-3 text-sm font-extrabold uppercase tracking-wider text-[#1A8FA0]">Mental health support · Peer support · Empathy</p>
    <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Mental Health Support Online — Know What Kind of Support You Need</h1>
    <p className="mb-8 max-w-3xl text-xl leading-8 text-slate-600">Mental health support can mean many things: a friend who listens, a peer who understands, a counsellor, a psychologist or a psychiatrist. Knowing the difference helps you find support that matches your situation.</p>
    <div className="mb-12 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8"><p className="text-lg leading-8 text-slate-700"><strong>LeanOn provides non-clinical peer support.</strong> It is for human connection, empathetic listening and conversations about everyday emotional challenges. It does not diagnose, treat or replace professional mental health care.</p></div>
    <section className="space-y-8">{sections.map(([heading,body,bullets])=><article key={heading} className="rounded-3xl border border-slate-200 p-6 sm:p-8"><h2 className="mb-3 text-2xl font-black">{heading}</h2><p className="leading-8 text-slate-600">{body}</p>{Array.isArray(bullets)&&<ul className="mt-4 grid gap-2 sm:grid-cols-2">{bullets.map(x=><li key={x} className="rounded-xl bg-[#F0F8FC] p-3 text-sm font-semibold text-slate-700">{x}</li>)}</ul>}</article>)}</section>
    <section className="my-12 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-10"><h2 className="mb-3 text-2xl font-black">Need someone to talk to?</h2><p className="mb-6 leading-7 text-white/80">Browse real peer listeners and choose someone whose experience feels relevant. Start with one free 5-minute introductory session.</p><a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold">Browse listeners →</a></section>
    <section className="rounded-3xl border border-slate-200 p-6 sm:p-8"><h2 className="mb-5 text-2xl font-black">Mental health support questions</h2>{faqs.map(([q,a])=><details key={q} className="border-b border-slate-200 py-5 last:border-0"><summary className="cursor-pointer font-extrabold">{q}</summary><p className="pt-3 leading-7 text-slate-600">{a}</p></details>)}</section>
    <section className="mt-12"><h2 className="mb-4 text-xl font-black">Related LeanOn resources</h2><div className="flex flex-wrap gap-2">{[['Peer support','/peer-support'],['Peer support vs counselling','/peer-support-vs-counselling'],['Empathy','/empathy'],['Active listening','/active-listening'],['Loneliness support','/support/loneliness'],['Anxiety support','/support/anxiety'],['Emotional support','/support/emotional-support']].map(([l,h])=><a key={h} href={h} className="rounded-full border border-[#D5EEF6] px-4 py-2 text-sm font-bold">{l}</a>)}</div></section>
    <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn is not a crisis line or emergency service. If you are in immediate danger or experiencing a mental-health emergency, contact the appropriate emergency or crisis service where you are.</p>
  </div></main>
}
