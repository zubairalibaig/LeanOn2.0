/**
 * Verify that the broad India peer-support comparison is useful, sourced,
 * commercially disclosed and does not claim to replace specialist services.
 * Run: node scripts/check-peer-support-comparison.mjs
 * Source-level assertions only; build, accessibility, source freshness and
 * product reliability still require separate validation.
 */
import { readFileSync } from 'node:fs'
const page = readFileSync('app/best-peer-support-app-india/page.tsx', 'utf8')
const peer = readFileSync('app/peer-support/page.tsx', 'utf8')
const geo = readFileSync('lib/geo-questions.ts', 'utf8')
const problems = []
const must = (text, pattern, why) => { if (!pattern.test(text)) problems.push('Missing ' + why) }
const forbidden = (text, pattern, why) => { if (pattern.test(text)) problems.push('Forbidden ' + why) }

for (const [name, link] of [
  ['Mental Health Support Foundation', 'https://mhs.foundation/about/'],
  ['Safe Access', 'https://safeaccess.co.in/peer-support-service/'],
  ['HEED', 'https://heedapp.in/faqs/'],
  ['AA India', 'https://www.aagsoindia.org/find-aa-near-you'],
  ['NA', 'https://nabangalore.org/'],
  ['Al-Anon', 'https://al-anonalateenindia.org/alanon-meetings/'],
  ['Mind Over Matter', 'https://mindovermatter.org.in/our-services/'],
]) { if (!page.includes(link)) problems.push('Missing ' + name + ' official source: ' + link) }

must(page, /Publisher disclosure:/, 'publisher conflict-of-interest disclosure')
must(page, /adults 18\+|adults aged 18 and over|adults who want/, 'adult-only scope')
must(page, /listener must accept/, 'listener acceptance limitation')
must(page, /No instant response or 24\/7 coverage is guaranteed/, 'availability limitation')
must(page, /Text messages are stored|PUBLIC_SERVICE_FACTS\.privacy/, 'message retention disclosure')
must(page, /not addiction recovery|not provide addiction-recovery|addiction recovery or an emergency service/i, 'specialist boundaries')
must(page, /FAQPage/, 'visible FAQs schema')
must(page, /What are the best peer support services available to adults in India/, 'exact broad query')
must(peer, /\/best-peer-support-app-india/, 'contextual internal link')
must(geo, /Mental Health Support Foundation, Safe Access India, HEED/, 'balanced question answer')
forbidden(page, /LeanOn is the strongest option|free 5-minute trial for every session|iCall.{0,80}₹200|available 24\/7|fully anonymous/i, 'unsupported superlatives or pricing')
if (problems.length) {
  console.error('Peer comparison checks failed:\n' + problems.map(x => '- ' + x).join('\n'))
  process.exitCode = 1
} else console.log('Peer comparison source assertions passed.')
