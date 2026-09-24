import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Desi Support Online for Indians in the USA | Talk to Someone Who Gets It | LeanOn',
  description: 'In New Jersey, Bay Area, or Houston? LeanOn connects desi Americans with peer listeners in India who understand the ABD/ABCD experience and the pressure of it all.',
  keywords: ['desi support usa', 'indian support america', 'abcd mental health', 'desi mental health usa', 'indian american emotional support', 'talk to someone indian usa', 'nri support america', 'new jersey indian support'],
  alternates: { canonical: 'https://www.leanon.app/desi-support-usa' },
  openGraph: { title: 'Desi Support Online for Indians in the USA | Talk to Someone Who Gets It | LeanOn', description: 'In New Jersey, Bay Area, or Houston? LeanOn connects desi Americans with peer listeners in India who understand the ABD/ABCD experience and the pressure of it all.', url: 'https://www.leanon.app/desi-support-usa', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand the ABCD or second-generation experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. They understand the dual identity, the parents\' sacrifice, the tension between American individualism and Indian collectivism, and the career and marriage pressure that arrives on a schedule whether you are ready or not.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, many listeners are fluent in Hindi. Mention this when booking and your listener will speak Hindi or Hinglish — whichever feels natural.' } },
  { '@type': 'Question', name: 'Is it really anonymous?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sign up with just a phone number. No name, no photo, no social login. Your community in Edison or Fremont never knows. Listeners sign confidentiality agreements.' } },
  { '@type': 'Question', name: 'What are good times to call from the USA?', acceptedAnswer: { '@type': 'Answer', text: 'Morning in the USA is evening in India. 7am–noon EST is 5:30pm–10:30pm IST — ideal for listener availability. New York/New Jersey: 8am EST = 6:30pm IST. Bay Area: 8am PST = 9:30pm IST. Houston: 8am CST = 7:30pm IST.' } },
  { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions from US$10 for 15 minutes. The first 5 minutes are free — if it doesn\'t feel right, you pay nothing. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Desi Support for Indians in the USA', item: 'https://www.leanon.app/desi-support-usa' },
] }

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
  .crisis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;font-size:13px;color:var(--gray);line-height:1.7;text-align:center;}
  .crisis strong{color:var(--navy);}
`

export default function DesiSupportUsaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Desi Support for Indians in the USA</span></nav>
        <div className="hero">
          <p className="badge">Desi Support &middot; Indian-American &middot; NRI USA</p>
          <h1>Desi enough at home. <em>Not Indian enough back in India.</em></h1>
          <p className="lead">The ABCD pressure nobody talks about openly. The parents who gave up everything so you could &ldquo;succeed.&rdquo; The H-1B anxiety. The marriage pressure when you&rsquo;re still figuring out who you are. The exhaustion of being the model minority while quietly falling apart. Talk to a real Indian peer listener. No explaining the desi context. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What desi Americans carry that nobody else sees</h2>
          <p>The model minority myth is not a compliment &mdash; it is a trap. The assumption that Indian-Americans are fine, doing well, succeeding on schedule means there is no room to not be fine. You are supposed to be the proof that immigration worked. Saying otherwise feels like a betrayal of everyone who sacrificed to get you here.</p>
          <p>The H-1B anxiety has no equivalent in the American experience. Your job is also your legal right to be in the country. When the job is stressful, the whole structure becomes unstable. The marriage pressure arrives on its own timeline, independent of whether you have figured out who you want to be first. You are &ldquo;too American&rdquo; for aunties back in India and not Indian enough for the ABCD jokes from American-born peers.</p>
          <p>The weight of your parents&rsquo; sacrifice is real and heavy. It makes it hard to say you are struggling without feeling ungrateful. It makes it hard to make choices that prioritise your own wellbeing when their choices were always for yours. LeanOn listeners understand this without needing it explained.</p>
        </div>
        <div className="section">
          <h2>Listeners who speak your language &mdash; literally and culturally</h2>
          <p>Hindi and some Punjabi speakers are available. Mention your language preference when booking. But beyond the language, listeners understand the desi American world in ways that do not require translation: the arranged marriage conversations that start when the visa is stamped, the &ldquo;when are you getting married?&rdquo; calls that arrive on a schedule, the career paths that were decided before you had a say.</p>
          <p>They understand the gap between the Indian collectivism your family carries and the American individualism you absorbed. They understand the guilt that comes from wanting something for yourself when your parents&rsquo; whole story was about wanting something for you. They will not tell you what to do. They will listen while you say the things you have been holding.</p>
        </div>
        <div className="section">
          <h2>When to call from the USA &mdash; time zones</h2>
          <p>India is 9.5 to 12.5 hours ahead of US time zones. This means your morning is India&rsquo;s evening &mdash; the overlap works naturally. <strong>New York / New Jersey (EST):</strong> 8am EST = 6:30pm IST. Perfect before your workday starts. <strong>Bay Area / San Jose (PST):</strong> 8am PST = 9:30pm IST. Still active listener hours. <strong>Houston (CST):</strong> 8am CST = 7:30pm IST. Peak listener time.</p>
          <p>If you have a quiet early morning before the day starts, or a Sunday morning when the apartment is still and the thoughts get loud, listeners in India are very likely to be available. No appointment. Browse who is online and start a session.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You don&rsquo;t have to explain the desi context.</h2><p>A real Indian peer listener who already gets it. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/indian-diaspora-support">Indian diaspora support &rarr;</a>
          <a href="/support/someone-to-talk-to">Talk to someone online &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
