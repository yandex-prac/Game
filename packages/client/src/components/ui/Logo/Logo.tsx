import React from 'react'
import logo from '@/image/logo.svg'
import { Img } from './StyledComponents'
import { useCustomIntl } from '@/hooks'

export const Logo = () => {
  return <Img src={logo} alt={useCustomIntl('LOGO_ALT')} />
}
