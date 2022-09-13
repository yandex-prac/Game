import React, { memo, useContext } from 'react'
import { Page, Title, SubTitle, LinkWrap } from './StyledComponents'
import type { PageErrorProps } from './types'
import { ThemeContext } from '@/context'
import { Logo } from '@/components'
import { useIntl } from 'react-intl'

export const PageError = memo(({ title, subtitle, href }: PageErrorProps) => {
  const intl = useIntl()
  const { darkMode } = useContext(ThemeContext)
  return (
    <Page darkMode={darkMode}>
      <Logo />
      <Title darkMode={darkMode}>{`${intl.messages[title] || ''}`}</Title>
      <SubTitle darkMode={darkMode}>
        {`${intl.messages[subtitle] || ''}`}
      </SubTitle>
      <LinkWrap to={href}>
        {`${intl.messages['PAGE_ERROR_LINK'] || ''}`}
      </LinkWrap>
    </Page>
  )
})
