import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { InputGroup } from './StyledComponents'
import { CONTENT, PATHNAMES } from '@/utils'
import {
  Input,
  Button,
  Link,
  AuthForm,
  AuthLayout,
  AuthPage,
  AuthTitle,
} from '@/components'

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
      validationSchema: yup.object({
        login: yup.string().required(CONTENT.IS_REQUIRED_TEXT),
        password: yup.string().required(CONTENT.IS_REQUIRED_TEXT),
      }),
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={450}>
        <AuthTitle>{CONTENT.ENTER}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              label={CONTENT.LOGIN}
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
              label={CONTENT.PASSWORD}
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
          <Button type="submit" text={CONTENT.AUTH} />
          <Link to={PATHNAMES.SIGNUP} text={CONTENT.NO_ACCOUNT} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
