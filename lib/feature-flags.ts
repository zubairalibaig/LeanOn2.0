/**
 * Feature flags — set to false to hide UI-only changes without a redeploy.
 * All flags default to true (feature on). Flip to false to revert instantly.
 */

/**
 * Shows an honest "LeanOn is growing" notice to listeners explaining that
 * session volume depends on user traffic and earnings are variable.
 * Appears on: become-listener hero, become-listener/status (approved state),
 * and the listener dashboard empty state.
 * Set to false to hide all three instances at once.
 */
export const SHOW_LISTENER_GROWTH_NOTICE = true

/**
 * Shows an orange "● In session" indicator on browse cards and the listener
 * profile page when a listener is currently in an active paid/free session.
 * Social proof: seekers can see real sessions happening.
 * The is_in_session field is derived server-side from the sessions table
 * (admin client, bypasses RLS). Realtime updates on ~60s poll cycle.
 * Set to false to revert to binary green/grey online status instantly.
 * DO NOT touch is_available flag logic — that is completely separate.
 */
export const SHOW_LISTENER_IN_SESSION_STATUS = true

/**
 * One-time dashboard banner for ALL listeners announcing text/voice pricing
 * and the service fee update (2026-09-24), with a "Review my pricing" button
 * that opens the edit-profile panel. Dismissal is per-device (localStorage,
 * PRICING_NOTICE.storageKey in lib/listener-announcements.ts); an in-app
 * notification is also written server-side once per listener.
 * Set to false to hide the banner (and stop writing the notification).
 */
export const SHOW_LISTENER_PRICING_UPDATE_NOTICE = true

/**
 * Shows the new listener onboarding landing page on /become-listener:
 * an informational screen explaining what LeanOn is and is NOT, with an
 * agreement checkbox the applicant must accept before proceeding to auth
 * and the application form.
 * Set to false to revert to the original behaviour (immediate auth redirect).
 */
export const SHOW_NEW_LISTENER_ONBOARDING = true
