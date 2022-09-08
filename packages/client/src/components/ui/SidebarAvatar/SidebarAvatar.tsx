import React from 'react'
import { Wrapper, Avatar, UserName, UserEmail } from './StyledComponents'
import avatar from '../../../image/avatar.jpg'
import { CONTENT } from '../../../utils'

export const SidebarAvatar = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt={CONTENT.AVATAR_USER_ALT} />
      <div>
        <UserName>{CONTENT.USER_NAME_TEST_DATA}</UserName>
        <UserEmail>{CONTENT.USER_EMAIL_TEST_DATA}</UserEmail>
      </div>
    </Wrapper>
  )
}
