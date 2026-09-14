import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Lonely in London — You\'re Not the Only One | LeanOn',
  description: 'London has 9 million people and some of the highest loneliness rates in the world. If you are an Indian living in London and feel completely alone, you are in good — and large — company.',
  keywords: [
    'lonely in london', 'london loneliness', 'indian lonely london', 'south asian london loneliness',
    'nri london lonely', 'feeling alone london', 'london emotional support', 'talk to someone london',
    'indian community london isolated', 'london social isolation',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/london-loneliness',
    languages: { 'en-GB': 'https://www.leanon.app/london-loneliness' },
  },
  openGraph: {
    title: 'Lonely in London — You\'re Not the Only One',
    description: 'Nine million people, and you feel completely alone. LeanOn connects you with a real Indian peer listener, anytime.',
    url: 'https://www.leanon.app/london-loneliness',
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
      name: 'Why is London so lonely despite being one of the world\'s biggest cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'London is designed for efficiency, not community. People commute in silence, move for jobs, and rarely know their neighbours. The pace of the city makes surface connections easy but deep ones rare. Add to that the Indian cultural expectation to appear strong and settled, and many Indians in London end up isolated inside a city of millions.',
      },
    },
    {
      '@type': 'Question',
      name: 'I moved to London from India and feel lonely. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely normal. The first year in London especially is hard — your social network is gone, British social culture is different from what you grew up with, and building real friendships takes time. The loneliness is real, it is not a personal failure, and it does not have to be carried alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'I have Indian friends in London but still feel lonely. Why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loneliness is not about headcount — it is about depth of connection. You can have a full social calendar and still feel profoundly unseen. If your London friendships feel transactional, surface-level, or like you are always performing okayness, that gap is real and it is worth addressing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a LeanOn listener just because I feel lonely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always. Feeling lonely is one of the most common and legitimate reasons to reach out. You do not need a bigger story. "I live in London and I feel completely alone" is more than enough.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: £8 for 15 minutes, £12 for 30 minutes, £16 for 45 minutes.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Lonely in London', item: 'https://www.leanon.app/london-loneliness' },
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

export default function LondonLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Lonely in London
        </div>

        <h1>Nine Million People.<br />Completely Alone.</h1>
        <p className="lead">
          London is one of the most populated cities on earth — and one of the loneliest. If you are
          an Indian living here and feel like no one truly knows you, you are not unusual. You are just
          honest about something most people are quietly feeling too.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>London loneliness — why the city makes it worse</h2>
          <p>London is extraordinary but it is not built for closeness:</p>
          <ul className="checklist">
            <li>The tube: hundreds of people, no eye contact</li>
            <li>Flatmates who barely acknowledge each other in the kitchen</li>
            <li>Work colleagues who are friendly at the office and invisible outside it</li>
            <li>A weekend with no plans and the dread of admitting that to anyone</li>
            <li>The WhatsApp group with &ldquo;London Indians&rdquo; that is just event announcements, not real connection</li>
            <li>Video-calling your parents in India — and feeling even more alone after you hang up</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>🌆 After the commute, the silence is loudest</h2>
          <p>You come home to your flat, close the door, and the city disappears. Just you and
            the hum of London outside the window. For a lot of Indians in London, this is when
            the loneliness peaks — and when LeanOn listeners are available.</p>
          <p>You can talk to a real person right now. No waiting, no appointment.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Why the Indian community in London does not always help</h2>
          <p>There are large Indian communities across London — Southall, Wembley, Harrow, East Ham.
            But community does not automatically mean connection. Sometimes the pressure within the
            community to appear successful and happy makes the loneliness feel even more unspeakable.</p>
          <p>LeanOn gives you a private, anonymous space to say how you actually feel — no community
            politics, no judgment from anyone who knows your family.</p>
        </div>

        <div className="card">
          <h2>Session pricing in GBP</h2>
          <ul className="checklist">
            <li>First 5 minutes — completely free</li>
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
        </div>

        <div className="cta">
          <h2>A real human is ready to talk right now</h2>
          <p>Indian listeners who understand London and the NRI experience. Anonymous, 24/7.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is London so lonely despite being one of the biggest cities?</h3>
            <p>London is designed for efficiency, not community. People commute in silence, move for jobs,
              and rarely know their neighbours. Deep connections are rare, and the Indian cultural expectation
              to appear strong makes isolation worse.</p>
          </div>
          <div className="faq-item">
            <h3>I moved to London from India and feel lonely. Is that normal?</h3>
            <p>Extremely normal. The first year especially is hard. Building real friendships takes time and the
              loneliness is not a personal failure. It does not have to be carried alone.</p>
          </div>
          <div className="faq-item">
            <h3>I have Indian friends in London but still feel lonely. Why?</h3>
            <p>Loneliness is about depth of connection, not headcount. If your friendships feel surface-level,
              that gap is real and worth addressing.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk just because I feel lonely?</h3>
            <p>Yes, always. Feeling lonely is one of the most legitimate reasons to reach out. "I live in
              London and feel completely alone" is more than enough.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes are free. Then £8 for 15 min, £12 for 30 min, £16 for 45 min.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-loneliness">Loneliness support UK →</a>
          <a href="/uk-nri-support">NRI support UK →</a>
          <a href="/uk-talk-to-someone">Talk to someone UK →</a>
          <a href="/uk-winter-loneliness">Winter loneliness UK →</a>
          <a href="/british-indian-support">British Indian identity →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
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
