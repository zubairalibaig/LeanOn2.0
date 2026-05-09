import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'LeanOn — Someone to lean on, anytime',
  description: "Talk to real people who have been through what you're going through. Peer listeners available 24/7. Start free.",
}
export default function Home() {
  return (
    <>
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
          height:80px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          max-width:1100px;
          margin:0 auto;
        }
        .nav-logo{height:72px;width:auto;}
        .nav-right{display:flex;align-items:center;gap:12px;}
        .btn-ghost{background:transparent;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:700;font-size:14px;padding:9px 18px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;transition:all 0.2s;display:none;}
        .btn-ghost:hover{background:var(--teal);color:white;}
        @media(min-width:520px){.btn-ghost{display:block;}}
        .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:11px 24px;border-radius:50px;border:none;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 12px rgba(26,143,160,0.35);}
        .btn-nav:hover{background:#167a8a;transform:translateY(-1px);}

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
        .flis{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:16px 18px;display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px;}
        .flis p{font-size:13px;font-weight:700;color:var(--navy);}
        .flis span{font-size:12px;color:var(--gray);font-weight:500;display:block;margin-top:2px;}
        .btn-lis{background:white;color:var(--teal);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;padding:9px 18px;border-radius:50px;border:2px solid var(--teal);cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all 0.2s;}
        .btn-lis:hover{background:var(--teal);color:white;}
        .fcp{font-size:12px;color:var(--muted);font-weight:600;}
      `}</style>

      {/* NAV — transparent, sits on gradient */}
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <div className="nav-right">
          <a href="/become-listener" className="btn-ghost">Become a listener</a>
          <a href="/auth" className="btn-nav">Open app</a>
        </div>
      </nav>

      {/* HERO — flows with same gradient background */}
      <section className="hero">
        <div className="hero-badge"><span>🌙</span><span>Available 24 / 7 — even at 2 AM</span></div>
        <h1>Someone to<br /><span className="o">lean on,</span><br />anytime.</h1>
        <p>Talk to real people who have been through what you&apos;re going through. No appointments. No stigma. No waiting.</p>
        <div className="hero-btns">
          <a href="/auth" className="btn-primary">Start your free 5-min chat</a>
          <a href="/browse" className="btn-outline">Browse listeners first</a>
        </div>
        <p className="hero-note">First session free · No credit card needed</p>
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

      {/* PRICING — FIXED: listener keeps 100%, flat ₹15 added on top */}
      <div className="inner">
        <h2 className="sh">Simple, honest pricing</h2>
        <p className="ss">Listeners keep 100% of their rate. LeanOn adds a flat ₹15 platform fee.</p>
        <div className="pc">
          {[
            {l:'Free trial',d:'5 minutes · Text only · No wallet needed',p:'₹0',b:'First session free',feat:false},
            {l:'Quick chat',d:'15 minutes · Listener earns ₹150 · You pay ₹165',p:'₹165',b:'',feat:false},
            {l:'Deep dive',d:'30 minutes · Listener earns ₹300 · You pay ₹315',p:'₹315',b:'Most popular',feat:true},
          ].map((item,i)=>(
            <div key={i} className={`pcard${item.feat?' feat':''}`}>
              <div><div className="pl">{item.l}</div><div className="pd">{item.d}</div>{item.b&&<div className="pb">{item.b}</div>}</div>
              <div className="pa">{item.p}</div>
            </div>
          ))}
        </div>
        <div className="fee-note">
          <span>💡</span>
          <span><strong>How pricing works:</strong> Listeners set their own rate (₹8–25/min). LeanOn adds a flat ₹15 platform fee on top — that&apos;s how we keep the lights on. Listeners receive 100% of what they charge. Unused wallet balance is fully refundable, anytime.</span>
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
          <div className="cb"><p>🆘 <strong>In crisis?</strong> iCall: <strong>9152987821</strong> · Vandrevala Foundation: <strong>1860-2662-345</strong> (24/7)</p></div>
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
          <div style={{marginBottom:18}}><img src="/logo.png" alt="LeanOn" style={{height:48}} /></div>
          <div className="fli">
            <a href="/about">About</a><a href="/browse">Find a listener</a>
            <a href="/privacy">Privacy policy</a><a href="/terms">Terms of use</a><a href="/contact">Contact</a>
          </div>
          <div className="flis">
            <div><p>Have lived experience to share?</p><span>Listeners keep 100% of their rate. You set your own price.</span></div>
            <a href="/become-listener"><button className="btn-lis">Join as listener →</button></a>
          </div>
          <p className="fcp">© 2025 LeanOn · leanon.app · Peer support platform · Made in India 🇮🇳</p>
        </div>
      </footer>
    </>
  )
}
