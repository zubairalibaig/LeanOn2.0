import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Loneliness Support — Talk to a Real Person Now | LeanOn',
  description: 'Loneliness doesn\'t always look like isolation. Sometimes you\'re surrounded by people and still feel completely alone. LeanOn peer listeners understand.',
  keywords: ['loneliness support', 'feeling lonely', 'lonely and need to talk', 'talk to someone when lonely', 'online loneliness support', 'feeling alone support', 'lonely need someone to talk to'],
  alternates: { canonical: 'https://www.leanon.app/loneliness-support-online' },
  openGraph: { title: 'Loneliness Support — Talk to a Real Person Now | LeanOn', description: 'Loneliness doesn\'t always look like isolation. Sometimes you\'re surrounded by people and still feel completely alone. LeanOn peer listeners understand.', url: 'https://www.leanon.app/loneliness-support-online', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can talking to someone online really help with loneliness?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — genuine human connection, even through text, reduces the acute feeling of being unseen. LeanOn listeners are real people who give you their full attention. Being truly heard by another person changes something, even in a short conversation.' } },
  { '@type': 'Question', name: 'What if I am surrounded by people but still feel lonely?', acceptedAnswer: { '@type': 'Answer', text: 'This is one of the most common and most painful forms of loneliness. Being physically around people is not the same as being truly known or seen by them. LeanOn listeners are specifically trained to be genuinely present — which is exactly what superficial social contact fails to provide.' } },
  { '@type': 'Question', name: 'Is there a specific reason I need to be lonely to use LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'No. You do not need a diagnosis or a specific event. Feeling lonely is sufficient reason to reach out. LeanOn is for anyone who needs to be heard.' } },
  { '@type': 'Question', name: 'Will the listener judge me for being lonely?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners are trained to listen without judgment. Loneliness is one of the most common human experiences. There is nothing to be judged for.' } },
  { '@type': 'Question', name: 'How do I start?', acceptedAnswer: { '@type': 'Answer', text: 'Browse listeners who are currently online. Choose someone whose profile resonates with you. Start a session — no appointment, no form. The first 5 minutes are free.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Loneliness Support — Talk to a Real Person Now', item: 'https://www.leanon.app/loneliness-support-online' },
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
  .loneliness-types{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;margin-top:8px;}
  .type{background:var(--light);border:1.5px solid var(--border);border-radius:14px;padding:16px 18px;}
  .type-name{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:6px;}
  .type-desc{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
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

export default function LonelinessSupportOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Loneliness Support Online</span></nav>
        <div className="hero">
          <p className="badge">Loneliness &middot; Feeling Alone &middot; Need to Talk</p>
          <h1>Loneliness does not always look <em>like isolation.</em></h1>
          <p className="lead">Sometimes you are surrounded by people and still feel completely alone. A real peer listener who understands the texture of loneliness — available right now, no appointment needed. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The Many Shapes of Loneliness</h2>
          <p>Loneliness is not just being physically alone. Research consistently shows it is more about whether you feel genuinely seen and known than whether people are around. You can be in a crowded room, in a relationship, in a family — and feel entirely invisible.</p>
          <div className="loneliness-types">
            <div className="type">
              <div className="type-name">New city loneliness</div>
              <div className="type-desc">Moved somewhere new and the city is full of strangers. Surface friendships but no one who actually knows you.</div>
            </div>
            <div className="type">
              <div className="type-name">Surrounded-by-people loneliness</div>
              <div className="type-desc">Everyone around you is fine. You smile and participate. But no one sees what is actually going on inside.</div>
            </div>
            <div className="type">
              <div className="type-name">Post-breakup loneliness</div>
              <div className="type-desc">It is not just missing the person. It is the sudden loss of the one who knew your daily texture.</div>
            </div>
            <div className="type">
              <div className="type-name">Digital loneliness</div>
              <div className="type-desc">Constantly online, connected to hundreds, but the scrolling makes it worse, not better. Curated lives feel like evidence of your disconnection.</div>
            </div>
            <div className="type">
              <div className="type-name">Existential loneliness</div>
              <div className="type-desc">No one gets what it is like to be you in this particular moment. The specific shape of your experience feels impossible to explain.</div>
            </div>
            <div className="type">
              <div className="type-name">Relationship loneliness</div>
              <div className="type-desc">In a relationship but emotionally distant from your partner. Lonely in a way you cannot explain without sounding ungrateful.</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Why Being Heard Changes Something</h2>
          <p>Loneliness is fundamentally about invisibility &mdash; the sense that no one is genuinely registering your presence, your inner life, your specific reality. The antidote is not more social activity. It is genuine human contact: someone paying real attention, acknowledging what you share, being actually present.</p>
          <p>LeanOn listeners are trained in active listening. They do not try to fix your loneliness with advice or silver linings. They are present while you talk. That experience of being genuinely received by another person &mdash; even a stranger, especially a stranger &mdash; shifts something that social noise cannot.</p>
        </div>
        <div className="section">
          <h2>Available Right Now. No Reason Required.</h2>
          <p>Browse listeners who are currently online. No appointment, no form, no assessment. Start a text session immediately. The first 5 minutes of every session are free &mdash; if it does not feel right, you stop and pay nothing. If it helps, continue for as long as you need.</p>
          <p>Anonymous: you sign up with a phone number and first name only. Nothing is connected to your real identity. What you share stays between you and your listener.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You do not have to be invisible.</h2><p>Real person. Genuinely present. Available right now. First 5 minutes free.</p><a href="/browse" className="btn-cta">Talk to someone now &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/someone-to-talk-to">Someone to talk to &rarr;</a>
          <a href="/online-emotional-support">Online emotional support &rarr;</a>
          <a href="/talk-to-someone-online">Talk to someone online &rarr;</a>
          <a href="/support/loneliness">Loneliness support India &rarr;</a>
          <a href="/loneliness-support-india">Loneliness India &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
