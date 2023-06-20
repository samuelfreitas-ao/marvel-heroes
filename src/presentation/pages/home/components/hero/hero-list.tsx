import { List } from './styled'
import { Heroe } from '../../../../../domain/models'
import { HeroItem } from '.'

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
