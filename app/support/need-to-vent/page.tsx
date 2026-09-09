import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Vent? Talk to Someone Who Will Actually Listen | LeanOn',
  description: 'Need to vent and get things off your chest? LeanOn connects you with real peer listeners in India who listen without judgment — no advice unless you want it. 24/7.',
  keywords: ['need to vent India', 'someone to vent to India', 'want to vent my feelings India', 'need to talk about my problems India', 'need to get things off my chest', 'vent to someone online India', 'talk about my problems India', 'someone to listen to me vent India', 'need to express my feelings India', 'I just want to talk India', 'need to release emotions India', 'emotional outlet India', 'talk to someone who listens India', 'vent without judgment India', 'talk about life problems India'],
  alternates: { canonical: 'https://www.leanon.app/support/need-to-vent', languages: { 'en-IN': 'https://www.leanon.app/support/need-to-vent' } },
  openGraph: {
    title: 'Need to Vent? Talk to Someone Who Will Actually Listen | LeanOn',
    description: 'Need to vent and get things off your chest? LeanOn connects you with real peer listeners in India who listen without judgment — no advice unless you want it. 24/7.',
    url: 'https://www.leanon.app/support/need-to-vent',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn - someone to vent to in India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is venting to someone important for mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carrying unexpressed emotion is physically and mentally costly. Suppression — the act of containing feelings without expression — keeps the nervous system in a low-grade state of alert. When you vent — when you say what you have been holding — the act of externalising it moves it from inside to outside, which is neurologically different from just thinking it. The relief is not just psychological. It is physiological.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between venting and therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Venting is about expression — getting it out, being heard, releasing what has been building. Therapy is about treatment — diagnosis, structured intervention, working through patterns over time. Both have value, and they are different. Most people who need to vent do not need therapy. They need someone who will listen without judging, without redirecting, and without immediately trying to fix the problem. That is what LeanOn peer listeners offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it healthy to vent to the same person repeatedly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends. Venting to a trusted person can strengthen a relationship and provide relief. But if you regularly vent to the same person — friend, partner, family — you risk making them feel like a dumping ground, which strains the relationship over time. Having a dedicated peer listener means you can process as much as you need without the social overhead of managing someone else\'s comfort in the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do when I want to vent but have no one to talk to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is exactly what LeanOn is built for. Browse listener profiles, pick someone whose experience resonates, and book a session. You do not have to prepare anything. You do not have to have it figured out. You can open with \'I just need to talk about something\' — and go from there.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a LeanOn listener give me advice when I vent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you ask for it. Peer listeners are trained in active listening, which means their job is to hear you — not to advise you, fix you, or steer you to a conclusion. If you want to vent without receiving opinions, say so at the start. Your listener will follow your lead.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a venting session be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'However long you need. Most people find that 15–20 minutes of uninterrupted expression is enough to feel significantly lighter. 30-minute sessions allow for the initial release and then some processing. There is no minimum or prescription — you can book whatever feels right for where you are.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/support' },
    { '@type': 'ListItem', position: 3, name: 'Need to Vent', item: 'https://www.leanon.app/support/need-to-vent' },
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

export default function NeedToVentPage() {
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
          <span style={{color:'var(--navy)'}}>Need to Vent</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Venting &amp; Expression</p>
          <h1>Need to <em>Vent</em>? Someone Is Ready to Listen</h1>
          <p className="lead">Sometimes you do not need advice. You do not need a solution. You just need to say what you have been carrying — and have someone actually hear it. LeanOn peer listeners listen without judgment, without redirecting, and without rushing to fix anything.</p>
        </div>

        <div className="section">
          <h2>What Venting Actually Does to Your Body and Brain</h2>
          <p>Carrying unexpressed emotion is not neutral. Suppression — the act of holding feelings in — keeps the nervous system in a sustained low-grade state of activation. Cortisol stays slightly elevated. The body remains on alert. Over time, this wears you down in ways that are hard to attribute to any single cause: you feel more tired than the circumstances warrant, more irritable, more fragile.</p>

          <h3>The Physiology of Expression</h3>
          <p>When you vent — when you say what you have been holding — something measurable changes. The act of putting feeling into words activates the prefrontal cortex, which helps regulate the amygdala (the brain&apos;s threat-detection centre). Labelling an emotion, neurologically, reduces its intensity. This is not metaphor. It is function. The relief you feel after a good vent is not imagined. It is the nervous system downregulating from a sustained state of alert.</p>

          <h3>From Inside to Outside</h3>
          <p>There is a specific change that happens when a thought moves from inside your head to outside, into language, into someone else&apos;s hearing. The thought becomes something you can look at rather than something that is looking at you. It becomes external. You become slightly separate from it. This is part of why journaling helps — but it does not have the same effect as speaking to another person, because the other person&apos;s presence changes the nature of the externalisation. You are not just writing — you are being heard. That is different.</p>
        </div>

        <div className="section">
          <h2>Why We Do Not Vent More</h2>
          <p>If venting is so useful, why do so many people walk around carrying enormous amounts of unexpressed feeling? Because the social cost of venting in India — in most cultures, but especially here — is real and often prohibitive.</p>

          <h3>Fear of Burdening Others</h3>
          <p>The most common reason people do not vent is the fear of being too much — of overwhelming their friends, exhausting their partner, worrying their family. In Indian families particularly, emotional expression is often framed as a burden. You do not want to add to someone else&apos;s load. So you carry it yourself. And the weight builds.</p>

          <h3>Fear of Judgment</h3>
          <p>Venting requires showing the messy, unresolved, sometimes irrational interior of your experience. In a culture that prizes composure and equanimity — where showing emotion is often read as weakness — the fear of being judged for what you feel is real. You censor yourself. You present the acceptable version. And the real thing stays inside.</p>

          <h3>Not Wanting to Seem Weak</h3>
          <p>For many men in India especially, emotional expression has been actively discouraged since childhood. Crying was weakness. Admitting struggle was deficiency. The result is decades of men who have no practice venting and no idea how to start — even when they desperately need to. The need does not go away because it is not expressed. It just goes underground.</p>
        </div>

        <div className="section">
          <h2>The Problem With Venting to Friends and Family</h2>
          <p>The people closest to you are not, structurally, the best people to vent to — even when they love you and want to help. This is not about their intentions. It is about the dynamics involved.</p>

          <h3>They Have Opinions</h3>
          <p>When you vent to a friend about your partner, your boss, or your family member, your friend has opinions. They have history with your situation. They may like or dislike the person you are talking about. They will be hard-pressed not to take sides, offer advice, or steer you toward a conclusion. Their love for you can make it harder for them to simply listen — because they want to help, which means acting, not just hearing.</p>

          <h3>They Share What You Said</h3>
          <p>What you vent to a close friend or family member stays in the social network. The thing you said in confidence about your marriage, your job, your mental state — it may travel. Not maliciously. But socially, information moves. This creates a chilling effect on what you are willing to say, which means you self-censor, which defeats the purpose of venting.</p>

          <h3>They Can Only Take So Much</h3>
          <p>Even the most loving friend or partner has a finite capacity to absorb your distress before it begins to cost them. Regular venting to the same person, without reciprocal exchange, strains the relationship — even if both parties are trying hard. There is no such problem with a peer listener. Their role is specifically to receive. The relationship is designed for it.</p>
        </div>

        <div className="section">
          <h2>What a Peer Listener Offers That No One Else Can</h2>

          <h3>A Dedicated Space With No Social Consequence</h3>
          <p>When you talk to a LeanOn peer listener, you are in a space that exists entirely for your expression. The listener has no prior relationship with you. They have no stake in what you decide. They are not going to tell anyone what you said. The social consequence of speaking honestly — the reason you censor yourself with friends and family — simply does not exist here. You can say the thing you have not been able to say anywhere else.</p>

          <h3>Trained to Not Fix or Judge</h3>
          <p>Active listening is a skill. LeanOn peer listeners are trained in it. They know how to hear you without immediately pivoting to advice. They know how to reflect back what you are saying in ways that help you hear yourself. They know how to hold the space for you to keep talking — because sometimes what you need most is not a response but more room to speak. You can vent for 20 minutes and have a listener who is genuinely receiving every word without trying to redirect you.</p>

          <h3>Someone Who Has Been There</h3>
          <p>LeanOn listeners are not trained counsellors — they are people who have personally navigated difficult experiences and want to help others do the same. When you vent about something they have been through, they hear it with a recognition that a stranger-by-training cannot offer. That recognition — the sense that someone genuinely understands the specific texture of what you are describing — is often what people most need.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Know How to Hear You</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '👂',
              name: 'Shreya',
              tag: 'Active Listener',
              bio: 'I do not give advice unless you ask. I listen. That is the whole job, and I am good at it.'
            },
            {
              emoji: '🌊',
              name: 'Dev',
              tag: 'No-judgment Zone',
              bio: 'You can say anything here. I have heard hard things and I know how to hold them without flinching.'
            },
            {
              emoji: '🫂',
              name: 'Sanya',
              tag: 'Emotional Outlet',
              bio: 'Sometimes you just need to get it out. I am here for that — no fixing, no redirecting, just listening.'
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

        <div className="cta-card">
          <h2>Ready to Get It Off Your Chest?</h2>
          <p>A peer listener is ready right now — no judgment, no advice unless you want it, no social consequence. Start with a free trial session.</p>
          <div className="cta-btns">
            <a href="/browse?topic=general"><button className="btn-primary">Just say it — first 5 min free →</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works →</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more ways to feel heard on LeanOn:</p>
          <div className="related">
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
