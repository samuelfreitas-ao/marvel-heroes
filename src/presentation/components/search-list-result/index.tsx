import { SearchItemResult, Spinner } from '..'
import { Character } from '../../../domain/models'
import { LoadCharactersMetadata } from '../../../domain/usecases'
import { Container, List, Title } from './styled'

type SearchListResultProps = {
	characters: Character[]
	metadata: LoadCharactersMetadata
	message?: string
	isLoading?: boolean
}

export function SearchListResult({
	characters,
	metadata,
	message,
	isLoading
}: SearchListResultProps) {
	return (
		<Container>
			<Title>
				<span>{message}</span> {isLoading && <Spinner />}
			</Title>
			<List>
				{characters.map((character) => (
					<SearchItemResult key={`search-item-${character.id}`} character={character} />
				))}
			</List>
			{metadata?.count && (
				<div>
					{metadata.count} - {metadata.total}
				</div>
			)}
		</Container>
	)
}
