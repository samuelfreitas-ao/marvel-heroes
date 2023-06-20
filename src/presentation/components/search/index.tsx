import { ReactNode } from 'react'
import { Container, Input, Button } from './styled'

type SearchHeroesProps = {
  children: ReactNode
}
export const SearchHeroes = () => {
  return (
    <Container>
      <Input />
      <Button>Submetere</Button>
    </Container>
  )
}
