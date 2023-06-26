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
	const [selectedPage, setSelectedPage] = useState(1)

	const fetchHeroes = useCallback(
		async (offset: number) => {
			console.log('offset', offset)

			try {
				const { data, metaData } = await loadHeroes.loadAll({ params: { offset } })
				setHeroes(data)
				setMetaData(metaData)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		},
		[loadHeroes]
	)

	useEffect(() => {
		fetchHeroes(0)
	}, [fetchHeroes])

	const onChangePage = (page: number) => {
		console.log('Meta: ', page, metaData.limit, page * metaData.limit)
		setSelectedPage(page)
		fetchHeroes(page * metaData.limit)
	}

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
				<Pagination metaData={metaData} onChangePage={onChangePage} page={selectedPage} />
			</LayoutBody>
		</Layout>
	)
}
