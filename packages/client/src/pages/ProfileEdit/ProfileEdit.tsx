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
import { validProfileEdit, PATHNAMES, isUserInfoDTO } from '@/utils'
import { useCustomIntl, useSnackbar } from '@/hooks'
import { DarkModeType, UserInfoDTO } from '@/types'
import { WithAuth } from '@/hoc'
import { useGetUserInfoMutation, useChangeUserProfileMutation } from '@/store'

const ProfileEdit = memo(({ darkMode }: DarkModeType) => {
  const navigate = useNavigate()
  const [changeTrigger, { isSuccess: isUserInfoChangesSuccess, isLoading }] =
    useChangeUserProfileMutation()

  useEffect(() => {
    if (isUserInfoChangesSuccess) {
      alert('Данные пользователя успешно сохранены')
      navigate(PATHNAMES.PROFILE)
    }
  }, [isLoading])

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
      if (isUserInfoDTO(result)) {
        setValues(result.data, false)
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
                  <ProfileLabel htmlFor="email">
                    {useCustomIntl('MAIL')}
                  </ProfileLabel>
                  <ProfileInput
                    id="email"
                    name="email"
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
                  <ProfileLabel htmlFor="first_name">
                    {useCustomIntl('NAME')}
                  </ProfileLabel>
                  <ProfileInput
                    id="first_name"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.first_name && errors.first_name && (
                  <Error>{errors.first_name}</Error>
                )}

                <ProfileLi>
                  <ProfileLabel htmlFor="second_name">
                    {useCustomIntl('SURNAME')}
                  </ProfileLabel>
                  <ProfileInput
                    id="second_name"
                    name="second_name"
                    value={values.second_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ProfileLi>
                {touched.second_name && errors.second_name && (
                  <Error>{errors.second_name}</Error>
                )}

                <ProfileLi>
                  <ProfileLabel htmlFor="display_name">
                    {useCustomIntl('NICKNAME')}
                  </ProfileLabel>
                  <ProfileInput
                    id="display_name"
                    name="display_name"
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
