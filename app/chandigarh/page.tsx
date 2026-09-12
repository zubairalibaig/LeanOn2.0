import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Chandigarh — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Chandigarh. Family pressure, UPSC and engineering culture, Punjab/Haryana youth, joint family dynamics. From ₹160.',
  alternates: { canonical: 'https://www.leanon.app/chandigarh', languages: { 'en-IN': 'https://www.leanon.app/chandigarh' } },
  keywords: 'peer support Chandigarh, emotional support Chandigarh, family pressure Chandigarh, marriage pressure Punjab Haryana, UPSC stress Chandigarh, talk to someone Chandigarh',
  openGraph: {
    title: 'Emotional Support in Chandigarh — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Chandigarh. Family pressure, UPSC and engineering culture, Punjab/Haryana youth, joint family dynamics. From ₹160.',
    url: 'https://www.leanon.app/chandigarh',
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
      name: 'What makes the emotional challenges in Chandigarh unique?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chandigarh sits at the intersection of strong family and community culture (Punjab and Haryana) with a highly educated, aspirational population. The result is high expectations from families, strong pressure around career choices (UPSC, engineering, medicine, MBA), and marriage timelines that can feel suffocating even when the family means well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is there so much pressure on young people in Chandigarh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chandigarh has one of the highest concentrations of educated families in India. The culture places enormous value on achievement — government service, professional success, good marriage. When you grow up in that environment, the expectations can be heavy regardless of whether you share them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do joint family dynamics affect mental health in Punjab and Haryana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Joint families provide warmth and support, but they also create specific pressures: constant visibility, reduced privacy, family decisions made collectively, opinions about your career and marriage from multiple family members simultaneously. The weight of meeting expectations in a joint family context is specific and real.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do Chandigarh users talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common topics include family and marriage pressure, career uncertainty (UPSC vs private sector vs abroad), the specific loneliness of feeling different from what your family expects, identity questions, and the stress of living up to the image of a successful Chandigarh family.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn peer support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. More accessible (from ₹160 for 15 minutes), available 24/7, and completely anonymous. For clinical mental health concerns, professional help is always recommended.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Chandigarh', item: 'https://www.leanon.app/chandigarh' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/chandigarh',
  areaServed: { '@type': 'City', name: 'Chandigarh', addressCountry: 'IN' },
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

export default function ChandigarhPage() {
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
          <span style={{color:'var(--navy)'}}>Chandigarh</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Chandigarh · Punjab / Haryana</p>
          <h1>Peer Support in Chandigarh — Someone to Talk to When <em>Family Pressure Gets Heavy</em></h1>
          <p className="lead">Chandigarh is one of India&apos;s most liveable cities — clean, educated, prosperous. It is also a city where expectations run high, family opinions run deep, and young people often carry enormous pressure quietly. LeanOn connects you with someone who understands.</p>
        </div>

        <div className="section">
          <h2>Chandigarh&apos;s Unique Emotional Landscape</h2>
          <h3>The Weight of Family Expectations</h3>
          <p>Chandigarh has one of the highest concentrations of educated, aspirational families in India. The culture values achievement — government service, engineering, medicine, good marriage. When you grow up in that environment, the expectations can feel enormous even when the family means well.</p>
          <h3>Joint Family Dynamics</h3>
          <p>Punjab and Haryana have strong joint family cultures. Joint families provide warmth and security, but also create specific pressures: reduced privacy, opinions from multiple family members about your choices, collective decision-making on individual life questions. The weight of these dynamics is specific and often unspoken.</p>
          <h3>UPSC and Engineering Culture</h3>
          <p>The aspirational culture around government service (UPSC, state services) and engineering is intense in and around Chandigarh. The pressure to pursue prestigious paths — whether or not they match your actual interests — is a frequent source of identity conflict and quiet distress.</p>
          <h3>Marriage and Career Pressure on Youth</h3>
          <p>For young people in Chandigarh, the twin pressures of career achievement and marriage timelines often collide. The expectation to be established, settled, and married by a certain age — all simultaneously — creates a specific kind of anxiety that is hard to talk about in the very families applying the pressure.</p>
        </div>

        <div className="section">
          <h2>What Chandigarh Users Talk About on LeanOn</h2>
          <ul>
            <li><strong>Family and marriage pressure</strong> — the timeline, the expectations, the conversations you cannot have at home</li>
            <li><strong>Career uncertainty</strong> — UPSC vs private sector, staying vs going abroad, the guilt of choosing differently</li>
            <li><strong>Identity questions</strong> — who am I when I am not performing for my family?</li>
            <li><strong>Joint family friction</strong> — privacy, autonomy, being watched, collective decisions about individual life</li>
            <li><strong>The loneliness of feeling different</strong> — wanting something other than what your family imagines for you</li>
          </ul>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners from Chandigarh</h2>
        <div className="listeners-grid">
          {[
            { emoji: '📚', name: 'Gurpreet', tag: 'Family Pressure', bio: 'Grew up in a joint family in Chandigarh. Know the specific weight of expectations from people who love you. Here to listen without adding to it.' },
            { emoji: '🏛️', name: 'Simran', tag: 'Career Confusion', bio: 'Dropped UPSC prep after two years. The conversation with my family was hard. Happy to sit with anyone navigating a similar choice.' },
            { emoji: '💙', name: 'Harman', tag: 'Marriage Pressure', bio: 'Navigated family pressure around marriage in my late 20s. I know how isolating that can feel when you cannot talk to the people applying the pressure.' },
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
          <h2>Ready to Talk to Someone Who Gets Chandigarh?</h2>
          <p>Browse peer listeners who understand Punjab and Haryana family dynamics. No appointments, no waitlists, available right now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Chandigarh Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What makes the emotional challenges in Chandigarh unique?</div>
            <div className="faq-a">Chandigarh sits at the intersection of strong family and community culture with a highly educated, aspirational population. High expectations around career, marriage, and success — often from people who care deeply — create specific pressure that is hard to talk about openly.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why is there so much pressure on young people in Chandigarh?</div>
            <div className="faq-a">Chandigarh has one of the highest concentrations of educated families in India. The culture places enormous value on achievement — government service, professional success, good marriage. When you grow up in that environment, the expectations can be heavy.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do joint family dynamics affect mental health in Punjab and Haryana?</div>
            <div className="faq-a">Joint families provide warmth and support, but also create specific pressures: constant visibility, reduced privacy, family decisions made collectively, opinions from multiple family members simultaneously.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What do Chandigarh users talk about on LeanOn?</div>
            <div className="faq-a">Common topics include family and marriage pressure, career uncertainty (UPSC vs private sector), identity questions, joint family friction, and the loneliness of feeling different from family expectations.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn peer support different from therapy?</div>
            <div className="faq-a">Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. Accessible from ₹160 for 15 minutes, available 24/7, anonymous.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <div className="related">
            <a href="/support/family-pressure-india" className="related-link">Family Pressure</a>
            <a href="/support/not-ready-to-get-married-india" className="related-link">Marriage Pressure</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
            <a href="/noida" className="related-link">Peer Support Noida</a>
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
