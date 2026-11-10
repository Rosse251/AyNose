import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error detectado en Tienda - Héroe:', error, errorInfo)
  }

  handleReset = () => {
    try {
      localStorage.clear()
    } catch (e) {}
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#191923',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'system-ui, sans-serif'
          }}
        >
          <div
            style={{
              maxWidth: '560px',
              width: '100%',
              background: '#101014',
              border: '3px solid #E62429',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '6px 6px 0px #FFD400',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚡</div>
            <h1 style={{ color: '#E62429', fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px', textTransform: 'uppercase' }}>
              Tienda - Héroe: Error al Cargar
            </h1>
            <p style={{ color: '#E0E0E0', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.5 }}>
              Ocurrió un problema temporal al renderizar la vista:
            </p>
            <div
              style={{
                background: '#191923',
                border: '1px solid #333344',
                padding: '12px',
                borderRadius: '8px',
                color: '#FFD400',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
                marginBottom: '24px',
                textAlign: 'left',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap'
              }}
            >
              {this.state.error?.toString() || 'Error desconocido'}
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#1769FF',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Recargar Página
              </button>
              <button
                onClick={this.handleReset}
                style={{
                  background: '#E62429',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Restablecer Datos Locales
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
