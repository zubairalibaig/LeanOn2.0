import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Long-Distance Relationship with Partner in India | LeanOn',
  description: 'Your partner is in India. You\'re abroad. The visa, the waiting, the calls that never feel like enough. Talk to a peer listener who understands the NRI long-distance experience.',
  keywords: ['nri long distance relationship', 'india abroad relationship', 'nri partner in india', 'waiting for spouse visa nri', 'nri long distance marriage', 'india us relationship problems'],
  alternates: { canonical: 'https://www.leanon.app/nri-long-distance-relationship' },
  openGraph: { title: 'NRI Long-Distance Relationship with Partner in India | LeanOn', description: 'Your partner is in India. You\'re abroad. The visa, the waiting, the calls that never feel like enough. Talk to a peer listener who understands the NRI long-distance experience.', url: 'https://www.leanon.app/nri-long-distance-relationship', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What makes NRI long-distance relationships different from other long-distance situations?', acceptedAnswer: { '@type': 'Answer', text: 'NRI long-distance is typically not a choice — it is a visa process, often years long. You are building a life in a country your partner hasn\'t arrived in yet. They are waiting in a world you\'ve already left. There is no clear end date, just uncertainty. That specific kind of limbo is what peer listeners at LeanOn understand well.' } },
  { '@type': 'Question', name: 'What if I\'m feeling guilty about my partner waiting?', acceptedAnswer: { '@type': 'Answer', text: 'Guilt is one of the most common things people carry in this situation — guilt for leaving, guilt for the waiting, guilt for the times you feel resentment about the sacrifice. A peer listener can hold this with you without judgement.' } },
  { '@type': 'Question', name: 'What if the relationship is starting to struggle under the distance?', acceptedAnswer: { '@type': 'Answer', text: 'That happens. Long-distance strains the best relationships. A peer listener won\'t give you relationship advice, but they will hear what you\'re going through and help you feel less alone in it.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are anonymous — phone number and first name only. Nothing is shared with your partner, family, or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session is free (5 minutes). After that, sessions start at US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Long-Distance Relationship', item: 'https://www.leanon.app/nri-long-distance-relationship' },
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

export default function NriLongDistanceRelationshipPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Long-Distance Relationship</span></nav>
        <div className="hero">
          <p className="badge">NRI Long-Distance &middot; Visa Wait &middot; India-Abroad</p>
          <h1>Oceans apart. <em>And the loneliness of loving someone on a different timezone.</em></h1>
          <p className="lead">Your partner is in India. You&rsquo;re in America, the UK, or Canada. The visa process is endless. The calls are never quite enough. You&rsquo;re building a life somewhere they haven&rsquo;t arrived yet — and they&rsquo;re waiting in a world you&rsquo;ve already left behind. Talk to a real Indian peer listener who understands this specific, unacknowledged pain. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The NRI Long-Distance Limbo</h2>
          <p>The NRI long-distance relationship is different from other long-distance situations in one crucial way: it is not chosen. Nobody wanted the visa to take this long. Nobody planned to spend their first years of marriage in different countries. But the H-1B spousal visa queue can be years long. The UK spouse visa process has its own delays and costs. Canadian PR processes create their own timelines. You are waiting on bureaucracy for the most intimate part of your life.</p>
          <p>In the meantime: you are building a life abroad — a home, a routine, a social circle — in a place your partner has not yet experienced. Your partner is living in a world you have partly left — familiar family and friends, but the growing distance of someone whose daily life has become radically different from yours. The calls are wonderful and also insufficient. You can video-call but you cannot have Sunday morning together.</p>
          <p>This kind of pain is real and largely unacknowledged. It doesn&rsquo;t show up in the happy couple photos. It is the private loneliness of loving someone across an ocean and a bureaucratic queue. LeanOn is for exactly this. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What Goes Unsaid in the Long-Distance</h2>
          <p>The things that go unsaid in NRI long-distance relationships are heavy. The guilt of the person who left. The resentment — sometimes — of the person waiting. The fear that you are growing apart, becoming different people who inhabit different worlds. The loneliness of your daily life that you can&rsquo;t quite share with your partner on a call because the context is too complex. The small things that go unwitnessed.</p>
          <p>There is nobody to say these things to. Your parents don&rsquo;t want to hear it. Your friends abroad don&rsquo;t understand. Your partner doesn&rsquo;t need to hear you struggling when they are also struggling. A real Indian peer listener at LeanOn — in India, which is where your partner is — understands the situation from the inside. Sessions are anonymous, private, and always begin with 5 free minutes.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Heard. Without judgment. While you wait.</h2><p>Real Indian peer listener. Understands the NRI long-distance weight. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
