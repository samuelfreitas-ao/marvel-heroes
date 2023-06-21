import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { makeHeroDetail, makeHome, makeSearch } from '../../main/factories/pages'
import { NotFound } from '../pages'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={makeHome}></Route>
				<Route path="/search" Component={makeSearch}></Route>
				<Route path="/search/:query" Component={makeSearch}></Route>
				<Route path="/:heroId" Component={() => makeHeroDetail()}></Route>
				<Route path="/*" Component={NotFound}></Route>
			</Routes>
		</BrowserRouter>
	)
}
