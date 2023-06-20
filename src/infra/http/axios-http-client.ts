import axios, { AxiosResponse } from 'axios'
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '../../data/protocols/http'

export class AxiosHttpClient implements HttpClient {
  constructor() {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
    } catch (error: any) {
      const httpError = error.response
      axiosResponse = {
        ...error,
        status: httpError?.status ?? HttpStatusCode.serverError,
        data: httpError?.data ?? { error: error?.message, code: error?.code },
      }
    }
    return {
      body: axiosResponse.data,
      statusCode: axiosResponse.status,
    }
  }
}
