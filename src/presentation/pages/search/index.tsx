import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
	Error,
	HeroList,
	Layout,
	LayoutBody,
	Loading,
	Spinner,
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
	const [isLoding, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchHeroes = useCallback(async () => {
		setIsLoading(true)
		try {
			const httpResponse = await loadHeroes.loadAll({
				params: { nameStartsWith: query }
			})
			setHeroes(httpResponse)
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
			<LayoutBody>
				<Title backTo="/">
					Pesquisa: {query} {isLoding && <Spinner />}
				</Title>
				{isLoding ? (
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
