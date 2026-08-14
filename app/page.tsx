import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'LeanOn — Free Peer Emotional Support India | Talk to Someone Now',
  description: 'Talk to a trained peer listener in India, anonymously. First session is free. Available 24/7. Connect with empathetic listeners for anxiety, loneliness, grief, and more.',
  alternates: { canonical: 'https://www.leanon.app', languages: { 'en-IN': 'https://www.leanon.app' } },
  keywords: [
    'leanon', 'lean on', 'LeanOn', 'lean on app', 'leanon app India',
    'someone to lean on', 'peer support India', 'mental health India',
    'talk to someone India', 'emotional support India',
    'anonymous emotional support India', 'peer listener app India',
    'talk to someone free India', 'emotional support chat India',
    'anxiety help India', 'loneliness app India', 'burnout support', 'grief support India',
    'someone to talk to', 'mental health chat', 'online emotional support',
    'online listener India', 'peer support India',
    'empathy', 'empathetic listener', 'empathy app India', 'peer counselling India',
    'compassionate listener India', 'active listening India',
    'affordable online counselling India', 'cheaper than therapy India',
    'book a listening session India', 'online emotional support session India',
    'talk to someone right now', 'no one to talk to', 'someone to listen to me',
    'how to stop overthinking at night', 'online counselling cost India',
  ],
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'LeanOn — Peer Support Platform',
  description: 'India\'s peer support platform. Talk to real people who have lived through what you\'re facing.',
  url: 'https://www.leanon.app',
  brand: { '@type': 'Brand', name: 'LeanOn' },
  // Price markup makes this page eligible for the price rich snippet on
  // commercial-intent queries. Without an `offers` block a Product is not
  // eligible at all, which is why our pricing never appeared in results.
  // Range = a real session: 15 min at the ₹8/min floor + ₹10 platform fee = ₹130;
  // 45 min at the ₹25/min ceiling + ₹10 = ₹1135. offerCount = 15/30/45-min blocks.
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '130',
    highPrice: '1135',
    offerCount: '3',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      name: 'Finally someone who truly understood',
      reviewBody: 'I was dreading another sleepless night. LeanOn connected me with someone who just got it. No judgment, no advice I didn\'t ask for. Just someone who listened.',
      author: { '@type': 'Person', name: 'Priya M.' },
      locationCreated: { '@type': 'City', name: 'Bengaluru' },
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      name: 'Exactly what a founder needs',
      reviewBody: 'As a founder going through a hard patch I felt completely alone. Talking to someone who survived their own startup failure was exactly what I needed.',
      author: { '@type': 'Person', name: 'Arjun K.' },
      locationCreated: { '@type': 'City', name: 'Mumbai' },
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      name: 'More affordable and honest than anything else',
      reviewBody: 'More affordable and more honest than anything else I\'ve tried. I\'ve booked 4 sessions now and each one helped.',
      author: { '@type': 'Person', name: 'Sneha R.' },
      locationCreated: { '@type': 'City', name: 'Hyderabad' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is a peer support platform built on empathy — someone to lean on anytime you need it. You talk to real people in India who have lived through what you\'re facing: loneliness, burnout, anxiety, grief, relationships, and more. Every listener brings genuine empathy from lived experience, not a script. It is not therapy, but real human connection available 24/7.' } },
    { '@type': 'Question', name: 'What makes LeanOn listeners empathetic?', acceptedAnswer: { '@type': 'Answer', text: 'Every LeanOn listener has personally lived through what they support others with — loneliness, anxiety, burnout, grief, or relationship pain. That lived experience is what makes their empathy real rather than rehearsed. They are trained in active listening and empathetic communication, so you are heard without being judged, fixed, or rushed.' } },
    { '@type': 'Question', name: 'What does "lean on" mean in LeanOn?', acceptedAnswer: { '@type': 'Answer', text: '"Lean on" means having someone you can rely on emotionally — someone who supports you without judgment when you\'re going through something hard. LeanOn (the platform) gives everyone access to that kind of support through verified peer listeners who have lived experience.' } },
    { '@type': 'Question', name: 'Is LeanOn free?', acceptedAnswer: { '@type': 'Answer', text: 'Each new user gets up to 3 free 5-minute sessions (one per listener) — no credit card needed, no wallet required. After that, sessions cost ₹8–25 per minute depending on the listener, billed in 15-minute slots.' } },
    { '@type': 'Question', name: 'How much does a paid LeanOn session cost, and is it worth paying for?', acceptedAnswer: { '@type': 'Answer', text: 'A 15-minute paid session starts at ₹160 — a fraction of the ₹1,500–4,000 a single therapy session costs in India. For that you get uninterrupted time with a listener who has actually lived through what you are facing, available instantly at any hour with no appointment. Most people pay after their free trial because 5 minutes is only enough to start — real relief comes from a proper conversation, and continuing with the same listener who already understands your situation is worth far more than starting over.' } },
    { '@type': 'Question', name: 'How is LeanOn different from therapy?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn listeners are real people with lived experience, not licensed therapists. They offer empathy and peer support, not clinical diagnosis or treatment. LeanOn is ideal when you need someone to lean on — not a diagnosis.' } },
    { '@type': 'Question', name: 'Is LeanOn related to the song "Lean On" by Major Lazer?', acceptedAnswer: { '@type': 'Answer', text: 'No. LeanOn (one word, at leanon.app) is an Indian peer emotional support platform where you talk to verified human listeners. It has no connection to the 2015 song "Lean On" by Major Lazer and DJ Snake. The name comes from the phrase "someone to lean on" — having a person you can rely on emotionally.' } },
    { '@type': 'Question', name: 'Is LeanOn confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All sessions are private and confidential. LeanOn never shares your personal information or conversation content with anyone.' } },
    { '@type': 'Question', name: 'How do I become a listener on LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'Apply at leanon.app/become-listener. Share your lived experience and complete a brief verification. Listeners are approved before they can take sessions.' } },
    { '@type': 'Question', name: 'Which cities does LeanOn serve?', acceptedAnswer: { '@type': 'Answer', text: 'LeanOn is available across all of India — Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Jaipur, Ahmedabad, and everywhere else. It is fully online — accessible from anywhere.' } },
    { '@type': 'Question', name: 'What topics can I talk about on LeanOn?', acceptedAnswer: { '@type': 'Answer', text: 'Listeners on LeanOn specialise in loneliness, work stress, career confusion, relationships, grief and loss, student pressure, startup journey, breakups, anxiety, and more. If you just need someone to lean on with no specific topic, that\'s fine too.' } },
  ],
}
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.leanon.app/#organization',
      name: 'LeanOn',
      alternateName: ['Lean On', 'leanon'],
      url: 'https://www.leanon.app',
      logo: { '@type': 'ImageObject', url: 'https://www.leanon.app/logo.png', width: 512, height: 512 },
      description: "India's peer support platform. Talk to trained peer listeners anonymously. Free first session. Available 24/7.",
      areaServed: { '@type': 'Country', name: 'India' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.leanon.app/#website',
      url: 'https://www.leanon.app',
      name: 'LeanOn',
      publisher: { '@id': 'https://www.leanon.app/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://www.leanon.app/browse?query={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --navy:#0F4867;
          --teal:#1A8FA0;
          --orange:#FF9933;
          --white:#FFFFFF;
          --card:#FFFFFF;
          --light:#F0F8FC;
          --border:#D5EEF6;
          --gray:#5A7A8A;
          --muted:#8AAAB8;
        }
        html{scroll-behavior:smooth;}

        /* THE KEY FIX: seamless radial gradient from top-left, white everywhere else */
        body{
          font-family:'Nunito',sans-serif;
          color:var(--navy);
          -webkit-font-smoothing:antialiased;
          background: radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%);
          background-attachment: fixed;
          min-height:100vh;
        }
        a{text-decoration:none;color:inherit;}
        img{max-width:100%;display:block;}

        /* NAV — transparent so gradient shows through seamlessly */
        .nav{
          background:transparent;
          padding:0 28px;
          height:100px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          max-width:1100px;
          margin:0 auto;
        }
        .nav-logo{height:90px;width:auto;}
        .nav-right{display:flex;align-items:center;gap:12px;}
        .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:11px 24px;border-radius:50px;border:none;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 12px rgba(26,143,160,0.35);}
        .btn-nav:hover{background:#167a8a;transform:translateY(-1px);}
        .btn-listener{background:transparent;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:9px 16px;border-radius:50px;border:1.5px solid var(--border);cursor:pointer;transition:all 0.2s;display:none;white-space:nowrap;}
        .btn-listener:hover{border-color:var(--teal);color:var(--teal);}
        @media(min-width:480px){.btn-listener{display:block;}}

        /* HERO — no background, flows with body gradient */
        .hero{padding:48px 28px 64px;max-width:600px;margin:0 auto;text-align:left;}
        @media(min-width:700px){.hero{padding:56px 28px 72px;}}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(26,143,160,0.1);color:var(--teal);font-weight:700;font-size:13px;padding:7px 18px;border-radius:50px;margin-bottom:28px;border:1.5px solid rgba(26,143,160,0.25);}
        .hero h1{font-size:clamp(30px,7vw,48px);font-weight:900;line-height:1.12;color:var(--navy);margin-bottom:20px;letter-spacing:-0.5px;}
        .hero h1 .o{color:var(--orange);}
        .hero p{font-size:17px;color:var(--gray);line-height:1.72;margin-bottom:36px;max-width:400px;}
        .hero-btns{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:16px;}
        .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:16px 32px;border-radius:50px;border:none;cursor:pointer;display:inline-block;text-align:center;transition:all 0.2s;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
        .btn-primary:hover{background:#e8861a;transform:translateY(-2px);}
        .btn-outline{background:transparent;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:700;font-size:16px;padding:14px 30px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;display:inline-block;text-align:center;transition:all 0.2s;}
        .btn-outline:hover{background:var(--teal);color:white;}
        .hero-note{font-size:12px;color:var(--muted);font-weight:600;}

        /* WHITE section divider */
        .white-section{background:var(--white);}
        .inner{max-width:600px;margin:0 auto;padding:52px 28px;}
        .sh{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:6px;}
        .ss{font-size:14px;color:var(--gray);margin-bottom:24px;font-weight:500;}

        /* TOPICS */
        .topic-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .tc{background:var(--white);border:1.5px solid var(--border);border-radius:16px;padding:16px;display:flex;align-items:center;gap:12px;font-weight:700;font-size:14px;color:var(--navy);transition:all 0.2s;cursor:pointer;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .tc:hover{border-color:var(--teal);background:var(--light);transform:translateY(-2px);box-shadow:0 4px 16px rgba(15,72,103,0.08);}

        /* ABOUT */
        .al{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;}
        .at{font-size:clamp(20px,5vw,28px);font-weight:900;color:var(--navy);margin-bottom:20px;line-height:1.25;}
        .at .o{color:var(--orange);}
        .ab p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:14px;}

        /* FEATURES */
        .fl{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .fi{display:flex;gap:16px;align-items:flex-start;background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:18px;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .fw{width:44px;height:44px;border-radius:12px;background:rgba(26,143,160,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
        .ft{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
        .fd{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}

        /* MADE FOR INDIA */
        .india{background:var(--light);border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
        .india-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px;}
        .ig{background:white;border:1.5px solid var(--border);border-radius:16px;padding:16px;display:flex;gap:12px;align-items:flex-start;}
        .ig-icon{font-size:24px;flex-shrink:0;}
        .ig-t{font-size:13px;font-weight:800;color:var(--navy);margin-bottom:3px;}
        .ig-d{font-size:12px;color:var(--gray);font-weight:500;line-height:1.5;}
        .city-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
        .city-chip{background:white;border:1.5px solid var(--border);border-radius:50px;padding:5px 14px;font-size:12px;font-weight:700;color:var(--navy);}

        /* HOW IT WORKS — navy dark section */
        .how{background:var(--navy);padding:56px 28px;}
        .hi{max-width:600px;margin:0 auto;}
        .ht{font-size:24px;font-weight:900;color:white;text-align:center;margin-bottom:36px;}
        .sl{display:flex;flex-direction:column;}
        .si{display:flex;gap:16px;align-items:flex-start;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);}
        .si:last-child{border-bottom:none;}
        .sn{width:36px;height:36px;border-radius:50%;background:var(--orange);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:15px;color:white;flex-shrink:0;margin-top:2px;}
        .stit{font-size:15px;font-weight:800;color:white;margin-bottom:3px;}
        .sd{font-size:13px;color:rgba(213,238,246,0.75);line-height:1.5;font-weight:500;}

        /* PRICING */
        .pc{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .pcard{background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .pcard.feat{border:2.5px solid var(--orange);background:#FFFDF8;}
        .pl{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:3px;}
        .pd{font-size:13px;color:var(--gray);font-weight:500;}
        .pb{background:rgba(255,153,51,0.12);color:var(--orange);font-size:11px;font-weight:800;padding:3px 10px;border-radius:50px;display:inline-block;margin-top:5px;}
        .pa{font-size:28px;font-weight:900;color:var(--navy);flex-shrink:0;}
        .fee-note{background:rgba(26,143,160,0.06);border:1px solid rgba(26,143,160,0.18);border-radius:14px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;margin-top:14px;}
        .fee-note span{font-size:13px;color:#1A5F6A;line-height:1.6;font-weight:600;}

        /* TESTIMONIALS */
        .tlist{display:flex;flex-direction:column;gap:12px;margin-top:24px;}
        .tcard{background:var(--light);border:1.5px solid var(--border);border-radius:18px;padding:20px;}
        .tst{font-size:14px;color:var(--orange);margin-bottom:10px;letter-spacing:2px;}
        .ttx{font-size:14px;color:#2A4F60;line-height:1.68;font-weight:500;margin-bottom:14px;font-style:italic;}
        .tau{display:flex;align-items:center;gap:10px;}
        .tav{width:32px;height:32px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:white;flex-shrink:0;}
        .tnm{font-size:13px;font-weight:700;color:var(--navy);}
        .tcy{font-size:12px;color:var(--gray);font-weight:500;}

        /* TRUST GRID */
        .tg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;}
        .ti{display:flex;flex-direction:column;align-items:center;gap:10px;}
        .tic{width:52px;height:52px;border-radius:18px;background:var(--white);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 1px 4px rgba(15,72,103,0.04);}
        .tl{font-size:12px;color:var(--gray);font-weight:700;line-height:1.3;}

        /* DISCLAIMER */
        .db{background:rgba(26,143,160,0.05);border:1.5px solid rgba(26,143,160,0.18);border-radius:20px;padding:20px;}
        .db h3{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:10px;}
        .db p{font-size:13px;color:#2A4F60;line-height:1.68;font-weight:500;margin-bottom:8px;}
        .cb{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:14px;padding:14px 16px;margin-top:8px;}
        .cb p{font-size:12px;color:#7A2020;font-weight:700;line-height:1.7;}

        /* FAQ */
        .faq-section{max-width:700px;margin:0 auto 0;padding:0 28px;}
        .faq-section h2{font-size:clamp(20px,4vw,26px);font-weight:900;color:var(--navy);margin-bottom:24px;text-align:center;}
        .faq-item{border-bottom:1px solid var(--border);padding:16px 0;}
        .faq-item:last-child{border-bottom:none;}
        .faq-q{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;}
        .faq-a{font-size:14px;color:var(--gray);font-weight:500;line-height:1.7;}

        /* BOTTOM CTA */
        .cta-c{background:var(--navy);border-radius:28px;padding:48px 28px;text-align:center;}
        .cta-c h2{font-size:clamp(20px,5vw,28px);font-weight:900;color:white;margin-bottom:12px;line-height:1.25;}
        .cta-c p{font-size:15px;color:rgba(213,238,246,0.8);margin-bottom:28px;font-weight:500;}
        .btn-cta{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:17px;padding:18px 40px;border-radius:50px;border:none;cursor:pointer;display:inline-block;transition:all 0.2s;box-shadow:0 6px 24px rgba(255,153,51,0.4);}
        .btn-cta:hover{background:#e8861a;transform:translateY(-2px);}

        /* FOOTER */
        .footer{background:var(--white);border-top:1px solid var(--border);padding:36px 28px 52px;}
        .fi2{max-width:600px;margin:0 auto;}
        .fli{display:flex;flex-wrap:wrap;gap:8px 20px;margin-bottom:18px;}
        .fli a{font-size:13px;color:var(--gray);font-weight:600;}
        .fli a:hover{color:var(--navy);}
        .fcp{font-size:12px;color:var(--muted);font-weight:600;margin-top:20px;}
      `}</style>

      {/* NAV — transparent, sits on gradient */}
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <div className="nav-right">
          {/* Recruitment ("Become a listener") deliberately does NOT live here.
              Above-the-fold it competed with the seeker CTA and converted
              help-seekers into applicants; it now sits in the footer only.
              "Listener login" stays — that's access for people who already
              signed up, not a pitch. */}
          <a href="/auth" className="btn-nav">Sign in</a>
          <a href="/auth?mode=listener" className="btn-listener">Listener login</a>
        </div>
      </nav>

      {/* HERO — flows with same gradient background */}
      <section className="hero">
        <div className="hero-badge"><span>🌙</span><span>Available 24 / 7 — even at 2 AM</span></div>
        <h1>Someone to<br /><span className="o">lean on,</span><br />anytime.</h1>
        <p>Talk to a real peer listener in India who has been through what you&apos;re going through — loneliness, burnout, anxiety, grief, relationships. No appointments. No stigma. Available even at 2 AM.</p>
        <div className="hero-btns">
          <a href="/auth" className="btn-primary">Start your free 5-min chat</a>
          <a href="/browse" className="btn-outline">Browse peer listeners</a>
        </div>
        <p className="hero-note">First session free · No credit card needed · Affordable from ₹160</p>
      </section>

      {/* TOPICS */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">What&apos;s on your mind?</h2>
          <p className="ss">Pick a topic and find someone who gets it.</p>
          <div className="topic-grid">
            {[{id:'loneliness',i:'🌙',l:'Loneliness'},{id:'stress',i:'💼',l:'Work stress'},{id:'career',i:'🧭',l:'Career confusion'},{id:'relationships',i:'💬',l:'Relationships'},{id:'grief',i:'🌿',l:'Grief & loss'},{id:'students',i:'📚',l:'Student pressure'},{id:'startup',i:'🚀',l:'Startup journey'},{id:'general',i:'☕',l:'Just need to talk'}].map(t=>(
              <a key={t.id} href={`/browse?topic=${t.id}`} className="tc"><span style={{fontSize:22,flexShrink:0}}>{t.i}</span><span>{t.l}</span></a>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="inner">
        <p className="al">Our mission</p>
        <h2 className="at">Let&apos;s change the conversation on <span className="o">emotional wellness</span></h2>
        <div className="ab">
          <p>We believe solving emotional challenges should be no different from solving any other health challenge. When you&apos;re struggling, you deserve someone who truly understands — not just a stranger, but someone who has been there and found their way through.</p>
          <p>Stigma still holds people back. LeanOn is here to change that — making human connection instant, affordable, and free of judgment. You don&apos;t need a diagnosis or an appointment. You just need someone to lean on.</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">Why choose LeanOn?</h2>
          <p className="ss">Built around what actually helps people feel better.</p>
          <div className="fl">
            {[
              {i:'🔍',t:'Open listener directory',d:'Browse peer listeners by topic for free. Read their stories and ratings before you pay anything.'},
              {i:'⚡',t:'Instant, no-appointment access',d:'No booking. No waiting. Someone is available right now. Start a session in under 60 seconds.'},
              {i:'💳',t:'Pay-per-session flexibility',d:'No subscriptions. Recharge your wallet and use it whenever. Unused balance refunded anytime.'},
              {i:'💬',t:'Text or voice — your choice',d:'Type for privacy in a joint home. Talk for the warmth of a real voice. Always your call.'},
              {i:'🤝',t:'Lived-experience listeners',d:'Our listeners have been through it — breakups, burnout, grief, startup failure. They get it.'},
              {i:'🔒',t:'Safe & private by design',d:'Sessions are private. No personal info shared. AI moderation keeps every conversation safe.'},
            ].map((f,i)=>(
              <div key={i} className="fi"><div className="fw">{f.i}</div><div><div className="ft">{f.t}</div><div className="fd">{f.d}</div></div></div>
            ))}
          </div>
        </div>
      </div>

      {/* MADE FOR INDIA */}
      <div className="india">
        <div className="inner">
          <h2 className="sh">Built for India 🇮🇳</h2>
          <p className="ss">Designed around how India actually lives — joint families, late nights, privacy needs, and UPI.</p>
          <div className="india-grid">
            {[
              {i:'📱',t:'Phone OTP sign-up',d:'No email. No full name. Sign up in 30 seconds with just your number.'},
              {i:'🔒',t:'Private & anonymous',d:'Your first name only. No last name, no profile photo required. Safe in joint families.'},
              {i:'💸',t:'UPI & wallet payments',d:'Recharge with UPI, cards, or net banking. Refundable, no subscription lock-in.'},
              {i:'🌙',t:'Available at 2 AM',d:'Someone is online right now — even on late nights when you can\'t sleep.'},
              {i:'🗣️',t:'Text or voice in Hindi',d:'Chat in English or Hindi. Voice call when you need a real voice.'},
              {i:'🤝',t:'Lived-experience listeners',d:'Listeners from Bengaluru, Mumbai, Delhi, Chennai, Hyderabad and across India.'},
            ].map((item,i)=>(
              <div key={i} className="ig"><div className="ig-icon">{item.i}</div><div><div className="ig-t">{item.t}</div><div className="ig-d">{item.d}</div></div></div>
            ))}
          </div>
          <div className="city-row">
            {['Bengaluru','Mumbai','Delhi','Chennai','Hyderabad','Pune','Kolkata','Jaipur','Ahmedabad','Chandigarh'].map(c=>(
              <span key={c} className="city-chip">📍 {c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how">
        <div className="hi">
          <h2 className="ht">Start your journey with LeanOn</h2>
          <div className="sl">
            {[
              {t:'Sign up to LeanOn',d:'Just your phone number. OTP verified. 30 seconds.'},
              {t:'Browse peer listeners',d:'Filter by topic. Read bios and ratings. Completely free.'},
              {t:'Pick your session length',d:'Free 5-min trial, or choose 15 or 30 minutes.'},
              {t:'Recharge your wallet',d:'Top up ₹200, ₹500 or ₹1000. Refundable anytime.'},
              {t:'Start instantly',d:'Text chat or voice call — your session begins immediately.'},
              {t:'Get the support you need',d:'Rate your listener. Book again anytime. You are not alone.'},
            ].map((s,i)=>(
              <div key={i} className="si"><div className="sn">{i+1}</div><div><div className="stit">{s.t}</div><div className="sd">{s.d}</div></div></div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING — FIXED: listener keeps 100%, flat ₹10 added on top */}
      <div className="inner">
        <h2 className="sh">Simple, honest pricing</h2>
        <p className="ss">No subscriptions. Pay only for the time you use — refundable anytime.</p>
        {/* Card copy is deliberately seeker-side ("what you get"), not
            "listener earns ₹X · you pay ₹Y". The old split framing showed a
            visitor the earnings arithmetic at the exact moment they were
            deciding whether to pay, which read as an earning opportunity.
            Full fee transparency is preserved in the explainer below —
            PROJECT.md §10.4 requires the ₹10 fee be honest, and also says
            not to over-advertise it in marketing copy. */}
        <div className="pc">
          {[
            {l:'Free trial',d:'5 minutes · Text only · No wallet needed · Up to 3 trials',p:'₹0',b:'Free to start',feat:false},
            {l:'Quick chat',d:'15 minutes · One-on-one · Text or voice',p:'₹160',b:'',feat:false},
            {l:'Deep dive',d:'30 minutes · One-on-one · Text or voice',p:'₹310',b:'Most popular',feat:true},
          ].map((item,i)=>(
            <div key={i} className={`pcard${item.feat?' feat':''}`}>
              <div><div className="pl">{item.l}</div><div className="pd">{item.d}</div>{item.b&&<div className="pb">{item.b}</div>}</div>
              <div className="pa">{item.p}</div>
            </div>
          ))}
        </div>
        <div className="fee-note">
          <span>💡</span>
          <span><strong>Where your money goes:</strong> Every rupee of your listener&apos;s rate goes to your listener. LeanOn adds a flat ₹10 per session on top — that&apos;s how we keep the lights on, and it&apos;s the only cut we take. Unused wallet balance is fully refundable, anytime.</span>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="white-section">
        <div className="inner">
          <h2 className="sh">What people are saying</h2>
          <p className="ss">Real sessions. Real relief.</p>
          <div className="tlist">
            {[
              {tx:"I was dreading another sleepless night. LeanOn connected me with someone who just got it. No judgment, no advice I didn't ask for. Just someone who listened.",nm:'Priya M.',cy:'Bengaluru',ini:'P'},
              {tx:"As a founder going through a hard patch I felt completely alone. Talking to someone who survived their own startup failure was exactly what I needed.",nm:'Arjun K.',cy:'Mumbai',ini:'A'},
              {tx:"More affordable and more honest than anything else I've tried. I've booked 4 sessions now and each one helped.",nm:'Sneha R.',cy:'Hyderabad',ini:'S'},
            ].map((r,i)=>(
              <div key={i} className="tcard">
                <div className="tst">★★★★★</div>
                <p className="ttx">&ldquo;{r.tx}&rdquo;</p>
                <div className="tau"><div className="tav">{r.ini}</div><div><div className="tnm">{r.nm}</div><div className="tcy">{r.cy}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="inner">
        <div className="tg">
          {[{i:'🔒',l:'Safe & private'},{i:'💬',l:'Text or voice'},{i:'🔄',l:'Refund anytime'},{i:'⚡',l:'Instant access'},{i:'🤝',l:'Lived experience'},{i:'🌙',l:'Available 24/7'}].map((t,i)=>(
            <div key={i} className="ti"><div className="tic">{t.i}</div><span className="tl">{t.l}</span></div>
          ))}
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="inner" style={{paddingTop:0}}>
        <div className="db">
          <h3>ℹ️ LeanOn is peer support — not therapy</h3>
          <p><strong>Our listeners are real people with lived experience — not licensed therapists or counselors.</strong> Peer support is legitimate and valuable. It is different from, and not a replacement for, professional mental health treatment.</p>
          <p>If you need clinical mental health support, please consult a qualified professional.</p>
          <div className="cb"><p>🆘 <strong>In crisis?</strong> Call <strong><a href="tel:08046110007" style={{color:'inherit'}}>NIMHANS 080-46110007</a></strong> or <strong><a href="tel:14416" style={{color:'inherit'}}>Tele-MANAS 14416</a></strong> (free · 24/7 · Govt of India)</p></div>
        </div>
      </div>

      {/* FAQ — drives rich snippets in Google */}
      <div className="inner" style={{paddingBottom:0}}>
        <div className="faq-section">
          <h2>Frequently asked questions</h2>
          {[
            { q: 'What is LeanOn?', a: 'LeanOn is a peer support platform built on empathy — you talk to real people who have lived through what you\'re facing: loneliness, burnout, anxiety, grief, relationships, and more. It\'s not therapy, but real human connection available 24/7 across India.' },
            { q: 'What makes LeanOn listeners empathetic?', a: 'Every listener has personally lived through what they support others with. That lived experience is what makes their empathy real, not rehearsed — you\'re heard without being judged, fixed, or rushed.' },
            { q: 'Is LeanOn free?', a: 'Each new user gets up to 3 free 5-minute sessions (one per listener) — no credit card needed, no wallet required. After that, sessions cost ₹8–25 per minute depending on the listener, billed in 15-minute slots.' },
            { q: 'How much is a paid session, and is it worth it?', a: 'A 15-minute paid session starts at ₹160 — a fraction of the ₹1,500–4,000 a therapy session costs in India. Five free minutes is only enough to start; real relief comes from a proper conversation with someone who has lived what you are facing. Continuing with the same listener who already understands you is worth far more than starting over.' },
            { q: 'How is this different from therapy or counselling?', a: 'Listeners on LeanOn are real people with lived experience, not licensed therapists. They offer empathy and peer counselling, not clinical diagnosis. LeanOn is ideal when you need someone who truly gets it — not a diagnosis.' },
            { q: 'Is my conversation private?', a: 'Yes. All sessions are private and end-to-end. LeanOn never shares your personal details or conversation content.' },
            { q: 'Can I become a listener?', a: 'Yes. If you\'ve been through something difficult and want to support others going through the same thing, you can apply at leanon.app/become-listener. Listeners are verified before they can take sessions.' },
            { q: 'Is LeanOn related to the song "Lean On"?', a: 'No. LeanOn (one word, at leanon.app) is an Indian peer emotional support platform — no connection to the Major Lazer song. The name comes from the phrase "someone to lean on": having a person you can rely on emotionally, anytime you need it.' },
          ].map((f,i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="inner">
        <div className="cta-c">
          <h2>You don&apos;t have to go through this alone.</h2>
          <p>Someone is available right now. Start free — no card needed.</p>
          <a href="/auth" className="btn-cta">Start free now →</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="fi2">
          <div style={{marginBottom:18}}><img src="/logo.png" alt="LeanOn — Someone to Lean On" style={{height:48}} /></div>
          <div className="fli">
            <a href="/about">About LeanOn</a>
            <a href="/browse">Find a listener</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/support/loneliness">Loneliness support India</a>
            <a href="/support/anxiety">Anxiety support India</a>
            <a href="/support/breakup">Breakup support</a>
            <a href="/support/grief">Grief support</a>
            <a href="/support/founder-burnout">Startup burnout support</a>
            <a href="/support/student-stress">Student stress help</a>
            <a href="/support/emotional-support">Emotional support online</a>
            <a href="/support/someone-to-talk-to">Someone to talk to</a>
            <a href="/support/anonymous-support">Anonymous support India</a>
            <a href="/support/relationship-stress">Relationship stress</a>
            <a href="/support/social-anxiety">Social anxiety support</a>
            <a href="/support/imposter-syndrome">Imposter syndrome help</a>
            <a href="/support/work-from-home-loneliness">WFH loneliness support</a>
            <a href="/support/overthinking">Overthinking help</a>
            <a href="/support/marriage-loneliness">Lonely in marriage</a>
            <a href="/support/job-loss">Job loss support</a>
            <a href="/support/sunday-night-loneliness">Sunday night loneliness</a>
            <a href="/support/long-distance-relationship">Long-distance relationship</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/talk-to-someone-right-now">Talk to someone right now</a>
            <a href="/someone-to-lean-on">Someone to lean on</a>
            <a href="/daily-check-in">Daily check-in — how do you feel today?</a>
            <a href="/talk-to-someone-not-astrologer">Not a prediction — just someone to talk to</a>
            <a href="/online-counselling-india-cost">Online counselling cost India</a>
            <a href="/blog/therapy-cost-india">What therapy costs in India</a>
            <a href="/blog/no-one-to-talk-to">No one to talk to?</a>
            <a href="/blog/how-to-stop-overthinking-at-night">Stop overthinking at night</a>
            <a href="/blog/why-people-call-astrologers-to-talk">Why people call astrologers just to talk</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/blog/what-does-lean-on-mean">What does lean on mean</a>
            <a href="/blog/peer-support-vs-therapy-india">Peer support vs therapy</a>
            <a href="/blog/loneliness-at-night">Loneliness at night</a>
            <a href="/blog/joint-family-emotional-support">Joint family support</a>
            <a href="/blog/empathy-in-peer-support">What is empathy?</a>
            <a href="/blog/what-is-peer-support-india">What is peer support?</a>
            <a href="/blog/online-emotional-support-india-guide">Online emotional support guide</a>
            <a href="/glossary">Peer support glossary</a>
          </div>
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/jaipur">Peer support Jaipur</a>
            <a href="/ahmedabad">Peer support Ahmedabad</a>
          </div>
          {/* Listener recruitment lives here and nowhere else on this page:
              discoverable for anyone genuinely looking, with no earnings hook
              competing against the seeker funnel above. */}
          <div className="fli" style={{marginTop:4,fontSize:12,opacity:0.75}}>
            <a href="/become-listener">Become a listener</a>
          </div>
          <p className="fcp">© 2026 LeanOn (Lean On) · leanon.app · Peer support platform · Made in India 🇮🇳</p>
        </div>
      </footer>
    </>
  )
}
