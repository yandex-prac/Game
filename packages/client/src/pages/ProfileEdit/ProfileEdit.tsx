import React, { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { BaseLayout, ProfileImage, Button } from '../../components'
import { CONTENT } from '../../utils/constants'
import {
  ProfilePage,
  ProfileForm,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
} from '../../components/styledComponents/Profile'

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
      validationSchema: yup.object({
        mail: yup
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
        nickname: yup
          .string()
          .min(2, CONTENT.MIN_LENGTH)
          .matches(
            /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
            CONTENT.FORBIDDEN_SYMBOL
          )
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
    <BaseLayout>
      <ProfilePage>
        <ProfileImage />
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileUl>
            <ProfileLi>
              <ProfileLabel htmlFor="mail">{CONTENT.MAIL}</ProfileLabel>
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
              <ProfileLabel htmlFor="login">{CONTENT.LOGIN}</ProfileLabel>
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
              <ProfileLabel htmlFor="name">{CONTENT.NAME}</ProfileLabel>
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
              <ProfileLabel htmlFor="surname">{CONTENT.SURNAME}</ProfileLabel>
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
              <ProfileLabel htmlFor="nickname">{CONTENT.NICKNAME}</ProfileLabel>
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
              <ProfileLabel htmlFor="phone">{CONTENT.PHONE}</ProfileLabel>
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
          <Button type="submit" text={CONTENT.SAVE} />
        </ProfileForm>
      </ProfilePage>
    </BaseLayout>
  )
})
