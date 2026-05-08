import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeanOn — Someone to lean on, anytime',
  description: 'Talk to real people who have been through what you\'re going through. Peer listeners available 24/7. Start free.',
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy:   #0F4867;
          --navy2:  #1a6090;
          --orange: #FF9933;
          --orange2:#FFB366;
          --blue:   #C9E7F4;
          --cream:  #FFFBF5;
          --white:  #FFFFFF;
          --gray:   #6B8FA8;
          --lightgray: #F0F4F7;
          --border: #DDE8F0;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Nunito', sans-serif; background: var(--cream); color: var(--navy); -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; display: block; }

        /* NAV */
        .nav { position: sticky; top: 0; z-index: 100; background: rgba(255,251,245,0.95); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border); padding: 0 20px; height: 64px; display: flex; align-items: center; justify-content: space-between; max-width: 100%; }
        .nav-logo { display: flex; align-items: center; gap: 10px; }
        .nav-logo img { height: 106px; width: auto; }
        .nav-links { display: flex; align-items: center; gap: 8px; }
        .btn-nav { background: var(--orange); color: white; font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 14px; padding: 9px 20px; border-radius: 50px; border: none; cursor: pointer; transition: all 0.2s; }
        .btn-nav:hover { background: #e8861a; transform: translateY(-1px); }
        .btn-nav-ghost { background: transparent; color: var(--navy); font-family: 'Nunito', sans-serif; font-weight: 600; font-size: 14px; padding: 9px 16px; border-radius: 50px; border: none; cursor: pointer; transition: all 0.2s; display: none; }
        @media(min-width:480px) { .btn-nav-ghost { display: block; } }

        /* HERO */
        .hero { padding: 96px 20px 64px; text-align: center; max-width: 520px; margin: 0 auto; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #FFF3E0; color: var(--orange); font-weight: 700; font-size: 13px; padding: 7px 16px; border-radius: 50px; margin-bottom: 24px; border: 1.5px solid #FFD9A0; }
        .hero h1 { font-size: clamp(34px, 8vw, 48px); font-weight: 900; line-height: 1.15; color: var(--navy); margin-bottom: 18px; letter-spacing: -0.5px; }
        .hero h1 span { color: var(--orange); }
        .hero p { font-size: 17px; color: var(--gray); line-height: 1.65; margin-bottom: 36px; max-width: 380px; margin-left: auto; margin-right: auto; }
        .hero-btns { display: flex; flex-direction: column; gap: 12px; max-width: 300px; margin: 0 auto 20px; }
        .btn-primary { background: var(--orange); color: white; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 16px; padding: 16px 28px; border-radius: 16px; border: none; cursor: pointer; display: block; text-align: center; transition: all 0.2s; box-shadow: 0 4px 20px rgba(255,153,51,0.35); }
        .btn-primary:hover { background: #e8861a; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(255,153,51,0.4); }
        .btn-secondary { background: white; color: var(--navy); font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 16px; padding: 16px 28px; border-radius: 16px; border: 2px solid var(--border); cursor: pointer; display: block; text-align: center; transition: all 0.2s; }
        .btn-secondary:hover { border-color: var(--navy); background: var(--lightgray); }
        .hero-note { font-size: 12px; color: #9BB5C7; font-weight: 600; }

        /* TOPICS */
        .section { padding: 48px 20px; max-width: 540px; margin: 0 auto; }
        .section-title { font-size: 22px; font-weight: 800; color: var(--navy); margin-bottom: 6px; }
        .section-sub { font-size: 14px; color: var(--gray); margin-bottom: 24px; font-weight: 500; }
        .topic-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .topic-card { background: white; border: 1.5px solid var(--border); border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 14px; color: var(--navy); transition: all 0.2s; cursor: pointer; }
        .topic-card:hover { border-color: var(--orange); background: #FFF8F0; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(15,72,103,0.08); }
        .topic-icon { font-size: 24px; flex-shrink: 0; }

        /* ABOUT SECTION */
        .about-section { background: white; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 48px 20px; }
        .about-inner { max-width: 540px; margin: 0 auto; }
        .about-label { font-size: 12px; font-weight: 800; color: var(--orange); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; }
        .about-title { font-size: clamp(22px,5vw,30px); font-weight: 900; color: var(--navy); margin-bottom: 20px; line-height: 1.25; }
        .about-title span { color: var(--orange); }
        .about-body { font-size: 15px; color: #4A6B7E; line-height: 1.75; }
        .about-body p + p { margin-top: 14px; }

        /* FEATURES */
        .features-section { padding: 48px 20px; max-width: 540px; margin: 0 auto; }
        .feature-list { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
        .feature-item { display: flex; gap: 16px; align-items: flex-start; background: white; border: 1.5px solid var(--border); border-radius: 18px; padding: 18px; }
        .feature-icon-wrap { width: 44px; height: 44px; border-radius: 12px; background: #FFF3E0; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
        .feature-title { font-size: 15px; font-weight: 800; color: var(--navy); margin-bottom: 4px; }
        .feature-desc { font-size: 13px; color: var(--gray); line-height: 1.55; font-weight: 500; }

        /* HOW IT WORKS */
        .how-section { background: var(--navy); padding: 52px 20px; }
        .how-inner { max-width: 540px; margin: 0 auto; }
        .how-title { font-size: 24px; font-weight: 900; color: white; text-align: center; margin-bottom: 32px; }
        .steps-list { display: flex; flex-direction: column; gap: 0; }
        .step-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .step-item:last-child { border-bottom: none; }
        .step-num { width: 36px; height: 36px; border-radius: 50%; background: var(--orange); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 15px; color: white; flex-shrink: 0; margin-top: 2px; }
        .step-title { font-size: 15px; font-weight: 800; color: white; margin-bottom: 4px; }
        .step-desc { font-size: 13px; color: var(--blue); line-height: 1.5; font-weight: 500; }

        /* PRICING */
        .pricing-section { padding: 52px 20px; max-width: 540px; margin: 0 auto; }
        .pricing-cards { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
        .price-card { background: white; border: 1.5px solid var(--border); border-radius: 18px; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; }
        .price-card.featured { border: 2.5px solid var(--orange); background: #FFFBF5; }
        .price-label { font-size: 16px; font-weight: 800; color: var(--navy); margin-bottom: 3px; }
        .price-detail { font-size: 13px; color: var(--gray); font-weight: 500; }
        .price-badge { background: #FFF3E0; color: var(--orange); font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 50px; display: inline-block; margin-top: 5px; }
        .price-amount { font-size: 26px; font-weight: 900; color: var(--navy); flex-shrink: 0; }
        .refund-note { background: var(--lightgray); border-radius: 14px; padding: 14px 16px; display: flex; gap: 12px; align-items: center; margin-top: 14px; }
        .refund-note span { font-size: 13px; color: var(--gray); line-height: 1.5; font-weight: 500; }

        /* TESTIMONIALS */
        .testimonials-section { background: white; border-top: 1px solid var(--border); padding: 52px 20px; }
        .testimonials-inner { max-width: 540px; margin: 0 auto; }
        .testimonial-list { display: flex; flex-direction: column; gap: 14px; margin-top: 24px; }
        .testimonial-card { background: var(--cream); border: 1.5px solid var(--border); border-radius: 18px; padding: 20px; }
        .stars { display: flex; gap: 3px; margin-bottom: 12px; }
        .star { color: var(--orange); font-size: 15px; }
        .testimonial-text { font-size: 14px; color: #3A5A6E; line-height: 1.65; font-weight: 500; margin-bottom: 14px; font-style: italic; }
        .testimonial-author { display: flex; align-items: center; gap: 10px; }
        .author-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--blue); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: var(--navy); flex-shrink: 0; }
        .author-name { font-size: 13px; font-weight: 700; color: var(--navy); }
        .author-city { font-size: 12px; color: var(--gray); font-weight: 500; }

        /* TRUST */
        .trust-section { padding: 40px 20px; max-width: 540px; margin: 0 auto; }
        .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; text-align: center; }
        .trust-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .trust-icon { width: 48px; height: 48px; border-radius: 16px; background: var(--lightgray); display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .trust-label { font-size: 12px; color: var(--gray); font-weight: 700; line-height: 1.3; }

        /* BOTTOM CTA */
        .cta-section { padding: 20px 20px 64px; max-width: 540px; margin: 0 auto; }
        .cta-card { background: var(--navy); border-radius: 28px; padding: 44px 28px; text-align: center; }
        .cta-card h2 { font-size: clamp(22px,5vw,28px); font-weight: 900; color: white; margin-bottom: 12px; line-height: 1.25; }
        .cta-card p { font-size: 15px; color: var(--blue); margin-bottom: 28px; font-weight: 500; }
        .btn-cta { background: var(--orange); color: white; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 17px; padding: 18px 36px; border-radius: 16px; border: none; cursor: pointer; display: inline-block; transition: all 0.2s; box-shadow: 0 6px 24px rgba(255,153,51,0.4); }
        .btn-cta:hover { background: #e8861a; transform: translateY(-2px); }

        /* FOOTER */
        .footer { border-top: 1px solid var(--border); padding: 32px 20px 48px; max-width: 540px; margin: 0 auto; }
        .footer-logo { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
        .footer-logo img { height: 96px; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-bottom: 16px; }
        .footer-links a { font-size: 13px; color: var(--gray); font-weight: 600; transition: color 0.2s; }
        .footer-links a:hover { color: var(--navy); }
        .footer-copy { font-size: 12px; color: #9BB5C7; font-weight: 600; }
        .footer-listener { margin-top: 20px; background: var(--lightgray); border-radius: 14px; padding: 16px 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .footer-listener p { font-size: 13px; font-weight: 700; color: var(--navy); }
        .footer-listener span { font-size: 12px; color: var(--gray); font-weight: 500; display: block; margin-top: 2px; }
        .btn-listener { background: white; color: var(--navy); font-family: 'Nunito', sans-serif; font-weight: 700; font-size: 13px; padding: 9px 16px; border-radius: 10px; border: 1.5px solid var(--border); cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: all 0.2s; }
        .btn-listener:hover { border-color: var(--navy); }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="LeanOn" />
        </a>
        <div className="nav-links">
          <a href="/become-listener" className="btn-nav-ghost">Become a listener</a>
          <a href="/auth" className="btn-nav">Get started free</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">
          <span>🌙</span>
          <span>Available 24 / 7 — even at 2 AM</span>
        </div>
        <h1>Someone to<br /><span>lean on,</span><br />anytime.</h1>
        <p>Talk to real people who have been through what you&apos;re going through. No appointments. No stigma. No waiting.</p>
        <div className="hero-btns">
          <a href="/auth" className="btn-primary">Start your free 5-min chat</a>
          <a href="/browse" className="btn-secondary">Browse listeners first</a>
        </div>
        <p className="hero-note">First session free · No credit card needed</p>
      </section>

      {/* ── TOPICS ── */}
      <section className="section">
        <h2 className="section-title">What&apos;s on your mind?</h2>
        <p className="section-sub">Pick a topic and find someone who gets it.</p>
        <div className="topic-grid">
          {[
            { id: 'loneliness',    icon: '🌙', label: 'Loneliness'       },
            { id: 'stress',        icon: '💼', label: 'Work stress'       },
            { id: 'career',        icon: '🧭', label: 'Career confusion'  },
            { id: 'relationships', icon: '💬', label: 'Relationships'     },
            { id: 'grief',         icon: '🌿', label: 'Grief & loss'      },
            { id: 'students',      icon: '📚', label: 'Student pressure'  },
            { id: 'startup',       icon: '🚀', label: 'Startup journey'   },
            { id: 'general',       icon: '☕', label: 'Just need to talk' },
          ].map(t => (
            <a key={t.id} href={`/browse?topic=${t.id}`} className="topic-card">
              <span className="topic-icon">{t.icon}</span>
              <span>{t.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <div className="about-section">
        <div className="about-inner">
          <p className="about-label">Our mission</p>
          <h2 className="about-title">Let&apos;s change the conversation on <span>emotional wellness</span></h2>
          <div className="about-body">
            <p>Emotional wellbeing is as important as physical health. When your body hurts, you seek help — the same should be true for how you feel inside. Life presents real challenges, and there&apos;s nothing wrong with needing someone to talk to.</p>
            <p>Unfortunately, stigma still holds people back. Seeking support is sometimes seen as weakness. LeanOn exists to change that — connecting you instantly with real people who have lived through what you&apos;re facing and found their way through.</p>
            <p>You don&apos;t need a diagnosis. You don&apos;t need an appointment. You just need someone to lean on.</p>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <h2 className="section-title">Why choose LeanOn?</h2>
        <p className="section-sub">Built around what actually helps people feel better.</p>
        <div className="feature-list">
          {[
            { icon: '🔍', title: 'Open listener directory',       desc: 'Browse peer listeners by topic for free. Read their stories, see ratings, find the right fit — before you pay anything.' },
            { icon: '⚡', title: 'Instant, no-appointment access', desc: 'No booking. No waiting rooms. Someone is available right now. Start a session in under 60 seconds.' },
            { icon: '💳', title: 'Pay-per-session flexibility',    desc: 'No subscriptions, no commitments. Recharge your wallet and use it whenever you need. Unused balance refunded anytime.' },
            { icon: '💬', title: 'Text or voice — your choice',    desc: 'Type if you need privacy in a joint home. Talk if you want the warmth of a voice. Both options, always.' },
            { icon: '🤝', title: 'Lived-experience listeners',     desc: 'Our listeners aren\'t just trained — they\'ve been through it. Breakups, burnout, grief, startup failure, student pressure. They understand.' },
            { icon: '🔒', title: 'Safe & private by design',       desc: 'Sessions are private. No personal information is shared. AI moderation protects every conversation.' },
          ].map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon-wrap">{f.icon}</div>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <div className="how-section">
        <div className="how-inner">
          <h2 className="how-title">Start your journey with LeanOn</h2>
          <div className="steps-list">
            {[
              { title: 'Sign up to LeanOn',              desc: 'Just your phone number. OTP verified. Takes 30 seconds.' },
              { title: 'Browse peer listeners',           desc: 'Filter by topic. Read bios and ratings. No charge to browse.' },
              { title: 'Pick your session length',        desc: 'Free 5-min trial, or choose 15 or 30 minutes.' },
              { title: 'Recharge your wallet',            desc: 'Top up ₹200, ₹500 or ₹1000. Refundable anytime, no expiry.' },
              { title: 'Start instantly',                 desc: 'Text chat or voice call — your session begins immediately.' },
              { title: 'Get the support you need',        desc: 'Rate your listener. Book again anytime. You\'re not alone.' },
            ].map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{i + 1}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICING ── */}
      <section className="pricing-section">
        <h2 className="section-title">Simple, honest pricing</h2>
        <p className="section-sub">Your listener keeps 90% of every session fee.</p>
        <div className="pricing-cards">
          <div className="price-card">
            <div>
              <div className="price-label">Free trial</div>
              <div className="price-detail">5 minutes · Text chat only</div>
              <div className="price-badge">First session free</div>
            </div>
            <div className="price-amount">₹0</div>
          </div>
          <div className="price-card">
            <div>
              <div className="price-label">Quick chat</div>
              <div className="price-detail">15 minutes · ₹150 + ₹15 platform fee</div>
            </div>
            <div className="price-amount">₹165</div>
          </div>
          <div className="price-card featured">
            <div>
              <div className="price-label">Deep dive</div>
              <div className="price-detail">30 minutes · ₹300 + ₹30 platform fee</div>
              <div className="price-badge">Most popular</div>
            </div>
            <div className="price-amount">₹330</div>
          </div>
        </div>
        <div className="refund-note">
          <span style={{fontSize: '20px'}}>🔄</span>
          <span>Unused wallet balance is fully refundable anytime. No lock-in, ever. Your money is safe.</span>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <div className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="section-title">What people are saying</h2>
          <p className="section-sub">Real sessions. Real relief.</p>
          <div className="testimonial-list">
            {[
              { text: 'I was dreading another sleepless night. LeanOn connected me with someone who just got it. No judgment, no advice I didn\'t ask for. Just someone who listened.', name: 'Priya M.', city: 'Bengaluru', init: 'P' },
              { text: 'As a founder going through a hard patch, I felt completely alone. Talking to someone who had survived their own startup failure was exactly what I needed.', name: 'Arjun K.', city: 'Mumbai', init: 'A' },
              { text: 'So much more affordable than therapy. And honestly more useful for the kind of day-to-day anxiety I was dealing with. I\'ve used it 4 times already.', name: 'Sneha R.', city: 'Hyderabad', init: 'S' },
            ].map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{'★★★★★'.split('').map((s, j) => <span key={j} className="star">{s}</span>)}</div>
                <p className="testimonial-text">&ldquo;{r.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{r.init}</div>
                  <div>
                    <div className="author-name">{r.name}</div>
                    <div className="author-city">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST ── */}
      <section className="trust-section">
        <div className="trust-grid">
          {[
            { icon: '🔒', label: 'Safe & private' },
            { icon: '💬', label: 'Text or voice' },
            { icon: '🔄', label: 'Refund anytime' },
            { icon: '⚡', label: 'Instant access' },
            { icon: '🤝', label: 'Lived experience' },
            { icon: '🌙', label: 'Available 24/7' },
          ].map((t, i) => (
            <div key={i} className="trust-item">
              <div className="trust-icon">{t.icon}</div>
              <span className="trust-label">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>You don&apos;t have to go through this alone.</h2>
          <p>Someone is available right now. Start free — no card needed.</p>
          <a href="/auth" className="btn-cta">Start free now →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/logo.png" alt="LeanOn" />
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/browse">Find a listener</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms of use</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-listener">
          <div>
            <p>Have lived experience to share?</p>
            <span>Earn ₹8–25/min as a peer listener</span>
          </div>
          <a href="/become-listener" className="btn-listener">Join as listener →</a>
        </div>
        <p className="footer-copy" style={{marginTop: '20px'}}>© 2025 LeanOn · leanon.app · Made with care in India 🇮🇳</p>
      </footer>
    </>
  )
}
