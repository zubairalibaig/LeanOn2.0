import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Peer Support in India — A Practical Guide | LeanOn',
  description: 'What is peer support, how it differs from therapy and counselling, when to use it, how to choose a peer listener, and what to expect. A practical guide written by LeanOn, an India-origin peer support platform.',
  alternates: { canonical: 'https://www.leanon.app/peer-support-india-guide' },
  openGraph: {
    title: 'Peer Support in India — A Practical Guide | LeanOn',
    description: 'What peer support is, how it differs from therapy, when to use it, and how to choose a peer listener. A practical guide from LeanOn.',
    url: 'https://www.leanon.app/peer-support-india-guide',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'What is peer support?',
    a: 'Peer support is non-clinical emotional support from someone who has lived through a similar experience. Unlike a therapist or counsellor, a peer supporter is not licensed to diagnose or treat mental health conditions. What they offer instead is mutual understanding, shared experience, and a space to be heard by someone who genuinely gets it. SAMHSA\'s National Model Standards for Peer Support Certification describe peer support around lived experience, mutuality, and non-clinical support (SAMHSA, 2023).',
  },
  {
    q: 'How is peer support different from therapy?',
    a: 'Therapy is clinical care delivered by a qualified professional — a psychologist, psychiatrist, or counsellor — who is licensed to assess and treat mental health conditions. Peer support is non-clinical. A peer supporter brings lived experience and listens without diagnosing. Both have value, but they serve different needs. If you are dealing with a clinical condition — persistent depression, severe anxiety, OCD, trauma requiring structured treatment — you need professional care, not peer support alone. If you need someone to listen, process a difficult week, or feel less alone, peer support can help.',
  },
  {
    q: 'Is peer support the same as counselling?',
    a: 'No. In India, counselling typically refers to professional support from a licensed counsellor — usually someone with a postgraduate qualification in psychology or counselling. Counsellors can assess, provide structured interventions and refer for psychiatric care. Peer support is non-clinical and based on lived experience. LeanOn is peer support, not counselling or therapy.',
  },
  {
    q: 'Who can benefit from peer support?',
    a: 'People dealing with everyday emotional difficulty who want to be heard by someone who has been through something similar: loneliness, burnout, relationship stress, family pressure, grief, career confusion, homesickness, or simply a hard week. The WHO Commission on Social Connection (2024) has identified loneliness as a significant public health challenge — peer support is one accessible response. It is not appropriate as the only support for clinical mental health conditions.',
  },
  {
    q: 'When should I use peer support instead of therapy?',
    a: 'Peer support may be appropriate when: you want emotional connection rather than clinical assessment; you need to be heard by someone with similar lived experience; you want affordable, accessible support without an appointment; you are not dealing with a clinical condition that requires diagnosis or treatment. Seek professional help when: you are experiencing persistent, severe or worsening symptoms; you need medication, a formal diagnosis, or structured clinical treatment; or you are in crisis.',
  },
  {
    q: 'How do I choose a peer listener?',
    a: 'Look for someone with lived experience in the area you want to discuss. Read their bio carefully — what have they actually been through? Check their rating and number of sessions. On LeanOn, every listener has been screened through an application review, identity verification, and an assessment on active listening, boundaries and crisis referral before going live. You can browse listener profiles and choose who you want to talk to before starting a session.',
  },
  {
    q: 'Is peer support confidential?',
    a: 'Peer listeners on LeanOn are bound by confidentiality. LeanOn does not share session content. You sign up with a phone number and first name — no last name or photograph required. However, LeanOn is not a fully anonymous service: a phone number is required to create an account.',
  },
  {
    q: 'What is the difference between peer support and a friend?',
    a: 'A friend has their own relationship with you, their own reactions, and their own stake in the outcome. A peer listener has no prior relationship with you, no social stake, and no history to navigate. They listen without judgment from a position of lived experience — without the dynamics of reciprocal friendship. Many people find it easier to say the actual version of something to a stranger with relevant experience than to a friend.',
  },
  {
    q: 'Is peer support available in Indian languages?',
    a: 'Yes. LeanOn has peer listeners who speak English, Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia and Urdu. You can filter the listener browse by language.',
  },
  {
    q: 'What does a peer support session on LeanOn cost?',
    a: 'In India: the listener\'s per-minute rate × minutes + a flat ₹10 platform fee. At ₹10/min, a 15-minute session is ₹160. Voice calls are ₹5/min more than text. Outside India, flat rates apply: US$10 (15 min), US$15 (30 min), US$20 (45 min). Every new account receives one free 5-minute introduction.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Peer Support in India — A Practical Guide',
      description: String(metadata.description),
      url: 'https://www.leanon.app/peer-support-india-guide',
      isPartOf: { '@type': 'WebSite', name: 'LeanOn', url: 'https://www.leanon.app' },
      publisher: { '@type': 'Organization', name: 'LeanOn', url: 'https://www.leanon.app' },
      about: [
        { '@type': 'Thing', name: 'Peer support' },
        { '@type': 'Thing', name: 'Mental health support India' },
        { '@type': 'Thing', name: 'Emotional support' },
      ],
      citation: [
        {
          '@type': 'CreativeWork',
          name: 'National Model Standards for Peer Support Certification',
          publisher: { '@type': 'Organization', name: 'SAMHSA' },
          url: 'https://www.samhsa.gov/peer-support',
          datePublished: '2023',
        },
        {
          '@type': 'CreativeWork',
          name: 'WHO Commission on Social Connection',
          publisher: { '@type': 'Organization', name: 'World Health Organization' },
          url: 'https://www.who.int/groups/commission-on-social-connection',
          datePublished: '2024',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
        { '@type': 'ListItem', position: 2, name: 'Peer Support India Guide', item: 'https://www.leanon.app/peer-support-india-guide' },
      ],
    },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:var(--teal);}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:920px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a{color:var(--gray);}
  h1{font-size:clamp(26px,5.5vw,40px);font-weight:900;color:var(--navy);line-height:1.18;margin-bottom:16px;}
  .lead{font-size:17px;color:var(--gray);line-height:1.8;font-weight:500;max-width:640px;margin-bottom:36px;}
  .byline{font-size:13px;color:var(--gray);font-weight:600;margin-bottom:40px;}
  .byline a{color:var(--teal);}
  .toc{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:20px 24px;margin-bottom:48px;}
  .toc h2{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:12px;}
  .toc ol{padding-left:20px;}
  .toc li{font-size:14px;font-weight:600;color:var(--gray);margin-bottom:8px;line-height:1.5;}
  .toc li a{color:var(--teal);}
  .section{margin-bottom:52px;}
  h2{font-size:22px;font-weight:900;color:var(--navy);margin-bottom:16px;scroll-margin-top:20px;}
  h3{font-size:17px;font-weight:800;color:var(--navy);margin:20px 0 10px;}
  p{font-size:16px;line-height:1.82;color:var(--gray);margin-bottom:14px;}
  ul,ol{padding-left:22px;margin-bottom:14px;}
  li{font-size:15px;line-height:1.7;color:var(--gray);margin-bottom:6px;}
  .callout{background:var(--light);border-left:4px solid var(--teal);border-radius:0 12px 12px 0;padding:16px 20px;margin:20px 0;}
  .callout p{margin:0;font-size:15px;font-weight:600;color:var(--navy);}
  .crisis-box{background:#FFF4E5;border:1.5px solid #FFD09B;border-radius:12px;padding:16px 20px;margin:24px 0;}
  .crisis-box strong{color:var(--navy);}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:last-child{border-bottom:none;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-a{font-size:15px;color:var(--gray);line-height:1.8;font-weight:500;}
  .sources{background:var(--light);border-radius:12px;padding:16px 20px;margin-top:24px;}
  .sources h3{font-size:14px;font-weight:800;color:var(--navy);margin:0 0 10px;}
  .sources ul{padding-left:18px;}
  .sources li{font-size:13px;color:var(--gray);margin-bottom:6px;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-top:48px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .btn-cta{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
`

export default function PeerSupportIndiaGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Peer Support India Guide</span>
        </nav>

        <h1>Peer Support in India — A Practical Guide</h1>
        <p className="lead">What peer support is, how it is different from therapy and counselling, when it helps, and how to choose a peer listener.</p>
        <p className="byline">Written by <a href="/">LeanOn</a> — an India-origin peer support platform. Last updated September 2026.</p>

        <nav className="toc" aria-label="Contents">
          <h2>Contents</h2>
          <ol>
            <li><a href="#what-is-peer-support">What is peer support?</a></li>
            <li><a href="#peer-vs-therapy">Peer support vs therapy</a></li>
            <li><a href="#peer-vs-friend">Peer support vs talking to a friend</a></li>
            <li><a href="#peer-vs-ai">Peer support vs AI chatbots</a></li>
            <li><a href="#when-to-use">When to use peer support — and when not to</a></li>
            <li><a href="#how-to-choose">How to choose a peer listener</a></li>
            <li><a href="#leanon">How LeanOn implements peer support</a></li>
            <li><a href="#safety">Safety model and crisis boundaries</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">Frequently asked questions</a></li>
          </ol>
        </nav>

        <div id="what-is-peer-support" className="section">
          <h2>What is peer support?</h2>
          <p>Peer support is non-clinical emotional support delivered by someone with lived experience of a similar challenge. The defining feature is the lived experience: the supporter has personally navigated something like what the person seeking support is going through — loneliness, burnout, grief, relationship difficulty, family pressure, homesickness.</p>
          <p>SAMHSA&apos;s <em>National Model Standards for Peer Support Certification</em> (2023) defines peer support around four core values: lived experience, mutuality, recovery orientation, and peer support as a distinct practice — not a lower-tier substitute for professional care, but a different kind of support with its own distinct value.</p>
          <div className="callout">
            <p>Peer support is not therapy, not counselling, and not clinical care. It is a specific and valuable form of non-clinical human support based on shared lived experience.</p>
          </div>
        </div>

        <div id="peer-vs-therapy" className="section">
          <h2>Peer support vs therapy and counselling</h2>
          <p>Understanding the difference is important because the needs are different and choosing the wrong form of support can be genuinely harmful.</p>

          <h3>Therapy</h3>
          <p>Therapy — provided by a licensed psychologist, psychiatrist, or counsellor — is clinical care. A therapist is qualified to assess and diagnose mental health conditions, design treatment plans, and provide structured psychotherapy. In India, this typically requires a postgraduate qualification in clinical psychology, psychiatry, or counselling psychology. Therapy is appropriate for diagnosed or suspected clinical conditions: major depression, OCD, trauma requiring structured treatment, bipolar disorder, severe anxiety disorders, eating disorders.</p>

          <h3>Counselling</h3>
          <p>Counselling in India is a professional service delivered by a trained counsellor. It may involve structured interventions, assessment, and referral. It is clinical or semi-clinical in nature and distinct from peer support.</p>

          <h3>Peer support</h3>
          <p>Peer support is non-clinical. A peer supporter is not licensed to diagnose or treat. Their value is in lived experience and human connection, not clinical expertise. It is appropriate for everyday emotional difficulty — loneliness, burnout, a hard week at work, relationship stress, grief, family pressure, homesickness, feeling overwhelmed.</p>
          <p>Choosing peer support instead of needed clinical care is not an acceptable substitute. But for the large range of everyday emotional difficulty that does not require clinical treatment, peer support is accessible, affordable, and can be meaningfully helpful.</p>
        </div>

        <div id="peer-vs-friend" className="section">
          <h2>Peer support vs talking to a friend</h2>
          <p>Friends offer something irreplaceable — history, care, continuity. But friends have their own stake in the relationship, their own reactions, and their own limitations. Many people find it genuinely difficult to say the actual version of something to someone who knows them, their family, their social circle.</p>
          <p>A peer listener has no prior relationship with you, no social stake, and no history to navigate. They listen from a position of lived experience — without the dynamics of reciprocal friendship, without the risk of judgment affecting an ongoing relationship, and without the burden of worrying about how the conversation affects them. Many people find it easier to say what they actually mean to someone with relevant experience who has no stake in the outcome.</p>
        </div>

        <div id="peer-vs-ai" className="section">
          <h2>Peer support vs AI chatbots</h2>
          <p>AI assistants (ChatGPT, Gemini, Claude, Perplexity) are useful for many things: information, reflection, brainstorming, working through a problem. What they cannot offer is human presence — a real person with their own experience, their own stake in the conversation, and a genuine response rather than a pattern match.</p>
          <p>The WHO Commission on Social Connection (2024) has identified loneliness as a significant global health challenge — citing a lack of <em>social connection</em> with other people as a distinct need. If what a person needs is specifically another human being to listen, an AI conversation does not meet that need in the same way, regardless of how sophisticated the AI response is.</p>
          <p>LeanOn connects people with real human peer listeners. It is not an AI and has no AI-generated responses.</p>
        </div>

        <div id="when-to-use" className="section">
          <h2>When to use peer support — and when not to</h2>

          <h3>Peer support may help when:</h3>
          <ul>
            <li>You want to be heard by someone who has been through something similar.</li>
            <li>You are dealing with loneliness, burnout, relationship stress, family pressure, grief, career confusion, or everyday emotional difficulty.</li>
            <li>You want support without a formal appointment or clinical process.</li>
            <li>You want affordable access to a real human conversation.</li>
            <li>You are an Indian living abroad and want to talk to someone who understands the cultural context.</li>
          </ul>

          <h3>Seek professional help when:</h3>
          <ul>
            <li>You are experiencing persistent, severe, or worsening symptoms.</li>
            <li>You need a formal diagnosis, medication, or structured clinical treatment.</li>
            <li>You are dealing with a clinical condition — major depression, severe anxiety, trauma, OCD, bipolar disorder.</li>
          </ul>

          <div className="crisis-box">
            <strong>In crisis?</strong> If you are experiencing thoughts of self-harm or suicide, please contact a crisis service immediately.
            India crisis lines: <strong>NIMHANS: 080-46110007</strong> · <strong>Tele-MANAS: 14416</strong> (free, 24/7, Government of India).
            LeanOn is not an emergency or crisis service.
          </div>
        </div>

        <div id="how-to-choose" className="section">
          <h2>How to choose a peer listener</h2>
          <p>The quality of peer support depends largely on the listener&apos;s actual lived experience in the area you want to discuss.</p>
          <ul>
            <li><strong>Lived experience</strong> — what has the listener actually been through? Read their bio carefully. Shared experience is the core of peer support.</li>
            <li><strong>Topic match</strong> — filter by the topic you want to discuss (loneliness, burnout, relationship stress, grief, etc.).</li>
            <li><strong>Language</strong> — if you want to speak in your first language, filter by language.</li>
            <li><strong>Rating and sessions</strong> — a listener with a higher rating and more completed sessions has a demonstrated track record.</li>
            <li><strong>Free introduction</strong> — use the free 5-minute first session to get a sense of whether the listener&apos;s style works for you.</li>
          </ul>
        </div>

        <div id="leanon" className="section">
          <h2>How LeanOn implements peer support</h2>
          <p>LeanOn is an India-origin peer support platform connecting people with real human peer listeners for private one-to-one conversations by text or voice.</p>

          <h3>Who the listeners are</h3>
          <p>Every listener on LeanOn is a real person who has personally lived through what they support. They apply to join and are screened through a process that includes identity verification with a private selfie, application review, and an assessment on active listening, holding boundaries, and knowing when to refer someone to professional help. Each application is reviewed before a listener goes live.</p>
          <p>Listeners are not therapists and do not claim to be. They are peer supporters — people who listen from lived experience, not clinical training. LeanOn does not have a listener training programme; listeners are screened, not trained by LeanOn.</p>

          <h3>What a session is and is not</h3>
          <p>A LeanOn session is a private one-to-one conversation — text or voice — with a real human listener. It is not clinical care. Listeners do not diagnose, prescribe, or provide structured psychotherapy. Sessions are for being heard, not for clinical assessment.</p>

          <h3>Privacy</h3>
          <p>Sessions are private. LeanOn does not share session content. You sign up with a phone number (OTP verified) and a first name — no last name or photograph required. LeanOn is not a fully anonymous service: an account with a phone number is required.</p>

          <h3>Availability</h3>
          <p>Listeners set their own availability. Most India-based listeners are most active during evening IST hours. There is no appointment required — browse who is available now and start a session immediately. Listener availability varies and is not guaranteed at all hours.</p>
        </div>

        <div id="safety" className="section">
          <h2>Safety model and crisis boundaries</h2>
          <p>LeanOn is peer support, not crisis care. Listeners are screened on how to handle disclosures that require professional intervention, including how to refer to appropriate crisis services. They are not trained counsellors or crisis workers.</p>
          <p>If you disclose something that suggests immediate risk — thoughts of self-harm, suicidal intent, a dangerous situation — a LeanOn listener will refer you to appropriate services. They will not attempt to provide crisis intervention themselves.</p>
          <div className="crisis-box">
            <strong>India crisis helplines:</strong><br/>
            NIMHANS: <a href="tel:08046110007">080-46110007</a><br/>
            Tele-MANAS: <a href="tel:14416">14416</a> (free · 24/7 · Government of India)
          </div>
        </div>

        <div id="pricing" className="section">
          <h2>Pricing</h2>
          <p>Every new account receives one free 5-minute introduction. There are no subscriptions or automatic charges.</p>
          <ul>
            <li><strong>India:</strong> listener&apos;s per-minute rate × minutes + ₹10 flat platform fee. At ₹10/min: 15 min = ₹160, 30 min = ₹310, 45 min = ₹460. Voice calls: +₹5/min.</li>
            <li><strong>Outside India:</strong> flat rates — US$10 (15 min), US$15 (30 min), US$20 (45 min).</li>
          </ul>
          <p>Unused wallet balance is fully refundable. Full pricing: <a href="/pricing">leanon.app/pricing</a>.</p>
        </div>

        <div id="faq" className="section">
          <h2>Frequently asked questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <p className="faq-q">{f.q}</p>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="sources">
          <h3>Sources cited</h3>
          <ul>
            <li>SAMHSA. <em>National Model Standards for Peer Support Certification</em>. 2023. <a href="https://www.samhsa.gov/peer-support" rel="noopener">samhsa.gov/peer-support</a></li>
            <li>World Health Organization. <em>WHO Commission on Social Connection</em>. 2024. <a href="https://www.who.int/groups/commission-on-social-connection" rel="noopener">who.int/groups/commission-on-social-connection</a></li>
          </ul>
        </div>

        <div className="cta-card">
          <h2>Ready to talk to a peer listener?</h2>
          <p>Browse real human peer listeners by topic and language. Private, no appointment needed. First 5 minutes free.</p>
          <a href="/browse" className="btn-cta">Browse listeners →</a>
        </div>
      </div>
    </>
  )
}
