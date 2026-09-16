import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Dating in the UK | British Indian Dating | LeanOn',
  description: 'Dating as a British Indian is its own kind of complicated — family expectations, cultural identity, community gossip. Talk to someone who gets it without you explaining.',
  keywords: ['nri dating uk', 'british indian dating', 'desi dating uk', 'dating indian in uk', 'british asian dating problems', 'second generation indian dating uk'],
  alternates: { canonical: 'https://www.leanon.app/nri-dating-uk' },
  openGraph: { title: 'NRI Dating in the UK | British Indian Dating | LeanOn', description: 'Dating as a British Indian is its own kind of complicated — family expectations, cultural identity, community gossip. Talk to someone who gets it without you explaining.', url: 'https://www.leanon.app/nri-dating-uk', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Do listeners understand British Indian dating culture?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are based in India and understand the British Indian diaspora experience — the generational dynamics, the community gossip, the expectations around who you should marry and when. They won\'t need the cultural context explained.' } },
  { '@type': 'Question', name: 'What if I\'m in a secret relationship and it\'s taking a toll?', acceptedAnswer: { '@type': 'Answer', text: 'That is exactly the kind of weight peer support is for. The exhaustion of a hidden relationship, the fear of coming out to your family, the guilt and the longing — a listener will hear all of it without judgement.' } },
  { '@type': 'Question', name: 'Is this for British Indians of all backgrounds — Punjabi, Gujarati, Tamil?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners have cultural familiarity across North and South Indian backgrounds. Your specific community context doesn\'t need extensive explanation.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your family, community, or anyone else.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Dating UK', item: 'https://www.leanon.app/nri-dating-uk' },
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

export default function NriDatingUkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Dating UK</span></nav>
        <div className="hero">
          <p className="badge">NRI Dating UK &middot; British Desi &middot; Indian Relationships</p>
          <h1>British Indian dating. <em>The gap between what you want and what&rsquo;s expected.</em></h1>
          <p className="lead">British Indian dating exists in the gap between two cultures. Your parents want a good match from a respectable family. You&rsquo;re on apps, figuring out your identity, not wanting to hurt anyone but not wanting to settle. The community gossip. The family WhatsApp groups. The weight of everyone&rsquo;s expectations on your love life. Talk to someone who gets it. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>British Indian Dating: Living in the Gap</h2>
          <p>The British Indian dating experience is one of the most under-talked-about sources of genuine stress in the diaspora. You have grown up in Britain — with British friends, British cultural references, British ideas about relationships and love and personal freedom. You have also grown up Indian — with an Indian family, Indian food and festivals and language at home, Indian community events on the weekends, Indian expectations about who you should marry and when and how.</p>
          <p>These two cultures have very different ideas about love and commitment. British dating culture — apps, casual dating, taking your time, sleeping together before commitment, leaving if it isn&rsquo;t working — is the water you swim in at work and with your non-Indian friends. Indian family culture has different expectations: a match of suitable family background, involvement of parents, marriage as a life commitment not easily undone, the community&rsquo;s opinion mattering.</p>
          <p>You are navigating both of these simultaneously, often in secret from one side or the other. It is genuinely exhausting. LeanOn is a space to say all of it — to a real Indian peer listener who understands both sides completely. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What You Actually Need to Say</h2>
          <p>British Indian dating has its own specific things that go unsaid. The white partner you have been with for two years and your parents still don&rsquo;t know about. The Indian match your parents love and you feel nothing for. The community gossip that someone saw you out with someone &ldquo;inappropriate.&rdquo; The loneliness of wanting a relationship that works in both worlds and not finding it. The grief of knowing your parents&rsquo; happiness and your own may be in conflict.</p>
          <p>UK afternoons (2–4pm GMT/BST) are Indian evenings (7:30–9:30pm IST) — a natural window when listeners are available. No appointment needed. Anonymous. Completely private from the Leicester, Birmingham, or London Indian community. First 5 minutes free — once per listener.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Both cultures understood. No explanation needed.</h2><p>Real Indian peer listener. Gets British Indian dating complexity. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
