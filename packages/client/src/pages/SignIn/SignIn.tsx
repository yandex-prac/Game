import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { InputGroup, YandexAuthButton } from './StyledComponents'
import { PATHNAMES, validSignIn, CONTENT_RU } from '@/utils'
import {
  Input,
  Button,
  Link,
  AuthForm,
  AuthLayout,
  AuthPage,
  AuthTitle,
} from '@/components'
import { yandex_login } from '@/image'
import { useCustomIntl, useSnackbar } from '@/hooks'
import {
  useSigninMutation,
  useLazyGetServiceIdQuery,
  useSignupYaMutation,
} from '@/store'
import { WithAuth } from '@/hoc'

const SignIn = () => {
  const navigate = useNavigate()
  const [signin, { isSuccess, isError, isLoading }] = useSigninMutation()
  const [yandexTrigger] = useLazyGetServiceIdQuery()
  const [signupYa] = useSignupYaMutation()
  const params = new URLSearchParams(document.location.search)
  const oAuthCode = params.get('code')
  const redirect_url = encodeURIComponent(window.location.origin)

  useSnackbar({ isSuccess, isError, isLoading })

  useEffect(() => {
    if (oAuthCode) {
      signupYa({
        code: oAuthCode,
        redirect_uri: redirect_url,
      })
        .then(() => {
          localStorage.setItem(CONTENT_RU.IS_LOGIN_IN, 'true')
          navigate(PATHNAMES.MAIN)
        })
        .catch((err: any) => console.log(err))
    }
  }, [oAuthCode])

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      onSubmit: values => signin(values),
      validationSchema: validSignIn(),
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={450}>
        <AuthTitle>{useCustomIntl('ENTER')}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              labelIntl="LOGIN"
              value={values.login}
              type="text"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.login && errors.login ? errors.login : undefined}
            />
          </InputGroup>
          <InputGroup lastGroup>
            <Input
              labelIntl="PASSWORD"
              value={values.password}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />
          </InputGroup>
          <Button type="submit" textIntl="AUTH" />
          <YandexAuthButton
            type="button"
            onClick={() => {
              yandexTrigger({
                redirect_uri: redirect_url,
              }).then((res: any) => {
                if (res.data) {
                  window.location.replace(
                    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${res.data.service_id}&redirect_uri=${redirect_url}`
                  )
                }
              })
            }}>
            <img src={yandex_login} />
          </YandexAuthButton>
          <Link textIntl="NO_ACCOUNT" to={PATHNAMES.SIGNUP} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}

const withAuthSignIn = WithAuth(SignIn)

export { withAuthSignIn as SignIn }
