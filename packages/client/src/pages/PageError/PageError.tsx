import React, { memo, useContext } from 'react'
import { Page, Title, SubTitle, LinkWrap } from './StyledComponents'
import type { PageErrorProps } from './types'
import { ThemeContext } from '@/context'
import { Logo } from '@/components'
import { useCustomIntl } from '@/hooks'

export const PageError = memo(({ title, subtitle, href }: PageErrorProps) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Page darkMode={darkMode}>
      <Logo />
      <Title darkMode={darkMode}>{useCustomIntl(title)}</Title>
      <SubTitle darkMode={darkMode}>{useCustomIntl(subtitle)}</SubTitle>
      <LinkWrap to={href}>{useCustomIntl('PAGE_ERROR_LINK')}</LinkWrap>
    </Page>
  )
})
