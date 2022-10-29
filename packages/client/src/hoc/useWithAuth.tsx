import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHNAMES, CONTENT_RU } from '@/utils'
import { useLazyGetUserInfoQuery } from '@/store'

export const WithAuth = (Component: any) => (props: any) => {
  const navigate = useNavigate()
  const [getUser, { isSuccess }] = useLazyGetUserInfoQuery()

  useEffect(() => {
    if (localStorage.getItem(CONTENT_RU.IS_LOGIN_IN)) {
      getUser(undefined)
    }
  }, [isSuccess])

  const isLogout =
    !localStorage.getItem(CONTENT_RU.IS_LOGIN_IN) &&
    window.location.pathname !== PATHNAMES.SIGNIN &&
    window.location.pathname !== PATHNAMES.SIGNUP

  const isLogin =
    localStorage.getItem(CONTENT_RU.IS_LOGIN_IN) &&
    !isSuccess &&
    (window.location.pathname == PATHNAMES.SIGNIN ||
      window.location.pathname == PATHNAMES.SIGNUP)

  useEffect(() => {
    isLogout && navigate(PATHNAMES.SIGNIN)
    isLogin && navigate(PATHNAMES.MAIN)
  }, [])

  return <Component {...props} />
}
