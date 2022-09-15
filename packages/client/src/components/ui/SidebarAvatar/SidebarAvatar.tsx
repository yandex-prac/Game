import React, { memo } from 'react'
import { Wrapper, Avatar, UserName, UserEmail } from './StyledComponents'
import avatar from '@/image/avatar.jpg'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'

export const SidebarAvatar = memo(({ darkMode }: DarkModeType) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Avatar src={avatar} alt={useCustomIntl('AVATAR_USER_ALT')} />
      <div>
        <UserName darkMode={darkMode}>
          {useCustomIntl('USER_NAME_TEST_DATA')}
        </UserName>
        <UserEmail>{useCustomIntl('USER_EMAIL_TEST_DATA')}</UserEmail>
      </div>
    </Wrapper>
  )
})
