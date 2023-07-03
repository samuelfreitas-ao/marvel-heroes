import { QueryClient } from 'react-query'
import { HttpCacheClient, HttpResponse } from '../../data/protocols/http'

export class ReactQueryHttpCacheClient implements HttpCacheClient {
	private queryClient: QueryClient

	constructor(private readonly key: string) {
		this.queryClient = new QueryClient()
	}

	async cache<T = any>(httpResponse: HttpResponse): Promise<T> {
		return this.queryClient.fetchQuery({
			queryKey: this.key,
			queryFn: () => httpResponse
		})
	}
}
