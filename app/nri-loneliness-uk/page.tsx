import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Indian Loneliness in the UK | Talk to Someone Who Understands | LeanOn',
  description: 'Feeling alone as an Indian in the UK? Whether you\'re new here or second-generation, LeanOn connects you with peer listeners in India who understand. First 5 min free.',
  keywords: ['indian loneliness uk', 'nri loneliness uk', 'lonely indian in london', 'feeling alone uk indian', 'british indian loneliness', 'desi loneliness uk', 'indian isolation britain'],
  alternates: { canonical: 'https://www.leanon.app/nri-loneliness-uk' },
  openGraph: { title: 'Indian Loneliness in the UK | Talk to Someone Who Understands | LeanOn', description: 'Feeling alone as an Indian in the UK? Whether you\'re new here or second-generation, LeanOn connects you with peer listeners in India who understand. First 5 min free.', url: 'https://www.leanon.app/nri-loneliness-uk', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'I grew up here. Is LeanOn still relevant for me?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. British-Indian loneliness is often deeper precisely because it is less visible — you have language, community, a career, but still carry an unnameable weight. Our listeners understand the hyphenated identity and the specific exhaustion that comes with it.' } },
  { '@type': 'Question', name: 'I don\'t want to talk about Indian stuff. Can I just vent about life?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Many callers just want to vent — work, relationships, exhaustion. The India connection just means you never have to explain context you did not ask for. Say what you need to say.' } },
  { '@type': 'Question', name: 'Is this confidential from my community in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Anonymous phone number only. No social login. No one in your gurdwara, mandir, or office knows. Listeners sign confidentiality agreements.' } },
  { '@type': 'Question', name: 'What are good times to call from the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Indian listeners are active evenings IST. That is lunchtime to early afternoon UK time: 12:30pm–5:30pm GMT (winter) or 1:30pm–6:30pm BST (summer). A lunchtime call works perfectly.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'Indian Loneliness in the UK', item: 'https://www.leanon.app/nri-loneliness-uk' },
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

export default function NriLonelinessUkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Indian Loneliness in the UK</span></nav>
        <div className="hero">
          <p className="badge">Indian Loneliness &middot; UK &middot; British Desi</p>
          <h1>Surrounded by people. <em>Still feeling alone.</em></h1>
          <p className="lead">You&rsquo;ve lived here for years &mdash; maybe you were even born here. You have colleagues, friends, a life that looks full from outside. But there&rsquo;s a particular loneliness that comes with being Indian in the UK. The code-switching. The effort of being &ldquo;on.&rdquo; The identity that doesn&rsquo;t fully fit anywhere. Talk to someone who has heard it all before. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>
        <div className="section">
          <h2>The specific loneliness of Indians in the UK</h2>
          <p>It is not the same as ordinary loneliness. You can be surrounded by people &mdash; colleagues, flatmates, friends from university &mdash; and still feel the particular weight of being Indian here. The hyphenated identity carries its own gravity. Every room you enter, you are carrying the full story of your family&rsquo;s migration, their sacrifice, the expectation that you will represent it well &mdash; and none of that is visible to anyone else.</p>
          <p>The subtle racism that is never named is exhausting in a specific way. The comments that pass too fast to address. The moments where you are the interesting person, the diverse hire, the one who brings the food to the office potluck. Never simply a colleague. The loneliness of that is real even when everything else about your life is good.</p>
          <p>And then there is the exhaustion of always explaining. Your food, your family structure, your relationship with your parents, your marriage timeline. You have spent years translating yourself into a format that makes sense to people who did not grow up in the same context. LeanOn listeners already have the context. You can skip the translation and say the actual thing.</p>
        </div>
        <div className="section">
          <h2>Second generation vs first generation &mdash; both lonely differently</h2>
          <p><strong>First generation:</strong> You miss home in a way that is active and present. You left people and places that are fixed in your memory at the moment of leaving, while time continues there without you. You have built a life here but there is a part of you that is always slightly elsewhere. The loneliness is the gap between where your body is and where your sense of home still lives.</p>
          <p><strong>Second generation:</strong> The loneliness is more abstract but not less real. You grew up here, this is home, and yet you are still sometimes made to feel like a guest. You visit India and are too British. You are in Birmingham or Leicester and are sometimes too Indian. Neither world fully claims you. The loneliness is the gap between belonging everywhere in theory and feeling fully at ease nowhere in practice.</p>
          <p>Both forms are real. Both are worth talking about. LeanOn listeners have heard both &mdash; often from people who were surprised to find that putting it into words with someone who understood changed something.</p>
        </div>
        <div className="section">
          <h2>A real conversation, no appointment needed</h2>
          <p>LeanOn listeners are India-based and active in the evenings IST &mdash; which is lunchtime to early afternoon in the UK. UK to India is 4.5 hours ahead in BST and 5.5 hours in GMT. A 1pm call in London is 5:30pm or 6:30pm in India. Evening calls from the UK land at peak listener availability in India.</p>
          <p>No appointment. No waiting list. Completely anonymous &mdash; a phone number is all you need. Browse who is online now and start a session. The first 5 minutes are free.</p>
        </div>
        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness you cannot quite name has a name.</h2><p>A real Indian peer listener who understands. First 5 minutes free. From US$10.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-uk">Indians in the UK &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/indian-diaspora-support">Indian diaspora support &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
