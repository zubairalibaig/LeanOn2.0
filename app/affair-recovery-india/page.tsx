import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Partner Had an Affair — Emotional Support India | LeanOn',
  description: 'Betrayal is one of the hardest things to process. You need to talk — not to a therapist yet, to a real person who will just listen. From ₹160.',
  keywords: [
    'affair recovery India', 'partner affair India', 'husband affair India',
    'infidelity emotional recovery India', 'betrayal trauma India',
    'wife affair India', 'recovering from cheating India',
  ],
  alternates: { canonical: 'https://www.leanon.app/affair-recovery-india', languages: { 'en-IN': 'https://www.leanon.app/affair-recovery-india' } },
  openGraph: {
    title: 'Partner Had an Affair — Emotional Support India | LeanOn',
    description: 'Betrayal is one of the hardest things to process. You need to talk — not to a therapist yet, to a real person who will just listen. From ₹160.',
    url: 'https://www.leanon.app/affair-recovery-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Affair Recovery India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is betrayal trauma?',
      acceptedAnswer: { '@type': 'Answer', text: 'Betrayal trauma is the psychological impact of having your trust fundamentally violated by someone close to you. It is not just about the affair itself — it is about the retroactive rewriting of the entire relationship, the moments of deception, the gap between the person you thought they were and who they turned out to be. It produces symptoms similar to PTSD: intrusive thoughts, hypervigilance, difficulty concentrating, emotional numbness alternating with overwhelm.' },
    },
    {
      '@type': 'Question',
      name: 'Why do I keep replaying it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your mind is trying to make sense of something that broke its model of reality. It keeps returning to the moment of discovery, to specific conversations that now mean something different, to the timeline it is trying to reconstruct. This is not weakness. It is how the mind processes a catastrophic rupture in its understanding of a relationship. It gradually reduces over time — especially when you have been able to talk about it with someone who can hold the full weight of it.' },
    },
    {
      '@type': 'Question',
      name: 'The people around me have opinions. How do I deal with that?',
      acceptedAnswer: { '@type': 'Answer', text: 'Everyone around you wants to help, and their help comes in the form of positions: leave, stay, forgive, do not forgive. Those positions are about their own anxieties as much as your situation. A neutral listener has no position. They are not pushing you in any direction. They are just helping you figure out what you are actually feeling, separate from what everyone else thinks you should do.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You use a first name. The listener is bound by confidentiality. Nothing leaves the session. Given how sensitive this topic is — and how interconnected Indian social networks can be — anonymity is one of the most important features.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. The first 5 minutes are free. No subscription or appointment needed.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Affair Recovery India', item: 'https://www.leanon.app/affair-recovery-india' },
  ],
}

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
`

export default function AffairRecoveryIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Affair Recovery India</span>
        </nav>
        <div className="hero">
          <p className="badge">Betrayal &middot; Affair Recovery &middot; India</p>
          <h1>You keep replaying it. The people around you have opinions. <em>You just need someone to listen.</em></h1>
          <p className="lead">Betrayal is one of the hardest things to process. You need to talk &mdash; not to a therapist yet, to a real person who will just listen. Anonymous peer support from &#x20b9;160.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What Betrayal Actually Does to You</h2>
          <p>Finding out about an affair does not just hurt. It rewrites the past. Every dinner you had. Every night they came home late. Every time they looked at you. The present moment is painful but the past is now uncertain too, and the mind tries desperately to make sense of both at once.</p>
          <p>This is why affair recovery takes time. The grief is not linear. You will cycle through shock, rage, bargaining, sadness, and occasional numbness, sometimes in the same hour. There is no correct order and no correct pace. What helps is having somewhere to put it.</p>
        </div>
        <div className="section">
          <h2>Why a Neutral Listener Helps</h2>
          <p>The people in your life are already positioned. Some will tell you to leave. Some will tell you to forgive. Some will make it about what they would do. A neutral listener has no position and no relationship history with your partner. They follow your thread, not their own anxieties about what you should do.</p>
          <p>That clarity &mdash; the ability to think through what you actually feel, separate from what everyone else thinks you should feel &mdash; is what peer support provides. It is not advice. It is a space where you can hear yourself.</p>
        </div>
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-card">
          <h2>You do not have to carry this alone.</h2>
          <p>Anonymous peer support. No judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/cheating-partner-india">Cheating partner &rarr;</a>
            <a href="/heartbreak-india">Heartbreak India &rarr;</a>
            <a href="/relationship-trust-issues-india">Trust issues &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
