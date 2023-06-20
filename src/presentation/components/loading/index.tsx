import { ReactNode } from 'react'
import { Container } from './styled'
import { Spinner } from '..'

type LoadingProps = {
	data?: ReactNode
}

export function Loading({ data }: LoadingProps) {
	return (
		<Container>
			<Spinner /> {data && data}
		</Container>
	)
}