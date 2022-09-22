import { takeLatest } from 'redux-saga/effects'
import { store } from '@/store'
import { SigninFormRequest } from '@/types'

const SIGNIN = 'SIGNIN'

type WorkerUserSiginType = {
  payload: SigninFormRequest
  type: string
}

function* workerUserSigin({ payload }: WorkerUserSiginType) {
  yield console.log(payload)
}

export function* watchUser() {
  yield takeLatest('SIGNIN', workerUserSigin)
}

export const signinAC = (payload: SigninFormRequest) =>
  store.dispatch({ type: SIGNIN, payload })
