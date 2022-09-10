import React from 'react'
import { Input } from '../../components/ui/Input/Input'
import { FormikValues, useFormik } from 'formik'
import {
  AuthBtn,
  AuthForm,
  AuthLayout,
  AuthLink,
  AuthPage,
  AuthTitle,
} from '../../components/styledComponents/Auth'
import * as yup from 'yup'
import { config } from '../../utils/constants'

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
          .email(config.postIncorrect)
          .required(config.isRequiredText),
        login: yup
          .string()
          .min(2, config.minLength)
          .matches(
            /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
            config.forbiddenSymbols
          )
          .required(config.isRequiredText),
        name: yup
          .string()
          .matches(/^[A-ZА-Я][a-zа-я-]+$/, config.forbiddenSymbols)
          .required(config.isRequiredText),
        surname: yup
          .string()
          .matches(/^[A-ZА-Я][a-zа-я-]+$/, config.forbiddenSymbols)
          .required(config.isRequiredText),
        phone: yup
          .string()
          .min(3, config.minLength)
          .max(14, config.maxLength)
          .matches(/^\+?[1-9]{1}[0-9]+$/, config.forbiddenSymbols)
          .required(config.isRequiredText),
        password: yup
          .string()
          .min(8, config.passwordMin)
          .max(40, config.maxLength)
          .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
            config.passwordSymbols
          )
          .required(config.isRequiredText),
      }),
    })

  return (
    <AuthPage>
      <AuthLayout maxheight={615}>
        <AuthTitle>{config.register}</AuthTitle>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            label={config.post}
            value={values.post}
            name="post"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.post && errors.post ? errors.post : undefined}
          />
          <Input
            label={config.login}
            value={values.login}
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.login && errors.login ? errors.login : undefined}
          />
          <Input
            label={config.name}
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : undefined}
          />
          <Input
            label={config.surname}
            value={values.surname}
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.surname && errors.surname ? errors.surname : undefined
            }
          />
          <Input
            label={config.phone}
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone ? errors.phone : undefined}
          />
          <Input
            label={config.password}
            value={values.password}
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.password && errors.password ? errors.password : undefined
            }
          />
          <AuthBtn type="submit" text="Зарегистрироваться" margintop={114} />
          <AuthLink text={config.toLogin} to="/sign-in" />
        </AuthForm>
      </AuthLayout>
    </AuthPage>
  )
}
