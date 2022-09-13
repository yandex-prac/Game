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

export type {
  ButtonEnum,
  DarkModeType,
  FormProps,
  SigninFormRequest,
  SigninFormResponse,
}
