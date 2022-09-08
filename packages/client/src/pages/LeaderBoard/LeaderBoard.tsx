import React, { memo } from 'react'
import { BaseLayout } from '../../components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES, CONTENT } from '../../utils'
import { LeaderBoardProps } from './types'

export const LeaderBoard = memo(({ darkMode }: LeaderBoardProps) => {
  return (
    <BaseLayout>
      <Content>
        <Title darkMode={darkMode}>{CONTENT.LEADER_BOARD_TITLE}</Title>
        <LinkToGame darkMode={darkMode} to={PATHNAMES.MAIN}>
          {CONTENT.LEADER_BOARD_LINK}
        </LinkToGame>
      </Content>
    </BaseLayout>
  )
})
