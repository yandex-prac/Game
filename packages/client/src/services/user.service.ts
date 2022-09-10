import { ApiClient } from './ApiClient'

type TokenModel = {
  token_type: string
  access_token: string
}

export type SignInDto = {
  login: string
  password: string
}

export class UserService {
  constructor(
    private readonly apiClient: ApiClient
  ) {
  }

  signIn = async (values: SignInDto) =>
    this.apiClient.defaultService.post<TokenModel>('/auth', values).then((res) => res.data)

}
