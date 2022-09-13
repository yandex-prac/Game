import * as yup from 'yup'
import { CONTENT } from './index'

const validPasswordEdit = yup.object({
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
})

const validProfileEdit = yup.object({
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
})

const validSignUp = yup.object({
  post: yup
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
})

const validSignIn = yup.object({
  login: yup
    .string()
    .min(2, CONTENT.MIN_LENGTH)
    .matches(
      /(?!^\d+$)^[A-ZА-Яa-zа-я][a-zа-я-_0-9]+$/,
      CONTENT.FORBIDDEN_SYMBOL
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
})

export { validPasswordEdit, validProfileEdit, validSignUp, validSignIn }
