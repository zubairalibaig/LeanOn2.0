import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support Online India — Talk to Someone Who\'s Been There | LeanOn',
  description: 'Peer support from real people who\'ve experienced what you\'re going through. Anonymous, ₹160/session, available 24/7 across India. First 5 min free.',
  keywords: ['peer support online india', 'peer support app india', 'peer support mental health india', 'peer support india', 'online peer support india'],
  alternates: { canonical: 'https://www.leanon.app/peer-support-online-india', languages: { 'en-IN': 'https://www.leanon.app/peer-support-online-india' } },
  openGraph: {
    title: 'Peer Support Online India — Talk to Someone Who\'s Been There | LeanOn',
    description: 'Peer support from real people who\'ve experienced what you\'re going through. Anonymous, ₹160/session, available 24/7 across India. First 5 min free.',
    url: 'https://www.leanon.app/peer-support-online-india',
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
      name: 'What is peer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is a conversation with someone who has personally lived through something similar to what you are going through — not a therapist, not a coach, not a chatbot. A peer supporter brings lived experience to the conversation: they know what it feels like from the inside, not just from a textbook. Peer support focuses on being heard, not on being fixed or diagnosed. It is the "me too" moment — the relief of talking to someone who has actually been there.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support the same as therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Therapy is delivered by a licensed mental health professional — a psychologist, psychiatrist, or counsellor — who can diagnose conditions and provide clinical treatment. Peer support is delivered by a trained person with lived experience, and focuses on empathy, listening, and emotional connection rather than diagnosis or treatment. Peer support is not a replacement for therapy when therapy is needed, but for everyday emotional overwhelm, burnout, relationship stress, and the weight of hard weeks, peer support is often exactly what helps — and it is far more accessible and affordable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn\'s peer support different from a helpline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crisis helplines are staffed by volunteers and designed for acute emergencies — they are lifesaving resources for moments of immediate danger. LeanOn is different: it is for the weeks before a crisis, the sustained emotional weight that builds up when you have nowhere to put it. Conversations on LeanOn are longer, more personal, and more like talking to a friend who happens to understand your situation. You choose your listener based on their experience and availability, and you can return to the same person across sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is peer support free on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New users get a free 5-minute trial session. After that, paid sessions start at around ₹160 for 15 minutes — listeners set their own rate (₹8–₹25 per minute) and LeanOn adds a flat ₹10 platform fee. That is a fraction of what a private therapy session costs in India, and sessions are available at any hour with no appointment needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with depression or anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer support is not a clinical treatment for depression or anxiety, and LeanOn does not claim otherwise. However, for many people the weight of daily low mood, anxious thinking, or emotional exhaustion eases significantly when they can talk to someone who has been there — someone who does not minimise it or rush to fix it, but simply stays present and listens. If you are managing a diagnosed mental health condition, peer support works best alongside professional care, not instead of it. If you are unsure whether what you are experiencing needs clinical attention, speaking to a doctor or licensed counsellor is the right first step.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Peer Support Online India', item: 'https://www.leanon.app/peer-support-online-india' },
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
  .pill-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px;}
  .pill{background:white;border:1.5px solid var(--border);border-radius:50px;padding:8px 16px;font-size:13px;font-weight:700;color:var(--navy);}
  .vs-table{width:100%;border-collapse:collapse;margin-top:4px;}
  .vs-table th{font-size:13px;font-weight:800;color:var(--teal);text-align:left;padding:8px 12px;background:var(--light);border-radius:8px 8px 0 0;}
  .vs-table td{font-size:14px;color:#3A6070;padding:10px 12px;border-bottom:1px solid var(--border);line-height:1.6;vertical-align:top;}
  .vs-table tr:last-child td{border-bottom:none;}
  .vs-table .col-label{font-weight:800;color:var(--navy);white-space:nowrap;}
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
  @media(max-width:480px){.vs-table{font-size:13px;}.vs-table td,.vs-table th{padding:8px 8px;}}
`

export default function PeerSupportOnlineIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Peer Support Online India</span>
        </nav>

        <div className="crisis">
          🆘 In crisis? Call <a href="tel:08046110007">NIMHANS 080-46110007</a> or <a href="tel:14416">Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · India · 24/7</p>
          <h1>Peer Support That Feels Like Talking to a Friend <em>Who Gets It</em></h1>
          <p className="lead">Not therapy. Not a helpline. Not advice from someone who has never been through it. Peer support is the experience of speaking to a real person who has lived something like what you are carrying right now — and who listens without judgment, without rushing, and without a clinical distance between you.</p>
        </div>

        {/* What is peer support */}
        <div className="section">
          <h2>What Is Peer Support, Exactly?</h2>
          <p>Peer support is a conversation between two people — one who is struggling with something and one who has personally been through something similar. The peer supporter does not diagnose, prescribe, advise, or treat. They listen, they reflect, and they share what it was like from the inside.</p>

          <h3>The &quot;Me Too&quot; Moment</h3>
          <p>There is a specific kind of relief that happens when someone says &quot;I went through that too&quot; — and means it. Not as a polite thing to say, but because they actually did. That moment of recognition changes something. The thing you have been carrying alone stops feeling like a personal failure and starts feeling like a human experience. That is the core of peer support, and it is something no amount of professional training can replicate.</p>

          <h3>Listening, Not Fixing</h3>
          <p>Most people who reach out for support are not looking to be fixed. They know their situation. What they need is to say the actual version of it — not the acceptable summary — to someone who will not flinch, will not try to resolve it in ten minutes, and will not change how they see you after. Peer support gives you that space. A trained peer listener knows how to hold a conversation without steering it toward a conclusion you did not ask for.</p>

          <h3>What Peer Support Is Not</h3>
          <p>Peer support is not therapy. It does not replace clinical care for diagnosed mental health conditions. It is not a crisis service — if you are in immediate danger, please call NIMHANS 080-46110007 or Tele-MANAS 14416. And it is not advice: a peer listener will not tell you what to do, because that is not what helps. What helps is being genuinely heard.</p>
        </div>

        {/* Why it works */}
        <div className="section">
          <h2>Why Peer Support Works When Other Things Don&apos;t</h2>

          <h3>Sometimes You Don&apos;t Need a Professional. You Need Someone Who Has Been There.</h3>
          <p>There is a gap between &quot;I am struggling and need to talk to someone&quot; and &quot;I need clinical treatment&quot;. For a lot of people — working professionals after a brutal quarter, students under pressure from every direction, people navigating a relationship falling apart — what they need is not a diagnosis. It is a conversation with someone who has been in that same fog and come through it.</p>
          <p>Peer support lives in that gap. It is the thing that helps most for day-to-day emotional weight: the accumulation of stress, the feeling of falling behind, the loneliness that does not show up on the outside, the things you cannot say to anyone in your actual life.</p>

          <h3>Professional Distance Can Get in the Way</h3>
          <p>A therapist is trained to stay clinically neutral. That neutrality is valuable in treatment. But sometimes it creates distance at the exact moment you need closeness. A peer listener has been there. They bring warmth alongside skill, and they are not trying to be your professional — they are trying to be the person you needed when you were where they were.</p>

          <h3>Peer Support Is Available Right Now</h3>
          <p>The people who need to talk rarely need to talk at 11am on a Tuesday. They need to talk at 11pm on a Sunday, or at 6am before a meeting that has kept them up all night. Peer support on LeanOn is available at those hours — no appointment, no waitlist, no requirement to explain yourself before the conversation starts.</p>
        </div>

        {/* How LeanOn does it */}
        <div className="section">
          <h2>How LeanOn Does Peer Support</h2>

          <h3>Trained Peer Listeners</h3>
          <p>Every listener on LeanOn is a real person who has lived through something relevant to the conversations they take. They go through LeanOn&apos;s listener training — active listening, reflecting, holding space, knowing when to refer someone to professional help — before they are made available. They are not therapists, and we are transparent about that. But they are not random volunteers either.</p>

          <h3>Fully Anonymous</h3>
          <p>You sign up with a phone number and a first name. No last name, no photo of you, no social account. Nothing you say is shared with anyone in your life. The conversation stays between you and your listener.</p>

          <h3>Available 24/7 Across India</h3>
          <p>Listeners are available in the middle of the night, over weekends, on public holidays. Whether you are in Mumbai, Bengaluru, a small town in UP, or anywhere else in India — if you have a phone and data, peer support is available.</p>

          <h3>Affordable</h3>
          <p>A 15-minute session on LeanOn costs around ₹160. New users get a free 5-minute trial to find out whether the listener they chose actually understands them before committing to a longer session. There are no subscription traps, no membership fees, no automatic renewals.</p>
        </div>

        {/* Who it's for */}
        <div className="section">
          <h2>Who Peer Support Is For</h2>
          <p>Peer support on LeanOn is used by a wide range of people. Here are some of the most common situations:</p>
          <ul>
            <li><strong>Working professionals</strong> after a bad week, a difficult manager, a project that went wrong, or the slow burnout of a job that used to feel meaningful</li>
            <li><strong>Students</strong> under pressure from entrance exams, family expectations, career uncertainty, and the social performance of appearing fine</li>
            <li><strong>People going through relationship stress</strong> — a marriage under strain, a breakup they are not over, a friendship that has gone cold, loneliness inside a relationship</li>
            <li><strong>Anyone carrying something they can&apos;t say to friends or family</strong> — because the people around them are too close to the problem, would worry too much, or would not understand</li>
            <li><strong>HR and wellness teams</strong> looking for an affordable peer support option for employees, as a complement to existing EAP programmes</li>
          </ul>
          <p>You do not need a formal diagnosis, a crisis, or a specific reason. Feeling like you need to talk is reason enough.</p>
        </div>

        {/* Comparison */}
        <div className="section">
          <h2>Peer Support vs. Other Options</h2>
          <div style={{overflowX:'auto'}}>
            <table className="vs-table">
              <thead>
                <tr>
                  <th style={{width:'30%'}}>Option</th>
                  <th>What it provides</th>
                  <th>What it&apos;s not</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-label">LeanOn peer support</td>
                  <td>Lived-experience listening, warmth, anonymity, ₹160/session, 24/7</td>
                  <td>Clinical diagnosis or treatment</td>
                </tr>
                <tr>
                  <td className="col-label">Therapy</td>
                  <td>Professional diagnosis, structured treatment, clinical care</td>
                  <td>Affordable, instant, or always available</td>
                </tr>
                <tr>
                  <td className="col-label">Crisis helpline</td>
                  <td>Emergency support, immediate de-escalation</td>
                  <td>Long conversations or ongoing support</td>
                </tr>
                <tr>
                  <td className="col-label">Friends/family</td>
                  <td>Familiarity, love, shared history</td>
                  <td>Safe for everything, or available without social cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Have Been There</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌿',
              name: 'Priya',
              tag: 'Burnout & career stress',
              bio: 'Three years in consulting that nearly broke me. I know what it is to appear fine at work and fall apart at home.'
            },
            {
              emoji: '💙',
              name: 'Arjun',
              tag: 'Anxiety & pressure',
              bio: 'Cleared JEE, then spent a year not knowing who I was without the exam. I listen to people who are carrying too much.'
            },
            {
              emoji: '🌸',
              name: 'Meera',
              tag: 'Relationship & loneliness',
              bio: 'Married for six years, lonely for most of it. I talk to people who cannot say the real version of their relationship to anyone they know.'
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

        {/* Topics */}
        <div style={{marginBottom:24}}>
          <p style={{fontSize:16,fontWeight:800,color:'var(--navy)',marginBottom:14}}>Topics available on LeanOn</p>
          <div className="pill-row">
            {['Loneliness 🌙','Anxiety 😰','Burnout 🔥','Grief 🌿','Breakup 💔','Career 🧭','Student pressure 📚','LGBTQ+ 🌈','Parenting 👶','Startup stress 🚀','Relationships 💬','Just talk ☕'].map(t => (
              <div key={t} className="pill">{t}</div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Find a Peer Listener Today</h2>
          <p>Browse listeners by experience area. First 5 minutes free. Anonymous, available 24/7 — no appointment, no waitlist.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Find a peer listener →</button></a>
            <a href="/browse"><button className="btn-secondary">Browse peer listeners →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is peer support?</div>
            <div className="faq-a">Peer support is a conversation with someone who has personally lived through something similar to what you are going through — not a therapist, not a coach, not a chatbot. A peer supporter brings lived experience to the conversation: they know what it feels like from the inside, not just from a textbook. Peer support focuses on being heard, not on being fixed or diagnosed. It is the &quot;me too&quot; moment — the relief of talking to someone who has actually been there.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support the same as therapy?</div>
            <div className="faq-a">No. Therapy is delivered by a licensed mental health professional — a psychologist, psychiatrist, or counsellor — who can diagnose conditions and provide clinical treatment. Peer support is delivered by a trained person with lived experience, and focuses on empathy, listening, and emotional connection rather than diagnosis or treatment. Peer support is not a replacement for therapy when therapy is needed, but for everyday emotional overwhelm, burnout, relationship stress, and the weight of hard weeks, peer support is often exactly what helps — and it is far more accessible and affordable.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is LeanOn&apos;s peer support different from a helpline?</div>
            <div className="faq-a">Crisis helplines are staffed by volunteers and designed for acute emergencies — they are lifesaving resources for moments of immediate danger. LeanOn is different: it is for the weeks before a crisis, the sustained emotional weight that builds up when you have nowhere to put it. Conversations on LeanOn are longer, more personal, and more like talking to a friend who happens to understand your situation. You choose your listener based on their experience and availability, and you can return to the same person across sessions.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is peer support free on LeanOn?</div>
            <div className="faq-a">New users get a free 5-minute trial session. After that, paid sessions start at around ₹160 for 15 minutes — listeners set their own rate (₹8–₹25 per minute) and LeanOn adds a flat ₹10 platform fee. That is a fraction of what a private therapy session costs in India, and sessions are available at any hour with no appointment needed.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help with depression or anxiety?</div>
            <div className="faq-a">Peer support is not a clinical treatment for depression or anxiety, and LeanOn does not claim otherwise. However, for many people the weight of daily low mood, anxious thinking, or emotional exhaustion eases significantly when they can talk to someone who has been there — someone who does not minimise it or rush to fix it, but simply stays present and listens. If you are managing a diagnosed mental health condition, peer support works best alongside professional care, not instead of it. If you are unsure whether what you are experiencing needs clinical attention, speaking to a doctor or licensed counsellor is the right first step.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Pages</h2>
          <p>Peer support often connects with these other topics:</p>
          <div className="related">
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t afford therapy</a>
            <a href="/yourdost-alternative" className="related-link">YourDost alternative</a>
            <a href="/chat-with-real-person" className="related-link">Chat with a real person</a>
            <a href="/online-emotional-support-india" className="related-link">Online emotional support</a>
            <a href="/someone-to-lean-on" className="related-link">Someone to lean on</a>
            <a href="/browse" className="related-link">Browse all listeners</a>
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
