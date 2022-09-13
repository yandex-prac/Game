import axios from 'axios'
import { API, PATHNAMES } from '@/utils'
import { AxiosErrorExtended } from './types'
import { useNavigateCustom } from '@/hooks'

const Axios = axios.create({
  baseURL: API.API_BASE_URL,
  withCredentials: true,
})

Axios.interceptors.response.use(
  response => response,
  error => {
    switch (error.response.status) {
      case 401:
        useNavigateCustom(PATHNAMES.SIGNIN)
        return
      case 404:
        useNavigateCustom(PATHNAMES.ERROR_404)
        return
    }

    throw <AxiosErrorExtended>error
  }
)

export { Axios }
