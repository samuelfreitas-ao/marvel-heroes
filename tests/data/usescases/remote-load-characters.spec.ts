import { HttpStatusCode } from '../../../src/data/protocols/http'
import { RemoteLoadCharacters } from '../../../src/data/usecases'
import { TooManyRequestsError, UnexpectedError } from '../../../src/domain/errors'
import { LoadCharactersResult } from '../../../src/domain/usecases'
import { HttpClientSpy } from '../mocks'

const makeSut = (url = 'any_url') => {
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

	test('Should throw TooManyRequestsError if HttpClient returns 429', () => {
		const { httpClient, sut } = makeSut()
		httpClient.response = {
			statusCode: HttpStatusCode.tooManyRequests
		}

		const httpResponse = sut.loadAll()

		expect(httpResponse).rejects.toThrow(new TooManyRequestsError())
	})

	test('Should throw UnexpectedError if HttpClient returns 500', () => {
		const { httpClient, sut } = makeSut()
		httpClient.response = {
			statusCode: HttpStatusCode.serverError
		}

		const httpResponse = sut.loadAll()

		expect(httpResponse).rejects.toThrow(new UnexpectedError())
	})
})
