const BASE = 'https://www.leanon.app'
const URLS = [
  ['india', '2026-09-16'],
  ['usa', '2026-09-16'],
  ['uk', '2026-09-16'],
  ['canada', '2026-09-16'],
  ['australia', '2026-09-16'],
  ['uae', '2026-09-16'],
  ['singapore', '2026-09-16'],
  ['malaysia', '2026-09-16'],
  ['kuwait', '2026-09-16'],
  ['oman', '2026-09-16'],
] as const

export const dynamic = 'force-static'

export function GET() {
  const body = URLS.map(([slug, lastmod]) => `  <url><loc>${BASE}/${slug}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`).join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } })
}
