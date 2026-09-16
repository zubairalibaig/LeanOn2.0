import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'H-1B Visa Stress — When Your Job is Also Your Visa | LeanOn',
  description: 'The anxiety of living on an H-1B in the USA is unlike anything else. Layoff fear, visa limbo, the 60-day countdown — talk to someone who understands what is actually at stake.',
  keywords: [
    'h1b visa stress', 'h1b anxiety', 'h1b layoff fear', 'h-1b visa stress support',
    'h1b job loss visa', 'h1b mental health', 'indian h1b stress usa', 'h1b holder anxiety',
    'h1b 60 day grace period stress', 'visa dependent worker stress', 'nri visa anxiety usa',
    'tech layoff h1b stress',
  ],
  alternates: {
    canonical: 'https://www.leanon.app/usa-h1b-visa-stress',
    languages: { 'en-US': 'https://www.leanon.app/usa-h1b-visa-stress' },
  },
  openGraph: {
    title: 'H-1B Visa Stress — When Your Job is Also Your Visa',
    description: 'You are not just afraid of losing a job. You are afraid of losing your entire life in the USA. That fear deserves to be heard. LeanOn listeners understand H-1B reality.',
    url: 'https://www.leanon.app/usa-h1b-visa-stress',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is H-1B stress different from regular job anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most people, losing a job means financial stress and a job search. For H-1B holders, it means potentially losing your right to stay in the USA — your home, your social life, sometimes your marriage, everything you have built over years. That is an incomparably heavier psychological burden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel constant dread about layoffs on an H-1B?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely normal. H-1B holders in tech especially have been living through waves of mass layoffs since 2022. The combination of employer dependency, limited portability, and the 60-day grace period creates a very specific and exhausting form of anxiety. You are not overreacting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can I talk to about H-1B stress without being judged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn peer listeners understand the H-1B experience. They will not tell you to be positive or explain the visa rules back at you — they will just listen, hold space for what you are feeling, and help you feel less alone in the uncertainty.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I cannot afford therapy while dealing with this stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy in the USA can cost $150-$250 per hour with a six-week waitlist. LeanOn sessions are $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes, with your first 5 minutes free — once per listener. You can start a conversation right now.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk to a LeanOn listener in Hindi or Telugu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, and other Indian languages. Filter by language when you browse.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'H-1B Visa Stress', item: 'https://www.leanon.app/usa-h1b-visa-stress' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
  .logo{font-size:22px;font-weight:900;color:var(--navy);}
  .logo span{color:var(--teal);}
  .nav-cta{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:680px;margin:0 auto;padding:16px 24px 80px;}
  .breadcrumb{font-size:12px;color:var(--gray);margin-bottom:20px;}
  .breadcrumb a{color:var(--teal);}
  .breadcrumb span{margin:0 6px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;margin-bottom:16px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:32px;}
  .cta-hero{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:16px;padding:14px 32px;border-radius:50px;margin-bottom:32px;}
  .card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:18px;font-weight:800;margin-bottom:12px;}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}
  .night-box{background:linear-gradient(135deg,#0F2640,#143354);border-radius:20px;padding:28px;margin-bottom:20px;color:white;}
  .night-box h2{font-size:18px;font-weight:900;margin-bottom:12px;color:white;}
  .night-box p{font-size:15px;line-height:1.78;margin-bottom:10px;color:rgba(255,255,255,0.85);}
  .night-box p:last-child{margin-bottom:0;}
  .night-box .cta-night{display:inline-block;background:var(--orange);color:white;font-weight:800;font-size:15px;padding:12px 28px;border-radius:50px;margin-top:16px;}
  .checklist{list-style:none;margin-top:10px;}
  .checklist li{font-size:15px;color:#3A6070;line-height:1.7;padding:6px 0;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start;}
  .checklist li:last-child{border-bottom:none;}
  .checklist li::before{content:'💙';flex-shrink:0;}
  .faq-item{border-top:1px solid var(--border);padding:16px 0;}
  .faq-item:last-child{border-bottom:1px solid var(--border);}
  .faq-item h3{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.4;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.7;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:32px;color:white;margin-bottom:24px;}
  .cta h2{font-size:22px;font-weight:900;margin-bottom:10px;}
  .cta p{font-size:14px;opacity:.8;margin-bottom:20px;}
  .btn-white{background:white;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:16px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-orange{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;padding:12px 28px;border-radius:50px;border:none;cursor:pointer;display:inline-block;margin-top:10px;}
  .related{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
  .related a{background:white;border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;font-size:13px;font-weight:700;color:var(--navy);line-height:1.4;}
  .related a:hover{border-color:var(--teal);}
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:24px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}
  @media(max-width:480px){.related{grid-template-columns:1fr;}}
`

export default function UsaH1bVisaStressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{S}</style>

      <nav>
        <a href="/" className="logo">Lean<span>On</span></a>
        <a href="/auth" className="nav-cta">Open app</a>
      </nav>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span>H-1B Visa Stress
        </div>

        <h1>You Are Not Just Afraid of Losing Your Job.<br />You Are Afraid of Losing Your Entire Life Here.</h1>
        <p className="lead">
          For most people, a layoff is stressful. For H-1B holders, it is an existential threat. Your apartment,
          your friends, your years of building a life in the USA — all of it tied to a single employer. That is
          an enormous psychological burden that most people around you will never understand.
        </p>

        <a href="/browse" className="cta-hero">Talk to someone who gets it — first 5 min free →</a>

        <div className="card">
          <h2>The specific weight of H-1B anxiety</h2>
          <ul className="checklist">
            <li>Every layoff news cycle sends a wave of dread through your body that your American colleagues do not feel.</li>
            <li>You perform well, smile, stay late — partly because you are good, partly because you cannot afford to be seen as disposable.</li>
            <li>The 60-day grace period clock ticking in the back of your mind, even when things are fine.</li>
            <li>Dependent family members whose visa status is also tied to yours.</li>
            <li>Years on the green card queue — and the fear of what losing this job means for that timeline.</li>
            <li>Not being able to talk about this with American colleagues who just do not get the stakes.</li>
          </ul>
        </div>

        <div className="night-box">
          <h2>😔 The limbo is its own kind of suffering</h2>
          <p>Even when nothing bad has happened yet, the permanent awareness that it could — at any moment,
            for any reason — is exhausting. You cannot fully relax. You cannot make long-term plans.
            You cannot stop monitoring the news.</p>
          <p>A LeanOn listener will not fix the visa situation. But they will give you a space to say all
            of this out loud to someone who already understands what is actually at stake.</p>
          <a href="/browse" className="cta-night">Find a listener now →</a>
        </div>

        <div className="card">
          <h2>Why your usual support system does not help enough</h2>
          <p>Your American colleagues think visa concerns are just &quot;paperwork stress.&quot; Your family in
            India worries and adds to the pressure rather than relieving it. Your partner is going through
            the same anxiety so you try not to pile on.</p>
          <p>A LeanOn listener is a neutral, confidential space. They understand the H-1B system without
            needing it explained. They will sit with you in the uncertainty without minimising it or
            catastrophising it.</p>
          <p>Sessions start at <strong>$10 for 15 minutes</strong> — your first 5 minutes free — once per listener.</p>
        </div>

        <div className="card">
          <h2>It is okay to not be okay about this</h2>
          <p>The culture around H-1B workers rewards stoicism. You are supposed to be grateful, adaptable,
            not-a-burden. There is very little space to say: this is genuinely terrifying and I am not
            handling it as well as I look.</p>
          <p>You are handling an objectively stressful situation. The dread you feel is a rational
            response to real structural precarity — not a weakness, not an overreaction. It deserves
            to be acknowledged.</p>
        </div>

        <div className="cta">
          <h2>Someone is ready to listen right now</h2>
          <p>$10 for 15 min · $15 for 30 min · $20 for 45 min · First 5 min always free.</p>
          <a href="/browse" className="btn-white">Browse listeners →</a><br />
          <a href="/auth" className="btn-orange">Join free</a>
        </div>

        <div className="card">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Why is H-1B stress different from regular job anxiety?</h3>
            <p>For H-1B holders, losing a job means potentially losing the right to stay in the USA —
              your home, your social life, sometimes your marriage, everything you have built. That is
              an incomparably heavier psychological burden.</p>
          </div>
          <div className="faq-item">
            <h3>Is it normal to feel constant dread about layoffs on an H-1B?</h3>
            <p>Completely normal. The combination of employer dependency, limited portability, and the
              60-day grace period creates a very specific and exhausting form of anxiety. You are not overreacting.</p>
          </div>
          <div className="faq-item">
            <h3>Who can I talk to about H-1B stress without being judged?</h3>
            <p>LeanOn peer listeners understand the H-1B experience. They will not tell you to be positive —
              they will just listen, hold space for what you are feeling, and help you feel less alone.</p>
          </div>
          <div className="faq-item">
            <h3>What if I cannot afford therapy while dealing with this stress?</h3>
            <p>Therapy in the USA costs $150-$250 per hour with long waitlists. LeanOn sessions are
              $10 for 15 minutes, $15 for 30 minutes, and $20 for 45 minutes — first 5 minutes free — once per listener.</p>
          </div>
          <div className="faq-item">
            <h3>Can I talk to a LeanOn listener in Hindi or Telugu?</h3>
            <p>Yes. Many LeanOn listeners speak Hindi, Telugu, Tamil, Kannada, Malayalam, and other
              Indian languages. Filter by language when you browse.</p>
          </div>
        </div>

        <div className="related">
          <a href="/usa-rant-to-someone">Need to rant? →</a>
          <a href="/usa-loneliness">Feeling lonely in the USA →</a>
          <a href="/usa-nri-support">NRI emotional support →</a>
          <a href="/usa-empathy-listener">Empathy listener →</a>
          <a href="/usa-talk-to-someone">Someone to talk to →</a>
          <a href="/usa-therapy-alternative">Therapy alternative →</a>
        </div>

        <div className="disclaimer">
          <p>⚠️ If you are in crisis or thinking about self-harm, please reach out immediately:<br />
            <strong>NIMHANS helpline: 080-46110007</strong> &nbsp;|&nbsp;
            <strong>Tele-MANAS: 14416</strong> (free, 24/7)<br />
            LeanOn is peer support — not a substitute for professional mental health care or emergency services.
          </p>
        </div>
      </div>
    </>
  )
}
