import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import {
  SigninFormResponse,
  SigninFormRequest,
  SignupFormRequest,
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
    signup: builder.mutation<SignupFormResponse, SignupFormRequest>({
      query: payload => ({
        url: API.SIGNUP,
        payload,
      }),
    }),
    signout: builder.query({
      query: () => API.SIGNUP,
    }),
  }),
})

export const { useLazySigninQuery, useSignupMutation } = authAPI
