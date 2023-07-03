import { Container, Input, Button, FormContent, SearchResultContent } from './styled'
import { useNavigate } from 'react-router-dom'

import { IconSearch, SearchListResult } from '..'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { LoadCharacters, LoadCharactersMetadata } from '../../../domain/usecases'
import { Character } from '../../../domain/models'

type SearchBarProps = {
	loadSearch: LoadCharacters
}
export const SearchBar = ({ loadSearch }: SearchBarProps) => {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')
	const [queryResult, setQueryResult] = useState<Character[]>([])
	const [metaData, setMetaData] = useState<LoadCharactersMetadata>(
		{} as LoadCharactersMetadata
	)
	const [message, setMessage] = useState('')
	const [showSearchResult, setShowSearchResult] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const timeoutId = useRef<any>()

	const resetData = () => {
		setQueryResult([])
		setMetaData({} as any)
	}

	const fetchData = useCallback(
		async (search: string) => {
			setIsLoading(true)
			resetData()
			try {
				const { data, metaData } = await loadSearch.loadAll({
					params: { nameStartsWith: search }
				})
				setQueryResult(data)
				setMetaData(metaData)
				if (data.length < 1) {
					setMessage('Nenhum resultado')
				}
			} catch (error: any) {
				alert(error?.message)
			} finally {
				setIsLoading(false)
			}
		},
		[loadSearch]
	)

	const handleSearch = useCallback(
		(newSearchQuery: string) => {
			setMessage(newSearchQuery.length < 1 ? 'Escreva algum nome' : 'Continue escrevendo')
			clearTimeout(timeoutId.current)
			timeoutId.current = setTimeout(() => {
				if (newSearchQuery?.trim() !== '' && newSearchQuery?.trim().length > 1) {
					setMessage('')
					fetchData(newSearchQuery)
				} else {
					resetData()
				}
			}, 900)
		},
		[fetchData]
	)

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newSearchQuery = e.target.value
			setQuery(newSearchQuery)
			handleSearch(newSearchQuery)
		},
		[handleSearch]
	)

	const toggleShowSearchResult = useCallback(() => {
		const show = !showSearchResult
		setMessage(show && query.trim().length < 2 ? 'Escreva algum nome' : '')
		setTimeout(() => {
			setShowSearchResult(show)
		}, 200)
	}, [showSearchResult, query])

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
				<Input
					placeholder="Pesquisar personagens da Marvel..."
					onChange={handleInputChange}
					onFocus={toggleShowSearchResult}
					onBlur={toggleShowSearchResult}
				/>
				{showSearchResult && (
					<SearchResultContent>
						<SearchListResult
							characters={queryResult}
							metadata={metaData}
							message={message}
							isLoading={isLoading}
						/>
					</SearchResultContent>
				)}
			</FormContent>
		</Container>
	)
}
