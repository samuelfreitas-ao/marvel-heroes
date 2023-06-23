import { Container, Input, Button, FormContent, SearchResultContent } from './styled'
import { useNavigate } from 'react-router-dom'

import { IconSearch, SearchListResult } from '..'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { LoadHeroes, LoadHerosMetadata } from '../../../domain/usecases'
import { Hero } from '../../../domain/models'

type SearchBarProps = {
	loadSearch: LoadHeroes
}
export const SearchBar = ({ loadSearch }: SearchBarProps) => {
	const navigate = useNavigate()
	const [query, setQuery] = useState('')
	const [queryResult, setQueryResult] = useState<Hero[]>([])
	const [metaData, setMetaData] = useState<LoadHerosMetadata>({} as LoadHerosMetadata)
	const [message, setMessage] = useState('')
	const [showSearchResult, setShowSearchResult] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const timeoutId = useRef<number>()

	const fetchData = useCallback(
		async (search: string) => {
			setIsLoading(true)
			setQueryResult([])
			setMetaData({} as any)
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
				console.log('error', error?.message)
				alert(error?.message)
			} finally {
				setIsLoading(false)
			}
		},
		[loadSearch]
	)

	const handleInputChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newSearchQuery = e.target.value
			setQuery(newSearchQuery)
			clearTimeout(timeoutId.current)
			timeoutId.current = setTimeout(() => {
				if (newSearchQuery?.trim() !== '' && newSearchQuery?.trim().length > 1) {
					setMessage('')
					fetchData(newSearchQuery)
				} else {
					setMessage(
						newSearchQuery.length < 1 ? 'Escreva algum nome' : 'Continue escrevendo'
					)
					setQueryResult([])
					setMetaData({} as any)
				}
			}, 900)
		},
		[fetchData]
	)

	const toggleShowSearchResult = useCallback(() => {
		setTimeout(() => {
			setShowSearchResult(!showSearchResult)
		}, 200)
	}, [showSearchResult])

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
							heroes={queryResult}
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
