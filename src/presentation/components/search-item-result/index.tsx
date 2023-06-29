import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from './styled'
import { Character } from '../../../domain/models'

type SearchItemResultProps = {
	character: Character
}

export const SearchItemResult = memo(({ character }: SearchItemResultProps) => {
	const navigate = useNavigate()

	const handleSelect = useCallback(() => {
		navigate(`/personagem/${character.id}`)
	}, [character, navigate])
	return <Container onClick={handleSelect}>{character.name}</Container>
})
