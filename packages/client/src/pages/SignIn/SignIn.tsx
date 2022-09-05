import React from 'react'
import { useFormik } from 'formik'
import { Input, Button, Link } from '../../components'
import * as yup from 'yup'
import { LoginPage, InputGroup, Layout, LoginForm, Title } from './styled'

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
        login: yup.string().required('Поле не должно быть пустым'),
        password: yup.string().required('Поле не должно быть пустым'),
      }),
    })

  console.log(values)
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
          <Button type="submit">Авторизоваться</Button>
          <Link auth>Нет аккаунта?</Link>
        </LoginForm>
      </Layout>
    </LoginPage>
  )
}
