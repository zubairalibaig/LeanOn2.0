'use client'

// /alerts-setup — one place to check and fix LeanOn alerts on THIS device.
// Runs the same steps the listener dashboard uses (lib/firebase-client.ts) and
// shows the fix only for the first step that fails, with instructions for the
// device in hand (most listeners: Chrome on Android). Shareable link: support
// can send it to anyone whose alerts don't work.

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import {
  registerPushNotifications, getAlertStatus, getLastPushFailure, waitForTestPush, getDeviceKind,
  type AlertStatus, type DeviceKind,
} from '@/lib/firebase-client'

type Step = 'ok' | 'fail' | 'todo' | 'busy'
type TestOutcome = null | 'shown' | 'refused' | 'none' | 'error'

export default function AlertsSetupPage() {
  const [device, setDevice] = useState<DeviceKind>('android_chrome')
  const [status, setStatus] = useState<AlertStatus | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
  const [registered, setRegistered] = useState<boolean | null>(null)
  const [registering, setRegistering] = useState(false)
  const [failure, setFailure] = useState<string | null>(null)
  const [testing, setTesting] = useState(false)
  const [test, setTest] = useState<TestOutcome>(null)
  const [testError, setTestError] = useState<string | null>(null)
  const [sawIt, setSawIt] = useState<null | boolean>(null)
  // The person tapped Allow notifications but the permission is still "not
  // decided": they closed the prompt, or Chrome silently suppressed it (it does
  // after a few dismissals). Show the manual site-settings steps then.
  const [promptDismissed, setPromptDismissed] = useState(false)

  const register = useCallback(async () => {
    setRegistering(true)
    const ok = await registerPushNotifications().catch(() => false)
    setRegistered(ok)
    setFailure(ok ? null : getLastPushFailure())
    const st = getAlertStatus()
    setStatus(st)
    setPromptDismissed(!ok && st === 'prompt')
    setRegistering(false)
    return ok
  }, [])

  // Re-check everything — on load and whenever the person comes back from
  // their phone's Settings app.
  const recheck = useCallback(async (opts?: { reRegister?: boolean }) => {
    const st = getAlertStatus()
    setStatus(st)
    if (st !== 'granted') { setRegistered(null); setTest(null); setSawIt(null) }
    const sb = createClient()
    // No stored session → logged out. (getUser() also errors when logged out,
    // so it can't tell "logged out" from a transient failure on its own.)
    const { data: { session } } = await sb.auth.getSession()
    if (!session) { setLoggedIn(false); return }
    const { data: { user }, error } = await sb.auth.getUser()
    if (error && !user) {
      // Expired/revoked session → logged out; anything else is transient.
      if (error.status === 401 || error.status === 403 || error.name === 'AuthSessionMissingError') setLoggedIn(false)
      return
    }
    setLoggedIn(!!user)
    // Already allowed → (re)register silently; no prompt is shown.
    if (user && st === 'granted' && opts?.reRegister !== false) await register()
  }, [register])

  // Device is detected once; the tabs then let the person pick another set of
  // instructions without a re-check snapping it back.
  useEffect(() => { setDevice(getDeviceKind()) }, [])

  // Coming back from Settings: re-check, but don't re-register a device that's
  // already connected — that flickered step 3 and hid the test result just as
  // the person returned from looking at the test notification.
  const registeredRef = useRef<boolean | null>(null)
  registeredRef.current = registered
  useEffect(() => {
    recheck()
    const onVis = () => { if (document.visibilityState === 'visible') recheck({ reRegister: registeredRef.current !== true }) }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [recheck])

  async function sendTest() {
    setTesting(true); setTest(null); setTestError(null); setSawIt(null)
    try {
      const arrived = waitForTestPush(20_000)
      const res = await fetch('/api/push/test', { method: 'POST' }).catch(() => null)
      const d = await res?.json().catch(() => ({})) ?? {}
      if (!d.ok) {
        setTest('error')
        setTestError(d.reason === 'no_device' ? 'This device is not registered yet — finish step 3 first.'
          : d.reason === 'not_configured' ? 'Alerts are not set up on LeanOn’s server. Please tell LeanOn support.'
          : d.error || (Array.isArray(d.errors) && d.errors[0]) || 'The test alert could not be sent. Please try again.')
        return
      }
      setTest(await arrived)
    } finally { setTesting(false) }
  }

  // ── step states ────────────────────────────────────────────────────────────
  const s1: Step = status === null ? 'busy' : status === 'unsupported' || status === 'ios_install' || status === 'not_configured' ? 'fail' : 'ok'
  const s2: Step = s1 !== 'ok' ? 'todo' : status === 'granted' ? 'ok' : status === 'denied' ? 'fail' : 'todo'
  const s3: Step = s2 !== 'ok' || !loggedIn ? 'todo' : registering ? 'busy' : registered === true ? 'ok' : registered === false ? 'fail' : 'busy'
  const s4: Step = s3 !== 'ok' ? 'todo' : testing ? 'busy' : test === 'shown' && sawIt !== false ? 'ok' : test === null ? 'todo' : 'fail'
  const allGood = s1 === 'ok' && s2 === 'ok' && s3 === 'ok' && test === 'shown' && sawIt === true

  return (
    <>
      <style>{`
        .as-wrap{max-width:560px;margin:0 auto;padding:20px 16px 120px;font-family:'Nunito',system-ui,sans-serif;color:#27394A;}
        .as-wrap h1{font-size:22px;font-weight:900;color:#0F4867;margin:8px 0 6px;}
        .as-lead{font-size:14px;color:#5A7A8A;line-height:1.55;margin-bottom:18px;}
        .as-step{background:#fff;border:1.5px solid #D5EEF6;border-radius:14px;padding:14px;margin-bottom:12px;}
        .as-step.ok{border-color:#B7EBC6;background:#F6FFF8;}
        .as-step.fail{border-color:#F5C2C0;background:#FFF8F7;}
        .as-head{display:flex;gap:10px;align-items:flex-start;font-weight:800;font-size:15px;color:#0F4867;}
        .as-icon{flex:0 0 26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;background:#EEF4F7;}
        .ok .as-icon{background:#C6F0D2;} .fail .as-icon{background:#FAD4D2;}
        .as-body{font-size:13.5px;line-height:1.6;margin:8px 0 0 36px;}
        .as-body ol{margin:6px 0 0 18px;padding:0;} .as-body li{margin-bottom:6px;}
        .as-body b{color:#0F4867;}
        .as-btn{display:inline-block;margin-top:10px;background:#1A8FA0;color:#fff;border:none;border-radius:50px;padding:9px 18px;font-weight:800;font-size:13.5px;cursor:pointer;font-family:inherit;text-decoration:none;}
        .as-btn.ghost{background:#fff;color:#1A8FA0;border:1.5px solid #1A8FA0;margin-left:6px;}
        .as-btn:disabled{opacity:.6;cursor:default;}
        .as-err{font-size:11.5px;color:#7A8A96;margin-top:6px;word-break:break-word;}
        .as-done{background:#E6F6EC;border-radius:14px;padding:14px;font-weight:800;color:#22543D;margin-top:6px;}
        .as-tabs{display:flex;gap:6px;flex-wrap:wrap;margin:-6px 0 16px;}
        .as-tab{font-size:12px;font-weight:700;border:1.5px solid #D5EEF6;background:#fff;border-radius:50px;padding:4px 12px;cursor:pointer;font-family:inherit;color:#5A7A8A;}
        .as-tab.on{border-color:#1A8FA0;color:#1A8FA0;background:#EEF9FB;}
      `}</style>
      <div className="as-wrap">
        <Link href="/dashboard" style={{ fontSize: 13, color: '#1A8FA0', fontWeight: 700, textDecoration: 'none' }}>← Back to dashboard</Link>
        <h1>🔔 Turn on LeanOn alerts</h1>
        <p className="as-lead">
          Alerts make your phone ring when a seeker requests a session, even when you&apos;re using other apps.
          Follow the steps on the device you want alerts on — each step turns green when it&apos;s done.
        </p>

        <div className="as-tabs" aria-label="Instructions for">
          {([['android_chrome', 'Android (Chrome)'], ['android_app', 'Android (LeanOn app)'], ['desktop', 'Laptop / computer'], ['iphone', 'iPhone']] as [DeviceKind, string][]).map(([k, label]) => (
            <button key={k} type="button" aria-pressed={device === k} className={`as-tab${device === k ? ' on' : ''}`} onClick={() => setDevice(k)}>{label}</button>
          ))}
        </div>

        {/* 1 — browser can show alerts */}
        <div className={`as-step ${s1}`}>
          <div className="as-head"><span className="as-icon">{icon(s1, 1)}</span>This browser can show alerts</div>
          {s1 === 'fail' && (
            <div className="as-body">
              {status === 'ios_install' ? (
                <>On iPhone, alerts only work from the home-screen app: in Safari tap <b>Share → Add to Home Screen</b>, then open LeanOn from the new icon and come back to this page.</>
              ) : status === 'not_configured' ? (
                <>Alerts are not set up on LeanOn&apos;s server. Please tell LeanOn support.</>
              ) : (
device === 'desktop'
                  ? <>This browser can&apos;t show alerts. Open <b>leanon.app/alerts-setup</b> in <b>Google Chrome</b>, Edge or Firefox.</>
                  : <>This browser can&apos;t show alerts. Open <b>leanon.app/alerts-setup in Google Chrome</b> (not Samsung Internet, Opera, or the browser inside Facebook, Instagram or WhatsApp — use ⋮ → <b>Open in Chrome</b>).</>
              )}
            </div>
          )}
        </div>

        {/* 2 — permission */}
        <div className={`as-step ${s2}`}>
          <div className="as-head"><span className="as-icon">{icon(s2, 2)}</span>Notifications allowed for LeanOn</div>
          {s1 === 'ok' && status === 'prompt' && (
            <div className="as-body">
              Tap the button, then choose <b>Allow</b> when your phone asks.
              {loggedIn === false ? (
                <div><Link className="as-btn" href="/auth?redirect=/alerts-setup">Log in first</Link></div>
              ) : (
                <div><button className="as-btn" disabled={registering} onClick={register}>{registering ? 'Waiting…' : 'Allow notifications'}</button></div>
              )}
              {promptDismissed && (
                <div style={{ marginTop: 10 }}>
                  Notifications weren&apos;t allowed. If no question appeared, Chrome is hiding it — allow them by hand:
                  <BlockedSteps device={device} />
                </div>
              )}
            </div>
          )}
          {s2 === 'fail' && <div className="as-body"><BlockedSteps device={device} /><button className="as-btn" onClick={() => recheck()}>I&apos;ve done this — check again</button></div>}
        </div>

        {/* 3 — device registered */}
        <div className={`as-step ${s3}`}>
          <div className="as-head"><span className="as-icon">{icon(s3, 3)}</span>This device is connected to your account</div>
          {s2 === 'ok' && loggedIn === null && (
            <div className="as-body">Checking your login… <button className="as-btn ghost" style={{ marginTop: 0 }} onClick={() => recheck()}>Retry</button></div>
          )}
          {s2 === 'ok' && loggedIn === false && (
            <div className="as-body">Log in on this device so alerts for your account come here.<div><Link className="as-btn" href="/auth?redirect=/alerts-setup">Log in</Link></div></div>
          )}
          {s3 === 'fail' && (
            <div className="as-body">
              Notifications are allowed, but this device couldn&apos;t connect. Check your internet (switch Wi-Fi ↔ mobile data), make sure Chrome is up to date (Play Store → Chrome → Update), then try again.
              {failure && <div className="as-err">Error: {failure}</div>}
              <div><button className="as-btn" disabled={registering} onClick={register}>{registering ? 'Connecting…' : 'Try again'}</button></div>
            </div>
          )}
        </div>

        {/* 4 — test */}
        <div className={`as-step ${s4}`}>
          <div className="as-head"><span className="as-icon">{icon(s4, 4)}</span>Test alert arrives</div>
          {s3 === 'ok' && (
            <div className="as-body">
              {test === null && !testing && <>Send a test, then watch for the LeanOn notification at the top of your screen.</>}
              {testing && <>Test sent — watch for it now (checking for up to 20 seconds)…</>}
              {test === 'shown' && sawIt === null && (
                <>The test alert reached this device. <b>Did you see the notification?</b>
                  <div><button className="as-btn" onClick={() => setSawIt(true)}>Yes, I saw it</button><button className="as-btn ghost" onClick={() => setSawIt(false)}>No</button></div>
                </>
              )}
              {test === 'shown' && sawIt === false && <HiddenSteps device={device} />}
              {test === 'refused' && <>The alert reached this device but wasn&apos;t allowed to show.<BlockedSteps device={device} /></>}
              {test === 'none' && <NotArrivingSteps device={device} />}
              {test === 'error' && <div className="as-err" style={{ fontSize: 13, color: '#9B2C2C' }}>{testError}</div>}
              {!(test === 'shown' && sawIt === null) && (
                <div><button className="as-btn" disabled={testing} onClick={sendTest}>{testing ? 'Checking…' : test === null ? 'Send a test alert' : 'Send another test'}</button></div>
              )}
            </div>
          )}
        </div>

        {allGood && (
          <div className="as-done">
            ✅ All set — alerts work on this device. Go online from your dashboard and you&apos;ll be alerted for every request.
            <div><Link className="as-btn" href="/dashboard">Go to dashboard</Link></div>
          </div>
        )}

        <p className="as-lead" style={{ marginTop: 18, fontSize: 12.5 }}>
          Still stuck? Take a screenshot of this page and send it to LeanOn support from the <Link href="/contact" style={{ color: '#1A8FA0', fontWeight: 700 }}>contact page</Link>.
        </p>
      </div>
    </>
  )
}

function icon(s: Step, n: number) {
  return s === 'ok' ? '✓' : s === 'fail' ? '!' : s === 'busy' ? '…' : String(n)
}

// Notifications blocked — Chrome's own site permission AND the phone's
// per-app switch; phone Settings alone can't undo a Chrome site block.
function BlockedSteps({ device }: { device: DeviceKind }) {
  if (device === 'android_app') return (
    <ol>
      <li>Open your phone&apos;s <b>Settings → Apps → LeanOn → Notifications</b> and turn them <b>on</b>.</li>
      <li>Close LeanOn completely and open it again, then come back to this page.</li>
      <li>Still blocked? Open <b>leanon.app/alerts-setup in Google Chrome</b>, log in and do the steps there instead.</li>
    </ol>
  )
  if (device === 'desktop') return (
    <ol>
      <li>Click the icon to the <b>left of leanon.app</b> in the address bar → <b>Site settings</b> → <b>Notifications → Allow</b>.</li>
      <li>Reload this page.</li>
    </ol>
  )
  if (device === 'iphone') return (
    <ol>
      <li>iPhone <b>Settings → Notifications → LeanOn</b> → <b>Allow Notifications</b> on.</li>
      <li>Open LeanOn from the home-screen icon and come back to this page.</li>
    </ol>
  )
  return (
    <ol>
      <li>In Chrome, tap the icon to the <b>left of leanon.app</b> in the address bar → <b>Permissions</b> → <b>Notifications</b> → <b>Allow</b>.
        <div className="as-err">Don&apos;t see it? Chrome <b>⋮</b> menu → <b>Settings → Site settings → Notifications</b> → under &quot;Blocked&quot; tap <b>leanon.app</b> → <b>Allow</b>.</div></li>
      <li>Phone <b>Settings → Apps → Chrome → Notifications</b> → turn <b>on</b> (also turn on the <b>&quot;Sites&quot;</b> category if you see it).</li>
      <li>Come back to this tab — it re-checks by itself.</li>
    </ol>
  )
}

// The alert arrived but the person didn't see a pop-up — the OS is hiding it.
function HiddenSteps({ device }: { device: DeviceKind }) {
  if (device === 'desktop') return (
    <ol>
      <li><b>Windows:</b> Settings → System → Notifications → <b>Google Chrome</b> on, and <b>Do not disturb</b> off.</li>
      <li><b>Mac:</b> System Settings → Notifications → <b>Google Chrome</b> → Allow notifications, style <b>Alerts</b>; turn <b>Focus</b> off.</li>
      <li>Send another test.</li>
    </ol>
  )
  const app = device === 'android_app' ? 'LeanOn' : device === 'iphone' ? 'LeanOn' : 'Chrome'
  return (
    <ol>
      <li>Turn off <b>Do not disturb</b> (swipe down from the top of the screen).</li>
      <li>Phone <b>Settings → Apps → {app} → Notifications</b>: make sure they&apos;re on and set to <b>Alerting / Pop on screen</b> with sound, not &quot;Silent&quot;.</li>
      <li>Check the notification shade (swipe down) — the test may be sitting there quietly. Then send another test.</li>
    </ol>
  )
}

// Nothing reached the device — usually battery saving or no background data.
function NotArrivingSteps({ device }: { device: DeviceKind }) {
  if (device === 'desktop') return (
    <>The test didn&apos;t reach this computer.
      <ol>
        <li>Chrome ⋮ → Settings → System → turn on <b>&quot;Continue running background apps when Google Chrome is closed&quot;</b>.</li>
        <li>Check your internet connection, then send another test.</li>
      </ol>
    </>
  )
  const app = device === 'android_app' ? 'LeanOn' : 'Chrome'
  return (
    <>The test didn&apos;t reach this phone within 20 seconds.
      <ol>
        <li>Phone <b>Settings → Apps → {app} → Battery</b> → <b>Unrestricted</b> (or &quot;Don&apos;t optimise&quot;).</li>
        <li>Turn off <b>Battery saver</b> and <b>Data saver</b> while you&apos;re online for LeanOn.</li>
        <li>Check your internet, then send another test.</li>
      </ol>
    </>
  )
}
