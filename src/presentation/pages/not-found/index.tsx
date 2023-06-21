import { useNavigate } from 'react-router-dom'

import { IconHome, Layout, LayoutBody, Title } from '../../components'
import { Button, Container } from './styled'
import { useCallback } from 'react'

export function NotFound() {
	const navigate = useNavigate()

	const handleGoHome = useCallback(() => {
		navigate('/')
	}, [navigate])

	return (
		<Layout title="Página não encontrada | Marvel Heroes">
			<LayoutBody>
				<Title>404!</Title>
				<Container>
					Página não encontrado!
					<Button onClick={handleGoHome}>
						<span>Ir à página inicial</span> <IconHome />
					</Button>
				</Container>
			</LayoutBody>
		</Layout>
	)
}
