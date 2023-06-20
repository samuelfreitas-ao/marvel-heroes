import { Heroe } from '../models'

export interface LoadHeroes {
  loadAll(): Promise<LoadHeroesResult>
}

export type LoadHeroesResult = Heroe[]
