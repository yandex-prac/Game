import React from 'react'
import { useSignupQuery } from '@/store'
import { PATHNAMES } from '@/utils'

const OAuthRedirectPage = () => {
  const { data, isLoading } = useSignupQuery({
    code: '',
    redirect_uri: PATHNAMES.MAIN,
  })

  if (isLoading) {
    return <div>Redirect...</div>
  } else {
    window.location.replace(window.location.origin + PATHNAMES.MAIN)
  }
}

export { OAuthRedirectPage }
