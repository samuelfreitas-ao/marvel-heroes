import faker from 'faker'
import { HttpClientSpy } from '../mocks'
import { RemoteLoadCharacterDetail } from '../../../src/data/usecases'

const makeSut = (url = faker.internet.url()) => {
	const httpClientSpy = new HttpClientSpy()
	const sut = new RemoteLoadCharacterDetail(url, httpClientSpy)
	return {
		httpClientSpy,
		sut
	}
}

describe('RemoteLoadCharacterDetailSpec', () => {
	test('Should call HttpClient with correct URL, Method and parameter', async () => {
		const url = faker.internet.url()
		const { httpClientSpy, sut } = makeSut(url)
		const characterId = faker.datatype.number()

		await sut.loadAll({
			characterId
		})

		expect(httpClientSpy.url).toContain(characterId.toString())
		expect(httpClientSpy.url).toBe(`${url}/${characterId}`)
		expect(httpClientSpy.method).toBe('get')
	})
})
