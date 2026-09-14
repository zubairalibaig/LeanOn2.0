import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Relationship Support for Indians in the USA — Cultural Drift, Long-Distance & More | LeanOn',
  description: 'Moving to the USA puts enormous strain on Indian relationships. Cultural drift, arranged vs love marriage tensions, long-distance stress — talk to a peer listener who truly understands.',
  keywords: [
    'relationship advice indians usa', 'nri relationship problems', 'indian couple usa counseling',
    'arranged marriage usa problems', 'long distance relationship india usa', 'indian marriage usa stress',
    'south asian relationship support usa', 'desi couple issues america', 'nri marriage advice',
    'cultural drift indian couple usa', 'indian american relationship help',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-relationship-advice',
    languages: { 'en-US': 'https://www.leanon.app/usa-relationship-advice' },
  },
  openGraph: {
    title: 'Relationship Support for Indians in the USA — Cultural Drift, Long-Distance & More',
    description: 'Indian relationships in America face unique pressures. LeanOn peer listeners understand the cultural weight — no explaining needed.',
    url: 'https://www.leanon.app/usa-relationship-advice',
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
      name: 'Why do Indian couples in the USA face more relationship strain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you move abroad, you and your partner adapt at different rates. One of you embraces American culture faster. The other feels left behind or pressured to change. Add visa stress, no family support system, and the constant pressure to appear successful — and small cracks become real fractures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a LeanOn listener help with arranged marriage tensions in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners are familiar with the nuances of arranged marriage — the family pressure, the adjustment period, the gap between expectations and reality. They will listen without judgment and help you think through what you are feeling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my partner and I are growing apart culturally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cultural drift is one of the most common but least talked-about relationship challenges for Indians in the USA. A LeanOn listener can help you process your feelings and figure out what you actually need — whether that is a conversation with your partner, some perspective, or just to be heard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a replacement for couples therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support, not professional therapy. But for many people, it is a first safe step — a place to untangle your thoughts before (or instead of) more formal counseling. Sessions start at $10 for 15 minutes, with your first 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my long-distance relationship with someone in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. The India-USA long-distance dynamic — time zones, family pressure, guilt, uncertainty about the future — is something LeanOn listeners understand deeply. You do not need to explain the context. They already get it.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support USA', item: 'https://www.leanon.app/usa-relationship-advice' },
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

export default function UsaRelationshipAdvicePage() {
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
          <a href="/">Home</a><span>›</span>Relationship Support USA
        </div>

        <h1>Your Relationship Was Fine in India.<br />America Changed Something.</h1>
        <p className="lead">
          Moving to the USA is supposed to be the beginning of something great. But for so many Indian couples,
          it is also when cracks quietly start to appear. Cultural drift, long-distance strain, arranged marriage
          adjustments, family pressure from 8,000 miles away — it is a lot to carry, often in silence.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>What relationship strain looks like for Indians in the USA</h2>
          <ul className="checklist">
            <li>One of you adapts to American life faster — and the gap quietly widens.</li>
            <li>Your parents back home have opinions about every decision you make together.</li>
            <li>You are on H-1B and dependent on each other in ways that create new power dynamics.</li>
            <li>Arranged marriage adjustments are hard enough in India — in America, without family support, they are harder.</li>
            <li>You miss the weddings, the festivals, the moments that would have strengthened your bond back home.</li>
            <li>You are both working hard, both exhausted, and connection has become a low priority.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>💬 You need to say it out loud to someone</h2>
          <p>Sometimes you just need to talk through what you are feeling — not get advice, not fix anything,
            just say it out loud to someone who will not judge you and will not tell your family.</p>
          <p>LeanOn listeners are that person. Warm, Indian-context aware, and completely confidential.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Arranged vs love marriage tensions in the USA</h2>
          <p>American culture is loud about individual choice, freedom, and &quot;following your heart.&quot;
            You are trying to build a marriage that honours your family, your culture, and your own needs
            — and those things sometimes point in different directions.</p>
          <p>LeanOn listeners understand this tension without needing it explained. Many have navigated it
            themselves or with people close to them. They are not here to tell you what to do — they are
            here to help you figure out what you actually need.</p>
        </div>

        <div className="card">
          <h2>Long-distance relationships across time zones</h2>
          <p>If you are on an H-1B with a partner still waiting in India, you already know how brutal the
            time zone gap is. Calls at odd hours, visa delays, the constant question of &quot;when will this end?&quot;
            — it wears you down in ways that are hard to explain to people who have not lived it.</p>
          <p>Talk to a LeanOn listener who has been there. Not to solve it — just to feel less alone in it.</p>
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
            <h3>Why do Indian couples in the USA face more relationship strain?</h3>
            <p>When you move abroad, you and your partner adapt at different rates. Add visa stress, no family
              support system, and pressure to appear successful — and small cracks become real fractures.</p>
          </div>
          <div className="faq-item">
            <h3>Can a LeanOn listener help with arranged marriage tensions in the USA?</h3>
            <p>Yes. Many LeanOn listeners understand the nuances of arranged marriage — the family pressure, the
              adjustment period, the gap between expectations and reality. They will listen without judgment.</p>
          </div>
          <div className="faq-item">
            <h3>What if my partner and I are growing apart culturally?</h3>
            <p>Cultural drift is one of the most common but least talked-about challenges for Indians in the USA.
              A LeanOn listener can help you process your feelings and figure out what you actually need.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn a replacement for couples therapy?</h3>
            <p>LeanOn is peer support, not professional therapy. But for many people it is a first safe step —
              a place to untangle your thoughts. Sessions start at $10 for 15 minutes, first 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about my long-distance relationship with someone in India?</h3>
            <p>Absolutely. The India-USA long-distance dynamic — time zones, family pressure, guilt, uncertainty
              about the future — is something LeanOn listeners understand deeply. No background explanation needed.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-nri-support">Emotional support for NRIs →</a>
          <a href="/usa-empathy-listener">Empathy listener USA →</a>
          <a href="/desi-usa-support">Desi community support →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-rant-to-someone">Need to rant? →</a>
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
