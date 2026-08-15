# Activities and services named in AndroidManifest.xml are kept automatically.
# These rules cover the reflective bits R8 cannot see.

# androidbrowserhelper resolves the TWA provider and splash handling reflectively.
-keep class com.google.androidbrowserhelper.** { *; }
-keep class androidx.browser.trusted.** { *; }

# FirebaseMessagingService subclasses are instantiated by the framework.
-keep class * extends com.google.firebase.messaging.FirebaseMessagingService { *; }

# Firebase reads annotated fields reflectively.
-keepattributes Signature,InnerClasses,EnclosingMethod,*Annotation*
-dontwarn com.google.firebase.**
