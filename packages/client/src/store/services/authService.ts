import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import {
  SigninResponseDTO,
  SigninDTO,
  UserInfoDTO,
  SignupResponseDTO,
} from '@/types'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL, credentials: 'include' }),
  endpoints: builder => ({
    signin: builder.mutation<SigninResponseDTO, SigninDTO>({
      query: payload => {
        return {
          url: API.SIGNIN,
          method: 'POST',
          body: payload,
          responseHandler: response =>
            response.status === 200 ? response.text() : response.json(),
        }
      },
    }),
    signup: builder.mutation<SignupResponseDTO, UserInfoDTO>({
      query: payload => {
        return {
          url: API.SIGNUP,
          method: 'POST',
          body: payload,
          responseHandler: response =>
            response.status === 200 ? response.text() : response.json(),
        }
      },
    }),
    signout: builder.query({
      query: () => API.SIGNUP,
    }),
    getUserInfo: builder.query<UserInfoDTO, unknown>({
      query: () => API.GET_USER_INFO,
    }),
  }),
})

export const { useSigninMutation, useSignupMutation } = authAPI
