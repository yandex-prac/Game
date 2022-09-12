import React, { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { BaseLayout } from '../../components'
import { CONTENT } from '../../utils/constants'
import { ProfileImage } from '../../components'
import { Button } from '../../components'
import {
  ProfilePage,
  ProfileForm,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
} from './StyledComponents'

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
              <ProfileLabel>{CONTENT.MAIL}</ProfileLabel>
              <ProfileInput
                name="mail"
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.mail && errors.mail ? (
              <Error>{errors.mail}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.LOGIN}</ProfileLabel>
              <ProfileInput
                name="login"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.login && errors.login ? (
              <Error>{errors.login}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.NAME}</ProfileLabel>
              <ProfileInput
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.name && errors.name ? (
              <Error>{errors.name}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.SURNAME}</ProfileLabel>
              <ProfileInput
                name="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.surname && errors.surname ? (
              <Error>{errors.surname}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.NICKNAME}</ProfileLabel>
              <ProfileInput
                name="nickname"
                value={values.nickname}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.nickname && errors.nickname ? (
              <Error>{errors.nickname}</Error>
            ) : undefined}

            <ProfileLi>
              <ProfileLabel>{CONTENT.PHONE}</ProfileLabel>
              <ProfileInput
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}></ProfileInput>
            </ProfileLi>
            {touched.phone && errors.phone ? (
              <Error>{errors.phone}</Error>
            ) : undefined}
          </ProfileUl>
          <Button type="submit" text={CONTENT.SAVE} />
        </ProfileForm>
      </ProfilePage>
    </BaseLayout>
  )
})
