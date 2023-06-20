import { useCallback, useEffect, useState } from 'react'

import { Header } from '../../components'
import { HeroList } from './components'
import { Body, Container, Title } from './styled'
import { Heroe } from '../../../domain/models'
import { LoadHeroes } from '../../../domain/usecases'

type HomeProps = {
  loadHeroes: LoadHeroes
}

export function Home({ loadHeroes }: HomeProps) {
  const [heroes, setHeroes] = useState<Heroe[]>([])

  const fetchHeroes = useCallback(async () => {
    try {
      const httpResponse = await loadHeroes.loadAll()
      setHeroes(httpResponse)
    } catch (error) {
      console.log('Error', error)
    }
  }, [])

  useEffect(() => {
    let loaded = true
    if (loaded) {
      fetchHeroes()
    }
    return () => {
      loaded = false
    }
  }, [])

  return (
    <Container>
      <Header />
      <Body>
        <Title>Personagens</Title>
        <HeroList heroes={heroes} />
      </Body>
    </Container>
  )
}
