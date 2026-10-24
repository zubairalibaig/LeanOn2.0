/**
 * Public-claims regression check for the pages remediated after the
 * 2026-10-24 visibility/trust audit.
 *
 * Run: node scripts/audit-public-claims.mjs
 * This is a source-level safeguard, NOT a substitute for a production crawl,
 * legal review, real listener availability tests, or consent verification.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const source = (path) => readFileSync(resolve(process.cwd(), path), 'utf8');
const failures = [];

function forbid(path, pattern, reason) {
  if (pattern.test(source(path))) failures.push(`${path}: ${reason}`);
}
function requireText(path, pattern, reason) {
  if (!pattern.test(source(path))) failures.push(`${path}: missing ${reason}`);
}

forbid('app/page.tsx', /Real sessions\. Real relief|nm:\s*'Priya M\.'|nm:\s*'Arjun K\.'|nm:\s*'Sneha R\.'/i, 'do not publish unverified personal testimonials');
forbid('app/page.tsx', /Your session begins immediately/i, 'do not promise immediate acceptance');
requireText('app/page.tsx', /A listener must accept|listener accepts/i, 'listener acceptance disclosure');

forbid('app/layout.tsx', /alternates:\s*\{\s*canonical:\s*['"]https:\/\/www\.leanon\.app['"]/, 'do not inherit the homepage canonical across every route');
forbid('app/layout.tsx', /schema\.org\/InStock/, 'listener acceptance is not equivalent to in-stock inventory');

forbid('app/talk/layout.tsx', /who is free right now|who is available now/, 'do not guarantee immediate listener availability');
requireText('app/talk/layout.tsx', /listener accepts|listener acceptance|listener must accept|acceptance is required/i, 'listener acceptance caveat');

forbid('app/support/anonymous-support/page.tsx', /No Permanent Record|No lasting record|Session content is not recorded or retained|conversations are completely private|never disclosed/i, 'must not promise complete anonymity or deletion');
requireText('app/support/anonymous-support/page.tsx', /Text chats are stored|Text messages are stored/i, 'text storage disclosure');
requireText('app/support/anonymous-support/page.tsx', /phone.verification|phone.number verification|phone verification/i, 'phone authentication disclosure');

forbid('app/peer-support-online-india/page.tsx', /name:\s*'Priya'|name:\s*'Arjun'|name:\s*'Meera'/, 'do not invent or imply real listener profiles');
forbid('app/peer-support-online-india/page.tsx', /listeners are available in the middle of the night/i, 'do not promise nighttime availability');

forbid('app/support/mom-burnout-india/page.tsx', /a real LeanOn session, shared anonymously/i, 'unverified testimonial must not be published');
forbid('app/talk-to-real-person-online-india/page.tsx', /trained to care, not just reply|screening and training process/i, 'do not claim unverified listener training');
forbid('app/relationship-counselling-india/page.tsx', /peer support is different: it is immediate, it is anonymous/i, 'do not conflate the service with immediate or anonymous care');

for (const path of [
  'app/support/anonymous-support/page.tsx',
  'app/peer-support-online-india/page.tsx',
  'app/talk/layout.tsx',
]) {
  requireText(path, /peer|listener/i, 'peer-listener description');
}

if (failures.length) {
  console.error('Public-claims audit failed:\n' + failures.map(x => '- ' + x).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Public-claims source checks passed for audited pages.');
}
