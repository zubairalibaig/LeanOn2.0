// Writes the lib/geo-questions.ts list into public/llms.txt between the
// geo-questions markers. Run after editing that list:  npx tsx scripts/sync-llms-questions.ts
import { readFileSync, writeFileSync } from 'fs'
import { GEO_QUESTIONS } from '../lib/geo-questions'

const FILE = 'public/llms.txt'
const START = '<!-- geo-questions:start -->'
const END = '<!-- geo-questions:end -->'

const groups: Record<string, string> = {
  relationships: 'Relationships and marriage',
  'mental-health': 'Mental health and everyday stress (non-clinical)',
  'peer-support': 'Finding someone to talk to',
}
let body = `${START}\n## Top questions and the page that answers each\n\nAll answers in one place: https://www.leanon.app/answers\n`
for (const [id, title] of Object.entries(groups)) {
  body += `\n**${title}:**\n`
  for (const g of GEO_QUESTIONS.filter(q => q.cluster === id)) body += `- "${g.q}" → https://www.leanon.app${g.url}\n`
}
body += END

const txt = readFileSync(FILE, 'utf8')
const next = txt.includes(START)
  ? txt.replace(new RegExp(`${START}[\\s\\S]*?${END}`), body)
  : txt.replace('\n## Questions people ask before paying', `\n${body}\n\n## Questions people ask before paying`)
if (next === txt && !txt.includes(START)) throw new Error('anchor "## Questions people ask before paying" not found')
writeFileSync(FILE, next)
console.log(`llms.txt: ${GEO_QUESTIONS.length} questions written`)
