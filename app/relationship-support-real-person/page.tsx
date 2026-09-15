import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Get Relationship Support from a Real Person — Not an AI | LeanOn',
  description: 'Relationship problems need a human ear, not an algorithm. LeanOn connects you with real peer listeners who have lived experience of relationships, breakups, and marriage stress. Anonymous, 24/7, first 5 min free.',
  keywords: [
    'relationship advice real person', 'someone to talk to about relationship problems',
    'relationship support online', 'relationship help online', 'talk about breakup online',
    'relationship advice not ai', 'peer support relationship', 'relationship listener online',
    'talk about marriage problems', 'breakup support online india',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/relationship-support-real-person',
  },
  openGraph: {
    title: 'Relationship Support from a Real Person | LeanOn',
    description: 'Relationship problems need a human ear, not an algorithm. LeanOn connects you with peer listeners who have real lived experience — available 24/7, first 5 minutes free.',
    url: 'https://www.leanon.app/relationship-support-real-person',
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
      name: 'Where can I get relationship advice from a real person online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with peer listeners who have real lived experience of relationships, breakups, marriage stress, and emotional disconnection — available 24/7, first 5 minutes free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn relationship advice or therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn is peer support — a real human who listens and helps you process your feelings about a relationship. It is not professional therapy or couples counseling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about my relationship problems anonymously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn sessions are fully anonymous. You do not need to share your name, your partner\'s name, or any identifying information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of relationship issues can I discuss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Breakups, arguments with a partner, feeling emotionally disconnected, arranged marriage stress, infidelity, long-distance relationships, divorce, or simply feeling unheard in your relationship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why talk to a human listener instead of asking an AI for relationship advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI gives generic advice based on patterns in data. A LeanOn listener brings genuine empathy and real human perspective — they have navigated real relationships and understand what it actually feels like.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Relationship Support — Real Person', item: 'https://www.leanon.app/relationship-support-real-person' },
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
  .compare-box{background:linear-gradient(135deg,#f0f8fc,#e0f2f7);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .compare-box h2{font-size:18px;font-weight:900;margin-bottom:16px;}
  .compare-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:8px;}
  .compare-col{background:white;border-radius:12px;padding:14px;}
  .compare-col h3{font-size:13px;font-weight:900;margin-bottom:8px;}
  .compare-col.ai h3{color:#999;}
  .compare-col.human h3{color:var(--teal);}
  .compare-col p{font-size:13px;line-height:1.65;color:#5A7A8A;}
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
  @media(max-width:480px){.related{grid-template-columns:1fr;}.compare-row{grid-template-columns:1fr;}}
`

export default function RelationshipSupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>Relationship Support — Real Person
        </div>

        <h1>Relationship Problems Need a Human Ear,<br />Not an Algorithm.</h1>
        <p className="lead">
          When you&apos;re dealing with a relationship problem — a fight, a breakup, a slow drift apart,
          the weight of feeling unheard — you don&apos;t need generic advice generated by AI. You need
          someone who has actually been there. LeanOn connects you with real peer listeners who understand
          relationships from the inside out.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Relationship situations LeanOn listeners understand</h2>
          <p>LeanOn listeners are real people who have navigated their own complex relationships. They bring
            genuine understanding — not textbook advice — to conversations like:</p>
          <ul className="checklist">
            <li>A recent breakup that still doesn&apos;t feel real</li>
            <li>A recurring argument with a partner with no resolution in sight</li>
            <li>Feeling emotionally disconnected from someone you love</li>
            <li>The loneliness of an arranged marriage that isn&apos;t working</li>
            <li>Long-distance relationship strain and the doubt it creates</li>
            <li>Processing infidelity — whether yours or your partner&apos;s</li>
            <li>A friendship that ended and left a gap you don&apos;t know how to fill</li>
            <li>Divorce or separation and the grief it brings</li>
            <li>Simply feeling unheard, unappreciated, or invisible in a relationship</li>
          </ul>
        </div>

        <div className="compare-box">
          <h2>AI relationship advice vs. a real LeanOn listener</h2>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Relationship Advice</h3>
              <p>Generic patterns from millions of texts. It has never had a relationship or felt heartbreak.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Listener</h3>
              <p>A real person with real relationship experience — including the painful, complicated parts.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Relationship Advice</h3>
              <p>Tells you what to do. Optimises for sounding helpful, not for understanding your specific situation.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Listener</h3>
              <p>Listens first. Asks questions. Helps you understand what you actually feel and what you actually need.</p>
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-col ai">
              <h3>🤖 AI Relationship Advice</h3>
              <p>No confidentiality or context — your words go into a training dataset, not to a person who cares.</p>
            </div>
            <div className="compare-col human">
              <h3>💙 LeanOn Real Listener</h3>
              <p>Fully anonymous. What you share stays between you and your listener. No names needed.</p>
            </div>
          </div>
        </div>

        <div className="night-box">
          <h2>💔 When relationship pain hits at the worst time</h2>
          <p>
            Relationship pain doesn&apos;t wait for a convenient hour. It hits at midnight after a fight,
            at 3 AM when your mind won&apos;t stop, on a Sunday when your friends are all busy.
          </p>
          <p>
            LeanOn listeners are available 24/7 — including right now. You don&apos;t have to sit alone
            with whatever you&apos;re carrying.
          </p>
          <a href="/browse" className="cta-night">Find a listener who understands →</a>
        </div>

        <div className="cta">
          <h2>A real person is ready to listen</h2>
          <p>Anonymous, no judgment, available now. First 5 minutes free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Where can I get relationship advice from a real person online?</h3>
            <p>LeanOn connects you with peer listeners who have real lived experience of relationships,
              breakups, marriage stress, and emotional disconnection — available 24/7, first 5 minutes free.</p>
          </div>
          <div className="faq-item">
            <h3>Is LeanOn relationship advice or therapy?</h3>
            <p>LeanOn is peer support — a real human who listens and helps you process your feelings about
              a relationship. It is not professional therapy or couples counseling.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk about my relationship problems anonymously?</h3>
            <p>Yes. LeanOn sessions are fully anonymous. You do not need to share your name, your
              partner&apos;s name, or any identifying information.</p>
          </div>
          <div className="faq-item">
            <h3>What kind of relationship issues can I discuss?</h3>
            <p>Breakups, arguments with a partner, feeling emotionally disconnected, arranged marriage
              stress, infidelity, long-distance relationships, divorce, or simply feeling unheard in
              your relationship.</p>
          </div>
          <div className="faq-item">
            <h3>Why talk to a human listener instead of asking an AI for relationship advice?</h3>
            <p>AI gives generic advice based on patterns in data. A LeanOn listener brings genuine empathy
              and real human perspective — they have navigated real relationships and understand what it
              actually feels like.</p>
          </div>
        </div>

        <div className="related">
          <a href="/talk-to-real-person-not-ai">Real person vs AI →</a>
          <a href="/vent-to-a-real-person-online">Vent to someone →</a>
          <a href="/relationship-advice-online-india">Relationship advice India →</a>
          <a href="/emotional-support-without-ai">Emotional support →</a>
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
