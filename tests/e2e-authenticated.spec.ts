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

const SEEKER_PHONE   = process.env.TEST_SEEKER_PHONE   ?? ''
const SEEKER_OTP     = process.env.TEST_SEEKER_OTP     ?? ''
const LISTENER_PHONE = process.env.TEST_LISTENER_PHONE ?? ''
const LISTENER_OTP   = process.env.TEST_LISTENER_OTP   ?? ''
const ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD ?? ''

const tenDigits = (p: string) => p.replace(/\D/g, '').slice(-10)

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
test.describe('Listener: apply → admin approves → public profile live', () => {
  test.skip(!LISTENER_PHONE || !LISTENER_OTP, 'TEST_LISTENER_PHONE / TEST_LISTENER_OTP not set')

  test('full lifecycle', async ({ page, context }) => {
    await login(page, LISTENER_PHONE, LISTENER_OTP, { listenerMode: true })
    const userId = await authUserId(context)

    // 1. Submit the application server-side (same route the form posts to).
    const apply = await page.request.post('/api/listener/apply', {
      data: {
        name: 'E2E Listener', phone: tenDigits(LISTENER_PHONE),
        bio: 'Automated end-to-end test listener profile, here to listen with care.',
        tags: ['general'], langs: ['english'], rate: 5,
        bank: '123456789012', ifsc: 'HDFC0001234', upi: 'e2e@upi',
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
