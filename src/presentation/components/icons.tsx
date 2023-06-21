import { IconBaseProps } from 'react-icons'

import {
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoWhatsapp,
	IoMdSearch,
	IoMdHome
} from 'react-icons/io'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'

export const IconBack = (props: IconBaseProps) => <BiArrowBack {...props} />
export const IconHome = (props: IconBaseProps) => <IoMdHome {...props} />
export const IconSearch = (props: IconBaseProps) => <IoMdSearch {...props} />
export const IconSpinner = (props: IconBaseProps) => (
	<AiOutlineLoading3Quarters {...props} />
)

export const IconWhatsapp = (props: IconBaseProps): React.ReactElement => (
	<IoLogoWhatsapp {...props} />
)
export const IconFacebook = (props: IconBaseProps): React.ReactElement => (
	<IoLogoFacebook {...props} />
)
export const IconLinkedin = (props: IconBaseProps): React.ReactElement => (
	<IoLogoLinkedin {...props} />
)
export const IconGithub = (props: IconBaseProps): React.ReactElement => (
	<IoLogoGithub {...props} />
)
