import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathetic Peer Support for Every Challenge | LeanOn India',
  description: 'Find empathetic peer support and peer counselling for loneliness, anxiety, grief, breakups, student stress, imposter syndrome, and founder burnout. Real humans who have been there — available now across India.',
  keywords: 'empathy, empathetic listener India, peer counselling India, peer support topics India, emotional support India',
  alternates: { canonical: 'https://www.leanon.app/support' },
  openGraph: {
    title: 'Empathetic Peer Support for Every Challenge — LeanOn India',
    description: 'Whatever you are going through, there is someone on LeanOn who has been there. Browse peer support topics and connect with a listener who brings real empathy.',
    url: 'https://www.leanon.app/support',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
  ],
}

const topics = [
  {
    emoji: '🌙',
    title: 'Loneliness',
    description: 'WFH isolation, new city loneliness, 2 AM silence — for when you feel disconnected even in a crowd.',
    href: '/support/loneliness',
    color: '#E8F4FF',
  },
  {
    emoji: '😰',
    title: 'Anxiety',
    description: 'Overthinking, social anxiety, health anxiety — talk to someone who has learned to live with and beyond anxious thoughts.',
    href: '/support/anxiety',
    color: '#FFF0F5',
  },
  {
    emoji: '💔',
    title: 'Breakup & Heartbreak',
    description: 'Divorce, breakups, unrequited love — for when a relationship ends and you do not know who you are without it.',
    href: '/support/breakup',
    color: '#FFF0F0',
  },
  {
    emoji: '🌿',
    title: 'Grief & Loss',
    description: 'Loss of a loved one, pet loss, miscarriage, complicated grief — for when you need someone to sit with you in loss.',
    href: '/support/grief',
    color: '#F0FFF4',
  },
  {
    emoji: '📚',
    title: 'Student Stress',
    description: 'IIT/JEE/NEET pressure, hostel homesickness, career anxiety after 12th — for students navigating intense academic pressure.',
    href: '/support/student-stress',
    color: '#FFFBF0',
  },
  {
    emoji: '🧭',
    title: 'Career Confusion',
    description: 'Layoffs, career switches, feeling stuck in the wrong job — talk to someone who has navigated the same crossroads.',
    href: '/support/career-confusion',
    color: '#F0F8FF',
  },
  {
    emoji: '🔥',
    title: 'Founder Burnout',
    description: 'Startup pressure, investor stress, co-founder conflicts — for founders and entrepreneurs who are running on empty.',
    href: '/support/founder-burnout',
    color: '#FFF5F0',
  },
  {
    emoji: '😳',
    title: 'Social Anxiety',
    description: 'Racing thoughts before meetings, overanalysing conversations, avoiding gatherings — talk to a listener who has walked out the other side of social anxiety.',
    href: '/support/social-anxiety',
    color: '#F5F0FF',
  },
  {
    emoji: '🎭',
    title: 'Imposter Syndrome',
    description: 'Feeling like a fraud despite your achievements — for high-performers who secretly fear being "found out."',
    href: '/support/imposter-syndrome',
    color: '#F0FFFA',
  },
  {
    emoji: '🏠',
    title: 'WFH Loneliness',
    description: 'Muted mics, empty apartments, missed office chatter — for remote workers who feel invisible even on video calls.',
    href: '/support/work-from-home-loneliness',
    color: '#FFF8F0',
  },
]

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
  .page{max-width:860px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{text-align:center;margin-bottom:56px;padding:0 16px;}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(30px,6vw,48px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:20px;}
  h1 em{color:var(--orange);font-style:normal;}
  .hero-lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:580px;margin:0 auto 32px;}
  .topics-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;margin-bottom:48px;}
  .topic-card{border-radius:24px;padding:28px 24px;border:1.5px solid var(--border);transition:border-color 0.2s,transform 0.15s;cursor:pointer;display:block;}
  .topic-card:hover{border-color:var(--teal);transform:translateY(-2px);}
  .topic-emoji{font-size:36px;margin-bottom:14px;}
  .topic-title{font-size:18px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .topic-desc{font-size:14px;color:var(--gray);line-height:1.65;font-weight:500;}
  .topic-cta{display:inline-flex;align-items:center;gap:4px;margin-top:14px;font-size:13px;font-weight:800;color:var(--teal);}
  .intro-section{background:white;border-radius:24px;padding:40px 36px;margin-bottom:32px;border:1.5px solid var(--border);text-align:center;}
  .intro-section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:12px;}
  .intro-section p{font-size:15px;color:#3A6070;line-height:1.80;max-width:580px;margin:0 auto;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
`

export default function SupportHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Support</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="hero-tag">Peer Support · India</p>
          <h1>What Are You <em>Going Through?</em></h1>
          <p className="hero-lead">Whatever you are facing, there is someone on LeanOn who has been through something similar — and come out the other side. Choose a topic to find listeners who truly understand.</p>
        </div>

        {/* Topics grid */}
        <div className="topics-grid">
          {topics.map((t) => (
            <a key={t.href} href={t.href} className="topic-card" style={{background: t.color}}>
              <div className="topic-emoji">{t.emoji}</div>
              <div className="topic-title">{t.title}</div>
              <p className="topic-desc">{t.description}</p>
              <span className="topic-cta">Find a listener →</span>
            </a>
          ))}
        </div>

        {/* Intro section */}
        <div className="intro-section">
          <h2>Why Peer Support Works</h2>
          <p>Unlike therapy, peer support connects you with real people who have lived through similar challenges. On LeanOn, listeners are verified, trained in active listening, and available 24/7 — including at 2 AM when professional help is not reachable. Sessions start at ₹160 with the first 5 minutes free.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Not Sure Where to Start?</h2>
          <p>Browse all peer listeners by topic, language, or availability. First 5 minutes free — no appointment needed.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse All Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
