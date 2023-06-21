import { Container, Input, Button, FormContent } from './styled'
import { useNavigate } from 'react-router-dom'

import { IconSearch } from '..'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

export const SearchHeroes = () => {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()
			navigate(`/search/${query}`)
		},
		[navigate, query]
	)
	return (
		<Container>
			<FormContent onSubmit={handleSubmit}>
				<Button>
					<IconSearch size={24} />
				</Button>
				<Input placeholder="Pesquisar heróis" onChange={handleInputChange} />
			</FormContent>
		</Container>
	)
}
