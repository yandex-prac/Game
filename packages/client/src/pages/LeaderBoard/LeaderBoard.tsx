import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES } from '@/utils'
import { DarkModeType } from '@/types'
import { useIntl } from 'react-intl'

export const LeaderBoard = memo(({ darkMode }: DarkModeType) => {
  const intl = useIntl()
  return (
    <BaseLayout>
      <Content darkMode={darkMode}>
        <Title darkMode={darkMode}>
          {`${intl.messages.LEADER_BOARD_TITLE || ''}`}
        </Title>
        <LinkToGame to={PATHNAMES.MAIN}>
          {`${intl.messages.LEADER_BOARD_LINK || ''}`}
        </LinkToGame>
      </Content>
    </BaseLayout>
  )
})
