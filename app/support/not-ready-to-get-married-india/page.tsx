import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Not Ready to Get Married India — When the Pressure Is Real But You Are Not | LeanOn',
  description: 'Family asking about marriage. Friends getting engaged. You are nowhere near ready — and you cannot explain that to anyone. The pressure is real. So is not being ready.',
  keywords: [
    'not ready to get married India', 'marriage pressure India', 'family pressure to get married India',
    'don\'t want to get married India', 'avoiding marriage India', 'marriage anxiety India',
    'not ready for marriage India men', 'shaadi pressure India', 'marriage age pressure India',
    'parents forcing marriage India', 'resisting arranged marriage India', 'fear of commitment India',
    'everyone getting married India', 'marriage is not for me India', 'marriage pressure 30s India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/not-ready-to-get-married-india', languages: { 'en-IN': 'https://www.leanon.app/support/not-ready-to-get-married-india' } },
  openGraph: {
    title: 'Not Ready to Get Married India | LeanOn',
    description: 'Family asking, friends pairing off, clock ticking. You are not ready. That is allowed.',
    url: 'https://www.leanon.app/support/not-ready-to-get-married-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Marriage Pressure India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it okay to not want to get married in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — though Indian culture makes it very hard to feel that way without constant challenge. Marriage is so central to the social framework that not wanting it, or not being ready for it, is often treated as a problem to be solved rather than a valid position to hold. You are allowed to not want marriage. You are allowed to take as long as you need. You are allowed to have good reasons — or no reason beyond "I am not ready" — and those reasons do not have to satisfy anyone else.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with family pressure to get married?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The honest answer is that there is no single approach that works for everyone, because families differ in how they respond to different things. What is clear: continuously giving vague answers tends to escalate the pressure over time. At some point, a clearer conversation — even an imperfect one — tends to produce more relief than deferral. But that conversation also requires a degree of inner clarity about your own position that is hard to reach when you are still figuring it out. Sometimes the first step is simply naming what you actually think, to someone safe, before you figure out how to communicate it to your family.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel like the only one not getting married. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The feeling of being left behind as friends pair off is one of the most common experiences of young adults in India, even among people who do not actually want to get married. The social timeline in India is steep and visible — weddings, engagements, announcements — and it creates a comparison pressure even for people who are internally sure they are not ready. What you are feeling is extremely common. It does not mean you are wrong to wait, or that you will regret it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can talking to someone help with marriage pressure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — particularly for the specific part of marriage pressure that is hardest to process: the part that is not just about your family\'s views but about your own ambivalence. There may be reasons you are not ready that you have not fully named yet — past experiences, things you witnessed growing up, a sense of your own life that has not been honoured. A peer listener can help you say and hear those things clearly, without the dynamic of a family conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I don\'t want to get married because of what I saw in my parents\' marriage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most legitimate and underacknowledged reasons for marriage skepticism in India. If you grew up watching parents who fought constantly, were unfaithful, or were clearly unhappy together, the lesson your nervous system learned is that marriage produces that kind of relationship. That learning is not accurate — it is a generalisation from a sample of one — but it is real, and it shapes how you feel about the institution. Recognising that this is where the hesitation comes from is often the first step toward deciding what you actually want, separate from what you were shown.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.leanon.app/browse' },
    { '@type': 'ListItem', position: 3, name: 'Not Ready to Get Married India', item: 'https://www.leanon.app/support/not-ready-to-get-married-india' },
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
  .page{max-width:760px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(26px,5vw,42px);font-weight:900;color:var(--navy);line-height:1.13;margin-bottom:18px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;margin-bottom:36px;max-width:620px;}
  h2{font-size:20px;font-weight:800;color:var(--navy);margin-top:38px;margin-bottom:14px;}
  p{font-size:15px;color:#3A6070;line-height:1.82;font-weight:500;margin-bottom:16px;}
  .scenarios{display:grid;gap:10px;margin:20px 0;}
  .scenario{background:white;border-radius:14px;padding:16px 20px;border:1.5px solid var(--border);}
  .scenario p{font-size:14px;color:var(--navy);margin:0;font-style:italic;font-weight:600;line-height:1.6;}
  .card{background:white;border-radius:20px;padding:26px 30px;border:1.5px solid var(--border);margin-bottom:16px;}
  .card-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
  .card h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .card p{font-size:14px;margin-bottom:0;}
  .faq{margin-top:44px;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:18px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:14px;color:#3A6070;line-height:1.72;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:42px 32px;text-align:center;margin-top:52px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:14px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:26px;line-height:1.72;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:13px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
`

const scenarios = [
  '"When are you getting married?" Every family call, every festive gathering, every relative you barely know.',
  'Your friends are getting engaged one by one. The WhatsApp groups are full of shaadi announcements. You are quietly falling behind some imaginary timeline.',
  'You are not sure you want to get married at all — or not yet — and you cannot say that to your parents.',
  'You have seen enough marriages — your parents\', your relatives\' — to be genuinely skeptical about the institution.',
  'You are carrying job pressure, financial pressure, and now this on top. It is too much.',
]

export default function NotReadyToGetMarriedIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Talk to someone</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <a href="/browse">Support</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Not Ready to Get Married India</span>
        </nav>

        <p className="hero-tag">Marriage Pressure · India · Men & Women · Your Timeline</p>
        <h1>Everyone Is Asking. You Are <em>Not Ready.</em></h1>
        <p className="lead">
          The relatives at Diwali. The parents on Sunday calls. The colleagues who already have two kids.
          The invisible timeline that says you should be further along by now. You are not ready for marriage —
          and in India, that is a position you have to actively defend, every day, to everyone,
          while nobody asks whether it is actually the right time for you.
        </p>

        <h2>If This Sounds Familiar</h2>
        <div className="scenarios">
          {scenarios.map((s, i) => (
            <div key={i} className="scenario"><p>{s}</p></div>
          ))}
        </div>

        <h2>Why &quot;Not Ready&quot; Is a Complete Answer</h2>
        <p>
          In India, "not ready" is rarely accepted as a complete answer. It invites follow-up:
          when will you be ready? What does ready look like? Is something wrong?
          The implication is that readiness is a state you reach automatically at a certain age —
          and if you have not, something has gone wrong with you.
        </p>
        <p>
          That framing is wrong. Marriage is a major irreversible decision about who you will build
          your life with. Being cautious, being uncertain, wanting more time — these are not signs of
          immaturity. They are signs of taking the decision seriously. And in a country where arranged
          marriages are still structured around a compressed timeline, that caution often has to be
          maintained against significant social pressure.
        </p>

        <h2>When the Hesitation Comes From What You Saw Growing Up</h2>
        <p>
          For many people, resistance to marriage comes from something specific: a childhood spent watching
          parents who should not have been together. Parents who fought, who were unfaithful, who were visibly
          unhappy. When that is your primary model for what marriage produces, the rational response is
          to not want one.
        </p>
        <p>
          That response makes sense. But it is also worth examining — because your parents&apos; marriage
          is not a guaranteed template for yours. The caution is a reasonable starting point.
          What you do with it is worth thinking through, somewhere safe, without pressure.
        </p>

        <div className="card">
          <div className="card-label">What helps</div>
          <h3>Saying what you actually think, to someone who will not pressure you</h3>
          <p>
            The most useful thing, often, is to say out loud what you cannot say to your family —
            that you are not ready, that you have reasons, that the pressure is making it worse.
            A peer listener is not your parents. They will not push back. They will just listen —
            which is the rare thing.
          </p>
        </div>

        <div className="faq">
          <h2>Questions</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Can Say It Here</h2>
          <p>Talk to a real peer listener — no judgment, no pressure, no agenda. Anonymous. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=relationships"><button className="btn-primary">Talk to someone without the pressure — first 5 min free →</button></a>
            <a href="/support/fear-of-marriage-india"><button className="btn-secondary">Fear of marriage</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
