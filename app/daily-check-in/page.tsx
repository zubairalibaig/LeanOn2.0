import type { Metadata } from 'next'
import { FEELINGS } from '@/lib/feelings-data'

export const dynamic = 'force-static'

// Hub for the mood pages — the recurring entry point. AstroTalk's daily-return
// habit is built on "check your sign today"; this is the honest equivalent:
// "how are you feeling today?" It is a genuine daily-use surface AND the
// internal-linking hub that passes authority to all eight /feeling/* pages.

export const metadata: Metadata = {
  title: 'Daily Check-In — How Are You Feeling Today? | LeanOn',
  description: 'Name how you feel today and read something honest about it — lonely, anxious, overwhelmed, numb, burnt out. Then talk to someone who has felt it too. Available 24/7.',
  keywords: 'daily check in mental health, how am I feeling today, mood check in India, emotional check in, name your feeling',
  alternates: {
    canonical: 'https://www.leanon.app/daily-check-in',
    languages: { 'en-IN': 'https://www.leanon.app/daily-check-in' },
  },
  openGraph: {
    title: 'Daily Check-In — How Are You Feeling Today? | LeanOn',
    description: 'Name how you feel today, understand it, and talk to someone who has felt the same. Available 24/7.',
    url: 'https://www.leanon.app/daily-check-in',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Daily check-in', item: 'https://www.leanon.app/daily-check-in' },
  ],
}

// ItemList helps search engines understand this as a browsable set — the same
// structural signal a horoscope index page sends with its 12 signs.
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'How are you feeling today?',
  itemListElement: FEELINGS.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: f.label,
    url: `https://www.leanon.app/feeling/${f.slug}`,
  })),
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
  .page{max-width:860px;margin:0 auto;padding:16px 24px 100px;}
  .hero{text-align:center;margin-bottom:44px;}
  h1{font-size:clamp(30px,6vw,46px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:18px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:560px;margin:0 auto;}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px;margin-bottom:44px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:22px;padding:24px 18px;text-align:center;transition:border-color .2s;}
  .card:hover{border-color:var(--teal);}
  .card-emoji{font-size:34px;margin-bottom:10px;}
  .card-label{font-size:16px;font-weight:800;color:var(--navy);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:20px;font-weight:800;color:var(--navy);margin-bottom:14px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function DailyCheckInPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <div style={{ background:'#EBF5FB', borderLeft:'4px solid #1A8FA0', borderRadius:'0 12px 12px 0', padding:'14px 18px', marginBottom:28, fontSize:14, color:'#0F4867', fontWeight:600, lineHeight:1.65 }}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{ color:'#1A8FA0', fontWeight:800 }}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{ color:'#1A8FA0', fontWeight:800 }}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <h1>How are you feeling <em>today</em>?</h1>
          <p className="lead">
            Naming a feeling is the first thing that makes it smaller. Pick the one closest to
            today — read something honest about it, and if you want, talk to someone who has felt it too.
          </p>
        </div>

        <div className="grid">
          {FEELINGS.map(f => (
            <a key={f.slug} href={`/feeling/${f.slug}`} className="card">
              <div className="card-emoji">{f.emoji}</div>
              <div className="card-label">{f.label}</div>
            </a>
          ))}
        </div>

        <div className="section">
          <h2>Why naming it helps</h2>
          <p>
            Most of the weight people carry is unnamed. It sits as a general heaviness — a bad
            week, a flat mood, a tiredness that sleep does not fix. The moment it has a name,
            it stops being the whole weather and becomes one specific thing you are dealing with.
          </p>
          <p>
            That is all this page is for. No score, no streak, no diagnosis — just a name for
            today, something honest to read about it, and the option to talk to a real person
            who has been in the same place. LeanOn listeners are verified peers with genuine
            lived experience, not therapists and not AI, available 24/7 across India.
          </p>
        </div>

        <div className="cta-card">
          <h2>Rather just talk to someone?</h2>
          <p>Skip the reading. Browse peer listeners who have lived what you are feeling. Available 24/7.</p>
          <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
        </div>
      </div>
    </>
  )
}
