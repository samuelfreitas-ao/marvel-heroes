import { Home } from '../../../presentation/pages'
import { makeRemoteLoadHeroes } from '../usecases'

export const makeHome = () => {
  return <Home loadHeroes={makeRemoteLoadHeroes()} />
}
