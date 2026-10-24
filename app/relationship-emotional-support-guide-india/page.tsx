import type { Metadata } from 'next'
import QuickAnswer from '@/app/components/QuickAnswer'

export const dynamic = 'force-static'

const URL = 'https://www.leanon.app/relationship-emotional-support-guide-india'
export const metadata: Metadata = {
  title: 'Relationship & Emotional Support in India: Who to Talk To | LeanOn',
  description: 'Feeling lonely in your marriage, stressed by relationship problems or overwhelmed at home? A practical guide to human peer support in India, when it fits, and when professional help is safer.',
  alternates: { canonical: URL, languages: { 'en-IN': URL } },
  openGraph: {
    title: 'Who Can I Talk To About My Relationship or Emotional Stress in India?',
    description: 'Understand peer listening, counselling, personal safety and practical options for relationship and everyday emotional support in India.',
    url: URL, siteName: 'LeanOn', type: 'article',
  },
}

const answer = 'For everyday relationship stress, loneliness in marriage, or family pressure, you can speak to someone you trust or consider a one-to-one conversation with a screened peer listener on LeanOn. It is non-clinical human support by text or voice, not relationship counselling or therapy. One introductory session of up to 5 minutes is free per account; availability varies and a match is not guaranteed.'

const groups = [
  {
    title: 'Relationship problems and difficult conversations',
    intro: 'Whether you need to process one argument or an ongoing pattern, choose support that fits the question you actually have.',
    links: [
      { label: 'Relationship problems and talking them through', href: '/relationship-support-real-person', description: 'A conversation when you want to feel heard before deciding what to do next.' },
      { label: 'After a fight with your partner', href: '/talk-to-someone-after-relationship-fight', description: 'Slow down and describe what happened without needing a mutual friend to take sides.' },
      { label: 'Trust doubts or suspected cheating', href: '/relationship-trust-issues-india', description: 'Explore your concerns without treating suspicion as proof.' },
      { label: 'Relationship anxiety and overthinking', href: '/support/relationship-anxiety', description: 'Support for repetitive worries; persistent impairment merits professional assessment.' },
      { label: 'Long-distance relationships', href: '/support/long-distance-relationship', description: 'Talk about the emotional distance that can come with physical distance.' },
      { label: 'Breakups and heartbreak', href: '/support/breakup', description: 'A human conversation while you find your footing after a relationship ends.' },
    ],
  },
  {
    title: 'Marriage, family pressure and the emotional load on women',
    intro: 'Family expectations, housework and intimacy can be hard to talk about within the household itself. Your privacy and safety come first.',
    links: [
      { label: 'Feeling lonely while married', href: '/support/married-but-lonely', description: 'Feeling alone does not have to mean you are physically alone.' },
      { label: 'An unsupportive or emotionally distant husband', href: '/support/husband-not-supportive-india', description: 'Sort through feeling unseen; no listener can diagnose your partner.' },
      { label: 'Housewives looking for someone to talk to', href: '/housewife-support-india', description: 'Acknowledge isolation and the invisible load at home.' },
      { label: 'Emotional support for women', href: '/for-women', description: 'Understand options, boundaries and privacy before choosing a conversation.' },
      { label: 'Exhaustion for mothers and working women', href: '/support/mom-burnout-india', description: 'Talk through competing responsibilities without minimizing exhaustion.' },
      { label: 'In-laws, family pressure and arranged marriage stress', href: '/support/family-pressure-india', description: 'Get space to describe your experience, without a stranger making your decision.' },
    ],
  },
  {
    title: 'Loneliness, everyday stress and needing a real person',
    intro: 'You do not need a diagnosis to want a listener. Equally, a listener cannot diagnose or treat a mental-health condition.',
    links: [
      { label: 'I have no one to talk to', href: '/support/someone-to-talk-to', description: 'For moments when the first need is to be heard.' },
      { label: 'I need to vent', href: '/support/need-to-vent', description: 'Talk through feelings without requiring a solution.' },
      { label: 'Feeling lonely or isolated', href: '/support/loneliness', description: 'Human connection for difficult periods of isolation.' },
      { label: 'Anxiety, overthinking and emotional exhaustion', href: '/support/anxiety', description: 'Non-clinical listening; seek qualified care if symptoms persist or interfere with daily life.' },
      { label: 'Prefer speaking with a human instead of AI', href: '/talk-to-human-instead-of-chatgpt', description: 'A screened listener rather than a chatbot response.' },
      { label: 'What peer support means', href: '/peer-support-vs-therapy', description: 'See where a peer conversation helps and where therapy is a better fit.' },
    ],
  },
]

const questions = [
  {
    q: 'Who can I talk to about relationship problems if I cannot tell my family?',
    a: 'You could choose a trusted person outside the relationship, a qualified counsellor, or a screened peer listener. LeanOn offers one-to-one non-clinical text or voice conversations for adults. A peer listener can hear you and help you reflect, but cannot provide couples therapy, a diagnosis or legal advice.',
  },
  {
    q: 'Can LeanOn help if I feel lonely in my marriage?',
    a: 'LeanOn may be suitable if you want to describe feeling disconnected or unheard to a human outside your circle. Listeners offer peer support, not marriage counselling, and cannot promise to repair a relationship. For sustained conflict, couples counselling with a qualified professional may be more appropriate.',
  },
  {
    q: 'What if my husband or partner is emotionally unavailable?',
    a: 'It can help to identify which situations leave you feeling unsupported, what you need and which boundaries matter to you. A peer conversation may help you organize your thoughts. If you are experiencing fear, control, threats or abuse, prioritize safety and specialist services rather than relying on a peer listener.',
  },
  {
    q: 'Do I need therapy, relationship counselling or peer support?',
    a: 'Peer support is a human listening conversation for everyday emotional strain. Qualified mental-health professionals are more appropriate for diagnosis, treatment and persistent symptoms. Relationship or couples counselling is better suited to structured work on recurring relationship patterns. Peer listening does not replace either.',
  },
  {
    q: 'Is LeanOn anonymous and will my family find out?',
    a: 'LeanOn uses phone-number verification for sign-in. A listener sees your chosen display name, not your phone number. Voice conversations are not recorded, but text messages are stored and authorized administrators may review reported or safety-flagged conversations. Shared devices, notifications and payments can leave traces, so complete anonymity cannot be promised.',
  },
  {
    q: 'Can I talk immediately, and is it free?',
    a: 'Each account can request one introductory session of up to 5 minutes free. Paid conversations are available with prices shown before booking and varying by listener and mode. A session only starts if an available listener accepts; instant matching is not guaranteed.',
  },
  {
    q: 'What should I do if I feel unsafe in my relationship or might harm myself?',
    a: 'LeanOn is not an emergency, domestic-abuse or crisis service. If you face immediate danger, contact the police or local emergency services, or go to a safe place and trusted local support. For urgent mental-health support in India, Tele-MANAS is available at 14416. Do not rely on a peer-listening session for crisis response.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Relationship and emotional support guide', item: URL },
  ],
}
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

export default function RelationshipEmotionalSupportGuide() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#16354B', maxWidth: 930, margin: '0 auto', padding: '28px 22px 85px', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 24 }}>
        <a href="/" style={{ color: '#126C80' }}>Home</a> / <a href="/support" style={{ color: '#126C80' }}>Support</a> / Relationship and emotional support guide
      </nav>
      <header>
        <p style={{ fontWeight: 700, color: '#137D90', marginBottom: 8 }}>Guide for adults in India · Updated 24 October 2026</p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.2, margin: '8px 0 16px' }}>Who can I talk to about relationship problems or emotional stress in India?</h1>
        <p style={{ fontSize: 18, maxWidth: 750 }}>Feeling lonely in a marriage, hurt after an argument, overwhelmed at home or worried about the future? Start with what kind of help you need—not a diagnosis or a sales pitch.</p>
      </header>
      <div style={{ marginTop: 28 }}><QuickAnswer question="Where can I find real human emotional support in India?" answer={answer} /></div>
      <section aria-labelledby="choose-help" style={{ background: '#EEF8FA', borderRadius: 16, padding: 24, margin: '28px 0 36px' }}>
        <h2 id="choose-help" style={{ fontSize: 23, margin: '0 0 12px' }}>Choose the right kind of support</h2>
        <p><strong>Want to tell someone what happened?</strong> Talk to a trusted person or a peer listener. LeanOn is one option for an adult seeking a paid, one-to-one human conversation after a free introductory session.</p>
        <p><strong>Want to work on repeated conflict together?</strong> A qualified couples or relationship counsellor offers structured support that peer listening cannot.</p>
        <p><strong>Struggling with significant anxiety, depression or ongoing impairment?</strong> See a qualified mental-health professional. Peer support can complement appropriate care, not replace it.</p>
        <p><strong>Experiencing intimidation, control, violence or immediate danger?</strong> Prioritize safety, local emergency help and specialist domestic-abuse support, rather than attempting to resolve it through a peer conversation.</p>
      </section>
      {groups.map(group => (
        <section key={group.title} style={{ margin: '40px 0' }}>
          <h2 style={{ fontSize: 25, lineHeight: 1.3, marginBottom: 8 }}>{group.title}</h2>
          <p style={{ marginTop: 0, color: '#486575' }}>{group.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {group.links.map(link => (
              <a key={link.href} href={link.href} style={{ border: '1px solid #CBE2E9', borderRadius: 14, padding: 18, textDecoration: 'none', color: '#18495C', background: '#fff' }}>
                <span style={{ display: 'block', color: '#0C7186', fontWeight: 800, marginBottom: 7 }}>{link.label} →</span>
                <span style={{ display: 'block', fontSize: 14 }}>{link.description}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
      <section aria-labelledby="common-questions" style={{ marginTop: 44 }}>
        <h2 id="common-questions" style={{ fontSize: 25 }}>Questions to consider before opening up</h2>
        {questions.map(item => (
          <article key={item.q} style={{ padding: '17px 0', borderBottom: '1px solid #DCE9EE' }}>
            <h3 style={{ fontSize: 18, lineHeight: 1.4, margin: '0 0 8px' }}>{item.q}</h3>
            <p style={{ margin: 0 }}>{item.a}</p>
          </article>
        ))}
      </section>
      <section style={{ padding: 24, background: '#123D54', color: '#fff', borderRadius: 18, marginTop: 42 }}>
        <h2 style={{ margin: '0 0 8px', fontSize: 23 }}>Want a human listener?</h2>
        <p>LeanOn serves adults 18 and older. A screened peer listener may accept a request for text or voice. There is one free introductory session up to 5 minutes per account; availability and paid rates vary.</p>
        <a href="/talk?src=relationship-guide" style={{ display: 'inline-block', background: '#fff', color: '#12596B', borderRadius: 25, padding: '11px 20px', fontWeight: 750, textDecoration: 'none', marginRight: 10 }}>Request a conversation</a>
        <a href="/trust" style={{ color: '#fff', display: 'inline-block', padding: 10 }}>Read how it works and privacy details →</a>
        <p style={{ fontSize: 13, marginTop: 18 }}>Immediate danger: contact the police or local emergency services. Mental-health crisis: Tele-MANAS 14416 or NIMHANS 080-46110007. LeanOn is not an emergency service.</p>
      </section>
    </main>
  )
}
