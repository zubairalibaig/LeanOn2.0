import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mental Health Support India — Real People, Not Just Apps | LeanOn',
  description: 'Explore non-clinical peer support in India from real people with lived experience. One free 5-minute introduction per account; example paid pricing and safety boundaries explained.',
  keywords: ['mental health support India', 'mental health support online India', 'mental health help India', 'mental health chat India', 'online mental health support India', 'affordable mental health India'],
  alternates: { canonical: 'https://www.leanon.app/mental-health-support-india', languages: { 'en-IN': 'https://www.leanon.app/mental-health-support-india' } },
  openGraph: {
    title: 'Mental Health Support India — Real People, Not Just Apps | LeanOn',
    description: 'Explore non-clinical peer support in India from real people with lived experience. One free 5-minute introduction per account; example paid pricing and safety boundaries explained.',
    url: 'https://www.leanon.app/mental-health-support-india',
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
      name: 'What kind of mental health support is available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mental-health support includes clinical care from qualified professionals, government crisis services, and non-clinical peer support. LeanOn is a commercial peer-support platform for people who want a human conversation about everyday emotional situations; it is not a therapy or crisis service. In India, 15 minutes with a listener charging ₹10 per minute costs ₹160 including the flat ₹10 platform fee; the exact total varies and is shown before a paid session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a mental health app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is a peer emotional support platform — not a therapy app or a mental health treatment service. It connects people who need someone to talk to with screened peer listeners who have lived experience. LeanOn does not provide clinical diagnosis or treatment, and does not claim to be a substitute for professional mental health care.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does peer support help mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support helps by reducing the isolation that often accompanies emotional difficulty. When you talk to someone who has personally experienced something similar to what you are going through, you feel less alone — and that alone changes something. Peer support does not treat mental health conditions, but for everyday emotional weight — stress, burnout, loneliness, relationship difficulty — it provides the kind of genuine connection that clinical settings sometimes cannot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mental health support free in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government crisis support and clinical treatment are different from commercial peer support. LeanOn offers one free introductory session of up to 5 minutes per account; after that, the exact paid-session price depends on the selected listener and session type. In a worked example, 15 minutes at ₹10 per minute costs ₹160 including the flat ₹10 platform fee. In India, Tele-MANAS at 14416 is a free, 24/7 government mental-health helpline; LeanOn is not a crisis service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between mental health support and therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is delivered by a licensed mental health professional who can diagnose conditions and provide structured clinical treatment. Mental health support is a broader term that includes peer support, helplines, and other non-clinical forms of help. Therapy is the right tool when someone needs a diagnosis or professional treatment. Peer support is right when someone needs to be heard — to talk through what they are carrying with someone who genuinely understands.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get immediate mental health support in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For immediate danger or a mental-health crisis, contact local emergency services or an appropriate crisis service. In India, Tele-MANAS at 14416 is a free, 24/7 government mental-health helpline; see official Ministry of Health information. For non-crisis peer support, browse LeanOn profiles and check live availability; a conversation begins when an available listener accepts.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Mental Health Support India', item: 'https://www.leanon.app/mental-health-support-india' },
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
  .crisis{display:block;background:#EBF5FB;border-left:4px solid #1A8FA0;border-radius:0 12px 12px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;color:#0F4867;font-weight:600;line-height:1.65;}
  .crisis a{color:var(--teal);font-weight:800;}
  .topics-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-bottom:24px;}
  .topic-card{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;text-align:center;}
  .topic-emoji{font-size:28px;margin-bottom:8px;}
  .topic-name{font-size:14px;font-weight:800;color:var(--navy);}
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

export default function MentalHealthSupportIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Mental Health Support India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · India · Non-clinical</p>
          <h1>Mental health support that <em>actually feels human</em></h1>
          <p className="lead">When you want someone to listen to the human side of a difficult day, LeanOn connects you with peer listeners for one-to-one text or voice conversations. It is not therapy, diagnosis or crisis care. Start with one free 5-minute introduction per account; after that, prices vary by listener and session type.</p>
        </div>

        {/* Different needs call for different support */}
        <div className="section">
          <h2>Different kinds of support serve different needs</h2>
          <p>Mental-health support can mean several different things. A qualified psychologist, psychiatrist or counsellor provides professional assessment and care. A crisis line can help during urgent distress. Peer support is non-clinical: it offers space to talk with someone who brings relevant lived experience and listens with empathy.</p>
          <p>LeanOn is a paid, one-to-one peer-support platform for everyday emotional situations such as loneliness, relationship stress, work pressure, grief, homesickness and family difficulties. It does not diagnose conditions, provide treatment or replace a qualified professional.</p>
          <p>Peer support as a model is discussed in the <a href="https://www.who.int/publications/i/item/9789240025783" target="_blank" rel="noopener noreferrer" style={{color:'var(--teal)',fontWeight:800}}>World Health Organization’s guidance on community mental-health services</a>. That publication provides general background; it is not an evaluation or endorsement of LeanOn.</p>
        </div>

        {/* A different kind of support */}
        <div className="section">
          <h2>A Different Kind of Support</h2>
          <p>LeanOn is a peer support platform. Every listener on LeanOn is a real person who has lived through something relevant to the conversations they take. They are screened for active listening, supportive conversation, and knowing when to refer someone to professional help.</p>
          <p>This is not therapy. LeanOn does not claim otherwise. It is for the gap between &quot;I am struggling and need to talk&quot; and &quot;I need clinical treatment&quot; — which is where most people who need support actually are.</p>
        </div>

        {/* Topics grid */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>What You Can Talk About</h2>
        <div className="topics-grid">
          {[
            { emoji: '🌙', name: 'Loneliness' },
            { emoji: '😰', name: 'Anxiety' },
            { emoji: '🔥', name: 'Burnout' },
            { emoji: '💔', name: 'Relationships' },
            { emoji: '🌿', name: 'Grief' },
            { emoji: '👨‍👩‍👧', name: 'Family pressure' },
            { emoji: '🧭', name: 'Career stress' },
            { emoji: '📚', name: 'Student pressure' },
          ].map(t => (
            <div key={t.name} className="topic-card">
              <div className="topic-emoji">{t.emoji}</div>
              <div className="topic-name">{t.name}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <div className="step-title">Browse peer listeners</div>
                <div className="step-desc">See real people, their areas of lived experience, their rate, and availability. Choose someone who has been through something like what you are dealing with.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <div className="step-title">Start with 5 minutes free</div>
                <div className="step-desc">Your first session is a free 5-minute trial. Talk, get a sense of the connection, and decide whether to continue. No commitment until you choose.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <div className="step-title">Choose what you share</div>
                <div className="step-desc">Sign up using phone OTP without an email or full legal name, and choose a display name. Avoid sharing identifying details you do not want to disclose; automated safety moderation may process session content.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-pill"><em>₹160</em>/session</div>
          <div className="stat-pill">First <em>5 min free</em></div>
          <div className="stat-pill"><em>Display-name sign-up</em></div>
          <div className="stat-pill"><em>Screened peer listeners</em></div>
          
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Talk to Someone Who Gets It</h2>
          <p>Real peer listeners for everyday emotional support. One free 5-minute introduction per account. Availability depends on who is online and accepts; paid prices are shown before booking.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse peer listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What kind of mental health support is available in India?</div>
            <div className="faq-a">Mental health support in India ranges from licensed psychiatrists and psychologists (₹1,500–₹5,000/session) to online therapy platforms (₹800–₹2,000/session), government crisis helplines (free, for emergencies), and peer support platforms like LeanOn (₹160/session, 24/7, no appointment). The right option depends on whether you need clinical diagnosis and treatment or emotional support from someone who understands your experience.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn a mental health app?</div>
            <div className="faq-a">LeanOn is a peer emotional support platform — not a therapy app or mental health treatment service. It connects people who need someone to talk to with screened peer listeners who have lived experience. LeanOn does not provide clinical diagnosis or treatment, and does not claim to be a substitute for professional care.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does peer support help mental health?</div>
            <div className="faq-a">Peer support helps by reducing the isolation that often accompanies emotional difficulty. When you talk to someone who has personally experienced something similar to what you are going through, you feel less alone. Peer support does not treat mental health conditions clinically, but for everyday emotional weight — stress, burnout, loneliness, relationship difficulty — it provides genuine connection that clinical settings sometimes cannot.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is mental health support free in India?</div>
            <div className="faq-a">Government crisis lines — NIMHANS (080-46110007) and Tele-MANAS (14416) — are free and designed for people in acute distress. Most ongoing mental health support is not free. LeanOn peer support is affordable at ₹160/session, with the first 5 minutes free.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the difference between mental health support and therapy?</div>
            <div className="faq-a">Therapy is delivered by a licensed professional who can diagnose conditions and provide structured clinical treatment. Mental health support is broader — it includes peer support, helplines, and non-clinical forms of help. Therapy is right when someone needs a diagnosis or professional treatment. Peer support is right when someone needs to be heard by someone who genuinely understands.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How can I get immediate mental health support in India?</div>
            <div className="faq-a">For a mental-health crisis or immediate danger, contact local emergency services or an appropriate crisis service. In India, Tele-MANAS at 14416 is a free, 24/7 government mental-health helpline; see official Ministry of Health information. For non-crisis peer support, check LeanOn’s live listener availability; a session begins when a listener accepts.</div>
          </div>
        </div>

        {/* Cross-links */}
        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/peer-support" className="related-link">Peer support India</a>
            <a href="/alternatives-to-therapy-india" className="related-link">Therapy alternatives</a>
            <a href="/depression-support-india" className="related-link">Depression support</a>
            <a href="/support/anxiety" className="related-link">Anxiety support</a>
            <a href="/online-counseling-india" className="related-link">Online counselling India</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t afford therapy</a>
          </div>
        </div>
      </div>
    </>
  )
}
