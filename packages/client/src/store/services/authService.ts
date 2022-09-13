import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import { SigninFormResponse, SigninFormRequest } from '@/types'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  tagTypes: [],
  endpoints: builder => ({
    signin: builder.query<SigninFormResponse, SigninFormRequest>({
      query: payload => ({
        url: '/auth/signin',
        payload,
      }),
    }),
  }),
})

export const { useLazySigninQuery } = authAPI