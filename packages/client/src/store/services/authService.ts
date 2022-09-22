import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, METHODS } from '@/utils'
import {
  SigninResponseDTO,
  SigninDTO,
  UserInfoDTO,
  SignupResponseDTO,
} from '@/types'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  endpoints: builder => ({
    signin: builder.query<SigninResponseDTO, SigninDTO>({
      query: payload => ({
        url: API.SIGNIN,
        method: METHODS.POST,
        body: payload,
      }),
    }),
    signup: builder.mutation<SignupResponseDTO, UserInfoDTO>({
      query: payload => ({
        url: API.SIGNUP,
        method: METHODS.POST,
        body: payload,
      }),
    }),
    signout: builder.query({
      query: () => ({
        url: API.SIGNOUT,
        method: METHODS.POST,
      }),
    }),
    getUserInfo: builder.query<UserInfoDTO, unknown>({
      query: () => API.GET_USER_INFO,
    }),
  }),
})

export const { useLazySigninQuery, useSignupMutation } = authAPI
