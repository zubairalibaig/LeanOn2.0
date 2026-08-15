package app.leanon

import android.Manifest
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import com.google.androidbrowserhelper.trusted.LauncherActivity
import com.google.firebase.messaging.FirebaseMessaging

/**
 * Chooses the URL the Trusted Web Activity opens on.
 *
 * Three things decide it, in order:
 *   1. `DEFAULT_URL` from the manifest (the /browse marketplace), or the URL
 *      from an incoming App Link — both handled by the superclass.
 *   2. A tapped push notification, which deep-links straight to the session.
 *   3. A pending native FCM token, appended as a URL *fragment*.
 *
 * On (3): the token has to reach `/api/push/register`, and that route
 * authenticates with the Supabase session cookie — which lives in Chrome, not
 * here. So the app cannot register its own token; it has to hand it to the web
 * app, which can. A fragment rather than a query string because fragments are
 * never sent to the server, keeping the token out of access logs, Vercel
 * analytics and the Referer header. app/components/NativePushBridge.tsx picks
 * it up and strips it from the URL immediately.
 */
class LeanOnLauncherActivity : LauncherActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Ask for the token every launch. Firebase caches it, so this is cheap;
        // it matters on the very first run, when onNewToken may not have fired
        // before getLaunchingUrl() was called and the token therefore missed
        // this launch's URL. It will be attached to the next one.
        runCatching {
            FirebaseMessaging.getInstance().token.addOnSuccessListener { token ->
                if (!token.isNullOrBlank()) TokenStore.save(this, token)
            }
        }

        requestNotificationPermissionIfNeeded()
    }

    override fun getLaunchingUrl(): Uri {
        var url = super.getLaunchingUrl()

        // FCM delivers a tapped notification's data payload as intent extras.
        // lib/firebase-admin.ts sends `type` and `sessionId`.
        val sessionId = intent?.extras?.getString(EXTRA_SESSION_ID)
        if (sessionId != null && UUID.matches(sessionId)) {
            url = url.buildUpon()
                .path("/session/$sessionId")
                .clearQuery()
                .build()
        }

        TokenStore.current(this)?.let { token ->
            url = url.buildUpon()
                .encodedFragment("lo_fcm=" + Uri.encode(token))
                .build()
        }

        return url
    }

    /**
     * Android 13+ shows nothing at all without this grant. The web layer's own
     * `Notification.requestPermission()` (lib/firebase-client.ts) covers the
     * web-push path, but a natively-delivered notification needs the host app
     * to hold the permission in its own right.
     */
    private fun requestNotificationPermissionIfNeeded() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return
        if (isFinishing) return
        val granted = checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) ==
            PackageManager.PERMISSION_GRANTED
        if (!granted) {
            runCatching {
                requestPermissions(arrayOf(Manifest.permission.POST_NOTIFICATIONS), REQ_NOTIFICATIONS)
            }
        }
    }

    private companion object {
        const val EXTRA_SESSION_ID = "sessionId"
        const val REQ_NOTIFICATIONS = 1001

        // Guards against a malformed payload steering the app to an arbitrary
        // path on the origin.
        val UUID = Regex("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")
    }
}
