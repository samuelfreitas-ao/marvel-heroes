import { HeroItem } from '..'
import { Hero } from '../../../domain/models'
import { List } from './styled'

type HeroListProps = {
	heroes: Hero[]
}

export function HeroList({ heroes }: HeroListProps) {
	return (
		<List>
			{heroes.map((hero) => (
				<HeroItem key={hero.id.toString()} hero={hero} />
			))}
		</List>
	)
}
