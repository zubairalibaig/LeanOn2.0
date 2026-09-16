import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Human Connection Online — Why Being Heard Matters | LeanOn',
  description: 'Explore human connection, empathy, active listening and peer support online. LeanOn connects you with real people for private one-to-one conversations when you need someone to listen.',
  keywords: ['human connection', 'human connection online', 'meaningful human connection', 'empathy', 'active listening', 'peer support', 'emotional support', 'someone to talk to'],
  alternates: { canonical: 'https://www.leanon.app/human-connection' },
  openGraph: {
    title: 'Human Connection Online — Why Being Heard Matters | LeanOn',
    description: 'Human connection is more than receiving a response. Learn how empathy, active listening and peer support can create a conversation where you feel genuinely heard.',
    url: 'https://www.leanon.app/human-connection',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is human connection?', acceptedAnswer: { '@type': 'Answer', text: 'Human connection is the experience of being seen, heard and understood by another person. It can come through friendship, family, community, professional relationships or structured peer support.' } },
    { '@type': 'Question', name: 'Why does empathy matter in a conversation?', acceptedAnswer: { '@type': 'Answer', text: 'Empathy helps a listener understand another person without immediately judging, fixing or redirecting the conversation. It can make difficult experiences easier to express and can reduce the sense of facing them alone.' } },
    { '@type': 'Question', name: 'What is active listening?', acceptedAnswer: { '@type': 'Answer', text: 'Active listening is a way of listening with attention and intention. It can include reflecting what someone says, asking clarifying questions, allowing pauses and avoiding premature advice.' } },
    { '@type': 'Question', name: 'Is peer support the same as therapy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Peer support focuses on connection, listening and lived experience. Therapy or counselling is professional care delivered within a clinical or therapeutic framework. LeanOn provides peer support, not diagnosis or clinical treatment.' } },
  ],
}

const related = [
  ['/peer-support', 'Peer support'],
  ['/empathy', 'Empathy'],
  ['/active-listening', 'Active listening'],
  ['/mental-health-support', 'Mental health support'],
  ['/peer-support-vs-counselling', 'Peer support vs counselling'],
  ['/support/emotional-support', 'Emotional support'],
  ['/support/loneliness', 'Loneliness support'],
  ['/support/someone-to-talk-to', 'Someone to talk to'],
  ['/talk-to-someone-right-now', 'Talk to someone now'],
  ['/ai-human-support', 'Human support instead of AI'],
]

export default function HumanConnectionPage() {
  return <main style={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <nav style={styles.nav}><a href="/" style={styles.logo}>LeanOn</a><a href="/browse" style={styles.navCta}>Find a listener</a></nav>
    <div style={styles.wrap}>
      <p style={styles.kicker}>HUMAN CONNECTION · EMPATHY · PEER SUPPORT</p>
      <h1 style={styles.h1}>Human connection matters — especially when you need to be heard.</h1>
      <p style={styles.lead}>People do not always need an answer. Sometimes they need a real person who can listen carefully, understand the context, and stay present while they work out what they are feeling. That is the space between ordinary conversation and clinical care where peer support can help.</p>

      <Section title="What human connection actually means">
        <p>Human connection is not simply having people around you. It is the feeling that another person is paying attention to your experience and that you can be honest without having to manage their reaction.</p>
        <p>You can feel connected in a five-minute conversation, and you can feel lonely in a crowded room. The difference is often the quality of attention, safety, empathy and mutual understanding in the interaction.</p>
      </Section>

      <Section title="The building blocks of a meaningful conversation">
        <div style={styles.grid}>
          <Card title="Empathy" text="Trying to understand what another person is experiencing rather than immediately judging or correcting it." href="/empathy" />
          <Card title="Active listening" text="Listening for meaning, reflecting what you heard, asking useful questions and leaving room for pauses." href="/active-listening" />
          <Card title="Lived experience" text="A peer can bring personal experience of a similar challenge, creating a different kind of recognition from expert advice alone." href="/peer-support" />
          <Card title="Emotional support" text="A conversation can provide a place to express feelings, organise thoughts and feel less alone without turning every problem into a treatment plan." href="/support/emotional-support" />
        </div>
      </Section>

      <Section title="Human connection in the AI era">
        <p>AI tools can be useful for information, brainstorming, reflection and conversation. They can also be part of how people discover that what they wanted was not another answer, but human presence.</p>
        <p>LeanOn does not ask people to choose a technology ideology. The distinction is practical: an AI conversation is generated by software, while peer support is a conversation with another person. If what you are looking for is a human voice, lived experience or the feeling of being heard by someone who is actually there, a peer listener is a different kind of option.</p>
        <p><a href="/ai-human-support" style={styles.link}>Explore human support instead of an AI conversation →</a></p>
      </Section>

      <Section title="Human connection for everyday emotional weight">
        <p>People seek connection for many ordinary but difficult experiences: loneliness, relationship stress, a breakup, burnout, grief, overthinking, student pressure, marriage loneliness, homesickness, career uncertainty or simply having a difficult day.</p>
        <p>Peer support is not a substitute for professional mental-health care when clinical care is needed. It is a different form of support centred on listening, empathy and lived experience.</p>
      </Section>

      <section style={styles.cta}>
        <h2 style={styles.ctaH2}>Sometimes you just need another human being.</h2>
        <p style={styles.ctaP}>Browse peer listeners, choose someone whose experience feels relevant, and start a private one-to-one conversation.</p>
        <a href="/browse" style={styles.button}>Browse peer listeners →</a>
      </section>

      <Section title="Explore the LeanOn support library">
        <div style={styles.links}>{related.map(([href, label]) => <a key={href} href={href} style={styles.linkCard}>{label} →</a>)}</div>
      </Section>
    </div>
  </main>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section style={styles.section}><h2 style={styles.h2}>{title}</h2>{children}</section>
}
function Card({ title, text, href }: { title: string; text: string; href: string }) {
  return <a href={href} style={styles.card}><h3 style={styles.h3}>{title}</h3><p style={styles.cardText}>{text}</p><span style={styles.link}>Learn more →</span></a>
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#F7FCFE', color: '#0F4867', fontFamily: 'Arial, sans-serif' },
  nav: { height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', maxWidth: 980, margin: '0 auto' },
  logo: { fontWeight: 900, fontSize: 26, color: '#0F4867', textDecoration: 'none' },
  navCta: { background: '#1A8FA0', color: '#fff', padding: '10px 18px', borderRadius: 24, fontWeight: 700, textDecoration: 'none' },
  wrap: { maxWidth: 820, margin: '0 auto', padding: '56px 24px 100px' },
  kicker: { color: '#1A8FA0', fontSize: 12, fontWeight: 800, letterSpacing: 1.5 },
  h1: { fontSize: 'clamp(34px, 6vw, 56px)', lineHeight: 1.08, margin: '14px 0 22px', fontWeight: 900 },
  lead: { fontSize: 19, lineHeight: 1.75, color: '#456979', maxWidth: 720 },
  section: { background: '#fff', border: '1px solid #D5EEF6', borderRadius: 22, padding: 32, marginTop: 24 },
  h2: { fontSize: 27, margin: '0 0 14px', fontWeight: 850 },
  h3: { fontSize: 19, margin: '0 0 9px' },
  sectionP: { fontSize: 16, lineHeight: 1.8, color: '#456979' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 14 },
  card: { display: 'block', background: '#F2FAFC', border: '1px solid #D5EEF6', borderRadius: 16, padding: 20, textDecoration: 'none', color: '#0F4867' },
  cardText: { color: '#456979', lineHeight: 1.65, margin: '0 0 12px' },
  link: { color: '#1A8FA0', fontWeight: 800, textDecoration: 'none' },
  cta: { background: '#0F4867', color: '#fff', borderRadius: 22, padding: 34, marginTop: 24, textAlign: 'center' },
  ctaH2: { margin: '0 0 10px', fontSize: 28 },
  ctaP: { color: '#D5EEF6', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 22px' },
  button: { display: 'inline-block', background: '#FF9933', color: '#fff', padding: '13px 22px', borderRadius: 26, fontWeight: 800, textDecoration: 'none' },
  links: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 10 },
  linkCard: { background: '#F2FAFC', borderRadius: 13, padding: 14, color: '#0F4867', fontWeight: 700, textDecoration: 'none' },
}
