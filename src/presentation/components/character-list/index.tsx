import { CharacterItem } from '..'
import { Character } from '../../../domain/models'
import { List } from './styled'

type CharacterListProps = {
	characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps) {
	return (
		<List>
			{characters.map((character) => (
				<CharacterItem key={character.id.toString()} character={character} />
			))}
		</List>
	)
}
