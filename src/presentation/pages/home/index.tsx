import { useCallback, useEffect, useState } from 'react'

import {
	Error,
	Header,
	CharacterList,
	Layout,
	LayoutBody,
	Loading,
	Pagination,
	SearchBar,
	Title
} from '../../components'
import { Character } from '../../../domain/models'
import { LoadCharacters, LoadCharactersMetadata } from '../../../domain/usecases'

type HomeProps = {
	loadCharacters: LoadCharacters
}

export function Home({ loadCharacters }: HomeProps) {
	const [characters, setCharacters] = useState<Character[]>([])
	const [metaData, setMetaData] = useState<LoadCharactersMetadata>(
		{} as LoadCharactersMetadata
	)
	const [isLoading, setIsLoading] = useState(true)
	const [isReloading, setIsReloading] = useState(false)
	const [error, setError] = useState()
	const [selectedPage, setSelectedPage] = useState(0)

	const fetchCharacters = useCallback(
		async (offset: number) => {
			try {
				const { data, metaData } = await loadCharacters.loadAll({ params: { offset } })
				setCharacters(data)
				setMetaData(metaData)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
				setIsReloading(false)
			}
		},
		[loadCharacters]
	)

	useEffect(() => {
		fetchCharacters(0)
	}, [fetchCharacters])

	const onChangePage = (page: number) => {
		setSelectedPage(page)
		setIsReloading(true)
		fetchCharacters(page * metaData.limit)
	}

	return (
		<Layout>
			<Header>
				<SearchBar loadSearch={loadCharacters} />
			</Header>
			<LayoutBody>
				<Title>Personagens</Title>
				<Pagination
					metaData={metaData}
					onChangePage={onChangePage}
					page={selectedPage}
					isLoading={isReloading}
				/>
				{isLoading ? (
					<Loading data="Carregando personagens..." />
				) : error ? (
					<Error message={error} />
				) : (
					<CharacterList characters={characters} />
				)}
				<Pagination
					metaData={metaData}
					onChangePage={onChangePage}
					page={selectedPage}
					isLoading={isReloading}
				/>
			</LayoutBody>
		</Layout>
	)
}
