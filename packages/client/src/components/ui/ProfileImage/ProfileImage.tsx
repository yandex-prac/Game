import React from 'react'
import profileImage from '../../../image/avatar.jpg'
import { Img } from './StyledComponents'
import { useCustomIntl } from '@/hooks'

export const ProfileImage = () => {
  return <Img src={profileImage} alt={useCustomIntl('AVATAR_USER_ALT')} />
}
