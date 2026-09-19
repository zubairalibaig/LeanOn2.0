import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person Instead of ChatGPT | LeanOn',
  description: 'ChatGPT and other AI assistants can be useful. If what you want is a real human conversation, LeanOn connects you with peer listeners by text or voice.',
  keywords: [
    'talk to a real person instead of ChatGPT', 'human alternative to ChatGPT',
    'ChatGPT alternative for loneliness', 'AI companion alternative',
    'talk to a human instead of AI', 'real person to talk to online',
    'human emotional support online', 'peer support online',
    'someone to talk to instead of AI', 'real human listener online',
    'real person instead of AI', 'AI companion vs human', 'talk to human online',
    'I\'ve been talking to ChatGPT and feel lonely', 'ChatGPT loneliness human support',
  ],
  alternates: { canonical: 'https://www.leanon.app/ai-chatbot-alternative' },
  openGraph: {
    title: 'Talk to a Real Person Instead of ChatGPT | LeanOn',
    description: 'AI can be useful. LeanOn is for people who specifically want a real human conversation — by text or voice.',
    url: 'https://www.leanon.app/ai-chatbot-alternative',
    siteName: 'LeanOn', type: 'website',
  },
}

const faqs = [
  { q: 'Can I talk to a real person instead of ChatGPT?', a: 'Yes. LeanOn connects seekers with real human peer listeners for one-to-one conversations by text or voice. You can browse listener profiles and choose who you want to talk to.' },
  { q: 'Is LeanOn an AI chatbot?', a: 'No. LeanOn is a human peer-support platform. The conversation is with a real listener, not an AI-generated character or bot.' },
  { q: 'Is ChatGPT bad for emotional support?', a: 'Not necessarily. AI assistants can be useful for reflection, information, brainstorming and many other purposes. LeanOn serves a different need: talking with another person when human connection or being listened to is what you want.' },
  { q: 'What is the difference between an AI conversation and LeanOn?', a: 'An AI assistant generates responses from an AI system. LeanOn provides a human-to-human conversation with a peer listener. The practical difference is the presence of another person who can listen and respond from their own human experience.' },
  { q: 'Can I try LeanOn before paying?', a: 'New seekers can start with one free 5-minute introductory session. If you want to continue, the listener rate is shown before you start a paid conversation.' },
  { q: 'Is LeanOn therapy?', a: 'No. LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. For a clinical need, use an appropriately qualified professional.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', name: metadata.title, description: metadata.description, url: 'https://www.leanon.app/ai-chatbot-alternative', about: { '@type': 'Thing', name: 'Human conversation as an alternative to AI chat for users seeking human connection' } },
    { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
      { '@type': 'ListItem', position: 2, name: 'AI Chatbot Alternative', item: 'https://www.leanon.app/ai-chatbot-alternative' },
    ] },
  ],
}

export default function AIChatbotAlternativePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F4867]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <nav className="mb-12 flex items-center justify-between" aria-label="Primary">
          <a href="/" className="text-2xl font-black tracking-tight">Lean<span className="text-[#1A8FA0]">On</span></a>
          <a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Browse listeners</a>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-[#1A8FA0]">AI is useful. Human connection is different.</p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Want to talk to a <span className="text-[#FF9933]">real person</span> instead of an AI?</h1>
          <p className="mb-8 text-lg leading-8 text-slate-600 sm:text-xl">ChatGPT, Gemini and other AI assistants can be useful when you want information, reflection or a conversation with an AI. LeanOn is for a different moment: when you specifically want another human being to listen.</p>
          <a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Talk to a real listener →</a>
        </header>

        <section className="mt-12 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-black">AI conversation vs human peer conversation</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead><tr className="bg-white"><th className="p-3 font-black">You want…</th><th className="p-3 font-black">AI assistant</th><th className="p-3 font-black">LeanOn</th></tr></thead>
              <tbody>
                <tr className="border-t border-[#D5EEF6]"><td className="p-3 font-bold">Information or ideas</td><td className="p-3">AI-generated responses</td><td className="p-3">Human conversation, not an information service</td></tr>
                <tr className="border-t border-[#D5EEF6]"><td className="p-3 font-bold">Another human being</td><td className="p-3">No</td><td className="p-3">Yes — a real peer listener</td></tr>
                <tr className="border-t border-[#D5EEF6]"><td className="p-3 font-bold">Someone to listen to you</td><td className="p-3">AI conversation</td><td className="p-3">One-to-one human conversation</td></tr>
                <tr className="border-t border-[#D5EEF6]"><td className="p-3 font-bold">Text or voice</td><td className="p-3">Depends on the AI product</td><td className="p-3">Both text and voice sessions</td></tr>
                <tr className="border-t border-[#D5EEF6]"><td className="p-3 font-bold">Try before paying</td><td className="p-3">Depends on the AI product</td><td className="p-3">One free 5-minute introductory session for new seekers</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-black">If you have been talking to ChatGPT and still feel lonely</h2>
          <p className="leading-7 text-slate-600">You may have started using ChatGPT because you needed somewhere to put your thoughts. That can be useful. But if the thing you are missing is another human being, an AI companion and a human peer conversation are different options.</p>
          <p className="mt-4 leading-7 text-slate-600">If you are searching for a real person instead of AI, want to talk to a human online, or simply want someone to listen, LeanOn connects you with peer listeners for one-to-one text or voice conversations.</p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 p-6"><h2 className="mb-3 text-xl font-black">AI may be useful when…</h2><ul className="space-y-3 text-slate-600"><li>• You want information or explanations.</li><li>• You want to brainstorm or reflect in writing.</li><li>• You want an always-available AI conversation.</li></ul></article>
          <article className="rounded-3xl border border-slate-200 p-6"><h2 className="mb-3 text-xl font-black">A human conversation may fit when…</h2><ul className="space-y-3 text-slate-600"><li>• You specifically want another person.</li><li>• You want to talk through a difficult day with someone who listens.</li><li>• You want human connection rather than another AI-generated response.</li></ul></article>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9">
          <h2 className="mb-3 text-2xl font-black">LeanOn is not a replacement for AI — or therapy.</h2>
          <p className="leading-7 text-white/85">AI can be useful. Professional mental-health care can be important. LeanOn occupies a different space: paid, one-to-one peer conversations with real people for everyday emotional support and human connection.</p>
          <a href="/browse" className="mt-6 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Find someone to talk to →</a>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
            <a href="/talk-to-someone-online" className="rounded-full border border-white/30 px-4 py-2">Someone to talk to right now</a>
            <a href="/peer-support" className="rounded-full border border-white/30 px-4 py-2">What is peer support?</a>
            <a href="/alternatives-to-therapy-india" className="rounded-full border border-white/30 px-4 py-2">Therapy vs peer support</a>
          </div>
        </section>

        <section className="mt-10"><h2 className="mb-4 text-2xl font-black">Questions people ask</h2><div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">{faqs.map(faq => <details key={faq.q} className="py-4"><summary className="cursor-pointer font-extrabold">{faq.q}</summary><p className="pt-3 leading-7 text-slate-600">{faq.a}</p></details>)}</div></section>

        <p className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, contact an appropriate local emergency or crisis service.</p>
      </div>
    </main>
  )
}
