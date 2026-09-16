import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Emotional Support | Someone to Talk to When It All Gets Heavy | LeanOn',
  description: 'NRI emotional support from peers who understand — not a helpline, not a professional, just a real human who has been through the same immigrant weight.',
  keywords: ['nri emotional support', 'emotional support for nri', 'indian immigrant emotional support', 'nri support online', 'desi emotional support', 'nri help'],
  alternates: { canonical: 'https://www.leanon.app/nri-emotional-support' },
  openGraph: { title: 'NRI Emotional Support | Someone to Talk to When It All Gets Heavy | LeanOn', description: 'NRI emotional support from peers who understand — not a helpline, not a professional, just a real human who has been through the same immigrant weight.', url: 'https://www.leanon.app/nri-emotional-support', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this emotional support or professional help?', acceptedAnswer: { '@type': 'Answer', text: 'This is peer emotional support — real humans with lived experience, not professionals or counsellors. If you need clinical help, a professional is the right path. But for the weight of everyday NRI life — loneliness, relationship strain, homesickness, the pressure of performing fine — peer support is often exactly what helps.' } },
  { '@type': 'Question', name: 'Will my family find out I talked to someone?', acceptedAnswer: { '@type': 'Answer', text: 'No. Sessions are completely private. Only your phone number and first name are used. Nothing is shared with your family, your community, or anyone else.' } },
  { '@type': 'Question', name: 'What if I just need to vent without someone trying to fix me?', acceptedAnswer: { '@type': 'Answer', text: 'That is exactly what peer listeners do. They listen. They ask questions. They do not try to fix you or give you advice you didn\'t ask for. If you just need to say it out loud to someone who won\'t judge you, that is a complete and valid reason to talk.' } },
  { '@type': 'Question', name: 'How long is a session?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions come in 15, 30, and 45-minute lengths after the free first 5 minutes. You can choose based on what you need.' } },
  { '@type': 'Question', name: 'How much does NRI emotional support cost?', acceptedAnswer: { '@type': 'Answer', text: 'Your first session with each new listener is free (5 minutes). After that, sessions start at ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Emotional Support', item: 'https://www.leanon.app/nri-emotional-support' },
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

export default function NriEmotionalSupportPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Emotional Support</span></nav>
        <div className="hero">
          <p className="badge">NRI Emotional Support &middot; Indian Immigrant Life &middot; Peer Listener</p>
          <h1>NRI Emotional Support — <em>Not a Helpline. A Human.</em></h1>
          <p className="lead">Success abroad doesn&rsquo;t mean okay inside. The homesickness, the isolation, the performance of being fine — it builds up. And when it does, you need more than a hotline or a list of coping tips. You need a real human who already understands the immigrant weight. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Emotional Toll of NRI Life That Nobody Talks About</h2>
          <p>You are doing well. From the outside, everything looks right — the job, the salary, the apartment, the visa. Your parents are proud. Your relatives ask for advice on how to get abroad. Your Instagram tells one story. Your 2 AM tells another.</p>
          <p>The emotional toll of NRI life is invisible because it hides behind success. The homesickness isn&rsquo;t dramatic — it shows up at ordinary moments, when you smell something that reminds you of home, when your parents call and you have to perform &ldquo;fine&rdquo; for thirty minutes. The loneliness is not poverty-loneliness — it&rsquo;s abundance-loneliness, the kind that comes when you have everything your generation worked for and still feel an unexplainable absence.</p>
          <p>These things are real. They deserve to be heard, not managed. A peer listener at LeanOn already knows this terrain — they will not need you to justify the feeling before they listen to it.</p>
        </div>

        <div className="section">
          <h2>Why NRIs Don&rsquo;t Seek Support</h2>
          <p>The immigrant community carries a specific version of the mental health stigma: &ldquo;what will people think.&rdquo; Add to that the guilt of the immigrant who chose to leave, the pressure not to disappoint the people who sacrificed, the performance of competence that immigration requires — and you have a profile that makes it almost impossible to say &ldquo;I am not okay&rdquo; to anyone in your actual life.</p>
          <p>You cannot say it to your parents — they will worry and feel responsible. You cannot say it to your Indian friends abroad — everyone is performing fine together. You cannot say it to your colleagues — it might affect how they see your competence. LeanOn exists for the feeling that has nowhere to go. Anonymous. Peer. Already understands.</p>
        </div>

        <div className="section">
          <h2>What Emotional Support from a Peer Actually Looks Like</h2>
          <p>It looks like someone listening without trying to solve you. Asking the questions that help you hear yourself think. Not steering you toward a decision. Not telling you what you should feel or whether your feeling is proportionate. Just — there. Present. Not judging. Not advising unless you ask.</p>
          <p>That is enough. Sometimes that is everything. The thing that shifts is not the situation; it is the feeling of being witnessed by someone who already understands the context. That is what LeanOn peer listeners do.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The weight you have been carrying quietly.</h2><p>Real peer listener. Understands NRI life. No judgment. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
