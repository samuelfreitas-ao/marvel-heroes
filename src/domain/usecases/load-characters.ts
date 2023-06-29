import { Character } from '../models'

export interface LoadCharacters {
	loadAll(params?: LoadCharactersParams): Promise<LoadCharactersResult>
}

export type LoadCharactersParams = {
	params?: {
		nameStartsWith?: string
		limit?: number
		offset?: number
		orderBy?: 'name' | '-name' | 'modified' | '-modified'
	}
}
export type LoadCharactersResult = {
	data: Character[]
	metaData: LoadCharactersMetadata
}

export type LoadCharactersMetadata = {
	count: number
	limit: number
	offset: number
	total: number
}
