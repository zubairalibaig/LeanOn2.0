import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — LeanOn',
  description: 'LeanOn terms of use. Read our terms governing use of the peer support platform, sessions, wallet, payments, and listener services.',
  alternates: { canonical: 'https://www.leanon.app/terms' },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--orange:#FF9933;--gray:#6B8FA8;--border:#DDE8F0;--cream:#FFFBF5;}
  body{font-family:'Nunito',sans-serif;background:var(--cream);color:var(--navy);-webkit-font-smoothing:antialiased;}
  a{color:var(--orange);}
  .page{max-width:640px;margin:0 auto;padding:24px 20px 80px;}
  .back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:28px;text-decoration:none;}
  h1{font-size:28px;font-weight:900;color:var(--navy);margin-bottom:8px;}
  .updated{font-size:13px;color:var(--gray);font-weight:500;margin-bottom:32px;}
  h2{font-size:17px;font-weight:800;color:var(--navy);margin:28px 0 10px;}
  p{font-size:14px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:10px;}
  ul{padding-left:20px;margin-bottom:10px;}
  li{font-size:14px;color:#3A5A6E;line-height:1.75;font-weight:500;margin-bottom:4px;}
  .warning-box{background:#FFF0F0;border:1.5px solid #FFCDD2;border-radius:16px;padding:16px 18px;margin:24px 0;}
  .warning-box p{margin:0;font-size:13px;color:#7A2020;font-weight:700;line-height:1.6;}
`

export default function TermsPage() {
  return (
    <>
      <style>{S}</style>
      <div className="page">
        <a href="/" className="back">← Back to LeanOn</a>
        <h1>Terms of Use</h1>
        <p className="updated">Last updated: September 16, 2026</p>

        <div className="warning-box">
          <p>⚠️ LeanOn is a peer support platform only. It is NOT a mental health service, therapy platform, or medical service. Listeners are not licensed therapists, psychologists, or counselors unless an individual profile explicitly states a relevant qualification. If you are in crisis or immediate danger, contact an appropriate local emergency or crisis service where you are.</p>
        </div>

        <h2>1. What LeanOn is</h2>
        <p>LeanOn is a marketplace connecting people who seek emotional peer support ("Seekers") with people who offer it based on lived experience ("Listeners"). Sessions are peer conversations, not clinical consultations.</p>

        <h2>2. Who can use LeanOn</h2>
        <ul>
          <li>You must be 18 years or older to use LeanOn</li>
          <li>You must be located in a country or territory where LeanOn is currently offered</li>
          <li>You must provide a valid mobile number and any other information required to create an account</li>
          <li>Country availability, payment methods, and other product features may vary by market</li>
        </ul>
        <p>Current public country experiences include India, the United States, United Kingdom, Canada, Australia, United Arab Emirates, Oman, Kuwait, Singapore and Malaysia. LeanOn may change supported markets from time to time.</p>

        <h2>3. Prohibited conduct</h2>
        <ul>
          <li>Sexual, suggestive, or romantic communication</li>
          <li>Sharing personal contact information (phone, email, social media)</li>
          <li>Arranging off-platform meetings or communications</li>
          <li>Impersonating a licensed mental health professional</li>
          <li>Harassment, abuse, or threatening behaviour</li>
          <li>Using the platform for commercial solicitation</li>
        </ul>

        <h2>4. Listener responsibilities</h2>
        <p>Listeners confirm they are sharing personal lived experience only and are not providing clinical, medical, or professional advice unless a specific service and qualification is explicitly presented and permitted by LeanOn. Listeners must not misrepresent their qualifications.</p>

        <h2>5. Payments and refunds</h2>
        <ul>
          <li>Wallet top-ups and payments are processed using the payment methods made available to you at checkout</li>
          <li>Unused wallet balance is refundable subject to the current refund process and applicable payment rules</li>
          <li>Completed sessions are generally non-refundable unless a safety, billing, or platform error requires an adjustment</li>
          <li>Any platform fee and applicable taxes are shown before a paid session is started</li>
          <li>From 24 September 2026, LeanOn applies a 40% service fee on listener earnings (previously 15%), deducted at session settlement; sessions completed before that date are unaffected. The listener's net settlement is shown in the listener dashboard</li>
          <li>Prices and currency presentation may vary by market and are determined by the checkout experience</li>
        </ul>

        <h2>6. Content moderation</h2>
        <p>LeanOn uses AI-assisted moderation and human safety processes. Sessions that violate these terms may be terminated without refund. Repeat violations may result in permanent account suspension.</p>

        <h2>7. Limitation of liability</h2>
        <p>LeanOn is not liable for the advice or content shared by listeners. We do not guarantee outcomes from peer support sessions. We are a platform, not a healthcare provider.</p>

        <h2>8. Governing law</h2>
        <p>These terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in Bengaluru, Karnataka, subject to applicable law.</p>

        <h2>9. Contact</h2>
        <p>For legal or compliance queries, please use the <a href="/contact">contact form</a> on our website and select &ldquo;Legal&rdquo; as the topic.</p>
      </div>
    </>
  )
}
