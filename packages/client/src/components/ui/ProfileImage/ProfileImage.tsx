import React from 'react'
import profileImage from '../../../image/avatar.png'
import { Img } from './StyledComponents'
import { useCustomIntl } from '@/hooks'
import { API } from '@/utils'

export const ProfileImage = ({ imgLink }: { imgLink?: string }) => {
  return (
    <Img
      src={imgLink ? API.API_BASE_URL + API.RESOURCES + imgLink : profileImage}
      alt={useCustomIntl('AVATAR_USER_ALT')}
    />
  )
}
