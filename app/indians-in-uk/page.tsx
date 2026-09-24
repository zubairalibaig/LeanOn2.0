import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support for Indians in the UK | Talk to Someone Who Gets It | LeanOn',
  description: 'In London, Birmingham, or Leicester? LeanOn connects you with peer listeners in India who understand the British Indian experience — caught between two worlds.',
  keywords: ['indians in uk support', 'british indian mental health', 'indian support london', 'desi support uk', 'indian loneliness uk', 'talk to someone indian uk', 'british indian emotional support'],
  alternates: { canonical: 'https://www.leanon.app/indians-in-uk' },
  openGraph: { title: 'Emotional Support for Indians in the UK | Talk to Someone Who Gets It | LeanOn', description: 'In London, Birmingham, or Leicester? LeanOn connects you with peer listeners in India who understand the British Indian experience — caught between two worlds.', url: 'https://www.leanon.app/indians-in-uk', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Are listeners familiar with the British Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. They understand what it\'s like to grow up between cultures, the pressure of representing your family\'s sacrifice, the racism that is never quite named, and the exhaustion of always explaining your identity.' } },
  { '@type': 'Question', name: 'Can I talk in Hindi, Gujarati, or Punjabi?', acceptedAnswer: { '@type': 'Answer', text: 'Many listeners speak Hindi and some speak Punjabi. Mention your language preference when booking and your listener will accommodate you.' } },
  { '@type': 'Question', name: 'Is it confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely anonymous. A phone number is all you need to sign up. No last name, no photo, no social login. No one in your family or community in the UK or India is notified. Listeners sign confidentiality agreements.' } },
  { '@type': 'Question', name: 'Are there listeners available in UK evenings?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indian listeners are active 6pm–11pm IST, which is 12:30pm–6:30pm BST (summer) or 12:30pm–5:30pm GMT (winter). Lunchtime or early afternoon UK time works well.' } },
  { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'From US$10 for 15 minutes. Your first 5-minute session is free — if it doesn\'t feel right, you pay nothing.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Emotional Support for Indians in the UK', item: 'https://www.leanon.app/indians-in-uk' },
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

export default function IndiansInUkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Emotional Support for Indians in the UK</span></nav>
        <div className="hero">
          <p className="badge">British Indian Support &middot; UK Diaspora &middot; Desi Abroad</p>
          <h1>You&rsquo;ve built a life here. <em>You don&rsquo;t have to feel alone in it.</em></h1>
          <p className="lead">Birmingham, Leicester, London &mdash; you&rsquo;re surrounded by people but sometimes feel completely unseen. The second-generation identity crisis. The parents who sacrificed everything and the guilt that comes with it. The British who don&rsquo;t fully get it and the Indians who think you&rsquo;ve &ldquo;gone gora.&rdquo; Talk to a real Indian peer listener who understands. No appointment. No waiting list. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>What makes Indian loneliness in the UK different</h2>
          <p>Code-switching is not just a quirk &mdash; it is a daily tax. You speak differently at work, at home, with your British friends, with your Indian family. The effort is invisible and accumulates. You present yourself as many versions of yourself and sometimes lose track of which one is actually you.</p>
          <p>The &ldquo;confused identity&rdquo; label is one you have probably heard. It flattens something that is genuinely complex. You are not confused &mdash; you are carrying two distinct cultural inheritances that sometimes pull in opposite directions. British individualism and Indian collectivism, career ambition and family duty, personal freedom and community reputation. Holding all of that is not confusion. It is exhausting.</p>
          <p>And then there is the racism that is never quite named. The moments that pass too fast to address. The comments from colleagues that are probably not malicious but still land. The way you are sometimes seen as an interesting person from an interesting background rather than simply as a person. The loneliness that comes from being perpetually interesting rather than simply familiar.</p>
        </div>
        <div className="section">
          <h2>Listeners who get the British Indian world</h2>
          <p>LeanOn listeners are India-based. Many grew up with siblings or cousins in the UK or have direct experience navigating the gap between Indian expectations and Western life. They understand Diwali in December when the office goes on as normal. They understand the arranged marriage pressure that arrives on schedule regardless of whether you are ready. They understand the difference between being Indian &mdash; which you are &mdash; and feeling fully Indian when you visit, which is not always the case.</p>
          <p>They will not judge you for having built a life that does not quite fit either world. They have heard versions of this from hundreds of British Indians. The relief of not having to explain the context before getting to the actual thing you want to say is real.</p>
        </div>
        <div className="section">
          <h2>When to call from the UK &mdash; time zones</h2>
          <p>Listeners are India-based (IST &mdash; UTC+5:30). The UK to India time difference is 4.5 hours ahead during BST (British Summer Time) and 5.5 hours ahead during GMT (winter). This means 3pm in London is 7:30pm or 8:30pm in India &mdash; right when listeners are active for the evening.</p>
          <p>Afternoon calls from the UK work perfectly. If you have a lunch break, a quiet afternoon slot, or an early evening moment, India listeners will be available. No appointment needed. Browse who is online and start a session.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>You don&rsquo;t have to carry both worlds alone.</h2><p>A real Indian peer listener. Understands the British Indian experience. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/indian-diaspora-support">Indian diaspora support &rarr;</a>
          <a href="/support/loneliness">Loneliness support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
