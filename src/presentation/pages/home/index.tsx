import { useCallback, useEffect, useState } from 'react'

import {
	Error,
	Header,
	HeroList,
	Layout,
	LayoutBody,
	Loading,
	SearchBar,
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
			const { data } = await loadHeroes.loadAll()
			setHeroes(data)
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
				<SearchBar loadSearch={loadHeroes} />
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
