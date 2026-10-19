package app.leanon;

import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.lang.ref.WeakReference;

// Full-screen "incoming call" screen shown over the lock screen for a session
// request. Built in code (no layout XML) so there is nothing else to keep in sync.
public class IncomingRequestActivity extends Activity {
    static final String EXTRA_SESSION = "session_id";
    static final String EXTRA_TITLE = "title";
    static final String EXTRA_BODY = "body";

    private static WeakReference<IncomingRequestActivity> current = new WeakReference<>(null);
    private String sessionId;

    static void finishFor(String sessionId) {
        IncomingRequestActivity a = current.get();
        if (a != null && sessionId != null && sessionId.equals(a.sessionId)) a.runOnUiThread(a::finish);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (Build.VERSION.SDK_INT >= 27) { setShowWhenLocked(true); setTurnScreenOn(true); }
        else getWindow().addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED | WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        render(getIntent());
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        render(intent);
    }

    @Override
    protected void onDestroy() {
        if (current.get() == this) current = new WeakReference<>(null);
        super.onDestroy();
    }

    private void render(Intent i) {
        sessionId = i.getStringExtra(EXTRA_SESSION);
        current = new WeakReference<>(this);
        String title = i.getStringExtra(EXTRA_TITLE);
        String body = i.getStringExtra(EXTRA_BODY);

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER);
        root.setBackgroundColor(Color.parseColor("#0F4867"));
        int pad = dp(28);
        root.setPadding(pad, pad, pad, pad);

        TextView label = text("LeanOn", 16, Color.parseColor("#9FE3EE"), true);
        TextView head = text(title == null || title.isEmpty() ? "New session request" : title, 28, Color.WHITE, true);
        TextView sub = text(body == null ? "" : body, 17, Color.parseColor("#D8EEF5"), false);
        root.addView(label);
        root.addView(space(10));
        root.addView(head);
        root.addView(space(12));
        root.addView(sub);
        root.addView(space(48));

        Button answer = button("Answer", "#38A169");
        answer.setOnClickListener(v -> answer());
        Button later = button("Not now", "#5A7A8A");
        later.setOnClickListener(v -> { RequestAlert.stop(this, sessionId); finish(); });
        root.addView(answer, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, dp(60)));
        root.addView(space(14));
        root.addView(later, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, dp(56)));
        setContentView(root);
    }

    private void answer() {
        if (sessionId != null) RequestAlert.stop(this, sessionId);
        Intent open = new Intent(this, MainActivity.class)
            .putExtra(MainActivity.EXTRA_URL, RequestAlert.ORIGIN + "/dashboard")
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        KeyguardManager km = (KeyguardManager) getSystemService(KEYGUARD_SERVICE);
        if (Build.VERSION.SDK_INT >= 26 && km != null && km.isKeyguardLocked()) {
            km.requestDismissKeyguard(this, new KeyguardManager.KeyguardDismissCallback() {
                @Override public void onDismissSucceeded() { startActivity(open); finish(); }
            });
        } else {
            startActivity(open);
            finish();
        }
    }

    private TextView text(String s, int sp, int color, boolean bold) {
        TextView t = new TextView(this);
        t.setText(s);
        t.setTextSize(TypedValue.COMPLEX_UNIT_SP, sp);
        t.setTextColor(color);
        t.setGravity(Gravity.CENTER);
        if (bold) t.setTypeface(Typeface.DEFAULT_BOLD);
        return t;
    }

    private Button button(String s, String bg) {
        Button b = new Button(this);
        b.setText(s);
        b.setAllCaps(false);
        b.setTextSize(TypedValue.COMPLEX_UNIT_SP, 18);
        b.setTextColor(Color.WHITE);
        b.setTypeface(Typeface.DEFAULT_BOLD);
        GradientDrawable d = new GradientDrawable();
        d.setColor(Color.parseColor(bg));
        d.setCornerRadius(dp(30));
        b.setBackground(d);
        return b;
    }

    private android.view.View space(int h) {
        android.view.View v = new android.view.View(this);
        v.setLayoutParams(new LinearLayout.LayoutParams(1, dp(h)));
        return v;
    }

    private int dp(int v) { return Math.round(v * getResources().getDisplayMetrics().density); }
}
