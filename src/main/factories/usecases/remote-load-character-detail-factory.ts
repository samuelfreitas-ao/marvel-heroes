import { RemoteLoadCharacterDetail } from '../../../data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteLoadCharacterDetail = () => {
	return new RemoteLoadCharacterDetail(
		makeApiUrl(`/characters`),
		makeAxiosHttpClient('character_detail')
	)
}
