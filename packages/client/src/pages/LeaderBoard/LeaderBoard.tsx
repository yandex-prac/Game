import React, { memo } from 'react'
import { Page, Inner, Content, Title, LinkToGame } from './StyledComponents'
import { Sidebar, TopBar } from '../../components'

export const LeaderBoard = memo(() => {
  return (
    <Page>
      <Sidebar />
      <Inner>
        <TopBar />
        <Content>
          <Title>Лидеров не найдено. Будь первывым 😉</Title>
          <LinkToGame to="/main">Новая игра</LinkToGame>
        </Content>
      </Inner>
    </Page>
  )
})
