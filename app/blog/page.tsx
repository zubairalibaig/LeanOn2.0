import type { Metadata } from 'next'
import { post as lonelinessPost } from './posts/loneliness-in-india'
import { post as burnoutPost } from './posts/burnout-recovery-india'
import { post as peerSupportPost } from './posts/how-peer-support-works'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blog — Emotional Wellness & Peer Support | LeanOn',
  description: 'LeanOn blog: honest articles on loneliness, burnout, grief, anxiety, and peer support in India. Written by people who have been through it.',
  keywords: ['peer support blog India', 'emotional wellness India', 'leanon blog', 'mental health India blog'],
  alternates: { canonical: 'https://leanon.app/blog' },
  openGraph: {
    title: 'Mental Health & Peer Support Blog — LeanOn India',
    description: 'Evidence-based writing about the mental health challenges that matter most to people in India — and what actually helps.',
    url: 'https://leanon.app/blog',
    siteName: 'LeanOn',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://leanon.app/blog' },
  ],
}

const posts = [lonelinessPost, burnoutPost, peerSupportPost]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
}

const S = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0F4867;--teal:#1A8FA0;--orange:#FF9933;--gray:#5A7A8A;--border:#D5EEF6;--light:#F0F8FC;}
  body{font-family:'Nunito',sans-serif;color:var(--navy);-webkit-font-smoothing:antialiased;
    background:radial-gradient(ellipse 90% 55% at 0% 0%,#C2E4F2 0%,#DAEEF8 22%,#FFFFFF 58%) fixed;}
  a{text-decoration:none;color:inherit;}
  .nav{padding:0 28px;height:72px;display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;}
  .nav-logo{height:56px;width:auto;}
  .btn-nav{background:var(--teal);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:10px 22px;border-radius:50px;border:none;cursor:pointer;}
  .page{max-width:820px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .hero-lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:600px;}
  .posts-grid{display:grid;gap:24px;margin-bottom:48px;}
  .post-card{background:white;border-radius:24px;padding:28px 32px;border:1.5px solid var(--border);transition:border-color 0.2s,transform 0.15s;display:block;}
  .post-card:hover{border-color:var(--teal);transform:translateY(-2px);}
  .post-meta{display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;}
  .post-date{font-size:13px;font-weight:600;color:var(--gray);}
  .post-read-time{font-size:13px;font-weight:600;color:var(--teal);background:var(--light);padding:3px 10px;border-radius:50px;}
  .post-title{font-size:20px;font-weight:800;color:var(--navy);line-height:1.35;margin-bottom:10px;}
  .post-desc{font-size:15px;color:#3A6070;line-height:1.70;font-weight:500;margin-bottom:16px;}
  .post-topics{display:flex;gap:8px;flex-wrap:wrap;}
  .post-topic{font-size:12px;font-weight:700;color:var(--teal);background:rgba(26,143,160,0.1);padding:4px 10px;border-radius:50px;}
  .post-cta{display:inline-flex;align-items:center;gap:4px;margin-top:16px;font-size:14px;font-weight:800;color:var(--teal);}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
`

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Blog</span>
        </nav>

        <div className="hero">
          <p className="hero-tag">Mental Health · India</p>
          <h1>Honest Writing About <em>What You Are Going Through</em></h1>
          <p className="hero-lead">Evidence-based articles about loneliness, burnout, grief, anxiety, and peer support — written for the realities of life in India.</p>
        </div>

        <div className="posts-grid">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="post-meta">
                <span className="post-date">{formatDate(post.date)}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
              <div className="post-title">{post.title}</div>
              <p className="post-desc">{post.description}</p>
              <div className="post-topics">
                {post.topics.map((t) => (
                  <span key={t} className="post-topic">{t}</span>
                ))}
              </div>
              <span className="post-cta">Read article →</span>
            </a>
          ))}
        </div>

        <div className="cta-card">
          <h2>Ready to Talk to Someone?</h2>
          <p>Reading helps — but sometimes you need to actually talk. Browse peer listeners who understand what you are going through. First 5 minutes free.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse All Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Create Free Account</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
