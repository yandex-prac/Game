import React from 'react'
import { Container, Img } from './StyledComponents'
import logo from '@/image/logo.svg'
import { SidebarAvatar, Menu } from '@/components'
import { CONTENT } from '@/utils'
import { SidebarProps } from './types'
import { DarkModeType } from '@/types'

export const Sidebar = ({
  darkMode,
  onChangeTheme,
}: SidebarProps & DarkModeType) => {
  return (
    <Container darkMode={darkMode}>
      <Img src={logo} alt={CONTENT.LOGO_ALT} />
      <SidebarAvatar darkMode={darkMode} />
      <Menu darkMode={darkMode} onChangeTheme={onChangeTheme} />
    </Container>
  )
}
