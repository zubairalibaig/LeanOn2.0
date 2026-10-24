// Read-only live audit of www.leanon.app (run from GitHub Actions, which can
// reach the site). Prints one JSON report. No writes, no logins.
//   node scripts/live-audit.mjs
import { readFileSync } from 'fs'

const BASE = 'https://www.leanon.app'
const UAS = {
  browser: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36',
  googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  bingbot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'oai-searchbot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot',
  gptbot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot',
  'chatgpt-user': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot',
  perplexitybot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot',
}
const KEY_PAGES = ['/', '/talk', '/browse', '/pricing', '/answers', '/trust', '/faq', '/terms', '/privacy', '/is-leanon-worth-it',
  '/for-women', '/marriage-problems-india', '/relationship-support-real-person', '/relationship-emotional-support-guide-india',
  '/support/loneliness', '/peer-support', '/delete-account', '/llms.txt', '/become-a-peer-supporter', '/become-listener']
const geoUrls = [...new Set([...readFileSync('lib/geo-questions.ts', 'utf8').matchAll(/url: '([^']+)'/g)].map(m => m[1]))]

const pick = (re, s) => { const m = s.match(re); return m ? m[1].replace(/\s+/g, ' ').trim() : null }
async function get(path, ua = 'browser') {
  const t0 = Date.now()
  try {
    const r = await fetch(BASE + path, { headers: { 'user-agent': UAS[ua], accept: 'text/html,*/*' }, redirect: 'manual' })
    const body = r.status === 200 ? await r.text() : ''
    return { status: r.status, ms: Date.now() - t0, location: r.headers.get('location'), xrobots: r.headers.get('x-robots-tag'), body }
  } catch (e) { return { status: 0, ms: Date.now() - t0, error: String(e), body: '' } }
}
function inspect(path, r) {
  const b = r.body
  const text = b.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  const lines247 = (text.match(/[^.]{0,80}24\s*\/\s*7[^.]{0,40}/gi) || []).filter(x => !/tele-?manas|14416|nimhans|helpline|government/i.test(x))
  return {
    path, status: r.status, ms: r.ms, location: r.location || undefined, xrobots: r.xrobots || undefined,
    title: pick(/<title[^>]*>([^<]*)<\/title>/i, b),
    metaDescription: pick(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i, b),
    canonical: pick(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i, b),
    metaRobots: pick(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/i, b),
    h1: pick(/<h1[^>]*>([\s\S]*?)<\/h1>/i, b)?.replace(/<[^>]+>/g, '').slice(0, 120) ?? null,
    h1Count: (b.match(/<h1[\s>]/gi) || []).length,
    words: text.split(' ').length,
    jsonLdTypes: [...b.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => { try { const j = JSON.parse(m[1]); return j['@type'] || (j['@graph'] ? 'graph' : '?') } catch { return 'INVALID' } }),
    quickAnswer: b.includes('aria-label="Quick answer"'),
    viewport: /<meta[^>]+name="viewport"/i.test(b),
    claims: {
      listener247: lines247.slice(0, 3),
      completelyAnonymous: (text.match(/(completely|fully|100%) anonymous/gi) || []).length,
      otherHelplines: (text.match(/\b(112|9152987821|1860[- ]?2662[- ]?345|iCall|Vandrevala)\b/gi) || []).length,
      trained: (text.match(/trained (peer )?listeners?|listeners are trained/gi) || []).length,
      earnings: (text.match(/earn (money|₹)|side income|per hour/gi) || []).length,
    },
  }
}

const report = { at: new Date().toISOString() }
const robots = await get('/robots.txt')
report.robots = robots.status === 200 ? robots.body : `HTTP ${robots.status}`
report.sitemaps = {}
for (const sm of ['sitemap.xml', 'country-sitemap.xml', 'nri-sitemap.xml']) {
  const r = await get('/' + sm)
  const locs = [...(r.body || '').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
  report.sitemaps[sm] = { status: r.status, urls: locs.length }
  if (sm === 'sitemap.xml') report.sitemapHas = Object.fromEntries([...KEY_PAGES, ...geoUrls].map(p => [p, locs.includes(BASE + (p === '/' ? '' : p)) || locs.includes(BASE + p)]))
}
report.pages = []
for (const p of [...new Set([...KEY_PAGES, ...geoUrls])]) report.pages.push(inspect(p, await get(p)))
report.botAccess = {}
for (const p of ['/', '/for-women', '/answers', '/marriage-problems-india']) {
  report.botAccess[p] = {}
  for (const ua of Object.keys(UAS)) { const r = await get(p, ua); report.botAccess[p][ua] = r.status }
}
// Listener supply snapshot (public endpoint used by /browse). No ids or names printed.
try {
  const r = await fetch(BASE + '/api/listeners', { headers: { 'user-agent': UAS.browser } })
  const j = await r.json()
  const arr = Array.isArray(j) ? j : (j.listeners || j.data || [])
  const langs = {}
  for (const l of arr) for (const g of (l.languages_spoken || [])) if (l.is_available) langs[g] = (langs[g] || 0) + 1
  report.listeners = { status: r.status, total: arr.length, onlineNow: arr.filter(l => l.is_available).length,
    inSessionNow: arr.filter(l => l.is_in_session).length, onlineByLanguage: langs,
    phoneFieldExposed: arr.some(l => l.users && 'phone' in l.users), at: new Date().toISOString(),
    // Text rate distribution (₹/min) of listed listeners — for honest "from" prices in copy.
    rates: (() => { const r = arr.map(l => Number(l.rate_per_min)).filter(n => n > 0).sort((a, b) => a - b)
      const q = f => r.length ? r[Math.min(r.length - 1, Math.floor(f * (r.length - 1)))] : null
      return { n: r.length, min: r[0] ?? null, p25: q(0.25), median: q(0.5), p75: q(0.75), max: r[r.length - 1] ?? null,
        atOrBelow5: r.filter(x => x <= 5).length, atOrBelow10: r.filter(x => x <= 10).length,
        onlineMin: Math.min(...arr.filter(l => l.is_available).map(l => Number(l.rate_per_min)).filter(n => n > 0)) } })() }
} catch (e) { report.listeners = { error: String(e) } }
// Mobile performance (PageSpeed Insights public API; may be rate-limited without a key).
report.pagespeed = {}
for (const p of ['/', '/talk', '/for-women']) {
  try {
    const r = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?strategy=mobile&category=performance&category=seo&category=accessibility&url=${encodeURIComponent(BASE + p)}`)
    const j = await r.json()
    const c = j.lighthouseResult?.categories || {}, a = j.lighthouseResult?.audits || {}
    report.pagespeed[p] = j.error ? { error: j.error.message } : {
      performance: c.performance?.score, seo: c.seo?.score, accessibility: c.accessibility?.score,
      lcp: a['largest-contentful-paint']?.displayValue, cls: a['cumulative-layout-shift']?.displayValue, tbt: a['total-blocking-time']?.displayValue,
      field: j.loadingExperience?.overall_category ?? 'no field data' }
  } catch (e) { report.pagespeed[p] = { error: String(e) } }
}
// Brand guard: the home page is what ChatGPT cites for "I feel lonely… real human
// listeners?" (docs/ai-visibility/WINNING_ANSWERS.md). Fail the run if it changes.
const home = report.pages.find(p => p.path === '/') || {}
const guard = {
  homeOk: home.status === 200,
  titleCited: (home.title || '').includes('Talk to a Listener in India'),
  descriptionFacts: ['real human peer listeners', 'one-to-one', 'free 5-minute introduction'].every(f => (home.metaDescription || '').includes(f)),
  crawlersGetHome: ['googlebot', 'bingbot', 'oai-searchbot', 'chatgpt-user'].every(ua => report.botAccess['/']?.[ua] === 200),
  talkOk: report.pages.find(p => p.path === '/talk')?.status === 200,
  llmsOk: report.pages.find(p => p.path === '/llms.txt')?.status === 200,
}
report.brandGuard = guard
console.log('LIVE_AUDIT_JSON_START')
console.log(JSON.stringify(report))
console.log('LIVE_AUDIT_JSON_END')
const failed = Object.entries(guard).filter(([, ok]) => !ok).map(([k]) => k)
if (failed.length) { console.error(`BRAND GUARD FAILED: ${failed.join(', ')} — see docs/ai-visibility/WINNING_ANSWERS.md`); process.exit(1) }
console.log('Brand guard OK:', Object.keys(guard).join(', '))
