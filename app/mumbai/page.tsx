import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support in Mumbai — LeanOn | Talk to Someone Who Gets It',
  description: 'LeanOn peer support in Mumbai — real peer listeners who understand the grind of Mumbai life: the commutes, relationship stress, financial pressure, and loneliness in India\'s most intense city.',
  alternates: { canonical: 'https://leanon.app/mumbai' },
  keywords: 'peer support Mumbai, emotional support Mumbai, loneliness Mumbai, relationship stress Mumbai, talk to someone Mumbai, leanon Mumbai',
  openGraph: {
    title: 'Peer Support in Mumbai — LeanOn',
    description: 'Real peer listeners who understand the grind of Mumbai life: commutes, relationship stress, financial pressure, and loneliness in India\'s most intense city.',
    url: 'https://leanon.app/mumbai',
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
      name: 'Why is loneliness so common in Mumbai despite it being the most populous city in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mumbai is famously crowded, yet deeply impersonal. The city\'s pace — the commutes, the grind, the constant hustle — leaves little room for genuine human connection. People are physically surrounded by millions but emotionally isolated. Relationships are squeezed by exhaustion, and building new friendships as an adult in Mumbai is genuinely hard. The city rewards productivity and punishes slowness, which means emotional needs often go unaddressed for years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Mumbai\'s commute culture affect mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mumbai\'s local train and road commutes rank among the most stressful in the world. Many Mumbaikars spend 3 to 5 hours a day in transit. This relentless time drain does not just cause fatigue — it eats into the hours that could go towards relationships, hobbies, rest, and the social activities that buffer against loneliness and burnout. The cumulative effect over years is significant and rarely acknowledged.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does financial pressure in Mumbai cause emotional problems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Mumbai has one of the highest costs of living in India, and the gap between what people earn and what comfortable living requires creates chronic financial anxiety. Many young professionals feel trapped — working hard but unable to build savings, afford decent housing, or feel secure. This financial pressure bleeds into relationships, self-esteem, and mental health in ways that are rarely talked about openly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can peer support help with relationship stress caused by Mumbai life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mumbai life puts enormous strain on relationships — couples rarely have enough time together, long-distance arrangements are common, and the city\'s competitiveness can breed comparison and resentment. Talking to a peer listener who has navigated relationship stress in a high-pressure urban environment can help you process your feelings, gain perspective, and figure out what you actually need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available in the middle of the night for Mumbai users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LeanOn is available 24/7. Mumbai\'s night owls, late-shift workers, and anyone who finds that their hardest feelings surface after midnight can connect with a peer listener any time. Sessions start at ₹165 for 15 minutes, with the first 5 minutes free to find the right fit before committing.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Mumbai', item: 'https://leanon.app/mumbai' },
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
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function MumbaiPage() {
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
          <span style={{color:'var(--navy)'}}>Mumbai</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Mumbai</p>
          <h1>Peer Support in Mumbai — Because Mumbai's <em>Grind Gets to Everyone</em></h1>
          <p className="lead">Mumbai never slows down — and neither do the pressures that come with living here. The commutes, the cost of living, the relentless competition, and the loneliness of a city that is too busy to notice you. LeanOn connects you with peer listeners who have been through it and come out the other side.</p>
        </div>

        {/* Mumbai's unique emotional pressures */}
        <div className="section">
          <h2>Mumbai's Unique Emotional Pressures</h2>
          <p>There is a mythology around Mumbai — the city of dreams, where hustle is rewarded and ambition is the norm. What that mythology leaves out is the emotional cost of keeping pace with a city that never stops asking more of you.</p>

          <h3>The Commute That Grinds You Down</h3>
          <p>Mumbai's local trains carry millions of people every day — and each of those people is sacrificing hours of their life, their energy, and often their peace of mind to the daily ritual of getting somewhere. A 4-hour round commute from Virar to Churchgate is not just a logistical inconvenience. Over months and years, it is a significant contribution to exhaustion, resentment, and the feeling that life is passing you by in a train carriage.</p>

          <h3>The Cost of Living and Financial Anxiety</h3>
          <p>Mumbai is one of the most expensive cities in India. Rent in decent neighbourhoods — Bandra, Andheri, Powai, Lower Parel — consumes a disproportionate share of most salaries. Many Mumbaikars feel a quiet, persistent financial anxiety: working hard but not getting ahead, unable to save, watching the gap between their current life and the life they imagined grow wider each year. This chronic low-grade stress is one of the city's least-acknowledged mental health burdens.</p>

          <h3>Cutthroat Competition and Comparison</h3>
          <p>Mumbai concentrates India's most ambitious people in finance, media, entertainment, and corporate careers. The result is a constant, exhausting game of comparison. Who got the better role, the bigger salary, the nicer flat. In a city that runs on status and optics, it is very easy to spend years feeling like you are falling behind — even when by any objective measure, you are doing fine.</p>

          <h3>Loneliness in a City of Millions</h3>
          <p>Mumbai is dense and impersonal in equal measure. People live in small flats, work long hours, and commute in packed trains — yet genuine connection is surprisingly scarce. Making new friends as an adult in Mumbai is hard. Social events feel transactional. And the city's pace leaves little room for the slow, unproductive time that real friendships require. Many Mumbaikars describe feeling invisible despite being surrounded by people every hour of the day.</p>

          <h3>Relationships Under Mumbai Stress</h3>
          <p>Romantic relationships in Mumbai face unique pressures. Couples are often exhausted when they finally see each other. Space is limited — many couples live with families or in shared flats, making privacy scarce. The financial pressure of starting a life together in a city this expensive creates arguments and resentment. And the ambition that brought people to Mumbai can pull them in directions that strain even strong partnerships.</p>
        </div>

        {/* How LeanOn Helps Mumbai */}
        <div className="section">
          <h2>How LeanOn Helps Mumbai Residents</h2>
          <p>LeanOn is peer support — not therapy. Real people, who have navigated real Mumbai pressures, available to listen without judgment and support without lecturing.</p>

          <h3>Talk to Someone Who Understands Mumbai</h3>
          <p>Our listeners include people who have spent years in Mumbai — who know what the Virar Fast does to your soul, what it feels like to turn 30 in a 1-BHK in Malad still wondering when real life starts, what it means to build a career in a city that rewards aggression and punishes sensitivity. That shared context matters more than any certificate.</p>

          <h3>No Commute Required</h3>
          <p>You have enough commuting to do. LeanOn sessions happen entirely on your phone or laptop. Talk from your office bathroom, your commute home, your bedroom after midnight. Support is available wherever you are, whenever you need it.</p>

          <h3>Affordable and Accessible</h3>
          <p>Therapy in Mumbai can cost ₹2,000 to ₹5,000 per session — and there are waitlists. LeanOn starts at ₹165 for 15 minutes, with the first 5 minutes free. For the kind of emotional support that most Mumbaikars need most of the time — a caring human who listens without judgment — peer support is often the right tool.</p>

          <h3>Private and Confidential</h3>
          <p>In Mumbai's social and professional circles, vulnerability can feel like a liability. LeanOn is completely private. Your conversations stay between you and your listener. No one in your network will know unless you choose to tell them.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Know Mumbai</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🚆',
              name: 'Aditya',
              tag: 'Commute & Burnout',
              bio: 'Spent 5 years on the Virar Fast. I know what that grind does to you — and how to reclaim your life from it.'
            },
            {
              emoji: '💛',
              name: 'Nisha',
              tag: 'Loneliness & Relationships',
              bio: 'Moved to Mumbai from Pune at 23. Spent two years lonely in a city of millions before I figured out how to build real connection here.'
            },
            {
              emoji: '📊',
              name: 'Sameer',
              tag: 'Financial Anxiety',
              bio: 'Finance professional who spent years feeling trapped by Mumbai\'s cost of living. Learned to separate worth from net worth.'
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
          <h2>Ready to Talk to Someone Who Gets Mumbai?</h2>
          <p>Browse peer listeners who understand the real pressures of life in India's most intense city. First 5 minutes free — available right now, no commute required.</p>
          <div className="cta-btns">
            <a href="/browse?city=mumbai"><button className="btn-primary">Browse Mumbai Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why is loneliness so common in Mumbai despite it being the most populous city in India?</div>
            <div className="faq-a">Mumbai is famously crowded, yet deeply impersonal. The city's pace — the commutes, the grind, the constant hustle — leaves little room for genuine human connection. People are physically surrounded by millions but emotionally isolated. Relationships are squeezed by exhaustion, and building new friendships as an adult in Mumbai is genuinely hard.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does Mumbai's commute culture affect mental health?</div>
            <div className="faq-a">Mumbai's local train and road commutes rank among the most stressful in the world. Many Mumbaikars spend 3 to 5 hours a day in transit. This relentless time drain eats into the hours that could go towards relationships, hobbies, rest, and social activities that buffer against loneliness and burnout. The cumulative effect over years is significant.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Does financial pressure in Mumbai cause emotional problems?</div>
            <div className="faq-a">Absolutely. Mumbai has one of the highest costs of living in India, and the gap between what people earn and what comfortable living requires creates chronic financial anxiety. This financial pressure bleeds into relationships, self-esteem, and mental health in ways that are rarely talked about openly.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can peer support help with relationship stress caused by Mumbai life?</div>
            <div className="faq-a">Yes. Mumbai life puts enormous strain on relationships — couples rarely have enough time together, long-distance arrangements are common, and the city's competitiveness can breed comparison and resentment. Talking to a peer listener who has navigated relationship stress in a high-pressure urban environment can help you process feelings and gain perspective.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn available in the middle of the night for Mumbai users?</div>
            <div className="faq-a">Yes, LeanOn is available 24/7. Mumbai's night owls, late-shift workers, and anyone who finds that their hardest feelings surface after midnight can connect with a peer listener any time. Sessions start at ₹165 for 15 minutes, with the first 5 minutes free to find the right fit before committing.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/loneliness" className="related-link">Loneliness Support</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>iCall (TISS):</strong> 9152987821 &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> 14416</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
