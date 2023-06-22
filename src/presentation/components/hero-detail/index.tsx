import { useCallback, useState } from 'react'
import { SerieList, Spinner } from '..'
import { Hero } from '../../../domain/models'
import {
	Container,
	ImageContainer,
	Image,
	BioBody,
	BioContainer,
	BioTitle
} from './styled'

type HeroCardDetailProps = {
	hero: Hero
}

export function HeroCardDetail({ hero }: HeroCardDetailProps) {
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = hero.thumbnail
	const imgUrl = `${path}.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	return (
		<Container>
			<ImageContainer>
				{loadingImg && <Spinner size={32} />}
				<Image src={imgUrl} unavailable={imgUnavailable} onLoad={handleImageLoad} />
			</ImageContainer>
			<BioContainer>
				<BioTitle>{hero.name}</BioTitle>
				<BioBody>
					{hero.description || 'Nenhuma descrição'}
					{hero.series.length > 0 && <SerieList series={hero.series} />}
				</BioBody>
			</BioContainer>
		</Container>
	)
}
