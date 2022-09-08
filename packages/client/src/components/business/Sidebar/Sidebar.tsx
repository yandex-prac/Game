import react from 'react'
import { Container, Img } from './StyledComponents'
import logo from '../../../image/logo.svg'
import { SidebarAvatar, Menu } from '../../'
import { CONTENT } from '../../../utils'

export const Sidebar = () => {
  return (
    <Container>
      <Img src={logo} alt={CONTENT.LOGO_ALT} />
      <SidebarAvatar />
      <Menu />
    </Container>
  )
}
