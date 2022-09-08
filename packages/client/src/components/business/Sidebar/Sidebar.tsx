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
    <Container darkMode={darkMode}>
      <Img src={logo} alt={CONTENT.LOGO_ALT} />
      <SidebarAvatar darkMode={darkMode} />
      <Menu darkMode={darkMode} onChangeTheme={handleChangeTheme} />
    </Container>
  )
}
