'use client'
import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  message: string
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error: unknown): State {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    return { hasError: true, message }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Nunito, sans-serif', padding: '20px', textAlign: 'center',
          background: 'radial-gradient(ellipse 90% 55% at 0% 0%, #C2E4F2 0%, #DAEEF8 22%, #FFFFFF 58%)',
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>😕</div>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: '#0F4867', marginBottom: 10 }}>
            Something went wrong
          </h2>
          <p style={{ fontSize: 14, color: '#5A7A8A', fontWeight: 500, marginBottom: 28, maxWidth: 320 }}>
            Please refresh the page. If the problem persists, contact support.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#FF9933', color: 'white', border: 'none',
              borderRadius: 50, padding: '12px 28px',
              fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 15,
              cursor: 'pointer',
            }}
          >
            Refresh page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
