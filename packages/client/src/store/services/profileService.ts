import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import { ProfileDTO } from '@/types'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  endpoints: builder => ({
    getUserById: builder.query<ProfileDTO, number>({
      query: id => `${API.GET_USER_BY_ID}/${id}`,
    }),
  }),
})

export const { useLazyGetUserByIdQuery } = profileApi
