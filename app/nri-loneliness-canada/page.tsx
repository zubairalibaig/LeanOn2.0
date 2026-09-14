import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Loneliness in Canada | You\'re Not Alone | LeanOn',
  description: 'The loneliness of being Indian in Canada is different. It\'s not just missing home — it\'s feeling invisible in two countries. Talk to someone who gets it. First 5 min free.',
  keywords: ['nri loneliness canada', 'lonely indian in canada', 'indian loneliness toronto', 'punjabi loneliness canada', 'missing home india canada', 'indian isolation canada', 'feeling lonely abroad canada'],
  alternates: { canonical: 'https://www.leanon.app/nri-loneliness-canada' },
  openGraph: { title: 'NRI Loneliness in Canada | You\'re Not Alone | LeanOn', description: 'The loneliness of being Indian in Canada is different. It\'s not just missing home — it\'s feeling invisible in two countries. Talk to someone who gets it. First 5 min free.', url: 'https://www.leanon.app/nri-loneliness-canada', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is what I\'m feeling normal for Indians in Canada?', acceptedAnswer: { '@type': 'Answer', text: 'Very. The transition to Canadian life — the quiet streets, the transactional friendships, the isolation in winter — hits many Indians hard in the first few years. It is not weakness. It is a real adjustment that very few people talk about honestly.' } },
  { '@type': 'Question', name: 'I have friends here. Why do I still feel alone?', acceptedAnswer: { '@type': 'Answer', text: 'Because cultural understanding goes deeper than friendship. You can have a full social life and still feel unseen. Our listeners have heard this from hundreds of people — having friends here does not automatically fill the particular gap that comes from being Indian abroad.' } },
  { '@type': 'Question', name: 'What if I don\'t want to tell my family back home?', acceptedAnswer: { '@type': 'Answer', text: 'That is exactly why LeanOn exists — an anonymous conversation you control completely. You sign up with only a phone number. No one in your family or network back home or in Canada knows.' } },
  { '@type': 'Question', name: 'Is this different from a hotline or crisis line?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. This is not a crisis service. It is peer support — a calm, judgment-free conversation with a trained Indian listener. For actual emergencies, please contact local emergency services.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Loneliness in Canada', item: 'https://www.leanon.app/nri-loneliness-canada' },
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

export default function NriLonelinessCanadaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Loneliness in Canada</span></nav>
        <div className="hero">
          <p className="badge">NRI Loneliness &middot; Canada &middot; Indian Diaspora</p>
          <h1>The loneliness of being Indian <em>in Canada.</em></h1>
          <p className="lead">You video call home and say everything is fine. You post pictures at Niagara Falls or Banff. But some nights &mdash; usually in winter, when it&rsquo;s 4pm and already dark &mdash; the loneliness hits differently. Not just missing people. Missing being understood. Missing belonging somewhere. Talk to someone in India who gets it. Right now. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>Why NRI loneliness in Canada is different</h2>
          <p>Canadian culture is warm in aggregate and often distant in the particular. People are polite. Nobody becomes close quickly. Conversations stay at a certain level and deepening them takes a long time &mdash; longer than most Indians expect from people they see every day. You can work alongside someone for a year and still feel like strangers in a way that would not happen back home.</p>
          <p>The immigrant weight is different too. You are carrying family dreams in a country that does not know those dreams exist. The pressure to justify the move &mdash; financially, emotionally, in terms of what you have built &mdash; sits quietly in the background of every decision. Back home, aakaar-parivaar (your network of family and community) showed up uninvited, created noise, created belonging. Here, you have to construct every connection deliberately, in your spare time, after a full workday, in a language that is technically yours but does not always feel like it.</p>
          <p>And then there is the winter. Not just cold &mdash; the specific quality of 4pm darkness in January, when the day is already over and there are hours left to fill. Many Indians find the first Canadian winter genuinely destabilising in a way nobody warned them about. This is not weakness. It is the body adjusting to a light cycle that is nothing like home.</p>
        </div>
        <div className="section">
          <h2>What it is and isn&rsquo;t</h2>
          <p>Not depression necessarily. Not weakness. It is the gap between the life you projected &mdash; the one everyone in India has in their head when they think of you &mdash; and the life you are actually living. It is the specific loneliness of having no one around you who knew you before you came here. Of being always the person who explains, always the person who adapts, always the person who is grateful.</p>
          <p>It is also normal. The transition from Indian social density to Canadian social distance is a real adjustment that takes longer than anyone admits. It passes faster when you talk about it &mdash; particularly when you talk to someone who understands the specific shape of it without needing an explanation.</p>
        </div>
        <div className="section">
          <h2>How LeanOn works across the ocean</h2>
          <p>LeanOn listeners are India-based, active in the evenings IST &mdash; which is Canadian morning. Brampton and Toronto are 9.5 hours behind India. An 8am call in Brampton is 5:30pm in India. Surrey and Vancouver are 12.5 hours behind. 8am in Surrey is 8:30pm in India &mdash; perfect listener availability.</p>
          <p>You sign up with just your phone number. No photo, no full name, no social account. Your family back home and your colleagues in Canada never know. There is no appointment, no waiting list. Browse who is online right now and start a session. The first 5 minutes are free.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness is real. So is the support.</h2><p>A real Indian peer listener who understands the Canada experience. First 5 minutes free. From ₹160 (~$3 CAD).</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/punjabi-support-canada">Punjabi support Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/loneliness-support-india">Loneliness support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
