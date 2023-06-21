import { Container, Content, Title } from './styled'

type ErrorProps = {
	message: string
}

export function Error({ message }: ErrorProps) {
	return (
		<Container>
			<Title>Houve um erro</Title>
			<Content>{message}</Content>
		</Container>
	)
}
