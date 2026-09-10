import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Feeling Depressed? Talk to Someone Who Understands | LeanOn India',
  description: 'Feeling low, empty, or hopeless? You don\'t need a diagnosis to deserve support. Talk to a real peer listener — anonymous, ₹160/session, first 5 min free.',
  alternates: {
    canonical: 'https://www.leanon.app/depression-support-india',
    languages: { 'en-IN': 'https://www.leanon.app/depression-support-india' },
  },
  openGraph: {
    title: 'Feeling Depressed? Talk to Someone Who Understands | LeanOn India',
    description: 'Feeling low, empty, or hopeless? You don\'t need a diagnosis to deserve support. Talk to a real peer listener — anonymous, ₹160/session, first 5 min free.',
    url: 'https://www.leanon.app/depression-support-india',
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
      name: 'Is LeanOn a substitute for therapy or clinical treatment for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. LeanOn is peer support, not clinical care. Our listeners are people with lived experience of low moods and emotional struggles — they are not therapists, psychiatrists, or counsellors. If you think you may have clinical depression, we strongly encourage you to consult a mental health professional alongside or instead of using LeanOn. Peer support can complement professional care, but it does not replace it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it anonymous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. LeanOn does not require your real name or any identifying information. You sign in with a phone number (used only for account security), choose your own display name, and your conversations are private. Listeners do not know who you are outside the session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am in crisis or having thoughts of suicide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are in crisis or having thoughts of ending your life, please reach out to a crisis helpline immediately. In India, you can call NIMHANS on 080-46110007 or Tele-MANAS on 14416 — both are free, available 24/7, and run by the Government of India. LeanOn is not a crisis service and is not equipped to handle emergencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I talk about feeling depressed on LeanOn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Feeling persistently low, empty, hopeless, or like you have lost interest in things you once cared about is exactly the kind of thing our listeners are here for. You do not need a diagnosis, a referral, or a specific reason. If you have been struggling and need to say it out loud to another person, this is the right place.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Depression Support India', item: 'https://www.leanon.app/depression-support-india' },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#3ABFBF;--orange:#F4845F;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
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
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:8px;}
  .crisis-box{background:#E8F6F6;border:2px solid var(--teal);border-radius:20px;padding:22px 24px;margin-bottom:24px;}
  .crisis-box .crisis-title{font-size:14px;font-weight:900;color:var(--teal);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;}
  .crisis-box p{font-size:15px;color:var(--navy);font-weight:600;line-height:1.65;margin-bottom:0;}
  .crisis-box a{color:var(--navy);font-weight:800;border-bottom:2px solid var(--teal);}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .signs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:4px;}
  .sign-card{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px 18px;font-size:14px;font-weight:700;color:var(--navy);line-height:1.5;}
  .sign-card span{display:block;font-size:18px;margin-bottom:6px;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(244,132,95,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
  .honest-notice{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:16px;padding:16px 20px;margin-bottom:24px;font-size:14px;color:#7A5020;font-weight:600;line-height:1.65;}
  @media(max-width:480px){
    .nav{padding:0 16px;}
    .page{padding:12px 16px 80px;}
    .section{padding:24px 20px;}
    .cta-card{padding:28px 20px;}
    .signs-grid{grid-template-columns:1fr 1fr;}
  }
`

export default function DepressionSupportPage() {
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
          <span style={{ color: 'var(--navy)' }}>Depression Support India</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Feeling Depressed</p>
          <h1>You Don&apos;t Have to Feel <em>This Way Alone</em></h1>
          <p className="lead">
            Maybe you haven&apos;t been eating properly. Maybe sleep feels impossible, or you&apos;re sleeping too much.
            Nothing sounds good, nothing feels worth it — and the hardest part is you might not even know why.
            That weight is real. And you deserve to talk to someone who gets it.
          </p>
        </div>

        {/* Honest positioning notice */}
        <div className="honest-notice">
          <strong>Honest about what we are:</strong> LeanOn is peer emotional support — not therapy, not clinical care.
          If you think you might have clinical depression, please also see a professional. Both peer support and professional
          care have value. This page is for people who need to say the words out loud to another human being — before or
          alongside professional help.
        </div>

        {/* Crisis box */}
        <div className="crisis-box">
          <div className="crisis-title">⚡ If you are in crisis right now</div>
          <p>
            Call <strong><a href="tel:08046110007">NIMHANS 080-46110007</a></strong> or{' '}
            <strong><a href="tel:14416">Tele-MANAS 14416</a></strong> — free, 24/7, Government of India.
            LeanOn is not a crisis service. Please call these lines if you are having thoughts of harming yourself.
          </p>
        </div>

        {/* When you need to talk, not diagnose */}
        <div className="section">
          <h2>When You Need to Talk, Not Diagnose</h2>
          <p>
            There is a whole stretch of human suffering that falls between &ldquo;I&apos;m fine&rdquo; and
            &ldquo;I have clinical depression.&rdquo; Weeks of feeling flat. A hollowness you can&apos;t explain.
            The slow drift away from people you care about. The exhaustion that rest doesn&apos;t fix.
          </p>
          <p>
            Therapy is built to diagnose, treat, and heal. It is powerful — and if you need it, please go.
            But sometimes what you need first is simpler: to say the thing out loud to another person.
            To have someone say &ldquo;I hear you&rdquo; and actually mean it. To feel, for an hour, less alone.
          </p>
          <p>
            That is what peer support is for. LeanOn connects you with listeners who have personally been through
            low moods, depression, or the long grey stretch of not-quite-okay. They&apos;re not clinicians.
            They&apos;re people who know what this feels like from the inside — and who have found their way through.
          </p>
          <p>
            These two things — peer support and professional care — are not competing. They work together.
            Many people find that being able to talk freely with a peer listener gives them the clarity and
            courage to then reach out to a therapist.
          </p>
        </div>

        {/* Signs you might benefit from talking */}
        <div className="section">
          <h2>Signs You Might Benefit From Talking</h2>
          <p>You don&apos;t need a diagnosis to deserve support. If any of these feel familiar, you&apos;re in the right place:</p>
          <div className="signs-grid">
            <div className="sign-card"><span>😶</span>Feeling flat or empty for days — not sad exactly, just... nothing</div>
            <div className="sign-card"><span>🎯</span>Lost interest in things you used to enjoy</div>
            <div className="sign-card"><span>🚪</span>Pulling away from friends and family without really meaning to</div>
            <div className="sign-card"><span>😢</span>Crying without being able to explain why</div>
            <div className="sign-card"><span>💭</span>Thoughts like &ldquo;nothing is going to get better&rdquo; or &ldquo;what&apos;s the point&rdquo;</div>
            <div className="sign-card"><span>🛌</span>Exhausted even after a full night&apos;s sleep</div>
            <div className="sign-card"><span>🍽️</span>Eating too much, or barely eating at all</div>
          </div>
        </div>

        {/* What peer support looks like */}
        <div className="section">
          <h2>What Peer Support on LeanOn Actually Looks Like</h2>
          <h3>A real person, not a chatbot</h3>
          <p>
            Every listener on LeanOn is a real human being who went through their own emotional struggles and chose
            to be there for others. When you connect, you&apos;re talking to someone who has sat with the same
            heaviness you&apos;re feeling right now.
          </p>
          <h3>No need to prepare or explain yourself</h3>
          <p>
            You don&apos;t need to arrive with a neat summary of what&apos;s wrong. You can start with &ldquo;I don&apos;t
            even know where to begin&rdquo; — that is a completely valid place to start. Listeners follow your lead.
          </p>
          <h3>Completely anonymous</h3>
          <p>
            No real name required. No video. No record attached to your identity. You choose what to share and how much.
          </p>
          <h3>First 5 minutes free, ₹160/session after</h3>
          <p>
            You can test the connection before you commit. Sessions are 15–45 minutes. There&apos;s no subscription
            and no commitment.
          </p>
          <h3>Not advice-giving</h3>
          <p>
            Listeners are not here to fix you or hand you a list of things to do. They listen, reflect, and hold space.
            If they share something that helped them, it&apos;s as a peer — not a prescription.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>You&apos;ve Been Carrying This Long Enough</h2>
          <p>Talk to a peer listener who understands what it feels like from the inside. Anonymous. No appointment. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Talk to someone right now →</button></a>
            <a href="/browse"><button className="btn-secondary">Browse peer listeners →</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">Is LeanOn a substitute for therapy?</div>
            <div className="faq-a">
              No — and we want to be clear about that. LeanOn is peer support, not clinical care. Our listeners
              are people with lived experience of emotional struggle, not trained therapists or psychiatrists.
              If you think you might have clinical depression, please also consult a mental health professional.
              LeanOn can complement professional care, or serve as a first step toward it — but it does not replace it.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Is it anonymous?</div>
            <div className="faq-a">
              Yes. LeanOn does not require your real name or any personally identifying information. You sign in with
              a phone number (used only for account security), choose your own display name, and your conversations
              are private. Listeners do not know who you are outside the session.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What if I&apos;m in crisis?</div>
            <div className="faq-a">
              If you are in crisis or having thoughts of suicide, please call a crisis helpline immediately.
              In India: <strong>NIMHANS 080-46110007</strong> or <strong>Tele-MANAS 14416</strong> — both free,
              24/7, Government of India. LeanOn is not a crisis or emergency service.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Can I talk about depression on LeanOn?</div>
            <div className="faq-a">
              Absolutely. Feeling persistently low, empty, hopeless, or disconnected from things you used to enjoy
              is exactly what our listeners are here for. You do not need a diagnosis, a referral, or a clear reason.
              If you have been struggling and need to say it out loud to another human being, that is enough.
            </div>
          </div>
        </div>

        {/* Related support topics */}
        <div className="section">
          <h2>Related Topics</h2>
          <p>Sometimes what feels like depression shows up in different ways. These pages may also help:</p>
          <div className="related">
            <a href="/support/emotional-numbness" className="related-link">Emotional Numbness</a>
            <a href="/support/feeling-empty" className="related-link">Feeling Empty</a>
            <a href="/support/dont-want-to-get-out-of-bed" className="related-link">Can&apos;t Get Out of Bed</a>
            <a href="/cant-afford-therapy-india" className="related-link">Can&apos;t Afford Therapy</a>
            <a href="/support/anxiety" className="related-link">Anxiety</a>
            <a href="/support/loneliness" className="related-link">Loneliness</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
          </div>
        </div>

        {/* City availability */}
        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--gray)', fontWeight: 600, marginBottom: '40px' }}>
          Available across India: <a href="/bengaluru" style={{ color: 'var(--teal)' }}>Bengaluru</a> · <a href="/mumbai" style={{ color: 'var(--teal)' }}>Mumbai</a> · <a href="/delhi" style={{ color: 'var(--teal)' }}>Delhi</a> · <a href="/chennai" style={{ color: 'var(--teal)' }}>Chennai</a> · <a href="/hyderabad" style={{ color: 'var(--teal)' }}>Hyderabad</a> · <a href="/pune" style={{ color: 'var(--teal)' }}>Pune</a> · <a href="/kolkata" style={{ color: 'var(--teal)' }}>Kolkata</a>
        </p>
      </div>
    </>
  )
}
