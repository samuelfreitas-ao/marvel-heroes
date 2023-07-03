import { AxiosHttpClient, ReactQueryHttpCacheClient } from '../../../infra/http'

export const makeAxiosHttpClient = (key = 'characters') =>
	new AxiosHttpClient(new ReactQueryHttpCacheClient(key))
