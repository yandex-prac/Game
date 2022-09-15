import React from 'react'
import { useFormik } from 'formik'
import {
  Input,
  AuthBtn,
  AuthForm,
  AuthLayout,
  AuthLink,
  AuthPage,
  AuthTitle,
} from '@/components'
import { CONTENT, PATHNAMES, validSignUp as validationSchema } from '@/utils'

export function SignUp() {
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
      onSubmit: (values, actions) => console.log(values),
      validationSchema,
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={615}>
        <AuthTitle>{CONTENT.REGISTER}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            label={CONTENT.POST}
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : undefined}
          />
          <Input
            label={CONTENT.LOGIN}
            value={values.login}
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.login && errors.login ? errors.login : undefined}
          />
          <Input
            label={CONTENT.NAME}
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
            label={CONTENT.SURNAME}
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
            label={CONTENT.PHONE}
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : undefined}
          />
          <Input
            label={CONTENT.PASSWORD}
            value={values.password}
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.password && errors.password ? errors.password : undefined
            }
          />
          <AuthBtn type="submit" text={CONTENT.MAKE_REGISTER} margintop={114} />
          <AuthLink text={CONTENT.TO_LOGIN} to={PATHNAMES.SIGNIN} />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
