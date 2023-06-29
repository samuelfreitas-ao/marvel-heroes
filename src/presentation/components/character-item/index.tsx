import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Character } from '../../../domain/models'
import { ImageContainer, Container, ItemImage, ItemTitle } from './styled'
import { Spinner } from '..'

type CharacterItemProps = {
	character: Character
}

export const CharacterItem = memo(({ character }: CharacterItemProps) => {
	const navigate = useNavigate()
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = character.thumbnail
	const imgUrl = `${path}/standard_fantastic.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	const handleOpenDetail = useCallback(() => {
		navigate(`/personagem/${character.id}`)
	}, [character.id, navigate])

	return (
		<Container onClick={handleOpenDetail}>
			<ImageContainer>
				{loadingImg && <Spinner size={32} />}
				<ItemImage src={imgUrl} unavailable={imgUnavailable} onLoad={handleImageLoad} />
			</ImageContainer>
			<ItemTitle>{character.name}</ItemTitle>
		</Container>
	)
})
