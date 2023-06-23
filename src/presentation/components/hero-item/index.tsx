import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hero } from '../../../domain/models'
import { ImageContainer, Container, ItemImage, ItemTitle } from './styled'
import { Spinner } from '..'

type HeroItemProps = {
	hero: Hero
}

export const HeroItem = memo(({ hero }: HeroItemProps) => {
	const navigate = useNavigate()
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = hero.thumbnail
	const imgUrl = `${path}/standard_fantastic.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	const handleOpenDetail = useCallback(() => {
		navigate(`/personagem/${hero.id}`)
	}, [hero.id, navigate])

	return (
		<Container onClick={handleOpenDetail}>
			<ImageContainer>
				{loadingImg && <Spinner size={32} />}
				<ItemImage src={imgUrl} unavailable={imgUnavailable} onLoad={handleImageLoad} />
			</ImageContainer>
			<ItemTitle>{hero.name}</ItemTitle>
		</Container>
	)
})
