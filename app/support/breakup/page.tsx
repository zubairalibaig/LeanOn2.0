import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Breakup & Heartbreak Support in India | Talk to Someone Who Gets It | LeanOn',
  description: 'Going through a breakup, divorce, or heartbreak? Connect with peer listeners who have been through the pain and rebuilt. Available 24/7.',
  alternates: { canonical: 'https://www.leanon.app/support/breakup' },
  openGraph: {
    title: 'Breakup Support — LeanOn',
    description: 'Talk to someone who has survived heartbreak and rebuilt their life. Real peer support for breakups, divorce, and relationship pain.',
    url: 'https://www.leanon.app/support/breakup',
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
      name: 'How long does breakup pain typically last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Breakup recovery varies enormously depending on the length of the relationship, attachment styles, circumstances of the breakup, and support available. Research suggests acute pain typically peaks in the first few weeks and meaningfully reduces over 3-6 months — but this is a general guideline, not a rule. Having support significantly speeds up recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel like you will never get over a breakup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this feeling is extremely common, especially in the acute phase of a breakup. The brain processes romantic loss in areas linked to physical pain, addiction, and grief — which is why breakups can feel genuinely unbearable. The feeling of permanence is a symptom of grief, not a prediction of the future.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I cope with a breakup when I cannot tell my family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In India, many relationships are kept private from family — which means when they end, you are also grieving in secret. This can make breakup pain significantly harder to process. LeanOn offers completely private peer support where you can talk openly about relationships your family may not know about.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help after a divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Divorce involves layers of loss — the relationship, the identity, the shared life, often custody arrangements, and social stigma (especially in India). LeanOn listeners who have been through divorce understand these specific dimensions and can offer genuine peer support through the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is co-parenting stress and how does peer support help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Co-parenting stress involves the ongoing challenges of raising children with an ex-partner after separation — communication difficulties, scheduling conflicts, different parenting styles, and the emotional weight of seeing your ex regularly. Peer listeners who have navigated co-parenting can offer specific, practical support.',
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
    { '@type': 'ListItem', position: 3, name: 'Breakup & Heartbreak', item: 'https://www.leanon.app/support/breakup' },
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
  .hero{margin-bottom:24px;}
  .notice{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:16px;padding:16px 20px;margin-bottom:24px;font-size:14px;color:#7A5020;font-weight:600;line-height:1.6;}
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

export default function BreakupSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Breakup & Heartbreak</span>
        </nav>

        <div className="hero">
          <p className="tag">Peer Support · Breakup & Heartbreak</p>
          <h1>Heartbreak Is Real. <em>So Is Recovery.</em></h1>
          <p className="lead">A breakup can feel like the floor has disappeared. Whether you are recovering from a long-term relationship, a divorce, or a first heartbreak, LeanOn connects you with peer listeners who have been through it — and rebuilt.</p>
        </div>

        <div className="notice">
          If you are in crisis or having thoughts of self-harm, please call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India). LeanOn is peer support and cannot replace crisis intervention.
        </div>

        <div className="section">
          <h2>The Reality of Heartbreak in India</h2>
          <p>Breakup pain in India carries unique layers that many generic resources miss. Relationships here often involve family expectations, social judgment, and privacy considerations that make the grief even harder to process openly.</p>

          <h3>When You Cannot Tell Anyone</h3>
          <p>Many relationships in India — especially among young people — are kept private from family. When they end, you are grieving in complete secrecy. You cannot cry at home, you cannot explain why you are distracted at work, you cannot get the social support that breakup recovery normally provides. This is a specific and particularly painful form of heartbreak.</p>

          <h3>Divorce in India</h3>
          <p>Divorce carries significant social stigma in much of India, especially for women. Beyond the grief of the lost relationship, divorce involves navigating family pressure, social judgment, financial separation, legal processes, and — if children are involved — co-parenting arrangements. This is an enormous amount to carry, often with very little support.</p>

          <h3>Arranged Marriage Breakdowns</h3>
          <p>When an arranged marriage doesn&apos;t work out, the grief is compounded by the involvement of two families, community judgment, and the sense of having &quot;failed&quot; a system designed to succeed. This form of heartbreak has its own specific pain that most breakup resources do not address.</p>

          <h3>Breakup Recovery and Dating Again</h3>
          <p>Re-entering dating after a significant breakup or divorce is its own challenge. The anxiety of new relationships, the fear of being hurt again, the comparisons to your ex, the unfamiliar landscape of dating apps — all of this can feel overwhelming after a long relationship ends.</p>

          <h3>Co-Parenting Stress</h3>
          <p>Separating from a partner is painful enough. When children are involved, you must continue to interact with your ex on a regular basis — managing scheduling, parenting decisions, and often ongoing emotional tension. Co-parenting stress is real, chronic, and rarely talked about.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Helps After a Breakup</h2>

          <h3>A Private Space to Grieve</h3>
          <p>LeanOn is completely private. No one in your life needs to know you are using it. This is especially important for people navigating secret relationships, relationships their family disapproved of, or the social stigma of divorce.</p>

          <h3>Listeners Who Have Survived Heartbreak</h3>
          <p>Our listeners with breakup expertise have genuinely been through it — they know the specific pain of finding their stuff at your door, the agony of seeing their social media posts, the grief that hits on the anniversary of your first date. This is not theoretical empathy.</p>

          <h3>No Judgment About Relationship Choices</h3>
          <p>LeanOn listeners do not judge your relationship choices — whether it was an inter-caste relationship your family never approved of, a marriage that &quot;should have worked,&quot; or a situationship that everyone told you was not real. Your feelings are valid regardless of anyone else&apos;s opinion of the relationship.</p>

          <h3>Support Through the Long Tail of Recovery</h3>
          <p>Breakup recovery is not linear. There will be bad days months after you thought you were over it. LeanOn is available whenever those waves hit — so you have somewhere to go without feeling like you are burdening your friends again.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Heartbreak</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '💔',
              name: 'Ananya',
              tag: 'Breakup Recovery',
              bio: 'Recovered from a 5-year relationship ending suddenly. Knows the specific grief of losing your &quot;person&quot; and rebuilding identity.'
            },
            {
              emoji: '⚖️',
              name: 'Suresh',
              tag: 'Divorce Support',
              bio: 'Went through a difficult divorce while navigating family pressure and co-parenting. Rebuilt a meaningful life after.'
            },
            {
              emoji: '🌱',
              name: 'Kavita',
              tag: 'Post-Breakup Anxiety',
              bio: 'Struggled with relationship anxiety after a painful breakup. Helps others trust again and find their footing.'
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
          <h2>You Don&apos;t Have to Get Through This Alone</h2>
          <p>Connect with a peer listener who has been through heartbreak and found their way back. Available 24/7.</p>
          <div className="cta-btns">
            <a href="/browse?topic=breakup"><button className="btn-primary">Find a Breakup Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">How long does breakup pain typically last?</div>
            <div className="faq-a">Breakup recovery varies enormously depending on the length of the relationship, attachment styles, and support available. Research suggests acute pain typically peaks in the first few weeks and meaningfully reduces over 3–6 months — but this is a general guideline. Having support significantly speeds up recovery.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it normal to feel like you will never get over a breakup?</div>
            <div className="faq-a">Yes, this feeling is extremely common, especially in the acute phase. The brain processes romantic loss in areas linked to physical pain and grief — which is why breakups can feel genuinely unbearable. The feeling of permanence is a symptom of grief, not a prediction of the future.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How do I cope with a breakup when I cannot tell my family?</div>
            <div className="faq-a">In India, many relationships are kept private from family — which means when they end, you are also grieving in secret. LeanOn offers completely private peer support where you can talk openly about relationships your family may not know about.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help after a divorce?</div>
            <div className="faq-a">Yes. Divorce involves layers of loss — the relationship, the identity, the shared life, often custody arrangements, and social stigma. LeanOn listeners who have been through divorce understand these specific dimensions and can offer genuine peer support through the process.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is co-parenting stress and how does peer support help?</div>
            <div className="faq-a">Co-parenting stress involves the ongoing challenges of raising children with an ex-partner — communication difficulties, scheduling conflicts, and the emotional weight of seeing your ex regularly. Peer listeners who have navigated co-parenting can offer specific, practical support.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Heartbreak often brings other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/grief" className="related-link">Grief Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/student-stress" className="related-link">Student Stress</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for breakup and heartbreak support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
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
