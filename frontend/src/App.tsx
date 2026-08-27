import { useEffect, useState } from 'react'
import './App.css'

type ApiResponse = {
  date: string
  status: string
}

function App() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const loadApiData = () => {
    setIsLoading(true)
    setError('')

    fetch('http://localhost:3000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('A API respondeu com erro.')
        }
        return response.json() as Promise<ApiResponse>
      })
      .then(setApiData)
      .catch(() => setError('Não foi possível conectar à API.'))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    loadApiData()
  }, [])

  return (
    <main className="dashboard">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Conectando início">
          <span className="brand-mark">✦</span>
          <span>conectando</span>
        </a>
        <div className="live-indicator"><span className="live-dot" />Monitoramento ativo</div>
      </header>

      <section className="intro">
        <p className="section-label">Painel de conexão <span>/</span> 01</p>
        <h1>O tempo certo,<br /><em>conectado.</em></h1>
        <p className="intro-copy">Uma leitura simples do momento atual, servida diretamente pela sua API.</p>
      </section>

      <section className="dashboard-grid" aria-label="Status da conexão">
        <div className="clock-card">
          <div className="card-heading"><span>Horário atual</span><span className="card-index">01</span></div>
          <div className="clock-display">
            <span className="clock-spark">✦</span>
            {isLoading ? <span className="loading-time">--:--</span> : <time>{apiData?.date ?? '--:--'}</time>}
          </div>
          <div className="card-footer">
            <span>{error || apiData?.status || 'Consultando sua API...'}</span>
            <button type="button" onClick={loadApiData} disabled={isLoading} aria-label="Atualizar horário">
              {isLoading ? 'Atualizando...' : 'Atualizar agora'} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <aside className="status-card">
          <div className="card-heading"><span>Saúde da API</span><span className="card-index">02</span></div>
          <div className={`status-icon ${error ? 'offline' : ''}`} aria-hidden="true">{error ? '×' : '✓'}</div>
          <strong>{error ? 'Offline' : isLoading ? 'Sincronizando' : 'Online'}</strong>
          <p>{error ? 'Verifique se o servidor está ativo.' : 'Sua conexão está respondendo normalmente.'}</p>
        </aside>
      </section>

      <footer className="page-footer"><span>FRONTEND <b>+</b> BACKEND</span><span className="footer-line" /><span>LOCALHOST : 3000</span></footer>
    </main>
  )
}

export default App
