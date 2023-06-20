import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './presentation/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
