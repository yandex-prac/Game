import React, { memo } from 'react'
import { BaseLayout } from '../../components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES, CONTENT } from '../../utils'

export const LeaderBoard = memo(() => {
  return (
    <BaseLayout>
      <Content>
        <Title>{CONTENT.LEADER_BOARD_TITLE}</Title>
        <LinkToGame to={PATHNAMES.MAIN}>{CONTENT.LEADER_BOARD_LINK}</LinkToGame>
      </Content>
    </BaseLayout>
  )
})
