import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Loneliness in the USA | The Quiet Isolation of Indian Life in America | LeanOn',
  description: 'The loneliness of being Indian in America is different — it\'s not just missing home. It\'s the immigrant weight, the performance, the unsaid. Talk to someone who gets it.',
  keywords: ['nri loneliness usa', 'indian loneliness america', 'lonely indian in usa', 'nri isolation america', 'immigrant loneliness india usa', 'missing india usa', 'nri homesickness america'],
  alternates: { canonical: 'https://www.leanon.app/nri-loneliness-usa' },
  openGraph: { title: 'NRI Loneliness in the USA | The Quiet Isolation of Indian Life in America | LeanOn', description: 'The loneliness of being Indian in America is different — it\'s not just missing home. It\'s the immigrant weight, the performance, the unsaid. Talk to someone who gets it.', url: 'https://www.leanon.app/nri-loneliness-usa', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is NRI loneliness in America a real thing or am I being ungrateful?', acceptedAnswer: { '@type': 'Answer', text: 'It is completely real. The loneliness of immigrant life is not ingratitude — it is the genuine human cost of building a life far from everything that was familiar. You can have a good life in America and still feel lonely. The two are not incompatible.' } },
  { '@type': 'Question', name: 'What does NRI loneliness in America feel like?', acceptedAnswer: { '@type': 'Answer', text: 'It often feels like a low-grade, persistent sense that something is missing. It is not always acute. It shows up at Diwali away from home, at family occasions you miss, in conversations where you feel like a stranger, in the gap between the life you show people and the life you actually feel.' } },
  { '@type': 'Question', name: 'Will a listener understand this even if I can\'t describe it clearly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and many have direct experience with family abroad or with dual cultural identity. You don\'t need to describe it clearly — they already know the shape of it.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your family, community, or employer.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Loneliness USA', item: 'https://www.leanon.app/nri-loneliness-usa' },
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

export default function NriLonelinessUsaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Loneliness USA</span></nav>
        <div className="hero">
          <p className="badge">NRI Loneliness &middot; USA &middot; Indian Immigrant Life</p>
          <h1>You have a life here. <em>It just doesn&rsquo;t always feel like home.</em></h1>
          <p className="lead">The American dream. You worked for it. You got it. And some nights — usually after a long day, maybe around a holiday when the call home feels both comforting and suffocating — the loneliness hits hard. Not crisis. Just the weight of building everything from scratch in a country that doesn&rsquo;t fully understand where you came from. Talk to someone who does. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Loneliness Nobody Names</h2>
          <p>NRI loneliness in America is one of the least-talked-about experiences in the Indian diaspora. It is not dramatic. It is not a crisis. It does not prevent you from going to work, being productive, attending community events, calling your parents. It is quieter than that — a persistent, low-grade sense that something is missing, that the life you have built is real and good and somehow not quite home.</p>
          <p>It shows up at Thanksgiving when your American colleagues talk about family traditions and you are going to a potluck at another Indian family&rsquo;s house, which is warm and wonderful and also a reminder that this is a substitute for something else. It shows up when you watch your parents aging on a video call and you are 8,000 miles away. It shows up at Diwali when the mandir event in Sugar Land or Fremont is beautiful and also not the same as being home.</p>
          <p>You cannot say this to your parents — it would hurt them or worry them. You cannot say it to your American colleagues — they wouldn&rsquo;t fully understand. You cannot say it to your Indian community friends — because everyone is performing a similar fine-ness. Talk to a real Indian peer listener in India, who has heard this from hundreds of people and understands it completely. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Why It&rsquo;s Harder to Name Than It Looks</h2>
          <p>NRI loneliness is particularly hard to name because it comes wrapped in privilege. You chose to come here. You have a good job. You live in a better house than most. Your children go to excellent schools. The people who sacrificed to get you here would be confused and hurt to hear that you feel lonely. The guilt of feeling lonely in the middle of a good life is one of the most common things Indian peer listeners at LeanOn hear.</p>
          <p>The thing that helps is simply being heard by someone who gets it — without the guilt, without the gratitude calculation, without having to justify the feeling. A real Indian peer listener, in India. Anonymous. Private. First 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness that doesn&rsquo;t need to be justified.</h2><p>Real Indian peer listener. Understands NRI loneliness completely. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/indian-diaspora-mental-health">Indian diaspora support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
