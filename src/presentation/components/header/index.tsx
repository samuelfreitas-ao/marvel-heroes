import { ReactNode } from 'react'
import { Container } from './styled'

type HeaderProps = {
	children?: ReactNode
}
export function Header({ children }: HeaderProps) {
	return <Container>{children}</Container>
}
