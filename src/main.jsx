import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class AppErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <main style={{ minHeight: '100vh', display: 'grid', alignContent: 'center', gap: 12, maxWidth: 680, margin: 'auto', padding: 32, font: '16px/1.6 system-ui, sans-serif' }}>
        <h1 style={{ margin: 0 }}>Le portfolio a rencontré une erreur</h1>
        <p>{this.state.error.message}</p>
        <p>Rechargez la page. Si le problème persiste, envoyez ce message d’erreur.</p>
      </main>
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>,
)
