import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — LeanOn',
  description: 'LeanOn privacy policy. Learn how we protect your data, session confidentiality, and your rights as a LeanOn user.',
  alternates: { canonical: 'https://leanon.app/privacy' },
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
        <p className="updated">Last updated: May 2025</p>

        <div className="highlight-box">
          <p>LeanOn is a peer support platform. We take your privacy seriously — especially given the sensitive nature of the conversations on our platform.</p>
        </div>

        <h2>1. What we collect</h2>
        <ul>
          <li>Your phone number (for authentication via OTP)</li>
          <li>Your first name (optional, for personalisation)</li>
          <li>Session metadata: duration, topic, rating (not session content by default)</li>
          <li>Wallet transaction history</li>
          <li>Device type and basic analytics (no personal tracking)</li>
        </ul>

        <h2>2. What we do NOT collect</h2>
        <ul>
          <li>We do not record or store text chat messages after session completion</li>
          <li>We do not record voice calls</li>
          <li>We do not share your information with advertisers</li>
          <li>We do not sell your data to any third party</li>
        </ul>

        <h2>3. AI moderation</h2>
        <p>LeanOn uses automated AI tools to monitor sessions in real-time for safety purposes — specifically to detect content that violates our community guidelines. This is done to protect all users. Flagged content may be reviewed by our safety team.</p>

        <h2>4. Data storage</h2>
        <p>Your data is stored on Supabase servers hosted in the Asia South (Mumbai) region. We comply with India&apos;s Digital Personal Data Protection Act (DPDP Act 2023).</p>

        <h2>5. Aadhaar data</h2>
        <p>Aadhaar numbers collected from listeners for identity verification are processed via a third-party KYC provider (Surepass) and are never stored in plain text on our servers.</p>

        <h2>6. Your rights</h2>
        <ul>
          <li>Request deletion of your account — use the &ldquo;Delete account&rdquo; option inside the app under Profile</li>
          <li>Withdraw consent at any time by deleting your account</li>
        </ul>
        <p>For privacy concerns, use the <a href="/contact">contact form</a> on our website.</p>

        <h2>7. Contact</h2>
        <p>For privacy concerns, please use the <a href="/contact">contact form</a> on our website.</p>
      </div>
    </>
  )
}
