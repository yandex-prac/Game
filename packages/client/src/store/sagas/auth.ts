import { takeLatest } from 'redux-saga/effects'
import { SigninDTO } from '@/types'

type WorkerUserSiginType = {
  payload: SigninDTO
  type: string
}

function* workerUserSigin({ payload }: WorkerUserSiginType) {
  yield console.log(payload)
}

export function* watchUser() {
  yield takeLatest('SIGNIN', workerUserSigin)
}
