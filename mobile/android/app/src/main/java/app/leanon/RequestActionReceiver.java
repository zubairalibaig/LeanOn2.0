package app.leanon;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

// "Not now" on the ringing alert: stop ringing. The request itself stays open
// for its normal window (the listener can still accept it on the dashboard).
public class RequestActionReceiver extends BroadcastReceiver {
    static final String ACTION_SILENCE = "app.leanon.SILENCE_REQUEST";
    static final String EXTRA_SESSION = "session_id";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent == null || !ACTION_SILENCE.equals(intent.getAction())) return;
        String id = intent.getStringExtra(EXTRA_SESSION);
        if (id != null) RequestAlert.stop(context, id);
    }
}
