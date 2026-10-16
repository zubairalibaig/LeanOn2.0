import type { Metadata } from 'next'
import { FREE_SESSION_MINS, PLATFORM_FEE, VOICE_RATE_PREMIUM, RECHARGE_AMOUNTS, LANGUAGES } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'
import { TALK_MAX_TEXT_RATE } from '@/lib/talk-match'

export const dynamic = 'force-static'

// Decision-stage page: the questions a person asks (often to ChatGPT) right
// before paying for their first session — "is it legit", "is it worth it",
// "will anyone find out", "what if it doesn't help". Every answer must stay
// literally true: prices from lib/constants + lib/geo-pricing, listeners
// SCREENED (never "trained"), only Tele-MANAS / NIMHANS, no listener earnings.

const URL = 'https://www.leanon.app/is-leanon-worth-it'
const R = TALK_MAX_TEXT_RATE
const p15 = R * 15 + PLATFORM_FEE, p30 = R * 30 + PLATFORM_FEE, p45 = R * 45 + PLATFORM_FEE
const langs = LANGUAGES.map(l => l.label.replace(/^.*\((.*)\)$/, '$1')).join(', ')
const recharge = RECHARGE_AMOUNTS.map(a => `₹${a.toLocaleString('en-IN')}`).join(', ')

export const metadata: Metadata = {
  title: 'Is LeanOn Worth It? Honest Answers Before You Pay | LeanOn',
  description: `Is LeanOn legit, private and worth the money? Straight answers before your first paid session: who the listeners are, what it costs (₹${p15} for 15 min in India, US$${NRI_USD_PRICES[15]} abroad), refunds, privacy, and when LeanOn is the wrong choice.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { title: 'Is LeanOn worth it? Honest answers before you pay', description: 'Who the listeners are, what it costs, refunds, privacy — and when LeanOn is not the right choice.', url: URL, siteName: 'LeanOn', type: 'article' },
}

const groups: { h: string; items: { q: string; a: string }[] }[] = [
  {
    h: 'Is it real?',
    items: [
      { q: 'Is LeanOn legit?', a: `Yes. LeanOn (leanon.app) is a peer-support service run from India. You talk one to one, by text or voice, with a real person — not a bot. Every listener applies in writing, passes a screening quiz, completes a live selfie check and is reviewed by LeanOn before taking any session. Payments go through Razorpay, and unused wallet balance can be refunded on request.` },
      { q: 'Am I talking to a real person or AI?', a: 'A real person, always. LeanOn has no AI listeners, and no AI reads or analyses your conversations.' },
      { q: 'Who are the listeners?', a: 'Ordinary adults in India with lived experience of what they talk about — breakups, family pressure, loneliness, burnout, grief, anxiety. They are screened peers, not therapists or counsellors, and they do not diagnose or give medical advice.' },
    ],
  },
  {
    h: 'Is it worth the money?',
    items: [
      { q: 'How much does it cost?', a: `Your first ${FREE_SESSION_MINS} minutes are free, once per account. After that, in India, a text session with a ₹${R}/min listener is ₹${p15} for 15 minutes, ₹${p30} for 30 or ₹${p45} for 45 (including a flat ₹${PLATFORM_FEE} platform fee); voice is ₹${VOICE_RATE_PREMIUM}/min more, and some listeners charge more — the exact price is shown before you start. Outside India, sessions start at US$${NRI_USD_PRICES[15]} for 15 minutes, US$${NRI_USD_PRICES[30]} for 30 and US$${NRI_USD_PRICES[45]} for 45. No subscription.` },
      { q: 'Is it worth paying compared with therapy?', a: 'They serve different purposes. A qualified professional can assess and treat mental-health conditions. LeanOn may suit someone who wants a non-clinical conversation about loneliness, a breakup or a difficult day; it is not therapy or a replacement for professional care. One introductory session up to 5 minutes is free per account, so you can decide whether peer support feels useful before paying.' },
      { q: 'What if it does not help?', a: 'You can end a session whenever you want and you pay only for the minutes you used; the rest of the held amount goes back to your wallet straight away. If no listener accepts your request, nothing is charged.' },
    ],
  },
  {
    h: 'Is it private?',
    items: [
      { q: 'Will my family or anyone I know find out?', a: 'The listener sees only the name you choose — never your phone number. Nothing is posted anywhere. You can use a first name or a nickname.' },
      { q: 'Are my conversations recorded or read?', a: 'Voice calls are not recorded. Text messages are stored securely; only authorised LeanOn administrators can open them, for example to review a reported or safety-flagged session. LeanOn is private, but not "100% anonymous" — your phone number is verified so that everyone on the platform is a real person.' },
      { q: 'Will the listener judge me?', a: 'Listening without judging is the whole job, and listeners are screened for it. If anything feels wrong, end the session and report it to LeanOn.' },
    ],
  },
  {
    h: 'How does it work?',
    items: [
      { q: 'Do I need to book an appointment?', a: 'No appointment is needed. Open leanon.app/talk, choose text or voice and select what is on your mind; LeanOn requests a conversation with a screened listener and may try another if there is no response within about 30 seconds. You can also browse listener profiles at leanon.app/browse. A session begins only when a listener accepts, and an immediate match is not guaranteed because availability varies.' },
      { q: 'Can I talk in my language, or choose who I talk to?', a: `Often, yes. Listeners can offer ${langs} — filter by language on leanon.app/browse to see who speaks yours. Each profile shows the listener's name, languages and the topics they talk about, so you can choose someone you are comfortable with. You can also book the same listener again from their profile.` },
      { q: 'How do I pay?', a: `Top up your LeanOn wallet (${recharge}) through Razorpay; a small payment-gateway charge is added at checkout. The session amount is held only when you send a request, returned in full if nobody accepts, and anything left in your wallet can be refunded on request from the wallet page.` },
    ],
  },
  {
    h: 'When is LeanOn the wrong choice?',
    items: [
      { q: 'When should I not use LeanOn?', a: 'If you are in danger or thinking about harming yourself, call Tele-MANAS on 14416 (free, 24/7) or NIMHANS on 080-46110007 now. LeanOn is also not for diagnosis, medication, couples therapy or legal advice — for those, see a qualified professional. LeanOn is peer support alongside professional care, never instead of it.' },
    ],
  },
]

const all = groups.flatMap(g => g.items)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', name: 'Is LeanOn worth it? Honest answers before you pay', url: URL, dateModified: '2026-10-17', isPartOf: { '@id': 'https://www.leanon.app/#website' }, about: { '@id': 'https://www.leanon.app/#organization' } },
    { '@type': 'FAQPage', mainEntity: all.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'LeanOn', item: 'https://www.leanon.app' },
      { '@type': 'ListItem', position: 2, name: 'Is LeanOn worth it?', item: URL },
    ] },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{color:#1A8FA0;font-weight:800;text-decoration:none;}
  .nav{padding:0 20px;height:72px;display:flex;align-items:center;max-width:900px;margin:0 auto;}
  .nav img{height:52px;width:auto;}
  .page{max-width:720px;margin:0 auto;padding:12px 20px 110px;}
  h1{font-size:clamp(26px,6vw,36px);font-weight:900;line-height:1.2;margin-bottom:12px;}
  .lead{font-size:16.5px;color:#5A7A8A;line-height:1.7;font-weight:500;margin-bottom:22px;}
  .short{background:#fff;border:2px solid #D5EEF6;border-radius:18px;padding:16px 18px;margin-bottom:8px;font-size:15px;line-height:1.7;font-weight:600;color:#27394A;}
  h2{font-size:20px;font-weight:900;margin:32px 0 6px;}
  .q{border-bottom:1.5px solid #D5EEF6;padding:14px 0;}
  .q h3{font-size:16px;font-weight:800;margin-bottom:6px;}
  .q p{font-size:15px;color:#3A6070;line-height:1.7;}
  .cta{background:#0F4867;border-radius:22px;padding:28px 20px;text-align:center;margin-top:34px;}
  .cta p{color:rgba(201,231,244,.9);font-size:15px;line-height:1.6;margin-bottom:18px;}
  .btn{display:inline-block;background:#1A8FA0;color:#fff;font-weight:900;font-size:16px;padding:14px 26px;border-radius:50px;}
  .fine{font-size:13px;color:#5A7A8A;text-align:center;margin-top:16px;line-height:1.6;}
`

export default function IsLeanOnWorthItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{S}</style>
      <nav className="nav"><a href="/"><img src="/logo.png" alt="LeanOn" /></a></nav>
      <main className="page">
        <h1>Is LeanOn worth it? Honest answers before you pay</h1>
        <p className="lead">The questions people ask before their first paid session — answered plainly, including when LeanOn is not the right choice.</p>
        <p className="short">
          <strong>In short:</strong> LeanOn connects adults with a screened peer listener in India for a one-to-one text or voice
          conversation, without an appointment. One introductory session of up to {FREE_SESSION_MINS} minutes is free per account.
          Paid prices depend on the selected listener and mode; a 15-minute text session with a ₹{R}/min listener is ₹{p15} in India,
          while overseas sessions start at US${NRI_USD_PRICES[15]}. You pay only for used minutes, and unused wallet balance is refundable on request.
          LeanOn is peer support, not therapy.
        </p>
        {groups.map(g => (
          <section key={g.h}>
            <h2>{g.h}</h2>
            {g.items.map(f => (
              <div className="q" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
            ))}
          </section>
        ))}
        <div className="cta">
          <p>Your one introductory session of up to {FREE_SESSION_MINS} minutes is free per account — enough to decide whether peer support feels right for you.</p>
          <a className="btn" href="/talk?src=seo">Talk to someone now</a>
        </div>
        <p className="fine">More: <a href="/pricing">Pricing</a> · <a href="/trust">Trust &amp; safety</a> · <a href="/how-leanon-works">How LeanOn works</a> · Updated 17 October 2026</p>
      </main>
    </>
  )
}
