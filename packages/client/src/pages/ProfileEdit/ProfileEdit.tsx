import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import {
  BaseLayout,
  ProfileImage,
  ProfilePage,
  ProfileForm,
  ProfileUl,
  ProfileLi,
  ProfileLabel,
  ProfileInput,
  Error,
  WrapButtons,
  Button,
} from '@/components'
import { validProfileEdit, PATHNAMES } from '@/utils'
import { useCustomIntl, useSnackbar } from '@/hooks'
import { DarkModeType, UserInfoDTO } from '@/types'
import { WithAuth } from '@/hoc'
import { useGetUserInfoMutation, useChangeUserProfileMutation } from '@/store'

const ProfileEdit = memo(({ darkMode }: DarkModeType) => {
  const navigate = useNavigate()
  const [
    changeTrigger,
    { isSuccess: isUserInfoChangesSuccess, isError, isLoading },
  ] = useChangeUserProfileMutation()

  useSnackbar({ isSuccess: isUserInfoChangesSuccess, isError, isLoading })

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setValues,
  } = useFormik({
    initialValues: {
      email: '',
      login: '',
      first_name: '',
      second_name: '',
      display_name: '',
      phone: '',
    },
    onSubmit: (values: UserInfoDTO) => {
      changeTrigger(values)
    },
    validationSchema: validProfileEdit(),
  })

  const [userInfoTrigger, { data, isSuccess }] = useGetUserInfoMutation()

  useEffect(() => {
    userInfoTrigger(null).then(result => {
      if (result.data) {
        const data: Record<string, string> = {}

        for (const [key, value] of Object.entries(result.data)) {
          data[key] = value || ''
        }

        setValues(data, false)
      }
    })
  }, [])

  return (
    <BaseLayout>
      {isSuccess && (
        <>
          <ProfilePage darkMode={darkMode} isNotDisabled>
            <ProfileImage imgLink={data?.avatar} />
            <ProfileForm onSubmit={handleSubmit}>
              <ProfileUl>
                <ProfileLi>
                  <ProfileLabel htmlFor="mail">
                    {useCustomIntl('MAIL')}
                  </ProfileLabel>
                  <ProfileInput
                    id="mail"
                    name="mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.email && errors.email && <Error>{errors.email}</Error>}

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
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.first_name && errors.first_name && (
                  <Error>{errors.first_name}</Error>
                )}

                <ProfileLi>
                  <ProfileLabel htmlFor="surname">
                    {useCustomIntl('SURNAME')}
                  </ProfileLabel>
                  <ProfileInput
                    id="surname"
                    name="surname"
                    value={values.second_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.second_name && errors.second_name && (
                  <Error>{errors.second_name}</Error>
                )}

                <ProfileLi>
                  <ProfileLabel htmlFor="nickname">
                    {useCustomIntl('NICKNAME')}
                  </ProfileLabel>
                  <ProfileInput
                    id="nickname"
                    name="nickname"
                    value={values.display_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.display_name && errors.display_name && (
                  <Error>{errors.display_name}</Error>
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
              <WrapButtons>
                <Button
                  onClick={() => navigate(PATHNAMES.PROFILE)}
                  type="button"
                  textIntl="BACK"
                />
                <Button type="submit" textIntl="SAVE" />
              </WrapButtons>
            </ProfileForm>
          </ProfilePage>
        </>
      )}
    </BaseLayout>
  )
})

const withProfileEdit = WithAuth(ProfileEdit)

export { withProfileEdit as ProfileEdit }
