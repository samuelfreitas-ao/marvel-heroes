import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

type SearchProps = {
	loadCharacters: LoadCharacters
}
type RouteParams = {
	query: string
}

export function Search({ loadCharacters }: SearchProps) {
	const { query } = useParams<RouteParams>()

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
			setIsLoading(true)
			try {
				const { data, metaData } = await loadCharacters.loadAll({
					params: { nameStartsWith: query, offset }
				})
				setCharacters(data)
				setMetaData(metaData)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
				setIsReloading(false)
			}
		},
		[loadCharacters, query]
	)

	useEffect(() => {
		if (query) {
			fetchCharacters(0)
		} else {
			setIsLoading(false)
		}
	}, [fetchCharacters, query])

	const onChangePage = (page: number) => {
		setSelectedPage(page)
		setIsReloading(true)
		fetchCharacters(page * metaData.limit)
	}
	return (
		<Layout title="Pesquisa | Marvel Heroes">
			<Header>
				<SearchBar loadSearch={loadCharacters} />
			</Header>
			<LayoutBody>
				<Title backTo="/">Pesquisa: {query}</Title>
				<Pagination
					metaData={metaData}
					onChangePage={onChangePage}
					page={selectedPage}
					isLoading={isReloading}
				/>
				{isLoading ? (
					<Loading data="Pesquisando personagem..." />
				) : error ? (
					<Error message={error} />
				) : characters.length < 1 ? (
					<div>
						{query ? (
							'Nenhum resultado da pesquisa'
						) : (
							<Error message="Você não informou um termo de pesquisa" />
						)}
					</div>
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
