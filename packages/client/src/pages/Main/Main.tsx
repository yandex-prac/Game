import React, { memo } from 'react'
import { Page } from './StyledComponents'
import { Sidebar } from '../../components'

export const Main = memo(() => {
  return (
    <Page>
      <Sidebar />
    </Page>
  )
})
