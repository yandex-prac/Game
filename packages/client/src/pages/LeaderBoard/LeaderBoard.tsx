import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES } from '@/utils'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'
import { WithAuth } from '@/hoc'

const LeaderBoard = memo(({ darkMode }: DarkModeType) => {
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

const withLeaderBoard = WithAuth(LeaderBoard)

export { withLeaderBoard as LeaderBoard }
