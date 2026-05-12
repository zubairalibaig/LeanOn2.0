// Simple event-based toast — works across pages without React context.
// Usage: import { showToast } from '@/lib/toast'
//        showToast('Saved!') or showToast('Something went wrong', 'error')

export type ToastType = 'info' | 'success' | 'error' | 'warning'

export function showToast(message: string, type: ToastType = 'info') {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('leanon:toast', { detail: { message, type } }))
}
