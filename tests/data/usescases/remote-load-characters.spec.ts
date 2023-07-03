import {
	HttpClient,
	HttpMethod,
	HttpRequest,
	HttpResponse,
	HttpStatusCode
} from '../../../src/data/protocols/http'
import { RemoteLoadCharacters } from '../../../src/data/usecases'
import { LoadCharactersResult } from '../../../src/domain/usecases'

class HttpClientSpy<T = any> implements HttpClient<T> {
	url?: string
	method?: HttpMethod
	body?: any
	headers?: any
	response: HttpResponse<T> = {
		statusCode: HttpStatusCode.ok
	}
	async request(data: HttpRequest): Promise<HttpResponse<any>> {
		this.url = data.url
		this.method = data.method
		this.body = data.body
		this.headers = data.headers
		return this.response
	}
}

const makeSut = (url: 'any_url') => {
	const httpClient = new HttpClientSpy<LoadCharactersResult>()
	const sut = new RemoteLoadCharacters(url, httpClient)
	return {
		sut,
		httpClient
	}
}

describe('RemoteLoadCharacters', () => {
	test('Should call HttpClient with correct URL and Method', async () => {
		const url = 'any_url'
		const { httpClient, sut } = makeSut(url)
		await sut.loadAll()

		expect(httpClient.url).toBe(url)
		expect(httpClient.method).toBe('get')
	})
})
