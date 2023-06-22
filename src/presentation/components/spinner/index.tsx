import { IconBaseProps } from 'react-icons'

import { IconSpinner } from '..'
import { Container, SpinnerItem } from './styled'

export function Spinner(props?: IconBaseProps) {
	return (
		<Container>
			<SpinnerItem>
				<IconSpinner {...props} />
			</SpinnerItem>
		</Container>
	)
}
