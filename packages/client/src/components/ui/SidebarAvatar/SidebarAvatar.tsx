import React from 'react'
import { Wrapper, Avatar, UserName, UserEmail } from './StyledComponents'
import avatar from '../../../image/avatar.jpg'

export const SidebarAvatar = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="Аватар пользователя" />
      <div>
        <UserName>Patrushva Maria</UserName>
        <UserEmail>patrushva@gmail.com</UserEmail>
      </div>
    </Wrapper>
  )
}
