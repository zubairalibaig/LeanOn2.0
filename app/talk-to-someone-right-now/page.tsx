import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone Right Now — Anonymous, 24/7 | LeanOn India',
  description: 'Need to talk to someone now? See which peer listeners are online right now. Anonymous, available 24/7 across India.',
  alternates: { canonical: 'https://www.leanon.app/talk-to-someone-right-now', languages: { 'en-IN': 'https://www.leanon.app/talk-to-someone-right-now' } },
  keywords: 'talk to someone right now, need to talk to someone now India, someone to talk to immediately, urgent emotional support India, talk to someone online now, anonymous listener India',
  openGraph: {
    title: 'Talk to Someone Right Now — Anonymous, 24/7 | LeanOn India',
    description: 'Need to talk to someone now? See which peer listeners are online right now. Anonymous, available 24/7 across India.',
    url: 'https://www.leanon.app/talk-to-someone-right-now',
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
      name: 'How fast can I actually talk to someone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on who is online. When you open the listener directory, you can see who is available right now — if someone is online, you can usually start talking within a minute or two. If nobody is online at that moment, you can leave a message and the listener will reply when they are back. We will not pretend someone is always instantly free, but there is almost always somebody around, including late at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it really anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You use a first name only — no full name, no photo, no social profile. Listeners never see your phone number, and nothing you say is shared with anyone in your life. You can talk about anything without it following you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions start at ₹160 for 15 minutes, and a short trial session is available for new users.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not know what to say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need to have it figured out. "I do not know where to start" is a perfectly good opening — listeners hear it every day and they know what to do with it. You can type one line and stop. The listener will meet you where you are and take it slowly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am in crisis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are thinking of harming yourself or you are in immediate danger, please call NIMHANS at 080-46110007 or Tele-MANAS at 14416 right now. Both are free, 24/7 Government of India helplines staffed by trained crisis professionals. LeanOn is peer support, not a crisis service — please reach the helplines first, and lean on us afterwards.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone Right Now', item: 'https://www.leanon.app/talk-to-someone-right-now' },
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
`

export default function TalkToSomeoneRightNowPage() {
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
          <span style={{color:'var(--navy)'}}>Talk to Someone Right Now</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 If you are thinking of harming yourself, call now: <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India). LeanOn is peer support, not a crisis service.
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Available Now · Anonymous · 24/7</p>
          <h1>Someone Is Ready to <em>Listen</em> — Right Now</h1>
          <p className="lead">You do not need an appointment, a referral, or a reason good enough. Open the listener directory, see who is online, and start talking instantly.</p>
        </div>

        {/* How it works */}
        <div className="section">
          <h2>How It Works — in Under a Minute</h2>

          <h3>1. See who is online now</h3>
          <p>Open the listener directory. Each listener shows whether they are online at this moment, so you are not guessing or waiting in a queue.</p>

          <h3>2. Pick someone whose experience matches yours</h3>
          <p>Every listener has a short profile describing what they have lived through — anxiety, a breakup, burnout, loneliness, family pressure. Choose whoever feels closest to where you are tonight.</p>

          <h3>3. Start talking — instantly, no appointment</h3>
          <p>No card, no payment details, nothing to set up in advance. You talk. If it helps, you continue. If it does not, you stop and try someone else.</p>

          <h3>4. Text or voice, entirely your choice</h3>
          <p>Some people need to hear a voice. Others can only manage typing. Both work here, and you can switch if typing suddenly feels easier than speaking.</p>
        </div>

        {/* Expectations */}
        <div className="section">
          <h2>What This Is (and Isn&apos;t)</h2>
          <p>Being clear about this matters, especially right now.</p>

          <h3>It is a real human with lived experience</h3>
          <p>Not a bot, not a script, not an AI pretending to care. Every listener is a trained peer who has been through something difficult themselves and chose to sit with other people going through it. They are not therapists and they will not diagnose you — what they offer is empathy and undivided attention.</p>

          <h3>There is no appointment and no waitlist</h3>
          <p>You do not book a slot three weeks out. You open the directory and talk to whoever is available. That is the whole process.</p>

          <h3>It is completely anonymous</h3>
          <p>First name only. No photo, no full name, no phone number shared with your listener. Nothing you say reaches anyone in your life.</p>

          <h3>It is NOT a crisis service</h3>
          <p>If you are in danger, thinking about ending your life, or in a medical emergency, please stop reading and call <a href="tel:08046110007" style={{color:'var(--teal)',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'var(--teal)',fontWeight:800}}>Tele-MANAS 14416</a> right now. Both are free, 24/7 Government of India helplines with trained crisis counsellors. That is the right help for this moment. We will be here afterwards.</p>
        </div>

        {/* Not knowing what to say */}
        <div className="section">
          <h2>It&apos;s OK If You Don&apos;t Know What to Say</h2>
          <p>Most people arrive here without a tidy explanation of what is wrong. You do not need one. You do not need to have it figured out before you are allowed to talk to someone.</p>
          <p>If you are stuck, any of these are a perfectly good opening:</p>
          <ul>
            <li>&quot;I&apos;ve had a really hard day.&quot;</li>
            <li>&quot;I don&apos;t know where to start.&quot;</li>
            <li>&quot;I just didn&apos;t want to be alone right now.&quot;</li>
            <li>&quot;Something happened and I can&apos;t tell anyone I know.&quot;</li>
          </ul>
          <p>The listener will take it from there. They will not rush you, cross-examine you, or judge what you say. There is no minimum amount of pain required to deserve an empathetic ear — a bad day counts.</p>
          <p>You can also say nothing much at all for the first few minutes. Silence is allowed. Sometimes just knowing another person is present on the other side is enough to loosen the knot in your chest.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peers You Could Be Talking To Tonight</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌊',
              name: 'Ananya',
              tag: 'Anxiety & Panic',
              bio: 'I have had the 2 AM panic where your heart will not slow down. I will stay with you through it, no rush.'
            },
            {
              emoji: '🕯️',
              name: 'Rohit',
              tag: 'Burnout & Work Stress',
              bio: 'Burned out badly in my second job and told nobody for a year. If today broke you, I get it.'
            },
            {
              emoji: '🤍',
              name: 'Fatima',
              tag: 'Heartbreak & Family Pressure',
              bio: 'Went through a breakup I could not explain at home. Bring the messy version — I am not here to judge it.'
            },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Start Talking Now — Available 24/7</h2>
          <p>See who is online right now. Anonymous, available instantly, text or voice. If nobody is online this second, leave a message and a listener will reply.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">See Who Is Online Now</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">How fast can I actually talk to someone?</div>
            <div className="faq-a">It depends on who is online. When you open the listener directory, you can see who is available right now — if someone is online, you can usually start talking within a minute or two. If nobody is online at that moment, you can leave a message and the listener will reply when they are back. We will not pretend someone is always instantly free, but there is almost always somebody around, including late at night.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it really anonymous?</div>
            <div className="faq-a">Yes. You use a first name only — no full name, no photo, no social profile. Listeners never see your phone number, and nothing you say is shared with anyone in your life. You can talk about anything without it following you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does pricing work?</div>
            <div className="faq-a">Sessions start at ₹160 for 15 minutes, and a short trial session is available for new users.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I don&apos;t know what to say?</div>
            <div className="faq-a">You do not need to have it figured out. &quot;I don&apos;t know where to start&quot; is a perfectly good opening — listeners hear it every day and they know what to do with it. You can type one line and stop. The listener will meet you where you are and take it slowly.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I am in crisis?</div>
            <div className="faq-a">If you are thinking of harming yourself or you are in immediate danger, please call <a href="tel:08046110007" style={{color:'var(--teal)',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'var(--teal)',fontWeight:800}}>Tele-MANAS 14416</a> right now. Both are free, 24/7 Government of India helplines staffed by trained crisis professionals. LeanOn is peer support, not a crisis service — please reach the helplines first, and lean on us afterwards.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>If you want to read a little more before starting, these may help:</p>
          <div className="related">
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>Other ways people find someone to talk to on LeanOn:</p>
          <div className="related">
            <a href="/someone-to-talk-to-at-night" className="related-link">Someone to talk to at night</a>
            <a href="/need-someone-to-talk-to-india" className="related-link">Need someone to talk to</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
