import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Counselling India — Talk It Through with a Real Person | LeanOn',
  description: 'Relationship problems weighing on you? Talk to a real person — not an algorithm. Anonymous peer support from ₹160. No appointment needed.',
  keywords: ['relationship counselling india', 'marriage counselling india', 'couple counselling india', 'divorce support india', 'toxic relationship support india'],
  alternates: { canonical: 'https://www.leanon.app/relationship-counselling-india', languages: { 'en-IN': 'https://www.leanon.app/relationship-counselling-india' } },
  openGraph: {
    title: 'Relationship Counselling India — Talk It Through with a Real Person | LeanOn',
    description: 'Relationship problems weighing on you? Talk to a real person — not an algorithm. Anonymous peer support from ₹160. No appointment needed.',
    url: 'https://www.leanon.app/relationship-counselling-india',
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
      name: 'Is peer support the same as relationship counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Relationship counselling is delivered by a licensed therapist who can work with underlying patterns, communication disorders, and trauma. Peer support is delivered by someone with lived experience who listens without judgment. Peer support is ideal when you need to process, vent, get perspective, or decide what you actually feel — before or instead of formal counselling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need a professional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are dealing with abuse, severe trauma, addiction, or a clinical mental health condition, please see a licensed therapist or counsellor. LeanOn will always tell you honestly when professional help is the right path. For the emotional weight of relationship difficulties — the confusion, the grief, the frustration — peer support is often exactly what is needed first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You sign up with a phone number and a first name only. No last name, no photo, no social profile. What you share with a listener stays between you and them. Many people find it easier to talk about relationship problems with a stranger who has no connection to their social circle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my partner does not know I am using this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is between you and your partner. Many people use LeanOn to process their own feelings about a relationship before deciding what to do next — there is nothing wrong with seeking support for yourself. LeanOn is not couples therapy and does not require partner involvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Divorce decisions, the fear of divorce, the grief of a separation, the uncertainty about whether to stay or leave — these are among the most common things people come to LeanOn to talk through. A peer listener who has navigated relationship difficulty can hold space while you figure out what you actually want.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Counselling India', item: 'https://www.leanon.app/relationship-counselling-india' },
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
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .crisis{display:block;background:#EBF5FB;border-left:4px solid #1A8FA0;border-radius:0 12px 12px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;color:#0F4867;font-weight:600;line-height:1.65;}
  .crisis a{color:var(--teal);font-weight:800;}
  .stats-row{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px;}
  .stat-pill{background:white;border:1.5px solid var(--border);border-radius:50px;padding:10px 18px;font-size:14px;font-weight:800;color:var(--navy);text-align:center;}
  .stat-pill em{color:var(--teal);font-style:normal;}
  .steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{min-width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;}
  .step-text{padding-top:4px;}
  .step-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-desc{font-size:14px;color:var(--gray);line-height:1.6;font-weight:500;}
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

export default function RelationshipCounsellingIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Relationship Counselling India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Relationship Support · India · From ₹160</p>
          <h1>Relationship pain is heavy. <em>You don&apos;t have to carry it alone.</em></h1>
          <p className="lead">Marriage tension, divorce uncertainty, toxic patterns, breakup grief — relationship problems are some of the hardest things to carry alone, and some of the hardest to talk about to anyone in your life. Talk to a real person who gets it.</p>
        </div>

        <div className="stats-row">
          <div className="stat-pill">From <em>₹160</em>/session</div>
          <div className="stat-pill"><em>Anonymous</em></div>
          <div className="stat-pill">No <em>appointment</em></div>
          <div className="stat-pill">Couple therapy <em>₹2,000+</em></div>
        </div>

        <div className="section">
          <h2>What People Come to Talk About</h2>
          <ul>
            <li><strong>Marriage tension</strong> — communication breakdown, feeling unseen, growing apart</li>
            <li><strong>Divorce uncertainty</strong> — should I stay or go? The fear of making the wrong choice</li>
            <li><strong>Toxic patterns</strong> — recognising them, breaking them, processing the shame</li>
            <li><strong>Partner not understanding</strong> — the loneliness of feeling alone inside a relationship</li>
            <li><strong>In-laws pressure</strong> — the specific weight of Indian joint family expectations</li>
            <li><strong>Breakup grief</strong> — the loss that does not have a clear end date</li>
            <li><strong>Trust issues</strong> — betrayal, infidelity, rebuilding or walking away</li>
          </ul>
        </div>

        <div className="section">
          <h2>Why Peer Support — Not Just Formal Counselling</h2>
          <p>Professional relationship counselling is valuable — but it costs ₹2,000–₹8,000 per couple session, requires both partners to show up, and often has a weeks-long waitlist. For many people, that is not where they are right now.</p>
          <p>Peer support is different: it is immediate, it is anonymous, and it does not require your partner to be involved. Sometimes you just need to talk to someone who has been through something similar — not a professional with a clipboard, but a real person who has lived the complexity of relationship pain and come out the other side.</p>
          <p>Couple therapy costs ₹2,000+ per session. LeanOn peer support starts at ₹160.</p>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <div className="step-title">Browse listeners by specialty</div>
                <div className="step-desc">See peer listeners with lived experience in relationships, breakups, marriage pressure, and family dynamics.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <div className="step-title">Pick someone who gets your situation</div>
                <div className="step-desc">Read their background, see their rate, choose someone whose experience aligns with what you are carrying.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <div className="step-title">Start your session in minutes</div>
                <div className="step-desc">No appointments, no waitlist. First 5 minutes free on every session. <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>Browse listeners now.</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card">
          <h2>Talk to Someone Who Gets It</h2>
          <p>Anonymous peer support for relationship pain. From ₹160. No appointment, no waitlist.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is peer support the same as relationship counselling?</div>
            <div className="faq-a">No. Relationship counselling is delivered by a licensed therapist. Peer support is delivered by someone with lived experience who listens without judgment. Peer support is ideal when you need to process, vent, or get perspective — before or instead of formal counselling.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I need a professional?</div>
            <div className="faq-a">If you are dealing with abuse, severe trauma, or a clinical condition, please see a licensed therapist. LeanOn will always point you toward professional help when that is the right path. For the emotional weight of relationship difficulties, peer support is often exactly what is needed first.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it anonymous?</div>
            <div className="faq-a">Yes. First name only, no photo, no social profile. What you share with a listener stays between you and them. Many people find it easier to talk about relationship problems with someone who has no connection to their social circle.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if my partner does not know I am using this?</div>
            <div className="faq-a">That is between you and your partner. Many people use LeanOn to process their own feelings before deciding what to do next. LeanOn is not couples therapy and does not require partner involvement.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk about divorce?</div>
            <div className="faq-a">Yes. Divorce decisions, fear of divorce, the grief of separation, uncertainty about whether to stay or leave — these are among the most common things people come to LeanOn to talk through.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/marriage-problems-india" className="related-link">Marriage Problems India</a>
            <a href="/love-problems-india" className="related-link">Love Problems India</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/blog/relationship-counselling-vs-peer-support-india" className="related-link">Counselling vs Peer Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
          </div>
        </div>
      </div>
    </>
  )
}
