import React from 'react'
import { useFormik } from 'formik'
import {
  Input,
  Button,
  AuthForm,
  AuthLayout,
  AuthLink,
  AuthPage,
  AuthTitle,
} from '@/components'
import { PATHNAMES, validSignUp as validationSchema } from '@/utils'
import { UserAPI } from '@/services'
import { useCustomIntl } from '@/hooks'

export const SignUp = () => {
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
      onSubmit: (values, actions) => {
        UserAPI.signup(values).catch(error => {
          if (error.response.data.reason === 'Login already exists') {
            actions.setErrors({
              login: 'Пользователь с таким логином уже зарегистрирован',
            })
          }
        })
      },
      validationSchema,
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={615}>
        <AuthTitle>{useCustomIntl('REGISTER')}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            label={'POST'}
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : undefined}
          />
          <Input
            label={'LOGIN'}
            value={values.login}
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.login && errors.login ? errors.login : undefined}
          />
          <Input
            label={'NAME'}
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
            label={'SURNAME'}
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
            label={'PHONE'}
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : undefined}
          />
          <Input
            label={'PASSWORD'}
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
            text={useCustomIntl('MAKE_REGISTER')}
            margintop={114}
          />
          <AuthLink text={useCustomIntl('TO_LOGIN')} to={PATHNAMES.SIGNIN} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
