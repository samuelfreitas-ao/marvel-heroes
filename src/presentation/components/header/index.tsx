import { Banner, SearchHeroes } from '..'
import { Container } from './styled'

export function Header() {
  return (
    <Container>
      <Banner>
        <SearchHeroes />
      </Banner>
    </Container>
  )
}
