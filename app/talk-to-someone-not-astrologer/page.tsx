import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Just Want to Talk, Not a Prediction? Here\'s a Direct Option | LeanOn',
  description: 'If you find yourself calling an astrologer at night just to talk to someone, you\'re not alone. LeanOn connects you with a real person for real conversation.',
  alternates: { canonical: 'https://www.leanon.app/talk-to-someone-not-astrologer', languages: { 'en-IN': 'https://www.leanon.app/talk-to-someone-not-astrologer' } },
  keywords: 'talk to someone instead of astrologer, astrology chat for loneliness, why do I call an astrologer just to talk, someone to talk to at night India',
  openGraph: {
    title: 'Just Want to Talk, Not a Prediction? Here\'s a Direct Option | LeanOn',
    description: 'If you find yourself calling an astrologer at night just to talk to someone, you\'re not alone. LeanOn connects you with a real person for real conversation.',
    url: 'https://www.leanon.app/talk-to-someone-not-astrologer',
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
      name: 'Why do so many people call astrologers just to talk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Late at night, when everyone else seems to be asleep, astrology chat lines are often one of the only places open and ready to listen. An astrologer told journalists that during night sessions, most people just want to talk — that the astrologer becomes a stranger they can tell their stories to. This isn\'t a comment on astrology being right or wrong. It simply reflects a real, common need: someone to listen when loneliness peaks and there is nowhere else to turn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it wrong to want a person to talk to instead of a prediction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. Wanting connection, a listening ear, or simply a voice on the other end of the line is one of the most human things there is. There is nothing wrong with turning to astrology chat for that, and there is nothing wrong with wanting a more direct route to conversation either. Both are valid ways of meeting the same need — to feel less alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is LeanOn different from an astrology chat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LeanOn listeners are peers with their own lived experience of things like loneliness, anxiety, or grief — not people making predictions about your future. There\'s no birth chart, no reading, no framing your life around fate. The conversation itself is the point. You\'re heard, not forecasted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is LeanOn private and anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can talk using just a first name, without sharing your identity. LeanOn is built to be DPDP compliant, so your conversations and personal information stay private and protected.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions cost between ₹8 and ₹25 per minute depending on the listener, plus a flat ₹10 platform fee per paid session. A typical 15-minute session starts around ₹160. A short trial session is available for new users.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Talk to Someone', item: 'https://www.leanon.app/talk-to-someone-not-astrologer' },
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
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function TalkToSomeoneNotAstrologerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Talk to Someone</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Real Conversation · Not a Reading</p>
          <h1>Sometimes You Just Want Someone to <em>Listen</em></h1>
          <p className="lead">If you've ever found yourself calling an astrology chat line at 1am, not really for the prediction but because someone finally picked up — you're far from alone. That instinct makes complete sense. This page isn't about whether astrology works. It's simply about another option, for the moments when what you're really looking for is a person to talk to.</p>
        </div>

        {/* Section 1 */}
        <div className="section">
          <h2>Why "Talk to an Astrologer" Is Such a Common Search at Night</h2>
          <p>Search that phrase at midnight and you're joining a lot of other people doing the exact same thing. There's a reason it happens so often, and it usually has very little to do with wanting to know the future.</p>

          <h3>The Specific Loneliness of Late Hours</h3>
          <p>There's a particular kind of loneliness that shows up after everyone else has gone quiet — friends asleep, family asleep, group chats gone still. The thoughts that felt manageable during the day get louder. In that window, an app that promises someone on the other end, any someone, can feel like the only door still open.</p>

          <h3>When Astrology Chats Become Confessionals</h3>
          <p>This pattern has been documented, not just imagined. One astrologer told journalists covering astrology apps in India that during night sessions, most people just want to talk — that they become a stranger the caller can tell their stories to. Reporting on this described how, past midnight, these chats can shift from divination into something closer to a confessional or a therapy couch. That's not a criticism of astrology. It's an honest observation about what people are actually reaching for in those hours.</p>

          <h3>Lunch Breaks and Late Nights</h3>
          <p>It isn't only the middle of the night. Young professionals in cities like Mumbai, Delhi, Bengaluru, and Hyderabad open these apps on lunch breaks too — a short window between meetings where there's finally a moment to just talk to someone who isn't a colleague or a boss. The pattern repeats itself: isolated pockets of time, a need for connection, and an app that's always available.</p>

          <h3>Sometimes It Isn't a Prediction You're Seeking</h3>
          <p>None of this means astrology itself is being used "wrong" — plenty of people genuinely want guidance, and that's entirely their own to seek. But for some people, if we're honest, what's actually being sought in that moment isn't a reading of the stars. It's a witness. Someone to hear what's going on and respond like a person would.</p>
        </div>

        {/* Section 2 */}
        <div className="section">
          <h2>A More Direct Way to Be Heard</h2>
          <p>If what you're after is genuinely a conversation — an empathetic person, present with you, listening without an agenda — there's a more direct route to that than routing it through a horoscope.</p>

          <h3>Real People, Real Experience</h3>
          <p>LeanOn listeners aren't reading charts or predicting what's ahead for you. They're peers who've lived through their own versions of loneliness, anxiety, heartbreak, or grief, and who show up with empathy built from having actually been there — not from a script or a chart.</p>

          <h3>The Conversation Doesn't Need a Framing</h3>
          <p>You don't need a horoscope question to justify wanting to talk. "I just need to tell someone how today went" is a complete and valid reason to open a chat. The conversation is the point, not a means to an ending or a forecast.</p>

          <h3>Anonymous, Judgment-Free, Always On</h3>
          <p>You can talk using just a first name. No one on the other end needs your birth details, your identity, or your history to be genuinely, empathetically present with you. And like the astrology chats that stay open past midnight, LeanOn is available whenever the need actually shows up — 24/7.</p>

          <h3>You Choose Who You Talk To</h3>
          <p>Instead of being matched by planetary alignment, you pick a listener based on what they've actually lived through — grief, breakups, work stress, loneliness, family pressure. It's a small shift, but it means the connection is grounded in shared human experience rather than a birth chart.</p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Ready to Talk to a Real Person?</h2>
          <p>No birth chart needed. Just a first name and whatever's actually on your mind. Available 24/7, completely private.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Why do so many people call astrologers just to talk?</div>
            <div className="faq-a">Late at night, when everyone else seems to be asleep, astrology chat lines are often one of the only places open and ready to listen. An astrologer told journalists that during night sessions, most people just want to talk — that the astrologer becomes a stranger they can tell their stories to. This isn't a comment on astrology being right or wrong. It simply reflects a real, common need: someone to listen when loneliness peaks and there is nowhere else to turn.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it wrong to want a person to talk to instead of a prediction?</div>
            <div className="faq-a">Not at all. Wanting connection, a listening ear, or simply a voice on the other end of the line is one of the most human things there is. There is nothing wrong with turning to astrology chat for that, and there is nothing wrong with wanting a more direct route to conversation either. Both are valid ways of meeting the same need — to feel less alone.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How is LeanOn different from an astrology chat?</div>
            <div className="faq-a">LeanOn listeners are peers with their own lived experience of things like loneliness, anxiety, or grief — not people making predictions about your future. There's no birth chart, no reading, no framing your life around fate. The conversation itself is the point. You're heard, not forecasted.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn private and anonymous?</div>
            <div className="faq-a">Yes. You can talk using just a first name, without sharing your identity. LeanOn is built to be DPDP compliant, so your conversations and personal information stay private and protected.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How much does it cost?</div>
            <div className="faq-a">Sessions cost between ₹8 and ₹25 per minute depending on the listener, plus a flat ₹10 platform fee per paid session. A typical 15-minute session starts around ₹160. A short trial session is available for new users.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/someone-to-talk-to-at-night" className="related-link">Someone to Talk to at Night</a>
            <a href="/support/someone-to-talk-to" className="related-link">Someone to Talk To</a>
            <a href="/support/overthinking" className="related-link">Overthinking</a>
            <a href="/support/anonymous-support" className="related-link">Anonymous Support</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
