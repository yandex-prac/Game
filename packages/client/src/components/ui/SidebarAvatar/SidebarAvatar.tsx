import React, { memo, useEffect } from 'react'
import { Wrapper, Avatar, UserName, UserEmail } from './StyledComponents'
import avatar from '@/image/avatar.png'
import { DarkModeType } from '@/types'
import { useCustomIntl } from '@/hooks'
import { useGetUserInfoMutation } from '@/store'
import { API } from '@/utils'

export const SidebarAvatar = memo(({ darkMode }: DarkModeType) => {
  const [trigger, { data, isSuccess }] = useGetUserInfoMutation()

  useEffect(() => {
    trigger(false)
  }, [])

  return (
    <Wrapper darkMode={darkMode}>
      {isSuccess && (
        <>
          <Avatar
            src={
              data?.avatar
                ? API.API_BASE_URL + API.RESOURCES + data.avatar
                : avatar
            }
            alt={useCustomIntl('AVATAR_USER_ALT')}
          />
          <div>
            <UserName darkMode={darkMode}>
              {`${data?.first_name} ${data?.second_name}`}
            </UserName>
            <UserEmail>{data!.email}</UserEmail>
          </div>
        </>
      )}
    </Wrapper>
  )
})
