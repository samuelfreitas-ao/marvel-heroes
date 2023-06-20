import { useEffect, useState } from 'react'

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

  useEffect(() => {
    fetchHeroes()
  }, [])

  const fetchHeroes = async () => {
    try {
      const httpResponse = await loadHeroes.loadAll()

      console.log('httpResponse', httpResponse)
    } catch (error) {
      console.log('Error', error)
    }
  }

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
