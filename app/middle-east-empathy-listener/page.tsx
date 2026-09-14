import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Empathy Listener for Indians in the Gulf | LeanOn',
  description: 'Feeling unheard in the Gulf? LeanOn empathy listeners are trained Indians who give you their full attention — in your language, without judgment — so you feel genuinely understood.',
  keywords: [
    'empathy listener Gulf Indian', 'feeling unheard Gulf', 'someone to understand me UAE',
    'Indian empathy support Gulf', 'peer listener Gulf Indians', 'emotional support Gulf',
    'need empathy UAE Indian', 'feeling invisible Gulf', 'someone who understands NRI',
    'Gulf Indian mental health listener', 'compassionate listener UAE', 'feel understood Gulf',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/middle-east-empathy-listener',
    languages: { 'en-IN': 'https://www.leanon.app/middle-east-empathy-listener' },
  },
  openGraph: {
    title: 'Empathy Listener for Indians in the Gulf — Feel Genuinely Understood',
    description: 'When you feel invisible and unheard in the Gulf, LeanOn empathy listeners give you their full, undivided attention — in your language, without judgment, any time.',
    url: 'https://www.leanon.app/middle-east-empathy-listener',
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
      name: 'What is an empathy listener and how is it different from a therapist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An empathy listener is a trained peer who gives you their full, undivided attention — without judgment, without trying to fix you, and without clinical distance. They reflect what they hear, ask gentle questions, and help you feel genuinely seen. A therapist works on diagnosis and treatment. An empathy listener works on connection and being truly heard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do Indians in the Gulf especially need empathy listeners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gulf work culture often treats workers as productive units, not full human beings. Many Indians in the Gulf say they feel invisible — their emotions, opinions, and inner lives go unacknowledged. On top of that, they are far from the family and friends who would normally see them as people, not just workers. This creates a deep hunger for someone who will simply listen with care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a LeanOn listener talk to me in my own language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners speak Hindi, Malayalam, Tamil, Telugu, Kannada, Gujarati, Bengali, and other Indian languages. Talking in your mother tongue makes it easier to express what you really feel — especially things that do not translate well into English.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the Gulf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the UAE: AED 37 for 15 min, AED 55 for 30 min, AED 74 for 45 min. From Kuwait: KD 4 / KD 5 / KD 7. From Oman: OMR 4 / OMR 6 / OMR 8. First 5 minutes are always free on your first session.',
      },
    },
    {
      '@type': 'Question',
      name: 'I do not even know why I feel bad — can I still talk to a listener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and this is actually one of the most common reasons people come to LeanOn. You do not need to know what is wrong or have a clear topic. Just start talking, and your listener will be with you through the confusion, helping you find words for what you feel.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Empathy Listener Gulf', item: 'https://www.leanon.app/middle-east-empathy-listener' },
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

export default function MiddleEastEmpathyListenerPage() {
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
          <a href="/">Home</a><span>›</span>Empathy Listener for Gulf Indians
        </div>

        <h1>You Want to Be Heard.<br />Not Fixed. Not Advised. Just Heard.</h1>
        <p className="lead">
          In the Gulf, you are often surrounded by people — yet truly seen by almost none of them.
          LeanOn empathy listeners are trained Indians who give you their full, undivided attention,
          in your own language, with genuine care. Because feeling understood is not a luxury. It is
          a basic human need.
        </p>

        <a href="/browse" className="cta-hero">Talk to an Indian listener — first 5 min free →</a>

        <div className="card">
          <h2>What it feels like to be unheard in the Gulf</h2>
          <p>Gulf work culture is transactional by design. You are there to work, produce, deliver.
            Your emotional life is not part of the deal. Over time, this creates a particular kind of
            invisibility — where even when people ask &quot;how are you,&quot; it is a greeting, not a question.</p>
          <ul className="checklist">
            <li>Saying &quot;I am fine&quot; so many times you have started to believe it</li>
            <li>No one around you who knows the whole story of who you are</li>
            <li>Emotions that have nowhere to go, so they just accumulate</li>
            <li>Calling home and not wanting to worry anyone, so you say everything is fine</li>
            <li>The exhaustion of always being &quot;on&quot; — professional, composed, capable</li>
            <li>A quiet, growing sense that nobody here really knows you</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 What genuine empathy feels like</h2>
          <p>When someone truly listens — when they ask &quot;what do you mean by that?&quot; and &quot;how did
            that make you feel?&quot; — something shifts. You do not just feel lighter. You feel real again.
            That is what LeanOn listeners are trained to give you.</p>
          <p>Available 24/7. In your language. From anywhere in the Gulf.</p>
          <a href="/browse" className="cta-night">Find an empathy listener now →</a>
        </div>

        <div className="card">
          <h2>Why an Indian listener makes a difference</h2>
          <p>Cultural nuance matters in emotional conversations. An Indian listener understands the
            specific pressures of being Indian in the Gulf — the family expectations back home, the
            immigrant&apos;s burden of having to succeed, the longing for simple things like street food
            and familiar faces.</p>
          <p>You do not need to explain your context. They already understand the world you come from.</p>
        </div>

        <div className="card">
          <h2>Session pricing across the Gulf</h2>
          <ul className="checklist">
            <li>UAE: AED 37 / AED 55 / AED 74 for 15/30/45 min</li>
            <li>Kuwait: KD 4 / KD 5 / KD 7 for 15/30/45 min</li>
            <li>Oman: OMR 4 / OMR 6 / OMR 8 for 15/30/45 min</li>
            <li>First 5 minutes always free on your first session</li>
          </ul>
        </div>

        <div className="cta">
          <h2>You deserve to feel understood</h2>
          <p>Anonymous, affordable, available in your language — across the Gulf.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>What is an empathy listener and how is it different from a therapist?</h3>
            <p>An empathy listener is a trained peer who gives you full, undivided attention without judgment.
              A therapist works on diagnosis and treatment. An empathy listener works on connection — helping
              you feel genuinely seen and heard.</p>
          </div>
          <div className="faq-item">
            <h3>Why do Indians in the Gulf especially need empathy listeners?</h3>
            <p>Gulf work culture treats workers as productive units. Indians in the Gulf are often far from
              family who see them as full people, creating a deep hunger for someone who listens with care.</p>
          </div>
          <div className="faq-item">
            <h3>Can a LeanOn listener talk to me in my own language?</h3>
            <p>Yes. Listeners speak Hindi, Malayalam, Tamil, Telugu, Kannada, Gujarati, Bengali, and more.
              Check a listener&apos;s profile to find your language.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost from the Gulf?</h3>
            <p>UAE: AED 37/55/74 for 15/30/45 min. Kuwait: KD 4/5/7. Oman: OMR 4/6/8. First 5 min always free.</p>
          </div>
          <div className="faq-item">
            <h3>What if I do not even know why I feel bad?</h3>
            <p>That is one of the most common reasons people come to LeanOn. Just start talking — your
              listener will be with you through the confusion, helping you find words for what you feel.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uae-loneliness">Loneliness support UAE →</a>
          <a href="/gulf-nri-support">Gulf NRI support →</a>
          <a href="/middle-east-rant">Need to rant? →</a>
          <a href="/middle-east-loneliness">Middle East loneliness →</a>
          <a href="/kuwait-loneliness">Kuwait support →</a>
          <a href="/oman-loneliness">Oman support →</a>
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
