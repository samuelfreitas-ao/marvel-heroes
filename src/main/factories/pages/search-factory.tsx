import { Search } from '../../../presentation/pages'
import { makeRemoteLoadCharacters } from '../usecases'

export const makeSearch = () => {
	return <Search loadCharacters={makeRemoteLoadCharacters()} />
}
