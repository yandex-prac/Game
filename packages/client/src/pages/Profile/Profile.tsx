import React, { memo } from 'react'

import { BaseLayout, ProfileImage } from '../../components'
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
import { useIntl } from 'react-intl'

export const Profile = memo(() => {
  const intl = useIntl()
  return (
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileName>{`${intl.messages.NAME || ''}`}</ProfileName>
        <ProfileUl>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.MAIL || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.LOGIN || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.NAME || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.SURNAME || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.NICKNAME || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
          <ProfileLi>
            <ProfileLabel>{`${intl.messages.PHONE || ''}`}</ProfileLabel>
            <ProfileSpan></ProfileSpan>
          </ProfileLi>
        </ProfileUl>
        <ProfileGroupLink>
          <ProfileLink to={PATHNAMES.PROFILE_EDIT}>
            {`${intl.messages.CHANGE_DATA || ''}`}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.PASSWORD_EDIT}>
            {`${intl.messages.CHANGE_PASSWORD || ''}`}
          </ProfileLink>
          <ProfileLink to={PATHNAMES.SIGNIN}>
            {`${intl.messages.QUIT || ''}`}
          </ProfileLink>
        </ProfileGroupLink>
      </ProfilePage>
    </BaseLayout>
  )
})
