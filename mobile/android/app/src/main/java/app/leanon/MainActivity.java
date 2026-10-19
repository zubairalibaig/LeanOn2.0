package app.leanon;

import android.app.AlertDialog;
import android.app.NotificationManager;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.webkit.WebView;

import androidx.activity.OnBackPressedCallback;

import com.getcapacitor.BridgeActivity;

// The whole app is www.leanon.app (capacitor.config.json → server.url). This
// activity only adds: the LeanOnNative plugin (JS bridge), opening a URL from a
// notification, the Android back button, and a one-time prompt to allow
// full-screen request alerts (Android 14+).
public class MainActivity extends BridgeActivity {
    static final String EXTRA_URL = "leanon_url";
    static final String EXTRA_STOP_SESSION = "leanon_stop_session";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(LeanOnNativePlugin.class);   // must be before super.onCreate
        super.onCreate(savedInstanceState);
        RequestAlert.ensureChannels(this);
        handleIntent(getIntent());

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView wv = getBridge() != null ? getBridge().getWebView() : null;
                if (wv != null && wv.canGoBack()) { wv.goBack(); return; }
                setEnabled(false);
                getOnBackPressedDispatcher().onBackPressed();
                setEnabled(true);
            }
        });
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        handleIntent(intent);
    }

    @Override
    public void onResume() {
        super.onResume();
        maybeAskFullScreenPermission();
    }

    private void handleIntent(Intent intent) {
        if (intent == null) return;
        String stop = intent.getStringExtra(EXTRA_STOP_SESSION);
        if (stop != null) RequestAlert.stop(this, stop);
        String url = intent.getStringExtra(EXTRA_URL);
        // Only ever open LeanOn's own pages from a notification.
        if (url != null && url.startsWith(RequestAlert.ORIGIN + "/") && getBridge() != null) {
            final WebView wv = getBridge().getWebView();
            wv.post(() -> wv.loadUrl(url));
        }
        intent.removeExtra(EXTRA_URL);
        intent.removeExtra(EXTRA_STOP_SESSION);
    }

    // Android 14+ can withhold full-screen alerts. Without them a request still
    // rings as a heads-up notification, but does not take over a locked screen.
    private void maybeAskFullScreenPermission() {
        if (Build.VERSION.SDK_INT < 34) return;
        NotificationManager nm = getSystemService(NotificationManager.class);
        if (nm == null || nm.canUseFullScreenIntent() || !nm.areNotificationsEnabled()) return;
        if (Prefs.get(this).getBoolean(Prefs.FSI_ASKED, false)) return;
        Prefs.get(this).edit().putBoolean(Prefs.FSI_ASKED, true).apply();
        new AlertDialog.Builder(this)
            .setTitle("Ring like a phone call")
            .setMessage("Allow LeanOn to show session requests on your lock screen, so a seeker's request rings like a call even when your phone is locked.")
            .setPositiveButton("Allow", (d, w) -> {
                try {
                    startActivity(new Intent(Settings.ACTION_MANAGE_APP_USE_FULL_SCREEN_INTENT, Uri.parse("package:" + getPackageName())));
                } catch (Exception ignored) { }
            })
            .setNegativeButton("Not now", null)
            .show();
    }
}
