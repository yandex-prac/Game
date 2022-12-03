import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PATHNAMES, CONTENT_RU } from '@/utils'
import { useLazyGetUserInfoHocQuery } from '@/store'

export const WithAuth = (Component: any) => (props: any) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [getUser, { isSuccess }] = useLazyGetUserInfoHocQuery()

  useEffect(() => {
    if (!localStorage.getItem(CONTENT_RU.IS_LOGIN_IN)) {
      getUser(undefined)
    }
  }, [])

  if (typeof window !== 'undefined') {
    const isLogout =
      !localStorage.getItem(CONTENT_RU.IS_LOGIN_IN) &&
      location.pathname !== PATHNAMES.SIGNIN &&
      location.pathname !== PATHNAMES.SIGNUP

    const isLogin =
      localStorage.getItem(CONTENT_RU.IS_LOGIN_IN) &&
      !isSuccess &&
      (location.pathname == PATHNAMES.SIGNIN ||
        location.pathname == PATHNAMES.SIGNUP)

    useEffect(() => {
      isLogout && navigate(PATHNAMES.SIGNIN)
      isLogin && navigate(PATHNAMES.MAIN)
    }, [])

    if (isLogout || isLogin) {
      return <></>
    }
  }

  return <Component {...props} />
}
