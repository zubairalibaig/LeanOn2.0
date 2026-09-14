import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Second Generation Indian in the USA | ABCD Identity & Pressure | LeanOn',
  description: 'Born in America, Indian at home. The ABCD identity is real — caught between two cultures with no instruction manual. Talk to a peer listener who understands.',
  keywords: ['second generation indian usa', 'abcd mental health', 'american born desi', 'abcd identity crisis', 'second gen indian pressure', 'indian american identity', 'desi american problems'],
  alternates: { canonical: 'https://www.leanon.app/second-generation-indian-usa' },
  openGraph: { title: 'Second Generation Indian in the USA | ABCD Identity & Pressure | LeanOn', description: 'Born in America, Indian at home. The ABCD identity is real — caught between two cultures with no instruction manual. Talk to a peer listener who understands.', url: 'https://www.leanon.app/second-generation-indian-usa', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is LeanOn for second-generation Indian-Americans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Second-generation Indian-Americans — those who grew up in the US with Indian parents — face a specific set of identity and pressure challenges. LeanOn listeners understand the ABCD experience: the gap between home culture and school culture, the parental expectations, the identity questions, without needing it explained.' } },
  { '@type': 'Question', name: 'Will a listener in India understand the American-raised Indian experience?', acceptedAnswer: { '@type': 'Answer', text: 'Surprisingly well. Indian listeners have extensive experience with NRI families, with siblings who grew up abroad, and with the specific identity tensions of growing up between cultures. The ABCD experience is well-known in India — the cultural shorthand exists.' } },
  { '@type': 'Question', name: 'What if my problem is my relationship with my Indian parents?', acceptedAnswer: { '@type': 'Answer', text: 'That is one of the most common second-generation Indian-American experiences people bring to LeanOn — the weight of parental expectations, the guilt of growing into someone different, the love and the friction. A listener will hear it without taking sides.' } },
  { '@type': 'Question', name: 'Is this confidential from my parents?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Nothing is shared with your family or anyone else.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'Second Generation Indian USA', item: 'https://www.leanon.app/second-generation-indian-usa' },
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

export default function SecondGenerationIndianUsaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>Second Generation Indian USA</span></nav>
        <div className="hero">
          <p className="badge">ABCD &middot; Second-Gen Indian &middot; Indian-American</p>
          <h1>Indian at home. American everywhere else. <em>Fully fitting in neither.</em></h1>
          <p className="lead">You grew up eating dal chawal and watching Diwali at home and navigating a completely different world at school. Your parents&rsquo; sacrifices are real and heavy. Your American life is real but layered. You&rsquo;re expected to succeed like an American and live like an Indian — and nobody made a manual for that. Talk to a real peer listener who gets both sides. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The ABCD Experience: Real and Rarely Named</h2>
          <p>Growing up as an American-born child of Indian immigrants — the &ldquo;ABCD&rdquo; — means inhabiting two worlds that don&rsquo;t fully overlap. At school, you are the Indian kid — the one who brings strange food, observes Diwali instead of Halloween, has parents who are stricter and more academically focused, who speaks another language at home. In the Indian community, you are the Americanised one — your Hindi is accented, you don&rsquo;t know the film songs your parents grew up with, your relationship expectations are different.</p>
          <p>Neither world fully claims you. You are always the representative of a different place — either explaining India to Americans or explaining America to Indians. The identity is genuinely in-between, and that in-between is not a failure of belonging. It is just the reality of where you were raised. But it creates a particular kind of loneliness: the sense that no one fully understands your world.</p>
          <p>LeanOn listeners in India understand the ABCD experience well — it is not unfamiliar in India, where NRI families are discussed constantly and the &ldquo;Indian-raised-abroad&rdquo; identity is well-mapped. You do not need to explain the cultural gap you live in. They already know its shape. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>The Weight of Parental Sacrifice</h2>
          <p>The second-generation Indian-American experience is inseparable from the weight of parental sacrifice. Your parents came here with nothing and built something. Their hopes are mapped onto you. They want you to succeed, to marry well, to be happy — but their template for what success and happiness look like was formed in a different world. The gap between what they want for you and what you are becoming is a source of genuine grief on both sides, rarely spoken directly.</p>
          <p>The guilt of that gap is something second-generation Indian-Americans carry often silently. A real Indian peer listener at LeanOn — who understands the immigrant sacrifice narrative from the inside — can hear this without judgment and without a fixed position. Sessions are anonymous. First 5 minutes free.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>Both worlds understood. No explanation needed.</h2><p>Real Indian peer listener. Gets the second-gen Indian-American experience. First 5 minutes free. From ₹160.</p><a href="/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-dating-usa">NRI dating USA &rarr;</a>
          <a href="/desi-support-usa">Desi support USA &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
