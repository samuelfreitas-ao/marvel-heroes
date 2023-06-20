import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		font-family: Exo, Arial, Helvetica, sans-serif;
		margin: 0;
	}

	body{
		background-color: #6F6969;
		max-width: 1530px;
		margin: auto;
	}

	:not(h1, h2, h3, strong, b){
		font-weight: 500;
		font-size: 16px;
	}
`
