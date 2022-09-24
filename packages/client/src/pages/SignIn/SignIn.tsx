import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { InputGroup } from './StyledComponents'
import { PATHNAMES, validSignIn, CONTENT_RU, TYPE } from '@/utils'
import {
  Input,
  Button,
  Link,
  AuthForm,
  AuthLayout,
  AuthPage,
  AuthTitle,
} from '@/components'
import { useCustomIntl, useAppDispatch } from '@/hooks'
import { useSigninMutation } from '@/store/services/authService'
import { setLoginIn } from '@/store/reducers/authSlice'
import { setSnackbar } from '@/store/reducers/snackbarSlice'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [signin, { isSuccess, isError, isLoading }] = useSigninMutation()

  useEffect(() => {
    console.log(isSuccess)
    if (isSuccess) {
      dispatch(setLoginIn(true))
      dispatch(
        setSnackbar({
          isOpen: true,
          message: CONTENT_RU.LOGIN_SUCCESS,
          type: TYPE.SUCCESS,
        })
      )
      navigate('/main')
    }
    if (isError) {
      dispatch(
        setSnackbar({
          isOpen: true,
          message: CONTENT_RU.LOGIN_ERROR,
          type: TYPE.ERROR,
        })
      )
    }
  }, [isLoading])

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      onSubmit: values => {
        signin(values)
      },
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
          <Link textIntl="NO_ACCOUNT" to={PATHNAMES.SIGNUP} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
