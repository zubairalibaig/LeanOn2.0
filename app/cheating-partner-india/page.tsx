import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'My Partner Is Cheating — Who Do I Talk To? | LeanOn India',
  description: 'Found out your partner is cheating? You need someone neutral, not your mother or friends. Anonymous peer support from ₹160.',
  keywords: [
    'cheating partner India', 'husband cheating India', 'wife cheating India',
    'infidelity support India', 'partner cheating what to do India',
    'discovered affair India', 'betrayal support India', 'cheating spouse India',
  ],
  alternates: { canonical: 'https://www.leanon.app/cheating-partner-india', languages: { 'en-IN': 'https://www.leanon.app/cheating-partner-india' } },
  openGraph: {
    title: 'My Partner Is Cheating — Who Do I Talk To? | LeanOn India',
    description: 'Found out your partner is cheating? You need someone neutral, not your mother or friends. Anonymous peer support from ₹160.',
    url: 'https://www.leanon.app/cheating-partner-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Cheating Partner India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'I just found out my partner is cheating. What should I do first?',
      acceptedAnswer: { '@type': 'Answer', text: 'The first hours are the hardest. You do not need to make any decisions right now. You do not need to confront, leave, or forgive. You just need to get through the next few hours. The most important thing is to talk to someone who has no stake in the outcome — not your mother, not mutual friends, not your partner. A neutral listener lets you process what you are feeling without anyone pushing you toward a conclusion. That is exactly what LeanOn is for.' },
    },
    {
      '@type': 'Question',
      name: 'Why can\'t I just talk to my friends or family?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your friends and family love you. That is also the problem. They will have opinions. They will tell others. They will take sides. They will push you to act before you are ready. Or they will say things like "I always knew" or "I told you so" — which is the last thing you need. A neutral listener has no history with you and no history with your partner. They will not gossip. They will not judge. They will just listen while you figure out what you are feeling.' },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn a place to get advice about whether to leave?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn listeners do not give advice about what you should do. They give you a space to hear yourself think. Most people who are dealing with infidelity are not ready for advice — they are in shock, they are cycling through emotions, and they need to speak out loud before they can even figure out what they want. Listeners help you reach clarity by listening, not by directing.' },
    },
    {
      '@type': 'Question',
      name: 'Will it stay anonymous?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. You sign up with a first name and phone number. Listeners sign confidentiality agreements. Nobody in your life will know you talked to anyone. This is especially important in India, where social networks are dense and word travels fast. LeanOn is the place you can say the thing you cannot say anywhere else.' },
    },
    {
      '@type': 'Question',
      name: 'What does infidelity support actually look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'You talk. The listener follows what you are saying and reflects it back. If you are in shock, they hold space for the silence. If you are angry, they let you be angry without trying to calm you down. If you are cycling between anger and grief and self-blame, they track all of it without telling you which one is the right response. The session ends and you feel — not fixed, but lighter. More able to think. Less alone in it.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sessions start at ₹160. Your first 5-minute session is free — no charge, no commitment. If a session is not useful in the first 5 minutes, you stop and pay nothing. There is no subscription and no appointment needed. You can start right now.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Cheating Partner India', item: 'https://www.leanon.app/cheating-partner-india' },
  ],
}

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
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
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
`

export default function CheatingPartnerIndiaPage() {
  const faqs = faqSchema.mainEntity
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>&#x203A;</span>
          <span style={{color:'var(--navy)'}}>Cheating Partner India</span>
        </nav>

        <div className="hero">
          <p className="badge">Infidelity &middot; Betrayal &middot; Anonymous Support</p>
          <h1>You just found out. You can&apos;t think. You need to talk to someone who <em>isn&apos;t your mother.</em></h1>
          <p className="lead">The shock, the replaying, the not knowing who to trust. You need a neutral person with no stake in what happens next. Anonymous peer support, from &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="cta-hero">Talk to someone now &rarr;</a>
        </div>

        <div className="section">
          <h2>What You Are Feeling Right Now</h2>
          <h3>Shock</h3>
          <p>The first response to finding out about infidelity is usually not anger. It is shock. A kind of cognitive shutdown where you cannot process what you just learned. You may feel numb, or your mind may be spinning. Both are normal.</p>
          <h3>Betrayal</h3>
          <p>Betrayal is not just about the physical act. It is about all the times they looked at you and did not tell you. All the moments that now feel rewritten. The entire past is being edited in real time and you cannot stop it.</p>
          <h3>Self-doubt</h3>
          <p>The hardest part of infidelity is not what they did. It is the question it creates: what does this say about me? Was I not enough? Did I miss the signs? Should I have known? These questions are natural but they are lies. What happened is about them, not you.</p>
          <h3>Not knowing who to tell</h3>
          <p>You want to talk but you cannot. Your family will blow it up. Your friends will gossip. You do not want to become a story. And you are not ready to decide anything — you just need to breathe and be heard by someone who will keep this safe.</p>
        </div>

        <div className="section">
          <h2>Why You Cannot Talk to Friends Yet</h2>
          <p>Your friends love you. That is exactly the problem. When you tell them, it stops being yours. They will process it through their own anxieties about their own relationships. They will take sides. They will tell each other. In India especially, where social circles are tight and families know each other, word travels in ways you cannot control.</p>
          <p>There is also the pressure problem. Once you tell someone in your circle, they have an opinion. And then you feel accountable to that opinion. If you eventually decide to stay, you will have to justify it. If you decide to leave, you will need support they may not give in the way you need. The decision — whatever it is — belongs to you. And right now, you need to make space for your own feelings before anyone else&apos;s opinions crowd in.</p>
        </div>

        <div className="section">
          <h2>What a Neutral Listener Offers</h2>
          <p>A LeanOn listener has no stake in what you decide. They are not going to tell you to leave or to stay. They are not going to tell you how they would feel in your situation. They are going to listen while you figure out what you are actually feeling underneath the shock.</p>
          <p>They are trained to hold space for complexity. For the part of you that is furious and the part that still loves them. For the grief and the anger at the same time. They do not rush you to resolution. They just stay present with wherever you are.</p>
          <p>After that conversation, most people describe feeling less alone. More able to think. Like something has shifted slightly, even though nothing external has changed. That is the function of being genuinely heard.</p>
        </div>

        <div className="section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.name}</p>
              <p className="faq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You do not have to carry this alone.</h2>
          <p>Anonymous peer support. A real person, no judgment. From &#x20b9;160. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Find a listener &rarr;</a>
        </div>

        <div className="section">
          <h2>You Might Also Find This Helpful</h2>
          <div className="related">
            <a href="/affair-recovery-india">Affair recovery India &rarr;</a>
            <a href="/toxic-relationship-india">Toxic relationship India &rarr;</a>
            <a href="/emotional-abuse-india">Emotional abuse India &rarr;</a>
            <a href="/heartbreak-india">Heartbreak India &rarr;</a>
            <a href="/support/relationship-stress">Relationship stress &rarr;</a>
          </div>
        </div>
      </div>
    </>
  )
}
