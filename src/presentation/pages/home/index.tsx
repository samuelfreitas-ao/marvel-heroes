import { useCallback, useEffect, useState } from 'react'

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

type HomeProps = {
	loadHeroes: LoadHeroes
}

export function Home({ loadHeroes }: HomeProps) {
	const [heroes, setHeroes] = useState<Hero[]>([])
	const [metaData, setMetaData] = useState<LoadHerosMetadata>({} as any)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchHeroes = useCallback(async () => {
		try {
			const { data, metaData } = await loadHeroes.loadAll()
			setHeroes(data)
			setMetaData(metaData)
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
				<Pagination metaData={metaData} />
			</LayoutBody>
		</Layout>
	)
}
