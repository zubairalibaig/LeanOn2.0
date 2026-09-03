import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Emotional Support in Ahmedabad — Peer Listeners | LeanOn',
  description: 'Connect with peer listeners in Ahmedabad, India. Available 24/7. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
  alternates: { canonical: 'https://www.leanon.app/ahmedabad', languages: { 'en-IN': 'https://www.leanon.app/ahmedabad' } },
  keywords: 'peer support Ahmedabad, emotional support Ahmedabad, loneliness Ahmedabad, business family pressure Ahmedabad, talk to someone Ahmedabad, leanon Ahmedabad',
  openGraph: {
    title: 'Emotional Support in Ahmedabad — Peer Listeners | LeanOn',
    description: 'Connect with peer listeners in Ahmedabad, India. Available 24/7. Talk anonymously about anxiety, loneliness, stress, and more on LeanOn.',
    url: 'https://www.leanon.app/ahmedabad',
    siteName: 'LeanOn',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Ahmedabad\'s emotional pressures different from other Indian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ahmedabad sits at the heart of Gujarat\'s business and entrepreneurial culture, where family identity is often inseparable from the family business. From a young age, many people are groomed to join, inherit, or continue a family enterprise — regardless of their personal ambitions or interests. This is layered with a tight-knit, socially visible community where financial success and business standing are constantly observed and compared. The result is a city where emotional struggles are often hidden behind a facade of prosperity, and admitting difficulty can feel like it threatens the family\'s reputation and business relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Ahmedabad\'s tight-knit community affect emotional openness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ahmedabad\'s Gujarati community is close, interconnected, and highly observant — everyone seems to know everyone, and news travels fast. The constant awareness of "what will the community say" shapes major decisions, from career choices to marriage to how a business setback is handled, and it silences struggles long before they can be spoken about openly. This is especially difficult for anyone whose life looks different from what their community expects. Peer support offers a place to be heard without any social consequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What role does joint family living play in emotional stress in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many families in Ahmedabad live and operate financially as a single unit — incomes, savings, property, and business decisions are shared and interdependent across generations. This closeness brings real support, but it also means very little is truly private. A personal setback, a difficult marriage, or a wish to leave the family business does not just affect one person; it is felt as a risk to the whole household\'s financial stability. Many people describe holding back their real feelings simply to protect the family\'s collective peace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is it hard to prioritise emotional wellbeing over business success in Ahmedabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a culture that measures a family\'s worth by its business success and financial security, emotional needs are frequently treated as secondary — even indulgent. Many people in Ahmedabad grow up learning that a bad day is acceptable but a bad quarter is not, and that discussing stress, doubt, or sadness can look like ingratitude for what the family has built. This creates a quiet emotional cost that accumulates over years. An empathetic, judgment-free conversation can be the first time someone is allowed to separate their worth from the business\'s performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the specific challenges for women in Ahmedabad\'s business families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Women in Ahmedabad\'s business-family households often carry a dual expectation: support the family enterprise and social standing while also managing the household, and do both without visibly struggling. Personal ambition — a career, a business idea, a different city — is frequently weighed against what is "appropriate" for the family\'s image within the community. Because the community is small and interconnected, this pressure is constant and hard to escape. LeanOn gives women a genuinely anonymous, empathetic space to talk about what they actually want, without it reaching anyone they know.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.leanon.app' },
    { '@type': 'ListItem', position: 2, name: 'Ahmedabad', item: 'https://www.leanon.app/ahmedabad' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LeanOn',
  description: 'Peer emotional support platform',
  url: 'https://www.leanon.app/ahmedabad',
  areaServed: {
    '@type': 'City',
    name: 'Ahmedabad',
    addressCountry: 'IN',
  },
  serviceType: 'Peer Emotional Support',
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
  .page{max-width:780px;margin:0 auto;padding:16px 24px 100px;}
  .breadcrumb{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:600;color:var(--gray);margin-bottom:32px;flex-wrap:wrap;}
  .breadcrumb span{color:var(--border);}
  .breadcrumb a:hover{color:var(--teal);}
  .hero{margin-bottom:48px;}
  .tag{font-size:12px;font-weight:800;color:var(--teal);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
  h1{font-size:clamp(28px,6vw,44px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:16px;}
  h1 em{color:var(--orange);font-style:normal;}
  .lead{font-size:17px;color:var(--gray);line-height:1.78;font-weight:500;max-width:640px;}
  .section{background:white;border-radius:24px;padding:32px;margin-bottom:24px;border:1.5px solid var(--border);}
  .section h2{font-size:22px;font-weight:800;color:var(--navy);margin-bottom:16px;}
  .section h3{font-size:17px;font-weight:800;color:var(--navy);margin-bottom:8px;margin-top:20px;}
  .section h3:first-of-type{margin-top:0;}
  .section p{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:14px;}
  .section p:last-child{margin-bottom:0;}
  .section ul{padding-left:20px;margin-bottom:14px;}
  .section ul li{font-size:15px;color:#3A6070;line-height:1.80;margin-bottom:6px;}
  .listeners-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;margin-bottom:24px;}
  .listener-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:20px;text-align:center;}
  .listener-avatar{width:60px;height:60px;border-radius:50%;background:var(--light);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 12px;}
  .listener-name{font-size:15px;font-weight:800;color:var(--navy);margin-bottom:4px;}
  .listener-tag{font-size:12px;font-weight:700;color:var(--teal);background:var(--light);padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
  .listener-bio{font-size:13px;color:var(--gray);line-height:1.6;font-weight:500;}
  .faq-item{border-bottom:1.5px solid var(--border);padding:20px 0;}
  .faq-item:first-of-type{padding-top:0;}
  .faq-item:last-of-type{border-bottom:none;padding-bottom:0;}
  .faq-q{font-size:16px;font-weight:800;color:var(--navy);margin-bottom:10px;}
  .faq-a{font-size:14px;color:var(--gray);line-height:1.75;font-weight:500;}
  .cta-card{background:var(--navy);border-radius:24px;padding:40px 32px;text-align:center;margin-bottom:24px;}
  .cta-card h2{font-size:24px;font-weight:900;color:white;margin-bottom:12px;}
  .cta-card p{font-size:15px;color:rgba(201,231,244,0.85);font-weight:500;margin-bottom:28px;line-height:1.7;}
  .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--orange);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(255,153,51,0.35);}
  .btn-secondary{background:rgba(255,255,255,0.12);color:white;font-family:'Nunito',sans-serif;font-weight:800;font-size:15px;padding:14px 28px;border-radius:50px;border:1.5px solid rgba(255,255,255,0.3);cursor:pointer;}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:8px;}
  .related-link{background:var(--light);border:1.5px solid var(--border);border-radius:16px;padding:14px 16px;font-size:14px;font-weight:700;color:var(--navy);transition:border-color 0.2s;}
  .related-link:hover{border-color:var(--teal);color:var(--teal);}
  .disclaimer{background:var(--light);border:1.5px solid var(--border);border-radius:20px;padding:24px;margin-bottom:24px;}
  .disclaimer p{font-size:13px;color:var(--gray);line-height:1.7;font-weight:500;margin-bottom:8px;}
  .disclaimer p:last-child{margin-bottom:0;}
  .disclaimer strong{color:var(--navy);}
`

export default function AhmedabadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <style>{S}</style>

      <nav className="nav">
        <a href="/"><img src="/logo.png" alt="LeanOn" className="nav-logo" /></a>
        <a href="/auth"><button className="btn-nav">Open app</button></a>
      </nav>

      <div className="page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span>›</span>
          <span style={{color:'var(--navy)'}}>Ahmedabad</span>
        </nav>

        {/* Hero */}
        <div className="hero">
          <p className="tag">Peer Support · Ahmedabad</p>
          <h1>Peer Support in Ahmedabad — Someone to Lean On in <em>the City of Business</em></h1>
          <p className="lead">Ahmedabad is a city built on business — generations of entrepreneurship, family enterprises, and a culture that measures success in balance sheets and reputation. Alongside this drive sits a tightly-knit community where everyone seems to know everyone, and personal struggles rarely stay private. LeanOn connects you with peer listeners who understand the specific weight of carrying a family's business legacy and social standing, and who offer an empathetic space to talk without any of it reaching your community.</p>
        </div>

        {/* Ahmedabad's pressures */}
        <div className="section">
          <h2>Ahmedabad's Emotional Pressures</h2>
          <p>Every city carries its own emotional undercurrent. Ahmedabad's is shaped by decades of entrepreneurial ambition, joint family structures, and a community where financial and social standing are constantly, quietly measured against one another.</p>

          <h3>The Weight of Family Business Legacy</h3>
          <p>In many Ahmedabad households, the family business is not a career choice — it is an inheritance and an obligation. Children are often groomed from a young age to eventually take over, regardless of what they actually want to do with their lives. Even those who join willingly carry the pressure of not being the generation that lost what was built. Wanting something different — a different profession, a different city, a different pace of life — can feel like a betrayal of family legacy, and that conflict is rarely spoken about out loud.</p>

          <h3>Gujarat's Entrepreneurial Culture and the Comparison Trap</h3>
          <p>Gujarat's business culture is one of the most entrepreneurial in the country, and Ahmedabad sits at its centre. This creates real opportunity, but it also creates relentless comparison — whose business is growing faster, whose son has expanded the family firm, whose daughter has married into a wealthier household. Financial success becomes a constant, semi-public scoreboard. Many people internalise this comparison so deeply that their sense of self-worth becomes inseparable from business performance, leaving little room for anything that looks like failure or doubt.</p>

          <h3>Living Under a Community's Gaze</h3>
          <p>Ahmedabad's community networks are close and interconnected — through caste associations, business circles, neighbourhoods, and extended family. This closeness offers real support, but it also means personal struggles are hard to keep private. A divorce, a business loss, a mental health struggle, or even a career change tends to become community knowledge quickly, often filtered through gossip before the person involved has had a chance to process it themselves. The fear of being talked about keeps many people from ever admitting they are struggling in the first place.</p>

          <h3>The Loneliness of Choosing a Different Path</h3>
          <p>Choosing a path different from what family or community expects — a different career, a different city, marrying outside expectations, or simply wanting a quieter, less business-driven life — can be deeply isolating in Ahmedabad. The people who make this choice often lose the easy camaraderie of shared expectations without gaining an equivalent support system of their own. This is a specific, under-discussed kind of loneliness, and it deserves an empathetic ear rather than more advice about what they "should" be doing instead.</p>
        </div>

        {/* Men's mental health */}
        <div className="section">
          <h2>Men's Mental Health in Ahmedabad</h2>
          <p>In Ahmedabad's business-family culture, men are expected to be capable providers and confident business leaders, often from a very young age. Success is measured not just personally but as a reflection of the entire family's standing in the community.</p>

          <h3>The Expectation to Be a Successful Provider</h3>
          <p>From early adulthood, men in Ahmedabad's business families are expected to grow the family enterprise, provide financially for a joint household, and make decisions with confidence — even when they are unsure. Business setbacks, debt, or a slow year are rarely discussed openly because doing so can look like weak leadership. This constant performance of competence leaves little space to admit fear, doubt, or exhaustion, even to the people closest to them.</p>

          <h3>The Isolation of Being "The Strong One"</h3>
          <p>Many men describe being the person everyone else — parents, siblings, spouse, employees — leans on, with no one they can lean on in return. Being "the strong one" in a business family often means carrying financial stress, family conflict, and personal doubt entirely alone, because there is no clear space in that role for vulnerability. Over time, this suppression shows up as irritability, sleep problems, and quiet withdrawal from the people who need them most.</p>

          <h3>A Private Space to Be Honest</h3>
          <p>LeanOn gives men in Ahmedabad a genuinely private, judgment-free place to say what they are actually carrying — without it reaching their family, their business partners, or their community. Several of our listeners have themselves navigated the pressure of leading a family enterprise while quietly struggling, and they bring real empathy to that specific experience.</p>
        </div>

        {/* Women's loneliness */}
        <div className="section">
          <h2>Women's Loneliness in Ahmedabad</h2>
          <p>For women in Ahmedabad, loneliness often comes from carrying two full sets of expectations at once — supporting the family's business and social standing, and managing a household — while their own ambitions stay unspoken.</p>

          <h3>Business-Family Expectations and Personal Ambition</h3>
          <p>Many women in Ahmedabad's business families are expected to contribute to the family enterprise's image and stability, whether through hosting, managing relationships, or direct involvement in the business, while their own career ideas or personal ambitions are treated as secondary. Wanting more — a business of one's own, a career outside the family, a different city — is often quietly discouraged in the name of what is "appropriate" for the family.</p>

          <h3>Social Visibility Within a Tight Community</h3>
          <p>Because Ahmedabad's community networks are so interconnected, women's choices — what they wear, who they meet, how ambitious they appear, when they marry — are closely observed and frequently discussed. This constant visibility creates a kind of self-censorship that builds up over years, making it genuinely difficult to know what you actually want once you've spent so long managing what the community will think.</p>

          <h3>Professional Women in the Family Business</h3>
          <p>A growing number of women in Ahmedabad work within their family's business, often bringing real skill and ambition to it. Yet many describe still being treated as a daughter or daughter-in-law first and a professional second, with their ideas taken less seriously than a brother's or husband's. Balancing genuine involvement in the business with maintaining a sense of individual identity is exhausting, and an empathetic peer listener who has faced something similar can make that balancing act feel far less lonely.</p>
        </div>

        {/* Listener cards */}
        <h2 style={{fontSize:'20px',fontWeight:800,color:'var(--navy)',marginBottom:'16px'}}>Peer Listeners Who Understand Ahmedabad</h2>
        <div className="listeners-grid">
          {[
            {
              emoji: '🌱',
              name: 'Kunal',
              tag: 'Family Business & Identity',
              bio: 'Walked away from my family\'s three-generation business to build something of my own. I understand the guilt — and the freedom — that comes with choosing a different path.'
            },
            {
              emoji: '🤝',
              name: 'Foram',
              tag: 'Community & Choices',
              bio: 'Spent years weighing my own choices against what the community would say, before learning I could honour my family without losing myself. Here to talk it through with you.'
            },
            {
              emoji: '💼',
              name: 'Jigar',
              tag: 'Financial Pressure & Family',
              bio: 'Grew up watching business decisions and finances shape every conversation at home. Learned to separate my worth from the balance sheet, and want to help others do the same.'
            },
          ].map((l, i) => (
            <div key={i} className="listener-card">
              <div className="listener-avatar">{l.emoji}</div>
              <div className="listener-name">{l.name}</div>
              <div className="listener-tag">{l.tag}</div>
              <p className="listener-bio">{l.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-card">
          <h2>Ready to Talk to Someone Who Gets Ahmedabad?</h2>
          <p>Browse peer listeners who understand the city's business pressures — family legacy, financial expectations, community visibility. Available 24/7, completely private.</p>
          <div className="cta-btns">
            <a href="/browse?city=ahmedabad"><button className="btn-primary">Browse Ahmedabad Listeners</button></a>
            <a href="/auth"><button className="btn-secondary">Join LeanOn</button></a>
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <div className="faq-q">What makes Ahmedabad's emotional pressures different from other Indian cities?</div>
            <div className="faq-a">Ahmedabad sits at the heart of Gujarat's business and entrepreneurial culture, where family identity is often inseparable from the family business. Many people are groomed from a young age to join or continue a family enterprise regardless of personal ambition, layered with a tight-knit, socially visible community where financial success is constantly compared. Struggles often stay hidden behind a facade of prosperity.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">How does Ahmedabad's tight-knit community affect emotional openness?</div>
            <div className="faq-a">Ahmedabad's Gujarati community is close, interconnected, and highly observant. The constant awareness of "what will the community say" shapes major decisions and silences struggles long before they can be spoken about openly — especially for anyone whose life looks different from what their community expects.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What role does joint family living play in emotional stress in Ahmedabad?</div>
            <div className="faq-a">Many families in Ahmedabad live and operate financially as a single unit, with incomes, property, and business decisions shared and interdependent across generations. A personal setback or a wish to leave the family business is felt as a risk to the whole household's stability, so people often hold back their real feelings to protect the family's collective peace.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Why is it hard to prioritise emotional wellbeing over business success in Ahmedabad?</div>
            <div className="faq-a">In a culture that measures a family's worth by its business success and financial security, emotional needs are frequently treated as secondary. Discussing stress, doubt, or sadness can look like ingratitude for what the family has built. An empathetic, judgment-free conversation can be the first time someone separates their worth from the business's performance.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">What are the specific challenges for women in Ahmedabad's business families?</div>
            <div className="faq-a">Women in Ahmedabad's business-family households often carry a dual expectation: support the family enterprise and social standing while managing the household, without visibly struggling. Personal ambition is frequently weighed against what is "appropriate" for the family's image, and because the community is small and interconnected, this pressure is constant and hard to escape.</div>
          </div>
        </div>

        {/* Related pages */}
        <div className="section">
          <h2>Related Support Topics</h2>
          <p>Explore more peer support resources on LeanOn:</p>
          <div className="related">
            <a href="/support/career-confusion" className="related-link">Career Confusion</a>
            <a href="/support/relationship-stress" className="related-link">Relationship Stress</a>
            <a href="/support/founder-burnout" className="related-link">Founder Burnout</a>
            <a href="/browse" className="related-link">Browse All Listeners</a>
            <a href="/jaipur" className="related-link">Peer Support Jaipur</a>
            <a href="/mumbai" className="related-link">Peer Support Mumbai</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>LeanOn is peer support, not a crisis service.</strong> If you are in immediate distress or having thoughts of self-harm, please reach out to a professional helpline immediately.</p>
          <p><strong>NIMHANS:</strong> <a href="tel:08046110007">080-46110007</a> &nbsp;|&nbsp; <strong>Tele-MANAS (Govt. of India):</strong> <a href="tel:14416">14416</a> (free · 24/7)</p>
          <p>LeanOn listeners are trained peers, not licensed therapists or medical professionals. For clinical mental health support, please consult a qualified mental health professional.</p>
        </div>
      </div>
    </>
  )
}
