import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Want to Talk About Your Problems Online? LeanOn India',
  description: 'Find someone to talk to about your problems — a real peer listener who listens without judgment. Anonymous, available 24/7 in India. First 5 min free.',
  keywords: [
    'talk about my problems online', 'someone to talk to about my problems',
    'talk to someone about my problems india', 'talk about problems online India',
    'someone to listen to my problems India', 'need to talk about my problems',
    'talk to someone online about problems', 'who can I talk to about my problems India',
    'safe space to talk about problems', 'talk anonymously about problems India',
    'vent about problems online India', 'talk to a stranger about problems India',
    'share problems with someone online', 'need someone to talk to about problems India',
    'get things off my chest online India',
  ],
  alternates: { canonical: 'https://www.leanon.app/talk-about-my-problems-online', languages: { 'en-IN': 'https://www.leanon.app/talk-about-my-problems-online' } },
  openGraph: {
    title: 'Want to Talk About Your Problems Online? LeanOn India',
    description: 'Find someone to talk to about your problems — a real peer listener who listens without judgment. Anonymous, available 24/7 in India.',
    url: 'https://www.leanon.app/talk-about-my-problems-online',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Talk About Your Problems Online' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I talk about anything?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — work stress, relationship tension, family pressure, money worries, feeling stuck, something embarrassing you cannot tell anyone in your life, or just a vague feeling that something is off. There is no minimum threshold. If it is on your mind, it is worth saying out loud.' },
    },
    {
      '@type': 'Question',
      name: 'Will my problems stay private?',
      acceptedAnswer: { '@type': 'Answer', text: 'Completely. You do not need to share your real name or location. Listeners sign confidentiality agreements before joining LeanOn. What you say in a session stays in that session — it does not reach your friends, your family, or anyone else in your life.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be in crisis to use LeanOn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not at all. Most people who use LeanOn are not in crisis — they are just carrying something they need to say out loud. Everyday weight is reason enough: work stress, relationship tension, family pressure, or simply feeling off without knowing why. If you are in a mental health crisis or having thoughts of self-harm, please call NIMHANS (080-46110007) or Tele-MANAS (14416), both free and 24/7.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to talk online?',
      acceptedAnswer: { '@type': 'Answer', text: 'New users get a free 5-minute trial — no payment needed to start. Paid sessions begin at ₹160 for 15 minutes. That is significantly less than a therapy appointment, with no waitlist, no appointment, and no insurance required. You can talk today.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk About My Problems Online', item: 'https://www.leanon.app/talk-about-my-problems-online' },
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
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:4px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .cta-secondary{display:inline-block;background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;border:2px solid var(--border);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .how-steps{display:flex;flex-direction:column;gap:16px;}
  .step{display:flex;gap:16px;align-items:flex-start;}
  .step-num{width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-weight:900;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .step-body h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .step-body p{font-size:14px;color:var(--gray);line-height:1.7;font-weight:500;margin:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-card-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-cta-ghost{display:inline-block;background:transparent;color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:2px solid rgba(255,255,255,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
`

export default function TalkAboutMyProblemsOnlinePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Talk About My Problems Online</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="badge">Anonymous · No Judgment · Available 24/7</p>
          <h1>Sometimes You Just Need to <em>Say It Out Loud</em></h1>
          <p className="lead">You do not need advice. You do not need to be fixed. You just need to get it out of your head and say it to someone who will actually listen — without judging you, without telling your people, without an agenda.</p>
          <div className="cta-row">
            <a href="/auth" className="cta-hero">Find someone to talk to →</a>
            <a href="/browse" className="cta-secondary">Browse listeners →</a>
          </div>
        </div>

        <div className="section">
          <h2>Why Talking Helps (and It Really Does)</h2>
          <p>There is science behind this, but you have probably felt it yourself: the moment you put something into words, it loosens its grip on you just a little. Psychologists call it <em>affect labelling</em> — naming a feeling reduces its intensity, even slightly. The weight you have been carrying silently becomes a thing you can look at instead of a fog you are stuck inside.</p>
          <p>There is something else too. When you hear yourself say it — actually say it, out loud, to another person — you understand it differently. Thoughts that swirl in your head for weeks can untangle in fifteen minutes when someone is listening and asking gentle questions.</p>
          <p>And then there is the simplest thing: knowing someone heard you. Feeling less alone with it. That is not a small thing. That is often the whole thing.</p>
        </div>

        <div className="section">
          <h2>What Kind of Problems Can You Talk About?</h2>
          <p>All of them. There is no minimum threshold on LeanOn. Some of the most common things people bring:</p>
          <ul>
            <li>Work stress — a bad manager, too much pressure, not knowing what you are doing with your career</li>
            <li>Relationship tension — a fight you cannot move past, something going cold, not knowing how to say what you feel</li>
            <li>Family pressure — expectations, comparisons, the guilt of wanting something different</li>
            <li>Money worries — the specific anxiety of financial stress that is hard to say out loud</li>
            <li>Feeling stuck — in a city, a job, a version of yourself you have outgrown</li>
            <li>Something embarrassing you cannot tell anyone you know — a mistake, a secret, a feeling you are ashamed of</li>
            <li>Just feeling off — not knowing why, not having a name for it, just needing to not carry it alone</li>
          </ul>
          <p>You do not need a dramatic reason. If it is sitting heavy, that is reason enough.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Works</h2>
          <div className="how-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <h3>Find a listener</h3>
                <p>Browse real people who are online right now. Each profile shows their lived experience and the kinds of conversations they support best. Pick someone who feels right.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <h3>Start talking</h3>
                <p>Book instantly — no appointment, no waitlist. New users get a free 5-minute trial. Paid sessions start at ₹160 for 15 minutes. Your listener follows your lead.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <h3>Feel lighter</h3>
                <p>Most people leave a session feeling noticeably lighter — not because their problem is solved, but because they said it out loud and someone genuinely heard them.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Not Your Friends. Not Your Family. Someone Else.</h2>
          <p>There are things you cannot say to the people in your life. Maybe you do not want to worry them. Maybe the problem involves them. Maybe you are not ready to be seen struggling by someone whose opinion of you matters. Maybe you just need space that is not already full of history and context.</p>
          <p>That is what a LeanOn listener is. Someone who is completely outside your life. Anonymous on both sides. No shared contacts, no chance of it getting back to anyone. Just a person who will listen without it changing anything between you and the people you actually know.</p>
          <p>You can say things here that you genuinely cannot say anywhere else.</p>

          <h3>And no advice, unless you want it</h3>
          <p>Listeners on LeanOn are trained to follow your lead. If you say &quot;I do not want advice, I just need to vent&quot; — that is what happens. If you want them to reflect back what they are hearing, they will. If you want a question to help you think, you can ask. You set the terms.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>Say it out loud — someone is listening</h2>
          <p>Whatever you are carrying right now, you do not have to carry it alone. Find a real listener who is online now. First 5 minutes free.</p>
          <div className="cta-card-row">
            <a href="/auth" className="btn-cta">Find someone to talk to →</a>
            <a href="/browse" className="btn-cta-ghost">Browse listeners →</a>
          </div>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/i-need-someone-to-talk-to">Need someone to talk to →</a>
            <a href="/need-to-vent-right-now">Need to vent right now →</a>
            <a href="/support/emotional-exhaustion">Emotional exhaustion →</a>
            <a href="/support/feeling-lost">Feeling lost →</a>
          </div>
        </div>
      </div>
    </>
  )
}
