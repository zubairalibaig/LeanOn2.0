import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Gurgaon — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Gurgaon (Gurugram). Corporate burnout, startup stress, transient loneliness. Talk anonymously on LeanOn from ₹160.',
  alternates: { canonical: 'https://www.leanon.app/gurgaon', languages: { 'en-IN': 'https://www.leanon.app/gurgaon' } },
  keywords: 'peer support Gurgaon, emotional support Gurugram, corporate burnout Gurgaon, loneliness Gurgaon, startup stress Gurugram, talk to someone Gurgaon, leanon Gurgaon',
  openGraph: {
    title: 'Emotional Support in Gurgaon — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Gurgaon (Gurugram). Corporate burnout, startup stress, transient loneliness. Talk anonymously on LeanOn from ₹160.',
    url: 'https://www.leanon.app/gurgaon',
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
      name: 'Why is Gurgaon particularly prone to professional burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gurgaon concentrates some of India\'s most intense workplaces — BFSI firms, MNC headquarters, ambitious startups — in one city. The professional density creates constant benchmarking: what title, which company, what package. The culture rewards performance and treats vulnerability as weakness. The result is high achievement alongside high burnout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the transient population problem in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike cities where people are born and raised, most Gurgaon residents came for a job. When the job changes — and in Gurgaon, it often does — many people leave. This creates a city of people who are always meeting and losing each other, making deep roots feel impossible and loneliness feel permanent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is weekend loneliness in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Gurgaon work week is full — often 60+ hours. But the weekends can feel empty. Without the roots of a hometown, without childhood friends, many people find weekends in Gurgaon more isolating than the work week. The city does not have the organic social fabric that older cities do.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do Gurgaon users talk about on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common topics include professional burnout and identity (what am I outside of my job?), weekend loneliness, the fear of failing in a city where success is the only narrative, relationship stress in a transient city, and the specific pressure of finance and tech sector career anxiety.',
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
    { '@type': 'ListItem', position: 2, name: 'Gurgaon', item: 'https://www.leanon.app/gurgaon' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/gurgaon',
  areaServed: { '@type': 'City', name: 'Gurugram', addressCountry: 'IN' },
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

export default function GurgaonPage() {
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
          <span style={{color:'var(--navy)'}}>Gurgaon</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Gurgaon · Gurugram</p>
          <h1>Peer Support in Gurgaon — Someone to Talk to in <em>India&apos;s Corporate Capital</em></h1>
          <p className="lead">Gurgaon is built around ambition. The glass towers, the startups, the MNCs, the hustle. But nobody tells you about the weekends — when the meetings stop and you realise you do not quite belong anywhere here.</p>
        </div>

        <div className="section">
          <h2>Gurgaon&apos;s Unique Emotional Challenges</h2>
          <h3>Professional Burnout in a City of Overachievers</h3>
          <p>Gurgaon concentrates some of India&apos;s most intense workplaces — BFSI firms, MNC headquarters, ambitious startups. The professional density creates constant benchmarking: what title, which company, what package. The culture rewards performance and treats rest as weakness.</p>
          <h3>A Transient City</h3>
          <p>Unlike cities where people grow up, most Gurgaon residents came for a job. When the job changes — and in Gurgaon, it often does — many people leave. This creates a city of people always meeting and losing each other. Deep roots feel impossible. The person you had dinner with last month might be in Bengaluru by next month.</p>
          <h3>Weekend Loneliness</h3>
          <p>The Gurgaon work week is full — often exhaustingly so. But the weekends can feel empty. Without the roots of a hometown, without childhood friends nearby, many people find the weekend more isolating than the work week. The city does not have the organic social fabric of older cities.</p>
          <h3>Startup and Finance Sector Pressure</h3>
          <p>The startup ecosystem and the finance sector in Gurgaon both carry specific pressures: funding cycles, IPO anxiety, targets, performance pressure. The stakes feel high and the social cost of admitting struggle feels higher.</p>
        </div>

        <div className="section">
          <h2>What Gurgaon Users Talk About on LeanOn</h2>
          <ul>
            <li><strong>Professional burnout</strong> — the specific exhaustion of a city where work is always the answer</li>
            <li><strong>Identity beyond the job</strong> — &quot;who am I when I am not working?&quot;</li>
            <li><strong>Transient loneliness</strong> — the city keeps changing around you</li>
            <li><strong>Finance and startup career anxiety</strong> — targets, funding, performance reviews, layoffs</li>
            <li><strong>Relationship stress</strong> — the difficulty of maintaining relationships in a city of 60-hour work weeks</li>
          </ul>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners from Gurgaon</h2>
        <div className="listeners-grid">
          {[
            { emoji: '🏢', name: 'Vivek', tag: 'Corporate Burnout', bio: 'Six years in BFSI in DLF Cyber City. I know what it looks like when the resume is great and the person writing it is not.' },
            { emoji: '🚀', name: 'Ananya', tag: 'Startup Stress', bio: 'Early-stage startup, two funding rounds, one failure. I understand the specific loneliness of building something in Gurgaon.' },
            { emoji: '🌙', name: 'Sameer', tag: 'Weekend Loneliness', bio: 'Relocated here three years ago. Still figuring out weekends. Happy to sit with you in the in-between.' },
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
          <h2>Ready to Talk to Someone Who Gets Gurgaon?</h2>
          <p>Browse peer listeners who understand the pressures of India&apos;s corporate capital. No appointments, no waitlists, available right now.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Gurgaon Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why is Gurgaon particularly prone to professional burnout?</div>
            <div className="faq-a">Gurgaon concentrates India&apos;s most intense workplaces — BFSI firms, MNCs, startups. The professional density creates constant benchmarking. The culture rewards performance and treats vulnerability as weakness.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the transient population problem in Gurgaon?</div>
            <div className="faq-a">Most Gurgaon residents came for a job. When the job changes, people leave. This creates a city of people always meeting and losing each other, making deep roots feel impossible.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is weekend loneliness in Gurgaon?</div>
            <div className="faq-a">The work week is full, but the weekends can feel empty. Without hometown roots or childhood friends, many people find the weekend more isolating than the work week.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What do Gurgaon users talk about on LeanOn?</div>
            <div className="faq-a">Common topics include professional burnout, identity beyond the job, transient loneliness, finance and startup anxiety, and relationship stress in a city of long work weeks.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn peer support different from therapy?</div>
            <div className="faq-a">Yes. LeanOn is peer support, not therapy. Listeners are trained peers — not licensed therapists. Accessible from ₹160 for 15 minutes, available 24/7, anonymous.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <div className="related">
            <a href="/work-stress-india" className="related-link">Corporate Burnout</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/noida" className="related-link">Peer Support Noida</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
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
