import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Mental Health — Talk to Someone Who Gets India | LeanOn',
  description: 'Living abroad but missing home? Struggling in the gap between two worlds? Talk to an Indian peer listener who understands. From ₹160.',
  keywords: ['NRI mental health support', 'Indian diaspora support', 'expat Indian mental health', 'overseas Indian mental health', 'NRI therapy india', 'NRI emotional support'],
  alternates: { canonical: 'https://www.leanon.app/nri-mental-health', languages: { 'en-IN': 'https://www.leanon.app/nri-mental-health' } },
  openGraph: {
    title: 'NRI Mental Health — Talk to Someone Who Gets India | LeanOn',
    description: 'Living abroad but missing home? Struggling in the gap between two worlds? Talk to an Indian peer listener who understands. From ₹160.',
    url: 'https://www.leanon.app/nri-mental-health',
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
      name: 'Is LeanOn available for NRIs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is available anywhere in the world. You can browse listeners, start sessions, and talk to someone regardless of which country you are in. Sessions are over voice call and work across any internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do listeners understand NRI problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners have personal experience with the NRI condition — either they have lived abroad themselves, or they are deeply familiar with the dual-identity strain that Indian people navigating between two cultures describe. The core experience of feeling caught between India and wherever you live now is well understood on LeanOn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pay in INR from abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Payment is processed in INR through the LeanOn platform. You can use international cards or UPI-linked accounts. Sessions start at ₹160.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First name only, no photo, no last name. Your parents in India, your colleagues abroad, and your social circle have no way of knowing you are using LeanOn.',
      },
    },
    {
      '@type': 'Question',
      name: 'What timezone do sessions run on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are available 24/7. There is no fixed timezone — you browse available listeners at the time you want to talk and start immediately. This makes it accessible from the US, UK, UAE, Canada, Australia, or anywhere else.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'NRI Mental Health', item: 'https://www.leanon.app/nri-mental-health' },
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

export default function NriMentalHealthPage() {
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
          <span style={{color:'var(--navy)'}}>NRI Mental Health</span>
        </nav>

        <div className="hero">
          <p className="tag">NRI · Indian Diaspora · Emotional Support</p>
          <h1>You left India. <em>But India never quite left you.</em></h1>
          <p className="lead">You are too far from home to lean on family. Too Indian to fit fully into your new country. Too Westernised to fit fully back in India. Living in the gap between two worlds is exhausting — and almost impossible to explain to anyone on either side.</p>
        </div>

        <div className="section">
          <h2>The NRI Emotional Gap Nobody Talks About</h2>
          <h3>Loneliness Abroad</h3>
          <p>You might have friends, a job, a good life on paper. But there is a specific loneliness that comes from being far from your roots — from the people who knew you before you became the person you are now, from the language and food and rhythm that shaped you. That loneliness is not about being ungrateful. It is about being human.</p>
          <h3>Relationship Pressure from India</h3>
          <p>The WhatsApp calls asking when you are getting married. The relatives who interpret your independence abroad as a failure to meet expectations at home. The arranged marriage conversations conducted across time zones. The guilt of every visit home that does not last long enough.</p>
          <h3>Identity Confusion</h3>
          <p>Who are you now? Indian enough for India, Western enough for where you live? The performance of belonging in two places at once — and the quiet exhaustion of not fully belonging in either — is one of the most common things NRIs come to LeanOn to talk about.</p>
          <h3>Homesickness That Sounds Childish</h3>
          <p>You are an adult. You chose to leave. And sometimes you miss home in a way that feels like grief. That is not childish — it is real. And it deserves a space to be spoken.</p>
        </div>

        <div className="section">
          <h2>Why Indian Therapists Abroad Are Not Always the Answer</h2>
          <p>Finding an Indian therapist abroad is expensive — USD, GBP, or AUD rates for sessions that cost ₹5,000–₹15,000 equivalent per hour. Non-Indian therapists may not understand arranged marriage dynamics, Indian joint family structures, or the specific weight of parent expectations in Indian culture.</p>
          <p>LeanOn peer listeners are Indian, understand the cultural context from the inside, and charge ₹160 per session — not ₹10,000.</p>
        </div>

        <div className="cta-card">
          <h2>Talk to Someone Who Gets India</h2>
          <p>Indian peer listeners, available across time zones. From ₹160. Anonymous.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn available for NRIs?</div>
            <div className="faq-a">Yes. LeanOn is available anywhere in the world. You can browse listeners, start sessions, and talk to someone regardless of which country you are in. Sessions work across any internet connection.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Do listeners understand NRI problems?</div>
            <div className="faq-a">Many LeanOn listeners have personal experience with the NRI condition or are deeply familiar with the dual-identity strain. The experience of feeling caught between India and wherever you live now is well understood on LeanOn.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I pay in INR from abroad?</div>
            <div className="faq-a">Yes. Payment is processed in INR through the LeanOn platform. You can use international cards or UPI-linked accounts. Sessions start at ₹160.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it anonymous?</div>
            <div className="faq-a">Yes. First name only, no photo, no last name. Your parents in India and your colleagues abroad have no way of knowing you are using LeanOn.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What timezone do sessions run on?</div>
            <div className="faq-a">LeanOn listeners are available 24/7. There is no fixed timezone — you browse available listeners at the time you want to talk and start immediately. This makes it accessible from the US, UK, UAE, Canada, Australia, or anywhere else.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/loneliness-support-india" className="related-link">Loneliness Support</a>
            <a href="/support/arranged-marriage-stress" className="related-link">Arranged Marriage Stress</a>
            <a href="/blog/nri-mental-health-india-guide" className="related-link">NRI Mental Health Guide</a>
            <a href="/men-mental-health-india" className="related-link">Men&apos;s Mental Health</a>
          </div>
        </div>
      </div>
    </>
  )
}
