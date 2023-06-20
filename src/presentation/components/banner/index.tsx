import { ReactNode } from 'react'
import { Container } from './styled'

type BannerProps = {
  children: ReactNode
}
export const Banner = ({ children }: BannerProps) => {
  return <Container>{children}</Container>
}
