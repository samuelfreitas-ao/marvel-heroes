import { Container, Input, Button, FormContent } from './styled'
import { useNavigate } from 'react-router-dom'

import { IconSearch } from '..'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { LoadHeroes } from '../../../domain/usecases'

type SearchHeroesProps = {
	loadSearch: LoadHeroes
}
export const SearchHeroes = ({ loadSearch }: SearchHeroesProps) => {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()
			navigate(`/pesquisa/${query}`)
		},
		[navigate, query]
	)
	return (
		<Container>
			<FormContent onSubmit={handleSubmit}>
				<Button>
					<IconSearch size={24} />
				</Button>
				<Input placeholder="Pesquisar heróis da Marvel..." onChange={handleInputChange} />
			</FormContent>
		</Container>
	)
}
