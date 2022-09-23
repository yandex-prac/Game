import { takeLatest } from 'redux-saga/effects'
import { SigninFormRequest } from '@/types'

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
