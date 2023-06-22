import { HeroItem } from '..'
import { Hero } from '../../../domain/models'
import { List } from './styled'

type HeroListProps = {
	heroes: Hero[]
}

export function HeroList({ heroes }: HeroListProps) {
	return (
		<List>
			{heroes.map((heroe) => (
				<HeroItem key={heroe.id.toString()} hero={heroe} />
			))}
		</List>
	)
}
