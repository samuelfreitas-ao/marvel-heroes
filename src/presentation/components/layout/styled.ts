import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1230px;
	margin: auto;
	background-color: #363838;
`
export const Body = styled.main`
	display: flex;
	flex-direction: column;
	gap: 16px;
	background-color: #ffffff;
	padding: 24px;
	border-radius: 32px;
	margin-top: -80px;
	margin-left: 24px;
	margin-right: 24px;

	@media (max-width: 992px) {
		border-radius: 16px;
		gap: 8px;
		padding: 16px;
		margin-left: 16px;
		margin-right: 16px;
	}

	@media (max-width: 768px) {
		border-radius: 8px;
		gap: 4px;
		padding: 8px;
		margin-left: 8px;
		margin-right: 8px;
	}
`
