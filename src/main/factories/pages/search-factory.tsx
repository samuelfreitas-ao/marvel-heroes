import { Search } from '../../../presentation/pages'
import { makeRemoteLoadHeroes } from '../usecases'

export const makeSearch = () => {
	return <Search loadHeroes={makeRemoteLoadHeroes()} />
}
