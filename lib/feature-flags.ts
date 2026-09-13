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
