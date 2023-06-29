import { Home } from '../../../presentation/pages'
import { makeRemoteLoadCharacters } from '../usecases'

export const makeHome = () => {
	return <Home loadCharacters={makeRemoteLoadCharacters()} />
}
