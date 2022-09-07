import react from 'react'
import { Container, Img } from './StyledComponents'
import logo from '../../../image/logo.svg'
import { SidebarAvatar, Menu } from '../../'

export const Sidebar = () => {
  return (
    <Container>
      <Img src={logo} alt="Логотип игры pacman" />
      <SidebarAvatar />
      <Menu />
    </Container>
  )
}
