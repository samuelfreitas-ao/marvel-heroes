import axios, { AxiosResponse } from 'axios'
import {
	HttpCacheClient,
	HttpClient,
	HttpRequest,
	HttpResponse,
	HttpStatusCode
} from '../../data/protocols/http'

export class AxiosHttpClient implements HttpClient {
	constructor(private readonly httpCache: HttpCacheClient) {}

	async request(data: HttpRequest): Promise<HttpResponse> {
		let axiosResponse: AxiosResponse
		try {
			axiosResponse = await this.httpCache.cache<AxiosResponse>(
				await axios.request({
					url: data.url,
					method: data.method,
					data: data.body,
					headers: data.headers,
					params: data.params
				})
			)
		} catch (error: any) {
			const httpError = error.response
			axiosResponse = {
				...error,
				status: httpError?.status ?? HttpStatusCode.serverError,
				data: httpError?.data ?? {
					message: error?.message
				}
			}
		}
		return {
			body: axiosResponse.data,
			statusCode: axiosResponse.status
		}
	}
}
