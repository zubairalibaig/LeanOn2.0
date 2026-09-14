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
 * Shows a one-time dashboard banner to listeners who have at least one
 * completed PAID session (amount_held > 0), announcing the 15% listener
 * service fee (lib/constants.ts LISTENER_SERVICE_FEE_RATE, effective
 * 2026-09-14). Dismissal is stored in localStorage per-device
 * (leanon_fee_notice_dismissed) — matches the existing dismissible-banner
 * pattern (leanon_nudge_dismissed). A durable in-app notification is also
 * inserted once per listener (type 'fee_update') so it survives across
 * devices even if this flag or the banner is later removed.
 * Set to false to hide the banner instantly without a redeploy.
 */
export const SHOW_LISTENER_FEE_UPDATE_NOTICE = true
