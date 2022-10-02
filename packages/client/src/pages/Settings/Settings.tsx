import React, { memo } from 'react'
import { BaseLayout } from '@/components'
import { WithAuth } from '@/hoc'

const Settings = memo(() => {
  return (
    <BaseLayout>
      <p>Settings</p>
    </BaseLayout>
  )
})

const withSettings = WithAuth(Settings)

export { withSettings as Settings }
