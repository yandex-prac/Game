import React, { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { BaseLayout } from '../../components'
import { CONTENT } from '../../utils/constants'
import { Button } from '../../components/ui/Button'
import { ProfileImage } from '../../components'
import {
  ProfilePage,
  ProfileUl,
  ProfileLi,
  ProfileInput,
  ProfileLabel,
  PasswordForm,
  Error,
} from './StyledComponents'

export const PasswordEdit = memo(() => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        oldPassword: '',
        password: '',
        repeatPassword: '',
      },
      onSubmit: values => {
        console.log(values)
      },
      validationSchema: yup.object({
        oldPassword: yup
          .string()
          .min(8, CONTENT.PASSWORD_MIN)
          .max(40, CONTENT.MAX_LENGTH)
          .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
            CONTENT.PASSWORD_SYMBOL
          )
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
        repeatPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
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
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <PasswordForm onSubmit={handleSubmit}>
          <ProfileUl>
            <ProfileLi>
              <ProfileLabel>{CONTENT.OLD_PASSWORD}</ProfileLabel>
              <ProfileInput
                name="oldPassword"
                type="password"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.oldPassword && errors.oldPassword ? (
              <Error>{errors.oldPassword}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.NEW_PASSWORD}</ProfileLabel>
              <ProfileInput
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.password && errors.password ? (
              <Error>{errors.password}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.REPEAT_PASSWORD}</ProfileLabel>
              <ProfileInput
                name="repeatPassword"
                type="password"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.repeatPassword && errors.repeatPassword ? (
              <Error>{errors.repeatPassword}</Error>
            ) : undefined}
          </ProfileUl>
          <Button type="submit" text={CONTENT.SAVE} />
        </PasswordForm>
      </ProfilePage>
    </BaseLayout>
  )
})
