import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Bengaluru — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Bengaluru, India. Free first session. Talk anonymously on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/bengaluru', languages: { 'en-IN': 'https://www.leanon.app/bengaluru' } },
  keywords: 'peer support Bengaluru, emotional support Bangalore, loneliness Bangalore, startup burnout Bengaluru, talk to someone Bangalore, leanon Bengaluru',
  openGraph: {
    title: 'Emotional Support in Bengaluru — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Bengaluru, India. Free first session. Talk anonymously on LeanOn.',
    url: 'https://www.leanon.app/bengaluru',
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
      name: 'Why do so many people in Bengaluru feel lonely despite living in a vibrant city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bengaluru draws millions of people from across India and the world, which means most residents are far from their hometown support networks. Despite working in open-plan offices or coworking spaces, the connections formed tend to be transactional. After work, people return to their PGs or flats and the city can feel deeply isolating — especially after the initial excitement of "the Bangalore dream" fades.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is startup burnout a mental health issue in Bengaluru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is underreported. Bengaluru\'s startup culture glorifies the grind — long hours, high stakes, constant pivots, and the social pressure to look like you love every second of it. Many founders and early employees quietly experience anxiety, exhaustion, and a loss of identity when things do not go to plan. Peer support from someone who has navigated startup burnout firsthand can make a real difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is relocating to Bengaluru different from other Indian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bengaluru is one of India\'s biggest internal migration destinations. People move here from Tamil Nadu, Andhra Pradesh, Kerala, and all across North India. The cultural mix is unique but can also mean you feel caught between worlds — not fully fitting into the local Kannada culture, yet also no longer part of your hometown community. This in-between feeling is a specific kind of loneliness that LeanOn listeners understand deeply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of issues do Bengalureans talk to LeanOn listeners about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common topics from Bengaluru users include WFH isolation, startup or corporate burnout, career confusion ("Am I in the right field?"), loneliness after a breakup or move, and the anxiety of living a life that looks successful from the outside but feels hollow from the inside. Many people also talk about the flatmate culture — living with strangers and still feeling profoundly alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn peer support different from therapy or counselling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn is peer support, not therapy. Our listeners are trained peers who have lived through the experiences they support — they are not licensed therapists. This makes it more accessible, more affordable (starting at ₹165 for 15 minutes), and available 24/7. For clinical mental health concerns, we always recommend professional help. For the day-to-day weight of modern Bengaluru life, peer support is often exactly what is needed.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Bengaluru', item: 'https://www.leanon.app/bengaluru' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/bengaluru',
  areaServed: {
    '@type': 'City',
    name: 'Bengaluru',
    addressCountry: 'IN',
  },
  serviceType: 'Peer Emotional Support',
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
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function BengaluruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Bengaluru</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Bengaluru</p>
          <h1>Peer Support in Bengaluru — Someone to Lean On in <em>India's Tech Capital</em></h1>
          <p className="lead">Bengaluru is full of driven, talented people — and quietly, a lot of them are struggling. Whether it is WFH isolation in a one-BHK, the exhaustion of startup culture, or the specific loneliness of building a life far from home, LeanOn connects you with peer listeners who truly get it.</p>
        </div>

        {/* Bengaluru's unique emotional challenges */}
        <div className="section">
          <h2>Bengaluru's Unique Emotional Challenges</h2>
          <p>Bengaluru has always been a city of arrivals — people come chasing opportunities, building companies, or following career paths that simply do not exist back home. What the city does not advertise is how emotionally demanding that journey can be.</p>

          <h3>WFH Isolation in a City of Strangers</h3>
          <p>Pre-pandemic, Bengaluru's office culture was a social lifeline for many — especially those who had relocated from other cities. The shift to remote and hybrid work removed that scaffolding overnight. Now, thousands of people in Koramangala, Indiranagar, HSR Layout, and Whitefield spend their days alone in flats, talking to nobody outside of work calls. The casual friction of office life — the coffee chats, the lunch runs, the post-meeting gossip — is gone, and there is nothing obvious to replace it.</p>

          <h3>Startup Burnout Is Real and Underreported</h3>
          <p>Bengaluru's startup ecosystem is one of the most celebrated in Asia — and one of the most quietly exhausting. The culture rewards hustle and penalises vulnerability. Founders and early employees often carry enormous pressure in silence: the fear of failure, investor expectations, team management stress, and the slow erosion of the original passion that started it all. Many reach out to LeanOn when they feel they cannot admit to anyone in their network how close they are to the edge.</p>

          <h3>The Relocation Experience</h3>
          <p>Bengaluru is one of India's biggest internal migration destinations. People arrive from Tamil Nadu, Andhra Pradesh, Kerala, Karnataka's own smaller cities, and every corner of North India. The early months — navigating a new city, building social circles from scratch, adapting to a different culture and sometimes language — can be profoundly lonely. Even after years, many people describe Bengaluru as a city where you can be very busy but never fully belong.</p>

          <h3>Flat Culture vs Hometown Warmth</h3>
          <p>Back home, loneliness was buffered by family, old friends, and the organic social fabric of a familiar place. In Bengaluru, you might live with flatmates who are strangers, spend weekends running errands, and scroll through Instagram watching everyone else's highlight reel. The contrast between the life you imagined and the life you are actually living can be quietly devastating.</p>

          <h3>Career Pressure and Identity Confusion</h3>
          <p>Bengaluru attracts India's most ambitious young professionals — which means it is also a city where career anxiety runs extremely high. The constant benchmark of what others are achieving, the FOMO of not being at the right company or on the right trajectory, and the deeper question of whether you even want what you have been working so hard for — these are conversations that happen frequently on LeanOn.</p>
        </div>

        {/* How LeanOn Works in Bengaluru */}
        <div className="section">
          <h2>How LeanOn Works in Bengaluru</h2>
          <p>LeanOn is peer support — not therapy. That distinction matters. Our listeners are real people who have navigated the same pressures you are facing, trained to listen without judgment and support without advice-pushing.</p>

          <h3>Browse and Choose Your Listener</h3>
          <p>Start by browsing listener profiles at <a href="/browse?city=bengaluru" style={{color:'var(--teal)',fontWeight:700}}>leanon.app/browse</a>. You can filter by topic — loneliness, startup burnout, career confusion, relationships — and read about each listener's personal background before you begin. No cold starts. No awkward first minutes wondering if this person gets it.</p>

          <h3>First 5 Minutes Free</h3>
          <p>Every session starts with a free five-minute window. Use it to gauge the connection before committing. If it feels right, continue. If not, find another listener. Sessions start at ₹165 for 15 minutes — significantly more accessible than therapy and available any time, including late nights when the weight feels heaviest.</p>

          <h3>Available When You Need It Most</h3>
          <p>Loneliness and burnout do not keep business hours. LeanOn listeners are available around the clock, including midnight on a Tuesday when you are staring at the ceiling in your Koramangala flat wondering if any of this is worth it.</p>

          <h3>Completely Private</h3>
          <p>Nobody in your professional network, flatmate group, or family needs to know. LeanOn is confidential by design. In a city where professional reputation feels precarious and vulnerability can feel career-limiting, that privacy matters.</p>
        </div>

        {/* What Bengalureans Talk About */}
        <div className="section">
          <h2>What Bengalureans Talk About on LeanOn</h2>
          <p>Based on the most common themes from Bengaluru users, here is what people are actually carrying:</p>
          <ul>
            <li><strong>Loneliness after relocating</strong> — "I have been here two years and I still do not have real friends."</li>
            <li><strong>Startup burnout</strong> — "I built this from nothing and now I dread Mondays. Something is very wrong."</li>
            <li><strong>Career confusion</strong> — "Everyone around me seems sure about their path. I have no idea what I actually want."</li>
            <li><strong>WFH isolation</strong> — "I can go three days without speaking to anyone in person. It is starting to affect me."</li>
            <li><strong>Relationship stress</strong> — "Long distance, different values after living in different cities, the pressure of settling down timelines."</li>
            <li><strong>The Sunday dread</strong> — "That specific Sunday evening feeling where everything feels pointless and Monday feels impossible."</li>
          </ul>
          <p>None of these are unusual. None of these are signs of weakness. They are the honest cost of living ambitiously in a demanding city — and they deserve to be spoken out loud to someone who understands.</p>
          <p>Read more: <a href="/blog/startup-founder-burnout-stories-and-recovery" style={{color:'var(--teal)',fontWeight:700}}>Startup founder burnout — stories and recovery</a></p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners from Bengaluru</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🚀',
              name: 'Karthik',
              tag: 'Startup Burnout',
              bio: 'Co-founded a startup in HSR Layout, watched it wind down after 3 years. I know what burnout looks like from the inside — and how to find your way back.'
            },
            {
              emoji: '🌿',
              name: 'Divya',
              tag: 'Relocation Loneliness',
              bio: 'Moved to Bengaluru from Hyderabad at 22. It took three lonely years to feel at home. Happy to walk that road with you.'
            },
            {
              emoji: '💻',
              name: 'Rohan',
              tag: 'WFH Isolation',
              bio: 'Remote engineer, spent years in a Whitefield flat barely speaking to anyone. Found community eventually — and I want to help others get there faster.'
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
          <h2>Ready to Talk to Someone Who Gets Bengaluru?</h2>
          <p>Browse peer listeners who understand the pressures of India's tech capital. First 5 minutes free — no appointments, no waitlists, available right now.</p>
          <div className="cta-btns">
            <a href="/browse?city=bengaluru"><button className="btn-primary">Browse Bengaluru Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why do so many people in Bengaluru feel lonely despite living in a vibrant city?</div>
            <div className="faq-a">Bengaluru draws millions of people from across India, which means most residents are far from their hometown support networks. Despite working in busy offices or coworking spaces, connections tend to be transactional. After work, people return to their flats and the city can feel deeply isolating — especially after the initial excitement fades.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is startup burnout a mental health issue in Bengaluru?</div>
            <div className="faq-a">Yes, and it is underreported. Bengaluru's startup culture glorifies the grind — long hours, high stakes, constant pivots. Many founders and early employees quietly experience anxiety, exhaustion, and a loss of identity when things do not go to plan. Peer support from someone who has navigated this firsthand can make a real difference.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is relocating to Bengaluru different from other Indian cities?</div>
            <div className="faq-a">Bengaluru is one of India's biggest internal migration destinations. The cultural mix is unique but can also mean you feel caught between worlds — not fully fitting into the local Kannada culture, yet also no longer part of your hometown community. This in-between feeling is a specific kind of loneliness that LeanOn listeners understand deeply.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What kind of issues do Bengalureans talk to LeanOn listeners about?</div>
            <div className="faq-a">The most common topics include WFH isolation, startup or corporate burnout, career confusion, loneliness after a breakup or move, and the anxiety of living a life that looks successful from the outside but feels hollow from the inside. Many people also talk about flatmate culture — living with strangers and still feeling profoundly alone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn peer support different from therapy or counselling?</div>
            <div className="faq-a">Yes. LeanOn is peer support, not therapy. Our listeners are trained peers who have lived through the experiences they support — not licensed therapists. This makes it more accessible, more affordable (starting at ₹165 for 15 minutes), and available 24/7. For clinical mental health concerns, we always recommend professional help. For the day-to-day weight of Bengaluru life, peer support is often exactly what is needed.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/mumbai" className="related-link">Peer Support Mumbai</a>
            <a href="/hyderabad" className="related-link">Peer Support Hyderabad</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
