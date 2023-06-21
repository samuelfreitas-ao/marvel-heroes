import { ReactNode } from 'react'
import { Container } from './styled'

type TitleProps = { children: ReactNode }

export function Title({ children }: TitleProps) {
	return <Container>{children}</Container>
}
