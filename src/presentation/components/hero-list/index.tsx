import { HeroItem } from '..'
import { Heroe } from '../../../domain/models'
import { List } from './styled'

type HeroListProps = {
	heroes: Heroe[]
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
