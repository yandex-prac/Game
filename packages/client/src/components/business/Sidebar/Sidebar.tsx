import react, { useContext } from 'react'
import { Container, Img } from './StyledComponents'
import logo from '../../../image/logo.svg'
import { SidebarAvatar, Menu } from '../../'
import { CONTENT } from '../../../utils'
import { ThemeContext } from '../../../context'

export const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleChangeTheme = () => setDarkMode(!darkMode)

  return (
    <Container>
      <Img src={logo} alt={CONTENT.LOGO_ALT} />
      <SidebarAvatar />
      <Menu onChangeTheme={handleChangeTheme} />
    </Container>
  )
}
