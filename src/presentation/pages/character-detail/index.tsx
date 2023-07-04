import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
	Error,
	Header,
	CharacterCardDetail,
	Layout,
	LayoutBody,
	Loading,
	Title
} from '../../components'
import { Character } from '../../../domain/models'
import { LoadCharacterDetail } from '../../../domain/usecases'

type CharacterDetailProps = {
	loadCharacters: LoadCharacterDetail
}
type RouteParams = {
	characterId: string
}

export function CharacterDetail({ loadCharacters }: CharacterDetailProps) {
	const { characterId } = useParams<RouteParams>()

	const [character, setCharacter] = useState<Character>()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchCharacters = useCallback(async () => {
		if (!characterId) return
		try {
			const httpResponse = await loadCharacters.loadAll({
				characterId: Number(characterId)
			})
			setCharacter(httpResponse)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [loadCharacters, characterId])

	useEffect(() => {
		fetchCharacters()
	}, [fetchCharacters])

	return (
		<Layout>
			<Header />
			<LayoutBody>
				<Title backTo="/">Personagem: {character?.name}</Title>
				{isLoading ? (
					<Loading data="Carregando personagem..." />
				) : error ? (
					<Error message={error} />
				) : character?.name ? (
					<CharacterCardDetail character={character} />
				) : (
					'Não encontrado'
				)}
			</LayoutBody>
		</Layout>
	)
}
