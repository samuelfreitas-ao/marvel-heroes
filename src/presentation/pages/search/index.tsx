import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Error, HeroList, Layout, LayoutBody, Loading, Spinner } from '../../components'
import { Heroe } from '../../../domain/models'
import { LoadHeroes } from '../../../domain/usecases'
import { Title } from './styled'

type SearchProps = {
	loadHeroes: LoadHeroes
}
type RouteParams = {
	query: string
}

export function Search({ loadHeroes }: SearchProps) {
	const { query } = useParams<RouteParams>()

	const [heroes, setHeroes] = useState<Heroe[]>([])
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
		fetchHeroes()
	}, [fetchHeroes])

	return (
		<Layout title="Pesquisa | Marvel Heroes">
			<LayoutBody>
				<Title>
					Pesquisa: {query} {isLoding && <Spinner />}
				</Title>
				{isLoding ? (
					<Loading data="Pesquisando personagem..." />
				) : error ? (
					<Error message={error} />
				) : heroes.length < 1 ? (
					<div>Nenhum resultado da pesquisa</div>
				) : (
					<HeroList heroes={heroes} />
				)}
			</LayoutBody>
		</Layout>
	)
}
