import { Axios } from './Axios'
import { API } from '../../utils/constants'
import { SignUpProps } from './types'

export class UserAPI {
  static signup(props: SignUpProps) {
    return Axios.post(API.SIGNUP, props)
  }
}
