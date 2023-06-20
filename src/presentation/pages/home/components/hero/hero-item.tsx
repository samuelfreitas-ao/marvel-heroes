import { Item, ItemImage, ItemTitle } from './styled'
import { Heroe } from '../../../../../domain/models'

type HeroItemProps = {
	hero: Heroe
}

export function HeroItem({ hero }: HeroItemProps) {
	const { extension, path } = hero.thumbnail
	const imgUrl = `${path}/standard_fantastic.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}
	return (
		<Item>
			<ItemImage src={imgUrl} unavailable={imgUnavailable} />
			<ItemTitle>
				{hero.name}
			</ItemTitle>
		</Item>
	)
}
