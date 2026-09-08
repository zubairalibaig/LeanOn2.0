import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Like a Failure? Peer Support in India | LeanOn',
  description: 'Feel like you\'re failing at life, work, or relationships? Talk to a real peer listener in India who has felt the same and come through it. Anonymous, 24/7.',
  keywords: ['feeling like a failure India', 'I am a failure India', 'feel worthless India', 'feel like I am not good enough India', 'failure at life India', 'failing at everything India', 'I am a disappointment India', 'feel inadequate India', 'not good enough India', 'peer support for failure India', 'I failed my family India', 'startup failure India', 'career failure India', 'exam failure India', 'how to deal with failure India'],
  alternates: { canonical: 'https://www.leanon.app/support/feeling-like-a-failure', languages: { 'en-IN': 'https://www.leanon.app/support/feeling-like-a-failure' } },
  openGraph: {
    title: 'Feeling Like a Failure? Peer Support in India | LeanOn',
    description: 'Feel like you\'re failing at life, work, or relationships? Talk to a real peer listener in India who has felt the same and come through it. Anonymous, 24/7.',
    url: 'https://www.leanon.app/support/feeling-like-a-failure',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn peer support for feeling like a failure' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do I feel like a failure even when I haven\'t actually failed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the feeling of failure and the fact of failure are two completely separate things. Many people who have objectively achieved a great deal still carry a deep, persistent sense of not being enough. This often comes from impossible standards set early — by parents, by school systems, by comparison with siblings or peers. The standard was so high that no achievement ever quite clears it. So the feeling of failure persists even when the evidence does not support it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop feeling like a failure in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first step is to separate what you feel from what is true. Feelings of failure are real — they hurt, they exhaust, they cloud everything. But they are not an accurate audit of your worth or your trajectory. The second step is to say it out loud to someone who will not rush to fix it or dismiss it. Speaking \'I feel like a failure\' to a real person, and having them hear it without panic, is often what breaks the loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is feeling like a failure normal in India\'s competitive culture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extraordinarily common. India\'s competitive education and career culture creates a chronic sense of inadequacy in millions of people who are, by any reasonable measure, doing fine. When you have been told your whole life that your value is in your rank, your marks, your salary, your marriage — the gap between where you are and where you \'should\' be never closes. This is not a personal flaw. It is what happens when your worth is always defined by comparison.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean when you feel like you\'ve let your family down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the specific, heavy forms of failure feeling that is particularly acute in Indian families. The weight of being the one who was supposed to \'make it\' — whether for parents, for your community, or for the family name — can feel enormous. What often gets lost is that the people who love you most are not grading you. The harshest judge is usually yourself, operating under a standard no one else actually set.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does talking to a peer listener help with feeling like a failure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peer listeners on LeanOn have personally felt what you are feeling — startup failures, exam failures, career wrong turns, relationship failures. When they tell you it is survivable, they are not being optimistic. They are reporting from the other side of the same hole. That is different from being reassured by someone who has never been there.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does feeling like a failure need professional help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the feeling is persistent (weeks to months), if it is affecting your ability to work or function, if it comes with thoughts of harming yourself or not wanting to be here, please speak to a mental health professional or call NIMHANS (080-46110007). Peer support is for processing and being heard — not for clinical treatment.',
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
    { '@type': 'ListItem', position: 3, name: 'Feeling Like a Failure', item: 'https://www.leanon.app/support/feeling-like-a-failure' },
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

export default function FeelingLikeAFailurePage() {
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
          <span style={{color:'var(--navy)'}}>Feeling Like a Failure</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Failure & Inadequacy</p>
          <h1>The Feeling of <em>Failure</em> Is Not the Fact of Failure</h1>
          <p className="lead">Millions of people in India carry a persistent sense of not being enough — even when the evidence does not support it. LeanOn connects you with peer listeners who have personally navigated failure, come through it, and can sit with you in it now.</p>
        </div>

        <div className="section">
          <h2>The Feeling of Failure vs The Fact of Failure</h2>
          <p>These are two separate things, and the distinction matters enormously. You can fail at something — miss a deadline, lose a deal, end a relationship — and feel fine about it. And you can objectively be doing well — career intact, family stable, health reasonable — and feel like a complete failure. The feeling and the fact are not the same thing.</p>

          <h3>When the Standard Was Always Too High</h3>
          <p>For many people who grew up in India&apos;s competitive education system, the standard was set so high — by parents, by school, by comparison with toppers and cousins who got into IIT — that no achievement ever quite clears it. You get 88% and the question is who got 92. You get a job offer and the comparison is who got a higher package. The goal post was never fixed. So the feeling of failure persists regardless of what you actually achieve.</p>

          <h3>The Gap Between Where You Are and Where You Should Be</h3>
          <p>Indian culture is extraordinarily precise about where you should be at every age. By 22, degree done. By 25, first job sorted. By 28, promotion coming. By 30, settled and married. By 35, children and property. This timeline leaves almost no room for the detours that make a life real — and it means that almost everyone, at some point, feels like they are behind. The gap is not a measure of failure. It is a measure of how rigid the script is.</p>
        </div>

        <div className="section">
          <h2>Why India&apos;s Culture Creates This Feeling</h2>
          <p>The feeling of failure in India is not a coincidence or a personal weakness. It is a structural outcome of a culture that, for several generations, has tied human worth to measurable achievement and social comparison.</p>

          <h3>Rank Culture</h3>
          <p>India&apos;s education system runs on rank. Not pass or fail — rank. Where you placed in class, in district, in state. Children internalise early that their value is a number relative to other children. This way of measuring worth does not disappear when school ends. It continues into careers, salaries, neighbourhoods, the school the children attend. The comparison never stops.</p>

          <h3>Parental Pressure and Family Expectations</h3>
          <p>In India, family expectations are not a background presence — they are an active daily reality. Parents have sacrificed for children to succeed. Children carry that weight. When you feel like you are falling short, you are not just disappointing yourself. You are carrying the fear of disappointing people who love you and who you love. That is an enormous emotional load.</p>

          <h3>Salary as Identity</h3>
          <p>A specific and very Indian form of the failure feeling comes from salary comparisons. In many families and social circles, income is discussed openly, and your worth as an adult is substantially tied to what you earn. This creates a chronic low-grade sense of inadequacy in anyone who earns less than the comparison point — which, given the way comparisons work, is almost everyone.</p>
        </div>

        <div className="section">
          <h2>The Most Common Forms It Takes</h2>

          <h3>Career Failure</h3>
          <p>A job loss, a promotion that did not happen, a business that did not work, a career that peaked earlier than expected. These events hit hard in a culture that equates career trajectory with personal worth. The shame is often the worst part — not the practical setback, but the feeling of having to tell people, of having failed publicly.</p>

          <h3>Exam and Academic Failure</h3>
          <p>India has a specific and brutal relationship with exam results. JEE, NEET, UPSC, board exams — the stakes are enormous and the failure rates, given how many people appear, are high. But the emotional weight of academic failure in India goes far beyond the practical. The family&apos;s identity is often tangled up in the child&apos;s results. When you fail the exam, you do not just feel like you failed. You feel like you failed everyone.</p>

          <h3>Letting Your Family Down</h3>
          <p>This is perhaps the heaviest specific form of failure feeling in India — the sense that you have not lived up to what your family needed you to be. The first one to go to college. The one who was supposed to support the family. The one who was meant to restore the family&apos;s standing. When you feel like you have let that down, the weight can be extraordinary.</p>

          <h3>Startup Failure</h3>
          <p>India&apos;s startup culture has created a new specific category of failure feeling — the failed founder. You took the risk, left the stable job, told everyone about the dream, and then it did not work. The stigma around startup failure in India is real, even as it gradually reduces. For many founders, the practical loss is manageable. The feeling of public failure is much harder.</p>
        </div>

        <div className="section">
          <h2>What Actually Helps</h2>

          <h3>Naming It</h3>
          <p>The first useful thing is to say it — I feel like a failure — without immediately qualifying it, defending yourself against it, or rushing to convince yourself otherwise. Just naming it. Sitting with the fact that this is what you feel. You cannot process something you are constantly fleeing from.</p>

          <h3>Hearing Yourself Say It</h3>
          <p>There is something specific that happens when you say &apos;I feel like a failure&apos; out loud to another person. It changes the experience of the thought. The thought that loops endlessly in your head, when spoken out loud, becomes something you can look at rather than something that is looking at you. The person&apos;s response matters less than the act of externalising it.</p>

          <h3>Talking to Someone Who Has Been There</h3>
          <p>Advice from people who have never failed — or who are in the reassurance business — does not land. What lands is: someone who has personally sat where you are sitting, who knows what the specific gravity of that feeling is like, and who is on the other side of it. LeanOn peer listeners are people who have navigated startup failure, exam failure, career setbacks, and family disappointment. When they tell you it gets better, they know what they are talking about.</p>

          <h3>Decoupling Worth From Outcome</h3>
          <p>This is the deeper work — and it is not something that happens in one conversation. But it begins somewhere. The beginning is usually recognising that the equation of worth with outcome was given to you, not chosen by you. You were taught it. And what was taught can be examined, and gradually, unlearned.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Have Navigated Failure</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🏗️',
              name: 'Vikram',
              tag: 'Startup Failure',
              bio: 'My startup failed after three years. I know what that specific shame feels like. I also know what comes after it.'
            },
            {
              emoji: '📚',
              name: 'Ananya',
              tag: 'Exam Failure',
              bio: 'Failed UPSC four times. The feeling of letting everyone down was the worst part. Found my way through to something better.'
            },
            {
              emoji: '💼',
              name: 'Karthik',
              tag: 'Career Setback',
              bio: 'Was let go from a job I thought was my identity. Rebuilt from there. I can sit with you in the hard part.'
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
          <h2>Talk to Someone Who Has Been There</h2>
          <p>A peer listener who has personally navigated failure — and come through it — is available right now. Anonymous, no judgment, no appointments.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener →</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
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
          <p>The feeling of failure often connects with other experiences. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/imposter-syndrome" className="related-link">Imposter Syndrome</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
          </div>
        </div>

        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · <a href="/chennai" style={{color:'var(--teal)'}}>Chennai</a> · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · <a href="/pune" style={{color:'var(--teal)'}}>Pune</a> · <a href="/kolkata" style={{color:'var(--teal)'}}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
