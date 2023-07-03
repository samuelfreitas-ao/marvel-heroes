import {
	HttpClient,
	HttpMethod,
	HttpRequest,
	HttpResponse,
	HttpStatusCode
} from '../../../src/data/protocols/http'

export class HttpClientSpy<T = any> implements HttpClient<T> {
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
