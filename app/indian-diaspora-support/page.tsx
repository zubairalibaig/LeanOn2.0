import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for the Indian Diaspora | LeanOn',
  description: 'You left India but some things followed you. Family expectations, cultural guilt, immigrant loneliness. Talk to a real Indian peer listener who has been there.',
  keywords: ['indian diaspora mental health', 'support for indians in uk', 'support for indians in usa', 'indian community support', 'indian diaspora support', 'desi support abroad', 'indian immigrant loneliness'],
  alternates: { canonical: 'https://www.leanon.app/indian-diaspora-support' },
  openGraph: { title: 'Emotional Support for the Indian Diaspora | LeanOn', description: 'You left India but some things followed you. Family expectations, cultural guilt, immigrant loneliness. Talk to a real Indian peer listener who has been there.', url: 'https://www.leanon.app/indian-diaspora-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is LeanOn available for Indians living outside India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn is accessible from anywhere in the world. Sessions are text-based, fully online, and anonymous. Many diaspora users connect from the US, UK, Canada, Australia, and the Gulf region.' } },
  { '@type': 'Question', name: 'Will a listener understand the immigrant or diaspora experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and many have close experience with diaspora life through siblings, partners, or their own experience navigating between cultures. You will not have to explain concepts like family WhatsApp groups, arranged marriage pressure from abroad, or the guilt of leaving.' } },
  { '@type': 'Question', name: 'I feel guilty complaining when I chose to move abroad. Is that valid?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. The assumption that leaving India means you have everything you need is one of the most isolating parts of diaspora life. You do not need to justify having feelings. A peer listener will not question whether your struggles are real.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sessions are anonymous — you sign up with a phone number and first name only. Listeners sign confidentiality agreements. Nothing is shared with family, employers, or anyone in India.' } },
  { '@type': 'Question', name: 'How does it work?', acceptedAnswer: { '@type': 'Answer', text: 'Browse listeners who are currently online, choose someone whose profile resonates with you, and start a text session immediately. No appointment, no assessment form. The first 5 minutes of every session are free. Sessions start from ₹160.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Emotional Support for the Indian Diaspora', item: 'https://www.leanon.app/indian-diaspora-support' },
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

export default function IndianDiasporaSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Emotional Support for the Indian Diaspora</span></nav>
        <div className="hero">
          <p className="badge">Indian Diaspora &middot; Indians in UK &middot; Indians in USA &middot; Desi Abroad</p>
          <h1>You don&rsquo;t have to explain India <em>to your Indian listener.</em></h1>
          <p className="lead">You left India but some things followed you. The family expectations. The guilt of being the one who made it out. The exhaustion of being strong for everyone back home. Talk to a real Indian peer listener who has been there. No appointment. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>You Are the Strong One. And It Is Exhausting.</h2>
          <p>When you are an Indian living abroad, everyone back home needs something from you. Advice, money, emotional support, optimism, the proof that leaving was worth it. You are the success story. You are the one with bandwidth. You are the one who can handle it.</p>
          <p>The pressure to hold everything together &mdash; while quietly struggling with cultural loneliness, identity confusion, or the low-grade grief of missing your people &mdash; is rarely acknowledged. Local friends and colleagues do not quite understand it. And telling family back home would only worry them, or worse, make them feel responsible.</p>
          <p>LeanOn listeners are Indian. You do not have to explain what a WhatsApp family group feels like, what it costs to miss your cousin&rsquo;s wedding from 8,000 miles away, or why you feel like a fraud in both countries. They already know.</p>
        </div>
        <div className="section">
          <h2>The Specific Loneliness of the Diaspora</h2>
          <p>There is a particular kind of loneliness that comes from holding two cultures at once. In the UK or US or Canada, you are Indian enough to feel the distance but Western enough to feel alienated when you go back home. You belong fully to neither place. This is not a small thing &mdash; it shapes every relationship, every professional choice, every holiday.</p>
          <p>Add the weight of arranged marriage negotiations being conducted over voice notes, parents sending articles about suitable matches, pressure about when you are settling down, guilt about not visiting enough, worry about ageing parents you are not there for &mdash; and the emotional load is real even when everything looks fine from the outside.</p>
          <p>A peer listener with Indian lived experience does not need the backstory. You can start from where you actually are.</p>
        </div>
        <div className="section">
          <h2>Anonymous, Available, No Appointment</h2>
          <p>LeanOn is a peer support platform. Sessions are text-based, anonymous, and available now. You sign up with a phone number and first name only. Listeners are available during Indian evening hours, which maps to US mornings and UK evenings &mdash; the quiet moments diaspora users typically have before their day picks up.</p>
          <p>The first 5 minutes of every session are free. If it is not what you needed, you stop and pay nothing. Sessions continue from ₹160 if you want to keep going.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Someone who understands, without the context dump.</h2><p>Real Indian peer listener. Anonymous. Available right now. First 5 minutes free.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/loneliness-support-online">Loneliness support &rarr;</a>
          <a href="/online-emotional-support">Online emotional support &rarr;</a>
          <a href="/someone-to-talk-to">Someone to talk to &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
