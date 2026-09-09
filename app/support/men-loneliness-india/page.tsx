import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Men in India Get Lonely Too — They Just Can\'t Say It | LeanOn',
  description: 'Loneliness in men in India is real, common, and almost never discussed. Job pressure, marriage pressure, no one to actually talk to — and no permission to admit any of it. That changes here.',
  keywords: [
    'men loneliness India', 'lonely man India', 'Indian men mental health',
    'men who need to talk India', 'male loneliness India', 'men emotional support India',
    'lonely Indian guy', 'men anxiety India', 'men mental health India',
    'men can\'t talk about feelings India', 'man feeling lonely India',
    'male emotional health India', 'men need support India', 'lonely single man India',
    'men adulting India loneliness', 'men under pressure India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/men-loneliness-india', languages: { 'en-IN': 'https://www.leanon.app/support/men-loneliness-india' } },
  openGraph: {
    title: 'Men in India Get Lonely Too — They Just Can\'t Say It | LeanOn',
    description: 'Job pressure. Marriage pressure. No one to actually talk to. Male loneliness in India is real and almost never discussed.',
    url: 'https://www.leanon.app/support/men-loneliness-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Men Loneliness India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do men in India feel lonely even when surrounded by people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because Indian male friendships — while real and valuable — are usually built around doing things together, not being known by each other. You can have a group of close male friends and still have no one who actually knows how you are feeling inside. The social norm is to be fine, to manage, to not make it heavy. So you can be surrounded by people and still be carrying your inner life entirely alone. That is a specific kind of loneliness — and it is extremely common among Indian men in their 20s and 30s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it okay for a man to admit he is lonely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and doing so is one of the more honest things a person can do. The cultural message in India (and most places) is that men should not admit to loneliness, that it is a sign of weakness or failure. That message is wrong. Loneliness is not a character flaw — it is the accurate response to a gap between the connection you need and the connection you have. Naming it, at minimum to yourself, is the beginning of doing something about it.',
      },
    },
    {
      '@type': 'Question',
      name: 'I have friends but still feel lonely. Why?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because having friends and having deep connection are not the same thing. You can have a full social life — go out, hang out with colleagues, have WhatsApp groups — and still feel unseen by anyone. What creates the feeling of not being lonely is being genuinely known — having someone who knows what you are actually going through, not just what you show. If your friendships have never gone to that depth, you can have many friends and still feel essentially alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is LeanOn and how does it help with loneliness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn connects you with trained peer listeners — real people who have their own lived experience and are specifically trained to listen actively and without judgment. A session is not therapy — it is a real conversation with a real person who is there specifically to hear what you are going through. Many men use LeanOn specifically because it provides what their current social circle cannot: someone to talk to about the actual internal experience, not just the surface level. Sessions start at ₹85 for 15 minutes. First 5 minutes are free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I be judged for how I feel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn listeners are specifically trained not to judge. The whole point is to provide a space where you can say what is actually true — not the version you would tell your family or your male friends or your manager. You can say "I am lonely and I don\'t know why" or "I am exhausted by the pressure and I cannot say that to anyone" or "I don\'t want to get married but my family won\'t listen" — and it will be received, not evaluated.',
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
    { '@type': 'ListItem', position: 3, name: 'Men Loneliness India', item: 'https://www.leanon.app/support/men-loneliness-india' },
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
  .pressures{display:grid;gap:12px;margin:22px 0;}
  .pressure{display:flex;gap:14px;align-items:flex-start;background:white;border-radius:16px;padding:18px 22px;border:1.5px solid var(--border);}
  .p-icon{font-size:20px;flex-shrink:0;}
  .p-body h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .p-body p{font-size:13px;color:var(--gray);margin:0;line-height:1.6;}
  .quote-box{background:var(--light);border-left:4px solid var(--teal);border-radius:0 16px 16px 0;padding:20px 24px;margin:28px 0;}
  .quote-box p{font-size:15px;color:var(--navy);font-style:italic;margin-bottom:6px;}
  .quote-box span{font-size:12px;color:var(--gray);font-weight:700;}
  .card{background:white;border-radius:20px;padding:26px 30px;border:1.5px solid var(--border);margin-bottom:16px;}
  .card-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
  .card h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .card p{font-size:14px;margin-bottom:0;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;margin:20px 0;}
  .rel-card{background:white;border-radius:14px;padding:16px 18px;border:1.5px solid var(--border);display:block;transition:border-color 0.2s;}
  .rel-card:hover{border-color:var(--teal);}
  .rel-card h4{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:3px;}
  .rel-card p{font-size:12px;color:var(--gray);margin:0;}
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
  .crisis{background:#FFF8F0;border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:32px 0;font-size:13px;color:var(--navy);line-height:1.7;}
  .crisis strong{display:block;margin-bottom:4px;}
  .crisis a{color:var(--teal);font-weight:700;}
`

const pressures = [
  { icon: '💼', title: 'Job pressure that goes nowhere', body: 'You are performing, delivering, managing the stress. Nobody at work asks how you are. You are just the output.' },
  { icon: '💒', title: 'Marriage pressure before you are ready', body: 'Parents, relatives, colleagues — everyone wants to know when you are getting married. You are not sure you want to.' },
  { icon: '🏙️', title: 'Adulting alone in a new city', body: 'You moved for work. The colleagues are colleagues, not friends. The evenings are long and empty.' },
  { icon: '🔇', title: 'No one to actually talk to', body: 'Your male friends talk about cricket, work, movies. Not about what is actually happening inside. That is just how it is.' },
  { icon: '📱', title: 'Scrolling when you should be sleeping', body: 'The loneliness is worst at night. You know it. You scroll anyway.' },
  { icon: '🧱', title: 'Performing "fine" for everyone', body: 'Family calls: you are fine. Manager asks: you are fine. Inside: not fine, not for a while.' },
]

export default function MenLonelinessIndiaPage() {
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
          <span style={{color:'var(--navy)'}}>Men Loneliness India</span>
        </nav>

        <p className="hero-tag">Men · Loneliness · India · It Is Okay to Say It</p>
        <h1>You Are Not Fine. And <em>That Is Fine.</em></h1>
        <p className="lead">
          You have a job. You have friends — kind of. You have a phone full of people you could message
          but none of them you would actually tell what is going on inside. That is male loneliness in India.
          It is real. It is common. And it has almost no space to be named.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of suicide or self-harm</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>What Is Actually Going On</h2>
        <div className="pressures">
          {pressures.map((p, i) => (
            <div key={i} className="pressure">
              <div className="p-icon">{p.icon}</div>
              <div className="p-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-box">
          <p>"Just wanted to talk. Feelin lonely. Too many things — job marriage pressure going on. I don't trust in marriage because I have seen my parents themselves not having a good one."</p>
          <span>— a real LeanOn session, shared anonymously</span>
        </div>

        <h2>Why Men in India Cannot Say They Are Lonely</h2>
        <p>
          There is a specific social script for Indian men: you manage things. You provide. You do not
          make your problems the room's problem. Admitting loneliness — or anxiety, or fear, or uncertainty —
          is read as weakness, as something to be fixed or mocked, not something to be heard.
        </p>
        <p>
          So it stays inside. You carry the job pressure, the family expectations, the relationship skepticism,
          the quiet exhaustion of performing okay every single day — and nobody asks, and you would not say
          even if they did. That is not strength. That is just the shape the loneliness takes.
        </p>

        <h2>Male Friendship and Its Specific Limit</h2>
        <p>
          Indian male friendships are often real, loyal, and long-lasting. They are also typically built
          around doing — hanging out, gaming, cricket, eating, working. Not being known.
        </p>
        <p>
          You can have a group chat with your best friends from college and still have never told any of them
          what you are actually going through. Not because they do not care. Because that is not how those
          friendships were built, and changing the register feels too strange, too vulnerable.
        </p>
        <p>
          That gap — between the friends you have and the conversation you need — is where the loneliness lives.
        </p>

        <div className="card">
          <div className="card-label">What talking actually does</div>
          <h3>Not therapy. Just a real conversation.</h3>
          <p>
            LeanOn is not therapy. Our listeners are trained people — some of them men who understand the specific
            pressure of being an Indian man in his 20s or 30s — who will listen without judgment, without
            making it about themselves, without giving unsolicited advice. Just a real conversation.
            Sometimes that is all you needed.
          </p>
        </div>

        <h2>Related Topics Men Talk About on LeanOn</h2>
        <div className="related">
          <a href="/support/not-ready-to-get-married-india" className="rel-card">
            <h4>Not Ready to Get Married</h4>
            <p>Marriage pressure before you are anywhere near ready</p>
          </a>
          <a href="/support/fear-of-marriage-india" className="rel-card">
            <h4>Fear of Marriage</h4>
            <p>When your parents&apos; marriage is why you don&apos;t want one</p>
          </a>
          <a href="/support/adulting-india" className="rel-card">
            <h4>Adulting in India</h4>
            <p>The loneliness of figuring it all out alone</p>
          </a>
          <a href="/support/banking-job-stress-india" className="rel-card">
            <h4>Banking Job Stress</h4>
            <p>The pressure that comes home with you every evening</p>
          </a>
          <a href="/blog/mens-mental-health-talking-is-strength" className="rel-card">
            <h4>Men&apos;s Mental Health</h4>
            <p>Talking is not weakness — it is the harder thing</p>
          </a>
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
          <h2>Just Wanted to Talk?</h2>
          <p>A real person. No judgment. No advice you didn&apos;t ask for. Anonymous, available now. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse?topic=loneliness"><button className="btn-primary">Someone is listening — start free now →</button></a>
            <a href="/how-leanon-works"><button className="btn-secondary">How it works</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
