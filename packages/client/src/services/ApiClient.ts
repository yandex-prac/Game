import axios, { AxiosStatic } from 'axios'

export class ApiClient {
  constructor(private _client: AxiosStatic = axios) {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const win: Window = window
        switch (error.response.status) {
          case 401:
            win.location = '/'
            break
          case 404:
            win.location = '/error404'
            break
          default:
            win.location = '/error'
        }
      }
    )
  }

  get defaultService() {
    this._client.defaults.baseURL = process.env.REACT_APP_SERVICE_URL
    return this._client
  }

  private get client() {
    return this._client
  }

}
