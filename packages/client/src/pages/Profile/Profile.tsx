import React, { memo } from 'react'

import { BaseLayout, ProfileImage } from '@/components'
import { PATHNAMES } from '../../utils'
import {
  ProfilePage,
  ProfileName,
  ProfileGroupLink,
  ProfileLink,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileSpan,
} from './StyledComponents'
import { useCustomIntl } from '@/hooks'

export const Profile = memo(() => {
  return (
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileName>{useCustomIntl('NAME')}</ProfileName>
        <ProfileUl>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('MAIL')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('LOGIN')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('NAME')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('SURNAME')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('NICKNAME')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{useCustomIntl('PHONE')}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
        </ProfileUl>
        <ProfileGroupLink>
          <ProfileLink to={PATHNAMES.PROFILE_EDIT}>
            {useCustomIntl('CHANGE_DATA')}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.PASSWORD_EDIT}>
            {useCustomIntl('CHANGE_PASSWORD')}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.SIGNIN}>
            {useCustomIntl('QUIT')}
          </ProfileLink>
        </ProfileGroupLink>
      </ProfilePage>
    </BaseLayout>
  )
})
