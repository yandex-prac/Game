import React, { memo } from 'react'
import { Page, Inner, Content, Title, LinkToGame } from './StyledComponents'
import { Sidebar, TopBar } from '../../components'
import { PATHNAMES, CONTENT } from '../../utils'

export const LeaderBoard = memo(() => {
  return (
    <Page>
      <Sidebar />
      <Inner>
        <TopBar />
        <Content>
          <Title>{CONTENT.LEADER_BOARD_TITLE}</Title>
          <LinkToGame to={PATHNAMES.MAIN}>
            {CONTENT.LEADER_BOARD_LINK}
          </LinkToGame>
        </Content>
      </Inner>
    </Page>
  )
})
