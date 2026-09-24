import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Lonely | The Specific Loneliness of Indian Life Abroad | LeanOn',
  description: 'NRI loneliness isn\'t just missing home. It\'s the performance of being fine, the absence of people who knew you before, and the loneliness you can\'t admit to people at home.',
  keywords: ['nri lonely', 'nri loneliness', 'nri feeling lonely', 'lonely nri', 'nri isolation', 'indian feeling lonely abroad', 'lonely indian abroad'],
  alternates: { canonical: 'https://www.leanon.app/nri-lonely' },
  openGraph: { title: 'NRI Lonely | The Specific Loneliness of Indian Life Abroad | LeanOn', description: 'NRI loneliness isn\'t just missing home. It\'s the performance of being fine, the absence of people who knew you before, and the loneliness you can\'t admit to people at home.', url: 'https://www.leanon.app/nri-lonely', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is NRI loneliness normal?', acceptedAnswer: { '@type': 'Answer', text: 'It is extremely common. The loneliness of immigrant life is one of the most under-discussed aspects of the NRI experience. You are not unusual and you are not failing — you are having a very human response to a genuinely difficult situation.' } },
  { '@type': 'Question', name: 'Is NRI loneliness different from depression?', acceptedAnswer: { '@type': 'Answer', text: 'Loneliness is not the same as depression, though they can co-exist. NRI loneliness is often a contextual response to genuinely isolating circumstances — being far from your support network, in a cultural environment that does not fully understand you. A peer listener is not a substitute for professional help if you feel you need it, but for the loneliness of immigrant life, peer connection often helps directly.' } },
  { '@type': 'Question', name: 'Will talking to a listener actually help with loneliness?', acceptedAnswer: { '@type': 'Answer', text: 'For many people, yes. Being genuinely heard by someone who already understands your world — without having to explain the context — addresses the specific kind of loneliness that comes from feeling unseen. It does not solve everything, but it changes something.' } },
  { '@type': 'Question', name: 'Is this confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — phone number and first name only. Nothing is shared with your family, community, or employer.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free. Sessions continue from US$10 for 15 minutes. No subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Lonely', item: 'https://www.leanon.app/nri-lonely' },
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

export default function NriLonelyPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Lonely</span></nav>
        <div className="hero">
          <p className="badge">NRI Loneliness &middot; Indian Immigrant Life &middot; Peer Support</p>
          <h1>NRI Lonely — <em>The Kind You Can&rsquo;t Explain to People Back Home</em></h1>
          <p className="lead">You can&rsquo;t explain it to people in India — they think your life is perfect. You can&rsquo;t explain it to colleagues abroad — they don&rsquo;t understand the context. You are lonely in both directions at once. That is the specific shape of NRI loneliness. And it deserves to be named — not managed, not solved. Just heard. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone who understands &rarr;</a>
        </div>

        <div className="section">
          <h2>What Makes NRI Loneliness Different</h2>
          <p>NRI loneliness is bidirectional. Back in India, the assumption is that your life is working — the job, the salary, the visa, the foreign country experience. Saying you are lonely to your parents feels like admitting failure or worrying them unnecessarily. So you perform fine on the calls. You edit the homesickness out of the conversation.</p>
          <p>Among your colleagues and non-Indian friends abroad, the loneliness has a different invisibility. They can see that you function, that you show up, that you are productive. The immigrant context — the specific weight of being far from everything that was familiar, of having built everything from scratch, of not being fully at home in either place — is not visible to them. They cannot feel it, so they cannot see it.</p>
          <p>The result is that NRI loneliness has nowhere to go. It cannot be expressed in either direction without losing something. It accumulates quietly.</p>
        </div>

        <div className="section">
          <h2>The Signs of NRI Loneliness</h2>
          <p>Dreading weekends, which have less structure and more empty time. Overworking during the week to feel useful and to avoid the emptiness. Over-calling family in a way that feels like it helps in the moment but leaves you feeling heavier afterward. Feeling like a stranger inside your own success — the life looks good from the outside and feels hollow from inside. Scrolling through Indian news and content as a substitute for the thing it cannot actually replace.</p>
          <p>These are not moral failures. They are the natural patterns of a person in an isolating situation who has not yet found the right place to put down some of the weight.</p>
        </div>

        <div className="section">
          <h2>Why LeanOn Helps</h2>
          <p>Not a helpline. Not a professional. A peer listener who already understands the shape of the loneliness before you describe it. You do not need to justify it, explain the immigrant context, or perform fine. You can just say what it actually is. That recognition — being heard by someone who already knows the terrain — is often what shifts something. Not fixed. Just lighter.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The loneliness that has nowhere to go.</h2><p>Real peer listener. Already understands the NRI world. First 5 minutes free, from US$10.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-uk">NRI loneliness UK &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-mental-health">NRI mental health &rarr;</a>
          <a href="/nri-homesick">NRI homesick &rarr;</a>
          <a href="/nri-anxiety-abroad">NRI anxiety abroad &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
