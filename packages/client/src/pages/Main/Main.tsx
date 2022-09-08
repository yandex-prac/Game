import React, { memo } from 'react'
import { Page, Inner, Content } from './StyledComponents'
import { Sidebar, TopBar } from '../../components'

export const Main = memo(() => {
  return (
    <Page>
      <Sidebar />
      <Inner>
        <TopBar />
        <Content></Content>
      </Inner>
    </Page>
  )
})
