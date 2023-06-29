import { CharacterDetail } from '../../../presentation/pages'
import { makeRemoteLoadCharacterDetail } from '../usecases'

export const makeCharacterDetail = () => {
	return <CharacterDetail loadCharacters={makeRemoteLoadCharacterDetail()} />
}
