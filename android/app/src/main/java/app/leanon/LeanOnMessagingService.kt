package app.leanon

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

/**
 * Native delivery for session requests.
 *
 * The site already had a working web-push path (the Firebase service worker at
 * app/firebase-messaging-sw.js). This exists because that path routes through
 * Chrome's background process, which the aggressive battery managers shipped by
 * Xiaomi, Oppo, Vivo and Realme routinely kill — a large share of the Indian
 * install base. A notification a listener never sees is a paid session lost, so
 * the app takes delivery itself.
 *
 * Both paths coexist safely: `users.fcm_token` holds one token, so whichever
 * surface registered last is the one FCM targets. There is no double delivery.
 */
class LeanOnMessagingService : FirebaseMessagingService() {

    /** Firebase rotates tokens; [LeanOnLauncherActivity] ships it to the web app. */
    override fun onNewToken(token: String) {
        TokenStore.save(this, token)
    }

    override fun onMessageReceived(message: RemoteMessage) {
        // Android auto-displays a `notification` payload when the app is in the
        // background, so this runs for foreground delivery and for data-only
        // sends. Building the notification here keeps both cases identical.
        val title = message.notification?.title
            ?: message.data["title"]
            ?: getString(R.string.app_name)
        val body = message.notification?.body
            ?: message.data["body"]
            ?: return

        if (!canPostNotifications()) return

        ensureChannel()

        val sessionId = message.data["sessionId"]

        val intent = Intent(this, LeanOnLauncherActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
            message.data.forEach { (key, value) -> putExtra(key, value) }
        }

        val pendingIntent = PendingIntent.getActivity(
            this,
            sessionId?.hashCode() ?: 0,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
        )

        val notification = NotificationCompat.Builder(this, getString(R.string.notification_channel_id))
            .setSmallIcon(R.drawable.ic_notification)
            .setColor(ContextCompat.getColor(this, R.color.colorPrimary))
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(NotificationCompat.BigTextStyle().bigText(body))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setCategory(NotificationCompat.CATEGORY_MESSAGE)
            .setDefaults(NotificationCompat.DEFAULT_ALL)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .build()

        // Per-session id so a second request does not silently replace the
        // first, but repeat pushes for the same session collapse into one row.
        runCatching {
            NotificationManagerCompat.from(this)
                .notify(sessionId?.hashCode() ?: DEFAULT_NOTIFICATION_ID, notification)
        }
    }

    private fun canPostNotifications(): Boolean {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return true
        return ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) ==
            PackageManager.PERMISSION_GRANTED
    }

    /**
     * IMPORTANCE_HIGH so an incoming request makes a sound and heads-up —
     * a silent notification is functionally the same as no notification for
     * someone who is not already looking at their phone.
     */
    private fun ensureChannel() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return
        val manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val id = getString(R.string.notification_channel_id)
        if (manager.getNotificationChannel(id) != null) return

        manager.createNotificationChannel(
            NotificationChannel(id, getString(R.string.notification_channel_name), NotificationManager.IMPORTANCE_HIGH).apply {
                description = getString(R.string.notification_channel_description)
                enableVibration(true)
            }
        )
    }

    private companion object {
        const val DEFAULT_NOTIFICATION_ID = 4867
    }
}
