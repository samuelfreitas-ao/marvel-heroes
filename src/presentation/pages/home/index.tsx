import { useCallback, useEffect, useState } from 'react'

import { Header, Loading, Spinner } from '../../components'
import { HeroList } from './components'
import { Body, Container, Title } from './styled'
import { Heroe } from '../../../domain/models'
import { LoadHeroes } from '../../../domain/usecases'

type HomeProps = {
	loadHeroes: LoadHeroes
}

export function Home({ loadHeroes }: HomeProps) {
	const [heroes, setHeroes] = useState<Heroe[]>([])
	const [isLoding, setIsLoading] = useState(true)

	const fetchHeroes = useCallback(async () => {
		try {
			const httpResponse = await loadHeroes.loadAll()
			setHeroes(httpResponse)
		} catch (error) {
			console.log('Error', error)
		} finally {
			setIsLoading(false)
		}
	}, [loadHeroes])

	useEffect(() => {
		let loaded = true
		if (loaded) {
			fetchHeroes()
		}
		return () => {
			loaded = false
		}
	}, [fetchHeroes])

	return (
		<Container>
			<Header />
			<Body>
				<Title>Personagens {isLoding && <Spinner />}</Title>
				{isLoding ? <Loading data='Carregando personagens...' /> :
					<HeroList heroes={heroes} />
				}
			</Body>
		</Container>
	)
}
