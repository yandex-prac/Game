import React from 'react'
import { useFormik } from 'formik'
import {
  Input,
  Button,
  AuthForm,
  AuthLayout,
  Link,
  AuthPage,
  AuthTitle,
} from '@/components'
import { PATHNAMES, validSignUp } from '@/utils'
import { useCustomIntl, useSnackbar } from '@/hooks'
import { useSignupMutation } from '@/store/services/authService'

export const SignUp = () => {
  const [signup, { isSuccess, isError, isLoading }] = useSignupMutation()

  useSnackbar({ isSuccess, isError, isLoading })

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        login: '',
        first_name: '',
        second_name: '',
        phone: '',
        password: '',
      },
      onSubmit: values => signup(values),
      validationSchema: validSignUp(),
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={615}>
        <AuthTitle>{useCustomIntl('REGISTER')}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            labelIntl="POST"
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : undefined}
          />
          <Input
            labelIntl="LOGIN"
            value={values.login}
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.login && errors.login ? errors.login : undefined}
          />
          <Input
            labelIntl="NAME"
            value={values.first_name}
            name="first_name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.first_name && errors.first_name
                ? errors.first_name
                : undefined
            }
          />
          <Input
            labelIntl="SURNAME"
            value={values.second_name}
            name="second_name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.second_name && errors.second_name
                ? errors.second_name
                : undefined
            }
          />
          <Input
            labelIntl="PHONE"
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : undefined}
          />
          <Input
            labelIntl="PASSWORD"
            value={values.password}
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.password && errors.password ? errors.password : undefined
            }
          />
          <Button
            type="submit"
            textIntl="MAKE_REGISTER"
            style={{ marginTop: '114px' }}
          />
          <Link textIntl="TO_LOGIN" to={PATHNAMES.SIGNIN} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
