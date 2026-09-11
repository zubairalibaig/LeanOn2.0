import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Late Night Support India — Someone to Talk to After Midnight | LeanOn',
  description: 'Late night support from a real peer listener in India — available at 2 AM, 3 AM, anytime. Anonymous, ₹160/session, first 5 min free.',
  keywords: [
    'late night support india',
    'someone to talk to at night india',
    'late night chat india',
    'who to talk to at 2am india',
    "can't sleep want to talk india",
    '2am helpline india',
    'midnight support india',
    'night time emotional support india',
  ],
  alternates: { canonical: 'https://www.leanon.app/late-night-support-india' },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --navy:#0F3552;
    --navy-deep:#091E2E;
    --teal:#1A8FA0;
    --teal-light:#D2F0F5;
    --orange:#FF9933;
    --gray:#5A7A8A;
    --border:#C8E5F0;
    --light:#F0F8FC;
    --star:#C8DCF0;
  }
  html{background:var(--navy-deep);}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:#fff;}
  a{text-decoration:none;color:inherit;}

  /* ── NAV ── */
  .nav-wrap{background:var(--navy-deep);position:sticky;top:0;z-index:10;}
  nav{padding:0 24px;height:60px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}

  /* ── HERO (dark night sky) ── */
  .hero{
    background:linear-gradient(160deg,#091E2E 0%,#0D2D45 55%,#0F3D55 100%);
    padding:56px 24px 52px;
    text-align:center;
    position:relative;
    overflow:hidden;
  }
  .hero::before{
    content:'';
    position:absolute;inset:0;
    background:radial-gradient(ellipse 70% 40% at 50% 30%,rgba(26,143,160,.12) 0%,transparent 65%);
    pointer-events:none;
  }
  .stars{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
  .star{
    position:absolute;
    width:2px;height:2px;
    border-radius:50%;
    background:var(--star);
    opacity:0;
    animation:twinkle 4s ease-in-out infinite;
  }
  @keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.7}}
  .star:nth-child(1){top:8%;left:12%;animation-delay:0s}
  .star:nth-child(2){top:18%;left:78%;animation-delay:.8s}
  .star:nth-child(3){top:5%;left:55%;animation-delay:1.4s}
  .star:nth-child(4){top:28%;left:33%;animation-delay:2s}
  .star:nth-child(5){top:14%;left:90%;animation-delay:.4s}
  .star:nth-child(6){top:35%;left:70%;animation-delay:1.8s}
  .star:nth-child(7){top:22%;left:5%;animation-delay:2.6s}
  .star:nth-child(8){top:40%;left:48%;animation-delay:3.2s}
  .hero-time{font-size:13px;font-weight:700;color:var(--teal);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;opacity:.9;}
  .hero h1{font-size:clamp(26px,6vw,44px);font-weight:900;color:#fff;line-height:1.18;margin-bottom:18px;position:relative;}
  .hero .sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;max-width:480px;margin:0 auto 28px;}
  .hero-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
  .btn-primary{background:var(--orange);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:16px;padding:14px 30px;border-radius:50px;border:none;cursor:pointer;display:inline-block;}
  .btn-outline{background:transparent;color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:15px;padding:13px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,.35);cursor:pointer;display:inline-block;}
  .btn-outline:hover{border-color:rgba(255,255,255,.65);}
  .hero-note{margin-top:16px;font-size:12px;color:rgba(255,255,255,.45);font-weight:600;}

  /* ── PAGE BODY ── */
  .page{max-width:680px;margin:0 auto;padding:8px 24px 80px;}
  .breadcrumb{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--gray);padding:18px 0 6px;}
  .breadcrumb span{opacity:.5;}

  /* ── CARDS ── */
  .card{background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:20px;}
  .card h2{font-size:19px;font-weight:800;margin-bottom:12px;color:var(--navy);}
  .card p{font-size:15px;color:#3A6070;line-height:1.78;margin-bottom:10px;}
  .card p:last-child{margin-bottom:0;}

  /* availability badge */
  .avail-badge{display:inline-flex;align-items:center;gap:8px;background:#E8FAF0;border:1.5px solid #A3E4B8;border-radius:50px;padding:7px 16px;font-size:13px;font-weight:800;color:#1A6B3C;margin-bottom:16px;}
  .avail-dot{width:8px;height:8px;border-radius:50%;background:#2ECC71;animation:pulse-green 2s ease-in-out infinite;}
  @keyframes pulse-green{0%,100%{opacity:1}50%{opacity:.4}}

  /* topics grid */
  .topics{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px;}
  .topic{background:var(--light);border:1.5px solid var(--border);border-radius:12px;padding:12px 14px;font-size:14px;font-weight:700;color:var(--navy);line-height:1.45;}
  @media(max-width:420px){.topics{grid-template-columns:1fr;}}

  /* FAQ */
  .faq{margin-bottom:20px;}
  .faq-item{border:1.5px solid var(--border);border-radius:16px;padding:20px 22px;margin-bottom:12px;background:#fff;}
  .faq-item h3{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:8px;}
  .faq-item p{font-size:14px;color:#3A6070;line-height:1.72;}

  /* section label */
  .section-label{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:10px;}

  /* disclaimer */
  .disclaimer{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:20px;font-size:13px;color:#7A5C00;font-weight:600;line-height:1.6;}

  /* crisis */
  .crisis-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:16px;padding:20px;margin-bottom:24px;}
  .crisis-box p{font-size:14px;color:#7A2020;line-height:1.65;font-weight:600;}
  .crisis-box a{color:#C0392B;font-weight:800;}

  /* cross-links */
  .also-card{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px 20px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;}
  .also-card span{font-size:14px;font-weight:700;color:var(--navy);}
  .also-card .arrow{font-size:16px;color:var(--teal);font-weight:900;}

  /* CTA bottom */
  .cta-bottom{text-align:center;background:linear-gradient(145deg,#0D2D45 0%,#0F4867 100%);border-radius:24px;padding:36px 28px;color:#fff;}
  .cta-bottom h2{font-size:22px;font-weight:900;margin-bottom:8px;}
  .cta-bottom p{font-size:14px;opacity:.75;margin-bottom:22px;line-height:1.65;}
  .cta-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}

  /* small btn in nav */
  .btn-nav{background:var(--orange);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;padding:8px 18px;border-radius:50px;border:none;cursor:pointer;}
`

const jsonLd = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is anyone available at 2 AM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LeanOn always has at least some listeners online through the night, but overnight availability is lower than daytime — it may not always be instant. You can check live availability on the browse page. If no one is free at that exact moment, try again in a few minutes — listeners come online throughout the night.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will talking to someone help me sleep?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many people find that putting words to what\'s on their mind — even for 10–15 minutes — quiets the mental loop enough to rest. We can\'t promise sleep, but being heard often takes the edge off the restlessness that makes sleep impossible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I talk for just 5 minutes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. The first 5 minutes of your very first session are completely free — no wallet top-up needed. If you just want to say what\'s on your mind and sign off, that\'s perfectly fine. There\'s no minimum time or obligation to continue.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the first session really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every new user gets one free 5-minute session with any listener. No credit card, no recharge — just sign up and start. After that, sessions start at ₹160 for 15 minutes.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.leanon.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Late Night Support India',
        item: 'https://www.leanon.app/late-night-support-india',
      },
    ],
  },
])

export default function LateNightSupportIndiaPage() {
  return (
    <>
      <style>{S}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* ── NAV ── */}
      <div className="nav-wrap">
        <nav>
          <a href="/"><img src="/logo.png" alt="LeanOn" style={{ height: 44 }} /></a>
          <a href="/auth"><button className="btn-nav">Try now</button></a>
        </nav>
      </div>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="stars" aria-hidden="true">
          {[...Array(8)].map((_, i) => <span key={i} className="star" />)}
        </div>
        <p className="hero-time">Late night support · India</p>
        <h1>It&apos;s 2&nbsp;AM and You Need<br />Someone to Talk To</h1>
        <p className="sub">
          Phone in hand. Everyone else asleep. Thoughts going in circles.
          You&apos;re not the only one awake right now — and you don&apos;t have to stay alone with this.
        </p>
        <div className="hero-btns">
          <a href="/auth"><button className="btn-primary">Find someone right now →</button></a>
          <a href="/browse"><button className="btn-outline">Browse available listeners</button></a>
        </div>
        <p className="hero-note">Anonymous · First 5 min free · ₹160 per session after</p>
      </div>

      {/* ── BODY ── */}
      <div className="page">
        {/* breadcrumb */}
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <span style={{ color: 'var(--navy)', opacity: 1 }}>Late Night Support India</span>
        </div>

        <div className="disclaimer">
          LeanOn is peer emotional support — not therapy or clinical treatment.
          If you need professional mental health care, please reach a licensed practitioner.
        </div>

        {/* Why night feels harder */}
        <div className="card">
          <p className="section-label">The 2 AM feeling</p>
          <h2>Why night feels harder than the day</h2>
          <p>
            During the day there&apos;s noise, work, people — things to push the heaviness aside.
            At night, when the distractions fall away, everything you&apos;ve been carrying
            comes back. The thing you said. The thing that was said to you.
            The worry about tomorrow that&apos;s been sitting in the background all day.
          </p>
          <p>
            Night amplifies. Loneliness feels more total. Regrets feel more permanent.
            The silence of a sleeping house can feel surprisingly suffocating.
            This is not weakness — it&apos;s how the brain works without distraction.
          </p>
          <p>
            And in India, even if someone is physically nearby, there&apos;s often
            no private space to process. You can&apos;t call a friend at midnight
            without alarming them. Therapists aren&apos;t available at 3&nbsp;AM.
            That gap is exactly what LeanOn is here for.
          </p>
        </div>

        {/* Availability */}
        <div className="card">
          <p className="section-label">Available right now</p>
          <h2>LeanOn is open — even after midnight</h2>
          <div className="avail-badge">
            <span className="avail-dot" />
            Listeners online now
          </div>
          <p>
            We always have at least some listeners available through the night —
            but to be honest with you: overnight coverage isn&apos;t always instant.
            You might connect right away, or you might wait a few minutes.
            Either way, someone will be there.
          </p>
          <p>
            Our listeners are real people — not bots, not scripts.
            Many of them are night people themselves, or have been through
            their own dark, sleepless nights. They understand why you&apos;re here
            at this hour, and they won&apos;t make you explain it.
          </p>
          <p>
            You can text (silent — no one nearby will hear) or use voice if
            you need the warmth of an actual human voice.
            Start with 5 minutes. That&apos;s all you have to commit to.
          </p>
        </div>

        {/* What to talk about */}
        <div className="card">
          <p className="section-label">What you can talk about</p>
          <h2>There&apos;s no wrong reason to be here at 2 AM</h2>
          <p style={{ marginBottom: 16 }}>
            You don&apos;t need a &quot;big enough&quot; reason. At this hour, anything keeping you awake is enough.
          </p>
          <div className="topics">
            <div className="topic">Relationship stuff that&apos;s on your mind</div>
            <div className="topic">Work stress you can&apos;t stop replaying</div>
            <div className="topic">A fight that ended badly</div>
            <div className="topic">Just needing to not feel alone</div>
            <div className="topic">Anxiety about something tomorrow</div>
            <div className="topic">A thought that keeps looping</div>
            <div className="topic">Something you can&apos;t tell anyone you know</div>
            <div className="topic">No reason — just can&apos;t sleep</div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq">
          <p className="section-label" style={{ marginTop: 8 }}>Common questions</p>

          <div className="faq-item">
            <h3>Is anyone available at 2 AM?</h3>
            <p>
              LeanOn always has at least some listeners online through the night —
              but overnight availability is lower than daytime, so it may not always
              be instant. Check the browse page for live availability.
              If no one is free at that exact moment, try again in a few minutes.
            </p>
          </div>

          <div className="faq-item">
            <h3>Will talking help me sleep?</h3>
            <p>
              Many people find that putting words to what&apos;s on their mind — even for 10&ndash;15 minutes —
              quiets the mental loop enough to finally rest.
              We can&apos;t promise sleep, but being heard often takes the edge off
              the restlessness that makes it impossible.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I talk for just 5 minutes?</h3>
            <p>
              Absolutely. The first 5 minutes of your very first session are completely free —
              no wallet top-up needed. Say what&apos;s on your mind and sign off if you want.
              No minimum, no obligation to continue.
            </p>
          </div>

          <div className="faq-item">
            <h3>Is the first session really free?</h3>
            <p>
              Yes. Every new user gets one free 5-minute session.
              No card, no recharge — just sign up and start.
              After that, 15-minute sessions start at ₹160.
            </p>
          </div>
        </div>

        {/* Crisis */}
        <div className="crisis-box">
          <p>🆘 If you are having thoughts of self-harm or are in crisis right now, please reach out immediately:</p>
          <p style={{ marginTop: 8 }}>
            <strong><a href="tel:08046110007">NIMHANS: 080-46110007</a></strong> (free, 24/7)
            &nbsp;·&nbsp;
            <strong><a href="tel:14416">Tele-MANAS: 14416</a></strong> (free, Govt of India)
          </p>
        </div>

        {/* Cross-links */}
        <p className="section-label" style={{ marginTop: 8 }}>Related pages</p>
        <a href="/someone-to-talk-to-at-night">
          <div className="also-card">
            <span>Someone to talk to at night — general guide</span>
            <span className="arrow">→</span>
          </div>
        </a>
        <a href="/support/cant-sleep-anxiety">
          <div className="also-card">
            <span>Can&apos;t sleep — anxiety &amp; sleeplessness support</span>
            <span className="arrow">→</span>
          </div>
        </a>
        <a href="/support/loneliness">
          <div className="also-card">
            <span>Feeling lonely — peer support for loneliness</span>
            <span className="arrow">→</span>
          </div>
        </a>
        <a href="/need-to-vent-right-now">
          <div className="also-card">
            <span>Need to vent right now</span>
            <span className="arrow">→</span>
          </div>
        </a>

        {/* CTA */}
        <div className="cta-bottom" style={{ marginTop: 8 }}>
          <h2>Someone is here right now</h2>
          <p>
            No appointment. No waiting room. Just a real person
            ready to listen — even at this hour.
          </p>
          <div className="cta-btns">
            <a href="/auth"><button className="btn-primary">Find someone right now →</button></a>
            <a href="/browse"><button className="btn-outline">Browse available listeners</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
