import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  endpoints: builder => ({
    signin: builder.query<any, any>({
      query: payload => ({
        url: '/auth/signin',
        payload,
      }),
    }),
  }),
})

export const { useLazySigninQuery } = authAPI
