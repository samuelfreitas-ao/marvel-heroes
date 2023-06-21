import { IconSpinner } from '..'
import { Container, SpinnerItem } from './styled'

export function Spinner() {
	return (
		<Container>
			<SpinnerItem>
				<IconSpinner />
			</SpinnerItem>
		</Container>
	)
}
