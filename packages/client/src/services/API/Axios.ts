import axios from 'axios'
import { API, PATHNAMES } from '../../utils/constants'
import { AxiosErrorExtended } from './types'

const Axios = axios.create({
  baseURL: API.API_BASE_URL,
  withCredentials: true,
});

Axios.interceptors.response.use(
  response => response,
  error => {
    switch (error.response.status) {
      case 401:
        window.location.href = PATHNAMES.SIGNIN
        return
      case 404:
        window.location.href = PATHNAMES.ERROR_404
        return
    }

    throw <AxiosErrorExtended>error
  }
)

export { Axios }
