import { LoadHeroesResult, LoadHeroes } from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadHeroes implements LoadHeroes {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async loadAll(): Promise<LoadHeroesResult> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body.data.results
      default:
        throw new Error(httpResponse.body?.status ?? httpResponse.body)
    }
  }
}
