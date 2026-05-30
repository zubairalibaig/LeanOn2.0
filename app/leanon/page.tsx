import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'LeanOn — What Is LeanOn? India\'s Peer Support Platform',
  description: 'LeanOn (Lean On) is India\'s peer support platform. Learn what LeanOn means, how it works, who it\'s for, and why it\'s the most human alternative to therapy in India. First 5 minutes free.',
  alternates: { canonical: 'https://www.leanon.app/leanon' },
  keywords: [
    'LeanOn', 'leanon', 'lean on', 'lean on app', 'leanon app', 'what is leanon',
    'leanon India', 'leanon peer support', 'leanon meaning', 'lean on meaning',
    'leanon review', 'leanon how it works', 'leanon app India',
  ],
  openGraph: {
    title: 'LeanOn — What Is LeanOn? India\'s Peer Support Platform',
    description: 'LeanOn is India\'s peer support platform. Someone to lean on, anytime.',
    url: 'https://www.leanon.app/leanon',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const brandSchema = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  name: 'LeanOn',
  alternateName: ['Lean On', 'leanon', 'LeanOn App', 'leanon app'],
  description: 'LeanOn is India\'s peer support platform — someone to lean on, anytime. Talk to real people who have lived through what you\'re facing.',
  url: 'https://www.leanon.app',
  logo: 'https://www.leanon.app/logo.png',
  sameAs: [
    'https://www.instagram.com/leanon.app',
    'https://twitter.com/leanonapp',
    'https://www.linkedin.com/company/leanon-app',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is India\'s peer support platform — an app that connects people with verified peer listeners who have personally experienced the same challenges. It\'s not therapy. It\'s real human connection, available 24/7, starting at ₹0 for the first 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "LeanOn" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn takes its name from the phrase "lean on" — which means to emotionally rely on someone, to let another person support you when you\'re struggling. The platform is built on the idea that everyone deserves someone to lean on. LeanOn (one word) is the brand; "lean on" is what the platform enables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it called LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The name LeanOn was chosen because "lean on" captures the emotional core of what we offer: not diagnosis, not advice, not therapy — just someone to lean on. A real human who has been through what you\'re going through. The name comes from the phrase "lean on me" — someone you can trust to hold your weight when you\'re unsteady.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn the same as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support, not therapy. Listeners on LeanOn are verified people with lived experience — not licensed therapists or counselors. They offer genuine empathy and understanding, not clinical diagnosis. LeanOn is for when you need someone who truly gets it, not a professional evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn offers a completely free 5-minute first session — no credit card, no wallet top-up. After that, sessions start from ₹165 for 15 minutes (listener earns ₹150, LeanOn adds a flat ₹15 fee). This is significantly more affordable than therapy, which typically costs ₹1,500–5,000 per session in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn safe and private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn uses phone OTP sign-up (no full name required), keeps all sessions completely private, never shares conversation content, and has AI moderation for safety. Your identity is protected — only your first name is ever shown to a listener.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from other mental health apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most mental health apps in India are either AI chatbots (not real humans) or professional therapy platforms (expensive, clinical). LeanOn sits between: real humans with lived experience, available instantly, at a fraction of the cost of therapy. It\'s peer support — the most human option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available across India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is fully online and available across all of India — Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Jaipur, Ahmedabad, and everywhere else. Sign up takes 30 seconds with just your mobile number.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'About LeanOn', item: 'https://www.leanon.app/leanon' },
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
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;}
  .breadcrumb a:hover{color:var(--teal);}
  .breadcrumb span{color:var(--border);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .meaning-card{background:var(--light);border:2px solid var(--teal);border-radius:20px;padding:28px;margin-bottom:24px;text-align:center;}
  .meaning-card h2{font-size:28px;font-weight:900;color:var(--navy);margin-bottom:12px;}
  .meaning-card p{font-size:16px;color:#3A6070;line-height:1.75;font-weight:500;}
  .diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px;}
  .diff-card{border-radius:16px;padding:18px;}
  .diff-card.them{background:#FFF0F0;border:1.5px solid #FFCDD2;}
  .diff-card.us{background:rgba(26,143,160,0.08);border:1.5px solid rgba(26,143,160,0.3);}
  .diff-title{font-size:13px;font-weight:800;margin-bottom:8px;}
  .diff-card.them .diff-title{color:#C0392B;}
  .diff-card.us .diff-title{color:var(--teal);}
  .diff-list{font-size:13px;color:#3A6070;line-height:1.7;font-weight:500;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:12px 16px;font-size:13px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function LeanOnBrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Get started free</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>About LeanOn</span>
        </nav>

        <div className="hero">
          <p className="tag">Brand · LeanOn</p>
          <h1>What Is <em>LeanOn</em>?</h1>
          <p className="lead">LeanOn is India&apos;s peer support platform — named after the act of leaning on someone. Real humans. Real understanding. Available any time, anywhere in India. Your first 5 minutes are free.</p>
        </div>

        {/* The name meaning */}
        <div className="meaning-card">
          <h2>&ldquo;Lean on&rdquo; — What It Means</h2>
          <p>To <strong>lean on</strong> someone means to draw on their emotional strength when yours is running low. To trust them with your weight. To let another human being hold part of what you&apos;re carrying. LeanOn (one word, one platform) gives everyone access to that — to real people who have been through what you&apos;re facing and found their way through.</p>
        </div>

        {/* Why LeanOn exists */}
        <div className="section">
          <h2>Why LeanOn Was Built</h2>
          <p>In India, millions of people are struggling silently. With loneliness, burnout, grief, anxiety, relationship pain, career confusion. They need someone to talk to — but therapy is expensive, stigmatised, and hard to access. AI chatbots feel hollow. Friends don&apos;t always understand. Family often can&apos;t be trusted with certain struggles.</p>
          <p>LeanOn was built to fill that gap. It connects people with <strong>peer listeners</strong> — real individuals who have personally navigated the same challenge, and come out the other side. They&apos;re not therapists. They&apos;re not AI. They&apos;re human beings who get it.</p>

          <h3>The LeanOn Promise</h3>
          <p>Every person who comes to LeanOn deserves someone who truly understands. Not a script. Not a diagnosis. A human being who has been there, and is ready to listen without judgment. That is the LeanOn promise — and everything we build is in service of it.</p>
        </div>

        {/* How it differs */}
        <div className="section">
          <h2>LeanOn vs. Other Options</h2>
          <div className="diff-grid">
            <div className="diff-card them">
              <div className="diff-title">❌ Without LeanOn</div>
              <div className="diff-list">
                Therapy: ₹1,500–5,000/session<br/>
                Wait weeks for an appointment<br/>
                AI chatbots: no real empathy<br/>
                Friends: judgment risk<br/>
                Family: privacy impossible
              </div>
            </div>
            <div className="diff-card us">
              <div className="diff-title">✅ LeanOn</div>
              <div className="diff-list">
                From ₹165 for 15 minutes<br/>
                Start in 60 seconds<br/>
                Real humans with lived experience<br/>
                Completely private<br/>
                Available 24/7, even 2 AM
              </div>
            </div>
          </div>
        </div>

        {/* Consistent branding section */}
        <div className="section">
          <h2>Always &ldquo;LeanOn&rdquo; — One Word, One Mission</h2>
          <p>The brand is always written as <strong>LeanOn</strong> — one word, capital L, capital O. This reflects the platform&apos;s core idea: that the act of leaning on someone is a single, unified thing. Not two separate actions, but one continuous experience of trust, support, and connection.</p>
          <p>Whether you see it written as <em>LeanOn</em>, <em>leanon</em>, or <em>lean on app</em> — it all points to the same platform, the same promise, and the same community of real humans ready to listen.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Ready to Lean on Someone?</h2>
          <p>Your first 5 minutes are completely free. No credit card. No appointment. Someone is available right now.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Start free — no card needed</button></a>
            <a href="/browse"><button className="btn-secondary">Browse peer listeners</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions About LeanOn</h2>
          {[
            { q: 'What is LeanOn?', a: 'LeanOn is India\'s peer support platform — an app that connects people with verified peer listeners who have personally experienced the same challenges. It\'s not therapy. It\'s real human connection, available 24/7, starting at ₹0 for the first 5 minutes.' },
            { q: 'What does "LeanOn" mean?', a: '"LeanOn" takes its name from "lean on" — to emotionally rely on someone, to let another person support you when you\'re struggling. The platform is built on the idea that everyone deserves someone to lean on.' },
            { q: 'Why is it called LeanOn?', a: 'The name was chosen because "lean on" captures what we offer: not therapy, not AI, not advice — just someone to lean on. A real human who has been through what you\'re going through.' },
            { q: 'Is LeanOn the same as therapy?', a: 'No. LeanOn is peer support, not therapy. Listeners are verified people with lived experience — not licensed therapists. They offer genuine empathy and understanding, not clinical diagnosis.' },
            { q: 'How much does LeanOn cost?', a: 'LeanOn offers a free 5-minute first session. After that, sessions start from ₹165 for 15 minutes — significantly more affordable than therapy (₹1,500–5,000/session in India).' },
            { q: 'Is LeanOn safe and private?', a: 'Yes. Phone OTP sign-up (no full name required), sessions completely private, never shares conversation content, AI moderation for safety.' },
            { q: 'How is LeanOn different from other mental health apps?', a: 'Unlike AI chatbots (not real humans) or professional therapy platforms (expensive, clinical), LeanOn offers real humans with lived experience, available instantly, at a fraction of therapy cost.' },
            { q: 'Is LeanOn available across India?', a: 'Yes — Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, and everywhere else. Online, 24/7.' },
          ].map((f, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>

        {/* LeanOn vs Lean On (the song) — disambiguation */}
        <div className="section">
          <h2>LeanOn vs &ldquo;Lean On&rdquo; — The App vs The Song</h2>
          <p>If you found us while searching for the Major Lazer song &ldquo;Lean On&rdquo; — welcome! You&apos;ve found something different (and arguably more useful).</p>
          <table style={{width:'100%',borderCollapse:'collapse',marginTop:12,marginBottom:16}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',padding:'10px 12px',background:'var(--light)',border:'1.5px solid var(--border)',fontWeight:800,color:'var(--navy)',fontSize:13}}>Feature</th>
                <th style={{textAlign:'center',padding:'10px 12px',background:'rgba(255,153,51,0.1)',border:'1.5px solid var(--border)',fontWeight:800,color:'var(--navy)',fontSize:13}}>LeanOn (the app)</th>
                <th style={{textAlign:'center',padding:'10px 12px',background:'var(--light)',border:'1.5px solid var(--border)',fontWeight:800,color:'var(--gray)',fontSize:13}}>&ldquo;Lean On&rdquo; (the song)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['What is it?', 'Peer support platform for India', 'Dance/pop song by Major Lazer & DJ Snake'],
                ['Can it help you?', 'Yes — real humans, real conversations', 'Emotionally, maybe. Practically, no'],
                ['Available in India?', 'Yes — 24/7, across all cities', 'On all streaming platforms'],
                ['Free to try?', 'Yes — first 5 minutes free', 'Yes — it is just a song'],
                ['Will you feel better?', 'Very likely', 'Depends on your taste in music'],
              ].map(([f, a, b], i) => (
                <tr key={i}>
                  <td style={{padding:'10px 12px',border:'1px solid var(--border)',fontSize:13,fontWeight:600,color:'var(--navy)'}}>{f}</td>
                  <td style={{padding:'10px 12px',border:'1px solid var(--border)',fontSize:13,color:'#276749',fontWeight:700,textAlign:'center'}}>{a}</td>
                  <td style={{padding:'10px 12px',border:'1px solid var(--border)',fontSize:13,color:'var(--gray)',fontWeight:500,textAlign:'center'}}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{fontSize:13,color:'var(--gray)'}}>Bottom line: &ldquo;Lean On&rdquo; (the song) is catchy. LeanOn (this app) is where you actually lean on a real person when life gets hard. Both have their place — but only one can help you through a rough night.</p>

          <h3>More FAQs: LeanOn App vs The Song</h3>
          {[
            { q: 'Is LeanOn the app or the song?', a: 'LeanOn is an app — India\'s peer support platform. The song "Lean On" is by Major Lazer and DJ Snake. We share the same phrase but are entirely unrelated.' },
            { q: 'What does "lean on" mean in the LeanOn app context?', a: 'In the app, "lean on" means finding a real human you can emotionally rely on during hard times. A peer listener who has been through what you\'re going through and can offer genuine understanding — not advice, not therapy, just presence.' },
            { q: 'Is LeanOn an app review or a song?', a: 'LeanOn is a peer support app — read user reviews on our website. If you\'re looking for the "Lean On" song review, that\'s a different (and very catchy) song.' },
            { q: 'What is "leanon app" India?', a: 'LeanOn is India\'s peer emotional support app — you can talk to real listeners about anxiety, loneliness, burnout, relationships, and more. First 5 minutes free, available 24/7.' },
          ].map((f, i) => (
            <div key={i} className="faq-item" style={{marginTop: i === 0 ? 16 : 0}}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>

        {/* Related */}
        <div className="section">
          <h2>Learn More About LeanOn</h2>
          <div className="related">
            <a href="/about" className="related-link">About LeanOn</a>
            <a href="/faq" className="related-link">Full FAQ</a>
            <a href="/glossary" className="related-link">Peer support glossary</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &ldquo;lean on&rdquo; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/support" className="related-link">All support topics</a>
            <a href="/browse" className="related-link">Browse listeners</a>
          </div>
        </div>
      </div>
    </>
  )
}
