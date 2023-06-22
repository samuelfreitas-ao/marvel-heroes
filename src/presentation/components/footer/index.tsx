import { IconFacebook, IconGithub, IconLinkedin, IconWhatsapp } from '..'
import { getPersonalInfo } from '../../../utils/data'
import { Container, CopyRightAttribution, SocialItem, SocialList } from './styled'

const { github, facebook, linkedin, whatsAppLink } = getPersonalInfo()

export function Footer() {
	const data = [
		{
			link: github,
			icon: <IconGithub size={24} />
		},
		{
			link: linkedin,
			icon: <IconLinkedin size={24} />
		},
		{
			link: whatsAppLink,
			icon: <IconWhatsapp size={24} />
		},
		{
			link: facebook,
			icon: <IconFacebook size={24} />
		}
	]
	return (
		<Container>
			<div>
				Todos os direitos à{' '}
				<a href="//github.com/samuelfreitas-ao" target="_blank" rel="noreferrer">
					Samuel Freitas
				</a>
			</div>
			<SocialList>
				{data.map((item) => (
					<SocialItem key={item.link}>
						<a href={item.link} target="_blank" rel="noreferrer">
							{item.icon}
						</a>
					</SocialItem>
				))}
			</SocialList>
			<CopyRightAttribution href="http://marvel.com" target="_black" rel="noreferrer">
				Data provided by Marvel. © 2023 MARVEL
			</CopyRightAttribution>
		</Container>
	)
}
