import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import { Content, Title, LinkToGame } from './StyledComponents'
import { PATHNAMES, CONTENT } from '@/utils'
import { DarkModeType } from '@/types'

export const LeaderBoard = memo(({ darkMode }: DarkModeType) => {
  return (
    <BaseLayout>
      <Content darkMode={darkMode}>
        <Title darkMode={darkMode}>{CONTENT.LEADER_BOARD_TITLE}</Title>
        <LinkToGame to={PATHNAMES.MAIN}>{CONTENT.LEADER_BOARD_LINK}</LinkToGame>
      </Content>
    </BaseLayout>
  )
})
