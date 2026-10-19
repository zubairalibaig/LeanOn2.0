package app.leanon;

import android.Manifest;
import android.app.Activity;
import android.app.NotificationManager;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.webkit.JavascriptInterface;

import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.ContextCompat;

// window.LeanOnAndroid — what www.leanon.app (lib/firebase-client.ts) uses when it
// runs inside the app. Synchronous on purpose: the dashboard reads the alert
// status during render. Exposes nothing sensitive (an FCM token is not a secret;
// it only lets LeanOn's server, which holds the Firebase key, message this phone).
public class LeanOnBridge {
    private final Activity activity;

    LeanOnBridge(Activity activity) { this.activity = activity; }

    @JavascriptInterface public boolean isApp() { return true; }

    @JavascriptInterface public String version() {
        try { return activity.getPackageManager().getPackageInfo(activity.getPackageName(), 0).versionName; }
        catch (Exception e) { return "?"; }
    }

    // 'granted' | 'denied' | 'prompt' — same words as the browser's Notification.permission.
    @JavascriptInterface public String notificationStatus() {
        boolean enabled = NotificationManagerCompat.from(activity).areNotificationsEnabled();
        if (Build.VERSION.SDK_INT >= 33) {
            boolean granted = ContextCompat.checkSelfPermission(activity, Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED;
            if (granted) return enabled ? "granted" : "denied";
            boolean asked = Prefs.get(activity).getBoolean(Prefs.NOTIF_ASKED, false);
            boolean canAskAgain = ActivityCompat.shouldShowRequestPermissionRationale(activity, Manifest.permission.POST_NOTIFICATIONS);
            return (asked && !canAskAgain) ? "denied" : "prompt";
        }
        return enabled ? "granted" : "denied";
    }

    // Shows Android's permission prompt, or opens LeanOn's notification settings
    // when the listener blocked it earlier. The page polls notificationStatus().
    @JavascriptInterface public void requestNotifications() {
        activity.runOnUiThread(() -> {
            if ("denied".equals(notificationStatus())) { openNotificationSettings(); return; }
            if (Build.VERSION.SDK_INT >= 33) {
                Prefs.get(activity).edit().putBoolean(Prefs.NOTIF_ASKED, true).apply();
                ActivityCompat.requestPermissions(activity, new String[]{ Manifest.permission.POST_NOTIFICATIONS }, 4711);
            }
        });
        LeanOnNativePlugin.refreshPushToken(activity.getApplicationContext());
    }

    @JavascriptInterface public String pushToken() {
        String t = Prefs.get(activity).getString(Prefs.PUSH_TOKEN, "");
        if (t == null || t.isEmpty()) LeanOnNativePlugin.refreshPushToken(activity.getApplicationContext());
        return t == null ? "" : t;
    }

    // Can a request take over the lock screen (Android 14+ may withhold it)?
    @JavascriptInterface public boolean fullScreenAllowed() {
        if (Build.VERSION.SDK_INT < 34) return true;
        NotificationManager nm = activity.getSystemService(NotificationManager.class);
        return nm != null && nm.canUseFullScreenIntent();
    }

    @JavascriptInterface public void openFullScreenSettings() {
        if (Build.VERSION.SDK_INT < 34) return;
        start(new Intent(Settings.ACTION_MANAGE_APP_USE_FULL_SCREEN_INTENT, Uri.parse("package:" + activity.getPackageName())));
    }

    @JavascriptInterface public void openNotificationSettings() {
        start(new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE, activity.getPackageName()));
    }

    // Battery-saver settings (Xiaomi / Oppo / Vivo stop background apps). Opens
    // the list; it does not use the restricted "ignore battery optimisations" permission.
    @JavascriptInterface public void openBatterySettings() {
        start(new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS));
    }

    // The page answered / saw the request end: stop the ringing for it.
    @JavascriptInterface public void stopRinging(String sessionId) {
        if (sessionId != null && !sessionId.isEmpty()) RequestAlert.stop(activity, sessionId);
    }

    // Millisecond timestamp of the last push this phone received (test alert check).
    @JavascriptInterface public double lastPushAt() {
        return (double) Prefs.get(activity).getLong(Prefs.LAST_PUSH_AT, 0L);
    }

    private void start(Intent i) {
        activity.runOnUiThread(() -> {
            try { activity.startActivity(i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); } catch (Exception ignored) { }
        });
    }
}
