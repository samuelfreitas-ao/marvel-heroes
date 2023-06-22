import { Serie } from '../../../domain/models'
import { Container, Item, List, Title } from './styled'

type SerieProps = {
	series: Serie[]
}

export function SerieList({ series }: SerieProps) {
	return (
		<Container>
			<Title>
				Participação em séries <small>({series.length})</small>
			</Title>
			<List>
				{series.map((serie) => (
					<Item key={serie.name}>- {serie.name}</Item>
				))}
			</List>
		</Container>
	)
}
