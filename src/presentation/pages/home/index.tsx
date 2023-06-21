import { useCallback, useEffect, useState } from 'react'

import {
	Error,
	HeroList,
	Layout,
	LayoutBody,
	Loading,
	Spinner,
	Title
} from '../../components'
import { Heroe } from '../../../domain/models'
import { LoadHeroes } from '../../../domain/usecases'

type HomeProps = {
	loadHeroes: LoadHeroes
}

export function Home({ loadHeroes }: HomeProps) {
	const [heroes, setHeroes] = useState<Heroe[]>([])
	const [isLoding, setIsLoading] = useState(true)
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
			<LayoutBody>
				<Title>Personagens {isLoding && <Spinner />}</Title>
				{isLoding ? (
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
