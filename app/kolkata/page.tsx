import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Kolkata — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Kolkata, India. Free first session. Talk anonymously in Bengali, Hindi, or English about loneliness, family pressure, and more on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/kolkata', languages: { 'en-IN': 'https://www.leanon.app/kolkata' } },
  keywords: 'peer support Kolkata, emotional support Kolkata, loneliness Kolkata, talk to someone Kolkata, Bengali emotional support, family pressure Kolkata, leanon Kolkata',
  openGraph: {
    title: 'Emotional Support in Kolkata — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Kolkata, India. Free first session. Talk anonymously in Bengali, Hindi, or English on LeanOn.',
    url: 'https://www.leanon.app/kolkata',
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
      name: 'Can I talk to a listener in Bengali on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has peer listeners who speak Bengali as well as Hindi and English. You can filter listeners by language on the browse page. For many users, speaking in Bangla is the difference between describing feelings and actually feeling heard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emotional pressures are specific to Kolkata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kolkata carries a particular emotional texture: a city of deep intellectual and artistic tradition where conversations about books and politics flow freely, but conversations about one\'s own pain remain difficult. Many young Kolkatans face the painful choice between leaving for opportunities elsewhere and staying close to ageing parents. Those who stay often carry career frustration; those who leave carry guilt. Joint families, strong opinions, and the famous para culture mean everyone knows everyone — which makes anonymous support especially valuable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. Only your first name is ever shown to a listener — no phone number, no photo, no surname, no location. Nobody in your para, family, or office can discover that you use LeanOn.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost in Kolkata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The same as everywhere in India: new users get up to 3 free 5-minute sessions, and paid sessions cost ₹8–25 per minute (set by each listener) plus a flat ₹10 platform fee — a fraction of what therapy costs.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Kolkata', item: 'https://www.leanon.app/kolkata' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/kolkata',
  areaServed: { '@type': 'City', name: 'Kolkata', addressCountry: 'IN' },
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

export default function KolkataPage() {
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
          <span style={{color:'var(--navy)'}}>Kolkata</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Kolkata</p>
          <h1>Peer Support in Kolkata — Someone to Lean On, in <em>Bangla or English</em></h1>
          <p className="lead">Kolkata is a city that talks — adda, politics, poetry, football. But the conversation that matters most, the one about how you are actually doing, is often the hardest to start. LeanOn connects you with peer listeners who understand — in Bengali, Hindi, or English.</p>
        </div>

        <div className="section">
          <h2>Kolkata&apos;s Emotional Landscape</h2>
          <p>Kolkata&apos;s emotional life is rich and complicated. A city of immense intellectual tradition where everyone has opinions about everything — except, somehow, their own inner weather.</p>

          <h3>The Stay-or-Leave Dilemma</h3>
          <p>Few cities force the question as sharply as Kolkata: stay close to family and accept fewer opportunities, or leave for Bengaluru, Mumbai, or abroad and carry the guilt of distance. Those who stay often wrestle with career frustration and the quiet feeling of being left behind. Those who leave call home every Sunday and feel the ache anyway. Both deserve a space to talk about it honestly.</p>

          <h3>The Weight of Expectations in a City of Intellect</h3>
          <p>Kolkata reveres achievement — academic brilliance, artistic talent, professional respectability. For students at Presidency or Jadavpur, for first-generation professionals in Salt Lake&apos;s IT sector, the pressure to live up to the family&apos;s intellectual legacy can be immense. Falling short, or simply choosing a different path, often cannot be discussed at home.</p>

          <h3>Everyone Knows Everyone</h3>
          <p>The para, the extended family, the neighbourhood network — Kolkata&apos;s social fabric is warm, but it is also watchful. Personal struggles become community discussion fast. That is precisely why anonymous peer support matters here: a conversation that stays between you and your listener, with no chance of reaching your para.</p>

          <h3>The Mother-Tongue Difference</h3>
          <p>Some feelings only have words in Bangla. LeanOn has listeners who speak Bengali, so the conversation can happen in the language your heart actually uses.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn in Kolkata</h2>
          <h3>Young Professionals at a Crossroads</h3>
          <p>Whether you are weighing an offer in another city, stuck in a job that pays less than your potential, or supporting parents while building your own life — these are heavy decisions that benefit from a thinking-out-loud conversation with someone neutral.</p>

          <h3>Students Under Academic Pressure</h3>
          <p>Kolkata&apos;s academic culture is demanding, and the comparison to cousins, neighbours, and batchmates never stops. Students use LeanOn when the pressure feels unspeakable at home.</p>

          <h3>Anyone Carrying Quiet Loneliness</h3>
          <p>In a city famous for conversation, admitting loneliness feels almost contradictory. It is not. It is human — and it is exactly what peer listeners understand.</p>
        </div>

        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets Kolkata?</h2>
          <p>Browse peer listeners who understand the stay-or-leave dilemma, family expectations, and the loneliness no adda quite reaches. Sessions in Bengali, Hindi, or English. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Can I talk to a listener in Bengali on LeanOn?</div>
            <div className="faq-a">Yes. LeanOn has peer listeners who speak Bengali as well as Hindi and English. Filter by language on the browse page. For many users, speaking in Bangla is the difference between describing feelings and actually feeling heard.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What emotional pressures are specific to Kolkata?</div>
            <div className="faq-a">The stay-or-leave dilemma — between opportunities elsewhere and ageing parents here — shapes many lives. Add academic and intellectual expectations, joint-family dynamics, and a watchful social fabric where everyone knows everyone, and anonymous support becomes especially valuable.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn anonymous?</div>
            <div className="faq-a">Yes, completely. Only your first name is shown to a listener — no phone number, photo, surname, or location. Nobody in your para, family, or office can discover that you use LeanOn.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does a session cost in Kolkata?</div>
            <div className="faq-a">Same as everywhere in India: up to 3 free 5-minute sessions for new users, then ₹8–25 per minute (set by each listener) plus a flat ₹10 platform fee — a fraction of what therapy costs.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
            <a href="/mumbai" className="related-link">Peer Support Mumbai</a>
          </div>
        </div>

        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
