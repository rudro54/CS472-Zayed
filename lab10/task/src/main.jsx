import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let r = createRoot(document.getElementById('root'))
r.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
