import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Long-Distance Relationship Loneliness — Talk It Through | LeanOn',
  description: 'Missing your partner across cities or time zones? Talk to a peer listener anonymously. Available 24/7. Empathetic support for LDR loneliness, 24/7.',
  alternates: { canonical: 'https://www.leanon.app/support/long-distance-relationship', languages: { 'en-IN': 'https://www.leanon.app/support/long-distance-relationship' } },
  keywords: 'long distance relationship loneliness India, LDR loneliness, missing partner abroad, long distance relationship stress, talk to someone long distance relationship',
  openGraph: {
    title: 'Long-Distance Relationship Loneliness — Talk It Through | LeanOn',
    description: 'Missing your partner across cities or time zones? Talk to a peer listener anonymously. Available 24/7. Empathetic support for LDR loneliness, 24/7.',
    url: 'https://www.leanon.app/support/long-distance-relationship',
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
      name: 'Why are long-distance relationships so emotionally exhausting even when the relationship itself is fine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Distance adds a layer of emotional labour that co-located couples never have to think about — scheduling calls, translating tone through text, and constantly reassuring each other across silence. Even a genuinely healthy, secure relationship can leave you feeling drained, because the effort of staying connected is happening on top of everything else in your day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes the time-zone gap with a partner abroad so hard emotionally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When your partner is in the US, UK, Canada, the Gulf, or Australia, your good news and their good news rarely land at the same hour. You end up sitting with feelings alone until a call window opens, or cutting a conversation short because one of you needs to sleep or get to work. That specific ache of near-misses, not the distance itself, is often what wears people down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel isolated even while in a committed long-distance relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely. Being in a relationship does not automatically mean you have someone to process daily life with in real time. Many people in strong, committed LDRs still feel a quiet loneliness — missing the ordinary presence of a partner, not the commitment or the love, which are often not in question at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does peer support help when you cannot unload every worry on your partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When contact time is limited and precious, many people hold back a hard day so it does not eat into the little time they get, or because the timing never lines up when it is actually happening. A peer listener gives you somewhere to put that weight down without it costing your partner anything, so what limited time you do get together can stay lighter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with a trial session available for new users. It is significantly more affordable than therapy and available any time — including odd hours when you are waiting on a call from a partner in a different time zone.',
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
    { '@type': 'ListItem', position: 3, name: 'Long-Distance Relationship', item: 'https://www.leanon.app/support/long-distance-relationship' },
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

export default function LongDistanceRelationshipSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Long-Distance Relationship</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Long-Distance Relationships</p>
          <h1>Loving Someone Far Away Can Still Feel <em>Lonely</em></h1>
          <p className="lead">Whether your partner moved abroad for work or you are separated by cities for a job, the ache of a long-distance relationship is real — even when the relationship itself is solid. LeanOn connects you with peer listeners who have lived through their own long-distance stretches and understand this specific kind of loneliness.</p>
        </div>

        {/* Understanding */}
        <div className="section">
          <h2>Understanding Long-Distance Relationship Loneliness</h2>
          <p>Long-distance relationships in India are more common than people realise — migration for work, higher studies abroad, and job postings across cities mean millions of couples are navigating love through screens. This loneliness is often invisible because, on paper, everything looks fine.</p>

          <h3>A Relationship That Exists Mostly Through a Screen</h3>
          <p>When most of your relationship happens through calls, texts, and video chats, you miss the small, wordless parts of being with someone — a hand on your shoulder after a bad day, sitting quietly in the same room. That absence can be quietly exhausting even when the calls themselves go well.</p>

          <h3>When Even a Phone Call Feels Like Scheduling a Meeting</h3>
          <p>Time-zone gaps turn spontaneous connection into logistics. You end up checking clocks in two cities before you can just say hello, and a conversation that should feel natural starts to feel like something you have to plan around work, sleep, and everyone else&apos;s calendar.</p>

          <h3>The Familiar India-Specific Pattern</h3>
          <p>Partner moved abroad for a master&apos;s degree or a job in the US, UK, Canada, the Gulf, or Australia. Or you are both in India but in different cities, chasing careers that will not let you be in the same place yet. Either way, the relationship is real and committed — the distance is just the current chapter.</p>

          <h3>The Guilt of Not Wanting to Worry Them</h3>
          <p>You had a hard day, but your partner is thousands of kilometres away with their own pressures, and your one call a day is precious. So you stay quiet about the stress, the argument with your boss, the low mood — and end up carrying it alone instead of sharing it, because it feels unfair to spend limited time on something heavy.</p>

          <h3>Missing the Ordinary Moments, Not Just the Big Ones</h3>
          <p>It is rarely the anniversaries or the video calls on festivals that hurt the most. It is wanting to tell them about something small right when it happens, or wishing they were there for an ordinary Tuesday evening — the small, unremarkable togetherness that distance quietly takes away.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps</h2>
          <p>LeanOn is not couples counselling and we do not offer relationship advice. We are peer support for how you are feeling — a space that is entirely yours, separate from the relationship itself.</p>

          <h3>Somewhere to Put What You Don&apos;t Want on Their Plate</h3>
          <p>When contact time with your partner is limited, a LeanOn listener gives you somewhere to process the hard parts of your day without it costing your partner anything. That way, the time you do get together can stay about connection, not damage control.</p>

          <h3>Listeners Who Have Lived This Themselves</h3>
          <p>Our listeners have navigated their own long-distance relationships — partners abroad, cities apart, long engagements across time zones. They bring genuine, empathetic understanding of this specific texture of loneliness, not generic relationship talk.</p>

          <h3>Available Regardless of Your Time Zone</h3>
          <p>Whether you are up at odd hours waiting for your partner&apos;s call, or it is a quiet weekday afternoon while they sleep on the other side of the world, LeanOn listeners are available 24/7 — whenever the loneliness actually shows up for you.</p>

          <h3>Anonymous and Separate From Your Shared World</h3>
          <p>A LeanOn conversation is completely separate from your partner&apos;s world and your shared social circle. You can be fully honest about how you feel without it reaching your partner, your families, or anyone you both know.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand Long-Distance Loneliness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '✈️',
              name: 'Sanya',
              tag: 'Partner Working Abroad',
              bio: 'My partner has been in the UK for two years while I am in Mumbai. I know the specific ache of a relationship lived across time zones.'
            },
            {
              emoji: '🏙️',
              name: 'Rohan',
              tag: 'Different Indian Cities',
              bio: 'My partner and I have been apart across cities for a job for over a year. Still together, still figuring out the distance one week at a time.'
            },
            {
              emoji: '💌',
              name: 'Ishita',
              tag: 'Long Engagement, Long Distance',
              bio: 'Engaged for three years with my partner in Canada, waiting for visas to line up. I understand the quiet loneliness that comes with waiting.'
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
          <h2>You Don&apos;t Have to Carry the Distance Alone</h2>
          <p>Talk to a peer listener who has been through their own long-distance relationship and offers empathetic, judgment-free support. Available 24/7, no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=relationships"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why are long-distance relationships so emotionally exhausting even when the relationship itself is fine?</div>
            <div className="faq-a">Distance adds a layer of emotional labour that co-located couples never have to think about — scheduling calls, translating tone through text, and constantly reassuring each other across silence. Even a genuinely healthy, secure relationship can leave you feeling drained, because the effort of staying connected is happening on top of everything else in your day.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What makes the time-zone gap with a partner abroad so hard emotionally?</div>
            <div className="faq-a">When your partner is in the US, UK, Canada, the Gulf, or Australia, your good news and their good news rarely land at the same hour. You end up sitting with feelings alone until a call window opens, or cutting a conversation short because one of you needs to sleep or get to work. That specific ache of near-misses, not the distance itself, is often what wears people down.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it normal to feel isolated even while in a committed long-distance relationship?</div>
            <div className="faq-a">Yes, completely. Being in a relationship does not automatically mean you have someone to process daily life with in real time. Many people in strong, committed LDRs still feel a quiet loneliness — missing the ordinary presence of a partner, not the commitment or the love, which are often not in question at all.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does peer support help when you cannot unload every worry on your partner?</div>
            <div className="faq-a">When contact time is limited and precious, many people hold back a hard day so it does not eat into the little time they get, or because the timing never lines up when it is actually happening. A peer listener gives you somewhere to put that weight down without it costing your partner anything, so what limited time you do get together can stay lighter.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with a trial session available for new users. It is significantly more affordable than therapy and available any time — including odd hours when you are waiting on a call from a partner in a different time zone.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Long-distance loneliness often overlaps with other emotional challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/marriage-loneliness" className="related-link">Marriage Loneliness</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for long-distance relationship support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/women-loneliness-india-peer-support" className="related-link">Women&apos;s loneliness</a>
            <a href="/blog/joint-family-emotional-support" className="related-link">Joint family support</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/hyderabad" className="related-link">Peer support Hyderabad</a>
            <a href="/pune" className="related-link">Peer support Pune</a>
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
