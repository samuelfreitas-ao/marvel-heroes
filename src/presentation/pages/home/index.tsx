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
	const [metaData, setMetaData] = useState<LoadHerosMetadata>({} as LoadHerosMetadata)
	const [isLoading, setIsLoading] = useState(true)
	const [isReloading, setIsReloading] = useState(false)
	const [error, setError] = useState()
	const [selectedPage, setSelectedPage] = useState(0)

	const fetchHeroes = useCallback(
		async (offset: number) => {
			try {
				const { data, metaData } = await loadHeroes.loadAll({ params: { offset } })
				setHeroes(data)
				setMetaData(metaData)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
				setIsReloading(false)
			}
		},
		[loadHeroes]
	)

	useEffect(() => {
		fetchHeroes(0)
	}, [fetchHeroes])

	const onChangePage = (page: number) => {
		setSelectedPage(page)
		setIsReloading(true)
		fetchHeroes(page * metaData.limit)
	}

	return (
		<Layout>
			<Header>
				<SearchBar loadSearch={loadHeroes} />
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
