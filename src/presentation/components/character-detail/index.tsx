import { useCallback, useState } from 'react'
import { SerieList, Spinner } from '..'
import { Character } from '../../../domain/models'
import {
	Container,
	ImageContainer,
	Image,
	BioBody,
	BioContainer,
	BioTitle
} from './styled'

type CharacterCardDetailProps = {
	character: Character
}

export function CharacterCardDetail({ character }: CharacterCardDetailProps) {
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = character.thumbnail
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
				<BioTitle>{character.name}</BioTitle>
				<BioBody>
					{character.description || 'Nenhuma descrição'}
					{character.series.length > 0 && <SerieList series={character.series} />}
				</BioBody>
			</BioContainer>
		</Container>
	)
}
