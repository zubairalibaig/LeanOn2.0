// Privacy-safe Google Analytics events (no-op unless NEXT_PUBLIC_GA_ID loads gtag).
// Never send anything a person typed, names, phone numbers or listener ids.
// Same shape as track() in app/talk/page.tsx.
export function trackEvent(event: string, params: Record<string, string | number | unknown[]> = {}) {
  try { (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', event, params) } catch { /* ignore */ }
}
