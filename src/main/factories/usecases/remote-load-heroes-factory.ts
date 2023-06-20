import { RemoteLoadHeroes } from '../../../data/usecases'
import { AxiosHttpClient } from '../../../infra/http'
import { makeApiUrl } from '../http'

export const makeRemoteLoadHeroes = () => {
  return new RemoteLoadHeroes(makeApiUrl('/characters'), new AxiosHttpClient())
}
