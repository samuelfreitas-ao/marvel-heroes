import { Item } from './styled'
import { Heroe } from '../../../../../domain/models'

type HeroItemProps = {
  hero: Heroe
}

export function HeroItem({ hero }: HeroItemProps) {
  return <Item>{hero.name}</Item>
}
