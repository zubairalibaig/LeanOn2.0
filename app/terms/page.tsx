import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Use — LeanOn' }

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
        <p className="updated">Last updated: May 2025</p>

        <div className="warning-box">
          <p>⚠️ LeanOn is a peer support platform only. It is NOT a mental health service, therapy platform, or medical service. Listeners are not licensed therapists, psychologists, or counselors. If you are in crisis, call iCall: 9152987821.</p>
        </div>

        <h2>1. What LeanOn is</h2>
        <p>LeanOn is a marketplace connecting people who seek emotional peer support ("Seekers") with people who offer it based on lived experience ("Listeners"). Sessions are peer conversations, not clinical consultations.</p>

        <h2>2. Who can use LeanOn</h2>
        <ul>
          <li>You must be 18 years or older to use LeanOn</li>
          <li>You must be located in India</li>
          <li>You must provide a valid Indian mobile number</li>
        </ul>

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
        <p>Listeners confirm they are sharing personal lived experience only and are not providing clinical, medical, or professional advice. Listeners must not claim to be therapists, counselors, or mental health professionals.</p>

        <h2>5. Payments and refunds</h2>
        <ul>
          <li>Wallet top-ups are processed via Razorpay</li>
          <li>Unused wallet balance is fully refundable on request</li>
          <li>Completed sessions are non-refundable unless a safety violation occurred</li>
          <li>LeanOn charges a 10% platform fee per session, shown transparently</li>
        </ul>

        <h2>6. Content moderation</h2>
        <p>LeanOn uses AI-assisted moderation. Sessions that violate these terms may be terminated without refund. Repeat violations will result in permanent account suspension.</p>

        <h2>7. Limitation of liability</h2>
        <p>LeanOn is not liable for the advice or content shared by listeners. We do not guarantee outcomes from peer support sessions. We are a platform, not a healthcare provider.</p>

        <h2>8. Governing law</h2>
        <p>These terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in Bengaluru, Karnataka.</p>

        <h2>9. Contact</h2>
        <p>For legal or compliance queries, please use the <a href="/contact">contact form</a> on our website and select &ldquo;Legal&rdquo; as the topic.</p>
      </div>
    </>
  )
}
