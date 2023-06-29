import { Character } from '../models'

export interface LoadCharacterDetail {
	loadAll(param: LoadCharacterDetailParams): Promise<LoadCharacterDetailResult>
}

export type LoadCharacterDetailParams = {
	characterId: string
	params?: {
		nameStartsWith?: string
		limit?: number
		offset?: number
		orderBy?: 'name' | '-name' | 'modified' | '-modified'
	}
}
export type LoadCharacterDetailResult = Character
