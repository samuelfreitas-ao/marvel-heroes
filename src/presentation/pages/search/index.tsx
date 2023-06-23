import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
	Error,
	Header,
	HeroList,
	Layout,
	LayoutBody,
	Loading,
	SearchHeroes,
	Title
} from '../../components'
import { Hero } from '../../../domain/models'
import { LoadHeroes } from '../../../domain/usecases'

type SearchProps = {
	loadHeroes: LoadHeroes
}
type RouteParams = {
	query: string
}

export function Search({ loadHeroes }: SearchProps) {
	const { query } = useParams<RouteParams>()

	const [heroes, setHeroes] = useState<Hero[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchHeroes = useCallback(async () => {
		setIsLoading(true)
		try {
			const { data } = await loadHeroes.loadAll({
				params: { nameStartsWith: query }
			})
			setHeroes(data)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [loadHeroes, query])

	useEffect(() => {
		if (query) {
			fetchHeroes()
		} else {
			setIsLoading(false)
		}
	}, [fetchHeroes, query])

	return (
		<Layout title="Pesquisa | Marvel Heroes">
			<Header>
				<SearchHeroes loadSearch={loadHeroes} />
			</Header>
			<LayoutBody>
				<Title backTo="/">Pesquisa: {query}</Title>
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
			</LayoutBody>
		</Layout>
	)
}
