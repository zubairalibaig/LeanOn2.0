import type { Metadata } from 'next'
import { PLATFORM_FEE, VOICE_RATE_PREMIUM, FREE_SESSION_MINS, VOICE_PRICING_ENABLED } from '@/lib/constants'
import { NRI_USD_PRICES } from '@/lib/geo-pricing'

// The canonical, factual description of LeanOn — what it is, who it is (and is
// not) for, how listeners are chosen, pricing, availability, privacy and
// safety. Written for people AND for AI assistants/search engines, so every
// sentence must stay literally true: prices come from lib/constants.ts and
// lib/geo-pricing.ts; listeners are SCREENED, never "trained" (CLAUDE.md);
// no 24/7 promise (listeners are in India and choose their own hours).

export const dynamic = 'force-static'

const EXAMPLE_RATE = 10
const ex15 = EXAMPLE_RATE * 15 + PLATFORM_FEE

export const metadata: Metadata = {
  title: 'How LeanOn Works — Paid Peer Support, Explained Honestly',
  description: `What LeanOn is, who it helps, how listeners are screened, what a session costs (first ${FREE_SESSION_MINS} minutes free, then from ₹${ex15} for 15 minutes in India), privacy, safety, and what LeanOn is not.`,
  keywords: ['how leanon works', 'what is leanon', 'paid peer support india', 'talk to someone online india', 'online emotional support india', 'relationship support online', 'peer support vs therapy'],
  alternates: { canonical: 'https://www.leanon.app/how-leanon-works' },
}

const FAQ: { q: string; a: string }[] = [
  { q: 'What is LeanOn?', a: 'LeanOn (leanon.app) is an online peer-support service from India. You talk privately, one to one, by text or voice, with a screened peer listener: an ordinary person with lived experience who listens without judgment. It is paid per session, with your first 5 minutes free.' },
  { q: 'Is LeanOn therapy?', a: 'No. LeanOn is peer support, not therapy, counselling, diagnosis or medical care. Listeners are not psychologists, psychiatrists or licensed counsellors and do not give medical or clinical advice. For a mental health condition, please see a qualified professional.' },
  { q: 'Who is LeanOn for?', a: 'Adults (18+) who want to talk something through with a real person: relationship trouble, a breakup, marriage or family pressure, loneliness, work or study stress, overthinking, grief, or simply a hard day. It also suits Indians living abroad who want someone who understands the Indian context.' },
  { q: 'Who is LeanOn not for?', a: 'Anyone in immediate danger or thinking about suicide or self-harm should call NIMHANS (080-46110007) or Tele-MANAS (14416), free in India, or local emergency services. LeanOn is also not the right place for a diagnosis, medication, or treatment of a mental health condition.' },
  { q: 'How are LeanOn listeners chosen?', a: 'Every listener applies with a written application about their lived experience and why they want to listen, completes a screening quiz on handling difficult conversations, takes a live verification selfie, and is reviewed manually by LeanOn before they can take any session. Listeners are screened, not clinically trained, and agree to a code of conduct: confidentiality, no judgment, and no medical advice.' },
  { q: 'How much does LeanOn cost?', a: `Your first ${FREE_SESSION_MINS}-minute session is free (once per account). After that, in India each listener sets a per-minute rate and a session costs rate × minutes + a flat ₹${PLATFORM_FEE} fee — for example ₹${ex15} for 15 minutes with a ₹${EXAMPLE_RATE}/min listener.${VOICE_PRICING_ENABLED ? ` Voice calls cost ₹${VOICE_RATE_PREMIUM}/min more than text.` : ''} Outside India, sessions start at US$${NRI_USD_PRICES[15]} for 15 minutes, US$${NRI_USD_PRICES[30]} for 30 and US$${NRI_USD_PRICES[45]} for 45. You always see the price before you start.` },
  { q: 'Do I pay if I end early or nobody answers?', a: 'If no listener accepts your request, the amount held is returned to your wallet in full. If you end a session early, you pay only for the minutes used, and nothing if it lasted under a minute.' },
  { q: 'When are listeners available?', a: 'Listeners are based in India and go online when they choose, so availability follows Indian time and is usually best in the evenings (IST). You can see who is online right now, or use Talk now to be connected with whoever is free.' },
  { q: 'Is it private?', a: 'A listener sees only the name you choose — never your phone number. Voice calls are not recorded. Text messages are stored securely; only authorised LeanOn administrators can open them, for example to review a reported or safety-flagged session. LeanOn does not sell your data or share conversations outside LeanOn.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to talk to a peer listener on LeanOn',
  description: 'Get one-to-one peer emotional support on LeanOn, by text or voice.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Tell us what it is about, or choose someone', text: 'Use Talk now (pick a topic and text or voice, and LeanOn connects you with a listener who is free) or browse listeners by topic and language.' },
    { '@type': 'HowToStep', position: 2, name: 'Confirm your phone number', text: 'Sign in with a one-time code sent to your mobile number. Indian and several overseas numbers are supported. No email or full name needed.' },
    { '@type': 'HowToStep', position: 3, name: `Talk free for ${FREE_SESSION_MINS} minutes`, text: `Your first ${FREE_SESSION_MINS}-minute session is free, by text or voice.` },
    { '@type': 'HowToStep', position: 4, name: 'Continue if it helps', text: `Book 15, 30 or 45 minutes from your LeanOn wallet. In India from ₹${ex15} for 15 minutes; abroad from US$${NRI_USD_PRICES[15]}.` },
  ],
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  nav{padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;max-width:760px;margin:0 auto;}
  .page{max-width:720px;margin:0 auto;padding:16px 20px 110px;}
  h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.2;margin-bottom:14px;}
  .lead{font-size:16px;color:var(--gray);line-height:1.75;margin-bottom:24px;}
  .sec{background:white;border:1.5px solid var(--border);border-radius:20px;padding:22px;margin-bottom:16px;}
  .sec h2{font-size:19px;font-weight:900;margin-bottom:10px;}
  .sec p,.sec li{font-size:14.5px;color:#3A6070;line-height:1.72;}
  .sec p+p{margin-top:8px;}
  .sec ul{margin:8px 0 0 20px;list-style:disc;}
  .sec li{margin-bottom:5px;}
  .sec a{color:var(--teal);font-weight:800;}
  .two{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  @media(max-width:620px){.two{grid-template-columns:1fr;}}
  .note{background:#FFF8F0;border:1.5px solid #FFD9A0;border-radius:14px;padding:14px 16px;margin-bottom:16px;font-size:13.5px;color:#7A5C00;font-weight:600;line-height:1.6;}
  .crisis{background:#FFF0F0;border:2px solid #FFCDD2;border-radius:16px;padding:16px 18px;margin-bottom:16px;font-size:14px;color:#7A2020;font-weight:600;line-height:1.65;}
  .crisis a{color:#C0392B;text-decoration:underline;}
  .faq h3{font-size:15px;font-weight:800;margin:14px 0 4px;}
  .cta{text-align:center;background:var(--navy);border-radius:24px;padding:30px 22px;color:white;margin-top:8px;}
  .cta h2{font-size:21px;font-weight:900;margin-bottom:8px;}
  .cta p{font-size:14px;opacity:.85;margin-bottom:18px;}
  .btn{display:inline-block;background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 26px;border-radius:50px;border:none;cursor:pointer;margin:4px;}
  .btn.alt{background:white;color:var(--navy);}
`

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" style={{ height: 48 }} /></a>
        <a href="/talk"><button className="btn" style={{ fontSize: 13, padding: '8px 18px', margin: 0 }}>Talk now</button></a>
      </nav>
      <main className="page">
        <h1>How LeanOn works</h1>
        <p className="lead">
          LeanOn is an online peer-support service from India. You talk privately, one to one, by text or voice, with a
          screened peer listener — a real person with lived experience who listens without judging you. It is paid per
          session, and your first {FREE_SESSION_MINS} minutes are free.
        </p>

        <div className="note">LeanOn is peer support — not therapy, counselling, diagnosis or medical care. Listeners are not licensed professionals.</div>

        <div className="two">
          <section className="sec">
            <h2>Who it helps</h2>
            <ul>
              <li>Relationship trouble, a breakup, or marriage stress</li>
              <li>Family pressure and expectations</li>
              <li>Loneliness, or no one safe to talk to</li>
              <li>Work, study or exam stress and burnout</li>
              <li>Overthinking, worry, grief, or simply a hard day</li>
              <li>Indians abroad who want someone who understands the Indian context</li>
            </ul>
          </section>
          <section className="sec">
            <h2>Who it is not for</h2>
            <ul>
              <li>Anyone in immediate danger or thinking about suicide or self-harm — please use the helplines below</li>
              <li>Diagnosis, medication or treatment of a mental health condition — see a qualified professional</li>
              <li>Anyone under 18</li>
            </ul>
          </section>
        </div>

        <section className="sec">
          <h2>How a session works</h2>
          <ul>
            <li><strong>Talk now:</strong> pick what it is about and choose text or voice. LeanOn asks a listener who is free right now and, if they cannot answer within about 30 seconds, asks the next one. <a href="/talk">Talk now →</a></li>
            <li><strong>Or choose someone yourself:</strong> browse listeners by topic, language, age group and who is online. <a href="/browse">See listeners →</a></li>
            <li>Sign in with a one-time code sent to your phone. Indian and several overseas numbers work. No email or full name needed.</li>
            <li>Sessions are 5 (free), 15, 30 or 45 minutes. You can switch a voice call to text during the session.</li>
          </ul>
        </section>

        <section className="sec">
          <h2>Who the listeners are</h2>
          <p>Listeners are ordinary adults in India who have lived through things like heartbreak, family pressure, loneliness or burnout, and want to be there for others. Before taking any session, every listener:</p>
          <ul>
            <li>writes an application about their lived experience and why they want to listen;</li>
            <li>completes a screening quiz on how to respond in difficult conversations;</li>
            <li>takes a live verification selfie, checked by LeanOn and never shown publicly;</li>
            <li>is reviewed manually by LeanOn — many are asked to fix something or turned down;</li>
            <li>agrees to a code of conduct: confidentiality, no judgment, no medical or clinical advice.</li>
          </ul>
          <p>Listeners are screened, not clinically trained. Seekers can rate every session, and a listener who is reported can be suspended.</p>
        </section>

        <section className="sec">
          <h2>What it costs</h2>
          <ul>
            <li>Your first {FREE_SESSION_MINS}-minute session is free — once per account.</li>
            <li>In India, each listener sets a per-minute rate. A session costs <strong>rate × minutes + ₹{PLATFORM_FEE}</strong>: for example ₹{ex15} for 15 minutes with a ₹{EXAMPLE_RATE}/min listener.{VOICE_PRICING_ENABLED ? ` Voice calls are ₹${VOICE_RATE_PREMIUM}/min more than text.` : ''}</li>
            <li>Outside India, sessions start at US${NRI_USD_PRICES[15]} for 15 minutes, US${NRI_USD_PRICES[30]} for 30 and US${NRI_USD_PRICES[45]} for 45, billed in Indian rupees and shown in your currency.</li>
            <li>You pay from a LeanOn wallet. If nobody accepts your request, the full amount comes back. If you end early, you pay only for the minutes used — nothing if it lasted under a minute.</li>
          </ul>
          <p>Full details: <a href="/pricing">Pricing</a>.</p>
        </section>

        <section className="sec">
          <h2>When listeners are available</h2>
          <p>Listeners are in India and go online when they choose, so availability follows Indian time and is usually best in the evenings (IST). There is no appointment: you can see who is online right now, or use Talk now to reach whoever is free.</p>
        </section>

        <section className="sec">
          <h2>Privacy and safety</h2>
          <ul>
            <li>A listener sees only the name you choose — never your phone number.</li>
            <li>Voice calls are not recorded. Text messages are stored securely; only authorised LeanOn administrators can open them, for example to review a reported or safety-flagged session.</li>
            <li>If words linked to self-harm appear in a chat, LeanOn shows crisis helplines, alerts the listener and flags the session for review.</li>
            <li>You can report a listener from any session; every report is reviewed by a person. LeanOn does not sell your data.</li>
          </ul>
          <p>More: <a href="/trust">Trust &amp; safety</a> · <a href="/privacy">Privacy policy</a> · <a href="/terms">Terms</a></p>
        </section>

        <div className="crisis">
          <strong>In a crisis or thinking about self-harm?</strong> Please call <a href="tel:14416">Tele-MANAS: 14416</a> (free, all India, 24/7, Government of India) or <a href="tel:08046110007">NIMHANS: 080-46110007</a>, or your local emergency number. LeanOn listeners are not crisis counsellors.
        </div>

        <section className="sec faq">
          <h2>Questions</h2>
          {FAQ.map(f => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>

        <div className="cta">
          <h2>Talk to someone</h2>
          <p>First {FREE_SESSION_MINS} minutes free. Private, one to one, by text or voice.</p>
          <a href="/talk"><span className="btn">Talk now</span></a>
          <a href="/browse"><span className="btn alt">See listeners</span></a>
        </div>
      </main>
    </>
  )
}
