import { ReactNode } from 'react'
import { Container, Input, Button, InputContent } from './styled'
import { IconSearch } from '..'

type SearchHeroesProps = {
  children: ReactNode
}
export const SearchHeroes = () => {
  return (
    <Container>
      <InputContent>
        <Button>
          <IconSearch size={24} />
        </Button>
        <Input placeholder="Pesquisar heróis" />
      </InputContent>
    </Container>
  )
}
