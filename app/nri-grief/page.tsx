import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Grief | When Loss Happens 8,000 Miles Away | LeanOn',
  description: "Losing someone in India when you're abroad is a grief that multiplies. You couldn't be there. You watched it on a phone screen. Talk to someone who understands this specific pain.",
  keywords: ['nri grief', 'death in family india abroad', 'nri bereavement', 'grieving from abroad', 'funeral india nri', 'loss from far away', 'nri missing death'],
  alternates: { canonical: 'https://www.leanon.app/nri-grief' },
  openGraph: { title: 'NRI Grief | When Loss Happens 8,000 Miles Away | LeanOn', description: "Losing someone in India when you're abroad is a grief that multiplies. You couldn't be there. You watched it on a phone screen. Talk to someone who understands this specific pain.", url: 'https://www.leanon.app/nri-grief', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Can LeanOn listeners understand NRI bereavement specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and understand the specific weight of NRI grief — learning of a death on WhatsApp, watching a funeral on a video call, the guilt of not being there, the inability to grieve with the community, and the way the loss sits differently when the distance was physical as well as emotional.' } },
  { '@type': 'Question', name: 'I feel guilty that I wasn\'t there when my parent died. Is that normal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is one of the most common experiences NRIs carry after a loss. The guilt of not being there — regardless of whether you could have been — is a real part of NRI grief. It can sit for years. Talking about it with someone who understands the context is important.' } },
  { '@type': 'Question', name: 'I had to go back to work three days after my parent died because I couldn\'t take more leave. Can I talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The expectation that you return to work quickly, navigate a foreign HR system\'s bereavement policy, and continue performing professionally while grieving is a specific NRI burden. Listeners can hold this without judgment.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'The grief happened months or years ago. Is it too late to talk about it?', acceptedAnswer: { '@type': 'Answer', text: 'No. NRI grief often resurfaces long after the event — sometimes because you never properly grieved at the time, sometimes because anniversaries or family events bring it back, sometimes because the guilt has been accumulating quietly for years. It is never too late to talk about loss.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Grief', item: 'https://www.leanon.app/nri-grief' },
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

export default function NriGriefPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Grief</span></nav>
        <div className="hero">
          <p className="badge">NRI Grief &middot; Loss from Abroad &middot; Bereavement</p>
          <h1>You found out on WhatsApp. <em>The body was 8,000 miles away.</em></h1>
          <p className="lead">NRI bereavement is a grief that multiplies. You weren&rsquo;t there. You couldn&rsquo;t be there. You watched the funeral on a phone screen in a bathroom at work. And then you went back to your desk because you had used up your bereavement leave. This specific pain — the grief of distance, of not being able to touch the person one last time — deserves to be witnessed. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>Learning of Death on a WhatsApp Message</h2>
          <p>There is a particular brutality to learning of a death through a phone notification. The news arrives as text, sometimes a single line, sometimes a voice note that you play three times because you cannot believe the words. There is no one physically with you. You are in your apartment, or your office, or your car in a Walmart parking lot, and the person is gone, and you are ten thousand kilometres away and the next flight is 23 hours away and costs more than you have available right now.</p>
          <p>The NRI who got the call at 3am and spent the night in darkness, unable to sleep, unable to do anything, watching the phone for updates. Who scrambled to book a flight and found prices that made them feel sick. Who got on the plane knowing they would arrive after the funeral, because Indian rituals happen within 24 hours and the flight alone takes longer than that. This is not an edge case — it is the ordinary reality of NRI bereavement, and it produces a grief that is not like any other.</p>
          <p>LeanOn listeners are in India. They understand this from the inside. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Guilt of Not Being There</h2>
          <p>The most common thing NRIs carry after a loss is guilt. Guilt for not being there at the end. For not visiting more. For the last conversation that was about something trivial and not about love. For the WhatsApp voice notes you meant to send and didn&rsquo;t. For having prioritised your career, your visa, your life abroad, over the years when being present mattered most.</p>
          <p>This guilt is often irrational — you could not have predicted the timing, you had a life to build, you called when you could, you visited when the tickets were affordable. And it does not feel irrational from inside it. It feels like a debt you cannot repay because the person you owe it to is gone. The guilt compounds the grief into something larger, heavier, and more persistent than ordinary bereavement.</p>
          <p>LeanOn listeners can hold this guilt without trying to dissolve it with reassurance. Sometimes you do not need someone to tell you it was not your fault. Sometimes you need someone to simply witness the weight of it. That is what peer support is for.</p>
        </div>

        <div className="section">
          <h2>When Grief Has No Community: Mourning Alone Abroad</h2>
          <p>Indian grief is communal. The house fills with people. The rituals — the prayer gatherings, the terahvi, the thirteenth day ceremony, the shraadh — are collective events that provide structure and support over days and weeks. The community comes, feeds you, sits with you, cries with you. The grief is held by many people together.</p>
          <p>For NRIs abroad, this communal container does not exist. You are in a country where your colleagues did not know your parent. Your friends, if you have them, are from a different cultural context and don&rsquo;t know how to show up for Indian grief in the Indian way. The rituals, even if you observe some version of them, are stripped of their communal dimension. You grieve alone, in a foreign country, and then go back to work. This isolation in grief is one of the most specific pains of the NRI experience. LeanOn is a space to be witnessed in it. From ₹160, no appointment needed.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>This grief deserves to be witnessed. Let someone in.</h2><p>Real Indian peer listener based in India. Understands NRI bereavement from the inside. Anonymous. First 5 minutes free. From ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-homesick">NRI homesickness &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
