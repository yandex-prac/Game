import React, { memo } from 'react'
import { Page } from './StyledComponents'
import { Sidebar, TopBar } from '../../components'

export const Forum = memo(() => {
  return (
    <Page>
      <Sidebar />
      <TopBar />
    </Page>
  )
})
