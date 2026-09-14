import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'NRI Divorce and Separation | Talking Through It With Someone Who Understands | LeanOn',
  description: 'Divorce as an NRI brings layers no one else quite sees — immigration status, community shame, family in India, assets across borders. Talk to someone who understands.',
  keywords: ['nri divorce', 'nri separation', 'indian divorce abroad', 'nri marriage problems', 'nri divorce usa', 'nri divorce uk', 'indian immigrant divorce'],
  alternates: { canonical: 'https://www.leanon.app/nri-divorce' },
  openGraph: { title: 'NRI Divorce and Separation | Talking Through It With Someone Who Understands | LeanOn', description: 'Divorce as an NRI brings layers no one else quite sees — immigration status, community shame, family in India, assets across borders. Talk to someone who understands.', url: 'https://www.leanon.app/nri-divorce', siteName: 'LeanOn', type: 'article', images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn' }] },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'Is this for before, during, or after separation?', acceptedAnswer: { '@type': 'Answer', text: 'All three. LeanOn listeners are not legal advisors — they are peer listeners for the emotional weight of NRI separation, whether you are still deciding what to do, in the middle of it, or on the other side trying to rebuild. All stages carry real weight and all are heard.' } },
  { '@type': 'Question', name: 'Do listeners understand the visa anxiety around divorce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The specific fear of what happens to your immigration status if the marriage ends — dependent visa, joint sponsorship, H4 expiry — is something listeners understand. You do not have to explain why that anxiety layers onto the emotional grief. They already know the shape of it.' } },
  { '@type': 'Question', name: 'Will this be confidential from my community?', acceptedAnswer: { '@type': 'Answer', text: 'Completely. Sessions are anonymous — phone number and first name only. Your Indian diaspora community, your family in India, and your spouse will never know you spoke to anyone. Confidentiality is absolute.' } },
  { '@type': 'Question', name: 'What about the shame of telling parents in India?', acceptedAnswer: { '@type': 'Answer', text: 'This is one of the most common and most painful parts of NRI separation — the dread of the conversation with parents in India, the anticipated disappointment, the community fallout back home. Listeners understand this weight completely and will hold it with you without judgment.' } },
  { '@type': 'Question', name: 'How much does a session cost?', acceptedAnswer: { '@type': 'Answer', text: 'First 5 minutes free every session. Sessions from ₹160 for 15 minutes. No commitment, no subscription.' } },
] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
  { '@type': 'ListItem', position: 2, name: 'NRI Support', item: 'https://www.leanon.app/nri-support' },
  { '@type': 'ListItem', position: 3, name: 'NRI Divorce', item: 'https://www.leanon.app/nri-divorce' },
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

export default function NriDivorcePage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" className="nav-logo" alt="LeanOn" /></a><a href="https://www.leanon.app/browse"><button className="btn-nav">Find a listener</button></a></nav>
      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>&#x203A;</span><a href="/nri-support">NRI Support</a><span>&#x203A;</span><span style={{ color: 'var(--navy)' }}>NRI Divorce</span></nav>
        <div className="hero">
          <p className="badge">NRI Divorce &middot; Separation &middot; Indian Abroad</p>
          <h1>You don&rsquo;t need legal advice right now. <em>You need someone to talk to.</em></h1>
          <p className="lead">NRI divorce brings layers that most people around you cannot fully see — immigration status tied to your marriage, community shame that spans two countries, parents in India who don&rsquo;t know yet, children with roots in two places. This is not a legal guide. It is a space to speak the human part of it to someone who understands. First 5 minutes free.</p>
          <a href="https://www.leanon.app/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>The Layers Nobody Else Sees</h2>
          <p>When a marriage ends for an NRI, the grief comes with layers that most people around you — colleagues, local friends, even counsellors unfamiliar with the immigrant experience — will not fully understand. The first layer is the personal loss, which is the same for anyone. But then there are the NRI-specific layers that compound everything.</p>
          <p>If your visa is tied to your spouse, separation is not just emotional — it is existential. Your right to stay in the country you have built your life in is suddenly in question. This fear — which might seem like a practical concern — actually runs deep emotionally, because it means the loss of the marriage might mean the loss of the life, the career, and the identity you have built abroad. That is a specific kind of terror that divorce support resources rarely address.</p>
          <p>And then there is the conversation with your parents in India. The community back home. The distant relatives whose opinion somehow still matters. The shame that travels faster than news. LeanOn listeners understand all of these layers without needing them explained. You can talk about the emotional weight of the NRI divorce experience — not the legalities, just the human part. First 5 minutes free.</p>
        </div>

        <div className="section">
          <h2>Single NRI Parent Abroad — an Invisible Hardship</h2>
          <p>If you have children and your marriage is ending, the situation is even more complex. Children with roots in two countries — who may have family in India they are close to, who have grown up navigating two cultures — face their own identity complications when their parents separate. And you, as a single NRI parent abroad, face the loneliness of parenting in a foreign country without the support network you would have had back home.</p>
          <p>Your parents in India cannot fly over for every difficult week. Your siblings have their own lives. The diaspora community may be supportive or may be judgmental — and you often cannot predict which. LeanOn is a space where you can speak honestly about all of this without worrying about what it reveals or who it reaches.</p>
        </div>

        <div className="section">
          <h2>Community Shame That Crosses Borders</h2>
          <p>In Indian communities, divorce still carries a social weight that is hard to overstate. The news travels — through families, through the diaspora community, sometimes through WhatsApp chains that reach people in India before you have had a chance to tell your own parents. The shame is not just about what happened — it is about the public nature of what happened, the fact that people will have opinions, and that those opinions will reach people who matter to you.</p>
          <p>This shame is a real emotional burden. It layers on top of the grief of the relationship ending and makes it harder to speak honestly about either. LeanOn peer listeners offer something unusual: a completely private, anonymous space to speak it all — the grief, the shame, the fear, the relief, the complexity — to someone who understands the Indian diaspora social context and will judge none of it.</p>
        </div>

        <div className="section"><h2>Frequently Asked Questions</h2>{faqs.map((f, i) => (<div className="faq-item" key={i}><p className="faq-q">{f.name}</p><p className="faq-a">{f.acceptedAnswer.text}</p></div>))}</div>
        <div className="cta-card"><h2>The human weight of NRI separation deserves to be heard.</h2><p>No legal advice. No judgment. Just a real listener who understands. First 5 minutes free. Sessions from ₹160.</p><a href="https://www.leanon.app/browse" className="btn-cta">Find a listener &rarr;</a></div>
        <div className="section"><h2>You Might Also Find This Helpful</h2><div className="related">
          <a href="/nri-support">NRI support &rarr;</a>
          <a href="/nri-marriage-uk">NRI marriage UK &rarr;</a>
          <a href="/nri-loneliness-usa">NRI loneliness USA &rarr;</a>
          <a href="/nri-burnout">NRI burnout &rarr;</a>
        </div></div>
        <div className="crisis"><strong>In a crisis?</strong> NIMHANS: 080-46110007 &nbsp;&middot;&nbsp; Tele-MANAS: 14416 &nbsp;&middot;&nbsp; Both free, 24/7.</div>
      </div>
    </>
  )
}
