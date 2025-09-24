import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/main.jsx'
import './src/index.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element (#root) não encontrado — verifique index.html')
}

createRoot(rootEl).render(<App />)
