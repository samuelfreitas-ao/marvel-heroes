type PaginationProps = {
	total: number
	limit: number
	offset: number
}
export const paginate = ({ limit, offset, total }: PaginationProps) => {
	const pageCount = Math.ceil(total / limit)
	const currentPage = offset / limit

	// Determinar o intervalo de páginas a serem exibidas
	let startPage = currentPage - 2
	let endPage = currentPage + 2

	if (startPage < 0) {
		endPage += Math.abs(startPage)
		startPage = 0
	}

	if (endPage >= pageCount) {
		startPage -= endPage - (pageCount - 1)
		endPage = pageCount - 1
	}

	if (startPage < 0) {
		startPage = 0
	}
	return {
		startPage,
		endPage,
		pageCount,
		currentPage
	}
}
