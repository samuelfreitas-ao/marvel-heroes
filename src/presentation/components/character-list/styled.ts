import { styled } from 'styled-components'

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 16px;
	list-style: none;
	padding: 0;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 12px;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 8px;
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
