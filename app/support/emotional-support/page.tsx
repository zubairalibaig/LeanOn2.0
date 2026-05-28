import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Online Emotional Support India — Talk to a Real Person | LeanOn',
  description: 'Find online emotional support in India. Talk to real peer listeners who understand what you are going through — not a bot, not a stranger, someone who truly gets it. First 5 minutes free.',
  alternates: { canonical: 'https://leanon.app/support/emotional-support' },
  openGraph: {
    title: 'Online Emotional Support in India — LeanOn',
    description: 'Real peer listeners for emotional support in India. Available 24/7. First 5 minutes free.',
    url: 'https://leanon.app/support/emotional-support',
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
      name: 'What is emotional support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emotional support is the experience of feeling genuinely heard, understood, and less alone. It is different from advice-giving or problem-solving — it is about having someone acknowledge your feelings as real and valid rather than rushing to fix things. Research consistently shows that feeling emotionally supported is one of the most powerful factors in human resilience and wellbeing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does online emotional support work on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You browse peer listeners, pick someone whose lived experience resonates with yours, and start a session via text or voice. The listener is a real person who has been through similar challenges and is trained to offer empathetic, non-judgmental support. Sessions start instantly with no booking required, and the first 5 minutes are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is online emotional support as effective as in-person support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research shows that online emotional support can be just as effective as in-person support for many people. The key factor is feeling genuinely heard and understood — which is fully possible through text or voice regardless of physical proximity. Many people actually find it easier to open up online due to reduced social pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is emotional support on LeanOn confidential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All sessions are completely private. You can use a pseudonym and your real name is never shared. LeanOn does not share your conversation content with anyone. You are in control of how much you share and with whom.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is emotional support different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy is provided by licensed clinical professionals and involves diagnosis, treatment planning, and clinical intervention. Emotional support through peer listeners is about human connection, empathy, and shared experience. Both are valuable and serve different purposes — peer support is not a replacement for therapy when clinical care is needed, but a powerful complement to it.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Emotional Support', item: 'https://leanon.app/support/emotional-support' },
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
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A8;border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:#7A5020;line-height:1.75;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:#5A3800;}
`

export default function EmotionalSupportPage() {
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
          <a href="/support">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Emotional Support</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Emotional Support</p>
          <h1>Online Emotional Support in India — <em>Real People</em>, Real Understanding</h1>
          <p className="lead">When you need emotional support, you need to feel genuinely heard — not advised, not fixed, just understood. LeanOn connects you with peer listeners across India who have been through hard times and know what it means to need someone in your corner.</p>
        </div>

        {/* What Is Emotional Support */}
        <div className="section">
          <h2>What Is Emotional Support?</h2>
          <p>Emotional support is the experience of feeling understood and less alone. It is about being heard without judgment — having someone acknowledge your feelings as real and valid rather than rushing to solutions or silver linings. Research consistently shows that emotional support is one of the strongest predictors of resilience, recovery, and mental wellbeing.</p>

          <h3>Support Is Not the Same as Advice</h3>
          <p>Most of us have experienced going to a friend or family member in distress and receiving a list of things we should do — when all we actually wanted was for someone to sit with us in what we were feeling. Genuine emotional support is rarer than it sounds. It requires the other person to resist the urge to fix and instead simply be present.</p>

          <h3>The Gap Between Needing Support and Finding It</h3>
          <p>In India, that gap is particularly wide. Cultural norms around emotional expression, the expectation of self-reliance, and the stigma around mental health struggles make it genuinely hard to say &quot;I am not okay and I need someone to talk to.&quot; Friends may not know how to hold that. Family may make it worse. Colleagues are not appropriate. And therapy can feel too formal, too expensive, or too clinical for what you actually need.</p>

          <h3>What Real Emotional Support Feels Like</h3>
          <p>You know you have received emotional support when you finish a conversation feeling lighter — not because your situation has changed, but because you feel less alone in it. When someone has really listened, reflected back your experience, and let you know that your feelings make sense. That experience is what LeanOn is built around.</p>
        </div>

        {/* Why Online Emotional Support Works */}
        <div className="section">
          <h2>Why Online Emotional Support Works</h2>
          <p>Online peer support removes the barriers that make it hard to open up in person: geographic limitations, time constraints, the fear of burdening someone you see every day, and the social consequence of showing vulnerability to someone in your life.</p>

          <h3>The Freedom of Anonymity</h3>
          <p>When you speak to someone anonymously online, many people find it significantly easier to be fully honest. You are not managing how you will be perceived at the next family gathering or worried that what you say will change how a friend sees you. That freedom creates the conditions for genuine openness — which is the first step to feeling genuinely supported.</p>

          <h3>Available When You Need It Most</h3>
          <p>Emotional distress does not follow a schedule. It peaks at 1 AM when you cannot sleep, on Sunday afternoons when the loneliness is loudest, or at moments when something small tips over everything you have been holding together. Online support is available in those exact moments — not just during business hours.</p>

          <h3>Proven Effectiveness</h3>
          <p>Research consistently shows that online peer support can be as effective as in-person support for emotional wellbeing. The key factor is not proximity — it is feeling genuinely heard and understood. That is fully possible through a text or voice conversation with the right person.</p>
        </div>

        {/* What to Expect from a Peer Listener */}
        <div className="section">
          <h2>What to Expect from a Peer Listener on LeanOn</h2>
          <p>LeanOn listeners are real people who have personally navigated the kinds of challenges you might be facing — loneliness, anxiety, burnout, relationship stress, grief, or simply the feeling that life is too much right now. They are not therapists, but they understand from lived experience what it is like to need support.</p>

          <h3>Active Listening Without Interruption</h3>
          <p>Your listener&apos;s job is to hear you fully — not to wait for a pause so they can offer their opinion, but to genuinely follow what you are saying and reflect it back. Many people describe a LeanOn session as the first time they have been truly listened to without interruption or judgment.</p>

          <h3>Validation, Not Fixing</h3>
          <p>Listeners are not there to solve your problems or tell you what to do. They are there to make you feel that your feelings are understandable and valid — because they are. That validation alone is often profoundly relieving.</p>

          <h3>Honest Perspective When You Want It</h3>
          <p>If you actively ask for perspective from someone who has been through something similar, your listener can offer that too. Not as a prescription, but as shared experience from someone who has navigated related territory and found their way through.</p>
        </div>

        {/* Who Benefits Most */}
        <div className="section">
          <h2>Who Benefits Most from Online Emotional Support?</h2>
          <p>Peer-based emotional support is particularly valuable for people who:</p>
          <ul>
            <li>Need to process something out loud but have no one safe to tell</li>
            <li>Feel isolated, misunderstood, or like they are carrying too much alone</li>
            <li>Want to be heard without worrying about the listener&apos;s reaction or judgment</li>
            <li>Are not in acute crisis but are struggling quietly with ongoing stress</li>
            <li>Cannot access or afford professional therapy but need more than self-help</li>
            <li>Are going through something culturally specific — family pressure, career uncertainty, identity questions — that generic resources do not address</li>
          </ul>
          <p>Peer support is not a replacement for clinical mental health care when that is what is needed. But for the vast majority of difficult emotional experiences, what helps most is a real person who genuinely understands on the other end of the conversation.</p>
        </div>

        {/* How to Start */}
        <div className="section">
          <h2>How to Start — It Takes Less Than a Minute</h2>
          <p>Sign up with your mobile number. Browse peer listeners by topic, experience, and availability. Pick someone whose story and background resonates with what you are going through. Start your first session — the first 5 minutes are free, no payment required upfront.</p>

          <h3>Choose Your Format</h3>
          <p>Prefer to type? Use text chat. Want to hear a voice? Switch to audio. You are in complete control of how you communicate and how much you share. There is no pressure to go deeper than you want to, and no one will push you toward anything.</p>

          <h3>No Commitment Required</h3>
          <p>If the first listener does not feel right, you can try another. LeanOn&apos;s first 5 minutes free policy exists specifically so you can find the right match before you commit to a session. Peer support is only useful when it feels right — and finding the right listener is part of the process.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Here for Your Emotional Support</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌿',
              name: 'Nisha',
              tag: 'Burnout & Overwhelm',
              bio: 'Spent two years running on empty before finding my way back. I know what it feels like when you can\'t even explain why you\'re not okay.'
            },
            {
              emoji: '💙',
              name: 'Arjun',
              tag: 'Anxiety & Overthinking',
              bio: 'Navigated severe anxiety for years. I understand the spiral and the exhaustion, and I\'m here to help you feel less alone in it.'
            },
            {
              emoji: '🌸',
              name: 'Preethi',
              tag: 'Grief & Loss',
              bio: 'Lost my father during the pandemic while living alone in another city. I know the specific loneliness of grief with no one to hold you.'
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
          <h2>Start Your Free Session Now</h2>
          <p>Find someone who understands. First 5 minutes free — no credit card, no commitment.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Get Emotional Support</button></a>
            <a href="/browse"><button className="btn-secondary">Browse Listeners First</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is emotional support?</div>
            <div className="faq-a">Emotional support is the experience of feeling genuinely heard, understood, and less alone. It is about having someone acknowledge your feelings as real and valid rather than rushing to fix things. Research shows it is one of the most powerful factors in resilience and mental wellbeing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does online emotional support work on LeanOn?</div>
            <div className="faq-a">You browse peer listeners, pick someone whose lived experience resonates with yours, and start a session via text or voice. The listener is a real person trained in empathetic support. Sessions start instantly with no booking required, and the first 5 minutes are free.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is online emotional support as effective as in-person support?</div>
            <div className="faq-a">Research shows that online peer support can be just as effective as in-person support for many people. The key factor is feeling genuinely heard and understood — which is fully possible through text or voice. Many people find it easier to open up online due to reduced social pressure.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is emotional support on LeanOn confidential?</div>
            <div className="faq-a">Yes. All sessions are completely private. You can use a pseudonym and your real name is never shared. LeanOn does not share your conversation content with anyone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is emotional support different from therapy?</div>
            <div className="faq-a">Therapy is provided by licensed clinical professionals and involves diagnosis and clinical intervention. Emotional support through peer listeners is about human connection, empathy, and shared experience. Both are valuable — peer support is not a replacement for therapy when clinical care is needed, but a powerful complement to it.</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>Peer support is not a substitute for professional mental health care.</strong> LeanOn listeners are trained peers, not licensed therapists or counsellors. If you are in crisis or experiencing thoughts of self-harm, please contact a professional immediately.</p>
          <p><strong>Crisis helplines in India:</strong> iCall — <a href="tel:9152987821" style={{color:'#7A5020',fontWeight:700}}>9152987821</a> &nbsp;|&nbsp; Tele-MANAS — <a href="tel:14416" style={{color:'#7A5020',fontWeight:700}}>14416</a></p>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support topics on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/support/grief" className="related-link">Grief &amp; Loss</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>
      </div>
    </>
  )
}
