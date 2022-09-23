import React, { memo } from 'react'
import {
  BaseLayout,
  ProfilePage,
  ProfileImage,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
} from '@/components'
import { PATHNAMES } from '@/utils'
import {
  ProfileName,
  ProfileGroupLink,
  ProfileLink,
  ProfileSpan,
} from './StyledComponents'
import { useCustomIntl } from '@/hooks'
import { DarkModeType } from '@/types'

export const Profile = memo(({ darkMode }: DarkModeType) => {
  return (
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileName darkMode={darkMode}>{useCustomIntl('NAME')}</ProfileName>
        <ProfileUl darkMode={darkMode}>
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
        <ProfileGroupLink darkMode={darkMode}>
          <ProfileLink to={PATHNAMES.PROFILE_EDIT}>
            {useCustomIntl('CHANGE_DATA')}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.PASSWORD_EDIT}>
            {useCustomIntl('CHANGE_PASSWORD')}
          </ProfileLink>
        </ProfileGroupLink>
      </ProfilePage>
    </BaseLayout>
  )
})
