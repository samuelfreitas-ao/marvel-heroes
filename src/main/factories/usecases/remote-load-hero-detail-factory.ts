import { RemoteLoadHeroDetail } from '../../../data/usecases'
import { AxiosHttpClient } from '../../../infra/http'
import { makeApiUrl } from '../http'

export const makeRemoteLoadHeroDetail = () => {
	return new RemoteLoadHeroDetail(makeApiUrl(`/characters`), new AxiosHttpClient())
}
