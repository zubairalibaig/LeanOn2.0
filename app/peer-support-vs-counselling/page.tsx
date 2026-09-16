import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peer Support vs Counselling: What Is the Difference? | LeanOn',
  description: 'Peer support vs counselling explained clearly: purpose, qualifications, boundaries, when each may help, and why peer support is not a replacement for professional mental health care.',
  keywords: ['peer support vs counselling','peer support vs counseling','counselling vs peer support','peer counselling','online counselling alternative','mental health support','emotional support','empathetic listening'],
  alternates: { canonical: 'https://www.leanon.app/peer-support-vs-counselling' },
}

const rows = [
  ['Primary purpose','Human connection, listening and shared experience','Professional mental health support and therapeutic work'],
  ['Who provides it','Peer listener with relevant lived experience','Qualified counselling/mental-health professional'],
  ['Clinical diagnosis','No','May be part of professional assessment, depending on practitioner and scope'],
  ['Treatment','No','May include structured therapeutic interventions'],
  ['Typical conversation','Open-ended, supportive and experience-led','Structured around the client’s goals and therapeutic approach'],
  ['Can they coexist?','Yes','Yes'],
]
const faqs = [
  ['Is a peer listener a counsellor?','No. A peer listener is not automatically a counsellor or therapist. LeanOn describes its service as peer support and keeps peer support separate from clinical care.'],
  ['Can peer support be useful before counselling?','It can be a way to talk to another person and clarify what you are experiencing, but it should not delay professional help when professional care is needed.'],
  ['Can I use peer support while seeing a counsellor?','Peer support can be complementary to professional care when appropriate. The important thing is to understand that a peer listener is not providing the same clinical service as your counsellor or therapist.'],
]
const schema={'@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':'https://www.leanon.app/peer-support-vs-counselling#webpage',url:'https://www.leanon.app/peer-support-vs-counselling',name:metadata.title,description:metadata.description},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'LeanOn',item:'https://www.leanon.app'},{'@type':'ListItem',position:2,name:'Peer Support vs Counselling',item:'https://www.leanon.app/peer-support-vs-counselling'}]},
  {'@type':'FAQPage',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))},
]}

export default function Page(){return <main className="min-h-screen bg-white text-[#0F4867]"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
<nav className="mb-10 flex items-center justify-between"><a href="/" className="text-2xl font-black">Lean<span className="text-[#1A8FA0]">On</span></a><a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Find a peer listener</a></nav>
<p className="mb-3 text-sm font-extrabold uppercase tracking-wider text-[#1A8FA0]">Peer support · Counselling · Mental health support</p>
<h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Peer Support vs Counselling: What Is the Difference?</h1>
<p className="mb-8 max-w-3xl text-xl leading-8 text-slate-600">Both involve talking about difficult experiences, but they are not the same service. Understanding the difference helps you choose support without confusing a human peer conversation with professional clinical care.</p>
<div className="mb-10 overflow-x-auto rounded-3xl border border-slate-200"><table className="w-full min-w-[680px] border-collapse"><thead><tr className="bg-[#F0F8FC]"><th className="p-4 text-left text-sm"> </th><th className="p-4 text-left text-sm text-[#1A8FA0]">Peer support</th><th className="p-4 text-left text-sm text-[#1A8FA0]">Counselling</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]} className="border-t border-slate-200"><td className="p-4 text-sm font-extrabold">{r[0]}</td><td className="p-4 text-sm leading-6 text-slate-600">{r[1]}</td><td className="p-4 text-sm leading-6 text-slate-600">{r[2]}</td></tr>)}</tbody></table></div>
<section className="space-y-8">{[
['The main difference','Peer support centres on connection, understanding, listening and lived experience. Counselling is a professional service that can use structured therapeutic approaches to help with psychological or emotional difficulties. Neither needs to be presented as universally better; they answer different needs.'],
['Qualifications and responsibility','A counsellor or therapist should have the qualifications and professional framework required in their jurisdiction and area of practice. A peer listener is not a clinician. A responsible peer-support service should make that distinction explicit and have clear boundaries for situations that require professional care.'],
['What a peer listener can offer','A peer listener can listen attentively, reflect what they hear, share relevant lived experience when appropriate, help you feel less alone and provide a space where you can speak without managing an existing social relationship. The listener should not diagnose you or present peer conversation as treatment.'],
['What counselling can offer','Counselling may provide assessment, structured therapeutic conversations, coping strategies and other interventions within the practitioner’s training and scope. If your concern is persistent, severe or significantly affecting your functioning, professional care may be more appropriate than peer support alone.'],
['Can you use both?','Yes. Peer support and counselling do not have to compete. Someone may use counselling for structured professional care while also using trusted peers or peer-support conversations for connection and support between appointments.']
].map(([h,b])=><article key={h} className="rounded-3xl border border-slate-200 p-6 sm:p-8"><h2 className="mb-3 text-2xl font-black">{h}</h2><p className="leading-8 text-slate-600">{b}</p></article>)}</section>
<section className="my-12 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-10"><h2 className="mb-3 text-2xl font-black">Looking for a human conversation?</h2><p className="mb-6 leading-7 text-white/80">LeanOn provides peer support — not counselling or therapy. Browse listeners and choose someone to talk to.</p><a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold">Browse listeners →</a></section>
<section className="rounded-3xl border border-slate-200 p-6 sm:p-8"><h2 className="mb-5 text-2xl font-black">Common questions</h2>{faqs.map(([q,a])=><details key={q} className="border-b border-slate-200 py-5 last:border-0"><summary className="cursor-pointer font-extrabold">{q}</summary><p className="pt-3 leading-7 text-slate-600">{a}</p></details>)}</section>
<section className="mt-12"><h2 className="mb-4 text-xl font-black">Related</h2><div className="flex flex-wrap gap-2">{[['Peer support','/peer-support'],['Mental health support','/mental-health-support'],['Empathy','/empathy'],['Online emotional support','/support/emotional-support'],['FAQ','/faq']].map(([l,h])=><a key={h} href={h} className="rounded-full border border-[#D5EEF6] px-4 py-2 text-sm font-bold">{l}</a>)}</div></section>
<p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact the appropriate emergency or crisis service where you are.</p>
</div></main>}
