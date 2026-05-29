import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Grief & Loss Peer Support India | LeanOn',
  description: 'Navigate grief and loss with compassionate peer support. Talk anonymously to a trained listener. Free first session on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/support/grief', languages: { 'en-IN': 'https://www.leanon.app/support/grief' } },
  openGraph: {
    title: 'Grief & Loss Peer Support India | LeanOn',
    description: 'Navigate grief and loss with compassionate peer support. Talk anonymously to a trained listener. Free first session on LeanOn.',
    url: 'https://www.leanon.app/support/grief',
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
      name: 'What is the difference between normal grief and complicated grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normal grief, while painful, gradually becomes more manageable over time as you integrate the loss into your life. Complicated grief (also called prolonged grief disorder) is characterized by intense grief that does not diminish significantly over time, often involving difficulty accepting the loss, bitterness, inability to engage with life, and feeling that life is meaningless without the person. If grief is significantly impairing your functioning after many months, speaking with a mental health professional is advisable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is grieving a pet loss valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Pet loss is a real and often underestimated grief experience. Pets are often central members of our emotional lives and daily routines. Grieving a pet is completely valid and can be as intense as grieving a person. The dismissiveness that pet loss grief often receives ("it was just an animal") makes it even more painful and isolating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ambiguous grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambiguous grief refers to losses that are not clearly defined or socially recognised — such as grieving a person who is still alive but changed (through dementia, addiction, or estrangement), grieving a miscarriage or infertility, or grieving a relationship or identity that has ended. These losses are particularly hard because they lack the social rituals and acknowledgment that typically support grief processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does grief manifest differently in Indian families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indian families and cultural contexts can shape grief in specific ways: expectations to "stay strong" especially for men; grief being expressed collectively rather than individually; religious frameworks that can help or sometimes feel pressuring; the practical demands of managing rituals and family logistics; and the specific pain of losing a parent or grandparent who was central to the family structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking to a peer listener help with grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Research shows that social support is one of the most important factors in healthy grief processing. Peer listeners who have experienced loss themselves offer a unique kind of support — not clinical, not family, but the presence of someone who genuinely knows from experience what loss feels like. This can be enormously comforting when professional therapy is not accessible or when you need someone at 3 AM.',
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
    { '@type': 'ListItem', position: 3, name: 'Grief', item: 'https://www.leanon.app/support/grief' },
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
  .quote{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:16px 20px;margin:20px 0;font-size:16px;color:var(--navy);font-weight:700;font-style:italic;line-height:1.6;}
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

export default function GriefSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Grief</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        <div className="hero">
          <p className="tag">Peer Support · Grief & Loss</p>
          <h1>Grief Is Not a Problem to Solve. <em>It Is Love With Nowhere to Go.</em></h1>
          <p className="lead">Losing someone — or something — you loved deeply is one of the most painful human experiences. LeanOn connects you with peer listeners who have been through loss themselves and understand what it means to carry grief while continuing to live.</p>
        </div>

        <div className="section">
          <h2>Understanding Grief</h2>
          <p>Grief is the natural response to loss. It is not a disorder, not a weakness, and not something to be gotten over quickly. It is the price of loving — and in a world that rarely makes space for it, carrying grief alone can be unbearable.</p>

          <div className="quote">&quot;Grief is just love with no place to go.&quot; — Jamie Anderson</div>

          <h3>Loss of a Loved One</h3>
          <p>The death of a parent, partner, sibling, friend, or child is a loss that reshapes everything. The world after looks fundamentally different. Grief after the death of someone central to your life is not something to be rushed or fixed — it is something to be accompanied through.</p>

          <h3>Pet Loss</h3>
          <p>Pet loss is often disenfranchised grief — mourning that society does not fully recognise or validate. But for millions of people, their pet was their most consistent source of daily comfort, companionship, and unconditional love. The pain of losing a pet is real and deserves to be treated as such.</p>

          <h3>Pregnancy Loss and Miscarriage</h3>
          <p>Miscarriage, stillbirth, and infertility-related grief are among the most isolating experiences a person can face. These losses are often invisible — no social rituals, minimal acknowledgment, and frequently minimised by well-meaning people. The grief is profound, the isolation is compounded, and the pressure to &quot;try again&quot; can feel suffocating.</p>

          <h3>Ambiguous Grief</h3>
          <p>Ambiguous grief refers to losses that are not clear-cut — grieving a parent with dementia who is still alive but no longer the person you knew; grieving an estranged family member; grieving a relationship that ended without closure; grieving a previous version of yourself after illness or a major life change. These losses lack social scripts, which makes them particularly hard to process.</p>

          <h3>Complicated Grief</h3>
          <p>For some people, grief does not follow the path toward gradual integration. It intensifies, persists, and prevents engagement with life in ways that go beyond normal mourning. If grief feels overwhelming many months after a loss, if you cannot imagine life ever feeling meaningful again, speaking with a mental health professional alongside peer support is important.</p>
        </div>

        <div className="section">
          <h2>How LeanOn Supports Grief</h2>

          <h3>Listeners Who Know Loss From the Inside</h3>
          <p>Every LeanOn listener who supports people through grief has personally experienced significant loss. They know what it is like to wake up and for one moment forget — and then remember. They know the ambush of grief in the middle of a normal day. They know this because they have lived it.</p>

          <h3>No Pressure to Feel Better</h3>
          <p>One of the most painful things about grief is the social pressure to recover on someone else&apos;s timeline. Family members become impatient. Friends want the &quot;old you&quot; back. LeanOn listeners understand that grief has its own timeline and will never rush you or minimise what you are carrying.</p>

          <h3>Available at Night and on Hard Days</h3>
          <p>Grief tends to be hardest at anniversaries, on holidays, on days that would have been significant, and at night. LeanOn is available 24/7, so when the grief wave hits at 2 AM or on what would have been their birthday, you have somewhere to go.</p>

          <h3>Private Space to Grieve Openly</h3>
          <p>Indian cultural contexts can make open grief complex — expectations to be strong, religious frameworks that prescribe certain expressions of mourning, family dynamics where you feel you must hold others together. LeanOn gives you a completely private space to grieve without any of those pressures.</p>
        </div>

        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Grief</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🕯️',
              name: 'Geeta',
              tag: 'Loss of a Parent',
              bio: 'Lost both parents within two years. Understands the specific weight of parental grief and the reorganisation of family identity it brings.'
            },
            {
              emoji: '🐾',
              name: 'Sameer',
              tag: 'Pet Loss',
              bio: 'Knows the disenfranchised grief of losing a beloved pet and how to hold space for it without minimising or rushing.'
            },
            {
              emoji: '🌸',
              name: 'Lakshmi',
              tag: 'Pregnancy Loss',
              bio: 'Navigated miscarriage and its invisible, isolating grief. Offers deep compassion and understanding for all forms of pregnancy loss.'
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
          <h2>Your Grief Deserves to Be Witnessed</h2>
          <p>Talk to someone who knows loss from the inside. No pressure, no timeline, no judgment. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=grief"><button className="btn-primary">Find a Grief Listener</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What is the difference between normal grief and complicated grief?</div>
            <div className="faq-a">Normal grief gradually becomes more manageable over time as you integrate the loss into your life. Complicated grief is characterized by intense grief that does not diminish significantly, often involving difficulty accepting the loss, bitterness, inability to engage with life, and feeling that life is meaningless without the person. If grief is significantly impairing your functioning after many months, speaking with a mental health professional is advisable.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is grieving a pet loss valid?</div>
            <div className="faq-a">Absolutely. Pet loss is a real and often underestimated grief experience. Grieving a pet is completely valid and can be as intense as grieving a person. The dismissiveness that pet loss grief receives — &quot;it was just an animal&quot; — makes it even more painful and isolating.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is ambiguous grief?</div>
            <div className="faq-a">Ambiguous grief refers to losses that are not clearly defined or socially recognised — such as grieving a person who is still alive but changed (through dementia or estrangement), grieving a miscarriage or infertility, or grieving a relationship or identity that has ended. These losses lack the social rituals that typically support grief processing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does grief manifest differently in Indian families?</div>
            <div className="faq-a">Indian cultural contexts can shape grief in specific ways: expectations to &quot;stay strong&quot; especially for men; grief being expressed collectively rather than individually; religious frameworks that can help or sometimes feel pressuring; and the specific pain of losing a parent who was central to the family structure.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can talking to a peer listener help with grief?</div>
            <div className="faq-a">Yes. Research shows that social support is one of the most important factors in healthy grief processing. Peer listeners who have experienced loss themselves offer a unique kind of support — the presence of someone who genuinely knows from experience what loss feels like. This can be enormously comforting when professional support is not accessible or when you need someone at 3 AM.</div>
          </div>
        </div>

        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Grief often brings other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/breakup" className="related-link">Breakup Support</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/emotional-support" className="related-link">Emotional Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for grief and loss support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/what-does-lean-on-mean" className="related-link">What does &quot;lean on&quot; mean?</a>
            <a href="/blog/peer-support-vs-therapy-india" className="related-link">Peer support vs therapy</a>
            <a href="/blog/how-peer-support-works" className="related-link">How peer support works</a>
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/anonymous-emotional-support-india" className="related-link">Anonymous support</a>
            <a href="/blog/affordable-alternatives-to-therapy-in-india" className="related-link">Affordable alternatives to therapy</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{textAlign:'center',fontSize:'13px',color:'var(--gray)',fontWeight:600,marginBottom:'40px'}}>
          Available across India: <a href="/bengaluru" style={{color:'var(--teal)'}}>Bengaluru</a> · <a href="/mumbai" style={{color:'var(--teal)'}}>Mumbai</a> · <a href="/delhi" style={{color:'var(--teal)'}}>Delhi</a> · Chennai · <a href="/hyderabad" style={{color:'var(--teal)'}}>Hyderabad</a> · Pune · Kolkata
        </p>
      </div>
    </>
  )
}
