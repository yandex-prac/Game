import React, { memo, useEffect } from 'react'
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
  ProfileLoading,
} from './StyledComponents'
import { useCustomIntl } from '@/hooks'
import { DarkModeType } from '@/types'
import { WithAuth } from '@/hoc'
import { useGetUserInfoMutation } from '@/store'

const Profile = memo(({ darkMode }: DarkModeType) => {
  const [trigger, { data, isSuccess, isLoading }] = useGetUserInfoMutation()

  useEffect(() => {
    trigger(null)
  }, [])

  if (isLoading) {
    return <ProfileLoading>Loading...</ProfileLoading>
  }

  return (
    <BaseLayout>
      {isSuccess && (
        <>
          <ProfilePage darkMode={darkMode}>
            <ProfileImage imgLink={data?.avatar} />
            <ProfileName darkMode={darkMode}>
              {useCustomIntl('NAME')}
            </ProfileName>
            <ProfileUl>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('MAIL')}</ProfileLabel>
                <ProfileSpan>{data?.email}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('LOGIN')}</ProfileLabel>
                <ProfileSpan>{data?.login}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('NAME')}</ProfileLabel>
                <ProfileSpan>{data?.first_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('SURNAME')}</ProfileLabel>
                <ProfileSpan>{data?.second_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('NICKNAME')}</ProfileLabel>
                <ProfileSpan>{data?.display_name}</ProfileSpan>
              </ProfileLi>
              <ProfileLi>
                <ProfileLabel>{useCustomIntl('PHONE')}</ProfileLabel>
                <ProfileSpan>{data?.phone}</ProfileSpan>
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

const withProfile = WithAuth(Profile)

export { withProfile as Profile }
