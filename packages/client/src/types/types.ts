type ButtonEnum = 'submit' | 'reset' | 'button'

type DarkModeType = {
  darkMode: boolean
}

type FormProps = {
  onSubmit: () => void
}

type SigninFormRequest = {
  login: string
  password: string
}

type SigninFormResponse = {
  reason?: string
}

type UserInfoDTO = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

type SignupFormResponse = {
  reason?: string
  id?: number
}

export type {
  ButtonEnum,
  DarkModeType,
  FormProps,
  SigninFormRequest,
  SigninFormResponse,
  UserInfoDTO,
  SignupFormResponse,
}
