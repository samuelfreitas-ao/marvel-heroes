import { RemoteLoadCharacterDetail } from '../../../data/usecases'
import { AxiosHttpClient } from '../../../infra/http'
import { makeApiUrl } from '../http'

export const makeRemoteLoadCharacterDetail = () => {
	return new RemoteLoadCharacterDetail(makeApiUrl(`/characters`), new AxiosHttpClient())
}
