import { Hero } from '../models'

export interface LoadHeroDetail {
	loadAll(param: LoadHeroDetailParams): Promise<LoadHeroDetailResult>
}

export type LoadHeroDetailParams = {
	heroId: string
	params?: {
		nameStartsWith?: string
		limit?: number
		offset?: number
		orderBy?: 'name' | '-name' | 'modified' | '-modified'
	}
}
export type LoadHeroDetailResult = Hero
