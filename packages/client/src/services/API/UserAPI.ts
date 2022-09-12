import { Axios } from './Axios'
import { API, PATHNAMES } from '../../utils/constants'
import { SignUpPayload } from './types'

export class UserAPI {
  static signup(props: SignUpPayload) {
    return Axios.post(API.SIGNUP, props)
      .then(() => {
        window.location.href = PATHNAMES.MAIN
      })
      .catch(error => {
        if (error.response.data.reason === 'User already in system') {
          window.location.href = PATHNAMES.MAIN
        } else {
          throw error
        }
      })
  }
}
