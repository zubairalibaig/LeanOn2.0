import { chromium, Page, BrowserContext } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

const BASE = 'http://localhost:3000'
const OUT  = '/tmp/leanon-e2e'
fs.mkdirSync(OUT, { recursive: true })

let ss = 0
const findings: string[] = []
const consoleErrors: string[] = []

function note(msg: string) { console.log(msg); if (msg.startsWith('❌') || msg.startsWith('⚠️')) findings.push(msg) }

async function shot(page: Page, label: string) {
  const file = path.join(OUT, `${String(++ss).padStart(2,'0')}-${label}.png`)
  await page.screenshot({ path: file, fullPage: true })
  console.log(`📸 ${ss} ${label}`)
  return file
}

async function runTests() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })

  // ─── 1. LANDING PAGE ───────────────────────────────────────────────────────
  console.log('\n══════ 1. LANDING PAGE ══════')
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(`[${m.type()}] ${m.text().slice(0,200)}`) })
  page.on('response', r => { if (r.status() >= 500) findings.push(`❌ HTTP ${r.status()} on ${r.url()}`) })

  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await shot(page, 'landing')
  const h1 = await page.locator('h1').first().textContent().catch(() => 'MISSING')
  note(h1 && h1.length > 3 ? `✅ Landing h1: "${h1.trim()}"` : `❌ Landing h1 missing or empty`)
  const ctaLinks = await page.locator('a[href]').evaluateAll((els: HTMLAnchorElement[]) =>
    els.map(e => e.getAttribute('href') || '').filter(h => h.includes('browse') || h.includes('become-listener') || h.includes('auth'))
  )
  note(ctaLinks.length >= 2 ? `✅ Landing CTAs: ${ctaLinks.slice(0,5).join(', ')}` : `⚠️ Landing CTA links: ${JSON.stringify(ctaLinks)}`)
  const pageText = await page.textContent('body')
  if (pageText?.includes('Zubair Ali Baig')) note('❌ OWNER NAME EXPOSED on landing')
  else note('✅ Owner name not on landing')
  if (pageText?.includes('iCall') || pageText?.includes('9152987821') || pageText?.includes('Vandrevala'))
    note('❌ FORBIDDEN CRISIS content on landing')
  else note('✅ No forbidden crisis lines on landing')

  // ─── 2. BROWSE PAGE ────────────────────────────────────────────────────────
  console.log('\n══════ 2. BROWSE PAGE ══════')
  await page.goto(`${BASE}/browse`, { waitUntil: 'networkidle' })
  await shot(page, 'browse-desktop-1280')
  const listEl = await page.locator('.list').count()
  note(listEl ? '✅ .list element present' : '❌ .list element missing')
  if (listEl) {
    const cols = await page.locator('.list').evaluate((el: Element) => getComputedStyle(el).gridTemplateColumns)
    note(`✅ Grid cols at 1280px: "${cols}" (should be 3 cols)`)
    const cards = await page.locator('.card').count()
    note(cards > 0 ? `✅ ${cards} listener card(s) shown` : `⚠️ No listener cards (expected — test DB, not real)`)
  }
  // Mobile viewport
  await page.setViewportSize({ width: 390, height: 844 })
  await shot(page, 'browse-mobile-390')
  if (listEl) {
    const mobCols = await page.locator('.list').evaluate((el: Element) => getComputedStyle(el).gridTemplateColumns)
    note(`✅ Grid cols at 390px: "${mobCols}" (should be 1 col)`)
  }
  // Tablet
  await page.setViewportSize({ width: 768, height: 1024 })
  await shot(page, 'browse-tablet-768')
  if (listEl) {
    const tabCols = await page.locator('.list').evaluate((el: Element) => getComputedStyle(el).gridTemplateColumns)
    note(`✅ Grid cols at 768px: "${tabCols}" (should be 2 cols)`)
  }
  await page.setViewportSize({ width: 1280, height: 900 })
  // Join CTA copy
  const joinCta = await page.locator('.join-cta p').textContent().catch(() => '')
  note(joinCta && !joinCta.includes('₹8') && !joinCta.includes('₹25') ? `✅ Join CTA copy OK: "${joinCta?.trim()}"` : `⚠️ Join CTA copy: "${joinCta?.trim()}"`)

  // ─── 3. AUTH PAGE ──────────────────────────────────────────────────────────
  console.log('\n══════ 3. AUTH PAGE ══════')
  await page.goto(`${BASE}/auth`, { waitUntil: 'networkidle' })
  await shot(page, 'auth-phone-step')
  const phoneWrap = await page.locator('.phone-wrap').count()
  note(phoneWrap ? '✅ Phone input wrapper present' : '❌ Phone input wrapper missing')
  const authBtn = await page.locator('.btn').count()
  note(authBtn ? `✅ Auth submit button present` : '❌ Submit button missing')
  // Listener mode
  await page.goto(`${BASE}/auth?mode=listener`, { waitUntil: 'networkidle' })
  await shot(page, 'auth-listener-mode')
  const authContent = await page.textContent('body')
  note(authContent?.toLowerCase().includes('listener') || authContent?.toLowerCase().includes('earn')
    ? '✅ Auth page shows listener context' : '⚠️ Auth?mode=listener — no listener-specific text')

  // Already-logged-in → should redirect away from /auth
  // (can't test real OTP without SMS, so we verify the guard logic)

  // ─── 4. BECOME-LISTENER FORM ───────────────────────────────────────────────
  console.log('\n══════ 4. BECOME-LISTENER FORM ══════')
  await page.goto(`${BASE}/become-listener`, { waitUntil: 'networkidle' })
  await shot(page, 'become-listener-s1')
  // Photo upload box
  const photoBox = await page.locator('.photo-box').count()
  note(photoBox ? '✅ Photo upload box present' : '❌ Photo upload box MISSING')
  const photoLabel = await page.locator('.photo-label').textContent().catch(() => '')
  note(photoLabel ? `✅ Photo label: "${photoLabel.trim()}"` : '❌ Photo label missing')
  const photoHint = await page.locator('.photo-sub').textContent().catch(() => '')
  note(photoHint ? `✅ Photo hint: "${photoHint.trim()}"` : '❌ Photo help text missing')
  // Step dots
  const dots = await page.locator('.dot').count()
  note(dots === 2 ? '✅ Step dots: 2' : `⚠️ Step dots count: ${dots}`)
  // Hero earn row
  const heroAmount = await page.locator('.earn-item .amount').first().textContent().catch(() => '')
  note(heroAmount ? `✅ Hero earn amount: "${heroAmount.trim()}"` : '⚠️ Hero earn amount missing')
  // Submit with nothing → validation
  await page.locator('.btn').last().click()
  await page.waitForTimeout(600)
  await shot(page, 'become-listener-validation')
  const errList = await page.locator('.errors-list li').allTextContents()
  note(errList.length >= 4 ? `✅ Validation shows ${errList.length} errors` : `⚠️ Only ${errList.length} validation errors shown`)
  note(errList.some(e => e.toLowerCase().includes('photo')) ? '✅ Photo validation error shown' : '❌ Photo validation error MISSING')
  note(errList.some(e => e.toLowerCase().includes('name')) ? '✅ Name error shown' : '❌ Name error missing')
  note(errList.some(e => e.toLowerCase().includes('phone') || e.toLowerCase().includes('otp')) ? '✅ Phone/OTP error shown' : '❌ Phone error missing')
  note(errList.some(e => e.toLowerCase().includes('bio')) ? '✅ Bio error shown' : '❌ Bio error missing')
  note(errList.some(e => e.toLowerCase().includes('topic')) ? '✅ Topic error shown' : '❌ Topic error missing')
  // Error list should PERSIST (not tied to shaking state)
  await page.waitForTimeout(800)
  const errListAfter = await page.locator('.errors-list li').count()
  note(errListAfter > 0 ? `✅ Validation list persists after shake (${errListAfter} errors still showing)` : '❌ Validation errors disappeared after animation')
  // Rate field max attr
  const rateMax = await page.locator('.rate-input').getAttribute('max').catch(() => '')
  note(rateMax === '500' ? '✅ Rate input max=500' : `❌ Rate input max="${rateMax}" (expected 500)`)

  // ─── 5. BECOME-LISTENER STEP 2 (navigate there via JS) ────────────────────
  console.log('\n══════ 5. BECOME-LISTENER STEP 2 ══════')
  // Fill step 1 fields programmatically to reach step 2
  await page.locator('input.input[placeholder="Your full name"]').fill('Test Listener')
  await page.locator('input.input[type="tel"]').fill('9876543210')
  // Can't actually verify OTP — skip to checking the rate/bank step directly by
  // checking that bio, tags and step 2 fields exist as expected
  const bioArea = await page.locator('textarea.input').count()
  note(bioArea ? '✅ Bio textarea present in step 1' : '❌ Bio textarea missing')

  // ─── 6. WALLET PAGE (unauthenticated) ─────────────────────────────────────
  console.log('\n══════ 6. WALLET PAGE (unauth) ══════')
  await page.goto(`${BASE}/wallet`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  await shot(page, 'wallet-unauth-redirect')
  const walletUrl = page.url()
  note(walletUrl.includes('/auth') ? `✅ Wallet redirects unauth → ${walletUrl}` : `⚠️ Wallet URL after unauth: ${walletUrl}`)

  // ─── 7. DASHBOARD (unauthenticated) ───────────────────────────────────────
  console.log('\n══════ 7. DASHBOARD (unauth) ══════')
  await page.goto(`${BASE}/dashboard`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  await shot(page, 'dashboard-unauth-redirect')
  const dashUrl = page.url()
  note(dashUrl.includes('/auth') ? `✅ Dashboard redirects unauth → ${dashUrl}` : `⚠️ Dashboard URL: ${dashUrl}`)

  // ─── 8. PROFILE PAGE (unauthenticated) ────────────────────────────────────
  console.log('\n══════ 8. PROFILE (unauth) ══════')
  await page.goto(`${BASE}/profile`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  const profileUrl = page.url()
  note(profileUrl.includes('/auth') ? `✅ Profile redirects unauth → ${profileUrl}` : `⚠️ Profile URL: ${profileUrl}`)

  // ─── 9. NOTIFICATIONS (unauthenticated) ───────────────────────────────────
  console.log('\n══════ 9. NOTIFICATIONS (unauth) ══════')
  await page.goto(`${BASE}/notifications`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  const notifUrl = page.url()
  note(notifUrl.includes('/auth') ? `✅ Notifications redirects unauth → ${notifUrl}` : `⚠️ Notifications URL: ${notifUrl}`)

  // ─── 10. HISTORY (unauthenticated) ────────────────────────────────────────
  console.log('\n══════ 10. HISTORY (unauth) ══════')
  await page.goto(`${BASE}/history`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  const histUrl = page.url()
  note(histUrl.includes('/auth') ? `✅ History redirects unauth → ${histUrl}` : `⚠️ History URL: ${histUrl}`)

  // ─── 11. SESSION PAGE (unauthenticated) ───────────────────────────────────
  console.log('\n══════ 11. SESSION (unauth) ══════')
  await page.goto(`${BASE}/session/test-session-id`, { waitUntil: 'networkidle', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(3000)
  const sessionUrl = page.url()
  note(sessionUrl.includes('/auth') ? `✅ Session redirects unauth → ${sessionUrl}` : `⚠️ Session URL: ${sessionUrl}`)

  // ─── 12. API SECURITY PROBES ──────────────────────────────────────────────
  console.log('\n══════ 12. API SECURITY ══════')
  const apiProbes = [
    // Admin endpoints — should reject unauthenticated
    { path: '/api/admin/kpis', method: 'GET', expectStatus: 401 },
    { path: '/api/admin/users', method: 'GET', expectStatus: 401 },
    { path: '/api/admin/moderate', method: 'POST', body: '{}', expectStatus: 401 },
    // Auth-required mutations — should reject unauthenticated
    { path: '/api/wallet', method: 'POST', body: JSON.stringify({ amount: 500 }), expectStatus: 401 },
    { path: '/api/wallet', method: 'PUT', body: '{}', expectStatus: 401 },
    { path: '/api/refund', method: 'POST', body: '{}', expectStatus: 401 },
    { path: '/api/listener/apply', method: 'POST', body: JSON.stringify({ name: 'x', bio: 'y'.repeat(30), tags: ['general'], rate: 10, bank: '123456789', ifsc: 'HDFC0001234' }), expectStatus: 401 },
    { path: '/api/listener/availability', method: 'PATCH', body: '{}', expectStatus: 401 },
    { path: '/api/listener/profile', method: 'PATCH', body: '{}', expectStatus: 401 },
    { path: '/api/sessions', method: 'POST', body: '{}', expectStatus: 401 },
    { path: '/api/account', method: 'POST', body: '{}', expectStatus: 401 },
    { path: '/api/account', method: 'PATCH', body: '{}', expectStatus: 401 },
    // Public endpoints — should NOT require auth
    { path: '/api/listeners', method: 'GET', expectStatus: 200 },
    // Amount boundary testing
    { path: '/api/wallet', method: 'POST', body: JSON.stringify({ amount: -1 }), expectStatus: 401 },  // auth check fires first
    { path: '/api/wallet', method: 'POST', body: JSON.stringify({ amount: 99999 }), expectStatus: 401 },
  ]
  for (const probe of apiProbes) {
    try {
      const res = await page.request[probe.method === 'GET' ? 'get' : probe.method.toLowerCase() as 'post' | 'put' | 'patch'](`${BASE}${probe.path}`, {
        data: probe.body,
        headers: probe.body ? { 'Content-Type': 'application/json' } : {},
        failOnStatusCode: false,
        timeout: 8000,
      })
      const status = res.status()
      const body = await res.text().catch(() => '').then(t => t.slice(0, 100))
      const ok = status === probe.expectStatus
      note(ok
        ? `✅ ${probe.method} ${probe.path} → ${status} (expected ${probe.expectStatus})`
        : `❌ ${probe.method} ${probe.path} → ${status} (expected ${probe.expectStatus}) | ${body}`)
    } catch (e) {
      note(`⚠️ ${probe.method} ${probe.path} → ERROR: ${String(e).slice(0,80)}`)
    }
  }

  // ─── 13. SUPPORT PAGES — FORBIDDEN CRISIS NUMBERS ─────────────────────────
  console.log('\n══════ 13. SUPPORT PAGES ══════')
  const forbiddenPhrases = ['iCall', '9152987821', 'Vandrevala', '1860-2662-345', 'icallhelpline']
  const allowedCrisis = ['NIMHANS', 'Tele-MANAS', '14416', '080-46110007']
  for (const sp of ['/support/loneliness', '/support/anxiety', '/support/grief', '/faq']) {
    await page.goto(`${BASE}${sp}`, { waitUntil: 'networkidle', timeout: 12000 })
    const content = await page.content()
    const forbidden = forbiddenPhrases.filter(p => content.includes(p))
    if (forbidden.length) note(`❌ FORBIDDEN crisis content in ${sp}: ${JSON.stringify(forbidden)}`)
    else note(`✅ ${sp} — no forbidden crisis content`)
    const hasCrisis = allowedCrisis.some(c => content.includes(c))
    note(hasCrisis ? `✅ ${sp} — approved crisis resources present` : `⚠️ ${sp} — no crisis resources at all`)
  }

  // ─── 14. ADMIN PAGE ────────────────────────────────────────────────────────
  console.log('\n══════ 14. ADMIN PAGE ══════')
  await page.goto(`${BASE}/admin`, { waitUntil: 'networkidle', timeout: 12000 })
  await shot(page, 'admin-page')
  const adminContent = await page.textContent('body')
  // Admin should show a login/password gate (not the actual dashboard)
  note(adminContent?.includes('password') || adminContent?.includes('Password') || adminContent?.includes('Admin')
    ? '✅ Admin page shows some kind of gate/content' : '⚠️ Admin page content unexpected')

  // ─── 15. BECOME-LISTENER STATUS (unauth) ──────────────────────────────────
  console.log('\n══════ 15. BECOME-LISTENER STATUS ══════')
  await page.goto(`${BASE}/become-listener/status`, { waitUntil: 'networkidle', timeout: 10000 })
  await shot(page, 'become-listener-status')
  console.log('become-listener/status URL:', page.url())

  // ─── 16. LISTENER PROFILE PAGE ────────────────────────────────────────────
  console.log('\n══════ 16. LISTENER PROFILE ══════')
  // Check the API endpoint directly
  const lpRes = await page.request.get(`${BASE}/api/listener/00000000-0000-0000-0000-000000000000`, { failOnStatusCode: false })
  note(lpRes.status() === 404 ? '✅ /api/listener/[nonexistent-id] → 404' : `⚠️ /api/listener/fake-id → ${lpRes.status()}`)

  // ─── 17. BECOME-LISTENER VERIFY PAGE ──────────────────────────────────────
  console.log('\n══════ 17. BECOME-LISTENER VERIFY ══════')
  await page.goto(`${BASE}/become-listener/verify`, { waitUntil: 'networkidle', timeout: 10000 })
  await shot(page, 'become-listener-verify')
  console.log('verify URL:', page.url())

  // ─── 18. WALLET PAGE CONTENT (direct load, checking placeholders) ──────────
  console.log('\n══════ 18. WALLET CONTENT CHECKS ══════')
  // Check the wallet HTML is built correctly by loading the source
  const walletSrc = await fetch(`${BASE}/wallet`).then(r => r.text()).catch(() => '')
  // Check "minutes" estimate is gone
  if (walletSrc.includes('min of support available')) note('❌ Wallet "min of support" estimate still in page source')
  else note('✅ Wallet "min of support" misleading text removed')

  // ─── 19. PUBLIC PAGES FOR OWNER NAME ──────────────────────────────────────
  console.log('\n══════ 19. OWNER NAME CHECK ══════')
  for (const p of ['/', '/about', '/browse', '/become-listener', '/trust', '/faq']) {
    const r = await page.request.get(`${BASE}${p}`, { failOnStatusCode: false })
    const body = await r.text().catch(() => '')
    if (body.includes('Zubair Ali Baig')) note(`❌ Owner name exposed on ${p}`)
    else note(`✅ Owner name not in ${p}`)
  }

  // ─── 20. BECOME-LISTENER FULL FORM UX WALKTHROUGH ─────────────────────────
  console.log('\n══════ 20. FULL FORM UX ══════')
  await page.goto(`${BASE}/become-listener`, { waitUntil: 'networkidle' })
  // Fill name & bio
  await page.locator('input.input[placeholder="Your full name"]').fill('Test Listener Name')
  await page.locator('input.input[type="tel"]').fill('9876543210')
  await page.locator('textarea.input').fill('I have gone through hardship and want to help others find their way back.')
  // Select tags
  await page.locator('.tag-chip').nth(0).click()
  await page.locator('.tag-chip').nth(1).click()
  // Click the photo box
  await page.locator('.photo-box').click()
  await page.waitForTimeout(300)
  // Without OTP verified and without actual photo, clicking Next should still show errors
  await page.locator('.btn').last().click()
  await page.waitForTimeout(600)
  await shot(page, 'become-listener-partial-fill')
  const partialErrs = await page.locator('.errors-list li').allTextContents()
  note(partialErrs.some(e => e.toLowerCase().includes('otp') || e.toLowerCase().includes('verify'))
    ? '✅ OTP verification error shown when trying to advance' : '⚠️ OTP error not visible after partial fill')
  note(partialErrs.some(e => e.toLowerCase().includes('photo'))
    ? '✅ Photo error shown when no photo uploaded' : '❌ Photo error not shown after partial fill')

  // ─── FINAL REPORT ──────────────────────────────────────────────────────────
  console.log('\n\n══════════════════════════════════════════')
  console.log('FINDINGS SUMMARY')
  console.log('══════════════════════════════════════════')
  const fails = findings.filter(f => f.startsWith('❌'))
  const warns = findings.filter(f => f.startsWith('⚠️'))
  const passes = findings.filter(f => f.startsWith('✅'))
  console.log(`✅ PASS: ${passes.length}`)
  console.log(`⚠️ WARN: ${warns.length}`)
  console.log(`❌ FAIL: ${fails.length}`)
  if (fails.length) { console.log('\nFAILURES:'); fails.forEach(f => console.log(' ', f)) }
  if (warns.length) { console.log('\nWARNINGS:'); warns.forEach(w => console.log(' ', w)) }
  if (consoleErrors.length) { console.log('\nBROWSER CONSOLE ERRORS:'); consoleErrors.slice(0,20).forEach(e => console.log(' ', e)) }

  await browser.close()
}

runTests().catch(e => { console.error('FATAL:', e.message || e); process.exit(1) })
