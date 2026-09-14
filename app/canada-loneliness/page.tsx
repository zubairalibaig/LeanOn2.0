import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in Canada — Especially in Winter | LeanOn',
  description: 'Moving to Canada as an Indian can be brutally isolating — the cold, the silence, the starting over. LeanOn connects you with a real human listener who gets it, anytime you need.',
  keywords: [
    'lonely in canada', 'feeling lonely in canada', 'indian lonely canada', 'loneliness canada immigrants',
    'new to canada lonely', 'winter loneliness canada', 'south asian loneliness canada',
    'no friends in canada', 'isolated in canada', 'moving to canada lonely',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-loneliness',
    languages: { 'en-CA': 'https://www.leanon.app/canada-loneliness' },
  },
  openGraph: {
    title: 'Feeling Lonely in Canada — Especially in Winter | LeanOn',
    description: 'The cold outside is manageable. The cold inside — starting over, no support network, missing home — is harder. LeanOn peer listeners are here anytime.',
    url: 'https://www.leanon.app/canada-loneliness',
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
      name: 'Why do Indians feel so lonely after moving to Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moving to Canada means rebuilding everything from scratch — your social circle, your sense of belonging, even your daily rhythms. The physical distance from family and the cultural gap between Indian and Canadian life can make even a crowded city feel profoundly empty. This is entirely normal, and it does get better with the right support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does winter make loneliness worse for immigrants in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. Canadian winters — especially the first one — are long, dark, and isolating. When people stay indoors, social connections shrink. If you are already new to the country without a strong network, winter can turn manageable loneliness into something much heavier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a LeanOn session cost in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are completely free. After that, sessions are CA$14 for 15 minutes, CA$21 for 30 minutes, and CA$28 for 45 minutes. You pay in Indian rupees through the app — straightforward and affordable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to someone who understands the Indian immigrant experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners understand the complexity of the Indian immigrant experience — the pressure, the guilt, the homesickness, the longing to belong. You will not have to explain why you miss home or why a phone call from your parents makes you cry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a substitute for therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support, not therapy. Our listeners are trained to hold space and listen deeply — they are not mental health professionals. If you are experiencing serious mental health challenges, please also consider speaking with a licensed therapist or counsellor.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support Canada', item: 'https://www.leanon.app/canada-loneliness' },
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

export default function CanadaLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support Canada
        </div>

        <h1>Nobody Told You Moving to Canada<br />Would Feel This Lonely.</h1>
        <p className="lead">
          You planned for the visa stress, the job search, the new city. You didn&apos;t plan for the silence.
          For weekends with nowhere to be. For winters that seem to last forever when you have no one to call.
          LeanOn is here for exactly this.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>This is what Indian loneliness in Canada actually looks like</h2>
          <p>It is not dramatic. It is quiet. And that makes it harder to name.</p>
          <ul className="checklist">
            <li>Sunday afternoons with nothing to do and no one to call</li>
            <li>Watching your Canadian colleagues head off to plans you were never part of</li>
            <li>Living in Brampton or Mississauga — surrounded by Indian people but still somehow alone</li>
            <li>Being so exhausted from work that you have nothing left to build friendships with</li>
            <li>Missing your parents and feeling guilty for leaving them</li>
            <li>Wondering if you made the right decision coming here at all</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this is real. All of this is enough reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>❄️ The first winter hits different</h2>
          <p>In India, even a bad day ends with noise, people, movement. In Canada, winter evenings are dark
            by 4 PM and profoundly silent. That contrast — especially in your first year — can be genuinely
            overwhelming.</p>
          <p>LeanOn listeners are available whenever the silence gets too loud — midnight, 2 AM, any time.
            Just a real conversation with a real person who gets it.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>You are not weak. You are rebuilding from zero.</h2>
          <p>Back home, your support network was built over decades. Friends from school. Family nearby.
            Neighbours you knew by name. Here, you are starting from scratch — as an adult, while working
            full-time, in a culture that does not always make it easy to connect deeply.</p>
          <p>Feeling lonely in that situation is not a personal failure. It is a human response to an
            extraordinarily hard situation. Talking about it is the first step.</p>
        </div>

        <div className="card">
          <h2>What a LeanOn session looks like</h2>
          <ul className="checklist">
            <li>Your first 5 minutes are completely free — no card needed</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real humans — trained peer listeners, not AI or bots</li>
            <li>Anonymous — your name, your story, your privacy</li>
            <li>Available day and night, any timezone</li>
            <li>Many listeners understand the Indian immigrant experience personally</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Anonymous, affordable, available 24/7. Made for exactly this.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do Indians feel so lonely after moving to Canada?</h3>
            <p>Moving to Canada means rebuilding everything from scratch — your social circle, your sense of
              belonging, even your daily rhythms. The distance from family and the cultural gap can make even
              a crowded city feel empty. This is entirely normal.</p>
          </div>
          <div className="faq-item">
            <h3>Does winter make loneliness worse for immigrants in Canada?</h3>
            <p>Yes, significantly. Canadian winters are long, dark, and isolating. If you are new to the
              country without a strong network, winter can turn manageable loneliness into something much heavier.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a LeanOn session cost in Canada?</h3>
            <p>Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.
              Affordable support, whenever you need it.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to someone who understands the Indian immigrant experience?</h3>
            <p>Yes. Many LeanOn listeners understand this experience personally — the pressure, the guilt, the
              homesickness. You will not need to explain why missing home hurts so much.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a substitute for therapy?</h3>
            <p>LeanOn is peer support, not therapy. Our listeners are trained to hold space and listen deeply.
              For serious mental health challenges, please also consider a licensed professional.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-winter-loneliness">First winter in Canada →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
          <a href="/toronto-loneliness">Lonely in Toronto →</a>
          <a href="/canada-talk-to-someone">Someone to talk to in Canada →</a>
          <a href="/canada-immigration-stress">Immigration anxiety →</a>
          <a href="/desi-canada-support">Desi community support →</a>
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
