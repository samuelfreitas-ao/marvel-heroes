import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
	Error,
	HeroCardDetail,
	Layout,
	LayoutBody,
	Loading,
	Spinner,
	Title
} from '../../components'
import { Hero } from '../../../domain/models'
import { LoadHeroDetail } from '../../../domain/usecases'

type HeroDetailProps = {
	loadHeroes: LoadHeroDetail
}
type RouteParams = {
	heroId: string
}

export function HeroDetail({ loadHeroes }: HeroDetailProps) {
	const { heroId } = useParams<RouteParams>()

	const [hero, setHero] = useState<Hero>()
	const [isLoding, setIsLoading] = useState(true)
	const [error, setError] = useState()

	const fetchHeroes = useCallback(async () => {
		if (!heroId) return
		try {
			const httpResponse = await loadHeroes.loadAll({ heroId })
			console.log('httpResponse', httpResponse)

			setHero(httpResponse)
		} catch (error: any) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [loadHeroes, heroId])

	useEffect(() => {
		fetchHeroes()
	}, [fetchHeroes])

	return (
		<Layout>
			<LayoutBody>
				<Title backTo="/">
					Personagem: {hero?.name} {isLoding && <Spinner />}
				</Title>
				{isLoding ? (
					<Loading data="Carregando personagens..." />
				) : error ? (
					<Error message={error} />
				) : hero?.name ? (
					<HeroCardDetail hero={hero} />
				) : (
					'Não encontrado'
				)}
			</LayoutBody>
		</Layout>
	)
}
