import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Guilt About Parents in India | The Distance You Can\'t Fix | LeanOn',
  description: 'You left for a better life. But your parents are aging in India and you\'re not there. That guilt — and the helplessness of distance — is a real weight to carry.',
  keywords: ['nri guilt parents', 'nri aging parents', 'indian parents alone', 'nri missing family india', 'nri parent care', 'guilty nri', 'missing parents india abroad'],
  alternates: { canonical: 'https://www.leanon.app/nri-parents-india' },
  openGraph: { title: 'NRI Guilt About Parents in India | The Distance You Can\'t Fix | LeanOn', description: 'You left for a better life. But your parents are aging in India and you\'re not there. That guilt — and the helplessness of distance — is a real weight to carry.', url: 'https://www.leanon.app/nri-parents-india', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is the guilt about leaving my parents irrational?', acceptedAnswer: { '@type': 'Answer', text: 'No. It is not irrational — it is a real response to a real situation. You moved away; your parents are aging without you nearby. The guilt is painful but it is not unfounded. A listener will not tell you it is irrational. They will hear it as the real thing it is.' } },
  { '@type': 'Question', name: 'My parent had a health crisis and I could not get there in time. I cannot stop thinking about it. Can I talk about this?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The experience of a parent\'s health emergency from thousands of miles away — the helplessness, the scrambled flights, the arriving after or not arriving at all — is a specific kind of grief that listeners understand and will hold with you without judgment.' } },
  { '@type': 'Question', name: 'I watch my parents aging on video calls. It is unbearable. Is that something to talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The video call aging grief — watching your parents get older in a two-inch square, unable to actually be there, noticing the changes that accumulate between visits — is one of the most specific and painful NRI experiences. Many listeners have heard this from hundreds of people and understand it deeply.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your family in India and your community abroad will never know.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription required.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Guilt About Parents', item: 'https://www.leanon.app/nri-parents-india' },
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

export default function NriParentsIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Guilt About Parents</span></nav>
        <div className="hero">
          <p className="badge">NRI Guilt &middot; Aging Parents &middot; The Distance</p>
          <h1>Your parents are aging in India. <em>And you cannot fix the distance.</em></h1>
          <p className="lead">You left for a better life — and you got it. But your parents are in India, and they are getting older, and you are not there. Not for the small daily things, not for the health scares, sometimes not even for the big ones. The guilt of that distance is a real and heavy thing to carry. You are not alone in it. Talk to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Video Call Grief</h2>
          <p>There is a specific kind of grief that NRIs carry that does not have a common name — the grief of watching your parents age on a screen. You notice it between visits: the hair that has greyed more, the way your father moves a little more slowly, your mother&rsquo;s hearing that has gotten worse. You see it in two-inch increments on a phone screen, and there is nothing you can do about it except call more often, which helps but does not fix the fundamental thing.</p>
          <p>The video call is both a gift and a reminder. You can see them, which is something. And you can see them, which means you can see exactly what you are missing — the daily presence, the ability to be there when something goes wrong, the possibility of an ordinary afternoon that does not require an 8,000-mile flight.</p>
          <p>This grief is real. It accumulates between visits. It sits underneath your daily life — in the morning call, in the news about a health issue managed by a sibling or a neighbour because you were not there. LeanOn listeners have heard this from hundreds of NRIs and they understand the specific texture of it without needing an explanation. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Health Scare You Were Not There For</h2>
          <p>At some point in most NRI lives, there is a health event involving a parent that becomes the embodiment of the cost of distance. A fall. A hospital admission. A diagnosis. And you are in San Jose or London, unable to do anything but book a flight and wait and worry. Sometimes you make it in time. Sometimes you don&rsquo;t. Either way, the experience changes something.</p>
          <p>The helplessness of that moment — of being 8,000 miles away when someone you love needs care — is one of the most painful experiences an NRI can carry. It is not something that resolves easily. It resurfaces at unexpected times. And it is very hard to speak about, because the people around you in your daily life cannot fully understand it, and the people who could understand it — your family — are the ones you most need to protect from the full weight of your feelings.</p>
          <p>LeanOn is a space to speak it honestly. Not to solve it. Just to say it out loud to someone who will hear it as the real thing it is.</p>
        </div>

        <div className="section">
          <h2>You Are Not Alone in This</h2>
          <p>NRI guilt about parents is one of the most universal experiences in the Indian diaspora and one of the least spoken. Every NRI community gathering has people carrying it. The WhatsApp group with siblings coordinating care from different continents. The annual visit that never feels long enough. The birthday you miss because the timing never works perfectly with the work calendar.</p>
          <p>You chose this life. Your parents, in many cases, encouraged it or actively facilitated it. And none of that makes the guilt easier. The choice that gave you a good life came with a cost, and you are the one who lives with that cost every day. A LeanOn peer listener will hold that with you — not with solutions, not with reassurance that you are a good child, just with genuine presence and the understanding that comes from having heard this many times from people who are not wrong to feel it.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The distance you cannot fix deserves to be spoken.</h2><p>Real peer listener. No platitudes. Just genuine hearing. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
