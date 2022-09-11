import { ApiClient } from './ApiClient'
import { API } from '../utils/constants'

type TokenModel = {
  token_type: string
  access_token: string
}

type SignInDto = {
  login: string
  password: string
}

export class UserService {
  constructor(private readonly apiClient: ApiClient) {}

  signIn = async (values: SignInDto) =>
    this.apiClient.defaultService
      .post<TokenModel>(API.SIGN_IN, values)
      .then(res => res.data)
}
