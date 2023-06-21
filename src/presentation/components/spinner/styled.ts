import { styled } from 'styled-components'
import { animateSpin } from '../../styles'

export const Container = styled.span`
	display: inline-block;
`

export const SpinnerItem = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ${animateSpin} 1s linear infinite;
`
