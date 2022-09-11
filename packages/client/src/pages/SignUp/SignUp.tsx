import React from 'react'
import { Input } from '../../components'
import { useFormik } from 'formik'
import {
  AuthBtn,
  AuthForm,
  AuthLayout,
  AuthLink,
  AuthPage,
  AuthTitle,
} from '../../components'
import * as yup from 'yup'
import { CONTENT, PATHNAMES } from '../../utils'

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
      validationSchema: yup.object({
        post: yup
          .string()
          .email(CONTENT.POST_INCORRECT)
          .required(CONTENT.IS_REQUIRED_TEXT),
        login: yup
          .string()
          .min(2, CONTENT.MIN_LENGTH)
          .matches(
            /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
            CONTENT.FORBIDDEN_SYMBOL
          )
          .required(CONTENT.IS_REQUIRED_TEXT),
        name: yup
          .string()
          .matches(/^[A-ZА-Я][a-zа-я-]+$/, CONTENT.FORBIDDEN_SYMBOL)
          .required(CONTENT.IS_REQUIRED_TEXT),
        surname: yup
          .string()
          .matches(/^[A-ZА-Я][a-zа-я-]+$/, CONTENT.FORBIDDEN_SYMBOL)
          .required(CONTENT.IS_REQUIRED_TEXT),
        phone: yup
          .string()
          .min(3, CONTENT.MIN_LENGTH)
          .max(14, CONTENT.MAX_LENGTH)
          .matches(/^\+?[1-9]{1}[0-9]+$/, CONTENT.FORBIDDEN_SYMBOL)
          .required(CONTENT.IS_REQUIRED_TEXT),
        password: yup
          .string()
          .min(8, CONTENT.PASSWORD_MIN)
          .max(40, CONTENT.MAX_LENGTH)
          .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
            CONTENT.PASSWORD_SYMBOL
          )
          .required(CONTENT.IS_REQUIRED_TEXT),
      }),
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
