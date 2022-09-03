import React, { useContext } from 'react'
import { Page, Title, SubTitle, LinkWrap } from './StyledComponents'
import type { PageErrorProps } from './types'
import { ThemeContext } from '../../context'
import { Logo } from '../../components/'

export const PageError = ({ title, subtitle, href }: PageErrorProps) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <Page darkMode={darkMode}>
      <Logo />
      <Title darkMode={darkMode}>{title}</Title>
      <SubTitle darkMode={darkMode}>{subtitle}</SubTitle>
      <LinkWrap to={href}>Назад</LinkWrap>
    </Page>
  )
}
