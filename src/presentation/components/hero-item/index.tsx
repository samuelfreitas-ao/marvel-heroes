import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heroe } from '../../../domain/models'
import { Item, ItemImage, ItemTitle } from './styled'

type HeroItemProps = {
	hero: Heroe
}

export function HeroItem({ hero }: HeroItemProps) {
	const navigate = useNavigate()

	const { extension, path } = hero.thumbnail
	const imgUrl = `${path}/standard_fantastic.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleOpenDetail = useCallback(() => {
		navigate(`/${hero.id}`)
	}, [hero.id, navigate])

	return (
		<Item onClick={handleOpenDetail}>
			<ItemImage src={imgUrl} unavailable={imgUnavailable} />
			<ItemTitle>{hero.name}</ItemTitle>
		</Item>
	)
}
