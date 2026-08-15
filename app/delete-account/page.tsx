import type { Metadata } from 'next'

// Google Play requires a publicly reachable URL — no login, no app install —
// explaining how to delete an account and what happens to the data. It is a
// mandatory field in the Play Console Data safety form. The in-app control
// (Profile → Delete account) satisfies the other half of that requirement.

export const metadata: Metadata = {
  title: 'Delete Your Account | LeanOn',
  description: 'How to delete your LeanOn account and what happens to your data when you do.',
  alternates: { canonical: 'https://www.leanon.app/delete-account' },
  robots: { index: true, follow: true },
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;color:#0F4867;background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{background:transparent;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:52px;width:auto;}
  .wrap{max-width:760px;margin:0 auto;padding:32px 24px 80px;}
  .breadcrumb{font-size:13px;color:#5A7A8A;margin-bottom:24px;}
  .breadcrumb a{color:#1A8FA0;font-weight:600;}
  .breadcrumb span{margin:0 6px;opacity:0.5;}
  h1{font-size:clamp(26px,5vw,38px);font-weight:900;color:#0F4867;line-height:1.15;margin-bottom:10px;}
  .subtitle{font-size:16px;color:#5A7A8A;margin-bottom:36px;line-height:1.6;}
  h2{font-size:19px;font-weight:800;color:#0F4867;margin:32px 0 12px;}
  p{font-size:15px;color:#5A7A8A;line-height:1.75;font-weight:500;margin-bottom:12px;}
  ol,ul{margin:0 0 12px 20px;}
  li{font-size:15px;color:#5A7A8A;line-height:1.75;font-weight:500;margin-bottom:8px;}
  .card{background:#FFFFFF;border:1.5px solid #D5EEF6;border-radius:16px;padding:22px 24px;margin-bottom:16px;}
  .card strong{color:#0F4867;font-weight:800;}
  .btn{background:#FF9933;color:white;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;display:inline-block;margin-top:8px;}
  .muted{font-size:13.5px;color:#7A94A3;line-height:1.7;}
`

export default function DeleteAccountPage() {
  return (
    <>
      <style>{S}</style>
      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/contact" style={{ color: '#1A8FA0', fontWeight: 700, fontSize: 14 }}>Contact us →</a>
      </nav>

      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a><span>›</span><span>Delete account</span>
        </div>

        <h1>Delete your account</h1>
        <p className="subtitle">
          You can delete your LeanOn account at any time, from the app or the website.
          You do not need to contact us first.
        </p>

        <h2>From the app or website</h2>
        <div className="card">
          <ol>
            <li>Sign in to LeanOn.</li>
            <li>Open <strong>Profile</strong> from the bottom navigation bar.</li>
            <li>Tap <strong>Delete account</strong>.</li>
            <li>Confirm. You will be signed out on every device immediately.</li>
          </ol>
          <a href="/profile"><button className="btn">Go to my profile</button></a>
        </div>

        <h2>What happens when you delete</h2>
        <div className="card">
          <ul>
            <li>Your account is deactivated and you are signed out everywhere.</li>
            <li>Your profile stops appearing anywhere on LeanOn. If you were a listener, your listing is removed and you go offline.</li>
            <li>You can no longer be found, contacted, or booked by anyone on the platform.</li>
          </ul>
        </div>

        <h2>What we keep, and why</h2>
        <div className="card">
          <p>
            We retain a limited record of completed sessions and wallet transactions.
            We need these to meet financial and tax obligations, to resolve refund or
            payout disputes, and to act on safety reports. These records are not
            visible to other users.
          </p>
          <p>
            If you want your remaining data erased rather than deactivated, email us
            from the phone number or address on your account and we will process the
            request. See our <a href="/privacy" style={{ color: '#1A8FA0', fontWeight: 700 }}>Privacy Policy</a> for
            the full detail.
          </p>
          <a href="/contact"><button className="btn">Request full erasure</button></a>
        </div>

        <h2>Wallet balance</h2>
        <div className="card">
          <p>
            Unused wallet balance is refundable. Request your refund from the wallet
            page <strong>before</strong> deleting your account — once the account is
            deactivated you will not be able to sign in to raise the request.
          </p>
        </div>

        <p className="muted">
          If you are in crisis, please contact NIMHANS at <a href="tel:08046110007" style={{ color: '#1A8FA0', fontWeight: 700 }}>080-46110007</a> or
          Tele-MANAS at <a href="tel:14416" style={{ color: '#1A8FA0', fontWeight: 700 }}>14416</a> — free, 24/7.
        </p>
      </div>
    </>
  )
}
