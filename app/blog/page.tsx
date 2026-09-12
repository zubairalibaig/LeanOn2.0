import type { Metadata } from 'next'
import { post as lonelinessPost } from './posts/loneliness-in-india'
import { post as burnoutPost } from './posts/burnout-recovery-india'
import { post as peerSupportPost } from './posts/how-peer-support-works'
import { post as leanOnMeanPost } from './posts/what-does-lean-on-mean'
import { post as lonelinessAtNightPost } from './posts/loneliness-at-night'
import { post as emotionalBurnoutPost } from './posts/emotional-burnout'
import { post as anonymousSupportPost } from './posts/anonymous-support-india'
import { post as peerVsTherapyPost } from './posts/peer-support-vs-therapy-india'
import { post as jointFamilyPost } from './posts/joint-family-emotional-support'
import { post as lonelinessJointFamilyPost } from './posts/loneliness-in-joint-family'
import { post as founderBurnoutPost } from './posts/startup-founder-burnout'
import { post as affordableTherapyPost } from './posts/affordable-alternatives-therapy-india'
import { post as mensMentalHealthPost } from './posts/mens-mental-health-india'
import { post as womenLonelinessPost } from './posts/women-loneliness-india'
import { post as empathyPost } from './posts/empathy-in-peer-support'
import { post as whatIsPeerSupportPost } from './posts/what-is-peer-support-india'
import { post as onlineEmotionalSupportGuidePost } from './posts/online-emotional-support-india-guide'
import { post as overthinkingNightPost } from './posts/how-to-stop-overthinking-at-night'
import { post as noOneToTalkToPost } from './posts/no-one-to-talk-to'
import { post as therapyCostPost } from './posts/therapy-cost-india'
import { post as astrologerTalkPost } from './posts/why-people-call-astrologers-to-talk'
import { post as someoneToLeanOnPost } from './posts/what-it-means-to-have-someone-to-lean-on'
import { post as chatgptVsHumanPost } from './posts/chatgpt-vs-human-listener'
import { post as earnListeningPost } from './posts/earn-money-listening-online-india'
import { post as feelEmptyPost } from './posts/feel-empty-inside-india'
import { post as feelFailurePost } from './posts/feel-like-a-failure-india'
import { post as am2LonelinessPost } from './posts/2am-loneliness-india'
import { post as hateJobPost } from './posts/hate-job-cant-quit-india'
import { post as chatgptMentalHealthPost } from './posts/is-chatgpt-good-for-mental-health'
import { post as gettingItOffChestPost } from './posts/getting-it-off-your-chest'
import { post as badMorningResetPost } from './posts/bad-morning-reset-india'
import { post as ventingStrangerPost } from './posts/venting-to-a-stranger-india'
import { post as emotionalResetWorkdayPost } from './posts/emotional-reset-workday-india'
import { post as cantAffordTherapyPost } from './posts/cant-afford-therapy-india'
import { post as familyPressurePost } from './posts/family-pressure-mental-health-india'
import { post as lonelinessNewCityPost } from './posts/loneliness-new-city-india'
import { post as signsNeedTalkPost } from './posts/signs-you-need-to-talk-to-someone'
import { post as marriedButLonelyPost } from './posts/married-but-lonely-india'
import { post as workingMothersPost } from './posts/working-mothers-mental-health-india'
import { post as momBurnoutSignsPost } from './posts/mom-burnout-signs-india'
import { post as menLonelinessPost } from './posts/men-loneliness-india'
import { post as fearOfMarriagePost } from './posts/fear-of-marriage-india'
import { post as adultingLonelinessPost } from './posts/adulting-loneliness-india'
import { post as astrotalkExpensivePost } from './posts/astrotalk-expensive-alternative'
import { post as talkRealPersonPost } from './posts/talk-to-real-person-not-astrologer'
import { post as bestPeerAppsPost } from './posts/best-peer-support-apps-india-2026'
import { post as peerCounsellingGuidePost } from './posts/peer-counselling-india-guide'
import { post as mentalHealthCostPost } from './posts/mental-health-support-cost-india'
import { post as morningFightPost } from './posts/morning-fight-with-partner-india'
import { post as ventingRelationshipPost } from './posts/venting-relationship-india'
import { post as talkWorkdayPost } from './posts/talk-to-someone-workday-india'

export const dynamic = 'force-static'

// All posts — sorted newest first so Google and AI crawlers see fresh content at top
const allPosts = [
  bestPeerAppsPost, peerCounsellingGuidePost, mentalHealthCostPost,
  astrotalkExpensivePost, talkRealPersonPost,
  menLonelinessPost, fearOfMarriagePost, adultingLonelinessPost,
  marriedButLonelyPost, workingMothersPost, momBurnoutSignsPost,
  chatgptMentalHealthPost, cantAffordTherapyPost, familyPressurePost, lonelinessNewCityPost,
  signsNeedTalkPost, gettingItOffChestPost, badMorningResetPost, ventingStrangerPost,
  emotionalResetWorkdayPost, hateJobPost, am2LonelinessPost, feelFailurePost, feelEmptyPost,
  earnListeningPost, chatgptVsHumanPost, someoneToLeanOnPost, astrologerTalkPost,
  therapyCostPost, noOneToTalkToPost, overthinkingNightPost, onlineEmotionalSupportGuidePost,
  whatIsPeerSupportPost, empathyPost, womenLonelinessPost, mensMentalHealthPost,
  affordableTherapyPost, founderBurnoutPost, lonelinessJointFamilyPost, jointFamilyPost,
  peerVsTherapyPost, anonymousSupportPost, emotionalBurnoutPost, lonelinessAtNightPost,
  leanOnMeanPost, peerSupportPost, burnoutPost, lonelinessPost,
  morningFightPost, ventingRelationshipPost, talkWorkdayPost,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const metadata: Metadata = {
  title: 'Mental Health Blog India — Loneliness, Anxiety, Family Pressure & Peer Support | LeanOn',
  description: 'Honest, practical articles about emotional health in India — loneliness, burnout, family pressure, therapy costs, career anxiety, venting, and peer support. Written for real Indian lives.',
  keywords: [
    'mental health blog India', 'emotional wellness India', 'peer support blog India',
    'loneliness India blog', 'therapy alternative India', 'family pressure India',
    'career anxiety India', 'burnout India', 'anxiety blog India', 'leanon blog',
    'emotional support India articles', 'mental health articles India',
  ],
  alternates: { canonical: 'https://www.leanon.app/blog', languages: { 'en-IN': 'https://www.leanon.app/blog' } },
  openGraph: {
    title: 'Mental Health Blog India — Loneliness, Anxiety, Family Pressure & Peer Support | LeanOn',
    description: 'Honest, practical articles about emotional health in India.',
    url: 'https://www.leanon.app/blog',
    siteName: 'LeanOn',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LeanOn Blog — Mental Health India' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.leanon.app/blog' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'LeanOn Mental Health Blog — India',
  description: 'Articles on emotional wellness, peer support, loneliness, anxiety, and mental health in India.',
  url: 'https://www.leanon.app/blog',
  numberOfItems: allPosts.length,
  itemListElement: allPosts.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://www.leanon.app/blog/${p.slug}`,
    name: p.title,
  })),
}

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
  .hero{margin-bottom:40px;}
  .hero-tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(26px,5vw,40px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:14px;}
  h1 em{color:var(--orange);font-style:normal;}
  .hero-lead{font-size:16px;color:var(--gray);line-height:1.78;font-weight:500;max-width:600px;}
  .section-label{font-size:11px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:16px;margin-top:40px;}
  .section-label:first-of-type{margin-top:0;}
  .posts-grid{display:grid;gap:20px;margin-bottom:12px;}
  .post-card{background:white;border-radius:20px;padding:24px 28px;border:1.5px solid var(--border);transition:border-color 0.2s,transform 0.15s;display:block;}
  .post-card:hover{border-color:var(--teal);transform:translateY(-2px);}
  .post-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;}
  .post-date{font-size:12px;font-weight:600;color:var(--gray);}
  .post-read-time{font-size:12px;font-weight:600;color:var(--teal);background:var(--light);padding:3px 10px;border-radius:50px;}
  .post-title{font-size:18px;font-weight:800;color:var(--navy);line-height:1.35;margin-bottom:8px;}
  .post-desc{font-size:14px;color:#3A6070;line-height:1.68;font-weight:500;margin-bottom:12px;}
  .post-topics{display:flex;gap:6px;flex-wrap:wrap;}
  .post-topic{font-size:11px;font-weight:700;color:var(--teal);background:rgba(26,143,160,0.1);padding:3px 8px;border-radius:50px;}
  .post-cta{display:inline-flex;align-items:center;gap:4px;margin-top:12px;font-size:13px;font-weight:800;color:var(--teal);}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-top:48px;}
  .cta-card h2{font-size:22px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:14px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:24px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:12px 24px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;padding:12px 24px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .count{font-size:13px;font-weight:600;color:var(--gray);margin-bottom:20px;}
`

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/browse"><button className="btn-nav">Find a listener</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Blog</span>
        </nav>

        <div className="hero">
          <p className="hero-tag">Mental Health · India · {allPosts.length} Articles</p>
          <h1>Honest Writing About <em>What You Are Going Through</em></h1>
          <p className="hero-lead">Practical articles on loneliness, burnout, anxiety, family pressure, career stress, peer support, and the real cost of emotional health in India — written for the way life in India actually is.</p>
        </div>

        <p className="count">{allPosts.length} articles — newest first</p>

        <div className="posts-grid">
          {allPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="post-meta">
                <span className="post-date">{formatDate(post.date)}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
              <div className="post-title">{post.title}</div>
              <p className="post-desc">{post.description}</p>
              <div className="post-topics">
                {post.topics.slice(0, 3).map((t: string) => (
                  <span key={t} className="post-topic">{t}</span>
                ))}
              </div>
              <span className="post-cta">Read article →</span>
            </a>
          ))}
        </div>

        <div className="cta-card">
          <h2>Reading is the start. Talking is the shift.</h2>
          <p>Browse peer listeners who understand what you are going through — trained, anonymous, available 24/7 from ₹99.</p>
          <div className="cta-btns">
            <a href="/browse"><button className="btn-primary">Browse Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
