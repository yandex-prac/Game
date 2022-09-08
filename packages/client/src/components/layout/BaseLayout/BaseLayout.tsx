import React from 'react'
import { Page, Inner } from './StyledComponents'
import { Sidebar, TopBar } from '../..'
import { BaseLayoutProps } from './types'

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Page>
      <Sidebar />
      <Inner>
        <TopBar />
        {children}
      </Inner>
    </Page>
  )
}
