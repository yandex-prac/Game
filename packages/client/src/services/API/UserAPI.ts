import { Axios } from './Axios'
import { API, PATHNAMES } from '../../utils/constants'
import { SignUpPayload } from './types'
import { useNavigateCustom } from '@/hooks'

export class UserAPI {
  static signup(props: SignUpPayload) {
    return Axios.post(API.SIGNUP, props)
      .then(() => {
        useNavigateCustom(PATHNAMES.MAIN)
      })
      .catch(error => {
        if (error.response.data.reason === 'User already in system') {
          useNavigateCustom(PATHNAMES.MAIN)
        } else {
          throw error
        }
      })
  }
}
