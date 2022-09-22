import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '@/utils'
import { ProfileDTO, UserInfoDTO } from '@/types'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.API_BASE_URL }),
  endpoints: builder => ({
    getUserById: builder.query<ProfileDTO, number>({
      query: id => `${API.GET_USER_BY_ID}/${id}`,
    }),
    changeUserProfile: builder.mutation<ProfileDTO, UserInfoDTO>({
      query: payload => ({
        url: API.CHANGE_USER_PROFILE,
        method: 'PUT',
        body: payload,
      }),
    }),
    changeUserAvatar: builder.mutation<ProfileDTO, string>({
      query: payload => ({
        url: API.CHANGE_USER_AVATAR,
        method: 'PUT',
        body: payload,
      }),
    }),
  }),
})

export const { useLazyGetUserByIdQuery } = profileApi
