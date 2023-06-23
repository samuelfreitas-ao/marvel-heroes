import { Hero } from '../models'

export interface LoadHeroes {
	loadAll(params?: LoadHeroesParams): Promise<LoadHeroesResult>
}

export type LoadHeroesParams = {
	params?: {
		nameStartsWith?: string
		limit?: number
		offset?: number
		orderBy?: 'name' | '-name' | 'modified' | '-modified'
	}
}
export type LoadHeroesResult = {
	data: Hero[]
	metaData: LoadHerosMetadata
}

export type LoadHerosMetadata = {
	count: number
	limit: number
	offset: number
	total: number
}
