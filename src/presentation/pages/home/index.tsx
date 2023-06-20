import { Header } from '../../components'
import { Body, Container, Item, List, Title } from './styled'

export function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <Title>Personagens</Title>
        <List>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
          <Item>Ola</Item>
        </List>
      </Body>
    </Container>
  )
}
