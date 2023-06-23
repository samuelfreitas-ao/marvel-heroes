import { ReactNode, useEffect } from 'react'
import { Body, Container } from './styled'
import { Footer } from '..'

type LayoutProps = {
	children: ReactNode
	title?: string
}
export function Layout({ children, title = 'Marvel Heroes' }: LayoutProps) {
	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<Container>
			{children}
			<Footer />
		</Container>
	)
}

type LayoutBodyProps = {
	children: ReactNode
}
export function LayoutBody({ children }: LayoutBodyProps) {
	return <Body>{children}</Body>
}
