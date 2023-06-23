import { styled } from 'styled-components'

import banner from '../../../assets/images/Banner.png'

export const Container = styled.header`
	background-image: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 304px;
	padding: 24px;
	padding-bottom: 64px;

	@media (max-width: 992px) {
		min-height: auto;
		height: 250px;
	}

	@media (max-width: 768px) {
		height: 200px;
	}

	@media (max-width: 576px) {
		height: 150px;
		font-size: 100px;
	}
`
