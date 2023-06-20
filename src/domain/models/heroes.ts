import { Image, Url } from '../../@types'

export interface Heroe {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: Url[]
  thumbnail: Image
}
