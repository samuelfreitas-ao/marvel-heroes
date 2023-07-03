import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AppRoutes } from './presentation/routes'
import { GlobalStyle } from './presentation/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<QueryClientProvider client={new QueryClient({})}>
			<AppRoutes />
		</QueryClientProvider>
	</React.StrictMode>
)
