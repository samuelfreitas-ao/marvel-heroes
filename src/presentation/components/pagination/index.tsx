import { Loading } from '..'
import { LoadCharactersMetadata } from '../../../domain/usecases'
import { paginate } from '../../../utils'
import { Container, Item, List } from './styled'

type PaginationProps = {
	metaData: LoadCharactersMetadata
	onChangePage: (page: number) => void
	page: number
	isLoading?: boolean
}

export function Pagination({
	metaData,
	onChangePage: onSelect,
	page,
	isLoading
}: PaginationProps) {
	if (!metaData?.count || metaData?.count < 1) return <></>
	const { startPage, endPage, pageCount } = paginate(metaData)
	if (pageCount <= 1) return <></>
	const renderPages = () => {
		const pageButtons = []
		if (page > 2) {
			pageButtons.push(
				<Item key={-1}>
					<button onClick={() => onSelect(0)} disabled={page === 0}>
						1
					</button>{' '}
					...
				</Item>
			)
		}
		for (let offset = startPage; offset <= endPage; offset++) {
			pageButtons.push(
				<Item key={offset}>
					<button
						key={offset}
						onClick={() => onSelect(offset)}
						disabled={offset === page}
					>
						{offset + 1}
					</button>
				</Item>
			)
		}
		if (pageCount - page > 4) {
			pageButtons.push(
				<Item key={pageCount}>
					...
					<button onClick={() => onSelect(pageCount - 1)} disabled={pageCount === page}>
						{pageCount}
					</button>
				</Item>
			)
		}
		return pageButtons
	}

	return (
		<Container>
			<List>{renderPages()}</List> {isLoading && <Loading />}
		</Container>
	)
}
