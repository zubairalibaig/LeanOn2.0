package app.leanon;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.app.Person;

// The phone-call-style alert for a session request, and plain notifications for
// everything else. A request RINGS (looping ringtone, full-screen on a locked
// phone, Answer / Not now) until the listener acts, the server says it was
// withdrawn (type 'request_closed'), or its TTL runs out.
final class RequestAlert {
    static final String ORIGIN = "https://www.leanon.app";
    static final String CH_REQUEST = "session_requests_v1";
    static final String CH_GENERAL = "general_v1";

    static void ensureChannels(Context c) {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager nm = c.getSystemService(NotificationManager.class);
        if (nm == null) return;
        NotificationChannel req = new NotificationChannel(CH_REQUEST, "Session requests", NotificationManager.IMPORTANCE_HIGH);
        req.setDescription("Rings like a phone call when a seeker requests a session with you.");
        Uri ring = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
        req.setSound(ring, new AudioAttributes.Builder()
            .setUsage(AudioAttributes.USAGE_NOTIFICATION_RINGTONE)
            .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION).build());
        req.enableVibration(true);
        req.setVibrationPattern(new long[]{0, 800, 600, 800, 600, 800});
        req.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
        nm.createNotificationChannel(req);

        NotificationChannel gen = new NotificationChannel(CH_GENERAL, "Updates", NotificationManager.IMPORTANCE_HIGH);
        gen.setDescription("Session updates and messages from LeanOn.");
        nm.createNotificationChannel(gen);
    }

    static int idFor(String sessionId) { return ("req:" + sessionId).hashCode(); }

    static void ring(Context c, String sessionId, String title, String body, long ttlSecs) {
        ensureChannels(c);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;

        // Answer → open the dashboard, where the request's Accept / Decline lives.
        Intent answer = new Intent(c, MainActivity.class)
            .putExtra(MainActivity.EXTRA_URL, ORIGIN + "/dashboard")
            .putExtra(MainActivity.EXTRA_STOP_SESSION, sessionId)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent answerPi = PendingIntent.getActivity(c, idFor(sessionId), answer, flags);

        // Not now → just stop ringing.
        Intent silence = new Intent(c, RequestActionReceiver.class)
            .setAction(RequestActionReceiver.ACTION_SILENCE)
            .putExtra(RequestActionReceiver.EXTRA_SESSION, sessionId);
        PendingIntent silencePi = PendingIntent.getBroadcast(c, idFor(sessionId) + 1, silence, flags);

        // Locked phone → this screen takes over, like an incoming call.
        Intent full = new Intent(c, IncomingRequestActivity.class)
            .putExtra(IncomingRequestActivity.EXTRA_SESSION, sessionId)
            .putExtra(IncomingRequestActivity.EXTRA_TITLE, title)
            .putExtra(IncomingRequestActivity.EXTRA_BODY, body)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_NO_USER_ACTION);
        PendingIntent fullPi = PendingIntent.getActivity(c, idFor(sessionId) + 2, full, flags);

        Person caller = new Person.Builder().setName(title == null || title.isEmpty() ? "LeanOn — new request" : title).setImportant(true).build();
        NotificationCompat.Builder b = new NotificationCompat.Builder(c, CH_REQUEST)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setCategory(NotificationCompat.CATEGORY_CALL)
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setOngoing(true)
            .setAutoCancel(true)
            .setContentIntent(answerPi)
            .setFullScreenIntent(fullPi, true)
            .setTimeoutAfter(Math.max(30, Math.min(ttlSecs, 600)) * 1000L)
            .setStyle(NotificationCompat.CallStyle.forIncomingCall(caller, silencePi, answerPi));
        Notification n = b.build();
        n.flags |= Notification.FLAG_INSISTENT;   // keep ringing until acted on / cancelled
        notify(c, idFor(sessionId), n);
    }

    static void stop(Context c, String sessionId) {
        NotificationManagerCompat.from(c).cancel(idFor(sessionId));
        IncomingRequestActivity.finishFor(sessionId);
    }

    static void simple(Context c, String title, String body, String url, String tag) {
        ensureChannels(c);
        String target = (url != null && url.startsWith("/")) ? ORIGIN + url : ORIGIN + "/dashboard";
        Intent open = new Intent(c, MainActivity.class)
            .putExtra(MainActivity.EXTRA_URL, target)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        int id = (tag == null ? "general" : tag).hashCode();
        PendingIntent pi = PendingIntent.getActivity(c, id, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification n = new NotificationCompat.Builder(c, CH_GENERAL)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pi)
            .build();
        notify(c, id, n);
    }

    private static void notify(Context c, int id, Notification n) {
        try { NotificationManagerCompat.from(c).notify(id, n); }
        catch (SecurityException ignored) { /* notifications not allowed */ }
    }

    private RequestAlert() { }
}
