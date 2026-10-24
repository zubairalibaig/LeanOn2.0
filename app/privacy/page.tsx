import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — LeanOn',
  description: 'LeanOn privacy policy. Learn how we protect your data, session confidentiality, and your rights as a LeanOn user.',
  alternates: { canonical: 'https://www.leanon.app/privacy' },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--gray:#6B8FA8;--border:#DDE8F0;--cream:#FFFBF5;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{color:var(--orange);text-decoration:none;}
  .page{max-width:640px;margin:0 auto;padding:24px 20px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:28px;}
  h1{font-size:28px;font-weight:900;color:var(--navy);margin-bottom:8px;}
  .updated{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:32px;}
  h2{font-size:17px;font-weight:800;color:var(--navy);margin:28px 0 10px;}
  p{font-size:14px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:10px;}
  ul{padding-left:20px;margin-bottom:10px;}
  li{font-size:14px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:4px;}
  .highlight-box{background:#F0F7FF;border:1.5px solid #B8D4F0;border-radius:16px;padding:16px 18px;margin:24px 0;}
  .highlight-box p{margin:0;font-size:13px;color:#1E3D5C;font-weight:600;}
`

export default function PrivacyPage() {
  return (
    <>
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← Back to LeanOn</a>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: 24 October 2026</p>

        <div className="highlight-box">
          <p>LeanOn is a peer support platform. We take your privacy seriously — especially given the sensitive nature of the conversations on our platform.</p>
        </div>

        <h2>1. What we collect</h2>
        <ul>
          <li>Your phone number (for authentication via OTP)</li>
          <li>Your first name (optional, for personalisation)</li>
          <li>Session details: type, duration, rating</li>
          <li>Text chat messages — stored securely so a session can be reviewed if it is reported or flagged for safety. Only authorised LeanOn administrators can open them</li>
          <li>Wallet transaction history</li>
          <li>Device type and basic usage analytics (Google Analytics and Vercel Analytics). We never send chat content, names or phone numbers to analytics</li>
        </ul>

        <h2>2. What we do NOT collect</h2>
        <ul>
          <li>We do not record voice calls</li>
          <li>We do not share your information with advertisers</li>
          <li>We do not sell your data to any third party</li>
        </ul>

        <h2>3. Safety checks</h2>
        <p>If words linked to self-harm or suicide appear in a chat, LeanOn shows crisis helplines, lets the listener know to take extra care, and flags the session for review by the LeanOn team. Sessions are not analysed by AI. Reported or flagged conversations may be read by authorised LeanOn administrators to keep people safe and handle disputes.</p>
        <p>Messages are also checked automatically (by fixed rules, not AI) for contact details such as phone numbers, email addresses and social media handles, so that no one can be pulled off LeanOn. A message containing an actual contact detail is not delivered; messages that only hint at one are delivered and noted for the LeanOn team to review.</p>

        <h2>4. Data storage and retention</h2>
        <p>Your data is stored on Supabase servers hosted in the Asia South (Mumbai) region. Text messages and session records are kept for safety, dispute handling and accounting, including after an account is deleted — without your contact details (see <a href="/delete-account">what deletion removes</a>). We comply with India&apos;s Digital Personal Data Protection Act (DPDP Act 2023).</p>

        <h2>5. Listener identity verification</h2>
        <p>Listeners give their Aadhaar number and take a live camera selfie for identity checks. Only the last 4 digits of the Aadhaar number and a one-way coded version of it are stored, never the full number. The selfie is kept in private storage that only authorised LeanOn administrators can open — it is never shown to seekers — and it is deleted when the listener&apos;s account is deleted. We do not share this data with third parties.</p>

        <h2 id="delete-account">6. Your rights</h2>
        <ul>
          <li>Request deletion of your account — use the &ldquo;Delete account&rdquo; option inside the app under Profile. If you can&apos;t sign in or no longer have the app, send a deletion request through the <a href="/contact">contact form</a> with the phone number on your account; we remove your personal details within 30 days. Records we must keep for payments and safety (such as transaction history) are retained without your contact details.</li>
          <li>Withdraw consent at any time by deleting your account</li>
        </ul>
        <p>For privacy concerns, use the <a href="/contact">contact form</a> on our website.</p>

        <h2>7. Contact</h2>
        <p>For privacy concerns, please use the <a href="/contact">contact form</a> on our website.</p>
      </div>
    </>
  )
}
