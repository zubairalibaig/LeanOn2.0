import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Delhi — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Delhi, India. Available 24/7. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/delhi', languages: { 'en-IN': 'https://www.leanon.app/delhi' } },
  keywords: 'peer support Delhi, emotional support Delhi, loneliness Delhi, career expectations Delhi, family pressure Delhi, talk to someone Delhi, leanon Delhi',
  openGraph: {
    title: 'Emotional Support in Delhi — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Delhi, India. Available 24/7. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
    url: 'https://www.leanon.app/delhi',
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
      name: 'What makes Delhi\'s emotional pressures different from other Indian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delhi sits at the intersection of intense ambition and deep-rooted family and social expectations. Being the national capital means it attracts people chasing power, status, and career milestones — while simultaneously carrying heavy obligations around marriage, family honour, and social standing. The result is a city where people are simultaneously over-stimulated externally and emotionally underserved. Admitting vulnerability or seeking help is often culturally coded as weakness, which means struggles are carried silently for far too long.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does family pressure affect mental health in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Family expectations in Delhi — around career choices, marriage timelines, living arrangements, and social obligations — can be immense. Many people feel caught between what they genuinely want for their lives and what their family expects. This internal conflict creates chronic stress, guilt, and a persistent sense that no matter what you achieve, it is not quite enough. Peer support gives people a space to untangle these feelings without the fear of family judgment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is loneliness common among women in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is a specific kind of loneliness. Many women in Delhi navigate intense social monitoring — from family, neighbours, and social circles. The result can be a profound inability to be honest about their inner lives, relationships, or ambitions. Even highly educated, professionally successful women describe feeling alone because there is no one they can speak to freely without social consequences. LeanOn offers that space: anonymous, judgment-free, and completely private.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does men\'s mental health look like in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delhi\'s masculine culture makes emotional expression particularly difficult for men. The expectation to be strong, decisive, and unaffected is pervasive. Men in Delhi often carry relationship stress, career anxiety, and family pressure with no outlet, because talking about feelings is seen as a sign of weakness. This suppression has real consequences — on physical health, relationships, and overall wellbeing. LeanOn provides a completely private space where men can be honest without any social cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does career pressure in Delhi differ from other cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delhi\'s proximity to power — government, defence, media, corporate headquarters — creates a specific kind of career anxiety. The stakes feel higher, the competition more intense, and the social consequences of not achieving more pronounced. There is also significant pressure around prestige: the right college, the right company, the right job title. Many Delhiites find themselves achieving externally while feeling deeply unfulfilled internally — a gap that peer support helps to address.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Delhi', item: 'https://www.leanon.app/delhi' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/delhi',
  areaServed: {
    '@type': 'City',
    name: 'Delhi',
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

export default function DelhiPage() {
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
          <span style={{color:'var(--navy)'}}>Delhi</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Delhi</p>
          <h1>Peer Support in Delhi — Someone to Lean On in <em>the Capital</em></h1>
          <p className="lead">Delhi is a city of enormous ambition and equally enormous expectations — on your career, your family obligations, your relationships, and your very identity. LeanOn connects you with peer listeners who understand the specific weight of living in India's capital, and how to carry it without breaking.</p>
        </div>

        {/* Delhi's pressures */}
        <div className="section">
          <h2>Delhi's Emotional Pressures</h2>
          <p>Every city has its own flavour of emotional difficulty. Delhi's is a particular mix: high stakes, deep social hierarchies, intense family structures, and a culture that glorifies strength while pathologising vulnerability.</p>

          <h3>Career Expectations in the Capital</h3>
          <p>Delhi attracts people with big ambitions — government careers, corporate leadership, media, defence, academia. Being in the capital means the stakes always feel higher, the competition more fierce, and the social consequences of not achieving more visible. There is a relentless pressure to have the right credentials, the right position, the right trajectory. Many people in Delhi achieve a great deal externally while privately feeling lost, unfulfilled, or like they are running someone else's race.</p>

          <h3>Family Obligations and Expectations</h3>
          <p>Delhi's family structures carry enormous weight. Expectations around marriage timelines, career choices, living arrangements, and social obligations are often non-negotiable. Many people — especially those in their mid-to-late twenties and thirties — describe the exhausting experience of managing dual lives: their authentic inner world and the version of themselves their family expects to see. This performance is deeply lonely, even when you are surrounded by people who love you.</p>

          <h3>Relationship Dynamics Under Pressure</h3>
          <p>Relationships in Delhi are complicated by class dynamics, family approval, gender expectations, and the very real financial calculations of building a life in an expensive city. Many people struggle with the gap between the relationship they want and the relationship that is "acceptable." Others are in relationships that look fine from the outside but feel lonely or disconnected from the inside. Peer support gives you a private space to talk through what is actually happening — without family advice or social judgment.</p>

          <h3>The Weight of Ambition</h3>
          <p>Delhi runs on ambition — and ambition, sustained for years without emotional support, is exhausting. The hustle culture here is different from Bengaluru's startup scene: it is older, more status-driven, more hierarchical. Many Delhiites describe a specific kind of tiredness that comes not from failure but from succeeding in ways that do not actually feel good. That quiet disillusionment deserves to be spoken out loud.</p>
        </div>

        {/* Men's mental health */}
        <div className="section">
          <h2>Men's Mental Health in Delhi</h2>
          <p>Delhi's masculine culture makes emotional expression particularly difficult for men. The expectation to be strong, decisive, and unaffected is deeply embedded — in families, workplaces, and social circles. Men are expected to provide, to lead, and to cope — silently, if necessary.</p>

          <h3>The Cost of Silence</h3>
          <p>This expectation of stoicism has real consequences. Men in Delhi often carry relationship stress, career anxiety, family pressure, and identity confusion with no outlet — because talking about feelings has been socially coded as weakness. Over time, this suppression manifests as irritability, withdrawal, physical health problems, and relationship breakdown.</p>

          <h3>A Private Space to Be Honest</h3>
          <p>LeanOn offers something genuinely rare for men in Delhi: a completely private, judgment-free space to say what you are actually feeling. No one in your social or professional network will know. No one will think less of you. Many male users describe their first LeanOn session as the first time they have ever been honest about how they are really doing — and the relief that brings.</p>

          <h3>Peer Listeners Who Understand</h3>
          <p>Several of our male listeners have themselves navigated Delhi's particular version of masculine pressure — the expectation to suppress, achieve, and never ask for help. They understand the dynamic from the inside, which makes the conversation feel different from therapy or advice.</p>
        </div>

        {/* Women's loneliness */}
        <div className="section">
          <h2>Women's Loneliness in Delhi</h2>
          <p>For women in Delhi, loneliness often has a specific quality: the loneliness of having to perform a version of yourself that is acceptable, while your actual thoughts, desires, and struggles remain unspoken.</p>

          <h3>Social Monitoring and Its Costs</h3>
          <p>Many women in Delhi navigate intense social monitoring — from family, neighbours, extended relatives, and social circles. What you wear, who you spend time with, how ambitious you are, when you marry, what you say publicly — all of it is observed and commented on. The result is a kind of self-censorship that, over years, can create a profound disconnection from your own inner life. You forget what you actually think because you have spent so long managing what other people think of you.</p>

          <h3>Professional Success and Personal Loneliness</h3>
          <p>Delhi has a significant population of highly educated, professionally successful women — many of whom describe feeling profoundly alone. Their professional peers are colleagues, not confidants. Their family members do not understand their world. Their friends are navigating their own impossible pressures. The result is a loneliness that is hard to name because externally, everything looks fine.</p>

          <h3>A Space to Be Fully Honest</h3>
          <p>LeanOn's female listeners have navigated their own versions of this experience — the pressure to be appropriate, the loneliness of performed happiness, the exhaustion of managing family expectations while also building a career and a self. Talking to someone who understands that particular texture of experience makes a real difference.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Understand Delhi</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🏛️',
              name: 'Vikram',
              tag: 'Career & Family Pressure',
              bio: 'Navigated the pressure of a Delhi family\'s expectations while figuring out what I actually wanted. I know that specific exhaustion well.'
            },
            {
              emoji: '🌸',
              name: 'Ananya',
              tag: 'Loneliness & Identity',
              bio: 'Successful professional who spent years performing happiness while feeling completely alone. Found my way to honesty — and I want to help others do the same.'
            },
            {
              emoji: '💬',
              name: 'Rahul',
              tag: 'Relationships & Stress',
              bio: 'Went through a difficult relationship breakdown while managing intense family pressure. Learned that asking for support is strength, not weakness.'
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
          <h2>Ready to Talk to Someone Who Gets Delhi?</h2>
          <p>Browse peer listeners who understand the capital's pressures — career expectations, family obligations, relationship dynamics. Available 24/7, completely private.</p>
          <div className="cta-btns">
            <a href="/browse?city=delhi"><button className="btn-primary">Browse Delhi Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What makes Delhi's emotional pressures different from other Indian cities?</div>
            <div className="faq-a">Delhi sits at the intersection of intense ambition and deep-rooted family and social expectations. Being the national capital means it attracts people chasing power and status while simultaneously carrying heavy obligations around marriage, family honour, and social standing. The result is a city where people are simultaneously over-stimulated externally and emotionally underserved.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does family pressure affect mental health in Delhi?</div>
            <div className="faq-a">Family expectations in Delhi — around career choices, marriage timelines, living arrangements, and social obligations — can be immense. Many people feel caught between what they genuinely want and what their family expects. This internal conflict creates chronic stress, guilt, and a persistent sense that no matter what you achieve, it is not quite enough.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is loneliness common among women in Delhi?</div>
            <div className="faq-a">Yes, and it is a specific kind of loneliness. Many women navigate intense social monitoring from family and social circles. The result can be an inability to be honest about their inner lives, relationships, or ambitions. Even highly educated, professionally successful women describe feeling alone because there is no one they can speak to freely without social consequences.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What does men's mental health look like in Delhi?</div>
            <div className="faq-a">Delhi's masculine culture makes emotional expression particularly difficult for men. The expectation to be strong, decisive, and unaffected is pervasive. Men often carry relationship stress, career anxiety, and family pressure with no outlet, because talking about feelings is seen as weakness. This suppression has real consequences on health, relationships, and overall wellbeing.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does career pressure in Delhi differ from other cities?</div>
            <div className="faq-a">Delhi's proximity to power — government, defence, media, corporate headquarters — creates a specific career anxiety. The stakes feel higher, competition more intense, and the social consequences of not achieving more pronounced. Many Delhiites find themselves achieving externally while feeling deeply unfulfilled internally — a gap that peer support helps address.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/mumbai" className="related-link">Peer Support Mumbai</a>
            <a href="/bengaluru" className="related-link">Peer Support Bengaluru</a>
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
