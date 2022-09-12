import React, { memo } from 'react'
import { Wrapper, Avatar, UserName, UserEmail } from './StyledComponents'
import avatar from '../../../image/avatar.jpg'
import { CONTENT } from '../../../utils'
import { DarkModeType } from '../../../types'

export const SidebarAvatar = memo(({ darkMode }: DarkModeType) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Avatar src={avatar} alt={CONTENT.AVATAR_USER_ALT} />
      <div>
        <UserName darkMode={darkMode}>{CONTENT.USER_NAME_TEST_DATA}</UserName>
        <UserEmail>{CONTENT.USER_EMAIL_TEST_DATA}</UserEmail>
      </div>
    </Wrapper>
  )
})
