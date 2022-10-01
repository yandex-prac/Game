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
import { useGetUserInfoQuery } from '@/store'

export const Profile = memo(({ darkMode }: DarkModeType) => {
  const { data, error, isSuccess } = useGetUserInfoQuery(false)

  return (
    <BaseLayout>
      {isSuccess && (
        <>
          <ProfilePage darkMode={darkMode}>
            <ProfileImage />
            <ProfileName darkMode={darkMode}>
              {useCustomIntl('NAME')}
            </ProfileName>
            <ProfileUl>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('MAIL')}</ProfileLabel>
                <ProfileSpan>{data.email}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('LOGIN')}</ProfileLabel>
                <ProfileSpan>{data.login}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('NAME')}</ProfileLabel>
                <ProfileSpan>{data.first_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('SURNAME')}</ProfileLabel>
                <ProfileSpan>{data.second_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('NICKNAME')}</ProfileLabel>
                <ProfileSpan>{data.display_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('PHONE')}</ProfileLabel>
                <ProfileSpan>{data.phone}</ProfileSpan>
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
        </>
      )}
    </BaseLayout>
  )
})
