import { Heroe } from '../models'

export interface LoadHeroes {
  loadAll(params: LoadHeroesParams): Promise<LoadHeroesResult>
}

export type LoadHeroesParams = {}
export type LoadHeroesResult = Heroe[]
