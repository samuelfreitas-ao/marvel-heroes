import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { makeHome, makeSearch } from '../../main/factories/pages'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={makeHome}></Route>
				<Route path="/search/:query" Component={makeSearch}></Route>
			</Routes>
		</BrowserRouter>
	)
}
