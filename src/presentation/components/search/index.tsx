import { Container, Input, Button, FormContent } from './styled'
import { useNavigate } from 'react-router-dom'

import { IconSearch } from '..'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { LoadHeroes } from '../../../domain/usecases'

type SearchHeroesProps = {
	loadSearch: LoadHeroes
}
export const SearchHeroes = ({ loadSearch }: SearchHeroesProps) => {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')
	const timeoutId = useRef<number>()

	const fetchData = useCallback(
		async (search: string) => {
			const httpResponse = await loadSearch.loadAll({
				params: { nameStartsWith: search }
			})
			console.log('httpResponse Search', httpResponse)
		},
		[loadSearch]
	)

	const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const newSearchQuery = e.target.value
		setQuery(newSearchQuery)

		clearTimeout(timeoutId.current)

		timeoutId.current = setTimeout(() => {
			console.log('Realizando pesquisa:', newSearchQuery)
			fetchData(newSearchQuery)
		}, 2000)
	}, [])

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
