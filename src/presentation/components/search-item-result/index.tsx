import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './styled'
import { Hero } from '../../../domain/models'

type SearchItemResultProps = {
	hero: Hero
}

export const SearchItemResult = memo(({ hero }: SearchItemResultProps) => {
	const navigate = useNavigate()

	const handleSelect = useCallback(() => {
		navigate(`/personagem/${hero.id}`)
	}, [hero, navigate])
	return <Container onClick={handleSelect}>{hero.name}</Container>
})
