package app.leanon;

import android.content.Context;
import android.content.SharedPreferences;

final class Prefs {
    static final String PUSH_TOKEN = "push_token";
    static final String NOTIF_ASKED = "notif_asked";
    static final String FSI_ASKED = "fsi_asked";
    static final String LAST_PUSH_AT = "last_push_at";

    static SharedPreferences get(Context c) {
        return c.getApplicationContext().getSharedPreferences("leanon", Context.MODE_PRIVATE);
    }
    private Prefs() { }
}
