import React from 'react'
import profileImage from '../../../image/avatar.jpg'
import { Img } from './StyledComponents'
import { CONTENT } from '../../../utils'

export const ProfileImage = () => {
  return <Img src={profileImage} alt={CONTENT.AVATAR_USER_ALT} />
}
