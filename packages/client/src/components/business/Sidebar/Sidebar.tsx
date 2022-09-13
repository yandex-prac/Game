import React from 'react'
import { Container, Img } from './StyledComponents'
import logo from '@/image/logo.svg'
import { SidebarAvatar, Menu } from '@/components'
import { SidebarProps } from './types'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'

export const Sidebar = ({
  darkMode,
  onChangeTheme,
}: SidebarProps & DarkModeType) => {
  return (
    <Container darkMode={darkMode}>
      <Img src={logo} alt={useCustomIntl('LOGO_ALT')} />
      <SidebarAvatar darkMode={darkMode} />
      <Menu darkMode={darkMode} onChangeTheme={onChangeTheme} />
    </Container>
  )
}
