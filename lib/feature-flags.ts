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
