import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Working Woman Stress India — Carrying Career, Home and Family All at Once | LeanOn',
  description: 'For working women in India navigating the weight of career, home, family, and the endless expectation to do it all without complaint. Talk to someone who understands what that double shift actually feels like.',
  keywords: [
    'working woman stress India', 'working women mental health India', 'professional woman burnout India',
    'career and family balance India', 'working mother stress India', 'women work life balance India',
    'double shift working women India', 'working women anxiety India', 'corporate woman stress India',
    'women career burnout India', 'professional women emotional support India',
    'working woman exhausted India', 'IT woman burnout India', 'career break women India',
    'returning to work after baby India', 'women identity career India',
  ],
  alternates: { canonical: 'https://www.leanon.app/support/working-woman-india', languages: { 'en-IN': 'https://www.leanon.app/support/working-woman-india' } },
  openGraph: {
    title: 'Working Woman Stress India | LeanOn',
    description: 'Career + home + family. All at once. For working women in India who are tired of carrying everything.',
    url: 'https://www.leanon.app/support/working-woman-india',
    siteName: 'LeanOn',
    type: 'article',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn — Working Woman Support India' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do working women in India experience a higher emotional load?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research consistently shows that women in India — even those in full-time professional careers — carry a disproportionate share of domestic labour, childcare, and emotional management within the family. This "double shift" — a full workday followed by a full domestic shift — means working women in India are doing significantly more total work than their male partners, with significantly less recognition of the invisible load. The cultural expectation that this should be done without complaint, cheerfully, adds another layer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is career burnout different from general burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The symptoms overlap significantly, but career burnout for women often has an additional dimension: the identity question. For many professional women, their career is tied to their sense of self — competence, autonomy, identity outside of family roles. When work becomes overwhelming, or when a career break forces them to step back, the loss is not just of income but of a piece of who they are. This makes career burnout for women particularly complex to navigate.',
      },
    },
    {
      '@type': 'Question',
      name: 'I had to take a career break for pregnancy or childcare. How do I deal with losing my identity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Career breaks for women in India are common and often unavoidable — but the identity erosion that accompanies them is rarely acknowledged. You were someone with a professional identity, colleagues, a domain of expertise, and a daily structure. Losing that, even temporarily, even for something you chose, involves a genuine grief. Naming it — that this is a loss you are carrying alongside the love for your child — is the beginning of navigating it honestly. You do not have to pretend you are only grateful.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to talk about work stress on LeanOn without it becoming career advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and this is specifically what LeanOn peer listeners are trained to offer. Not career coaching, not advice about what to do, not a to-do list. A real person who listens to what you are actually experiencing — the stress, the exhaustion, the feeling of being invisible at home while performing perfectly at work — and receives it without trying to fix it.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel guilty for struggling — I have a good job and a good life. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is one of the most common things professional women say. Having material stability does not inoculate against emotional exhaustion, loneliness, or feeling unseen. In some ways it makes it harder to name — the cultural and internal message is "you have everything, what is there to complain about?" But emotional needs are not cancelled out by career success or financial security. Struggling is not a function of how good your life looks from the outside.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'For Women', item: 'https://www.leanon.app/for-women' },
    { '@type': 'ListItem', position: 3, name: 'Working Woman India', item: 'https://www.leanon.app/support/working-woman-india' },
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
  .double-shift{background:white;border-radius:20px;border:1.5px solid var(--border);overflow:hidden;margin:24px 0;}
  .ds-row{display:flex;padding:14px 20px;border-bottom:1px solid var(--border);align-items:center;gap:16px;}
  .ds-row:last-child{border-bottom:none;}
  .ds-time{font-size:12px;font-weight:800;color:var(--teal);min-width:64px;}
  .ds-task{font-size:14px;font-weight:600;color:var(--navy);}
  .ds-who{font-size:12px;color:var(--gray);margin-left:auto;font-weight:700;}
  .ds-who.both{color:var(--teal);}
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
  .crisis{background:#FFF8F0;border-left:4px solid var(--orange);border-radius:0 12px 12px 0;padding:16px 20px;margin:32px 0;font-size:13px;color:var(--navy);line-height:1.7;}
  .crisis strong{display:block;margin-bottom:4px;}
  .crisis a{color:var(--teal);font-weight:700;}
`

export default function WorkingWomanIndiaPage() {
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
          <a href="/for-women">For Women</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Working Woman India</span>
        </nav>

        <p className="hero-tag">Working Women · Burnout · Career + Home · India</p>
        <h1>You Work a Full Day. Then You Come Home and <em>Work Another One.</em></h1>
        <p className="lead">
          For working women in India, the day does not end when you leave the office. It continues — at home,
          in the kitchen, with the children, in the mental load of managing everyone else's lives alongside your own.
          You are expected to perform brilliantly at work and seamlessly at home, without ever visibly struggling.
          That is not a reasonable expectation. And it is exhausting.
        </p>

        <div className="crisis">
          <strong>If you are having thoughts of self-harm</strong>
          NIMHANS helpline: <a href="tel:08046110007">080-46110007</a> · Tele-MANAS: <a href="tel:14416">14416</a> (free, 24/7)
        </div>

        <h2>The Double Shift — What a Working Woman's Day Actually Looks Like</h2>
        <div className="double-shift">
          <div className="ds-row"><span className="ds-time">6–8 AM</span><span className="ds-task">Cook breakfast, school prep, getting child ready</span><span className="ds-who">You</span></div>
          <div className="ds-row"><span className="ds-time">9–6 PM</span><span className="ds-task">Full professional workday — meetings, deliverables, deadlines</span><span className="ds-who both">Both</span></div>
          <div className="ds-row"><span className="ds-time">6–8 PM</span><span className="ds-task">Pick up child, cook dinner, homework help, bath time</span><span className="ds-who">You</span></div>
          <div className="ds-row"><span className="ds-time">8–10 PM</span><span className="ds-task">Household management, tomorrow's prep, any remaining work</span><span className="ds-who">You</span></div>
          <div className="ds-row"><span className="ds-time">Ongoing</span><span className="ds-task">Emotional labour — managing everyone's moods, worries, conflicts</span><span className="ds-who">You</span></div>
          <div className="ds-row"><span className="ds-time">Never</span><span className="ds-task">Someone asking how YOU are doing</span><span className="ds-who">—</span></div>
        </div>

        <h2>The Invisible Things Nobody Counts</h2>
        <p>
          The mental load of a working woman in India includes: remembering everyone's appointments,
          anticipating what the household needs before it runs out, managing relationships with both families,
          tracking the child's development, navigating in-law expectations, managing finances, and doing
          all of this while maintaining a professional identity at work.
        </p>
        <p>
          None of this shows up in any metric. None of it is acknowledged as work. And most of it
          is invisible until it is not done — at which point it becomes a failure.
        </p>

        <h2>When You Have to Take a Career Break</h2>
        <p>
          Pregnancy complications, childcare gaps, a family health crisis — there are many reasons
          working women in India step back from their careers. The loss is rarely acknowledged fully.
          Income stops. Professional identity is suspended. The gap in your CV begins to feel like an accusation.
        </p>
        <p>
          And when you are ready to restart — whether it is a business you planned for years or a job
          you want to return to — there are often new obstacles: family resistance, practical barriers,
          a sense that your window has narrowed.
        </p>
        <p>
          The frustration and grief of this is completely legitimate. And it deserves to be heard.
        </p>

        <div className="card">
          <div className="card-label">What LeanOn offers working women</div>
          <h3>A space that is entirely about you</h3>
          <p>
            Not your child&apos;s needs. Not your husband&apos;s perspective. Not your manager&apos;s feedback.
            A conversation where you are the subject, not the context. Where you can say "I am exhausted,
            I feel invisible, I do not know where I went" — and be received without advice, without fixes,
            without it being turned into someone else&apos;s problem.
          </p>
        </div>

        <div className="faq">
          <h2>Questions Working Women Ask</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{item.name}</div>
              <div className="faq-a">{item.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>

        <div className="cta-card">
          <h2>You Carry Everyone. Let Someone Carry You for 15 Minutes.</h2>
          <p>Talk to a real trained peer listener. Anonymous. No appointment. First 5 minutes free. Sessions from ₹99.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Find a listener</button></a>
            <a href="/for-women"><button className="btn-secondary">Support for women</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
