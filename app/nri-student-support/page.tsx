import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indian Student Abroad | The Loneliness No One Warns You About | LeanOn',
  description: 'You came to study and built a life. But the isolation of being an Indian student abroad is real — and no one back home quite understands. Talk to someone who does.',
  keywords: ['indian student abroad support', 'nri student loneliness', 'indian student uk usa canada', 'international student india', 'desi student abroad', 'indian studying abroad'],
  alternates: { canonical: 'https://www.leanon.app/nri-student-support' },
  openGraph: { title: 'Indian Student Abroad | The Loneliness No One Warns You About | LeanOn', description: 'You came to study and built a life. But the isolation of being an Indian student abroad is real — and no one back home quite understands. Talk to someone who does.', url: 'https://www.leanon.app/nri-student-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this for students or only working NRIs?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is for anyone navigating the emotional weight of being Indian abroad — students very much included. The loneliness, financial pressure, culture shock, and isolation of being an Indian student abroad is a real and distinct experience that listeners understand.' } },
  { '@type': 'Question', name: 'My parents call every day to check on my grades. I cannot talk to them honestly. Is this for me?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The dynamic where your parents are your primary support but also your primary source of pressure — and where honest communication becomes impossible as a result — is one of the most common things Indian students abroad talk about with listeners. You can say things here you cannot say on those calls.' } },
  { '@type': 'Question', name: 'I am struggling to make friends across cultural gaps. Is that something listeners understand?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Making genuine friendships when you come from a different cultural background, when social scripts are different, when the reference points do not overlap — this is a specific, real form of isolation. Listeners understand it from the inside.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Your family, your university, and your Indian student community will never know. Sessions are anonymous — phone number and first name only.' } },
  { '@type': 'Question', name: 'How much does it cost? I am on a student budget.', acceptedAnswer: { '@type': 'Answer', text: 'Your first 5-minute session is free. Sessions from US$10 for 15 minutes-3 USD. No subscription or ongoing commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Indian Student Abroad', item: 'https://www.leanon.app/nri-student-support' },
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

export default function NriStudentSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indian Student Abroad</span></nav>
        <div className="hero">
          <p className="badge">Indian Student Abroad &middot; Desi Student &middot; International Isolation</p>
          <h1>Everyone back home thinks you are having <em>the time of your life.</em></h1>
          <p className="lead">You came to study. The gap between what everyone imagines — the adventure, the freedom, the opportunity — and what studying abroad actually feels like in the first winter, in the first lonely semester, in the first time you miss your parents so badly it hurts — that gap is enormous. And nobody warned you about it. Talk to someone who has heard it and gets it. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What Nobody Told You Before You Left</h2>
          <p>International student orientation covers practical things — accommodation, bank accounts, course registration. Nobody covers the specific emotional experience of being 9,000 miles from home for the first time, in a cold country with unfamiliar food, surrounded by people whose social references you do not share, trying to make friends through a culture gap that nobody acknowledges.</p>
          <p>The Indian student abroad experience is particular. You may be carrying significant financial pressure — the tuition fees are enormous, often funded by family savings or loans that represent real sacrifice. The pressure to succeed academically is extreme. And on top of this, you are navigating a new country, new social norms, and a loneliness that nobody back home will fully understand because &ldquo;you are abroad,&rdquo; which is supposed to be the good thing.</p>
          <p>The relationship problems at 9,000 miles — long-distance with a partner in India, or new relationships navigated across cultural expectations — are their own category of stress. The food homesickness that sounds trivial but is actually about belonging. The first winter depression, which is physiologically real and emotionally compounded. These things deserve to be named. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Parents Who Call Every Day</h2>
          <p>Indian parents who send a child abroad for education typically invest everything — financially, emotionally, and in terms of family reputation. The daily calls are love. They are also pressure. The need to report that you are fine, that you are studying, that the money is worth it — this becomes a performance that takes real energy to maintain when you are actually struggling.</p>
          <p>The person you most want to talk to honestly is the person you are least able to be honest with. Because their anxiety about your wellbeing is the thing that stops you from expressing your actual wellbeing. This is a specific and isolating dynamic that LeanOn listeners understand completely. A session with a peer listener is a space where you can say what you cannot say on the evening call home.</p>
        </div>

        <div className="section">
          <h2>Making Friends Across Culture Gaps</h2>
          <p>Making genuine friendships as an Indian student abroad is harder than anyone tells you. The social scripts are different. The reference points do not overlap. The British or Canadian or American students have existing friend groups from home, from school, from contexts you have not shared. The Indian student community can be a lifeline, but it can also be a bubble that keeps you from engaging with your new country — and sometimes it carries its own pressures and dynamics.</p>
          <p>The loneliness of being genuinely unseen socially — of being in a room full of people and feeling like an observer rather than a participant — is one of the most common things Indian students abroad experience and rarely name. LeanOn listeners have heard this from hundreds of students and understand the specific texture of it.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness nobody warned you about deserves to be heard.</h2><p>Real peer listener. Student-friendly pricing. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indian-student-uk">Indian student UK &rarr;</a>
          <a href="/indian-student-canada">Indian student Canada &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
