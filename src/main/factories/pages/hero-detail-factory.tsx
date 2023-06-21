import { HeroDetail } from '../../../presentation/pages'
import { makeRemoteLoadHeroDetail } from '../usecases'

export const makeHeroDetail = () => {
	return <HeroDetail loadHeroes={makeRemoteLoadHeroDetail()} />
}
