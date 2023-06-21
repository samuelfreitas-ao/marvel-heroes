import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { makeHome } from '../../main/factories/pages'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={makeHome}></Route>
			</Routes>
		</BrowserRouter>
	)
}
