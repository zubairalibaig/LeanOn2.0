import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tamil NRI Support Online | Talk to Someone Who Gets It | LeanOn',
  description: 'Tamil NRIs in UK, USA, Canada, Australia — the homesickness, family pressure, and identity weight are real. Talk to Tamil listeners who understand.',
  keywords: ['tamil nri support', 'tamil diaspora loneliness', 'tamils abroad', 'nri tamil uk', 'nri tamil usa', 'tamil people abroad', 'talk to tamil person online'],
  alternates: { canonical: 'https://www.leanon.app/tamil-nri-support' },
  openGraph: { title: 'Tamil NRI Support Online | Talk to Someone Who Gets It | LeanOn', description: 'Tamil NRIs in UK, USA, Canada, Australia — the homesickness, family pressure, and identity weight are real. Talk to Tamil listeners who understand.', url: 'https://www.leanon.app/tamil-nri-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can I talk in Tamil?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many LeanOn listeners speak Tamil. When you start browsing, you can look for Tamil-speaking listeners and mention your language preference at the start of the session.' } },
  { '@type': 'Question', name: 'Do listeners understand the pressure from Chennai or Coimbatore families specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tamil listeners understand the regional dynamics — the weight of family reputation, arranged marriage expectations, caste conversations that follow you abroad, and the particular brand of Tamil pride that comes with being from a family that worked hard to send you.' } },
  { '@type': 'Question', name: 'Is this completely confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your family, your community, and your colleagues will never know. Nothing is shared or stored beyond the session.' } },
  { '@type': 'Question', name: 'I am in the UK or USA. What time can I call?', acceptedAnswer: { '@type': 'Answer', text: 'India listeners are active evenings IST (6pm–11pm). From the UK (BST), that is 1:30pm–6:30pm. From the US East Coast, that is 8:30am–1:30pm. From the West Coast, 5:30am–10:30am. Morning sessions in the US often work well.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first 5-minute session is free. Sessions from US$10 for 15 minutes. No subscription, no commitment. Pay only if the session feels right after the first 5 minutes.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Tamil NRI Support', item: 'https://www.leanon.app/tamil-nri-support' },
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

export default function TamilNriSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Tamil NRI Support</span></nav>
        <div className="hero">
          <p className="badge">Tamil NRI &middot; Diaspora Support &middot; Peer Listening</p>
          <h1>You carry Tamil pride abroad. <em>But who carries you?</em></h1>
          <p className="lead">The Tamil diaspora spans the UK, USA, Canada, Singapore, and Australia. Wherever you landed, you brought with you the weight of family expectations from Chennai or Coimbatore, the pressure to represent your culture well, and the quiet loneliness of being between two worlds. Talk to a Tamil peer listener who understands without explanation. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Tamil Abroad Experience Nobody Fully Articulates</h2>
          <p>Tamil families have one of the highest rates of overseas migration in India. You are part of a diaspora that spans generations — some of you are first-generation immigrants carrying the full weight of your family&rsquo;s hopes, others are second-generation carrying the confusion of belonging fully to neither place. Both are lonely in different ways, and both are real.</p>
          <p>There is the pressure to be &ldquo;settled abroad&rdquo; — a performance that begins before you even leave. Every call home is a status update. Every visit back is scrutinised. The &ldquo;nalla irukkiya?&rdquo; (are you doing well?) from your relatives is not just a greeting — it is a check on whether the sacrifice and the sending-away was worth it. You say yes. You are usually not entirely telling the truth.</p>
          <p>And then there is the Tamil identity itself: the language pride, the Carnatic music you miss, Pongal celebrated in a cold flat, the caste conversations that follow you abroad even when you thought you had left them behind. LeanOn listeners understand this specific weight. You do not have to explain it. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Between First-Gen and Second-Gen</h2>
          <p>If you are first-generation Tamil abroad, the loneliness is often about what you left. If you are second-generation, it is often about not being fully accepted in either place — too Tamil for your English friends, not Tamil enough for your grandparents. Both are real experiences that deserve space.</p>
          <p>Arranged marriage pressure in Tamil families is its own category of stress abroad — the deadlines that start arriving around 25, the WhatsApp matrimonial groups, the distant relatives who treat your relationship status as community property. Managing this from 8,000 miles away, without the normal pressure-release valves of community and family proximity, is exhausting.</p>
          <p>LeanOn peer listeners understand the Tamil social fabric — not just the loneliness of being far, but the specific cultural pressures that come with being Tamil and abroad. They will listen without judgment to the things you cannot say to your parents or your Tamil community friends, because those conversations carry too much weight to be honest.</p>
        </div>

        <div className="section">
          <h2>This Is Not a Helpline. It Is a Real Conversation.</h2>
          <p>LeanOn listeners are not volunteers reading scripts. They are real people with lived experience — some have family abroad, some have navigated dual identity themselves, all have been trained to listen without advising, judging, or redirecting. You talk. They hear you. That is the whole thing.</p>
          <p>Sessions are anonymous. Phone number and first name only. Your community in Wembley or Scarborough or Sunnyvale will never know. The conversation is between you and your listener, and it stays there.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You don&rsquo;t have to explain yourself to a Tamil listener.</h2><p>They already know the shape of it. First 5 minutes free. Sessions from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
