import type { Metadata } from 'next'

export const dynamic = 'force-static'

const url = 'https://www.leanon.app/i-need-someone-to-talk-to'

export const metadata: Metadata = {
  title: 'Need Someone to Talk to Right Now in India? Services & Human Listeners | LeanOn',
  description: 'Need someone to talk to right now? Compare free mental-health helplines in India with non-crisis human peer listening on LeanOn. Learn who to contact and how fast a session can start.',
  alternates: { canonical: url, languages: { 'en-IN': url } },
  openGraph: {
    title: 'I Need Someone to Talk to Right Now. What Services Can Help?',
    description: 'A clear guide to free helplines, human peer listeners and when to seek urgent support in India. LeanOn provides non-clinical conversations when a listener accepts.',
    url, type: 'article', siteName: 'LeanOn',
  },
}

const faqs = [
  {
    q: 'I need someone to talk to right now. What services can help?',
    a: 'In India, Tele-MANAS (14416) offers free 24/7 mental-health support and Vandrevala Foundation (+91 9999 666 555) offers free 24/7 counselling support. If you are safe and mainly want a real person to listen to everyday stress, relationships or loneliness, LeanOn offers one-to-one peer conversations by text or voice. A listener must accept, so an immediate match is not guaranteed. For immediate physical danger call 112.',
  },
  {
    q: 'Is LeanOn a free mental-health helpline?',
    a: 'No. LeanOn is a non-clinical peer-listening service for adults aged 18 and older, not an emergency or counselling helpline. One introductory session of up to five minutes is free per account, and subsequent sessions are paid. Your exact price depends on the listener and conversation mode and is displayed before booking.',
  },
  {
    q: 'Can I speak to a real person online without waiting for an appointment?',
    a: 'On LeanOn, you can request a screened human peer listener for text or voice without booking an appointment. A session begins only when someone accepts the request. If you need guaranteed, immediate or professional support, a free helpline or local service may be more appropriate.',
  },
  {
    q: 'Can LeanOn help with marriage problems, loneliness or a bad day?',
    a: 'Yes, those are examples of everyday non-clinical topics you can discuss with a peer listener. LeanOn does not provide couples therapy, diagnosis, treatment, legal advice or domestic-abuse intervention. In controlling, threatening or unsafe relationships, seek specialist help and prioritize your safety.',
  },
  {
    q: 'Will my family know if I use LeanOn?',
    a: 'LeanOn requires a phone number for verification, but listeners do not see that number and you may choose a display name. Voice calls are not recorded. Text messages are stored and may be reviewed by authorized administrators when reported or flagged for safety. Device access, notifications and payments can leave traces, so complete anonymity cannot be promised.',
  },
]

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Need someone to talk to right now', item: url },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const services = [
  {
    name: 'Tele-MANAS',
    fit: 'Free mental-health support, emotional distress or when you may need a counsellor',
    detail: 'Government of India service. Free, 24 hours a day, seven days a week, in multiple Indian languages.',
    action: 'Call 14416',
    href: 'tel:14416',
    source: 'https://www.dghs.mohfw.gov.in/national-mental-health-programme.php',
    sourceLabel: 'Government programme information',
  },
  {
    name: 'Vandrevala Foundation',
    fit: 'Free counselling support by phone or WhatsApp',
    detail: 'Free mental-health support and counselling, with 24/7 helpline availability. Connection times depend on demand.',
    action: 'Call +91 9999 666 555',
    href: 'tel:+919999666555',
    source: 'https://www.vandrevalafoundation.com/free-counseling',
    sourceLabel: 'Official helpline information',
  },
  {
    name: 'LeanOn — human peer listener',
    fit: 'Everyday loneliness, a relationship issue, feeling overwhelmed or needing to vent to another person',
    detail: 'Screened peer listeners in India, one-to-one text or voice. For adults 18+. One free introductory session of up to 5 minutes per account; paid thereafter. A listener must accept your request, and immediate availability is not guaranteed. Not therapy or crisis support.',
    action: 'Request a peer conversation',
    href: '/talk?src=right-now-guide',
    source: 'https://www.leanon.app/trust',
    sourceLabel: 'How LeanOn works and its boundaries',
  },
]

export default function NeedSomeoneToTalkTo() {
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '28px 20px 84px', color: '#15394A', fontFamily: 'system-ui, sans-serif', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" style={{ fontSize: 13, marginBottom: 28 }}>
        <a href="/" style={{ color: '#087688' }}>Home</a> / Need someone to talk to
      </nav>
      <header>
        <p style={{ color: '#137A87', fontSize: 13, fontWeight: 750 }}>India · Free helplines and human peer support · Updated 25 October 2026</p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1.23, margin: '10px 0 16px' }}>I need someone to talk to right now. What services can help?</h1>
        <p style={{ fontSize: 18, maxWidth: 780 }}>You don't need a diagnosis or a crisis to want someone to listen. The right service depends on whether you need immediate professional support or simply a private conversation with another person.</p>
      </header>

      <section style={{ background: '#F0F8FA', borderLeft: '5px solid #168397', padding: '18px 20px', borderRadius: 12, margin: '22px 0 30px' }} aria-label="Direct answer">
        <h2 style={{ fontSize: 20, margin: '0 0 6px' }}>Quick answer</h2>
        <p style={{ margin: '0 0 10px' }}>In India, <strong>Tele-MANAS (14416)</strong> and <strong>Vandrevala Foundation (+91 9999 666 555)</strong> offer free support by phone. If you are safe and want to talk to a real human peer about loneliness, a relationship problem or a difficult day, <strong>LeanOn</strong> offers one-to-one text or voice conversations with screened listeners. LeanOn is not a helpline, and a match is not guaranteed.</p>
        <p style={{ fontSize: 14, margin: 0 }}><strong>In immediate danger?</strong> Call <a href="tel:112">112</a> or seek emergency assistance. For thoughts of self-harm or significant emotional distress, use a crisis or mental-health service rather than waiting for a peer-listening request.</p>
      </section>

      <section aria-labelledby="services-heading">
        <h2 id="services-heading" style={{ fontSize: 25 }}>Services you can contact in India</h2>
        <div style={{ display: 'grid', gap: 15 }}>
          {services.map(service => (
            <article key={service.name} style={{ padding: '20px 22px', border: '1px solid #CCE0E7', borderRadius: 16, background: '#fff' }}>
              <h3 style={{ fontSize: 21, margin: '0 0 6px' }}>{service.name}</h3>
              <p style={{ margin: '0 0 6px', fontWeight: 700 }}>{service.fit}</p>
              <p style={{ margin: '0 0 13px', color: '#405D6C' }}>{service.detail}</p>
              <a href={service.href} style={{ display: 'inline-block', background: '#157D8D', color: '#fff', padding: '10px 18px', borderRadius: 28, fontWeight: 800, textDecoration: 'none', marginRight: 12 }}>{service.action}</a>
              <a href={service.source} style={{ color: '#0D6B7E', fontSize: 13 }}>{service.sourceLabel}</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ margin: '37px 0' }}>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>When LeanOn is the relevant choice</h2>
        <p>LeanOn is designed for adults who say things like “I have nobody to talk to,” “I need to vent after an argument,” “I feel lonely in my marriage,” or “I want a real person, not AI.” It provides peer listening, not clinical treatment or guaranteed instant response.</p>
        <p>If you want to request a listener, <a href="/talk?src=right-now-guide">use Talk now</a> and select text or voice. If you prefer to read a profile first, <a href="/browse">browse available listeners</a>. The first introductory conversation of up to five minutes is free once per account. Paid prices are shown before booking; in India a 15-minute text session with a ₹10/min listener costs ₹160 including the platform fee, and your actual price may differ.</p>
        <p>If no one accepts your request and you need support urgently, do not keep waiting on LeanOn: call an appropriate helpline or contact a trusted person nearby.</p>
      </section>

      <section style={{ margin: '30px 0' }}>
        <h2 style={{ fontSize: 24, marginBottom: 10 }}>Questions people ask before reaching out</h2>
        {faqs.map(({ q, a }) => (
          <article key={q} style={{ padding: '18px 0', borderBottom: '1px solid #D9E8EE' }}>
            <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>{q}</h3>
            <p style={{ margin: 0 }}>{a}</p>
          </article>
        ))}
      </section>

      <section style={{ marginTop: 40, background: '#123D54', padding: 26, borderRadius: 18, color: 'white' }}>
        <h2 style={{ fontSize: 23, margin: '0 0 8px' }}>Need to be heard, not treated?</h2>
        <p>Request a one-to-one conversation with a screened human listener about everyday life. Listeners are not counsellors, and a session begins only when one accepts.</p>
        <a href="/talk?src=right-now-guide" style={{ display: 'inline-block', background: '#fff', color: '#12495B', borderRadius: 30, padding: '11px 18px', fontWeight: 800, textDecoration: 'none' }}>Try LeanOn Talk now →</a>
        <p style={{ fontSize: 13, marginTop: 14 }}>Learn more: <a style={{ color: 'white' }} href="/pricing">pricing</a>, <a style={{ color: 'white' }} href="/privacy">privacy</a>, <a style={{ color: 'white' }} href="/peer-support-vs-therapy">peer support vs therapy</a>.</p>
      </section>
    </main>
  )
}
