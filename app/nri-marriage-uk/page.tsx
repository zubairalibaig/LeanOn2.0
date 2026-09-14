import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Marriage Problems in the UK | Talk to Someone Who Understands | LeanOn',
  description: 'British Indian marriage — arranged, cross-cultural, long-distance. The pressures are real. Talk to a peer listener who understands the British desi marriage experience.',
  keywords: ['nri marriage uk', 'british indian marriage problems', 'arranged marriage uk', 'indian marriage uk', 'desi marriage problems uk', 'nri spouse uk', 'british indian relationship'],
  alternates: { canonical: 'https://www.leanon.app/nri-marriage-uk' },
  openGraph: { title: 'NRI Marriage Problems in the UK | Talk to Someone Who Understands | LeanOn', description: 'British Indian marriage — arranged, cross-cultural, long-distance. The pressures are real. Talk to a peer listener who understands the British desi marriage experience.', url: 'https://www.leanon.app/nri-marriage-uk', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What kinds of British Indian marriage issues can I talk about?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: an arranged match the family pushed for, a marriage to someone of a different background, the tension between British expectations and Indian family values, a marriage that is outwardly fine but privately lonely, concerns about your children growing up between cultures, or simply a marriage that has drifted and you don\'t know what to do.' } },
  { '@type': 'Question', name: 'Will the listener understand British Indian culture?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are based in India and understand the British Indian diaspora experience — the Gujarati and Punjabi communities of the Midlands and North, the intergenerational dynamics, the specific pressures of being raised British and Indian simultaneously. No lengthy explanation needed.' } },
  { '@type': 'Question', name: 'What if my situation feels complicated — is this still right?', acceptedAnswer: { '@type': 'Answer', text: 'Complicated is exactly what peer support is designed for. Listeners don\'t need a simple problem to work with. They can sit with complexity and ambiguity without pushing you toward any particular answer.' } },
  { '@type': 'Question', name: 'Is this confidential from my family and community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your family, community, or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Marriage UK', item: 'https://www.leanon.app/nri-marriage-uk' },
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

export default function NriMarriageUkPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Marriage UK</span></nav>
        <div className="hero">
          <p className="badge">NRI Marriage UK &middot; British Desi &middot; Indian Relationships</p>
          <h1>British Indian marriage. The pressure from both worlds. <em>The conversation you haven&rsquo;t had yet.</em></h1>
          <p className="lead">Whether you&rsquo;re dealing with an arranged match your family pushed for, a partner who doesn&rsquo;t understand your culture, or a marriage that looks fine from the outside but feels lonely inside — British Indian marriage has pressures that combine two worlds in complicated ways. Talk to someone who gets both. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Two-World Pressure of British Indian Marriage</h2>
          <p>British Indian marriage sits at the intersection of two very different sets of expectations. British culture has one idea of what a marriage should be — romantic love, individual fulfilment, equal partnership, the right to leave if it doesn&rsquo;t work. Indian family culture has another — arranged or semi-arranged matches, family honour, "log kya kahenge," the understanding that marriage is between two families not just two people, and that adjusting is what you do.</p>
          <p>Growing up British and Indian means you have internalised both, and they do not resolve neatly. You want to love your partner and feel chosen. Your family wants you to make a sensible match and not shame them. The community in Birmingham, Leicester, or Southall watches closely. And in the middle of all of this, you are trying to have an actual marriage with an actual person — which is hard enough without the weight of two cultural traditions on top of it.</p>
          <p>LeanOn is a space to say all of this to someone who truly understands — a real Indian peer listener in India who knows both the culture you were raised in and the family expectations you carry. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>What Peer Support Looks Like for Marriage Pressure</h2>
          <p>LeanOn listeners are not advisors and will not tell you what to do about your marriage. They are real people — trained peer listeners with lived experience of Indian cultural dynamics — who will genuinely hear you. No judgement. No advice you didn&rsquo;t ask for. Just the experience of being understood by someone who gets the cultural context without needing it explained.</p>
          <p>UK (GMT/BST) afternoons align with Indian evenings — 3pm in Birmingham or Leicester is 8:30pm in India. Your quiet afternoon at home, or your lunch break at work, is when Indian listeners are in their evenings. No appointment needed. Anonymous. First 5 minutes always free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Both worlds understood. No explanation required.</h2><p>Real Indian peer listener. Understands British Indian marriage dynamics. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/indians-in-uk">Indians in UK &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
