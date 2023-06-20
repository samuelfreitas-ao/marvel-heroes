import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  )
}
