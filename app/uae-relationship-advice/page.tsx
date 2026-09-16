import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support for Indians in UAE | LeanOn',
  description: 'Long-distance marriages, cultural pressure, partner conflicts — Indian expats in the UAE carry unique relationship strains. Talk to an Indian peer listener who understands, in your language.',
  keywords: [
    'relationship support UAE Indian', 'marriage problems UAE', 'long distance marriage UAE India',
    'relationship advice UAE', 'Indian couple problems UAE', 'cultural pressure relationships UAE',
    'partner conflict UAE', 'NRI relationship problems', 'talk to someone about relationship UAE',
    'Indian listener relationship UAE', 'marriage strain expat UAE', 'family pressure marriage UAE',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uae-relationship-advice',
    languages: { 'en-IN': 'https://www.leanon.app/uae-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in UAE — Talk to Someone Who Understands',
    description: 'Distance, cultural pressure, and unspoken resentments — relationship struggles for Indian expats in the UAE are real. LeanOn peer listeners are here to help you work through it.',
    url: 'https://www.leanon.app/uae-relationship-advice',
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
      name: 'Why do so many Indians in UAE struggle with their relationships?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physical distance is the most obvious strain — partners separated by oceans, trust tested by absence. But beyond that, there are pressures unique to expat life: financial stress, the burden of remittances, cultural expectations about gender roles, and the isolation of being far from the family support systems that normally help couples navigate conflict.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a counselling service or a therapy service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support — trained listeners who give you a safe, non-judgmental space to talk. They are not therapists or counsellors, but sometimes what you need most is not a clinical session — it is someone to truly hear you out and help you think clearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my marriage problems without being judged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. LeanOn listeners are trained to listen without judgment, without taking sides, and without moralising. Your marriage, your choices, your pain — all of it is held with respect and care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a relationship support session cost from UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions cost AED 37 for 15 minutes, AED 55 for 30 minutes, and AED 74 for 45 minutes. The first 5 minutes of your first session are always free.',
      },
    },
    {
      '@type': 'Question',
      name: 'My family arranged my marriage and I feel trapped. Can I talk about that?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and many people do. LeanOn listeners understand the complex dynamics of Indian families and arranged marriages. You can speak openly about pressure from in-laws, mismatched expectations, or feeling unheard — without fear of judgment or your conversation reaching anyone you know.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support UAE', item: 'https://www.leanon.app/uae-relationship-advice' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .logo{font-size:22px;font-weight:900;color:var(--navy);}
  .logo span{color:var(--teal);}
  .nav-cta{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  .breadcrumb{font-size:12px;color:var(--gray);margin-bottom:20px;}
  .breadcrumb a{color:var(--teal);}
  .breadcrumb span{margin:0 6px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}
  .night-box{background:linear-gradient(135deg,#0F2640,#143354);border-radius:20px;padding:28px;margin-bottom:20px;color:white;}
  .night-box h2{font-size:18px;font-weight:900;margin-bottom:12px;color:white;}
  .night-box p{font-size:15px;line-height:1.78;margin-bottom:10px;color:rgba(255,255,255,0.85);}
  .night-box p:last-child{margin-bottom:0;}
  .night-box .cta-night{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:15px;padding:12px 28px;border-radius:50px;margin-top:16px;}
  .checklist{list-style:none;margin-top:10px;}
  .checklist li{font-size:15px;color:#3A6070;line-height:1.7;padding:6px 0;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start;}
  .checklist li:last-child{border-bottom:none;}
  .checklist li::before{content:'💙';flex-shrink:0;}
  .faq-item{border-top:1px solid var(--border);padding:16px 0;}
  .faq-item:last-child{border-bottom:1px solid var(--border);}
  .faq-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.4;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.7;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;margin-bottom:24px;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn-white{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-orange{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;padding:12px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin-top:10px;}
  .related{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .related a{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;}
  .related a:hover{border-color:var(--teal);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  @media(max-width:480px){.related{grid-template-columns:1fr;}}
`

export default function UAERelationshipAdvicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Relationship Support UAE
        </div>

        <h1>Thousands of Miles Apart.<br />And Still So Much Going Unsaid.</h1>
        <p className="lead">
          Relationship struggles for Indian expats in the UAE run deeper than most people admit.
          Long-distance strains, cultural pressures, in-law expectations, financial disagreements —
          and no one nearby you can really talk to. LeanOn gives you a safe, private space to say
          what you have been holding in.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>The relationship strains Indian expats in UAE rarely talk about</h2>
          <ul className="checklist">
            <li>A spouse in India and a marriage held together by WhatsApp calls</li>
            <li>Growing apart over months and years of distance</li>
            <li>Financial pressure — every fight has money underneath it</li>
            <li>In-laws weighing in on everything from thousands of kilometres away</li>
            <li>The loneliness of sleeping alone in a flat after a difficult call home</li>
            <li>Falling into a routine that looks fine but feels completely hollow</li>
            <li>Partners who do not understand what life in the Gulf is really like</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 After a difficult call home, who do you talk to?</h2>
          <p>The hardest moments often come right after hanging up — the argument still unresolved,
            the silence in the flat too loud, no one nearby who understands the full picture.</p>
          <p>LeanOn listeners are available 24/7. Talk through what just happened with someone who
            will listen without taking sides and without judgment.</p>
          <a href="/browse" className="cta-night">Find an Indian listener now →</a>
        </div>

        <div className="card">
          <h2>What you can talk about with a LeanOn listener</h2>
          <p>LeanOn is not therapy — it is something equally valuable: a real human being who will
            truly listen. You can talk about:</p>
          <ul className="checklist">
            <li>Long-distance marriage and growing apart</li>
            <li>Feeling unsupported or misunderstood by your partner</li>
            <li>Conflicts with in-laws or family pressure around marriage</li>
            <li>Trust issues and insecurities amplified by distance</li>
            <li>Whether you want to stay or whether it is time to make a change</li>
            <li>The grief of a relationship ending — even when you knew it was coming</li>
          </ul>
        </div>

        <div className="card">
          <h2>Session pricing in AED</h2>
          <ul className="checklist">
            <li>15-minute session — AED 37</li>
            <li>30-minute session — AED 55</li>
            <li>45-minute session — AED 74</li>
            <li>First 5 minutes free — once per listener</li>
          </ul>
          <p style={{ marginTop: '12px' }}>Anonymous. No subscription. Talk in Hindi, Tamil, Telugu, Malayalam, or any Indian language.</p>
        </div>

        <div className="cta">
          <h2>You deserve to be heard</h2>
          <p>Whatever is happening in your relationship, you do not have to carry it alone.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do so many Indians in UAE struggle with their relationships?</h3>
            <p>Physical distance, financial stress, cultural expectations, and the isolation of expat life all
              put unique pressure on relationships that would be hard enough to navigate even face to face.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a counselling or therapy service?</h3>
            <p>LeanOn is peer support — trained listeners who give you a safe, non-judgmental space to talk.
              Not therapists, but sometimes what you need most is someone to truly hear you out.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about my marriage without being judged?</h3>
            <p>Absolutely. LeanOn listeners listen without judgment, without taking sides, and without moralising.
              Your relationship and your pain are held with complete respect.</p>
          </div>
          <div className="faq-item">
            <h3>What does a session cost from UAE?</h3>
            <p>AED 37 for 15 minutes, AED 55 for 30 minutes, AED 74 for 45 minutes. First 5 minutes are free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about pressure from an arranged marriage or in-laws?</h3>
            <p>Yes. LeanOn listeners understand Indian family dynamics deeply. You can speak openly about
              in-law pressure, mismatched expectations, or feeling trapped — without fear of judgment.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">Loneliness support UAE →</a>
          <a href="/gulf-relationship-support">Gulf relationship support →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/relationship-advice-online-india">Relationship support India →</a>
          <a href="/middle-east-empathy-listener">Empathy listener Gulf →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
