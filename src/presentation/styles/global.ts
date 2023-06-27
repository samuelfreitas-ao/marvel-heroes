import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<object>`
	*{
		font-family: Exo, Arial, Helvetica, sans-serif;
		margin: 0;
	}

	body{
		background-color: #444;	
	}

	:not(h1, h2, h3, strong, b){
		font-weight: 500;
		font-size: 16px;
	}

	:disabled{
		cursor:not-allowed
	}

	img{
		max-width: 100%;
		max-height: 100%;
	}
	
	button{
		border: none;
		padding: 8px 12px;
		font-size: 14px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 8px;
		background-color: transparent;
		
		& *{
			font-size: 14px;
		}
		
		&:hover{
			opacity: 0.8;
		}
	}

	small{
		font-size: 12px;
	}
`
