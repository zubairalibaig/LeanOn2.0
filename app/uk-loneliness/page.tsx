import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Lonely in the UK? You\'re Not the Only One. | LeanOn',
  description: 'Living in the UK but feeling completely alone — far from family, grey skies, no one who really gets it. LeanOn connects you with a real Indian peer listener, available 24/7.',
  keywords: [
    'feeling lonely in the uk', 'loneliness uk indians', 'lonely in uk nri', 'south asian loneliness uk',
    'indian living in uk lonely', 'missing family uk', 'uk loneliness support', 'talk to someone uk',
    'lonely in britain', 'nri loneliness uk', 'emotional support uk indians',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/uk-loneliness',
    languages: { 'en-GB': 'https://www.leanon.app/uk-loneliness' },
  },
  openGraph: {
    title: 'Feeling Lonely in the UK — Talk to Someone Who Understands',
    description: 'Grey skies, far from home, no one who really gets it. LeanOn peer listeners are available 24/7 — real humans, not bots.',
    url: 'https://www.leanon.app/uk-loneliness',
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
      name: 'Why do Indians feel so lonely in the UK even in big cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The UK has large Indian communities in cities like Leicester, Southall, and Birmingham — yet many Indians still feel deeply isolated. Being surrounded by people from your culture does not automatically mean feeling understood. The pressure to appear settled and successful, combined with missing the warmth of life back home, creates a unique kind of loneliness that is hard to explain to anyone who has not lived it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the UK weather really make loneliness worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and this is well-documented. Grey skies, short winter days, and lack of sunlight can trigger Seasonal Affective Disorder (SAD), which amplifies feelings of sadness, disconnection, and low energy. Coming from a sunny country like India makes the seasonal shift feel even more stark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel lonely even after years of living in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Loneliness is not a phase you simply grow out of. Many NRIs who have lived in the UK for years still carry a quiet ache — missing the spontaneity of Indian family life, the familiarity, the food, the noise. That longing does not mean you have failed at settling. It means you loved where you came from.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session with a LeanOn listener cost from the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are completely free — no card needed upfront. After that, paid sessions are £8 for 15 minutes, £12 for 30 minutes, or £16 for 45 minutes. All listeners are peer-trained Indians who understand the NRI experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a listener who understands the Indian and UK experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn listeners are Indians — many are NRIs themselves or understand the NRI context deeply. You can browse listener profiles and choose someone whose background resonates with yours.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Loneliness Support UK', item: 'https://www.leanon.app/uk-loneliness' },
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

export default function UkLonelinessPage() {
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
          <a href="/">Home</a><span>›</span>Loneliness Support UK
        </div>

        <h1>The Grey Skies Don&apos;t Help.<br />Neither Does Pretending You&apos;re Fine.</h1>
        <p className="lead">
          You moved to the UK with plans and ambition. But somewhere between the commute, the cold, and the
          video calls that never feel like enough — a quiet loneliness crept in. You are not broken.
          You are just far from everything that felt like home.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>UK loneliness hits differently when you are Indian</h2>
          <p>It is not just being far from family. It is a specific kind of ache:</p>
          <ul className="checklist">
            <li>Living in Leicester or Southall — surrounded by Indians, but still feeling alone</li>
            <li>Grey October skies arriving and your mood crashing with them</li>
            <li>Video calls with parents that feel more like performance than connection</li>
            <li>Work friends who are friendly enough, but no one who truly gets you</li>
            <li>Weekends that feel endless and hollow instead of restful</li>
            <li>Being asked &ldquo;how&apos;s England treating you?&rdquo; — and saying &ldquo;great!&rdquo; because what else do you say</li>
          </ul>
          <p style={{ marginTop: '12px' }}>All of this is real. And all of it is enough reason to reach out.</p>
        </div>

        <div className="night-box">
          <h2>🌧️ When winter nights feel the heaviest</h2>
          <p>November in the UK. Dark by 4 PM. You are in your flat, heating on, and the silence is
            deafening. This is when loneliness peaks — and when LeanOn listeners are most available.</p>
          <p>You do not have to wait until morning. You can talk to a real person right now.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>What makes LeanOn different from just calling a friend</h2>
          <p>Friends are wonderful — but they have their own lives, their own problems, and their own opinions
            about what you should do. A LeanOn listener is different. They are there only for you, in that
            moment. No agenda. No advice unless you want it. No judgment.</p>
          <p>They are also Indian, which means you do not have to translate the feeling of being an NRI.
            They already understand the weight of it.</p>
        </div>

        <div className="card">
          <h2>Pricing in GBP — transparent and affordable</h2>
          <p>Your first 5 minutes are completely free. After that:</p>
          <ul className="checklist">
            <li>15 minutes — £8</li>
            <li>30 minutes — £12</li>
            <li>45 minutes — £16</li>
          </ul>
          <p style={{ marginTop: '12px' }}>No subscription. No hidden fees. Pay only for the time you use.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Real humans, not bots. Indian listeners who understand the NRI experience.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why do Indians feel so lonely in the UK even in big cities?</h3>
            <p>Being surrounded by people from your culture does not automatically mean feeling understood.
              The pressure to appear settled and successful, combined with missing the warmth of life back home,
              creates a unique loneliness that is hard to explain to anyone who has not lived it.</p>
          </div>
          <div className="faq-item">
            <h3>Does the UK weather really make loneliness worse?</h3>
            <p>Yes — grey skies and short winter days can trigger Seasonal Affective Disorder (SAD), which
              amplifies feelings of sadness and disconnection. Coming from a sunny country makes the shift
              feel even more stark.</p>
          </div>
          <div className="faq-item">
            <h3>Is it normal to feel lonely after years of living in the UK?</h3>
            <p>Absolutely. Many NRIs who have lived in the UK for years still carry a quiet ache — missing
              the spontaneity of Indian family life, the familiarity, the warmth. That longing does not mean
              you have failed at settling. It means you loved where you came from.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost from the UK?</h3>
            <p>Your first 5 minutes are free. After that: £8 for 15 min, £12 for 30 min, £16 for 45 min.
              No subscription required.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a listener who understands NRI life?</h3>
            <p>Yes. LeanOn listeners are Indians — many are NRIs themselves. You can browse profiles and
              choose someone whose background resonates with yours.</p>
          </div>
        </div>

        <div className="related">
          <a href="/uk-nri-support">NRI emotional support UK →</a>
          <a href="/uk-winter-loneliness">Winter loneliness UK →</a>
          <a href="/london-loneliness">Lonely in London →</a>
          <a href="/uk-mental-health-south-asian">South Asian mental health →</a>
          <a href="/uk-talk-to-someone">Talk to someone in the UK →</a>
          <a href="/british-indian-support">British Indian support →</a>
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
