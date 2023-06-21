import { ReactNode, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Container } from './styled'
import { IconBack } from '..'

type TitleProps = { children: ReactNode; backTo?: string }

export function Title({ children, backTo }: TitleProps) {
	const navigate = useNavigate()

	const handleBackHome = useCallback(() => {
		navigate('/')
	}, [navigate])

	return (
		<>
			<Container>{children}</Container>
			{backTo && (
				<div>
					<Button onClick={handleBackHome}>
						<IconBack /> Home
					</Button>
				</div>
			)}
		</>
	)
}
