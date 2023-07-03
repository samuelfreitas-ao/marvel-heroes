import { RemoteLoadCharacters } from '../../../src/data/usecases'
import { LoadCharactersResult } from '../../../src/domain/usecases'
import { HttpClientSpy } from '../mocks'

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
