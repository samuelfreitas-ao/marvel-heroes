import {
	LoadCharactersResult,
	LoadCharacters,
	LoadCharactersParams,
	LoadCharactersMetadata
} from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadCharacters implements LoadCharacters {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async loadAll(params?: LoadCharactersParams): Promise<LoadCharactersResult> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
			params: params?.params
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				const data = httpResponse.body.data
				const { count, limit, offset, total } = data as LoadCharactersMetadata
				return {
					data: data.results,
					metaData: { count, limit, offset, total }
				}
			default:
				throw new Error(
					httpResponse.body?.status ?? httpResponse.body?.message ?? httpResponse.body
				)
		}
	}
}
