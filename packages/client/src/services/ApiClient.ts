import axios, { AxiosStatic } from 'axios'

export class ApiClient {
  constructor(private _client: AxiosStatic = axios) {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const win: Window = window
        if (error.response.status === 401) {
          win.location = '/'
        } else if (error.response.status === 404) {
          win.location = '/error404'
        } else {
          win.location = '/error'
        }
      }
    )
  }

  private get client() {
    return this._client
  }

  get defaultService() {
    this._client.defaults.baseURL = process.env.REACT_APP_SERVICE_URL
    return this._client
  }

}
