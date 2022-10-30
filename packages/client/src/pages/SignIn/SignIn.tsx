import React from 'react'
import { useFormik } from 'formik'
import { InputGroup, YandexAuthButton } from './StyledComponents'
import { PATHNAMES, validSignIn } from '@/utils'
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
import { useSigninMutation, useLazyGetServiceIdQuery } from '@/store'
import { WithAuth } from '@/hoc'

const SignIn = () => {
  const [signin, { isSuccess, isError, isLoading }] = useSigninMutation()
  const [yandexTrigger] = useLazyGetServiceIdQuery()

  useSnackbar({ isSuccess, isError, isLoading })

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
                redirect_uri: window.location.origin + PATHNAMES.OAUTH_REDIRECT,
              }).then(res => {
                if (res.data) {
                  window.location.replace(
                    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${
                      res.data.service_id
                    }&redirect_uri=${
                      window.location.origin + PATHNAMES.OAUTH_REDIRECT
                    }`
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
