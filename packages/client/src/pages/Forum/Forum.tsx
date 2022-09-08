import React, { memo } from 'react'
import { BaseLayout } from '../../components'
import { Content } from './StyledComponents'

export const Forum = memo(() => {
  return (
    <BaseLayout>
      <Content></Content>
    </BaseLayout>
  )
})
