import { LoadHeroesResult, LoadHeroes, LoadHeroesParams } from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadHeroes implements LoadHeroes {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async loadAll(params?: LoadHeroesParams): Promise<LoadHeroesResult> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
			params: params?.params
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpResponse.body.data.results
			default:
				throw new Error(
					httpResponse.body?.status ?? httpResponse.body?.message ?? httpResponse.body
				)
		}
	}
}
