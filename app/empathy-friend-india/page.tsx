import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Friend India — Talk to Someone Who Actually Listens | LeanOn',
  description: 'Find an empathetic listener online in India. Real people, trained in active listening, available from ₹160. Not a therapist. Not a bot. A human.',
  keywords: ['empathy friend india', 'empathetic listener online india', 'compassionate listener online india', 'trained listener india', 'non-judgmental support india', 'online peer support india', 'peer mentoring india', 'community support india'],
  alternates: { canonical: 'https://www.leanon.app/empathy-friend-india', languages: { 'en-IN': 'https://www.leanon.app/empathy-friend-india' } },
  openGraph: {
    title: 'Empathy Friend India — Talk to Someone Who Actually Listens | LeanOn',
    description: 'Find an empathetic listener online in India. Real people, trained in active listening, available from ₹160. Not a therapist. Not a bot. A human.',
    url: 'https://www.leanon.app/empathy-friend-india',
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
      name: 'What is an empathy friend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An empathy friend is someone who listens without judgment, reflects back what you are saying without trying to fix or advise, and creates a space where you feel genuinely heard. On LeanOn, peer listeners are trained in active listening and empathetic presence — they hold space rather than jumping to solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find an empathetic listener online in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browse listener profiles at leanon.app/browse. Each listener shows their areas of lived experience, their approach, and their availability. Choose someone whose background resonates with what you are going through. The first 5 minutes of every session are free, so you can assess the connection before committing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is active listening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Active listening is the practice of fully focusing on what someone is saying — not planning your response, not judging, not advising — and reflecting back what you hear to let them know they have been understood. LeanOn listeners are specifically trained in this skill. The result is a conversation where you feel heard rather than managed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support, not therapy. Listeners are not licensed mental health professionals. They are real people with lived experience who are trained to listen, hold space, and support — not to diagnose or treat. If you need clinical care, please see a qualified professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the listener does not understand my problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You choose your listener based on their background and areas of experience. If a session does not feel right, you can end it during the free 5-minute window and try someone else. There are no penalties for switching listeners.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Friend India', item: 'https://www.leanon.app/empathy-friend-india' },
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

export default function EmpathyFriendIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Empathy Friend India</span>
        </nav>

        <div className="hero">
          <p className="tag">Empathetic Listener · India · From ₹160</p>
          <h1>Sometimes you don&apos;t need advice. <em>You need someone who actually listens.</em></h1>
          <p className="lead">Not a therapist. Not a bot. Not a friend who will make it about themselves. A real human being who is trained to listen — to reflect, hold space, and be present with you without judgment.</p>
        </div>

        <div className="section">
          <h2>What Empathy Looks Like in a Session</h2>
          <p>An empathetic listener is not there to fix you or give you a five-step plan. What they do:</p>
          <ul>
            <li><strong>Reflect back</strong> — they repeat what they hear so you know you have been understood, not just heard</li>
            <li><strong>Do not jump to fix</strong> — no unsolicited advice, no solution-pushing before you have finished talking</li>
            <li><strong>Hold space</strong> — they are present with you in the difficulty, not trying to rush you out of it</li>
            <li><strong>Do not judge</strong> — whatever you say, they will not flinch or think less of you</li>
          </ul>
          <p>That kind of attention — full, patient, non-reactive — is rarer than it should be. LeanOn trains listeners specifically in this.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Listeners Are Different</h2>
          <h3>Trained in Active Listening</h3>
          <p>Active listening is a specific set of skills — presence, reflection, asking questions that open rather than close. Every LeanOn listener completes training in these techniques before they take sessions.</p>
          <h3>Peer-Lived Experience</h3>
          <p>LeanOn listeners are not professionals who learned about emotional difficulty from textbooks. They have lived through something similar to what you are carrying. When they say &quot;I understand&quot;, they mean it.</p>
          <h3>Indian Context</h3>
          <p>They understand joint family pressure, Indian work culture, the specific weight of parent expectations, and what it is like to navigate life in India. Not a Western therapist who has to be explained the context.</p>
          <h3>Voice Call, Not Chat</h3>
          <p>There is a reason conversations feel different when they are spoken — tone, pauses, the warmth of a human voice. LeanOn sessions are voice calls, not chat windows.</p>
        </div>

        <div className="section">
          <h2>Find Your Empathy Listener in 3 Steps</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <div className="step-title">Browse listener profiles</div>
                <div className="step-desc">See who is available, read their background, and find someone whose experience feels relevant to what you are carrying.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <div className="step-title">Start with 5 free minutes</div>
                <div className="step-desc">Try the connection before committing. If it feels right, continue. If not, try someone else.</div>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <div className="step-title">Talk — just talk</div>
                <div className="step-desc">No agenda, no structure, no homework. Just a real conversation with someone who listens. <a href="/browse" style={{color:'var(--teal)',fontWeight:700}}>Start here.</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card">
          <h2>Find Your Empathy Friend</h2>
          <p>Real people, trained to listen, from ₹160. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse listeners →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is an empathy friend?</div>
            <div className="faq-a">An empathy friend is someone who listens without judgment, reflects back what you are saying without trying to fix or advise, and creates a space where you feel genuinely heard. On LeanOn, peer listeners are trained in active listening and empathetic presence.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I find an empathetic listener online in India?</div>
            <div className="faq-a">Browse listener profiles at leanon.app/browse. Each listener shows their areas of lived experience and availability. The first 5 minutes of every session are free, so you can assess the connection before committing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is active listening?</div>
            <div className="faq-a">Active listening is the practice of fully focusing on what someone is saying — not planning your response, not judging, not advising — and reflecting back what you hear. LeanOn listeners are specifically trained in this skill.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is this therapy?</div>
            <div className="faq-a">No. LeanOn is peer support, not therapy. Listeners are not licensed mental health professionals. They are real people with lived experience trained to listen and hold space. If you need clinical care, please see a qualified professional.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if the listener does not understand my problem?</div>
            <div className="faq-a">You choose your listener based on their background. If a session does not feel right, you can end it during the free 5-minute window and try someone else. There are no penalties for switching listeners.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Pages</h2>
          <div className="related">
            <a href="/browse" className="related-link">Browse Listeners</a>
            <a href="/peer-support" className="related-link">What Is Peer Support</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in Peer Support</a>
            <a href="/online-emotional-support-india" className="related-link">Online Emotional Support</a>
            <a href="/someone-to-talk-to-at-night" className="related-link">Someone to Talk To</a>
            <a href="/peer-support-online-india" className="related-link">Peer Support Online India</a>
          </div>
        </div>
      </div>
    </>
  )
}
