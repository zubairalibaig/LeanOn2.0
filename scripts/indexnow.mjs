// Tell Bing (which powers ChatGPT search and Copilot) and other IndexNow
// engines that pages changed, so they re-crawl within hours instead of weeks.
// Run after a deploy that changes public pages:
//   node scripts/indexnow.mjs            → every URL in the live sitemaps + noindexed/redirected ones
//   node scripts/indexnow.mjs /pricing /faq   → just these paths
// The key file public/558002b252dcc5aa4ac94d43c11834b7.txt must be live on www.leanon.app.
import { readFileSync } from 'fs'
import { execSync } from 'child_process'

const HOST = 'www.leanon.app'
const KEY = '558002b252dcc5aa4ac94d43c11834b7'
const SITEMAPS = ['sitemap.xml', 'country-sitemap.xml', 'nri-sitemap.xml']

async function sitemapUrls() {
  const urls = new Set()
  for (const sm of SITEMAPS) {
    const res = await fetch(`https://${HOST}/${sm}`)
    if (!res.ok) { console.warn(`skip ${sm}: HTTP ${res.status}`); continue }
    for (const m of (await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1])
  }
  // Pages we removed from search or merged: re-crawling is how engines learn that.
  const noindex = readFileSync(new URL('../lib/seo-noindex.ts', import.meta.url), 'utf8').match(/'\/[a-z0-9\/-]+'/g) ?? []
  for (const p of noindex) urls.add(`https://${HOST}${p.slice(1, -1)}`)
  const redirects = JSON.parse(readFileSync(new URL('../lib/seo-redirects.json', import.meta.url), 'utf8'))
  for (const p of Object.keys(redirects)) urls.add(`https://${HOST}${p}`)
  return [...urls]
}

// --changed: only public pages touched by the last commit (used after each
// production deploy). app/<route>/page.tsx → /<route>; llms*.txt as-is.
// Dynamic routes, app screens and recruitment-only areas are skipped.
function changedPaths() {
  const out = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' }).split('\n').filter(Boolean)
  const PRIVATE = /^\/(api|admin|dashboard|wallet|history|profile|sessions?|auth|notifications|suspended|alerts-setup)(\/|$)/
  const paths = new Set()
  for (const f of out) {
    if (/^public\/llms(-full)?\.txt$/.test(f)) { paths.add('/' + f.slice('public/'.length)); continue }
    // Blog posts are data files; their URL comes from the slug inside.
    const post = f.match(/^app\/blog\/posts\/[^/]+\.ts$/)
    if (post) {
      try { const slug = readFileSync(f, 'utf8').match(/slug:\s*['"]([a-z0-9-]+)['"]/)?.[1]; if (slug) paths.add(`/blog/${slug}`) } catch { /* deleted file */ }
      continue
    }
    const m = f.match(/^app\/(.*)page\.tsx$/)
    if (!m) continue
    const route = '/' + m[1].replace(/\/$/, '')
    if (route.includes('[') || PRIVATE.test(route)) continue
    paths.add(route === '/' ? '/' : route)
  }
  return [...paths]
}

const args = process.argv.slice(2)
let urlList
if (args[0] === '--changed') {
  const paths = changedPaths()
  if (paths.length === 0) { console.log('IndexNow: no public page changed in this deploy — nothing to submit.'); process.exit(0) }
  urlList = paths.map(p => `https://${HOST}${p}`)
} else {
  urlList = args.length ? args.map(p => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`) : await sitemapUrls()
}
console.log(`IndexNow: submitting ${urlList.length} URL(s)`)

// The key file must be live for IndexNow to verify the site (403
// SiteVerificationNotCompleted otherwise). Show what it returns.
try {
  const k = await fetch(`https://${HOST}/${KEY}.txt`, { redirect: 'manual' })
  console.log(`Key file https://${HOST}/${KEY}.txt → HTTP ${k.status}${k.status === 200 ? ((await k.text()).trim() === KEY ? ' (content OK)' : ' (WRONG content)') : ''}`)
} catch (e) { console.log(`Key file check failed: ${e}`) }

let failed = false

for (let i = 0; i < urlList.length; i += 10000) {
  const batch = urlList.slice(i, i + 10000)
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch }),
  })
  // 200/202 = accepted. 403 = key file not reachable yet (deploy first). 422 = URL/host mismatch.
  const ok = res.status === 200 || res.status === 202
  console.log(`IndexNow: ${batch.length} URLs → HTTP ${res.status} ${ok ? 'accepted' : await res.text()}`)
  if (!ok) failed = true
}
// A refused submission must show as a failed run, not a green tick.
if (failed) process.exit(1)
