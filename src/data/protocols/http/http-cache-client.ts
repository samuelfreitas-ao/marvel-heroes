import { HttpResponse } from '.'

export interface HttpCacheClient {
	cache<T = any>(httpResponse: HttpResponse): Promise<T>
}
