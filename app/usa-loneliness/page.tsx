import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in the USA — The Silent Side of the American Dream | LeanOn',
  description: 'Millions of Indians in the USA feel deeply lonely — in suburbs with no community, in tech jobs with no warmth, missing home across time zones. LeanOn connects you with a real Indian listener who gets it.',
  keywords: [
    'lonely in usa indian', 'indian loneliness usa', 'nri loneliness america', 'feeling lonely usa',
    'indian american loneliness', 'south asian loneliness usa', 'desi loneliness america',
    'feeling isolated usa', 'lonely in america indian', 'talk to someone usa indian',
    'nri emotional support usa', 'indian community usa loneliness',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-loneliness',
    languages: { 'en-US': 'https://www.leanon.app/usa-loneliness' },
  },
  openGraph: {
    title: 'Feeling Lonely in the USA — The Silent Side of the American Dream',
    description: 'You moved to America for a better life. Nobody told you it would feel this empty. LeanOn peer listeners are Indian, they understand, and they are available right now.',
    url: 'https://www.leanon.app/usa-loneliness',
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
      name: 'Why do Indians in the USA feel so lonely even in big cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'American suburbs are designed around cars, not community. You can live next to someone for five years and never learn their name. Add the pressure of H-1B status, cultural displacement, and missing India — the loneliness becomes deeply specific and hard to explain to people who have not lived it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there someone I can talk to who understands NRI loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn peer listeners include many Indians who have lived the NRI experience — the immigration stress, the culture shift, the missing home. They are not therapists, but they understand in a way that most American counselors simply do not.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LeanOn cost in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions start at $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first 5 minutes free — once per listener. Compare that to $200/hour for therapy — LeanOn is accessible emotional support whenever you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener in Hindi or my regional language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and other Indian languages. Filter by language when you browse to find someone who speaks yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I just want to talk and not be judged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is exactly what LeanOn is for. No diagnosis, no advice unless you ask, no judgment. Just a warm, attentive human on the other side — available 24/7, even at 2 AM when the time zone gap to India feels widest.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support USA', item: 'https://www.leanon.app/usa-loneliness' },
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

export default function UsaLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support USA
        </div>

        <h1>You Moved to America for a Better Life.<br />Nobody Told You It Would Feel This Empty.</h1>
        <p className="lead">
          The American Dream has a side nobody posts on Instagram. Huge houses, good salaries, and a loneliness
          so deep it sometimes feels worse than anything you left behind. If you are Indian and living in the USA,
          you already know what we are talking about.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>NRI loneliness looks very specific</h2>
          <p>It is not just &quot;feeling sad.&quot; It is something very particular to being Indian in America:</p>
          <ul className="checklist">
            <li>Suburbs where you drive everywhere and know no one on your street.</li>
            <li>A big Indian community in the Bay Area or New Jersey — but somehow still feeling completely alone.</li>
            <li>Missing India for Diwali, missing weddings, missing funerals you could not attend.</li>
            <li>WhatsApp calls with family that end and leave you feeling more alone than before.</li>
            <li>American colleagues who are polite but never really warm — no one invites you home.</li>
            <li>Being the &quot;model minority&quot; means you are not allowed to be struggling.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this is real. All of this is enough reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>🌙 It hits hardest at 11 PM when India is sleeping</h2>
          <p>You want to call someone but it is 9:30 AM in Mumbai and they are rushing to work.
            You do not want to be a burden. So you scroll your phone until you fall asleep, alone with it.</p>
          <p>LeanOn listeners are available 24/7, including late at night US time. You do not need to wait for morning.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Why American therapy often misses the point</h2>
          <p>You book a therapist — $200 an hour, six-week waitlist — and spend half the session explaining
            what an H-1B is, what your parents expect, why you feel guilty for leaving India. They nod
            sympathetically but they do not really understand the cultural weight of it all.</p>
          <p>LeanOn listeners are people who have lived the Indian experience. Many are themselves NRIs or
            have family abroad. They do not need the background explained. They already get it.</p>
          <p>Sessions start at <strong>$10 for 15 minutes</strong> — your first 5 minutes free — once per listener.</p>
        </div>

        <div className="card">
          <h2>Who talks to LeanOn from the USA?</h2>
          <ul className="checklist">
            <li>H-1B workers anxious about layoffs and what job loss means for their visa</li>
            <li>Couples where one partner has adapted faster to American life and the gap is growing</li>
            <li>Indian parents raising kids in the US who feel they are losing their culture</li>
            <li>Students on F-1 visas far from family, overwhelmed and unsure who to talk to</li>
            <li>People who moved abroad alone and are carrying enormous family expectations</li>
            <li>Anyone who has been fine on paper but quietly falling apart inside</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>$10 for 15 min · $15 for 30 min · $20 for 45 min · First 5 min always free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do Indians in the USA feel so lonely even in big cities?</h3>
            <p>American suburbs are designed around cars, not community. You can live next to someone for five years
              and never learn their name. Add H-1B pressure, cultural displacement, and missing India — the
              loneliness becomes deeply specific and hard to explain.</p>
          </div>
          <div className="faq-item">
            <h3>Is there someone I can talk to who understands NRI loneliness?</h3>
            <p>Yes. LeanOn peer listeners include many Indians who have lived the NRI experience — the immigration
              stress, the culture shift, the missing home. They understand in a way most American counselors do not.</p>
          </div>
          <div className="faq-item">
            <h3>How much does LeanOn cost in the USA?</h3>
            <p>Sessions start at $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes. Your first
              5 minutes free — once per listener — far more accessible than $200/hour therapy.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk in Hindi or my regional language?</h3>
            <p>Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, and more.
              Filter by language when you browse to find someone who speaks yours.</p>
          </div>
          <div className="faq-item">
            <h3>What if I just want to talk without being judged?</h3>
            <p>That is exactly what LeanOn is for. No diagnosis, no advice unless you ask, no judgment.
              Just a warm human on the other side — available 24/7.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-nri-support">Emotional support for NRIs →</a>
          <a href="/usa-h1b-visa-stress">H-1B visa stress →</a>
          <a href="/usa-talk-to-someone">Someone to talk to in the USA →</a>
          <a href="/indian-american-loneliness">Indian-American loneliness →</a>
          <a href="/usa-rant-to-someone">Need to rant? →</a>
          <a href="/desi-usa-support">Desi community support →</a>
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
