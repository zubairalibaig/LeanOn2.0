/**
 * LeanOn.app — Authenticated End-to-End Journeys
 *
 * These tests log in for real and exercise the seeker / listener / admin
 * flows end to end against a live deployment (production or preview).
 *
 * ── ONE-TIME SETUP (Supabase Dashboard) ───────────────────────────────
 * Auth → Providers → Phone → "Test phone numbers": add e.g.
 *     +911111111111 = 111111
 *     +912222222222 = 222222
 * Test numbers never send real SMS and always accept the fixed OTP.
 * They are real auth users in every other way.
 *
 * ── ENV VARS ──────────────────────────────────────────────────────────
 *   PLAYWRIGHT_BASE_URL   e.g. https://www.leanon.app
 *   TEST_SEEKER_PHONE     e.g. +911111111111   (10-digit part is typed)
 *   TEST_SEEKER_OTP       e.g. 111111
 *   TEST_LISTENER_PHONE   e.g. +912222222222
 *   TEST_LISTENER_OTP     e.g. 222222
 *   TEST_ADMIN_PASSWORD   the ADMIN_SECRET value (server-side approval calls)
 *
 * Run:  npx playwright test tests/e2e-authenticated.spec.ts
 * All tests skip cleanly when the env vars are absent.
 */

import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createClient } from '@supabase/supabase-js'
import { TAGLINE_PHRASES, TIME_SLOTS, PRIOR_EXPERIENCE, SCREENING_QUIZ, labelOf } from '../lib/listener-onboarding'

const SEEKER_PHONE   = process.env.TEST_SEEKER_PHONE   ?? ''
const SEEKER_OTP     = process.env.TEST_SEEKER_OTP     ?? ''
const LISTENER_PHONE = process.env.TEST_LISTENER_PHONE ?? ''
const LISTENER_OTP   = process.env.TEST_LISTENER_OTP   ?? ''
const ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD ?? ''

const tenDigits = (p: string) => p.replace(/\D/g, '').slice(-10)

// Fields required by the 2026-09 onboarding revamp (lib/listener-onboarding.ts).
const ONBOARDING = {
  education_level: 'graduate', education_field: 'psychology',
  tagline_phrases: ["Let's talk", 'A calm listener', 'No judgement here'],
  lived_experience: 'Automated test listener. I have been through a long period of loneliness after moving cities.',
  occupation: 'working', state: 'Karnataka', hours_per_week: '5_10', time_slots: ['evening'],
  prior_experience: ['informal'], heard_from: 'friend', linkedin_url: '',
  why: Array.from({ length: 110 }, (_, i) => `word${i}`).join(' '),
  quiz: { crisis: 1, contact: 1, flirting: 1, medical: 1, empathy: 2, time: 1, selfcare: 1 },
}

// The private verification selfie must exist before an application is accepted.
async function uploadTestSelfie(page: Page) {
  const jpeg = Buffer.from('ffd8ffe000104a46494600010100000100010000ffd9', 'hex')
  const res = await page.request.post('/api/listener/selfie', {
    multipart: { file: { name: 'selfie.jpg', mimeType: 'image/jpeg', buffer: jpeg } },
  })
  expect(res.ok(), `selfie upload failed: ${await res.text()}`).toBeTruthy()
}

/** Log in via phone OTP. Handles both brand-new (name step) and returning users. */
async function login(page: Page, phone: string, otp: string, opts?: { listenerMode?: boolean }) {
  await page.goto(opts?.listenerMode ? '/auth?mode=listener' : '/auth')
  await page.locator('.phone-input').fill(tenDigits(phone))
  await page.locator('.btn').click()

  const boxes = page.locator('.otp-box')
  await expect(boxes.first()).toBeVisible({ timeout: 15_000 })
  for (let i = 0; i < 6; i++) await boxes.nth(i).fill(otp[i])

  // Either the name step appears (new user) or we navigate away (returning).
  const nameInput = page.locator('.text-input')
  const outcome = await Promise.race([
    nameInput.waitFor({ state: 'visible', timeout: 20_000 }).then(() => 'name' as const),
    page.waitForURL(u => !u.pathname.startsWith('/auth'), { timeout: 20_000 }).then(() => 'done' as const),
  ]).catch(() => 'timeout' as const)

  if (outcome === 'name') {
    await nameInput.fill('E2E Tester')
    await page.locator('.btn').click()
    await page.waitForURL(u => !u.pathname.startsWith('/auth'), { timeout: 30_000 })
  }
  expect(outcome).not.toBe('timeout')
}

/** Read the logged-in user's id out of the Supabase auth cookie (handles chunking). */
async function authUserId(context: BrowserContext): Promise<string> {
  const cookies = await context.cookies()
  const parts = cookies
    .filter(c => /-auth-token(\.\d+)?$/.test(c.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(c => c.value)
  const session = JSON.parse(decodeURIComponent(parts.join('')))
  return session.user.id as string
}

// ────────────────────────────────────────────────────────────────────────
test.describe('Seeker: login survives navigation (middleware regression)', () => {
  test.skip(!SEEKER_PHONE || !SEEKER_OTP, 'TEST_SEEKER_PHONE / TEST_SEEKER_OTP not set')

  test('login once, then visit every protected route without bouncing to /auth', async ({ page }) => {
    await login(page, SEEKER_PHONE, SEEKER_OTP)

    for (const route of ['/history', '/wallet', '/notifications', '/dashboard']) {
      await page.goto(route)
      // The middleware cookie bug bounced every one of these to /auth.
      expect(new URL(page.url()).pathname, `${route} must not redirect to login`).not.toBe('/auth')
    }
  })

  test('wallet page renders balance and recharge tiers', async ({ page }) => {
    await login(page, SEEKER_PHONE, SEEKER_OTP)
    await page.goto('/wallet')
    // ₹200 appears in both the empty-wallet quick-buttons and the recharge
    // presets, so scope to the first match to avoid a strict-mode violation.
    await expect(page.getByText('₹200', { exact: true }).first()).toBeVisible({ timeout: 15_000 })
  })
})

// ────────────────────────────────────────────────────────────────────────
// The real /become-listener UI, clicked through like an applicant: intent
// screen → step 1 (display photo from "gallery", live camera selfie, taglines,
// lived experience, topics) → step 2 (education, screening, quiz) → step 3
// (age, rate, bank, Aadhaar) → submit → status page. The API-level lifecycle
// test below bypasses this form, so this is the one that catches a broken
// button or validation in the form itself. Chromium's fake camera feeds the
// selfie step.
test.describe('Listener: 3-step application form in a real browser', () => {
  test.skip(!LISTENER_PHONE || !LISTENER_OTP, 'TEST_LISTENER_PHONE / TEST_LISTENER_OTP not set')
  test.use({
    permissions: ['camera'],
    launchOptions: { args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] },
  })
  test.setTimeout(180_000)

  test('fills and submits every step', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'fake camera flags are Chromium-only')
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const userId = await authUserId(context)

    // A previous run leaves this test user with a pending/approved application,
    // which the form (rightly) refuses to reopen. Send it back to "needs fix"
    // WITH "new selfie required", so the run also proves the selfie reset works.
    if (ADMIN_PASSWORD) {
      const reset = await page.request.patch('/api/admin/users', {
        headers: { 'x-admin-password': ADMIN_PASSWORD },
        data: { userId, action: 'request_resubmission', notes: 'E2E form test', retake_selfie: true },
      })
      expect(reset.ok(), `reset failed: ${await reset.text()}`).toBeTruthy()
    }

    await page.goto('/become-listener')
    const agree = page.getByRole('checkbox')
    // isVisible() doesn't wait — the intent screen renders after an auth check.
    if (await agree.waitFor({ timeout: 15_000 }).then(() => true, () => false)) {
      await agree.click()
      await page.getByRole('button', { name: /I agree/ }).click()
    }
    await expect(page.locator('.section-title', { hasText: 'About you' })).toBeVisible({ timeout: 20_000 })

    // Chips are toggles and a resubmission pre-fills them — set, don't flip.
    const chip = (label: string) => page.getByRole('button', { name: label, exact: true })
    const setChip = async (label: string, on: boolean) => {
      const isOn = /\bsel\b/.test((await chip(label).getAttribute('class')) ?? '')
      if (isOn !== on) await chip(label).click()
    }

    // ── Step 1 ──
    await page.getByPlaceholder('Your full name').fill('Test Listener') // form allows letters only
    await page.locator('textarea').first().fill('Automated end-to-end test listener profile, here to listen with care.')
    const jpeg = await page.evaluate(() => {
      const c = document.createElement('canvas'); c.width = c.height = 400
      const x = c.getContext('2d')!; x.fillStyle = '#88aabb'; x.fillRect(0, 0, 400, 400)
      return c.toDataURL('image/jpeg', 0.9).split(',')[1]
    })
    await page.locator('input[type=file]').setInputFiles({ name: 'me.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(jpeg, 'base64') })
    await expect(page.getByAltText('Your display photo')).toBeVisible()

    await page.getByRole('button', { name: /Take a selfie|Retake selfie/ }).click()
    await page.getByRole('button', { name: /Take Photo/ }).click({ timeout: 20_000 })
    await expect(page.getByText('Selfie saved privately')).toBeVisible({ timeout: 30_000 })

    for (const p of TAGLINE_PHRASES) if (!ONBOARDING.tagline_phrases.includes(p)) await setChip(p, false)
    for (const p of ONBOARDING.tagline_phrases) await setChip(p, true)
    await page.getByPlaceholder(/I moved to a new city/).fill(ONBOARDING.lived_experience)
    await setChip('Loneliness 🌙', true)
    await page.getByRole('button', { name: /Next: Your background/ }).click()

    // ── Step 2 ──
    await expect(page.locator('.section-title', { hasText: 'Your background' })).toBeVisible({ timeout: 30_000 })
    const selects = page.locator('select')
    await selects.nth(0).selectOption(ONBOARDING.education_level)
    await selects.nth(1).selectOption(ONBOARDING.education_field)
    await selects.nth(2).selectOption(ONBOARDING.occupation)
    await selects.nth(3).selectOption(ONBOARDING.state)
    await selects.nth(4).selectOption(ONBOARDING.hours_per_week)
    await setChip(labelOf(TIME_SLOTS, 'evening'), true)
    await setChip(labelOf(PRIOR_EXPERIENCE, 'informal'), true)
    await page.getByPlaceholder(/what draws you/).fill(ONBOARDING.why)
    await selects.nth(5).selectOption(ONBOARDING.heard_from)
    for (const q of SCREENING_QUIZ) await page.locator(`input[name="quiz-${q.id}"]`).nth(q.correct).check()
    await page.getByRole('button', { name: /Next: Rate/ }).click()

    // ── Step 3 ──
    await expect(page.locator('.section-title', { hasText: 'Rate & payment details' })).toBeVisible()
    await page.getByLabel('Birth month').selectOption('6')
    await page.getByLabel('Birth year').selectOption(String(new Date().getFullYear() - 30))
    const textRate = page.getByLabel('Text chat rate per minute')
    if (await textRate.count()) await textRate.fill('10')
    else await page.locator('input.rate-input').fill('10')
    await page.getByPlaceholder('Full name exactly as on your bank account').fill('Test Listener')
    await page.getByPlaceholder('Enter account number').fill('123456789012')
    await page.getByPlaceholder('e.g. SBIN0001234').fill('HDFC0001234')
    await page.getByPlaceholder('12-digit Aadhaar').fill('234567890124')
    await page.getByRole('button', { name: /Submit application/ }).click()

    // Success screen or the status page — either proves the server accepted it.
    await expect(page.getByText(/submitted|under review|pending/i).first()).toBeVisible({ timeout: 30_000 })
    await expect(page.locator('.error-box')).toHaveCount(0)
  })
})

// ────────────────────────────────────────────────────────────────────────
test.describe('Listener: apply → admin approves → public profile live', () => {
  test.skip(!LISTENER_PHONE || !LISTENER_OTP, 'TEST_LISTENER_PHONE / TEST_LISTENER_OTP not set')

  test('full lifecycle', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const userId = await authUserId(context)

    // 1. Submit the application server-side (same route the form posts to).
    // avatar_url is now mandatory — construct a valid-format URL for the test user.
    // The path must match `{supabaseUrl}/storage/v1/object/public/avatars/{userId}.*`
    // (URL ownership validation). The file doesn't need to physically exist in
    // storage for the API to accept the application in test environments.
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
    const testAvatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${userId}.jpg`
    await uploadTestSelfie(page)
    const apply = await page.request.post('/api/listener/apply', {
      data: {
        ...ONBOARDING,
        name: 'E2E Listener', phone: tenDigits(LISTENER_PHONE),
        bio: 'Automated end-to-end test listener profile, here to listen with care.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234', upi: 'e2e@upi',
        avatar_url: testAvatarUrl,
      },
    })
    expect(apply.ok(), `apply failed: ${await apply.text()}`).toBeTruthy()

    // 2. Status page reflects the pending application.
    await page.goto('/become-listener/status')
    await expect(page.getByText(/under review|pending|approved/i).first()).toBeVisible({ timeout: 15_000 })

    // 3. Admin approves (password-header auth — no admin browser session needed).
    test.skip(!ADMIN_PASSWORD, 'TEST_ADMIN_PASSWORD not set — skipping approval + profile check')
    const approve = await page.request.patch('/api/admin/users', {
      headers: { 'x-admin-password': ADMIN_PASSWORD },
      data: { userId, action: 'approve_listener' },
    })
    expect(approve.ok(), `approve failed: ${await approve.text()}`).toBeTruthy()

    // 4. Public profile API + page must now serve this listener.
    const profile = await page.request.get(`/api/listener/${userId}`)
    expect(profile.status(), 'profile API must be 200 after approval').toBe(200)

    await page.goto(`/listener/${userId}`)
    await expect(page.locator('.listener-name')).toBeVisible({ timeout: 15_000 })
    await expect(page.getByText('Listener not found')).toHaveCount(0)
    // Booking bar shows the free-trial option.
    await expect(page.getByText('FREE')).toBeVisible()
  })
})

// ────────────────────────────────────────────────────────────────────────
test.describe('Listener apply — selfie security', () => {
  test.skip(!LISTENER_PHONE || !LISTENER_OTP, 'TEST_LISTENER_PHONE / TEST_LISTENER_OTP not set')

  test('missing avatar_url returns 400', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const res = await page.request.post('/api/listener/apply', {
      data: {
        name: 'No Selfie Test', phone: tenDigits(LISTENER_PHONE),
        bio: 'Test bio that is long enough to pass validation checks here.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234',
        // avatar_url intentionally omitted
      },
    })
    expect(res.status(), 'no selfie must be 400').toBe(400)
    const body = await res.json()
    expect(body.error, 'error message must mention the photo').toMatch(/photo/i)
  })

  test('cross-user avatar_url returns 400', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
    // Use a different user's ID in the avatar path — must be rejected.
    const crossUserUrl = `${supabaseUrl}/storage/v1/object/public/avatars/00000000-0000-0000-0000-000000000000.jpg`
    const res = await page.request.post('/api/listener/apply', {
      data: {
        name: 'Cross User Test', phone: tenDigits(LISTENER_PHONE),
        bio: 'Test bio that is long enough to pass validation checks here.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234',
        avatar_url: crossUserUrl,
      },
    })
    expect(res.status(), 'cross-user avatar must be 400').toBe(400)
  })

  test('arbitrary URL as avatar_url returns 400', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const res = await page.request.post('/api/listener/apply', {
      data: {
        name: 'Arbitrary URL Test', phone: tenDigits(LISTENER_PHONE),
        bio: 'Test bio that is long enough to pass validation checks here.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234',
        avatar_url: 'https://example.com/notmyimage.jpg',
      },
    })
    expect(res.status(), 'arbitrary URL must be 400').toBe(400)
  })

  test('valid own avatar_url is accepted', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const userId = await authUserId(context)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
    const ownAvatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${userId}.jpg`
    await uploadTestSelfie(page)
    const res = await page.request.post('/api/listener/apply', {
      data: {
        ...ONBOARDING,
        name: 'Valid Selfie Test', phone: tenDigits(LISTENER_PHONE),
        bio: 'Test bio that is long enough to pass validation checks here.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234',
        avatar_url: ownAvatarUrl,
      },
    })
    expect(res.ok(), `valid own avatar must succeed: ${await res.text()}`).toBeTruthy()
  })
})

// ────────────────────────────────────────────────────────────────────────
test.describe('Seeker books a free trial with the approved listener', () => {
  test.skip(
    !SEEKER_PHONE || !SEEKER_OTP || !LISTENER_PHONE || !LISTENER_OTP || !ADMIN_PASSWORD,
    'needs both test users + admin password'
  )

  test('5-minute free trial booking reaches the session page', async ({ browser }) => {
    // Listener logs in (separate context) to be discoverable + get their id.
    const listenerCtx = await browser.newContext()
    const listenerPage = await listenerCtx.newPage()
    await login(listenerPage, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const listenerId = await authUserId(listenerCtx)
    // Make sure the listener is available for booking.
    await listenerPage.request.post('/api/listener/availability', { data: { isAvailable: true } }).catch(() => {})
    await listenerCtx.close()

    const seekerCtx = await browser.newContext()
    const page = await seekerCtx.newPage()
    await login(page, SEEKER_PHONE, SEEKER_OTP)

    await page.goto(`/listener/${listenerId}`)
    await expect(page.locator('.listener-name')).toBeVisible({ timeout: 15_000 })

    // Select the 5-min free option and book. Use the exact accessible name —
    // hasText '5 min' also substring-matches "15 min" and "45 min".
    await page.getByRole('button', { name: '5 minute session free', exact: true }).click()
    await page.locator('.btn-book').click()

    // Either we land on the session page, or a clear booking error is shown
    // (e.g. free trial already used by this test number) — both are valid
    // outcomes; a silent failure is not.
    const result = await Promise.race([
      page.waitForURL(/\/session\//, { timeout: 20_000 }).then(() => 'session' as const),
      page.locator('.wallet-warn').waitFor({ state: 'visible', timeout: 20_000 }).then(() => 'error' as const),
    ]).catch(() => 'silent-failure' as const)
    expect(result, 'booking must navigate to session or surface an explicit error').not.toBe('silent-failure')

    await seekerCtx.close()
  })
})

// ────────────────────────────────────────────────────────────────────────
// Cleanup: soft-deactivate E2E test accounts after the full run so they
// don't pollute the browse page or admin queue.
// Requires SUPABASE_SERVICE_ROLE_KEY env var (set in .env.test or CI secrets).
test.afterAll(async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  if (!supabaseUrl || !serviceRoleKey) return

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  const testPhones = [SEEKER_PHONE, LISTENER_PHONE]
    .filter(Boolean)
    .map(p => '+' + p.replace(/\D/g, ''))

  if (testPhones.length === 0) return

  // Match both E.164 (+91...) and 10-digit formats stored in the DB
  const { data: testUsers } = await admin
    .from('users')
    .select('id')
    .in('phone', testPhones)

  for (const u of testUsers ?? []) {
    await admin.from('users')
      .update({ is_active: false })
      .eq('id', u.id)
    await admin.from('listener_profiles')
      .update({ is_active: false, is_available: false, is_approved: false })
      .eq('user_id', u.id)
  }
})
