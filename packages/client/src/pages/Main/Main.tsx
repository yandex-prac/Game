import React, { memo } from 'react'
import { Page } from './StyledComponents'
import { Sidebar, TopBar } from '../../components'

export const Main = memo(() => {
  return (
    <Page>
      <Sidebar />
      <TopBar />
    </Page>
  )
})
