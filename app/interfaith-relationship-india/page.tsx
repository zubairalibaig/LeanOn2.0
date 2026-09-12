import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Interfaith Relationship India — Love Across Religions Is Hard. Talk About It. | LeanOn',
  description: 'Hindu-Muslim. Hindu-Christian. Sikh-Hindu. Love marriages across religions in India carry enormous weight. Talk to someone who won\'t judge. From ₹160.',
  keywords: [
    'interfaith relationship india', 'love across religions india', 'hindu muslim relationship india',
    'inter-caste relationship india', 'love marriage problems india', 'intercaste marriage india',
    'interfaith marriage india', 'religious difference relationship india',
  ],
  alternates: { canonical: 'https://www.leanon.app/interfaith-relationship-india', languages: { 'en-IN': 'https://www.leanon.app/interfaith-relationship-india' } },
  openGraph: {
    title: 'Interfaith Relationship India — Love Across Religions Is Hard. Talk About It. | LeanOn',
    description: 'Hindu-Muslim. Hindu-Christian. Sikh-Hindu. Love marriages across religions in India carry enormous weight. Talk to someone who won\'t judge. From ₹160.',
    url: 'https://www.leanon.app/interfaith-relationship-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Interfaith Relationship India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is LeanOn appropriate for relationship problems?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Relationship difficulty is one of the most common reasons people come to LeanOn. A peer listener can hold the complexity of your specific situation without taking sides, without having opinions about your choices, and without the social consequences that come with confiding in people who know you or your partner.' },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Your first name only. What you say stays in the session. There is no connection to your social network, your family, or your partner&apos;s family. This is a completely private space.' },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my parents\' reaction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The family reaction &mdash; from both sides &mdash; is often the most painful dimension of interfaith relationships in India. You can say everything about how your parents have responded, how his or her parents have responded, and the weight of being caught between your love and your family&apos;s expectations.' },
    },
    {
      '@type': 'Question',
      name: 'What if my partner doesn\'t know I\'m using this?',
      acceptedAnswer: { '@type': 'Answer', text: 'That is entirely your decision. Many people use LeanOn without their partners knowing &mdash; it is a private space for your own processing, not a couples service. You do not need your partner&apos;s knowledge or consent to talk about your own experience.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Interfaith Relationship India', item: 'https://www.leanon.app/interfaith-relationship-india' },
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
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
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

export default function InterfaithRelationshipIndiaPage() {
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
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Interfaith Relationship India</span>
        </nav>
        <div className="hero">
          <p className="badge">Interfaith &middot; Love Marriage &middot; India</p>
          <h1>You love each other. <em>Your families are a different conversation.</em></h1>
          <p className="lead">Interfaith relationships in India mean navigating two sets of family expectations, social pressure, and sometimes genuine fear. It&apos;s too complicated to explain to most people. Say it to someone with no stake in how it turns out.</p>
          <a href="/browse" className="cta-hero">Find a listener &rarr;</a>
        </div>
        <div className="section">
          <h2>The Specific Weight of Interfaith Relationships in India</h2>
          <p>Hindu-Muslim, Hindu-Christian, Sikh-Hindu, inter-caste &mdash; each combination carries its own specific weight in India. The political climate has made some of these harder than they were a decade ago. The family pressure is real and often enormous. The social cost of being in such a relationship &mdash; the gossip, the judgment, the uncertainty about how it will be received &mdash; is something most people in these relationships carry in silence.</p>
          <p>The internal dimensions are also complex. Navigating two sets of religious or cultural practices. Deciding how to raise children. Managing festivals and rituals across two different frameworks. Finding a way to honour both without betraying either. These are not trivial challenges.</p>
        </div>
        <div className="section">
          <h2>What Couples and Individuals Carry Alone</h2>
          <p>Most couples in interfaith relationships develop a performance of normalcy. To the outside world, everything is fine &mdash; or they simply do not discuss it. Inside, they may be carrying:</p>
          <p>The exhaustion of managing two sets of family expectations. The grief of family rejection, whether partial or complete. The fear of what happens if political circumstances change. The loneliness of being in a situation that very few people in your life understand from the inside.</p>
          <p>And sometimes, the complicated feelings toward the partner themselves &mdash; love alongside occasional resentment at the complexity their presence has added to your life. These feelings are not disloyal. They are real and they need somewhere to go.</p>
        </div>
        <div className="section">
          <h2>Why You Can&apos;t Talk to Family or Most Friends About This</h2>
          <p>Everyone has a position. Your parents have feelings about your choice of partner. Their parents have feelings. Your friends are often aligned with one side. Even the most supportive people in your life have opinions that complicate what you can say to them honestly.</p>
          <p>What you need is someone with no position. Someone who hears the whole complicated thing &mdash; the love, the frustration, the fear, the occasional doubt &mdash; without forming a view on what you should do. A LeanOn listener has no stake in your relationship. They will not tell you to leave or to stay. They will hold the complexity with you.</p>
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
          <h2>Say the whole complicated thing. To someone with no stake in it.</h2>
          <p>Anonymous. No judgment. From ₹160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners &rarr;</a>
        </div>
        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/divorce-support-india">Divorce support &rarr;</a>
            <a href="/relationship-counselling-india">Relationship counselling &rarr;</a>
            <a href="/cant-tell-anyone-india">Can&apos;t tell anyone &rarr;</a>
            <a href="/someone-who-gets-it-india">Someone who gets it &rarr;</a>
            <a href="/rant-online-india">Rant online &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
