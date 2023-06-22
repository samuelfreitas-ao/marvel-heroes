import { Image, Url } from '../../@types'

export interface Hero {
	id: number
	name: string
	description: string
	modified: Date
	resourceURI: string
	urls: Url[]
	thumbnail: Image
}
