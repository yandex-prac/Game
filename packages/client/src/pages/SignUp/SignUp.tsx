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
} from '../../components'
import {
  CONTENT,
  PATHNAMES,
  validSignUp as validationSchema,
} from '../../utils'

export function SignUp() {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        post: '',
        login: '',
        name: '',
        surname: '',
        phone: '',
        password: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
      },
      validationSchema,
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={615}>
        <AuthTitle>{CONTENT.REGISTER}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            label={CONTENT.POST}
            value={values.post}
            name="post"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.post && errors.post ? errors.post : undefined}
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
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : undefined}
          />
          <Input
            label={CONTENT.SURNAME}
            value={values.surname}
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.surname && errors.surname ? errors.surname : undefined
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
