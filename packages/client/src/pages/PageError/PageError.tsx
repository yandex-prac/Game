import React, { useContext } from 'react'
import { Page, Img, Title, SubTitle, LinkWrap } from './StyledComponents'
import logo from '../../image/logo.svg'
import type { PageErrorProps } from './types'
import { ThemeContext } from '../../context'

export const PageError = ({ title, subtitle, href }: PageErrorProps) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <Page darkMode={darkMode}>
      <Img src={logo} alt="Логотип игры pacman" />
      <Title darkMode={darkMode}>{title}</Title>
      <SubTitle darkMode={darkMode}>{subtitle}</SubTitle>
      <LinkWrap darkMode={darkMode} to={href}>
        Назад
      </LinkWrap>
    </Page>
  )
}
