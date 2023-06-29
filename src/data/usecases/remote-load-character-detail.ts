import {
	LoadCharacterDetailResult,
	LoadCharacterDetail,
	LoadCharacterDetailParams
} from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadCharacterDetail implements LoadCharacterDetail {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async loadAll(params: LoadCharacterDetailParams): Promise<LoadCharacterDetailResult> {
		const urlSplit = this.url.split('?')
		const url = `${urlSplit[0]}/${params.characterId}?${urlSplit[1] ?? ''}`
		const httpResponse = await this.httpClient.request({
			url,
			method: 'get',
			params: params?.params
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				const character = httpResponse.body.data.results[0]
				return { ...character, series: character?.series?.items }
			case HttpStatusCode.notFound:
				throw new Error('Personagem não encontrada')
			default:
				throw new Error(httpResponse.body?.status ?? httpResponse.body)
		}
	}
}
