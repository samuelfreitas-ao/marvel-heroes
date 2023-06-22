import { styled } from 'styled-components'

export const Container = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	background-color: #363838;
	padding: 16px;
	margin-top: 16px;
	text-align: center;
	color: #ffffff;
	& a {
		color: #ffffff;
	}

	@media (max-width: 576px) {
		flex-direction: column;
	}
`
export const SocialList = styled.ul`
	padding: 0;
	display: flex;
	align-items: center;
	list-style: none;
`
export const SocialItem = styled.li`
	padding: 0;

	& a {
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 100%;

		&:hover {
			background-color: #666;
		}
	}
`
export const CopyRightAttribution = styled.a``
