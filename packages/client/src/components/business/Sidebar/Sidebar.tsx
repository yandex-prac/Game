import React from 'react'
import { Container, Img } from './StyledComponents'
import logo from '@/image/logo.svg'
import { SidebarAvatar, Menu } from '@/components'
import { SidebarProps } from './types'
import { DarkModeType } from '@/types'
import { useIntl } from 'react-intl'

export const Sidebar = ({
  darkMode,
  onChangeTheme,
}: SidebarProps & DarkModeType) => {
  const intl = useIntl()
  return (
    <Container darkMode={darkMode}>
      <Img src={logo} alt={`${intl.messages.LOGO_ALT || ''}`} />
      <SidebarAvatar darkMode={darkMode} />
      <Menu darkMode={darkMode} onChangeTheme={onChangeTheme} />
    </Container>
  )
}
