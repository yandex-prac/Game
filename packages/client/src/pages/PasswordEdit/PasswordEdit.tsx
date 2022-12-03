import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import {
  BaseLayout,
  ProfileImage,
  ProfilePage,
  ProfileUl,
  ProfileLi,
  ProfileInput,
  ProfileLabel,
  ProfileForm,
  Error,
  WrapButtons,
  Button,
} from '@/components'
import { validPasswordEdit, PATHNAMES } from '@/utils'
import { useCustomIntl } from '@/hooks'
import { DarkModeType, EditPasswordDTO } from '@/types'
import { WithAuth } from '@/hoc'
import { useChangeUserPassowordMutation } from '@/store'
const PasswordEdit = memo(({ darkMode }: DarkModeType) => {
  const navigate = useNavigate()
  const [changeTrigger, { isSuccess: isPasswordChangesSuccess, isLoading }] =
    useChangeUserPassowordMutation()

  useEffect(() => {
    if (isPasswordChangesSuccess) {
      alert('Пароль успешно изменен')
      navigate(PATHNAMES.PROFILE)
    }
  }, [isLoading])

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
      },
      onSubmit: ({ oldPassword, newPassword }: EditPasswordDTO) => {
        changeTrigger({ oldPassword, newPassword })
      },
      validationSchema: validPasswordEdit(),
    })
  return (
    <BaseLayout>
      <ProfilePage darkMode={darkMode} isNotDisabled>
        <ProfileImage />
        <ProfileForm onSubmit={handleSubmit}>
          <ProfileUl>
            <ProfileLi>
              <ProfileLabel htmlFor="oldPassword">
                {useCustomIntl('OLD_PASSWORD')}
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
              <ProfileLabel htmlFor="newPassword">
                {useCustomIntl('NEW_PASSWORD')}
              </ProfileLabel>
              <ProfileInput
                id="newPassword"
                name="newPassword"
                type="password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ProfileLi>
            {touched.newPassword && errors.newPassword && (
              <Error>{errors.newPassword}</Error>
            )}

            <ProfileLi>
              <ProfileLabel htmlFor="repeatPassword">
                {useCustomIntl('REPEAT_PASSWORD')}
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
    </BaseLayout>
  )
})

const withPasswordEdit = WithAuth(PasswordEdit)

export { withPasswordEdit as PasswordEdit }
