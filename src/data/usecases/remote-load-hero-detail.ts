import {
	LoadHeroDetailResult,
	LoadHeroDetail,
	LoadHeroDetailParams
} from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadHeroDetail implements LoadHeroDetail {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async loadAll(params: LoadHeroDetailParams): Promise<LoadHeroDetailResult> {
		const urlSplit = this.url.split('?')
		const url = `${urlSplit[0]}/${params.heroId}?${urlSplit[1] ?? ''}`
		const httpResponse = await this.httpClient.request({
			url,
			method: 'get',
			params: params?.params
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				const hero = httpResponse.body.data.results[0]
				return { ...hero, series: hero?.series?.items }
			case HttpStatusCode.notFound:
				throw new Error('Personagem não encontrada')
			default:
				throw new Error(httpResponse.body?.status ?? httpResponse.body)
		}
	}
}
