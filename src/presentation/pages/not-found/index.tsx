import { Layout, LayoutBody } from '../../components'
import { Container, Title } from './styled'

export function NotFound() {
	return (
		<Layout title="Página não encontrada | Marvel Heroes">
			<LayoutBody>
				<Title>404!</Title>
				<Container>Página não encontrado!</Container>
			</LayoutBody>
		</Layout>
	)
}
