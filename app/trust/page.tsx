import type { Metadata } from 'next'
import { SERVICE_DESCRIPTION } from '@/lib/service-facts'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Trust & Safety | LeanOn — Anonymous Peer Support India',
  description: 'How LeanOn keeps you safe: privacy, how listeners are screened, safety checks during sessions, reporting, and crisis helplines. Peer support, not therapy.',
  alternates: { canonical: 'https://www.leanon.app/trust' },
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:700px;margin:0 auto;}
.nav-logo{height:56px;}
.btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
.page{max-width:640px;margin:0 auto;padding:16px 24px 80px;}
.back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:32px;}
.hero{margin-bottom:40px;}
.tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;}
h1{font-size:clamp(26px,5vw,38px);font-weight:900;line-height:1.15;margin-bottom:14px;}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;}
.section{background:white;border:1.5px solid var(--border);border-radius:22px;padding:26px;margin-bottom:20px;}
.section h2{font-size:19px;font-weight:800;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
.section p{font-size:14px;color:#3A6070;line-height:1.75;margin-bottom:10px;}
.section p:last-child{margin-bottom:0;}
.section ul{margin:10px 0 10px 18px;}
.section ul li{font-size:14px;color:#3A6070;line-height:1.7;margin-bottom:4px;}
.crisis-box{background:#FFF0F0;border:2px solid #FFCDD2;border-radius:16px;padding:18px;margin-bottom:20px;}
.crisis-box h3{font-size:15px;font-weight:800;color:#7A2020;margin-bottom:8px;}
.crisis-box p{font-size:13px;color:#7A2020;line-height:1.65;font-weight:600;}
.cta{background:var(--navy);border-radius:22px;padding:32px;text-align:center;margin-top:24px;}
.cta h2{font-size:20px;font-weight:900;color:white;margin-bottom:10px;}
.cta p{font-size:14px;color:rgba(201,231,244,.8);margin-bottom:24px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 32px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(255,153,51,.35);}
`

const trustSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.leanon.app/trust#webpage',
  name: 'LeanOn Trust & Safety',
  url: 'https://www.leanon.app/trust',
  description: metadata.description,
  isPartOf: { '@id': 'https://www.leanon.app/#website' },
  about: [
    { '@type': 'Thing', name: 'Peer support safety' },
    { '@type': 'Thing', name: 'Listener verification' },
    { '@type': 'Thing', name: 'Privacy' },
    { '@type': 'Thing', name: 'Crisis escalation' }
  ],
  mainEntity: { '@id': 'https://www.leanon.app/#organization' }
}

export default function TrustPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trustSchema) }} />
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Back to home</a>
        <div className="hero">
          <p className="tag">Trust &amp; Safety</p>
          <h1>Your safety is our top priority</h1>
          <p className="lead">LeanOn is built on trust. Every decision we make — from how you sign up to how we vet listeners — is designed to keep you safe, private, and in control.</p>
        </div>

        <div className="section">
          <h2>LeanOn in one paragraph</h2>
          <p>{SERVICE_DESCRIPTION}</p>
        </div>

        <div className="section">
          <h2>🔒 Your privacy</h2>
          <p>LeanOn was designed for privacy from the ground up. Here is exactly what we collect and what we don&apos;t:</p>
          <ul>
            <li>Sign up with just your mobile number — no full name, no email required</li>
            <li>A listener sees only the name you choose — a first name or a nickname is fine</li>
            <li>No profile photos required for seekers</li>
            <li>Text messages are stored securely so a session can be reviewed if it is reported or flagged for safety. Only authorised LeanOn administrators can open them</li>
            <li>Voice calls are not recorded</li>
            <li>We never share your conversations with anyone outside LeanOn</li>
          </ul>
          <p>You are in control of your identity on LeanOn. We built text-first specifically so that people in joint households can use the platform privately.</p>
        </div>

        <div className="section">
          <h2>🛡️ Listener vetting</h2>
          <p>Every listener is screened and approved by LeanOn before they can accept a single session:</p>
          <ul>
            <li>A written application about who they are, what they have lived through and why they want to listen</li>
            <li>A screening quiz on how to respond in difficult conversations</li>
            <li>A live verification selfie (camera only), checked by LeanOn and never shown publicly</li>
            <li>Manual review of every application — many are asked to fix something or are turned down</li>
            <li>Agreement to LeanOn&apos;s code of conduct: confidentiality, no judgement, and no medical or clinical advice</li>
            <li>Profile photos are reviewed before they go live, and reported listeners can be suspended</li>
          </ul>
          <p>Listeners are peer supporters, not therapists, and LeanOn does not claim otherwise. They are screened — not clinically trained — for empathy, reliability and lived experience.</p>
        </div>

        <div className="section">
          <h2>🧭 Safety checks during a session</h2>
          <ul>
            <li>If words linked to self-harm or suicide appear in a chat, LeanOn immediately shows crisis helplines (NIMHANS, Tele-MANAS)</li>
            <li>The listener is told to take extra care, and the session is flagged for the LeanOn team to review</li>
            <li>Helpline numbers are shown in every session, not only when something is flagged</li>
            <li>Anything you report is reviewed by a person at LeanOn</li>
          </ul>
        </div>

        <div className="section">
          <h2>📊 Data protection</h2>
          <ul>
            <li>All data is stored securely with Supabase (SOC 2 certified infrastructure)</li>
            <li>Database access is controlled by Row Level Security — users can only access their own data</li>
            <li>Payment data is never stored on our servers — handled entirely by Razorpay (PCI DSS compliant)</li>
            <li>We do not sell your data to third parties, ever</li>
            <li>You can request deletion of your account and data at any time via contact@leanon.app</li>
          </ul>
        </div>

        <div className="section">
          <h2>🚨 Reporting</h2>
          <p>If you feel unsafe in a session at any time:</p>
          <ul>
            <li>Use &ldquo;Report an issue with this session&rdquo; when the session ends, or write to us through the <a href="/contact">contact form</a></li>
            <li>End the session at any time — you pay only for the minutes used, and nothing if it lasted under a minute</li>
            <li>You never have to talk to the same listener again — you choose who you book</li>
            <li>A person at LeanOn reviews every report</li>
          </ul>
        </div>

        <div className="crisis-box">
          <h3>🆘 In a mental health crisis?</h3>
          <p>LeanOn peer listeners are not crisis counsellors. If you are in immediate danger or having thoughts of self-harm:<br/><br/>
          Call <strong><a href="tel:08046110007">NIMHANS: 080-46110007</a></strong> (Bengaluru, 24/7)<br/>
          Call <strong><a href="tel:14416">Tele-MANAS: 14416</a></strong> (free · all India · 24/7 · Govt of India)<br/><br/>
          These are free, confidential, and available around the clock.
          </p>
        </div>

        <div className="cta">
          <h2>Ready to start safely?</h2>
          <p>Sign up with just your phone number. No appointment needed.</p>
          <a href="/talk?src=seo"><button className="btn">Start now →</button></a>
        </div>
      </div>
    </>
  )
}
