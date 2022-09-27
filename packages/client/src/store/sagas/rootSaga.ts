import { watchUser } from './auth'

export function* rootSaga() {
  yield watchUser()
}
