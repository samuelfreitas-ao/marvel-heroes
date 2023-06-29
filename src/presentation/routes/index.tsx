import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { makeCharacterDetail, makeHome, makeSearch } from '../../main/factories/pages'
import { NotFound } from '../pages'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={makeHome}></Route>
				<Route path="/pesquisa" Component={makeSearch}></Route>
				<Route path="/pesquisa/:query" Component={makeSearch}></Route>
				<Route
					path="/personagem/:characterId"
					Component={() => makeCharacterDetail()}
				></Route>
				<Route path="/*" Component={NotFound}></Route>
			</Routes>
		</BrowserRouter>
	)
}
