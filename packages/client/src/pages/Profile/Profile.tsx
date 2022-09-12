import React, { memo } from 'react'
import { BaseLayout } from '../../components'
import { ProfileImage } from '../../components'
import { PATHNAMES, CONTENT } from '../../utils'
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

export const Profile = memo(() => {
  return (
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileName>Имя</ProfileName>
        <ProfileUl>
          <ProfileLi>
            <ProfileLabel>{CONTENT.MAIL}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{CONTENT.LOGIN}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{CONTENT.NAME}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{CONTENT.SURNAME}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{CONTENT.NICKNAME}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{CONTENT.PHONE}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
        </ProfileUl>
        <ProfileGroupLink>
          <ProfileLink to={PATHNAMES.PROFILE_EDIT}>
            {CONTENT.CHANGE_DATA}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.PASSWORD_EDIT}>
            {CONTENT.CHANGE_PASSWORD}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.SIGNIN}>{CONTENT.QUIT}</ProfileLink>
        </ProfileGroupLink>
      </ProfilePage>
    </BaseLayout>
  )
})
