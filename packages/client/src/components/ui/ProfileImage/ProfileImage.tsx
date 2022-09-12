import React from 'react'
import profileImage from '../../../image/avatar.jpg'
import { Img } from './StyledComponents'

export const ProfileImage = () => {
  return <Img src={profileImage} alt="Аватарка" />
}
