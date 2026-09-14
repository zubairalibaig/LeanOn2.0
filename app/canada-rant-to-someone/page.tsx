import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Need to Rant? Someone to Listen in Canada | LeanOn',
  description: 'Immigration stress, work frustration, cost of living pressure — sometimes you just need to vent to someone who actually listens. LeanOn listeners are here for exactly this.',
  keywords: [
    'need to rant canada', 'someone to vent to canada', 'vent to someone canada',
    'immigration frustration canada', 'rant about work canada indian', 'need to talk canada',
    'frustrated in canada immigrant', 'south asian vent canada', 'stress relief canada',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/canada-rant-to-someone',
    languages: { 'en-CA': 'https://www.leanon.app/canada-rant-to-someone' },
  },
  openGraph: {
    title: 'Need to Rant? Someone to Listen in Canada | LeanOn',
    description: 'Tired of holding it all together? LeanOn peer listeners will hear you out — no judgment, no unsolicited advice, no "just think positive".',
    url: 'https://www.leanon.app/canada-rant-to-someone',
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
      name: 'Can I just rant without being given advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can tell your LeanOn listener upfront — "I just need to vent, I am not looking for advice right now." Listeners are trained to follow your lead. If you want to be heard without solutions being thrown at you, that is exactly what you will get.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay to rant about immigration or work frustration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and many people do. PR delays, Express Entry uncertainty, credential recognition frustrations, cost of living stress — these are legitimate, heavy burdens. You do not have to explain or justify why they upset you. A LeanOn listener is here to hear it all.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not even know what I want to say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is fine. Many sessions start with "I do not even know where to begin." Just start talking. Your listener will gently ask questions and you will find your way into it. You do not need to have it figured out before you reach out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a session cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first 5 minutes are free. After that: CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the listener judge me for what I say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn listeners are trained to listen without judgment. Whatever you are feeling — frustration, resentment, regret, anger — you can say it freely. This is a space where you do not have to manage other people\'s reactions to your emotions.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Rant to Someone Canada', item: 'https://www.leanon.app/canada-rant-to-someone' },
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

export default function CanadaRantPage() {
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
          <a href="/">Home</a><span>›</span>Rant to Someone Canada
        </div>

        <h1>You Do Not Need a Reason.<br />You Just Need Someone to Listen.</h1>
        <p className="lead">
          You have been holding it together for so long. The immigration stress, the work frustration,
          the cost of living, the loneliness — and nobody around you seems to have the time or the
          bandwidth to actually hear you. LeanOn listeners are here for exactly this.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone now — first 5 min free →</a>

        <div className="card">
          <h2>Things people come to LeanOn to get off their chest</h2>
          <ul className="checklist">
            <li>Another PR delay, another Express Entry round gone without a pick</li>
            <li>A manager who doesn&apos;t respect your Indian degree or your experience</li>
            <li>Groceries that cost twice what they did back home — for less</li>
            <li>Feeling invisible at work even though you are clearly overqualified</li>
            <li>A parent calling from India who doesn&apos;t understand why you are struggling</li>
            <li>The exhaustion of performing okay when you are very much not okay</li>
          </ul>
          <p style={{ marginTop: '12px' }}>You are allowed to feel all of this. You are allowed to say it out loud.</p>
        </div>

        <div className="night-box">
          <h2>😤 No advice. No silver linings. Just someone who listens.</h2>
          <p>How many times have you started to share something real and someone immediately said
            &quot;at least you have X&quot; or &quot;just think positive&quot;? It makes you feel worse, not better.</p>
          <p>LeanOn listeners are trained to NOT do that. You can rant, cry, repeat yourself, circle back.
            They will stay with you through all of it — without rushing you toward resolution.</p>
          <a href="/browse" className="cta-night">Find a listener online now →</a>
        </div>

        <div className="card">
          <h2>Why venting to a stranger can be easier</h2>
          <p>Friends and family are wonderful — but they have their own worries. They have opinions
            about your situation. They might repeat things. You end up managing their reaction while
            also trying to express your own feelings.</p>
          <p>A LeanOn listener has no stake in your story. No shared history to protect. No community
            to gossip with. Just your words, and their full attention.</p>
        </div>

        <div className="card">
          <h2>Session details</h2>
          <ul className="checklist">
            <li>First 5 minutes completely free — no credit card needed</li>
            <li>CA$14 for 15 min &nbsp;·&nbsp; CA$21 for 30 min &nbsp;·&nbsp; CA$28 for 45 min</li>
            <li>Real humans — not AI, not a bot, not a script</li>
            <li>Anonymous — your name and story stay with you</li>
            <li>Available evenings, weekends, midnight — whenever it builds up</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>Say the thing you have been holding back. It will feel lighter after.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Can I just rant without being given advice?</h3>
            <p>Absolutely. Tell your listener upfront — &quot;I just need to vent.&quot; Listeners are trained to
              follow your lead and will not push solutions on you if you do not want them.</p>
          </div>
          <div className="faq-item">
            <h3>Is it okay to rant about immigration or work frustration?</h3>
            <p>Yes — and many people do. PR delays, Express Entry stress, credential frustrations, cost of
              living pressure — all of it is valid and a LeanOn listener is here to hear it.</p>
          </div>
          <div className="faq-item">
            <h3>What if I do not even know what I want to say?</h3>
            <p>That is fine. Many sessions start with &quot;I do not know where to begin.&quot; Just start talking.
              Your listener will gently help you find your way into it.</p>
          </div>
          <div className="faq-item">
            <h3>How much does a session cost?</h3>
            <p>First 5 minutes free. Then CA$14 for 15 min, CA$21 for 30 min, CA$28 for 45 min.</p>
          </div>
          <div className="faq-item">
            <h3>Will the listener judge me for what I say?</h3>
            <p>No. LeanOn listeners are trained to listen without judgment. Whatever you are feeling —
              frustration, resentment, regret, anger — you can say it freely here.</p>
          </div>
        </div>

        <div className="related">
          <a href="/canada-loneliness">Loneliness in Canada →</a>
          <a href="/canada-immigration-stress">Immigration anxiety →</a>
          <a href="/canada-talk-to-someone">Someone to talk to →</a>
          <a href="/canada-empathy-listener">Empathy listener →</a>
          <a href="/desi-canada-support">Desi community support →</a>
          <a href="/canada-nri-support">NRI emotional support →</a>
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
