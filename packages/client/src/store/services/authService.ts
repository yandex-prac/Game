import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import {
  SigninFormResponse,
  SigninFormRequest,
  UserInfoDTO,
  SignupFormResponse,
} from '@/types'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  endpoints: builder => ({
    signin: builder.query<SigninFormResponse, SigninFormRequest>({
      query: payload => ({
        url: API.SIGNIN,
        payload,
      }),
    }),
    signup: builder.mutation<SignupFormResponse, UserInfoDTO>({
      query: payload => ({
        url: API.SIGNUP,
        payload,
      }),
    }),
    signout: builder.query({
      query: () => API.SIGNUP,
    }),
    getUserInfo: builder.query<UserInfoDTO, unknown>({
      query: () => API.GET_USER_INFO,
    }),
  }),
})

export const { useLazySigninQuery, useSignupMutation } = authAPI
