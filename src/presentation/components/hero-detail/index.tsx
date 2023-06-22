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
	const { extension, path } = hero.thumbnail
	const imgUrl = `${path}.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	return (
		<Container>
			<ImageContainer>
				<Image src={imgUrl} unavailable={imgUnavailable} />
				<BioContainer>
					<BioTitle>{hero.name}</BioTitle>
					<BioBody>{hero.description || 'Nenhuma descrição'}</BioBody>
				</BioContainer>
			</ImageContainer>
		</Container>
	)
}
