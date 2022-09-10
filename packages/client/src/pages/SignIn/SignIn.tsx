import React from 'react'
import { useFormik } from 'formik'
import { Input, Button, Link } from '../../components'
import * as yup from 'yup'
import {
  LoginPage,
  InputGroup,
  Layout,
  LoginForm,
  Title,
} from './StyledComponents'
import { config } from '../../utils/constants'

export const SignIn = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      onSubmit: (values: any) => console.log(values),
      validationSchema: yup.object({
        login: yup.string().required(config.isRequiredText),
        password: yup.string().required(config.isRequiredText),
      }),
    })

  return (
    <LoginPage>
      <Layout>
        <Title className="title">Вход</Title>
        <LoginForm onSubmit={handleSubmit}>
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
          <Button type="submit" text="Авторизоваться" />
          <Link to="/sign-up" text="Нет аккаунта?" />
        </LoginForm>
      </Layout>
    </LoginPage>
  )
}
