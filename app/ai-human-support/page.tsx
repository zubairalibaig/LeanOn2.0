import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to a Real Person Instead of an AI Chatbot | LeanOn',
  description: 'If you have been using ChatGPT or another AI chatbot because you want someone to talk to, LeanOn offers one-to-one conversations with real human peer listeners by text or voice.',
  keywords: [
    'talk to a real person instead of AI',
    'talk to human instead of ChatGPT',
    'ChatGPT alternative for loneliness',
    'AI companion alternative',
    'human alternative to AI companion',
    'real person to talk to online',
    'someone to talk to instead of AI',
    'human emotional support online',
    'real human listener',
    'peer support online',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/ai-human-support',
  },
  openGraph: {
    title: 'Talk to a Real Person Instead of an AI Chatbot | LeanOn',
    description: 'A real human conversation can be different from an AI conversation. LeanOn connects you with peer listeners for one-to-one text or voice conversations.',
    url: 'https://www.leanon.app/ai-human-support',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Can I talk to a real person instead of ChatGPT?',
    a: 'Yes. LeanOn connects seekers with real human peer listeners for one-to-one conversations. You can use text or voice and choose a listener based on their profile and availability.',
  },
  {
    q: 'Is LeanOn an AI chatbot?',
    a: 'No. LeanOn is a human peer-support platform. The conversation is with a listener rather than an AI-generated character or chatbot.',
  },
  {
    q: 'Is LeanOn a replacement for ChatGPT?',
    a: 'Not necessarily. ChatGPT and other AI tools can be useful for information, brainstorming and many kinds of conversation. LeanOn is for a different need: talking with another real person who can listen and respond from human experience.',
  },
  {
    q: 'What if I feel lonely but do not want therapy?',
    a: 'Peer support can be an option for everyday loneliness, relationship difficulties, work stress, homesickness, overthinking or simply needing to talk. LeanOn is not therapy or clinical treatment.',
  },
  {
    q: 'Can I try LeanOn before paying?',
    a: 'New seekers can start with a free 5-minute introductory session. The purpose is to help you see whether a particular listener feels like a good fit before continuing with paid time.',
  },
  {
    q: 'Can I use text instead of voice?',
    a: 'Yes. LeanOn supports text and voice conversations. Text can be useful when you want a quieter or more private interaction, while voice can feel more natural when you want to talk.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Talk to a Real Person Instead of an AI Chatbot',
  description: metadata.description,
  url: 'https://www.leanon.app/ai-human-support',
  isPartOf: { '@type': 'WebSite', name: 'LeanOn', url: 'https://www.leanon.app' },
  about: [
    { '@type': 'Thing', name: 'Peer support' },
    { '@type': 'Thing', name: 'Human connection' },
    { '@type': 'Thing', name: 'AI companion alternatives' },
  ],
}

export default function AIHumanSupportPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F4867]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
        <header className="mb-12 flex items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-tight">Lean<span className="text-[#1A8FA0]">On</span></a>
          <a href="/browse" className="rounded-full bg-[#1A8FA0] px-5 py-2.5 text-sm font-extrabold text-white">Find a listener</a>
        </header>

        <p className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#1A8FA0]">Human connection · Not an AI chatbot</p>
        <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl">Sometimes you don't need another AI reply. You need a real person.</h1>
        <p className="mb-7 max-w-3xl text-xl leading-8 text-slate-600">ChatGPT and other AI assistants can be useful when you want information, ideas or a conversation. But if what you are really looking for is human connection, LeanOn lets you talk one-to-one with a real peer listener.</p>
        <a href="/browse" className="mb-14 inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Talk to a real person →</a>

        <section className="mb-10 rounded-3xl border border-[#D5EEF6] bg-[#F0F8FC] p-7 sm:p-9">
          <h2 className="mb-4 text-2xl font-black">AI and human support solve different problems</h2>
          <p className="leading-7 text-slate-600">There is nothing wrong with talking to an AI. For many questions, an AI assistant is exactly the right tool. But some people use AI conversations because they are lonely, have something personal they want to say, or simply wish somebody would listen.</p>
          <p className="mt-4 leading-7 text-slate-600">LeanOn is built for that second situation. You choose a real listener, start a one-to-one conversation, and decide whether you want to continue after the introductory session.</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-black">If this sounds like what you need</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'I keep opening ChatGPT because I do not have anyone to talk to.',
              'I want someone to hear the whole story, not just give me suggestions.',
              'I want to talk to another human without involving friends or family.',
              'I want a private conversation about loneliness, relationships or work stress.',
              'I want to try talking to a real person before deciding whether I need professional help.',
              'I would rather type than speak, or speak when typing feels exhausting.',
            ].map((text) => <div key={text} className="rounded-2xl border border-slate-200 p-5 font-semibold leading-7 text-slate-700">{text}</div>)}
          </div>
        </section>

        <section className="mb-10 rounded-3xl bg-[#0F4867] p-7 text-white sm:p-9">
          <h2 className="mb-5 text-2xl font-black">How LeanOn works</h2>
          <ol className="space-y-4 text-white/90">
            <li><strong className="text-white">1. Browse.</strong> Read listener profiles and look for someone whose experience or topics feel relevant.</li>
            <li><strong className="text-white">2. Try.</strong> Start with one free 5-minute introductory session.</li>
            <li><strong className="text-white">3. Talk.</strong> Continue by text or voice if you want to keep the conversation going.</li>
            <li><strong className="text-white">4. Choose.</strong> Continue with listeners you genuinely connect with; you do not have to stay with a poor fit.</li>
          </ol>
          <a href="/browse" className="mt-7 inline-flex rounded-full bg-[#FF9933] px-6 py-3 font-extrabold text-white">Browse real listeners →</a>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-black">Common questions</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">
            {faqs.map((faq) => (
              <details key={faq.q} className="py-5">
                <summary className="cursor-pointer font-extrabold">{faq.q}</summary>
                <p className="pt-3 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5EEF6] p-7 text-center sm:p-9">
          <h2 className="mb-3 text-2xl font-black">Want a human conversation?</h2>
          <p className="mb-6 text-slate-600">Start with a free 5-minute introduction and see whether the listener feels right for you.</p>
          <a href="/browse" className="inline-flex rounded-full bg-[#FF9933] px-7 py-3.5 font-extrabold text-white">Find someone to talk to →</a>
        </section>

        <footer className="mt-10 text-xs leading-6 text-slate-500">LeanOn provides peer support and human connection, not therapy, counselling, diagnosis or clinical treatment. If you are in immediate danger or experiencing a mental-health emergency, use the appropriate emergency or crisis service where you are.</footer>
      </div>
    </main>
  )
}
