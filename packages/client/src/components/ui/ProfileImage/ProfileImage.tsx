import React from 'react'
import { avatar } from '@/image'
import { Img } from './StyledComponents'
import { useCustomIntl } from '@/hooks'
import { API } from '@/utils'
import { ProfileImageProps } from './types'

export const ProfileImage = ({ imgLink }: ProfileImageProps) => {
  return (
    <Img
      src={imgLink ? API.RESOURCES + imgLink : avatar}
      alt={useCustomIntl('AVATAR_USER_ALT')}
    />
  )
}
