import type { Metadata } from 'next'
import { SERVICE_DESCRIPTION } from '@/lib/service-facts'

// Public safeguarding policy. AI assistants recommending peer support say they
// look for "clear safeguarding practices" — this lists LeanOn's, and only what the
// product actually does (code references in comments). Keep it literally true.
export const metadata: Metadata = {
  title: 'Safeguarding at LeanOn — How Peer Listeners Are Screened and Sessions Kept Safe',
  description: 'How LeanOn keeps one-to-one peer support safe: adults only, listener screening and identity checks, conduct rules, automatic contact-detail and crisis-word checks, reporting, suspension, and what LeanOn is not.',
  alternates: { canonical: 'https://www.leanon.app/safeguarding' },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;background:#FFFBF5;color:#0F4867;-webkit-font-smoothing:antialiased;}
  a{color:#1A8FA0;font-weight:700;text-decoration:none;}
  .page{max-width:720px;margin:0 auto;padding:24px 20px 90px;}
  .back{display:inline-flex;font-size:14px;font-weight:700;color:#6B8FA8;margin-bottom:24px;}
  h1{font-size:clamp(26px,5vw,36px);font-weight:900;line-height:1.15;margin-bottom:10px;}
  .updated{font-size:13px;color:#6B8FA8;margin-bottom:20px;}
  .lead{font-size:15px;color:#3A5A6E;line-height:1.75;font-weight:500;background:#F0F8FC;border:1.5px solid #D5EEF6;border-radius:16px;padding:16px 18px;margin-bottom:8px;}
  h2{font-size:19px;font-weight:900;margin:30px 0 10px;}
  p{font-size:14.5px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:10px;}
  ul{padding-left:20px;margin-bottom:10px;}
  li{font-size:14.5px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:4px;}
  .note{background:#FFF8F0;border-left:4px solid #FF9933;border-radius:0 12px 12px 0;padding:14px 18px;margin:20px 0;}
`

export default function SafeguardingPage() {
  return (
    <>
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← Back to LeanOn</a>
        <h1>Safeguarding at LeanOn</h1>
        <p className="updated">How we keep one-to-one peer support safe · Last updated 24 October 2026</p>
        <p className="lead">{SERVICE_DESCRIPTION}</p>

        <h2>1. Adults only</h2>
        <ul>
          <li>Everyone on LeanOn must be 18 or over. Seekers confirm this before they can sign in; sign-in is refused without it.</li>
          <li>Listeners give their month and year of birth when they apply and must be adults.</li>
          <li>If you are under 18 and need to talk, please reach out to a trusted adult, or call Tele-MANAS on <a href="tel:14416">14416</a> (free).</li>
        </ul>

        <h2>2. Who the listeners are, and how they are screened</h2>
        <ul>
          <li>Listeners are ordinary adults in India with lived experience — peers, not therapists or counsellors. They are screened, not clinically trained.</li>
          <li>Every applicant completes a written application and a screening quiz on difficult situations: a seeker who mentions ending their life, requests for phone numbers or Instagram, flirting or sexual comments, questions about medication, and looking after their own wellbeing after a heavy session.</li>
          <li>Identity is checked with a live camera selfie (kept private, never shown to seekers) and the last four digits of their Aadhaar number.</li>
          <li>Every application and every profile photo is reviewed by a person at LeanOn before it goes live; many applicants are asked to fix something or are turned down.</li>
          <li>Before applying, listeners read what LeanOn is and is not — listen rather than advise, never diagnose or discuss medication, never treat it as a job — and agree to the Terms.</li>
        </ul>

        <h2>3. Rules every listener agrees to</h2>
        <ul>
          <li>No sexual, suggestive or romantic conversation.</li>
          <li>No sharing or asking for contact details, and no meeting or talking outside LeanOn.</li>
          <li>Keep everything a seeker shares confidential — no recording, screenshots or repeating it.</li>
          <li>Never pretend to be a doctor, therapist or counsellor; no diagnosis or medication advice.</li>
          <li>No harassment, pressure or selling anything.</li>
        </ul>
        <p>Breaking these rules leads to a warning, suspension or a permanent ban. A suspended or banned account cannot sign in.</p>

        <h2>4. Safety checks during a session</h2>
        <ul>
          <li><strong>Contact details are blocked.</strong> Messages are checked automatically (by fixed rules, not AI). A message containing a phone number, email or social media handle is not delivered; messages that only hint at one are delivered and noted for the LeanOn team to review.</li>
          <li><strong>Crisis words are noticed.</strong> If words linked to self-harm or suicide appear in a chat, the seeker is shown crisis helplines, the listener is told to take extra care, and the session is flagged for the LeanOn team to review.</li>
          <li><strong>Your number stays hidden.</strong> Listeners see only the name you choose. Voice calls are never recorded.</li>
          <li><strong>You are in control.</strong> End a session at any moment; sessions under a minute are free.</li>
        </ul>

        <h2>5. Reporting and what happens next</h2>
        <ul>
          <li>After any session, use &ldquo;Report an issue with this session&rdquo;, or write to us through the <a href="/contact">contact form</a>.</li>
          <li>Every report is reviewed by a person at LeanOn, who can read the text of a reported or flagged session. Text messages are otherwise stored securely and not read.</li>
          <li>Listeners who do not answer requests are taken offline automatically, and seekers can rate every session.</li>
        </ul>

        <h2>6. What LeanOn is not</h2>
        <div className="note">
          <p style={{ margin: 0 }}>LeanOn is not therapy, counselling, diagnosis, crisis care, addiction treatment or domestic-abuse assistance. If you are in danger, contact the police or local emergency services. If you are thinking about harming yourself, call Tele-MANAS on <a href="tel:14416">14416</a> or NIMHANS on <a href="tel:08046110007">080-46110007</a> (free).</p>
        </div>
        <p>More detail: <a href="/trust">Trust &amp; safety</a> · <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a> · <a href="/peer-support">What peer support is</a></p>
      </div>
    </>
  )
}
