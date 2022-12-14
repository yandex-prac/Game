import { AxiosError, AxiosResponse } from 'axios'

type SignUpPayload = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

type AxiosErrorExtended = {
  response: {
    data: {
      reason: string
    }
  } & AxiosResponse
} & AxiosError

export type { SignUpPayload, AxiosErrorExtended }
