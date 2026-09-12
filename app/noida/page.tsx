import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Noida — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Noida, NCR. Young professionals, IT burnout, apartment loneliness. Talk anonymously on LeanOn from ₹160.',
  alternates: { canonical: 'https://www.leanon.app/noida', languages: { 'en-IN': 'https://www.leanon.app/noida' } },
  keywords: 'peer support Noida, emotional support Noida NCR, IT burnout Noida, loneliness Noida, work stress Noida, talk to someone Noida, leanon Noida',
  openGraph: {
    title: 'Emotional Support in Noida — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Noida, NCR. Young professionals, IT burnout, apartment loneliness. Talk anonymously on LeanOn from ₹160.',
    url: 'https://www.leanon.app/noida',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do so many young professionals in Noida feel lonely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Noida draws a large young professional population — primarily IT and corporate workers who have relocated from across India. Most live in high-rise apartments in sectors with limited community infrastructure. Without the social scaffolding of a hometown, loneliness builds quickly despite a busy-looking work life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is IT burnout and how does it affect Noida workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Noida is one of India\'s largest IT hubs. The sector culture rewards long hours and penalises vulnerability. Many workers experience chronic exhaustion, loss of motivation, and the specific anxiety of performance reviews and layoff cycles — but feel they cannot talk about it with colleagues.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the commute stress in Noida different from other cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NCR commutes — especially on the Delhi-Noida stretch — are among the most draining in India. Long commutes reduce time for social connection, increase fatigue, and compound the isolation of apartment living. Many Noida workers spend 3-4 hours a day commuting, leaving little space for anything else.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of issues do Noida users talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common topics from Noida include work pressure and IT burnout, loneliness in apartment complexes, career confusion, relationship stress (often long-distance), and the specific anxiety of being far from family while navigating a demanding career.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn peer support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is peer support, not therapy. Listeners are trained peers with lived experience — not licensed therapists. More accessible (from ₹160 for 15 minutes), available 24/7, and anonymous. For clinical mental health concerns, professional help is always recommended.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Noida', item: 'https://www.leanon.app/noida' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/noida',
  areaServed: { '@type': 'City', name: 'Noida', addressCountry: 'IN' },
  serviceType: 'Peer Emotional Support',
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
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
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
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function NoidaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Noida</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Noida · NCR</p>
          <h1>Peer Support in Noida — Someone to Talk to in <em>India&apos;s IT Corridor</em></h1>
          <p className="lead">Noida is home to lakhs of young professionals building careers in IT, finance, and corporate India. What the sectors do not show: the loneliness of apartment life, the burnout of long hours, and the commute that eats what is left. LeanOn connects you with peer listeners who get it.</p>
        </div>

        <div className="section">
          <h2>Noida&apos;s Unique Emotional Landscape</h2>
          <h3>Apartment Loneliness in a High-Rise City</h3>
          <p>Noida&apos;s residential landscape is dominated by high-rise apartment complexes — Sector 50, Sector 62, Sector 137. Thousands of young professionals live in proximity without real community. The elevator silence, the empty weekends, the acquaintances-who-are-not-friends — this specific loneliness is a defining feature of Noida life for many.</p>
          <h3>IT Hub Burnout</h3>
          <p>Noida and Greater Noida are home to some of India&apos;s largest IT and BPO operations. The work culture in many of these organisations rewards long hours and treats vulnerability as weakness. Many workers carry enormous professional pressure with nowhere to take it.</p>
          <h3>The NCR Commute</h3>
          <p>The Delhi-Noida commute is one of India&apos;s most draining. Many workers spend 3-4 hours daily on roads that are among the most congested in the country. The time and energy cost is real — and so is the stress.</p>
          <h3>Young and Far from Home</h3>
          <p>Most people who move to Noida for work are far from their families. The support network that existed back home — parents, old friends, familiar places — is not here. Building a new network from scratch in a professional city is harder and slower than it looks.</p>
        </div>

        <div className="section">
          <h2>What Noida Users Talk About on LeanOn</h2>
          <ul>
            <li><strong>Work stress and IT burnout</strong> — the sprint that never ends, performance reviews, the fear of being replaced</li>
            <li><strong>Loneliness after relocating</strong> — having colleagues but not friends, the hollow feeling of a full calendar</li>
            <li><strong>Career confusion</strong> — is this the right field? am I on the right track? should I switch?</li>
            <li><strong>Long-distance relationships</strong> — the weight of maintaining a relationship across cities or states</li>
            <li><strong>Family pressure</strong> — marriage timelines, financial expectations, the cost of being the one who left home to make it</li>
          </ul>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners from Noida</h2>
        <div className="listeners-grid">
          {[
            { emoji: '💻', name: 'Arjun', tag: 'IT Burnout', bio: 'Spent 5 years in the IT sector in Noida. Know what it feels like when the work is all there is and it stops feeling like enough.' },
            { emoji: '🌆', name: 'Priya', tag: 'Relocation Loneliness', bio: 'Moved to Noida from Lucknow at 24. Three years of high-rise living taught me the difference between being surrounded and being alone.' },
            { emoji: '🚇', name: 'Rahul', tag: 'Work-Life Pressure', bio: 'NCR commuter, corporate sector. The grind is real. Happy to listen when you need someone who has been in it.' },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets Noida?</h2>
          <p>Browse peer listeners who understand NCR life. No appointments, no waitlists, available right now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Noida Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why do so many young professionals in Noida feel lonely?</div>
            <div className="faq-a">Noida draws large numbers of IT and corporate workers who have relocated. Most live in high-rise apartments with limited community infrastructure. Without the social scaffolding of a hometown, loneliness builds quickly despite a busy work life.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is IT burnout and how does it affect Noida workers?</div>
            <div className="faq-a">IT burnout is chronic exhaustion from prolonged work stress — loss of motivation, detachment, and the anxiety of performance cycles. Noida is one of India&apos;s largest IT hubs and the sector culture often rewards hustle and penalises vulnerability.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is the commute stress in Noida different from other cities?</div>
            <div className="faq-a">NCR commutes — especially on the Delhi-Noida stretch — are among the most draining in India. Many workers spend 3-4 hours daily commuting, reducing time for social connection and compounding the isolation of apartment living.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What kind of issues do Noida users talk about on LeanOn?</div>
            <div className="faq-a">The most common topics include work pressure and IT burnout, loneliness in apartment complexes, career confusion, long-distance relationship stress, and the anxiety of being far from family.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn peer support different from therapy?</div>
            <div className="faq-a">Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. More accessible (from ₹160 for 15 minutes), available 24/7, and anonymous.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <div className="related">
            <a href="/work-stress-india" className="related-link">IT Burnout Support</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
            <a href="/gurgaon" className="related-link">Peer Support Gurgaon</a>
          </div>
        </div>

        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals.</p>
        </div>
      </div>
    </>
  )
}
