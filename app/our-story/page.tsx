import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story | LeanOn — Peer Support for India',
  description: 'The story of LeanOn — why we built India\'s peer emotional support platform and what drives us to make meaningful connection accessible to everyone.',
  keywords: ['leanon story', 'about leanon', 'leanon founding', 'peer support india mission'],
  alternates: { canonical: 'https://www.leanon.app/our-story' },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.leanon.app/#organization',
  name: 'LeanOn',
  url: 'https://www.leanon.app',
  foundingDate: '2024',
  foundingLocation: { '@type': 'Place', name: 'India' },
  description: 'LeanOn is India\'s peer emotional support platform connecting people with verified peer listeners who have lived through loneliness, burnout, grief, and more.',
  areaServed: { '@type': 'Country', name: 'India' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Our Story — Why We Built LeanOn',
  author: { '@type': 'Organization', name: 'LeanOn Editorial Team' },
  publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
  datePublished: '2024-01-01',
  dateModified: '2026-05-01',
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;}
`

export default function OurStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{height:48}} /></a>
        <a href="/auth"><button className="btn" style={{fontSize:13,padding:'8px 20px'}}>Try free</button></a>
      </nav>
      <div className="page">
        <a href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:700,color:'var(--gray)',marginBottom:28}}>← Back</a>
        <h1>Our Story</h1>
        <p className="lead">LeanOn was built because someone needed it and it didn&apos;t exist yet. This is the story of why we built it — and what we believe about the power of being truly heard.</p>

        <div className="card">
          <h2>The moment that started it all</h2>
          <p>LeanOn was founded by someone who went through a profoundly difficult period — the kind where you know you need to talk to someone, but all the available options feel wrong. Therapy felt like a clinical label. Helplines felt scripted. Friends didn&apos;t have the bandwidth. Family didn&apos;t understand.</p>
          <p>What was missing was simple: a real human who had been through something similar and could just sit with you in it. Not advise. Not diagnose. Just listen — and understand from lived experience.</p>
          <p>LeanOn was built to create that space. Scaled. Accessible. For India.</p>
        </div>

        <div className="card">
          <h2>Why peer support matters</h2>
          <p>The research on peer support is clear: being heard by someone with shared lived experience reduces feelings of isolation, improves coping, and creates genuine connection that clinical settings often cannot replicate. Peer support doesn&apos;t compete with therapy — it fills a different, equally important role.</p>
          <p>In India, where 1 in 7 people faces mental health challenges but fewer than 1% receive any support, peer support isn&apos;t a nice-to-have. It&apos;s essential infrastructure.</p>
        </div>

        <div className="card">
          <h2>How we built LeanOn</h2>
          <p>LeanOn launched with a simple idea: connect people who are struggling with people who have been through the same thing and found their way through. We built a rigorous listener verification process, a 4-module training program, and a platform designed for Indian privacy constraints — text-first, OTP-only, 12 languages.</p>
          <p>Every decision we make is anchored in one question: does this make it easier for someone to feel genuinely heard? From our pricing to our anonymity features to our crisis protocols — that question guides everything.</p>
        </div>

        <div className="card">
          <h2>Where we are today</h2>
          <p>LeanOn has facilitated thousands of peer support sessions across India. Our listeners include people who have survived burnout, rebuilt after breakups, processed grief, navigated the pressure of being the &ldquo;successful&rdquo; one in the family, and found their way through anxiety and loneliness.</p>
          <p>We are growing. We are learning. And we are deeply committed to the idea that no one in India should feel alone because support was too expensive, too stigmatized, or too hard to reach.</p>
        </div>

        <div className="cta">
          <h2>Be part of the LeanOn story</h2>
          <p>As a seeker looking for support, or a listener wanting to give back — you belong here.</p>
          <a href="/browse"><button className="btn">Start free →</button></a>
        </div>
      </div>
    </>
  )
}
