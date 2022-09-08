import React, { useContext } from 'react'
import { Page, Inner, Main } from './StyledComponents'
import { Sidebar, TopBar } from '../..'
import { BaseLayoutProps } from './types'
import { ThemeContext } from '../../../context'

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleChangeTheme = () => setDarkMode(!darkMode)

  return (
    <Page>
      <Sidebar darkMode={darkMode} onChangeTheme={handleChangeTheme} />
      <Inner>
        <TopBar darkMode={darkMode} />
        <Main>{children}</Main>
      </Inner>
    </Page>
  )
}
