import react from 'react'
import logo from '../../../image/logo.svg'
import { Img } from './StyledComponents'
import { CONTENT } from '../../../utils'

export const Logo = () => {
  return <Img src={logo} alt={CONTENT.LOGO_ALT} />
}
