import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Chennai — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Chennai, India. Available 24/7. Talk anonymously in Tamil or English about anxiety, loneliness, family pressure, and more on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/chennai', languages: { 'en-IN': 'https://www.leanon.app/chennai' } },
  keywords: 'peer support Chennai, emotional support Chennai, loneliness Chennai, talk to someone Chennai, Tamil emotional support, family pressure Chennai, leanon Chennai',
  openGraph: {
    title: 'Emotional Support in Chennai — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Chennai, India. Available 24/7. Talk anonymously in Tamil or English on LeanOn.',
    url: 'https://www.leanon.app/chennai',
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
      name: 'Can I talk to a listener in Tamil on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn has peer listeners who speak Tamil as well as English. You can filter listeners by language on the browse page and have your entire session in Tamil if that is what feels most natural. Many people find that emotional conversations flow far more honestly in their mother tongue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emotional pressures are specific to Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chennai combines a deeply rooted, tradition-conscious culture with one of India\'s largest IT and professional workforces. People often describe living two lives: a modern professional identity at work along OMR or in Guindy, and a traditional family identity at home. The gap between these two selves — around marriage, career choices, and personal freedom — is a major source of silent stress that peer support is well suited to address.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn anonymous? My family circle in Chennai is very connected.',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. Only your first name is ever shown to a listener — no phone number, no photo, no surname, no location. Nobody in your family, office, or social circle can discover that you use LeanOn. This matters especially in close-knit communities where word travels fast.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The same as everywhere in India: new users get up to 3 introductory 5-minute sessions, and paid sessions cost ₹8–25 per minute (set by each listener) plus a flat ₹10 platform fee — far more affordable than therapy in Chennai, which typically runs ₹1,500–3,500 per session.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Chennai', item: 'https://www.leanon.app/chennai' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/chennai',
  areaServed: { '@type': 'City', name: 'Chennai', addressCountry: 'IN' },
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

export default function ChennaiPage() {
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
          <span style={{color:'var(--navy)'}}>Chennai</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Chennai</p>
          <h1>Peer Support in Chennai — Someone to Lean On, in <em>Tamil or English</em></h1>
          <p className="lead">Chennai holds tradition and modernity in the same hand — IT corridors and agraharam values, global careers and deeply rooted family expectations. LeanOn connects you with peer listeners who understand both worlds, in the language your feelings actually speak.</p>
        </div>

        <div className="section">
          <h2>Chennai&apos;s Emotional Landscape</h2>
          <p>Chennai is one of India&apos;s most culturally grounded cities — and that groundedness cuts both ways. Strong families, strong communities, strong values. But also strong expectations, strong opinions, and a strong sense that some things are simply not discussed.</p>

          <h3>Two Lives, One Person</h3>
          <p>Tens of thousands of Chennaiites work in globally connected industries — IT along OMR, finance, healthcare, manufacturing — while living in households where tradition shapes daily life. Many describe a quiet exhaustion from switching between a modern professional self and a traditional family self. The questions that live in the gap — about marriage, career moves, relationships, personal freedom — often have no safe place to be spoken.</p>

          <h3>Marriage and Family Timelines</h3>
          <p>Few cities take family obligations as seriously as Chennai. Alliance discussions, horoscope matching, the expectations of extended family — these carry real weight here. If you are past the &quot;expected age&quot; and unmarried, navigating a relationship your family would not approve of, or simply unsure what you want, the pressure can feel suffocating. A peer listener offers a space to think out loud without any of it getting back to anyone.</p>

          <h3>The Mother-Tongue Difference</h3>
          <p>Emotional honesty often comes easier in Tamil than in English. LeanOn has listeners who speak Tamil, so you can have the conversation in whichever language your feelings actually live in. For many users, the first session in their mother tongue is the first time the words come out whole.</p>
        </div>

        <div className="section">
          <h2>Who Uses LeanOn in Chennai</h2>
          <h3>IT Professionals Under Quiet Pressure</h3>
          <p>Long commutes, on-call schedules, appraisal anxiety, and the constant comparison culture of the IT corridor — many professionals carry a low-grade stress that never quite switches off. Talking to someone who has lived it helps more than another productivity hack.</p>

          <h3>Students and Young Professionals</h3>
          <p>Chennai&apos;s academic intensity is famous — entrance exam pressure, engineering college expectations, and the weight of being the family&apos;s big hope. Students use LeanOn late at night, when the pressure feels loudest and everyone else is asleep.</p>

          <h3>Women Navigating Expectations</h3>
          <p>Many women in Chennai describe the particular loneliness of being constantly cared about but rarely truly heard — every choice observed, every deviation discussed. LeanOn offers a space where you can be fully honest without social consequences.</p>
        </div>

        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets Chennai?</h2>
          <p>Browse peer listeners who understand family expectations, IT-corridor stress, and the weight of tradition. Sessions in Tamil or English. Available 24/7, completely private.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Can I talk to a listener in Tamil on LeanOn?</div>
            <div className="faq-a">Yes. LeanOn has peer listeners who speak Tamil as well as English. Filter by language on the browse page and have your entire session in Tamil if that feels most natural. Emotional conversations often flow far more honestly in your mother tongue.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What emotional pressures are specific to Chennai?</div>
            <div className="faq-a">Chennai combines a deeply rooted, tradition-conscious culture with one of India&apos;s largest professional workforces. People often live two lives: a modern professional identity at work and a traditional family identity at home. The gap between these selves — around marriage, career, and personal freedom — is a major source of silent stress.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn anonymous? My family circle is very connected.</div>
            <div className="faq-a">Yes, completely. Only your first name is shown to a listener — no phone number, photo, surname, or location. Nobody in your family, office, or social circle can discover that you use LeanOn.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does a session cost in Chennai?</div>
            <div className="faq-a">Same as everywhere in India: up to 3 introductory 5-minute sessions for new users, then ₹8–25 per minute (set by each listener) plus a flat ₹10 platform fee — far more affordable than therapy in Chennai, which typically costs ₹1,500–3,500 per session.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
            <a href="/hyderabad" className="related-link">Peer Support Hyderabad</a>
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
