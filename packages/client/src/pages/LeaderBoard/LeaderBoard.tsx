import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES } from '@/utils'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'

export const LeaderBoard = memo(({ darkMode }: DarkModeType) => {
  return (
    <BaseLayout>
      <Content darkMode={darkMode}>
        <Title darkMode={darkMode}>{useCustomIntl('LEADER_BOARD_TITLE')}</Title>
        <LinkToGame to={PATHNAMES.MAIN}>
          {useCustomIntl('LEADER_BOARD_LINK')}
        </LinkToGame>
      </Content>
    </BaseLayout>
  )
})
