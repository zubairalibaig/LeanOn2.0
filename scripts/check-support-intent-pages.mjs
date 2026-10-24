/**
 * Source-level contract checks for the 2026-10-24 intent-matching improvements.
 * Run: node scripts/check-support-intent-pages.mjs
 * These checks cannot establish live crawler visibility or service quality.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const text = file => readFileSync(resolve(process.cwd(), file), 'utf8')
const failures = []
const needs = (file, re, why) => {
  if (!re.test(text(file))) failures.push(file + ': missing ' + why)
}
const forbids = (file, re, why) => {
  if (re.test(text(file))) failures.push(file + ': ' + why)
}

const guide = 'app/relationship-emotional-support-guide-india/page.tsx'
for (const domain of ['icallhelpline.org', 'www.vandrevalafoundation.com', 'dghs.mohfw.gov.in', 'www.soulup.in']) {
  needs(guide, new RegExp(domain.replaceAll('.', '\\.'), 'i'), 'independently sourced ' + domain)
}
needs(guide, /This guide is published by LeanOn/, 'commercial comparison disclosure')
needs(guide, /domestic.abuse|specialist domestic-abuse/i, 'safety limits')
needs(guide, /listener must accept|listener accepts/i, 'acceptance caveat')

const relationships = 'app/relationship-advice-online-india/page.tsx'
needs(relationships, /Where can I talk to a real person about relationship problems in India\?/, 'human conversation question')
needs(relationships, /professional psychosocial counselling/, 'professional alternative')
needs(relationships, /one introductory session|introductory session of up to/i, 'trial policy')

const women = 'app/for-women/page.tsx'
needs(women, /No online service can guarantee safety/, 'safety disclosure')
needs(women, /phone verification/, 'account privacy')
needs(women, /specialist domestic-abuse/i, 'abuse care distinction')
forbids(women, /Nobody is told\. Your listener sees/, 'unconditional secrecy claim')

const relationshipStress = 'app/support/relationship-stress/page.tsx'
forbids(relationshipStress, /name:\s*'Kavya'|name:\s*'Rohan'|name:\s*'Divya'/, 'fabricated listener profiles')
forbids(relationshipStress, /Availability any time, including late nights/, 'unverified always-available promise')
needs(relationshipStress, /actual screened peer listeners/, 'real directory link')

const paid = 'app/pay-to-talk-online-india/page.tsx'
needs(paid, /Are there affordable services in India where I can pay for a private conversation with a human listener\?/, 'paid listening FAQ')
needs(paid, /This comparison is published by LeanOn/, 'commercial disclosure')
needs(paid, /₹160/, 'clearly identified price example')

const lonely = 'app/support/married-but-lonely/page.tsx'
needs(lonely, /A listener must accept|listener accepts|acceptance is not guaranteed/i, 'connection limitation')
needs(lonely, /professional counselling/, 'qualified-care alternative')

const husband = 'app/support/husband-not-supportive-india/page.tsx'
needs(husband, /family.law professional|legal.aid service/i, 'qualified legal referral')
needs(husband, /specialist domestic-abuse/, 'safety referral')
forbids(husband, /wife has legal rights to maintenance under the Hindu Marriage Act/, 'blanket legal claim')

if (failures.length) {
  console.error('Support intent checks failed:\n' + failures.map(s => '- ' + s).join('\n'))
  process.exitCode = 1
} else {
  console.log('Support intent source checks passed for 7 targeted pages.')
}
