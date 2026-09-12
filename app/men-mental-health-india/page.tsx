import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Men Mental Health India — It Takes Courage to Talk | LeanOn',
  description: 'Men in India rarely ask for help. That changes here. Anonymous peer support from ₹160 — talk to a real person, no judgement.',
  keywords: ['men mental health india', 'men asking for help india', 'men depression india', 'men anxiety india', 'men loneliness india', 'boys dont cry india', 'male mental health india'],
  alternates: { canonical: 'https://www.leanon.app/men-mental-health-india', languages: { 'en-IN': 'https://www.leanon.app/men-mental-health-india' } },
  openGraph: {
    title: 'Men Mental Health India — It Takes Courage to Talk | LeanOn',
    description: 'Men in India rarely ask for help. That changes here. Anonymous peer support from ₹160 — talk to a real person, no judgement.',
    url: 'https://www.leanon.app/men-mental-health-india',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is seeking mental health help a sign of weakness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It takes more strength to ask for help than to carry something silently until it breaks you. The idea that men should handle everything alone is a cultural script, not a biological fact — and it has an enormous cost. India has one of the highest male suicide rates globally. Asking for support is not weakness; it is exactly the strength that the situation requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do not men in India talk about mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because they are taught not to. "Be strong." "Do not cry." "Handle it." These messages start in childhood and are reinforced throughout life. The result is a generation of men who have no vocabulary for what they are feeling and no practice asking for support. LeanOn is a space where that changes — one conversation at a time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I talk about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anything. Work pressure, marriage pressure, loneliness, not knowing what you feel, comparison with others, fear of failure, relationship difficulty, family expectations, the specific weight of being the one who is supposed to have it together. There is no topic that is off limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can women listeners understand men\'s problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The core of peer support is empathy and listening — not gender matching. LeanOn has both male and female listeners. You choose who you talk to based on their background and what feels right for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First name only, no photo, no employer, no social account. Complete anonymity — which is especially important for men who have professional or social reasons to keep their emotional struggles private.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Men Mental Health India', item: 'https://www.leanon.app/men-mental-health-india' },
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
  .breadcrumb a:hover{color:var(--teal);}
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
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .highlight-box{background:var(--light);border-radius:16px;padding:24px;margin-bottom:16px;text-align:center;}
  .highlight-box p{font-size:20px;font-weight:900;color:var(--navy);line-height:1.4;margin-bottom:0;}
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
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
`

export default function MenMentalHealthIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Men Mental Health India</span>
        </nav>

        <div className="hero">
          <p className="tag">Men&apos;s Mental Health · India · From ₹160</p>
          <h1>In India, men are told to be strong. <em>Nobody told you being strong includes asking for help.</em></h1>
          <p className="lead">Work pressure. Marriage pressure. Loneliness you cannot name. Not feeling enough. You have been carrying it — because that is what you were taught to do. This is a place where you do not have to.</p>
        </div>

        <div className="highlight-box">
          <p>&quot;You are not weak for struggling. You are human.&quot;</p>
        </div>

        <div className="section">
          <h2>The Male Loneliness Epidemic in India</h2>
          <p>India has one of the highest rates of male suicide globally. Men in India are taught from childhood that vulnerability is weakness, that emotions are something to push through, that asking for support is something other people do. The result is a silent epidemic — millions of men carrying enormous weight with no one to talk to.</p>
          <p>This is not a personal failing. It is a cultural one. And it is one that can change — one conversation at a time.</p>
        </div>

        <div className="section">
          <h2>What Men Actually Come to LeanOn to Talk About</h2>
          <ul>
            <li><strong>Work pressure</strong> — the expectation to provide, to succeed, to never admit it is too much</li>
            <li><strong>Marriage pressure</strong> — family expectations around when to marry, who to marry, the fear of making the wrong choice</li>
            <li><strong>Loneliness</strong> — the specific kind that men rarely admit to, especially in a city away from home</li>
            <li><strong>Not feeling enough</strong> — comparison with peers, the sense that everyone else has figured it out</li>
            <li><strong>Not knowing what to feel</strong> — emotional numbness, the disconnection that comes from years of suppression</li>
            <li><strong>Relationship difficulty</strong> — not being understood, not knowing how to communicate, the specific pain of a relationship that is falling apart</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why LeanOn Works for Men</h2>
          <ul>
            <li><strong>Anonymous</strong> — no one in your social or professional network knows you are here</li>
            <li><strong>Voice call</strong> — feels more natural than typing out your feelings to a stranger</li>
            <li><strong>Indian context</strong> — listeners who understand the specific pressures of Indian masculine identity</li>
            <li><strong>No judgment</strong> — the listener is not going to think less of you for struggling</li>
            <li><strong>No commitment</strong> — from ₹160, pay as you go, no subscription</li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>Talking Is Strength</h2>
          <p>Anonymous peer support from ₹160. No judgment. Available now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is seeking mental health help a sign of weakness?</div>
            <div className="faq-a">No. It takes more strength to ask for help than to carry something silently until it breaks you. India has one of the highest male suicide rates globally. Asking for support is not weakness — it is exactly the strength the situation requires.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why do men in India not talk about mental health?</div>
            <div className="faq-a">Because they are taught not to. &quot;Be strong.&quot; &quot;Do not cry.&quot; &quot;Handle it.&quot; These messages start in childhood and are reinforced throughout life. LeanOn is a space where that changes.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What can I talk about?</div>
            <div className="faq-a">Anything. Work pressure, marriage pressure, loneliness, not knowing what you feel, comparison with others, fear of failure, relationship difficulty, family expectations. There is no topic that is off limits.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can women listeners understand men&apos;s problems?</div>
            <div className="faq-a">Yes. The core of peer support is empathy and listening — not gender matching. LeanOn has both male and female listeners. You choose who you talk to based on their background.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this anonymous?</div>
            <div className="faq-a">Yes. First name only, no photo, no employer, no social account. Complete anonymity — especially important for men who have professional or social reasons to keep their emotional struggles private.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/support/men-loneliness-india" className="related-link">Men&apos;s Loneliness</a>
            <a href="/support/not-ready-to-get-married-india" className="related-link">Marriage Pressure</a>
            <a href="/support/banking-job-stress-india" className="related-link">Banking Job Stress</a>
            <a href="/blog/men-loneliness-india" className="related-link">Men&apos;s Loneliness Blog</a>
            <a href="/work-stress-india" className="related-link">Work Stress India</a>
          </div>
        </div>
      </div>
    </>
  )
}
