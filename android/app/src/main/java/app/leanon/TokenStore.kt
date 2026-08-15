package app.leanon

import android.content.Context

/**
 * Holds the device's native FCM token between the moment Firebase issues it and
 * the moment the web app manages to register it against the signed-in user.
 *
 * A TWA is real Chrome, not a WebView, so there is no JavaScript bridge to push
 * the token across. The only channel is the launch URL — see
 * [LeanOnLauncherActivity]. That makes this a queue of one: the token is
 * written here, handed to the web app on next launch, and cleared once the web
 * app confirms it stored it.
 */
internal object TokenStore {
    private const val PREFS = "leanon_push"
    private const val KEY_TOKEN = "fcm_token"

    fun save(context: Context, token: String) {
        prefs(context).edit().putString(KEY_TOKEN, token).apply()
    }

    fun current(context: Context): String? =
        prefs(context).getString(KEY_TOKEN, null)?.takeIf { it.isNotBlank() }

    private fun prefs(context: Context) =
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
}
