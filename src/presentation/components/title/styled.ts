import { styled } from 'styled-components'

export const Container = styled.h1`
	background-color: #363838;
	color: #ffffff;
	padding: 8px;
	text-align: center;
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@media (max-width: 576px) {
		font-size: 20px;
	}
`
export const Button = styled.button`
	background-color: #444;
	color: #ffffff;
	border-radius: 8px;
`
