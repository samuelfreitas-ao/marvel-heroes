import { LoadHerosMetadata } from '../../../domain/usecases'
import { paginate } from '../../../utils'
import { Container, Item, List } from './styled'

type PaginationProps = {
	metaData: LoadHerosMetadata
	onChangePage: (page: number) => void
	page: number
}

export function Pagination({
	metaData,
	onChangePage: onSelect,
	page: selectedPage
}: PaginationProps) {
	if (!metaData?.count || metaData?.count < 1) return <></>
	const pages = Math.floor(metaData.total / metaData.count) - 2
	if (pages <= 2) return <></>

	const renderPages = () => {
		const { startPage, endPage, pageCount } = paginate(metaData)
		const pageButtons = []
		for (let page = startPage; page <= endPage; page++) {
			pageButtons.push(
				<button
					key={page}
					onClick={() => onSelect(page)}
					disabled={page === selectedPage}
				>
					{page + 1}
				</button>
			)
		}
		pageButtons.push(
			<button
				key={pageCount}
				onClick={() => onSelect(pageCount)}
				disabled={pageCount === selectedPage}
			>
				{pageCount}
			</button>
		)
		return pageButtons
	}

	return (
		<Container>
			<List>{renderPages()}</List>
		</Container>
	)
}
