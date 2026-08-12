import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Sunday Night Loneliness — You're Not the Only One Feeling It | LeanOn",
  description: 'Sunday scaries hitting hard? Talk to a peer listener anonymously before the week starts. Free first session, available every Sunday night.',
  alternates: { canonical: 'https://www.leanon.app/support/sunday-night-loneliness', languages: { 'en-IN': 'https://www.leanon.app/support/sunday-night-loneliness' } },
  keywords: 'sunday scaries India, sunday night loneliness, sunday evening sadness, why do I feel lonely on sundays, someone to talk to sunday night',
  openGraph: {
    title: "Sunday Night Loneliness — You're Not the Only One Feeling It | LeanOn",
    description: 'Sunday scaries hitting hard? Talk to a peer listener anonymously before the week starts. Free first session, available every Sunday night.',
    url: 'https://www.leanon.app/support/sunday-night-loneliness',
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
      name: 'Why do Sunday evenings feel heavier than other nights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sunday evening sits at the exact junction where rest ends and obligation begins. The freedom of the weekend is running out, the week ahead is still unknown, and there is nothing left to distract you from whatever you have been avoiding. That specific combination — winding down plus looming pressure — is what makes Sunday night feel so much heavier than a random weekday evening.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is "Sunday scaries" a real, common thing or just me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is real and it is widely recognised — "Sunday scaries" is a well-known term for exactly this feeling of dread, anxiety, or low mood that creeps in on Sunday evenings. If you feel it, you are far from the only one. It is not a personal failing or a sign that something is uniquely wrong with you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Sunday night loneliness different from general loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General loneliness can hit at any unpredictable moment. Sunday night loneliness is recurring and predictable — it shows up on a weekly schedule, tied to the rhythm of the workweek ending and beginning again. Because it is so regular, it can build a quiet dread that starts creeping in by Sunday afternoon, even before evening arrives.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does peer support help on a Sunday night specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Talking it through with an empathetic listener before Monday arrives helps you release the dread instead of carrying it into the week in silence. LeanOn listeners are available specifically during Sunday evening and night hours, and many of them have their own experience with this exact weekly pattern — so you are talking to someone who genuinely gets it, not just anyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost on a Sunday night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is available every Sunday evening and night, exactly when the scaries tend to peak.',
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
    { '@type': 'ListItem', position: 3, name: 'Sunday Night Loneliness', item: 'https://www.leanon.app/support/sunday-night-loneliness' },
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

export default function SundayNightLonelinessPage() {
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
          <span style={{color:'var(--navy)'}}>Sunday Night Loneliness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Sunday Scaries</p>
          <h1>Sunday Nights Don&apos;t Have to Feel This <em>Heavy</em></h1>
          <p className="lead">That specific dread that creeps in as the weekend winds down — the quiet, the looming week, the feeling that no one else is awake to talk to. LeanOn connects you with empathetic peer listeners who understand exactly what a Sunday night can feel like, right when it hits.</p>
        </div>

        {/* Understanding Sunday Night Loneliness */}
        <div className="section">
          <h2>Understanding Sunday Night Loneliness</h2>
          <p>Sunday scaries are one of the most widely recognised feelings out there — that mix of dread, anxiety, and low mood that shows up as the weekend ends. It is real, it is common, and it deserves to be talked about with the same empathy as any other kind of loneliness.</p>

          <h3>The Week Ahead Looms Before It Even Starts</h3>
          <p>Sunday evening is when Monday stops being an abstract idea and starts feeling like something you can already sense bearing down on you. Meetings, deadlines, and obligations you have not even thought about all week suddenly crowd in, and the dread of what is coming can feel heavier than anything that actually happens once the week begins.</p>

          <h3>From a Full Weekend to a Sudden Quiet</h3>
          <p>Whether your weekend was packed with people or spent mostly alone, Sunday night has a way of going quiet all at once. Friends log off to prepare for their own week, plans wind down, and the contrast between whatever noise the weekend had and the stillness of Sunday night can leave you feeling unexpectedly empty.</p>

          <h3>Living Alone or Far From Family Makes It Sharper</h3>
          <p>If you live by yourself or far from the people who know you best, Sunday night can hit especially hard. There is no one across the room to sit with you in the quiet, and the empty hours before Monday can stretch out in a way that makes the loneliness feel very present and very personal.</p>

          <h3>A New Week Amplifies What Is Already Unresolved</h3>
          <p>Sunday night has a way of surfacing everything you have been putting off — the conversation you have been avoiding, the goal you have not made progress on, the feeling you have been too busy to sit with all week. The idea of a "fresh start" on Monday can amplify whatever is already unresolved instead of easing it.</p>

          <h3>Recurring, Predictable, and Easy to Dismiss</h3>
          <p>Unlike loneliness that strikes unpredictably, Sunday night loneliness follows you on a weekly schedule. That regularity can make it easy to dismiss — "it's just Sundays" — but a feeling that returns every single week and quietly drains your evening is worth taking seriously, not shrugging off.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps on a Sunday Night</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans talking to real humans, exactly when the Sunday scaries hit. Here is how we help:</p>

          <h3>Listeners Available During the Exact Hours It Hits</h3>
          <p>LeanOn listeners are available specifically during Sunday evening and night hours, right when the dread tends to be at its worst. You do not have to wait until Monday morning to talk to someone — help is there while you are actually feeling it.</p>

          <h3>Talk It Through Before the Week Starts</h3>
          <p>Carrying Sunday night dread into your week in silence tends to make it heavier by Monday morning. Talking it through with an empathetic listener before you go to bed can help you release some of that weight, so you start the week a little lighter instead of already behind.</p>

          <h3>Listeners Who Know This Exact Weekly Pattern</h3>
          <p>Many LeanOn listeners have their own experience with Sunday scaries — the same weekly dread, the same quiet evenings, the same pre-Monday anxiety. Talking to someone who genuinely recognises the pattern, not just loneliness in general, makes a real difference.</p>

          <h3>A Low-Pressure Way to End the Weekend</h3>
          <p>There is no appointment to book and no waitlist. You can open the app on a Sunday night, talk for a few minutes with someone who gets it, and end your weekend feeling a little less alone — even if nothing about Monday has changed.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand the Sunday Scaries</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌆',
              name: 'Rohan',
              tag: 'Sunday Scaries, Every Week',
              bio: 'I get the Sunday-evening dread like clockwork, every single week. Talking it out before Monday helps more than I expected — happy to be that person for you too.'
            },
            {
              emoji: '📋',
              name: 'Ishita',
              tag: 'Pre-Monday Anxiety',
              bio: 'The looming to-do list used to ruin my whole Sunday night. Learned to talk it through instead of spiralling alone — that shift changed everything for me.'
            },
            {
              emoji: '🏙️',
              name: 'Kabir',
              tag: 'Living Alone, Far From Home',
              bio: 'Moved cities for work and Sunday nights alone used to feel endless. I know how much a simple conversation can lighten that particular quiet.'
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
          <h2>Don&apos;t Face Monday Alone Tonight</h2>
          <p>Talk to a peer listener who understands the Sunday scaries. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=sunday-night"><button className="btn-primary">Browse Sunday Night Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why do Sunday evenings feel heavier than other nights?</div>
            <div className="faq-a">Sunday evening sits at the exact junction where rest ends and obligation begins. The freedom of the weekend is running out, the week ahead is still unknown, and there is nothing left to distract you from whatever you have been avoiding. That specific combination — winding down plus looming pressure — is what makes Sunday night feel so much heavier than a random weekday evening.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is "Sunday scaries" a real, common thing or just me?</div>
            <div className="faq-a">It is real and it is widely recognised — "Sunday scaries" is a well-known term for exactly this feeling of dread, anxiety, or low mood that creeps in on Sunday evenings. If you feel it, you are far from the only one. It is not a personal failing or a sign that something is uniquely wrong with you.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is Sunday night loneliness different from general loneliness?</div>
            <div className="faq-a">General loneliness can hit at any unpredictable moment. Sunday night loneliness is recurring and predictable — it shows up on a weekly schedule, tied to the rhythm of the workweek ending and beginning again. Because it is so regular, it can build a quiet dread that starts creeping in by Sunday afternoon, even before evening arrives.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does peer support help on a Sunday night specifically?</div>
            <div className="faq-a">Talking it through with an empathetic listener before Monday arrives helps you release the dread instead of carrying it into the week in silence. LeanOn listeners are available specifically during Sunday evening and night hours, and many of them have their own experience with this exact weekly pattern — so you are talking to someone who genuinely gets it, not just anyone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn cost on a Sunday night?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is available every Sunday evening and night, exactly when the scaries tend to peak.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Sunday night loneliness often overlaps with other feelings. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
            <a href="/support/anxiety" className="related-link">Anxiety Support</a>
            <a href="/support/work-from-home-loneliness" className="related-link">WFH Loneliness</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for Sunday night support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/why-people-call-astrologers-to-talk" className="related-link">Why people call astrologers to talk</a>
            <a href="/blog/no-one-to-talk-to" className="related-link">No one to talk to</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/mumbai" className="related-link">Peer support Mumbai</a>
            <a href="/delhi" className="related-link">Peer support Delhi</a>
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
