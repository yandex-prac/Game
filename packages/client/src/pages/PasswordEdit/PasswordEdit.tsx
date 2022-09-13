import React, { memo } from 'react'
import { useFormik } from 'formik'
import {
  BaseLayout,
  ProfileImage,
  Button,
  ProfilePage,
  ProfileUl,
  ProfileLi,
  ProfileInput,
  ProfileLabel,
  ProfileForm,
  Error,
} from '../../components'
import { validPasswordEdit as validationSchema } from '../../utils'
import { useIntl } from 'react-intl'

export const PasswordEdit = memo(() => {
  const intl = useIntl()
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
      validationSchema,
    })
  return (
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileUl>
            <ProfileLi>
              <ProfileLabel htmlFor="oldPassword">
                {`${intl.messages.OLD_PASSWORD || ''}`}
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
                {`${intl.messages.NEW_PASSWORD || ''}`}
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
                {`${intl.messages.REPEAT_PASSWORD || ''}`}
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
          <Button type="submit" text={`${intl.messages.SAVE || ''}`} />
        </ProfileForm>
      </ProfilePage>
    </BaseLayout>
  )
})
