import React from 'react'
import { useFormik } from 'formik'
import { Input, Button, Link } from '../../components'
import { SignInProps } from './types'
import * as yup from 'yup'
import { InputGroup } from './StyledComponents'
import { config } from '../../utils/constants'
import { AuthForm, AuthLayout, AuthPage, AuthTitle } from '../../components/styledComponents/Auth'

export const SignIn = ({ href, title, authText, regText }: SignInProps) => {
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
        login: yup.string().required(config.isRequiredText),
        password: yup.string().required(config.isRequiredText),
      }),
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={ 450 }>
        <AuthTitle className="title">{title}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              label="Логин"
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
              label="Пароль"
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
          <Button type="submit" text={authText} />
          <Link to={href} text={regText} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
