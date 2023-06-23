import { SearchItemResult, Spinner } from '..'
import { Hero } from '../../../domain/models'
import { LoadHerosMetadata } from '../../../domain/usecases'
import { Container, List, Title } from './styled'

type SearchListResultProps = {
	heroes: Hero[]
	metadata: LoadHerosMetadata
	message?: string
	isLoading?: boolean
}

export function SearchListResult({
	heroes,
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
				{heroes.map((hero) => (
					<SearchItemResult key={`search-item-${hero.id}`} hero={hero} />
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
