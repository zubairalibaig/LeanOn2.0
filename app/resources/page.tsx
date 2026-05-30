import type { Metadata } from 'next'
import { RESOURCES } from '@/lib/resources-data'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mental Health Resources & Guides | LeanOn',
  description: 'Free mental health resources, guides, and articles for India. Active listening, loneliness, burnout, peer support, anxiety, grief and more. From LeanOn — India\'s peer support platform.',
  alternates: { canonical: 'https://www.leanon.app/resources' },
}

const S = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
  background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
a{text-decoration:none;color:inherit;}
nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
.nav-logo{height:56px;}
.btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
.page{max-width:780px;margin:0 auto;padding:16px 24px 80px;}
.back{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:700;color:var(--gray);margin-bottom:28px;}
.hero{margin-bottom:36px;}
.tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;}
h1{font-size:clamp(24px,5vw,36px);font-weight:900;line-height:1.15;margin-bottom:14px;}
.lead{font-size:16px;color:var(--gray);line-height:1.75;font-weight:500;}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
@media(max-width:520px){.grid{grid-template-columns:1fr;}}
.card{background:white;border:1.5px solid var(--border);border-radius:18px;padding:18px;transition:all .2s;display:block;}
.card:hover{border-color:var(--teal);box-shadow:0 4px 20px rgba(15,72,103,.08);transform:translateY(-2px);}
.card-title{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:8px;line-height:1.35;}
.card-desc{font-size:13px;color:var(--gray);line-height:1.55;font-weight:500;}
.cta-box{background:var(--navy);border-radius:20px;padding:28px;text-align:center;margin-top:36px;}
.cta-box h2{font-size:18px;font-weight:900;color:white;margin-bottom:10px;}
.cta-box p{font-size:13px;color:rgba(201,231,244,.8);margin-bottom:20px;font-weight:500;}
.btn{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;}
`

export default function ResourcesIndex() {
  return (
    <>
      <style>{S}</style>
      <nav>
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Get support</button></a>
      </nav>
      <div className="page">
        <a href="/" className="back">← Home</a>
        <div className="hero">
          <p className="tag">Resources</p>
          <h1>Mental Health Resources &amp; Guides</h1>
          <p className="lead">Free articles, guides, and resources on loneliness, burnout, anxiety, peer support, and emotional wellbeing — written for India.</p>
        </div>

        <div className="grid">
          {RESOURCES.map(r => (
            <a key={r.slug} href={`/resources/${r.slug}`} className="card">
              <div className="card-title">{r.title}</div>
              <div className="card-desc">{r.description}</div>
            </a>
          ))}
        </div>

        <div className="cta-box">
          <h2>Sometimes reading isn&apos;t enough</h2>
          <p>Talk to a real peer listener — someone who has been through what you&apos;re reading about. First 5 minutes free.</p>
          <a href="/browse"><button className="btn">Find a listener →</button></a>
        </div>
      </div>
    </>
  )
}
