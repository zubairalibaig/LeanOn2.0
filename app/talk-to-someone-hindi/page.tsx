import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Talk to Someone in Hindi Online | Peer Support in Hindi | LeanOn',
  description: 'Need to talk to someone in Hindi? LeanOn listeners speak Hindi and understand the Indian emotional context. No appointment. First 5 minutes free.',
  keywords: ['talk to someone in hindi', 'hindi emotional support', 'hindi peer support', 'speak hindi online support', 'hindi speaking listener', 'hindi mental health support online', 'apni baat karo hindi mein'],
  alternates: { canonical: 'https://www.leanon.app/talk-to-someone-hindi' },
  openGraph: { title: 'Talk to Someone in Hindi Online | Peer Support in Hindi | LeanOn', description: 'Need to talk to someone in Hindi? LeanOn listeners speak Hindi and understand the Indian emotional context. No appointment. First 5 minutes free.', url: 'https://www.leanon.app/talk-to-someone-hindi', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Are all listeners fluent in Hindi?', acceptedAnswer: { '@type': 'Answer', text: 'Most are. Hindi is the primary language of many listeners. When booking, you can note your language preference and your listener will communicate with you in Hindi.' } },
  { '@type': 'Question', name: 'Can I mix Hindi and English (Hinglish)?', acceptedAnswer: { '@type': 'Answer', text: 'Of course. Listeners are completely comfortable with Hinglish — most conversations naturally mix both. Say what feels natural. There is no pressure to stay in one language.' } },
  { '@type': 'Question', name: 'I\'m abroad — is this available for me?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn works globally. Listeners are India-based but serve anyone with a phone number, wherever you are — UK, USA, Canada, UAE, Australia, or anywhere else Indians live and work.' } },
  { '@type': 'Question', name: 'Is it free?', acceptedAnswer: { '@type': 'Answer', text: 'The first 5 minutes of every session are completely free. If the connection feels right, paid sessions start from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Talk to Someone in Hindi Online', item: 'https://www.leanon.app/talk-to-someone-hindi' },
] }

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .hero{margin-bottom:48px;}
  .badge{display:inline-block;background:var(--light);border:1.5px solid var(--border);color:var(--teal);font-size:12px;font-weight:800;padding:6px 14px;border-radius:50px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;margin-bottom:28px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .related a{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);display:block;}
  .related a:hover{border-color:var(--teal);color:var(--teal);}
  .crisis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;font-size:13px;color:var(--gray);line-height:1.7;text-align:center;}
  .crisis strong{color:var(--navy);}
`

export default function TalkToSomeoneHindiPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Talk to Someone in Hindi Online</span></nav>
        <div className="hero">
          <p className="badge">Hindi Support &middot; Apni Bhasha &middot; NRI &amp; India</p>
          <h1>&#2310;&#2346;&#2344;&#2368; &#2348;&#2366;&#2340;, <em>&#2310;&#2346;&#2344;&#2368; &#2349;&#2366;&#2359;&#2366; &#2350;&#2375;&#2306;&#2404;</em> (Your words, in your language.)</h1>
          <p className="lead">Some things can only be said properly in Hindi. The exact words your mother used. The feeling that has no English translation. The conversation you&rsquo;ve been rehearsing in your head &mdash; in Hindi &mdash; for weeks. Talk to a real peer listener who speaks Hindi. Anywhere in the world. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">&#2309;&#2349;&#2368; &#2348;&#2366;&#2340; &#2325;&#2352;&#2375;&#2306; &rarr;</a>
        </div>
        <div className="section">
          <h2>Why Hindi matters in emotional conversations</h2>
          <p>Code-switching takes energy. When you are already carrying something heavy, the additional effort of translating not just words but entire emotional landscapes into a second language adds weight. Some feelings have Hindi words &mdash; words like &ldquo;ghabrahat&rdquo; or &ldquo;akela pan&rdquo; or &ldquo;mann bhar aana&rdquo; &mdash; that do not survive translation with their full meaning intact. The English approximation is not the same thing.</p>
          <p>Being heard in your mother tongue feels different. It is not just familiarity &mdash; it is the difference between performing understanding and actually being understood. When you speak in Hindi, you are not managing how you sound. You are saying the actual thing. That changes the quality of being heard.</p>
          <p>It is not just language, it is context. A Hindi-speaking listener in India already knows what a joint family Sunday sounds like, what &ldquo;log kya kahenge&rdquo; costs you, what it means to be the eldest. The cultural reference points are shared. You can start from where you actually are instead of from the beginning.</p>
        </div>
        <div className="section">
          <h2>Who calls from where</h2>
          <p><strong>India:</strong> From every state &mdash; UP, Bihar, Delhi, MP, Rajasthan, Uttarakhand, and beyond. People in cities far from home. People in metros who miss their qasbas. People who grew up speaking Hindi and find English-only support services hollow.</p>
          <p><strong>Abroad:</strong> UK, USA, Canada, UAE, Australia, Singapore &mdash; wherever Indians live and work. The Indian community across the Gulf, where Hindi is a shared language across states. The desi diaspora in Brampton, Edison, Houston, Birmingham. The language connects across distance and time zones.</p>
          <p>Hindi is not just a regional language &mdash; it is a cultural frequency. Wherever you are, if this is the language your internal voice uses, there are listeners waiting for it.</p>
        </div>
        <div className="section">
          <h2>How it works</h2>
          <p>Sign up with your phone number. No last name, no photo, no social account needed &mdash; just a number. Browse listeners who are currently online. Start a free 5-minute session. In the session notes, mention that you prefer Hindi &mdash; or simply start speaking and your listener will follow.</p>
          <p>Sessions are text-based. No video, no voice &mdash; just text. This makes it easier to be honest, easier to say the thing you have been holding. The first 5 minutes are free. If it feels right, you continue. If not, you end and pay nothing. From ₹160 for 15 minutes after the free session.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Apni baat, apni bhasha mein.</h2><p>Hindi-speaking peer listeners. India-based. Available now. First 5 minutes free.</p><a href="/browse" className="btn-cta">Listener dhundhe &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indian-diaspora-support">Indian diaspora support &rarr;</a>
          <a href="/talk-to-someone-online">Talk to someone online &rarr;</a>
          <a href="/someone-to-talk-to">Someone to talk to &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
