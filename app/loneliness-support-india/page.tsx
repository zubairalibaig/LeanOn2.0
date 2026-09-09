import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in India? You\'re Not the Only One. | LeanOn',
  description: 'Loneliness is an epidemic in urban India — in offices, apartments, and even in relationships. LeanOn connects you with a real human listener whenever you need it, day or night.',
  keywords: [
    'loneliness support india', 'feeling lonely india', 'lonely in india', 'urban loneliness india',
    'feeling alone india', 'no one to talk to india', 'talk to someone when lonely india',
    'feeling isolated india', 'midnight loneliness india', '3am loneliness india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/loneliness-support-india',
    languages: { 'en-IN': 'https://www.leanon.app/loneliness-support-india' },
  },
  openGraph: {
    title: 'Loneliness Support in India — Talk to Someone, Anytime',
    description: 'Loneliness is everywhere in modern India. LeanOn peer listeners are available 24/7 — day or night, whenever the quiet gets too loud.',
    url: 'https://www.leanon.app/loneliness-support-india',
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
      name: 'Is it normal to feel lonely even when surrounded by people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Loneliness is not about how many people are around you — it is about how deeply you feel understood. You can feel lonely in a full office, in a marriage, or in a family gathering. This kind of loneliness is especially common in India\'s cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I do when I feel lonely at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are available 24/7, including late at night. Start a free 5-minute session and talk to a real person whenever the loneliness feels too heavy to carry alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does talking to a listener help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness shrinks when someone genuinely listens. LeanOn listeners are trained to give you their full attention, ask questions that help you feel seen, and hold space without judgment. Just one real conversation can break the cycle of isolation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn available in Hindi or regional languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and other regional languages. When browsing, you can filter by language or check a listener\'s bio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener just because I feel like I have nothing important to say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always. You do not need a big reason to reach out. Feeling lonely IS a big enough reason. LeanOn listeners are there for exactly these moments — when you just want a real human connection.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support India', item: 'https://www.leanon.app/loneliness-support-india' },
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

export default function LonelinessSupportPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support India
        </div>

        <h1>The Quiet Gets Too Loud Sometimes.<br />You Don&apos;t Have to Sit with It Alone.</h1>
        <p className="lead">
          Loneliness in India is rarely talked about — but it is everywhere. In big cities where you know
          no one. In offices full of people but no real connection. In relationships where you still feel
          unseen. LeanOn is here for exactly those moments.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Loneliness in India looks different than people think</h2>
          <p>We picture loneliness as someone alone in a room. But in India, it often looks like this:</p>
          <ul className="checklist">
            <li>A new city. A new job. Nobody your age in your building.</li>
            <li>A packed hostel where everyone seems to have their group already.</li>
            <li>A marriage that works on paper but feels hollow inside.</li>
            <li>Being surrounded by family who doesn&apos;t understand you.</li>
            <li>Scrolling Instagram at midnight because it&apos;s better than silence.</li>
            <li>A career going well but feeling completely empty about it.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of these are real. All of these are enough reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>🌙 Feeling it most at night?</h2>
          <p>Loneliness peaks after 10 PM when distractions run out and the quiet becomes too loud.
            LeanOn listeners are available 24/7 — including 2 AM, 3 AM, any time you need them.</p>
          <p>You don&apos;t need to wait until morning. You can talk right now.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>How a conversation with a peer listener helps</h2>
          <p>Loneliness shrinks when someone genuinely listens. Not to solve your problems. Not to give you
            advice. Just to be present with you, hear you out, and make you feel less alone in your own head.</p>
          <p>LeanOn listeners are trained to do exactly this — to ask gentle questions, to reflect back what
            they hear, and to make you feel like you matter. Because you do.</p>
        </div>

        <div className="card">
          <h2>Who talks to LeanOn listeners?</h2>
          <ul className="checklist">
            <li>Students far from home, missing family and belonging</li>
            <li>Young professionals in metro cities with work-life exhaustion and social isolation</li>
            <li>People dealing with breakups or the end of friendships</li>
            <li>Married people who feel completely misunderstood by their partner</li>
            <li>Introverts who find socialising draining but still crave connection</li>
            <li>Anyone who has not told anyone what is really going on inside</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Anonymous, affordable, available 24/7 across India.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Is it normal to feel lonely even when surrounded by people?</h3>
            <p>Absolutely. Loneliness is about how deeply you feel understood, not how many people are around you.
              You can feel lonely in a full office, in a marriage, or in a family gathering — and it is very
              common in India&apos;s cities.</p>
          </div>
          <div className="faq-item">
            <h3>What can I do when I feel lonely at night?</h3>
            <p>LeanOn listeners are available 24/7, including late at night. Start a free 5-minute session and
              talk to a real person whenever the loneliness feels too heavy to carry alone.</p>
          </div>
          <div className="faq-item">
            <h3>How does talking to a listener help with loneliness?</h3>
            <p>Loneliness shrinks when someone genuinely listens. LeanOn listeners are trained to give you their
              full attention, ask questions that help you feel seen, and hold space without judgment. Just one
              real conversation can break the cycle of isolation.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn available in Hindi or regional languages?</h3>
            <p>Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and other regional
              languages. When browsing, you can filter by language or check a listener&apos;s bio.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a listener even if I have nothing important to say?</h3>
            <p>Yes, always. You do not need a big reason to reach out. Feeling lonely IS a big enough reason.
              LeanOn listeners are there for exactly these moments.</p>
          </div>
        </div>

        <div className="related">
          <a href="/feeling-lonely-in-india">Feeling lonely in India →</a>
          <a href="/someone-to-talk-to-at-night">Someone to talk to at night →</a>
          <a href="/i-need-someone-to-talk-to">I need someone to talk to →</a>
          <a href="/relationship-advice-online-india">Relationship support →</a>
          <a href="/support/feeling-empty">Feeling empty inside →</a>
          <a href="/support/feeling-lost">Feeling lost →</a>
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
