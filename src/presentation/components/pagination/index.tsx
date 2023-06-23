import { LoadHerosMetadata } from '../../../domain/usecases'
import { Container, Item, List } from './styled'

type PaginationProps = {
	metaData: LoadHerosMetadata
}

export function Pagination({ metaData }: PaginationProps) {
	if (!metaData?.count || metaData?.count < 1) return <></>
	const pages = metaData.total - metaData.count
	const lines = Array.from(Array(pages > 0 ? pages : 0))
	console.log('Pages', pages, lines)

	// if (lines.length < 1) return <></>
	return (
		<Container>
			Pagin
			<List>
				{lines.map((line, i) => (
					<Item key={i}>{i + 1}</Item>
				))}
			</List>
		</Container>
	)
}
