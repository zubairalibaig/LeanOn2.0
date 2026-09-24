// Tell Bing (which powers ChatGPT search and Copilot) and other IndexNow
// engines that pages changed, so they re-crawl within hours instead of weeks.
// Run after a deploy that changes public pages:
//   node scripts/indexnow.mjs            → every URL in the live sitemaps + noindexed/redirected ones
//   node scripts/indexnow.mjs /pricing /faq   → just these paths
// The key file public/558002b252dcc5aa4ac94d43c11834b7.txt must be live on www.leanon.app.
import { readFileSync } from 'fs'

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

const args = process.argv.slice(2)
const urlList = args.length ? args.map(p => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`) : await sitemapUrls()

for (let i = 0; i < urlList.length; i += 10000) {
  const batch = urlList.slice(i, i + 10000)
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch }),
  })
  // 200/202 = accepted. 403 = key file not reachable yet (deploy first). 422 = URL/host mismatch.
  console.log(`IndexNow: ${batch.length} URLs → HTTP ${res.status} ${res.status === 200 || res.status === 202 ? 'accepted' : await res.text()}`)
}
