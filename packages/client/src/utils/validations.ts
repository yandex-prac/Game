import * as yup from 'yup'
import { useCustomIntl } from '@/hooks'

const validPasswordEdit = () =>
  yup.object({
    oldPassword: yup
      .string()
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    password: yup
      .string()
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
  })

const validProfileEdit = () =>
  yup.object({
    mail: yup
      .string()
      .email(useCustomIntl('POST_INCORRECT'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    login: yup
      .string()
      .min(2, useCustomIntl('MIN_LENGTH'))
      .matches(
        /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
        useCustomIntl('FORBIDDEN_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    name: yup
      .string()
      .matches(/^[A-ZА-Я][a-zа-я-]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    surname: yup
      .string()
      .matches(/^[A-ZА-Я][a-zа-я-]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    nickname: yup
      .string()
      .min(2, useCustomIntl('MIN_LENGTH'))
      .matches(
        /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
        useCustomIntl('FORBIDDEN_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    phone: yup
      .string()
      .min(3, useCustomIntl('MIN_LENGTH'))
      .max(14, useCustomIntl('MAX_LENGTH'))
      .matches(/^\+?[1-9]{1}[0-9]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    password: yup
      .string()
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
  })

const validSignUp = () =>
  yup.object({
    email: yup
      .string()
      .email(useCustomIntl('POST_INCORRECT'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    login: yup
      .string()
      .min(2, useCustomIntl('MIN_LENGTH'))
      .matches(
        /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
        useCustomIntl('FORBIDDEN_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    first_name: yup
      .string()
      .matches(/^[A-ZА-Я][a-zа-я-]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    second_name: yup
      .string()
      .matches(/^[A-ZА-Я][a-zа-я-]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    phone: yup
      .string()
      .min(3, useCustomIntl('MIN_LENGTH'))
      .max(14, useCustomIntl('MAX_LENGTH'))
      .matches(/^\+?[1-9]{1}[0-9]+$/, useCustomIntl('FORBIDDEN_SYMBOL'))
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    password: yup
      .string()
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
  })

const validSignIn = () =>
  yup.object({
    login: yup
      .string()
      .min(2, useCustomIntl('MIN_LENGTH'))
      .matches(
        /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
        useCustomIntl('FORBIDDEN_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
    password: yup
      .string()
      .min(8, useCustomIntl('PASSWORD_MIN'))
      .max(40, useCustomIntl('MAX_LENGTH'))
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/,
        useCustomIntl('PASSWORD_SYMBOL')
      )
      .required(useCustomIntl('IS_REQUIRED_TEXT')),
  })

export { validPasswordEdit, validProfileEdit, validSignUp, validSignIn }
