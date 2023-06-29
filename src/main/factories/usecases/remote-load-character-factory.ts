import { RemoteLoadCharacters } from '../../../data/usecases'
import { AxiosHttpClient } from '../../../infra/http'
import { makeApiUrl } from '../http'

export const makeRemoteLoadCharacters = () => {
	return new RemoteLoadCharacters(makeApiUrl('/characters'), new AxiosHttpClient())
}
