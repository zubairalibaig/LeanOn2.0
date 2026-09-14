import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Arranged Marriage Pressure | When Your Parents Won\'t Stop Asking | LeanOn',
  description: 'Arranged marriage pressure when you\'re an NRI is different — you\'re juggling parents in India, Indian community abroad, and your own values. Talk to someone who has been through it.',
  keywords: ['nri arranged marriage pressure', 'arranged marriage nri abroad', 'nri rishta pressure', 'indian marriage pressure abroad', 'nri marriage stress', 'arranged marriage pressure uk usa canada'],
  alternates: { canonical: 'https://www.leanon.app/nri-arranged-marriage-pressure' },
  openGraph: { title: 'NRI Arranged Marriage Pressure | When Your Parents Won\'t Stop Asking | LeanOn', description: 'Arranged marriage pressure when you\'re an NRI is different — you\'re juggling parents in India, Indian community abroad, and your own values. Talk to someone who has been through it.', url: 'https://www.leanon.app/nri-arranged-marriage-pressure', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Will a listener tell me what to do about my parents?', acceptedAnswer: { '@type': 'Answer', text: 'No. Peer listeners do not give advice unless you specifically ask for it. They are there to help you think through what you are feeling and what you want — not to push you toward a particular choice. This is your decision. They are just here to listen.' } },
  { '@type': 'Question', name: 'Do listeners understand arranged marriage dynamics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LeanOn listeners are Indian and most have direct experience with arranged marriage dynamics — either in their own families or personally. They understand rishta culture, bio-data, the family pressure involved, and the specific weight it carries when you are an NRI navigating expectations from two continents.' } },
  { '@type': 'Question', name: 'Can I talk about this anonymously?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are private — only your phone number and first name are used. Nothing goes back to your family, your community, or anyone in your life. You can say exactly what you actually feel without it going anywhere.' } },
  { '@type': 'Question', name: 'Can I talk at any time or do I need to book?', acceptedAnswer: { '@type': 'Answer', text: 'No appointment needed. Browse available listeners and start a session when you need one. First 5 minutes are free.' } },
  { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes are free every session. Sessions continue from ₹160 for 15 minutes. No subscription, no commitment.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Arranged Marriage Pressure', item: 'https://www.leanon.app/nri-arranged-marriage-pressure' },
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

export default function NriArrangedMarriagePressurePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Arranged Marriage Pressure</span></nav>
        <div className="hero">
          <p className="badge">NRI Marriage Pressure &middot; Arranged Marriage &middot; Indian Abroad</p>
          <h1>NRI Arranged Marriage Pressure — <em>The Squeeze from Two Worlds</em></h1>
          <p className="lead">Parents in India sending profiles. Aunties abroad monitoring your &ldquo;eligibility.&rdquo; The bio-data WhatsApp chain at every family event. You are an adult with a life, a career, and your own idea of what you want — and somehow that still gets lost in the noise. Talk to someone who has been squeezed by the same two worlds. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Specific Pressure NRIs Face</h2>
          <p>Arranged marriage pressure when you are an NRI is not the same as it is for someone living at home. It operates at a distance and through multiple channels simultaneously. Your parents call from India with new profiles. Your relatives abroad pass on &ldquo;suitable matches&rdquo; through the community grapevine. Your parents&rsquo; friends have opinions about your eligibility that somehow reach you. Family events — back home or in the diaspora — become occasions for the same conversations you have been having for years.</p>
          <p>The bio-data WhatsApp chain is a specific kind of pressure that NRIs know well: forwarded profiles you didn&rsquo;t ask for, with your own bio-data being shared without consultation. The feeling of your life being managed from a distance by people who love you but who are also, in this specific way, not listening.</p>
        </div>

        <div className="section">
          <h2>Why It&rsquo;s Harder When You&rsquo;re Abroad</h2>
          <p>You have built a life. You live alone, you support yourself, you make your own decisions in every other area of your existence. The gap between the autonomy you have in your actual life and the way your family still sees you — as the 22-year-old who left, whose life is somehow incomplete without marriage — creates a specific kind of exhaustion.</p>
          <p>It is not that you don&rsquo;t want to get married, or that you are rejecting your culture. It is that the pace and the pressure and the lack of your own voice in the process feels like a weight you carry constantly, and there is almost nobody in your life abroad to whom you can say that without it being misunderstood or judged.</p>
        </div>

        <div className="section">
          <h2>What You Actually Need</h2>
          <p>Not a strategy for handling your parents. Not tips on how to push back or how to set limits. Just space — private, anonymous, with someone who already understands the dynamics — to say &ldquo;I am exhausted by this.&rdquo; To name what the pressure feels like without editing it for your parents&rsquo; feelings or your friends&rsquo; opinions. To hear yourself say it out loud and feel like someone received it without turning it into advice.</p>
          <p>That is what LeanOn peer listeners offer. They already know the shape of this pressure. They will not need it explained and they will not report back to your mother.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The exhaustion that doesn&rsquo;t fit in a family call.</h2><p>Real peer listener. Understands the NRI arranged marriage squeeze. First 5 minutes free, from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/arranged-marriage-nri">Arranged marriage NRI &rarr;</a>
          <a href="/nri-marriage-usa">NRI marriage USA &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-relationship-problems">NRI relationship problems &rarr;</a>
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-identity-crisis">NRI identity crisis &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-loneliness-canada">NRI loneliness Canada &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
