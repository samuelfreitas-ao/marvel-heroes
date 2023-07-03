import faker from 'faker'
import { Character } from '../../../src/domain/models'
import { LoadCharactersMetadata } from '../../../src/domain/usecases'

export const mockCharacter = (): Character => {
	const url = faker.internet.url()
	const name = faker.name.firstName()
	return {
		id: faker.datatype.number(),
		name,
		description: faker.random.words(2),
		modified: faker.datatype.datetime(),
		resourceURI: url,
		series: [{ name }],
		thumbnail: { extension: 'png', path: url },
		urls: [{ type: 'any', url }]
	}
}

export const mockCharacterList = (): Character[] => [
	mockCharacter(),
	mockCharacter(),
	mockCharacter()
]

export const mockMetaData = (): LoadCharactersMetadata => ({
	count: faker.datatype.number(),
	limit: faker.datatype.number(),
	offset: faker.datatype.number(),
	total: faker.datatype.number()
})
