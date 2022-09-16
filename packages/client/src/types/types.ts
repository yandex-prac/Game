type ButtonEnum = 'submit' | 'reset' | 'button'

type DarkModeType = {
  darkMode: boolean
}

type FormProps = {
  onSubmit: () => void
}

type SigninDTO = {
  login: string
  password: string
}

type SigninResponseDTO = {
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

type SignupResponseDTO = {
  reason?: string
  id?: number
}

export type {
  ButtonEnum,
  DarkModeType,
  FormProps,
  SigninDTO,
  SigninResponseDTO,
  UserInfoDTO,
  SignupResponseDTO,
}
