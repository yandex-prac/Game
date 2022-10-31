import { UserInfoDTO } from '@/types'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

const isUserInfoDTO = (
  b: { data: UserInfoDTO } | { error: FetchBaseQueryError | SerializedError }
): b is { data: UserInfoDTO } => {
  return (b as { data: UserInfoDTO }).data !== undefined
}

export { isUserInfoDTO }
