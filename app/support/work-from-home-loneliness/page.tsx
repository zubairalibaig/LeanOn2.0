import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support for Work-From-Home Loneliness in India | LeanOn',
  description: 'Feeling isolated working from home? Talk to a peer listener who understands WFH loneliness. Free first session, empathetic support, 24/7 in India.',
  alternates: { canonical: 'https://www.leanon.app/support/work-from-home-loneliness', languages: { 'en-IN': 'https://www.leanon.app/support/work-from-home-loneliness' } },
  openGraph: {
    title: 'Peer Support for Work-From-Home Loneliness in India | LeanOn',
    description: 'Feeling isolated working from home? Talk to a peer listener who understands WFH loneliness. Free first session, empathetic support, 24/7 in India.',
    url: 'https://www.leanon.app/support/work-from-home-loneliness',
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
      name: 'Why does working from home cause loneliness in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remote work strips away the incidental social contact that offices provide — the shared commute, tea breaks, hallway chats, and lunch conversations. In India, this is compounded by many remote workers having relocated to a city specifically for a job, so there is no family or old friend circle nearby to fall back on once the laptop closes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is WFH loneliness different from general loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General loneliness can arise from any part of life. WFH loneliness is specifically tied to the erosion of workplace social contact — muted mics, cameras-off meetings, and blurred work-home boundaries. It often hits hardest when someone realises they have gone through an entire day of video calls without a single real conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can work-from-home loneliness affect mental health and productivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Chronic WFH isolation is linked to increased anxiety, low mood, disrupted sleep, and burnout. It also affects productivity — feeling disconnected from colleagues can reduce motivation and make even simple tasks feel heavier. Addressing the loneliness itself often improves both wellbeing and work output.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does empathetic peer support help remote workers feel less alone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn peer listeners offer empathetic, judgment-free conversation that does not require you to perform the way work meetings do. Many listeners have lived through remote-work isolation themselves, so they understand what it feels like to go silent for hours and then crave real human connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn peer support cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free so you can find the right listener before committing. It is significantly more affordable than therapy and available any time — including right after a long, silent day of back-to-back video calls.',
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
    { '@type': 'ListItem', position: 3, name: 'Work From Home Loneliness', item: 'https://www.leanon.app/support/work-from-home-loneliness' },
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

export default function WorkFromHomeLonelinessSupportPage() {
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
          <span style={{color:'var(--navy)'}}>Work From Home Loneliness</span>
        </nav>

        <div style={{background:'#EBF5FB',borderLeft:'4px solid #1A8FA0',borderRadius:'0 12px 12px 0',padding:'14px 18px',marginBottom:28,fontSize:14,color:'#0F4867',fontWeight:600,lineHeight:1.65}}>
          🆘 In crisis? Call <a href="tel:08046110007" style={{color:'#1A8FA0',fontWeight:800}}>NIMHANS 080-46110007</a> or <a href="tel:14416" style={{color:'#1A8FA0',fontWeight:800}}>Tele-MANAS 14416</a> (free · 24/7 · Govt of India)
        </div>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Work-From-Home Loneliness</p>
          <h1>Working From Home Shouldn&apos;t Mean Feeling <em>Invisible</em></h1>
          <p className="lead">Millions of Indians now work from bedrooms, PGs, and one-BHKs across the country — productive, professional, and profoundly alone. LeanOn connects you with peer listeners who understand what it&apos;s like to go an entire day without a real conversation, and who offer empathetic, judgment-free support whenever the silence gets too loud.</p>
        </div>

        {/* Understanding WFH loneliness */}
        <div className="section">
          <h2>Understanding Work-From-Home Loneliness in India</h2>
          <p>Remote and hybrid work gave many Indians flexibility, shorter commutes, and the freedom to live wherever they wanted. It also quietly removed the everyday human contact that used to hold their social life together. WFH loneliness is real, common, and rarely talked about openly.</p>

          <h3>The Invisible Social Scaffolding You Lost</h3>
          <p>Office life came with a kind of social scaffolding nobody noticed until it was gone — the coffee-machine small talk, the shared cab or metro commute, the lunch table conversations that had nothing to do with work. None of it felt important at the time. Working from home strips all of it away, leaving only the meetings, and meetings are not the same as connection.</p>

          <h3>Alone in a Metro City, Far From Family</h3>
          <p>A large number of remote workers moved to Bengaluru, Pune, Hyderabad, or Gurgaon specifically for a job — and now do that entire job from a rented room, without the office that would have introduced them to people. Living alone in a metro city, far from family, with a job that never requires you to leave the house, can be one of the most isolating experiences in modern Indian life.</p>

          <h3>Muted Mics, Cameras Off, Meetings That Don&apos;t Feel Human</h3>
          <p>A day full of back-to-back calls can feel like a day full of people, but muted mics and cameras-off meeting culture quietly erodes real human connection. You can attend eight meetings and still not have had a single moment where someone asked how you actually are.</p>

          <h3>Work and Home, Blurred Into One</h3>
          <p>When your bedroom is also your office, the boundaries blur in both directions — it becomes hard to switch off from work, and just as hard to feel truly off duty and social once the laptop closes. This blur hits hardest for people who relocated to a city specifically for a job they now do entirely alone at home, with no office, no friend circle, and no clear line between working and living.</p>
        </div>

        {/* How LeanOn helps */}
        <div className="section">
          <h2>How LeanOn Helps With WFH Loneliness</h2>
          <p>LeanOn is not therapy, and we are honest about that. We are peer support — real humans talking to real humans, with empathy for exactly what remote work isolation feels like. Here is how we help:</p>

          <h3>Listeners Who&apos;ve Lived Remote-Work Isolation</h3>
          <p>Our listeners include people who have personally gone through WFH isolation — freelancers who went months without a real conversation, and employees who relocated for a fully-remote role and knew nobody in the city. They bring genuine empathy, not a script.</p>

          <h3>Available During Your Work-Day Breaks</h3>
          <p>You don&apos;t have to wait until the weekend. LeanOn listeners are available during a quick break between calls, or in the evening after a silent day of video calls when the quiet finally catches up with you.</p>

          <h3>Empathetic Conversation, No Performance Required</h3>
          <p>Work meetings ask you to be &quot;on&quot; — camera ready, articulate, upbeat. A conversation with a LeanOn listener asks nothing of the sort. It is empathetic, unhurried, and judgment-free, with no need to perform the way you do for a manager or a client.</p>

          <h3>A Human Connection That Isn&apos;t Another Screen Obligation</h3>
          <p>We know the last thing a burnt-out remote worker wants is one more screen-based obligation. LeanOn is designed to feel like the opposite of that — a genuine human connection point, not another item on your video-call calendar.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Listeners Who Understand WFH Loneliness</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🎧',
              name: 'Rohan',
              tag: 'Freelancer, Remote for 4 Years',
              bio: 'Went months without a real conversation while freelancing solo from a rented flat in Pune. I know what silent screens feel like.'
            },
            {
              emoji: '🏙️',
              name: 'Ananya',
              tag: 'Relocated for a Remote Job',
              bio: 'Moved to Bengaluru for a fully-remote role and knew nobody in the city. Learned the hard way that a job does not come with a social life.'
            },
            {
              emoji: '🌤️',
              name: 'Kabir',
              tag: 'Found My Way Through WFH Loneliness',
              bio: 'Three years into remote work, I built small rituals and real conversations that pulled me out of the silence. Happy to share what worked.'
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
          <h2>Ready to Feel Connected Again?</h2>
          <p>Talk to a peer listener who truly understands work-from-home isolation. First 5 minutes free — no appointments, no waitlists.</p>
          <div className="cta-btns">
            <a href="/browse?topic=work-from-home-loneliness"><button className="btn-primary">Browse WFH Loneliness Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why does working from home cause loneliness in India?</div>
            <div className="faq-a">Remote work strips away the incidental social contact that offices provide — the shared commute, tea breaks, hallway chats, and lunch conversations. In India, this is compounded by many remote workers having relocated to a city specifically for a job, so there is no family or old friend circle nearby to fall back on.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is WFH loneliness different from general loneliness?</div>
            <div className="faq-a">General loneliness can arise from any part of life. WFH loneliness is specifically tied to the erosion of workplace social contact — muted mics, cameras-off meetings, and blurred work-home boundaries. It often hits hardest after an entire day of video calls without a single real conversation.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can work-from-home loneliness affect mental health and productivity?</div>
            <div className="faq-a">Yes. Chronic WFH isolation is linked to increased anxiety, low mood, disrupted sleep, and burnout, and it can reduce motivation at work. Addressing the loneliness itself often improves both wellbeing and productivity.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does empathetic peer support help remote workers feel less alone?</div>
            <div className="faq-a">LeanOn peer listeners offer empathetic, judgment-free conversation that doesn&apos;t require you to perform the way work meetings do. Many listeners have lived through remote-work isolation themselves and understand exactly what it feels like.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does LeanOn peer support cost?</div>
            <div className="faq-a">LeanOn starts at ₹160 for a 15-minute session, with the first 5 minutes free. It is significantly more affordable than therapy and available any time — including right after a long, silent day of back-to-back video calls.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>WFH loneliness often overlaps with other challenges. Explore more peer support on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/social-anxiety" className="related-link">Social Anxiety</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="section">
          <h2>People Also Search For</h2>
          <p>If you&apos;re looking for work-from-home loneliness support, these pages may also help:</p>
          <div className="related">
            <a href="/blog/loneliness-at-night" className="related-link">Loneliness at night</a>
            <a href="/blog/empathy-in-peer-support" className="related-link">Empathy in peer support</a>
            <a href="/blog/online-emotional-support-india-guide" className="related-link">Online emotional support guide</a>
            <a href="/bengaluru" className="related-link">Peer support Bengaluru</a>
            <a href="/pune" className="related-link">Peer support Pune</a>
            <a href="/hyderabad" className="related-link">Peer support Hyderabad</a>
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
