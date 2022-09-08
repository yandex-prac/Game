import React, { memo } from 'react'
import { BaseLayout } from '../../components'
import { Content } from './StyledComponents'

export const Profile = memo(() => {
  return (
    <BaseLayout>
      <Content></Content>
    </BaseLayout>
  )
})
