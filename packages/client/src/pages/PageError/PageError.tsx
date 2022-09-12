import React, { memo, useContext } from 'react'
import { Page, Title, SubTitle, LinkWrap } from './StyledComponents'
import type { PageErrorProps } from './types'
import { ThemeContext } from '../../context'
import { Logo } from '../../components/'
import { CONTENT } from '../../utils'

export const PageError = memo(({ title, subtitle, href }: PageErrorProps) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <Page darkMode={darkMode}>
      <Logo />
      <Title darkMode={darkMode}>{title}</Title>
      <SubTitle darkMode={darkMode}>{subtitle}</SubTitle>
      <LinkWrap to={href}>{CONTENT.PAGE_ERROR_LINK}</LinkWrap>
    </Page>
  )
})
