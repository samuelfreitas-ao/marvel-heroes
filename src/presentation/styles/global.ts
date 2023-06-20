import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		font-family: Exo, Arial, Helvetica, sans-serif;
		margin: 0;
	}

	:not(h1, h2, h3, strong, b){
		font-weight: 500;
		font-size: 16px;
	}
`
