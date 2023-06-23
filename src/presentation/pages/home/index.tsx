import { useCallback, useEffect, useState } from 'react'

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

type HomeProps = {
	loadHeroes: LoadHeroes
}

export function Home({ loadHeroes }: HomeProps) {
	const [heroes, setHeroes] = useState<Hero[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchHeroes = useCallback(async () => {
		try {
			const httpResponse = await loadHeroes.loadAll()
			setHeroes(httpResponse)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [loadHeroes])

	useEffect(() => {
		fetchHeroes()
	}, [fetchHeroes])

	return (
		<Layout>
			<Header>
				<SearchHeroes loadSearch={loadHeroes} />
			</Header>
			<LayoutBody>
				<Title>Personagens</Title>
				{isLoading ? (
					<Loading data="Carregando personagens..." />
				) : error ? (
					<Error message={error} />
				) : (
					<HeroList heroes={heroes} />
				)}
			</LayoutBody>
		</Layout>
	)
}
