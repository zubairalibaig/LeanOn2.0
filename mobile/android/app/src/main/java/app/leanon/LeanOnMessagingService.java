package app.leanon;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

// Receives LeanOn's data-only, high-priority FCM messages (lib/push.ts →
// sendNativePush). Data-only means this runs even when the app is closed, so the
// app — not the system tray — decides how a request rings.
public class LeanOnMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(@NonNull RemoteMessage message) {
        Map<String, String> d = message.getData();
        Prefs.get(this).edit().putLong(Prefs.LAST_PUSH_AT, System.currentTimeMillis()).apply();
        String type = d.get("type");
        String sessionId = d.get("sessionId");
        String title = d.get("title");
        String body = d.get("body");
        if ("session_request".equals(type) && sessionId != null) {
            long ttl = 180;
            try { ttl = Long.parseLong(d.get("ttl")); } catch (Exception ignored) { }
            RequestAlert.ring(this, sessionId, title, body, ttl);
        } else if ("request_closed".equals(type) && sessionId != null) {
            RequestAlert.stop(this, sessionId);   // withdrawn / answered elsewhere: stop ringing, no new alert
        } else if (title != null) {
            RequestAlert.simple(this, title, body == null ? "" : body, d.get("url"), d.get("tag"));
        }
    }

    @Override
    public void onNewToken(@NonNull String token) {
        // Saved here; the website re-registers it with LeanOn the next time it opens.
        Prefs.get(this).edit().putString(Prefs.PUSH_TOKEN, token).apply();
    }
}
