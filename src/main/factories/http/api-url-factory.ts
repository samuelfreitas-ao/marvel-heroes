import { env } from '../../config'
import CryptoJS from 'crypto-js'

export const makeApiUrl = (path: string) => {
  const timestamp = new Date().getTime().toString()
  const dataToHash = `${timestamp}${env.apiPrivateKey}${env.apiPubliKey}`
  const hash = CryptoJS.MD5(dataToHash).toString()

  const url = `${env.apiUrl}${path}?apikey=${env.apiPubliKey}&ts=${timestamp}&hash=${hash}`
  return url
}
