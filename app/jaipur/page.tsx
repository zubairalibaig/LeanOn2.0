import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Jaipur — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Jaipur, India. Free first session. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/jaipur', languages: { 'en-IN': 'https://www.leanon.app/jaipur' } },
  keywords: 'peer support Jaipur, emotional support Jaipur, loneliness Jaipur, family pressure Jaipur, talk to someone Jaipur, leanon Jaipur',
  openGraph: {
    title: 'Emotional Support in Jaipur — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Jaipur, India. Free first session. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
    url: 'https://www.leanon.app/jaipur',
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
      name: 'What makes Jaipur\'s emotional pressures different from other Indian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jaipur carries the weight of centuries-old Rajasthani tradition alongside a fast-emerging economy of IT parks, startups, and tourism. Many families in Jaipur still live in joint households where decisions about marriage, career, and daily life are made collectively rather than individually. This creates a particular tension: young professionals are encouraged to build modern, ambitious careers while still being expected to defer to family elders on almost everything else. The result is a quiet, ongoing negotiation between personal identity and inherited duty that is rarely spoken about openly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does arranged marriage pressure affect mental health in Jaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arranged marriage remains the default path for most families in Jaipur, and the pressure around it starts early — often as soon as someone finishes their education or starts earning. Timelines are frequently set by family elders rather than the individual, and reluctance or hesitation can be read as ingratitude or rebellion. Many people privately question whether they are ready, whether they even want the match being proposed, or whether they simply feel too afraid to say no. That internal conflict, carried silently, can build into chronic anxiety and a persistent sense of powerlessness over one\'s own life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is loneliness common among women in Jaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it often takes a specific shape rooted in joint family life. Many women in Jaipur are closely observed by parents, in-laws, and extended relatives — what they wear, who they speak to, how they spend their time, and when they marry are all subject to comment and correction. Even educated, professionally employed women describe feeling unable to speak honestly about their frustrations, ambitions, or relationships for fear of being seen as disrespectful or too modern. LeanOn offers a completely private, judgment-free space where that honesty is finally possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does men\'s mental health look like in Jaipur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rajasthani culture places heavy emphasis on men as providers and protectors — the ones who hold the family together, make the difficult decisions, and never show cracks in that strength. This expectation makes emotional expression especially difficult for men in Jaipur, who often carry financial pressure, family responsibility, and career anxiety with no outlet, because vulnerability is seen as a failure of duty. Over time, this suppression contributes to isolation, irritability, and untreated stress. LeanOn gives men in Jaipur a private space to be honest about what they are actually carrying.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does career pressure in Jaipur differ from other cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jaipur\'s economy has grown rapidly — IT companies, startups, and a booming tourism sector have created real career opportunities that did not exist a generation ago. But many young professionals are pursuing these modern careers while still living inside traditional family structures that expect them to prioritise marriage, family business, or "settling down" over ambition. This creates a specific kind of tension: succeeding at a modern career while feeling like you are constantly negotiating, or apologising for, the life you are building. Peer support helps people work through that tension without family judgment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Jaipur', item: 'https://www.leanon.app/jaipur' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/jaipur',
  areaServed: {
    '@type': 'City',
    name: 'Jaipur',
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

export default function JaipurPage() {
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
          <span style={{color:'var(--navy)'}}>Jaipur</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Jaipur</p>
          <h1>Peer Support in Jaipur — Someone to Lean On in <em>the Pink City</em></h1>
          <p className="lead">Jaipur is a city balancing centuries of Rajasthani tradition with a fast-growing economy of IT parks, startups, and tourism. Beneath the pink sandstone facades and joint family courtyards, a new generation is quietly negotiating who they want to become — often without anyone to talk to about it. LeanOn connects you with peer listeners who bring genuine empathy to the particular weight of building a modern life inside a deeply traditional one.</p>
        </div>

        {/* Jaipur's pressures */}
        <div className="section">
          <h2>Jaipur's Emotional Pressures</h2>
          <p>Every city has its own flavour of emotional difficulty. Jaipur's is a particular mix: strong joint family structures, deep-rooted tradition, and a rapidly modernising economy that asks young people to be ambitious and obedient at the same time.</p>

          <h3>Marriage, Family Honour, and "Log Kya Kahenge"</h3>
          <p>In many Rajasthani families, marriage is not a personal decision but a family one — negotiated, timed, and approved by elders. Hovering above almost every choice is the question of family honour and what relatives, neighbours, and the wider community will think — "log kya kahenge." This pressure shapes decisions about who to marry, when to marry, and even how openly someone can express doubt about the process, leaving little room for an individual's own timeline or hesitation.</p>

          <h3>Building a Modern Career Inside a Traditional Household</h3>
          <p>Jaipur's IT parks, startups, and tourism industry have created real career opportunities that simply did not exist for the previous generation. But many young professionals are pursuing these modern paths while still living inside joint family homes where major decisions are made collectively. Balancing a boss's expectations with a grandparent's expectations, a startup's pace with a household's rhythms, can be quietly exhausting — and it is rarely acknowledged as a real source of stress.</p>

          <h3>The Weight of Dowry and Wedding Expectations</h3>
          <p>Even where dowry is officially illegal, financial and social expectations around weddings remain heavy in Jaipur — the scale of the ceremony, the value of gifts, the "right" match in terms of family status and finances. Families can go into debt to meet these expectations, and the people at the centre of the wedding often carry guilt, anxiety, or resentment they feel unable to voice, because the celebration is framed as a joyous occasion rather than a source of pressure.</p>

          <h3>Caught Between Two Worlds</h3>
          <p>Perhaps the loneliest experience in Jaipur today belongs to educated young people who feel genuinely caught between two worlds — ambitious enough to want a modern career and life, but still bound by tradition, obligation, and love for a family that may not fully understand what they want. That in-between space is isolating precisely because it does not fit neatly into either "traditional" or "modern," and it deserves a listening ear rather than judgment from either side.</p>
        </div>

        {/* Men's mental health */}
        <div className="section">
          <h2>Men's Mental Health in Jaipur</h2>
          <p>Rajasthani culture carries a strong cultural script for men: be the provider, be the protector, be the one who holds everything together. This expectation runs deep in Jaipur's families and makes emotional expression particularly difficult for men who are taught, from a young age, that strength means silence.</p>

          <h3>The Provider and Protector Ideal</h3>
          <p>In traditional Rajasthani households, a man is expected to earn well, make firm decisions, and shield the family from hardship — financial, social, or emotional. Falling short of this ideal, or simply feeling overwhelmed by it, is rarely something men feel they can admit out loud, even to close family.</p>

          <h3>The Cost of Silence</h3>
          <p>This unspoken rule has real consequences. Men in Jaipur often carry career pressure, family financial responsibility, and marriage expectations with no outlet at all, because asking for help can feel like an admission that they are failing at the very role they are meant to fulfil. Over time, that suppression shows up as irritability, withdrawal, and physical health strain.</p>

          <h3>A Private, Empathetic Space</h3>
          <p>LeanOn offers Jaipur's men something genuinely rare: a private, empathetic space with no connection to their family or professional circles, where they can say what they are actually feeling. Several of our male listeners have carried the same "provider and protector" expectations themselves, and understand the conversation from the inside.</p>
        </div>

        {/* Women's loneliness */}
        <div className="section">
          <h2>Women's Loneliness in Jaipur</h2>
          <p>For many women in Jaipur, loneliness comes from being constantly observed — a specific, quiet isolation that grows out of joint family living and deeply held gender expectations.</p>

          <h3>Social Monitoring Inside the Joint Family</h3>
          <p>In many Jaipur households, a woman's clothing, friendships, work hours, and opinions are all subject to comment from parents, in-laws, and extended relatives. This constant observation can create a habit of self-censorship so ingrained that women lose touch with what they actually think or want, because so much energy goes into managing how they are perceived.</p>

          <h3>Arranged Marriage and In-Law Relationships</h3>
          <p>The pressure of arranged marriage does not end at the wedding — it often continues into the relationship with in-laws, where a woman is expected to adapt, defer, and keep the peace, sometimes at real emotional cost. Many women describe feeling unable to share these struggles even with their own parents, for fear of appearing ungrateful or of causing a family conflict.</p>

          <h3>Professional Women, Traditional Expectations</h3>
          <p>Jaipur now has a growing population of educated, working women navigating corporate jobs, startups, and tourism-sector careers — while still being expected to prioritise marriage, household duties, and family approval above their own ambitions. LeanOn's female listeners bring real empathy to this exact tension, having lived it themselves, and offer a space where career and tradition do not have to be reconciled out loud for anyone else's comfort.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Understand Jaipur</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🏰',
              name: 'Kavita',
              tag: 'Marriage & Family Decisions',
              bio: 'Navigated the pressure of an arranged marriage timeline and learned how to make that decision on my own terms. I know how heavy that particular weight feels.'
            },
            {
              emoji: '💻',
              name: 'Aditya',
              tag: 'Career & Joint Family Life',
              bio: 'Built a career in Jaipur\'s growing IT scene while still living under my grandparents\' roof. Balancing both worlds taught me a lot — happy to share what helped.'
            },
            {
              emoji: '🎨',
              name: 'Meenal',
              tag: 'Career Choice & Family Pressure',
              bio: 'Chose a career path my family didn\'t initially support and carried a lot of guilt about it. Found my way to peace with that choice, and want to help others do the same.'
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
          <h2>Ready to Talk to Someone Who Gets Jaipur?</h2>
          <p>Browse peer listeners who understand Rajasthan's traditions — family expectations, arranged marriage pressure, and the push and pull of building a modern career. First 5 minutes free, completely private.</p>
          <div className="cta-btns">
            <a href="/browse?city=jaipur"><button className="btn-primary">Browse Jaipur Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What makes Jaipur's emotional pressures different from other Indian cities?</div>
            <div className="faq-a">Jaipur carries the weight of centuries-old Rajasthani tradition alongside a fast-emerging economy of IT parks, startups, and tourism. Many families still live in joint households where decisions about marriage, career, and daily life are made collectively rather than individually. The result is a quiet, ongoing negotiation between personal identity and inherited duty that is rarely spoken about openly.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does arranged marriage pressure affect mental health in Jaipur?</div>
            <div className="faq-a">Arranged marriage remains the default path for most families in Jaipur, and the pressure around it starts early. Timelines are frequently set by family elders rather than the individual, and reluctance can be read as ingratitude or rebellion. That internal conflict, carried silently, can build into chronic anxiety and a persistent sense of powerlessness over one's own life.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is loneliness common among women in Jaipur?</div>
            <div className="faq-a">Yes, and it often takes a specific shape rooted in joint family life. Many women are closely observed by parents, in-laws, and extended relatives, and even educated, professionally employed women describe feeling unable to speak honestly about their frustrations or ambitions. LeanOn offers a completely private, judgment-free space where that honesty is finally possible.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does men's mental health look like in Jaipur?</div>
            <div className="faq-a">Rajasthani culture places heavy emphasis on men as providers and protectors, which makes emotional expression especially difficult. Men in Jaipur often carry financial pressure, family responsibility, and career anxiety with no outlet, because vulnerability is seen as a failure of duty. LeanOn gives men in Jaipur a private space to be honest about what they are actually carrying.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does career pressure in Jaipur differ from other cities?</div>
            <div className="faq-a">Jaipur's economy has grown rapidly — IT companies, startups, and tourism have created real career opportunities that did not exist a generation ago. But many young professionals are pursuing these modern careers while still living inside traditional family structures that expect them to prioritise marriage or "settling down" over ambition. Peer support helps people work through that tension without family judgment.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/delhi" className="related-link">Peer Support Delhi</a>
            <a href="/ahmedabad" className="related-link">Peer Support Ahmedabad</a>
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
