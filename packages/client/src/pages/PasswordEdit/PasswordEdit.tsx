import React, { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { BaseLayout, ProfileImage, Button } from '../../components'
import { CONTENT } from '../../utils'
import {
  ProfilePage,
  ProfileUl,
  ProfileLi,
  ProfileInput,
  ProfileLabel,
  ProfileForm,
  Error,
} from '../../components/styledComponents/Profile'

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
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileUl>
            <ProfileLi>
              <ProfileLabel htmlFor="oldPassword">
                {CONTENT.OLD_PASSWORD}
              </ProfileLabel>
              <ProfileInput
                id="oldPassword"
                name="oldPassword"
                type="password"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.oldPassword && errors.oldPassword && (
              <Error>{errors.oldPassword}</Error>
            )}

            <ProfileLi>
              <ProfileLabel htmlFor="password">
                {CONTENT.NEW_PASSWORD}
              </ProfileLabel>
              <ProfileInput
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.password && errors.password && (
              <Error>{errors.password}</Error>
            )}

            <ProfileLi>
              <ProfileLabel htmlFor="repeatPassword">
                {CONTENT.REPEAT_PASSWORD}
              </ProfileLabel>
              <ProfileInput
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.repeatPassword && errors.repeatPassword && (
              <Error>{errors.repeatPassword}</Error>
            )}
          </ProfileUl>
          <Button type="submit" text={CONTENT.SAVE} />
        </ProfileForm>
      </ProfilePage>
    </BaseLayout>
  )
})
