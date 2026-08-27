import { useEffect, useState } from 'react'
import './App.css'

type ApiResponse = {
  date: string
  status: string
}

function App() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('A API respondeu com erro.')
        }
        return response.json() as Promise<ApiResponse>
      })
      .then(setApiData)
      .catch(() => setError('Não foi possível conectar à API.'))
  }, [])

  return (
    <main className="clock-page">
      <div className="clock-card">
        <span className="eyebrow">Conectando front + back</span>
        <h1>Horário atual</h1>
        {error ? (
          <p className="message error">{error}</p>
        ) : apiData ? (
          <>
            <time className="time">{apiData.date}</time>
            <p className="message">{apiData.status}</p>
          </>
        ) : (
          <p className="message">Buscando o horário...</p>
        )}
      </div>
    </main>
  )
}

export default App
