import { styled } from 'styled-components'

export const Container = styled.div`
	margin: 8px;
	display: flex;
	gap: 8px;
`
export const List = styled.ul`
	display: flex;
	gap: 8px;
	padding: 0;
	list-style: none;
`
export const Item = styled.li`
	display: flex;
	gap: 2px;
	padding: 0;

	& button {
		border: 1px solid #ddd;
		padding: 2px 8px;
		border-radius: 4px;
	}
`
