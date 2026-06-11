import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Hyderabad — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Hyderabad, India. Free first session. Talk anonymously on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/hyderabad', languages: { 'en-IN': 'https://www.leanon.app/hyderabad' } },
  keywords: 'peer support Hyderabad, emotional support Hyderabad, loneliness Hyderabad, WFH isolation Hyderabad, career confusion Hyderabad, leanon Hyderabad',
  openGraph: {
    title: 'Emotional Support in Hyderabad — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Hyderabad, India. Free first session. Talk anonymously on LeanOn.',
    url: 'https://www.leanon.app/hyderabad',
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
      name: "Why is Hyderabad's tech boom creating more loneliness, not less?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hyderabad\'s rapid growth has drawn hundreds of thousands of tech workers from across India — people who arrive for the opportunity but leave behind their support networks, familiar culture, and the communities that gave their life texture. HITEC City\'s gleaming campuses are full of people eating alone at their desks, leaving office at 9 PM to go back to an empty flat, and spending weekends in the city trying to build a social life from scratch. Growth creates prosperity, but it does not automatically create connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does WFH isolation affect tech workers in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For tech workers who relocated to Hyderabad specifically to work at a company, the shift to remote and hybrid work removed the main social benefit of being here. They are living in a city they moved to for the office culture — and that culture is now mostly on a laptop screen. Many describe a particular existential loneliness: far from home, without the social scaffolding of office life, in a city where they have not had time to build real friendships.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the relocation experience like for people moving to Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hyderabad attracts people from Andhra Pradesh, Telangana\'s smaller cities, and increasingly from all over India and the world. The first year is often the hardest: navigating a new city, adapting to a different culture and pace, trying to find your people in a place where everyone seems already sorted. Many people move here expecting Hyderabad\'s famous warmth and food culture to ease the transition — and they do, to a point. But genuine belonging takes much longer to build than most people expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is career confusion common among tech workers in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very. Many people come to Hyderabad for a specific job — and then find themselves, one or two years in, questioning whether this is what they actually want. The tech sector here is large enough to create a sense that everyone else knows exactly what they are doing, which amplifies individual career anxiety. Questions like "Am I in the right field?", "Should I stay in tech or pivot?", and "Why do I feel so hollow when I\'m doing well by every external measure?" come up frequently on LeanOn from Hyderabad users.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from other mental health apps available in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most mental health apps are either therapy platforms (high cost, scheduled sessions, clinical focus) or meditation apps (useful but passive). LeanOn is peer support — real humans who have been through what you are going through, trained to listen and support without judgment. Sessions start at ₹160 for 15 minutes, with the first 5 minutes free. It is available 24/7, accessible from anywhere, and requires no prior mental health history or diagnosis. For the everyday emotional weight of life in Hyderabad, it fills a gap that other options do not.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Hyderabad', item: 'https://www.leanon.app/hyderabad' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/hyderabad',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
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

export default function HyderabadPage() {
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
          <span style={{color:'var(--navy)'}}>Hyderabad</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Hyderabad</p>
          <h1>Peer Support in Hyderabad — Because Even <em>HiTech City Has Hard Days</em></h1>
          <p className="lead">Hyderabad has grown faster than almost any other Indian city — and with that growth has come a wave of people navigating relocation loneliness, WFH isolation, career confusion, and the specific exhaustion of building a life in a city that is still figuring out what it wants to be. LeanOn connects you with peer listeners who understand.</p>
        </div>

        {/* Hyderabad's growth and emotional cost */}
        <div className="section">
          <h2>Hyderabad's Growth and Its Emotional Cost</h2>
          <p>Hyderabad's transformation into one of India's premier tech and business cities has been remarkable. HITEC City, Gachibowli, and the Financial District have drawn investment, talent, and ambition from across India and the world. What the city's economic success story does not capture is the human cost of that growth — the people who arrived alone, built careers in isolation, and found that professional success did not automatically translate into emotional wellbeing.</p>

          <h3>The Speed of Change</h3>
          <p>Hyderabad is changing faster than most of its residents can keep up with. Neighbourhoods that were quiet three years ago are now construction zones. Old social rhythms have been disrupted. The city's famously warm culture is being stretched thin by the sheer volume of new arrivals and the pace of development. For many long-time Hyderabadis, the city they grew up in is disappearing around them — which creates its own kind of grief and disorientation.</p>

          <h3>The New Arrivals</h3>
          <p>For the hundreds of thousands who have moved to Hyderabad for work, the emotional experience follows a recognisable arc: excitement in the first weeks, followed by the slow realisation that professional opportunity and personal fulfilment are not the same thing. The colleagues are colleagues, not friends. The flat is comfortable but impersonal. The weekends stretch out with too little to do and too much time to think. The life you imagined when you got the offer letter is not quite the life you are actually living.</p>

          <h3>A City of Contrasts</h3>
          <p>Hyderabad holds old and new in close proximity — the centuries-old architecture of the Old City and the gleaming glass towers of Cyberabad sit within minutes of each other. For many residents, this contrast mirrors an internal one: the values and expectations they were raised with colliding with the life they are building in a modern tech-driven city. That collision creates identity questions that are rarely easy to answer alone.</p>
        </div>

        {/* Tech workers' loneliness */}
        <div className="section">
          <h2>Tech Workers' Loneliness in Hyderabad</h2>
          <p>HITEC City is home to some of the world's largest tech companies — and some of the loneliest employees. The open-plan offices, the free food, the campus amenities — none of it necessarily translates into genuine human connection.</p>

          <h3>The Colleague Trap</h3>
          <p>In Hyderabad's tech sector, most social contact happens through work. Colleagues become de facto social circles — but these relationships have limits. You cannot be fully honest with people who have influence over your career. You cannot fall apart in front of someone you will see in a sprint review tomorrow. The result is a social life that is broad but shallow, full of pleasant interaction and starved of genuine intimacy.</p>

          <h3>WFH and the Disappearance of Casual Contact</h3>
          <p>For tech workers who relocated to Hyderabad specifically for office culture, the shift to remote and hybrid work removed the main social benefit of being here. They are living in a city they moved to for the office — and now the office is mostly a laptop screen in a flat. Many describe a particular kind of loneliness: far from home, without the social scaffolding of daily office life, in a city where they have not yet had time to build real friendships outside of work.</p>

          <h3>High Performer, Low Wellbeing</h3>
          <p>Hyderabad's tech sector attracts high achievers who are very good at appearing to cope. The culture rewards performance and productivity, and many people become skilled at presenting a functioning exterior while quietly struggling internally. The question "Am I okay?" is often answered with "I am performing well at work" — which is not the same thing at all.</p>
        </div>

        {/* The relocation experience */}
        <div className="section">
          <h2>The Relocation Experience in Hyderabad</h2>
          <p>Hyderabad is one of India's most significant internal migration destinations, and the relocation experience is genuinely one of the most emotionally demanding things most people will do as adults — even though it is rarely framed that way.</p>

          <h3>Starting From Zero</h3>
          <p>When you relocate to Hyderabad, you bring your skills, your ambitions, and your suitcases. What you leave behind is your entire social infrastructure: the friendships built over years, the family dinners, the people who know your history and love you for it. Building that from scratch as an adult — when everyone else already has their circles — is a slow and often painful process. Many people underestimate how long it takes and how lonely the interim period can be.</p>

          <h3>The First Six Months</h3>
          <p>The first six months in Hyderabad are often the hardest. The novelty of a new city wears off quickly. The work is demanding and leaves little energy for socialising. The social opportunities that exist — industry events, weekend activities — feel performative and transactional rather than genuinely connecting. Many people in this phase describe a deep ambivalence: grateful for the opportunity, but quietly wondering whether they made the right choice.</p>

          <h3>Cultural Navigation</h3>
          <p>Hyderabad has a distinctive culture — Hyderabadi warmth, the food, the Deccani sensibility, the particular mix of tradition and modernity. For people arriving from very different cultural contexts — North India, South India, other countries — learning to navigate that culture while also doing a demanding job and trying to build a life takes time and energy. LeanOn listeners who have been through this transition can make the process feel less isolating.</p>

          <h3>When the Excitement Fades</h3>
          <p>Most people come to Hyderabad with a story about why this move is good — the opportunity, the growth, the adventure. That story is useful in the early days. But when the excitement fades and the reality of daily life sets in, there is often a reckoning: is this actually what I want? That question deserves a proper conversation with someone who has been through it and come out the other side.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Know Hyderabad</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🏙️',
              name: 'Siddharth',
              tag: 'Relocation Loneliness',
              bio: 'Moved to Hyderabad from Pune for a tech role. Spent my first year more lonely than I had ever been. Found my footing eventually — and I can help you find yours.'
            },
            {
              emoji: '💻',
              name: 'Kavitha',
              tag: 'WFH Isolation',
              bio: 'Senior engineer, fully remote, living alone in Gachibowli. Navigated the specific loneliness of WFH in a new city and learned what actually helps.'
            },
            {
              emoji: '🔍',
              name: 'Aryan',
              tag: 'Career Confusion',
              bio: 'Five years in Hyderabad\'s tech sector and three career pivots later — I know what career confusion looks like from the inside, and how to find clarity.'
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
          <h2>Ready to Talk to Someone Who Gets Hyderabad?</h2>
          <p>Browse peer listeners who understand relocation loneliness, WFH isolation, career confusion, and the specific emotional landscape of life in HiTech City. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?city=hyderabad"><button className="btn-primary">Browse Hyderabad Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why is Hyderabad's tech boom creating more loneliness, not less?</div>
            <div className="faq-a">Hyderabad's rapid growth has drawn hundreds of thousands of tech workers from across India — people who arrive for the opportunity but leave behind their support networks and communities. HITEC City's campuses are full of people eating alone at their desks, leaving late to go back to empty flats, spending weekends trying to build a social life from scratch. Growth creates prosperity, but it does not automatically create connection.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does WFH isolation affect tech workers in Hyderabad?</div>
            <div className="faq-a">For tech workers who relocated to Hyderabad specifically to work at a company, the shift to remote and hybrid work removed the main social benefit of being here. They are living in a city they moved to for the office culture — and that culture is now mostly on a laptop screen. Many describe a particular existential loneliness: far from home, without the social scaffolding of office life, in a city where they have not had time to build real friendships.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What is the relocation experience like for people moving to Hyderabad?</div>
            <div className="faq-a">Hyderabad attracts people from across India and the world. The first year is often the hardest: navigating a new city, adapting to a different culture, trying to find your people in a place where everyone seems already sorted. Many people move here expecting Hyderabad's famous warmth and food culture to ease the transition — and they do, to a point. But genuine belonging takes much longer to build than most people expect.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is career confusion common among tech workers in Hyderabad?</div>
            <div className="faq-a">Very. Many people come to Hyderabad for a specific job — and then find themselves, one or two years in, questioning whether this is what they actually want. Questions like "Am I in the right field?" and "Why do I feel so hollow when I'm doing well by every external measure?" come up frequently on LeanOn from Hyderabad users.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is LeanOn different from other mental health apps available in Hyderabad?</div>
            <div className="faq-a">Most mental health apps are either therapy platforms (high cost, scheduled sessions) or meditation apps (passive). LeanOn is peer support — real humans who have been through what you are going through, trained to listen without judgment. Sessions start at ₹160 for 15 minutes, with the first 5 minutes free. Available 24/7, no prior mental health history needed. For the everyday emotional weight of life in Hyderabad, it fills a gap that other options do not.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
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
