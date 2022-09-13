import React, { memo } from 'react'
import { useFormik } from 'formik'
import {
  BaseLayout,
  ProfileImage,
  Button,
  ProfilePage,
  ProfileForm,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
} from '@/components'
import { validProfileEdit as validationSchema } from '@/utils'
import { useCustomIntl } from '@/hooks'

export const ProfileEdit = memo(() => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        mail: '',
        login: '',
        name: '',
        surname: '',
        nickname: '',
        phone: '',
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
              <ProfileLabel htmlFor="mail">
                {useCustomIntl('MAIL')}
              </ProfileLabel>
              <ProfileInput
                id="mail"
                name="mail"
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.mail && errors.mail && <Error>{errors.mail}</Error>}

            <ProfileLi>
              <ProfileLabel htmlFor="login">
                {useCustomIntl('LOGIN')}
              </ProfileLabel>
              <ProfileInput
                id="login"
                name="login"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.login && errors.login && <Error>{errors.login}</Error>}

            <ProfileLi>
              <ProfileLabel htmlFor="name">
                {useCustomIntl('NAME')}
              </ProfileLabel>
              <ProfileInput
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.name && errors.name && <Error>{errors.name}</Error>}

            <ProfileLi>
              <ProfileLabel htmlFor="surname">
                {useCustomIntl('SURNAME')}
              </ProfileLabel>
              <ProfileInput
                id="surname"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.surname && errors.surname && (
              <Error>{errors.surname}</Error>
            )}

            <ProfileLi>
              <ProfileLabel htmlFor="nickname">
                {useCustomIntl('NICKNAME')}
              </ProfileLabel>
              <ProfileInput
                id="nickname"
                name="nickname"
                value={values.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.nickname && errors.nickname && (
              <Error>{errors.nickname}</Error>
            )}

            <ProfileLi>
              <ProfileLabel htmlFor="phone">
                {useCustomIntl('PHONE')}
              </ProfileLabel>
              <ProfileInput
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
          </ProfileUl>
          <Button type="submit" text={'SAVE'} />
        </ProfileForm>
      </ProfilePage>
    </BaseLayout>
  )
})
