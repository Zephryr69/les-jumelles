import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // ✅ Remplacement ici
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Utilisation de HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
)
