import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
	Error,
	Header,
	HeroList,
	Layout,
	LayoutBody,
	Loading,
	Pagination,
	SearchBar,
	Title
} from '../../components'
import { Hero } from '../../../domain/models'
import { LoadHeroes, LoadHerosMetadata } from '../../../domain/usecases'

type SearchProps = {
	loadHeroes: LoadHeroes
}
type RouteParams = {
	query: string
}

export function Search({ loadHeroes }: SearchProps) {
	const { query } = useParams<RouteParams>()

	const [heroes, setHeroes] = useState<Hero[]>([])
	const [metaData, setMetaData] = useState<LoadHerosMetadata>({} as LoadHerosMetadata)
	const [isLoading, setIsLoading] = useState(true)
	const [isReloading, setIsReloading] = useState(false)
	const [error, setError] = useState()
	const [selectedPage, setSelectedPage] = useState(0)

	const fetchHeroes = useCallback(
		async (offset: number) => {
			setIsLoading(true)
			try {
				const { data, metaData } = await loadHeroes.loadAll({
					params: { nameStartsWith: query, offset }
				})
				setHeroes(data)
				setMetaData(metaData)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
				setIsReloading(false)
			}
		},
		[loadHeroes, query]
	)

	useEffect(() => {
		if (query) {
			fetchHeroes(0)
		} else {
			setIsLoading(false)
		}
	}, [fetchHeroes, query])

	const onChangePage = (page: number) => {
		setSelectedPage(page)
		setIsReloading(true)
		fetchHeroes(page * metaData.limit)
	}
	return (
		<Layout title="Pesquisa | Marvel Heroes">
			<Header>
				<SearchBar loadSearch={loadHeroes} />
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
				) : heroes.length < 1 ? (
					<div>
						{query ? (
							'Nenhum resultado da pesquisa'
						) : (
							<Error message="Você não informou um termo de pesquisa" />
						)}
					</div>
				) : (
					<HeroList heroes={heroes} />
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
