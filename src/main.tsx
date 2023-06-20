import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './presentation/routes'
import { GlobalStyle } from './presentation/styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
)
