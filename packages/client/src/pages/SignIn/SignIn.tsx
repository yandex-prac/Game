import React from 'react'
import { useFormik } from 'formik'
import { InputGroup } from './StyledComponents'
import { PATHNAMES, validSignIn as validationSchema } from '@/utils'
import {
  Input,
  Button,
  Link,
  AuthForm,
  AuthLayout,
  AuthPage,
  AuthTitle,
} from '@/components'
import { useCustomIntl } from '@/hooks'

export const SignIn = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      onSubmit: values => {
        alert(values)
      },
      validationSchema,
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={450}>
        <AuthTitle>{useCustomIntl('ENTER')}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              label={'LOGIN'}
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
              label={'PASSWORD'}
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
          <Button type="submit" text={useCustomIntl('AUTH')} />
          <Link text={useCustomIntl('NO_ACCOUNT')} to={PATHNAMES.SIGNUP} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
