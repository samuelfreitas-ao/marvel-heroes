import { RemoteLoadCharacters } from '../../../data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteLoadCharacters = () => {
	return new RemoteLoadCharacters(makeApiUrl('/characters'), makeAxiosHttpClient())
}
