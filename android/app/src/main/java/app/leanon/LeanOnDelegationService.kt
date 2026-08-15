package app.leanon

import com.google.androidbrowserhelper.trusted.DelegationService

/**
 * Lets Chrome hand a *web* push notification to this app for display, so one
 * raised through the existing service-worker path shows as LeanOn with the
 * LeanOn icon rather than as a Chrome notification.
 *
 * This is the fallback path. Native delivery ([LeanOnMessagingService]) is the
 * primary one; see that class for why.
 */
class LeanOnDelegationService : DelegationService()
